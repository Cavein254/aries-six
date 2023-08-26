import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

const bcrypt = require('bcryptjs');

export async function POST(request: Request) {
  const res = await request.json();
  const { name, email, password } = res;
  console.log(res);
  try {
    const hash = await bcrypt.hashSync(password, 6);
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hash,
      },
    });
    return NextResponse.json(user);
  } catch (err) {
    if (err.code === 'P2002') {
      return NextResponse.json(
        'The email or username is already registed try another',
        { status: 401 }
      );
    }
  }
}
