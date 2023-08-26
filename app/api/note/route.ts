import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const notes = await prisma.note.findMany({});
  return NextResponse.json(notes);
}
export async function POST(request: Request) {
  const res = await request.json();
  const { authorid, title, subTitle, content, tags } = res;
  try {
    const post = await prisma.note.create({
      data: {
        authorid,
        title,
        subTitle,
        content,
        tags,
      },
    });
  } catch (err) {
    return NextResponse.json(err);
  }
}
