'use client';

import { useSignupMutation } from '@/redux/api/services/userApi';
import Link from 'next/link';
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
  // const router = useRouter();
  const [userData, setUserData] = useState<UserData>(initialState);
  const [signup, { isError, isLoading, isSuccess, error, data }] =
    useSignupMutation();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await signup(userData);
    } catch (err) {
      console.log({ 'Registration Error': err });
    }
  };
  console.log({ Success: isSuccess });
  console.log({ loading: isLoading });
  console.log({ erroris: isError });
  console.log({ error: error });
  console.log({ data: data });
  return (
    <div>
      <form onSubmit={handleRegister}>
        <div>{error && <h1>{JSON.stringify(error)}</h1>}</div>
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
