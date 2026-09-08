import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import path from 'path';
import fs from 'fs';

/**
 * CMS Content API — Dynamic route: /api/admin/content/[section]
 *
 * GET  /api/admin/content/:section  — Read section data (auth required)
 * PUT  /api/admin/content/:section  — Write section data (auth required)
 *
 * Storage strategy:
 *   1. If GITHUB_TOKEN + GITHUB_REPO are set → read/write via GitHub Contents API
 *      (changes commit directly to the repo → Vercel auto-redeploys)
 *   2. Fallback → local filesystem src/data/cms/<section>.json
 *      (works in local dev, but writes fail on Vercel read-only FS)
 */

const CMS_DIR = path.join(process.cwd(), 'src', 'data', 'cms');
const ALLOWED_SECTIONS = ['hero', 'services', 'process', 'about', 'faq', 'contact', 'seo', 'projects'];

// GitHub API config (set these in Vercel env vars)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO  = process.env.GITHUB_REPO;  // e.g. "innetcreations/IN_NET_CREATIONS"
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

function isValidSection(section) {
  return ALLOWED_SECTIONS.includes(section) && /^[a-z]+$/.test(section);
}

function getLocalFilePath(section) {
  return path.join(CMS_DIR, `${section}.json`);
}

function getGithubFilePath(section) {
  return `src/data/cms/${section}.json`;
}

// ── GitHub API helpers ────────────────────────────────────────

async function githubGet(section) {
  const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${getGithubFilePath(section)}?ref=${GITHUB_BRANCH}`;
  const res = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `GitHub GET failed: ${res.status}`);
  }
  const json = await res.json();
  // GitHub returns content as base64
  const content = Buffer.from(json.content, 'base64').toString('utf-8');
  return { data: JSON.parse(content), sha: json.sha };
}

async function githubPut(section, data, sha) {
  const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${getGithubFilePath(section)}`;
  const content = Buffer.from(JSON.stringify(data, null, 2) + '\n').toString('base64');
  const res = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `cms: update ${section} content`,
      content,
      sha,
      branch: GITHUB_BRANCH,
    }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `GitHub PUT failed: ${res.status}`);
  }
  return res.json();
}

// ── Local filesystem helpers ──────────────────────────────────

function localGet(section) {
  const filePath = getLocalFilePath(section);
  if (!fs.existsSync(filePath)) {
    throw new Error('Section not found');
  }
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

function localPut(section, data) {
  const filePath = getLocalFilePath(section);
  fs.mkdirSync(CMS_DIR, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
}

// ── Route Handlers ────────────────────────────────────────────

export async function GET(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const resolvedParams = await params;
  const section = resolvedParams?.section;
  if (!isValidSection(section)) {
    return NextResponse.json({ error: 'Invalid section' }, { status: 400 });
  }

  try {
    let data;
    if (GITHUB_TOKEN && GITHUB_REPO) {
      const result = await githubGet(section);
      data = result.data;
    } else {
      data = localGet(section);
    }
    return NextResponse.json(data);
  } catch (err) {
    // If GitHub file not found, fall back to local
    try {
      const data = localGet(section);
      return NextResponse.json(data);
    } catch {
      return NextResponse.json({ error: err.message || 'Failed to read content' }, { status: 500 });
    }
  }
}

export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const resolvedParams = await params;
  const section = resolvedParams?.section;
  if (!isValidSection(section)) {
    return NextResponse.json({ error: 'Invalid section' }, { status: 400 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  try {
    if (GITHUB_TOKEN && GITHUB_REPO) {
      // Get current SHA (needed for GitHub API update)
      let sha;
      try {
        const current = await githubGet(section);
        sha = current.sha;
      } catch {
        sha = undefined; // File doesn't exist yet — GitHub will create it
      }
      await githubPut(section, body, sha);
    } else {
      // Local dev fallback
      localPut(section, body);
    }
    return NextResponse.json({ success: true, section });
  } catch (err) {
    console.error(`CMS save error [${section}]:`, err);
    return NextResponse.json({ error: err.message || 'Failed to save content' }, { status: 500 });
  }
}
