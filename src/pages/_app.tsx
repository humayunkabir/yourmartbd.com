import 'styles/globals.css';
import 'styles/preloader.css';
import Preloader from 'components/Preloader';
import type { AppProps } from 'next/app';

function YourMartApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Preloader />
    </>
  );
}
export default YourMartApp;
