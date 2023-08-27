'use client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

type Note = {
  authorid: string;
  title: string;
  subTitle: string;
  content: string;
  tags: string[];
};
const initialState = {
  authorid: '',
  title: '',
  subTitle: '',
  content: '',
  tags: [],
};
export default function Page() {
  const { data: session, status } = useSession();
  const [note, useNote] = useState<Note>(initialState);
  console.log(session);
  console.log({ status: status });

  return (
    <div>
      {status === 'authenticated' ? (
        <>
          <div>{error && <h1>{JSON.stringify(error.data)}</h1>}</div>
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
      ) : (
        <>
          <h1>You need to be logged in to view this page</h1>
        </>
      )}
    </div>
  );
}
