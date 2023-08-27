'use client';

import { useSignupMutation } from '@/redux/api/services/userApi';
import Link from 'next/link';
import { useState } from 'react';

const Register = () => {
  // const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, { isError, isLoading, isSuccess }] = useSignupMutation();
  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    try {
      await signup(userData);
    } catch (err) {
      console.log({ 'Registration Error': err });
    }
  };
  console.log({ Success: isSuccess });
  console.log({ loading: isLoading });
  console.log({ erroris: isError });
  return (
    <div>
      <form onSubmit={handleRegister}>
        <div></div>
        <div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="aries@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" disabled={isLoading}>
              Register
            </button>
          </div>
        </div>
        <div>
          <Link href="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
