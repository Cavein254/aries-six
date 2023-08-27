import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Note = {
  authorid: string;
  title: string;
  subTitle: string;
  content: string;
  tags: string;
};

export const notesApi = createApi({
  reducerPath: 'notesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXTAUTH_URL,
  }),
  endpoints: (builder) => ({
    getNotes: builder.query<Note[], null>({
      query: () => '/api/note',
    }),
    createNote: builder.mutation({
      query: (noteData: Note) => ({
        url: '/api/note',
        method: 'POST',
        body: noteData,
      }),
    }),
  }),
});

export const { useCreateNoteMutation, useGetNotesQuery } = notesApi;
