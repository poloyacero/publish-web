import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from "next/head";
import { Provider } from 'next-auth/client'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
<Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   //  bootstrap CDN
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossOrigin="anonymous" 
/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
</Head>
<Provider session={pageProps.session}>
<Component {...pageProps} />
</Provider>
</>
  )
  
  
}

export default MyApp
