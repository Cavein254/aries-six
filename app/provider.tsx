import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

function AppSessionProvider({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default AppSessionProvider;
