import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout"
import "../styles.css"

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <title>Best Restaurant Ever</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </React.Fragment>
    )
  }

export default MyApp