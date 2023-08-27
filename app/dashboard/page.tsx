'use client';
import { useGetNotesQuery } from '@/redux/api/services/notesApi';
const dashboard = () => {
  const { data, isLoading, isError } = useGetNotesQuery(null);
  return <div>{JSON.stringify(data)}</div>;
};

export default dashboard;
