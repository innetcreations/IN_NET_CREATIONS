import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import path from 'path';
import fs from 'fs';

/**
 * Image Upload API — POST /api/admin/upload
 *
 * Accepts multipart/form-data with a single file field named 'file'.
 * Saves the image to /public/uploads/ and returns the public URL.
 *
 * Allowed file types: JPEG, PNG, WebP, GIF, SVG.
 * Max file size: 5 MB.
 */

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let formData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Failed to parse form data' }, { status: 400 });
  }

  const file = formData.get('file');
  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: 'File type not allowed. Use JPEG, PNG, WebP, GIF, or SVG.' },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  if (buffer.length > MAX_SIZE_BYTES) {
    return NextResponse.json({ error: 'File too large. Maximum 5 MB.' }, { status: 400 });
  }

  // Safe filename: lowercase, alphanumeric, timestamp prefix
  const ext = file.name.split('.').pop().toLowerCase();
  const baseName = file.name
    .replace(/\.[^/.]+$/, '')
    .replace(/[^a-z0-9]/gi, '-')
    .toLowerCase()
    .slice(0, 40);
  const fileName = `${Date.now()}-${baseName}.${ext}`;
  const filePath = path.join(UPLOAD_DIR, fileName);

  try {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    fs.writeFileSync(filePath, buffer);
    return NextResponse.json({ url: `/uploads/${fileName}`, name: fileName });
  } catch {
    return NextResponse.json({ error: 'Failed to save file' }, { status: 500 });
  }
}
