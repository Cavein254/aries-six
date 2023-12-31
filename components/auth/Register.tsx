'use client';

import { useSignupMutation } from '@/redux/api/services/userApi';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useState } from 'react';

type UserData = {
  name: string;
  email: string;
  password: string;
};
const initialState = {
  name: '',
  email: '',
  password: '',
};
const Register = () => {
  const [userData, setUserData] = useState<UserData>(initialState);
  const [signup, { isLoading, isSuccess, error }] = useSignupMutation();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await signup(userData);
    } catch (err) {
      console.log(err);
    }
  };
  if (isSuccess === true) {
    redirect('/user/login');
  }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <div>{error && <h1>{JSON.stringify(error.data)}</h1>}</div>
        <div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              placeholder="username"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="aries@gmail.com"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="*******"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  password: e.target.value,
                })
              }
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
