import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const users = await prisma.user.findMany({});
  return res.json(users);
}
