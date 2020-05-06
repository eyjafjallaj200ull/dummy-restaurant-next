import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout"
import "../styles.css"

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <title>Best Restaurant Ever</title>
                <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </React.Fragment>
    )
  }

export default MyApp