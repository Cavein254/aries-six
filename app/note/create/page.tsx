'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
export default function Page() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/user/login');
    },
  });
  console.log(session);
  console.log({ status: status });
  return (
    <>
      <h1>{session?.user?.email}</h1>
      <div>
        <label>Title</label>
        <input type="text" placeholder="Enter title" />
      </div>
      <div>
        <label>Sub Title</label>
        <input type="text" placeholder="Enter subtitle" />
      </div>
      <div>
        <label>Content</label>
        <input type="text" placeholder="Enter Content" />
      </div>
      <div>
        <label>Tags</label>
        <input type="text" placeholder="Tags" />
      </div>
    </>
  );
}
