import '../styles/globals.css'
import 'bootswatch/dist/lux/bootstrap.min.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>JM portfolio</title>
        <meta name="description" content="Julian Mendez portfolio website"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
