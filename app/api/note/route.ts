import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const notes = await prisma.note.findMany({});
  return NextResponse.json(notes);
}
export async function POST(request: Request) {
  const res = await request.json();
  const { authorid, title, subTitle, content } = res;
  try {
    const post = await prisma.note.create({
      data: {
        authorid,
        title,
        subTitle,
        content,
      },
    });
    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json(err);
  }
}
export async function PUT(request: Request) {
  const res = await request.json();
  const { id, title, subTitle, content } = res;
  try {
    const post = await prisma.note.update({
      where: {
        id,
      },
      data: {
        title,
        subTitle,
        content,
      },
    });
    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function DELETE(request: Request) {
  const res = await request.json();
  const { id } = res;
  try {
    const post = await prisma.note.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json(err);
  }
}
