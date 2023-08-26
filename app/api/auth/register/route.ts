import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

const bcrypt = require('bcryptjs');

export async function POST(request: Request) {
  console.log('YYYYYYYYYYYYYYYYYYYYY');
  console.log('YYYYYYYYYYYYYYYYYYYYY');
  console.log('YYYYYYYYYYYYYYYYYYYYY');
  console.log('YYYYYYYYYYYYYYYYYYYYY');
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
    return NextResponse.json(err);
  }
  // if (req.method === 'POST') {
  //   console.log('Body body body');
  //   console.log(req.body);
  //   const { name, email, password } = req.body;
  //   console.log(req.body);

  //   try {
  //     const hash = await bcrypt.hashSync(password, 6);
  // const user = await prisma.user.create({
  //   data: {
  //     name: name,
  //     email: email,
  //     password: hash,
  //   },
  // });
  // return res.json(user);
  //   } catch (err) {
  //     return NextResponse.json(err);
  //   }
  // } else {
  //   return NextResponse.json('Method not allowed');
  // }
}
