import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

/**
 * GET /api/admin/cms-status
 * Returns whether the GitHub storage backend is properly configured.
 * Used by the AdminShell to show a setup warning when env vars are missing.
 */
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const hasGithubToken = !!process.env.GITHUB_TOKEN;
  const hasGithubRepo  = !!process.env.GITHUB_REPO;

  return NextResponse.json({
    storageReady: hasGithubToken && hasGithubRepo,
    githubToken:  hasGithubToken,
    githubRepo:   hasGithubRepo,
    repo:         process.env.GITHUB_REPO || null,
  });
}
