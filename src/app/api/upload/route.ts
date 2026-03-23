import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Upload directly to Vercel Blob
    const blob = await put(file.name, file, {
      access: 'public', // Some stores require 'public', others 'private'
    }).catch(async (e) => {
      if (e.message.includes('private store')) {
        return await put(file.name, file, { access: 'private' as any });
      }
      throw e;
    });

    // Vercel Blob returns a direct URL (public or private depending on store)
    return NextResponse.json({ success: true, filepath: blob.url });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file. Ensure BLOB_READ_WRITE_TOKEN is set.' },
      { status: 500 }
    );
  }
}
