import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <link rel="stylesheet" href="./globals.css"/>
  </>
}

export default MyApp
