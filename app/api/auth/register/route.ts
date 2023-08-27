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
    const newUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      image: user.image,
    };
    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    if (err.code === 'P2002') {
      return NextResponse.json(
        'The email or username is already registed try another',
        { status: 401 }
      );
    }
  }
}
