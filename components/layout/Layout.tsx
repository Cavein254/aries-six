import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>Testin grounds</h1>
      <main>{children}</main>
    </>
  );
}
