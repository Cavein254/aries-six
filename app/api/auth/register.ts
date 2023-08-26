import prisma from '@/lib/prisma';
const bcrypt = require('bcryptjs');

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    console.log(req.body);

    try {
      const hash = await bcrypt.hashSync(password, 6);
      const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hash,
        },
      });
      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  } else {
    return res.json('Method not allowed');
  }
};
