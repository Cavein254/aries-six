'use client';
import { useCreateNoteMutation } from '@/redux/api/services/notesApi';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

type Note = {
  authorid: string;
  title: string;
  subTitle: string;
  content: string;
  tags: string;
};
const initialState = {
  authorid: '',
  title: '',
  subTitle: '',
  content: '',
  tags: '',
};
export default function Page() {
  const { data: session, status } = useSession();
  const [note, setNote] = useState<Note>(initialState);
  const [createNote, { error, isLoading, isSuccess }] = useCreateNoteMutation();

  const handleSubmitNote = async (e) => {
    e.preventDefault();
    const newNote = {
      ...note,
      authorid: session?.token?.id,
    };
    console.log({ newNote });
    try {
      await createNote(newNote);
    } catch (err) {
      console.log(err);
    }
  };
  if (isSuccess === true) {
    // redirect('/dashboard');
  }

  return (
    <div>
      {status === 'authenticated' ? (
        <>
          <div>{error && <h1>{JSON.stringify(error.data)}</h1>}</div>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter title"
              onChange={(e) =>
                setNote({
                  ...note,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Sub Title</label>
            <input
              type="text"
              placeholder="Enter subtitle"
              onChange={(e) =>
                setNote({
                  ...note,
                  subTitle: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Content</label>
            <input
              type="text"
              placeholder="Enter Content"
              onChange={(e) =>
                setNote({
                  ...note,
                  content: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Tags</label>
            <input
              type="text"
              placeholder="Tags"
              onChange={(e) =>
                setNote({
                  ...note,
                  tags: e.target.value,
                })
              }
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSubmitNote}
              disabled={isLoading}
            >
              Submit
            </button>
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
