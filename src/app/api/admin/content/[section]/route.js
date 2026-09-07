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
 * Content is persisted in src/data/cms/<section>.json
 */

const CMS_DIR = path.join(process.cwd(), 'src', 'data', 'cms');
const ALLOWED_SECTIONS = ['hero', 'services', 'process', 'about', 'faq', 'contact', 'seo', 'projects'];

function getFilePath(section) {
  return path.join(CMS_DIR, `${section}.json`);
}

function isValidSection(section) {
  return ALLOWED_SECTIONS.includes(section) && /^[a-z]+$/.test(section);
}

export async function GET(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { section } = params;
  if (!isValidSection(section)) {
    return NextResponse.json({ error: 'Invalid section' }, { status: 400 });
  }

  const filePath = getFilePath(section);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Section not found' }, { status: 404 });
  }

  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { section } = params;
  if (!isValidSection(section)) {
    return NextResponse.json({ error: 'Invalid section' }, { status: 400 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const filePath = getFilePath(section);
  try {
    fs.mkdirSync(CMS_DIR, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8');
    return NextResponse.json({ success: true, section });
  } catch {
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
}
