import Link from "next/link"
import Head from "next/head";

const About = () => {
    return (
        <div>
            <Head>
                <title>About Us</title>
            </Head>
            <h1>We are awesome</h1>
            <p>We have great food and magical ambience.</p>
            <Link href="/"><a>Go back home - with a happy belly!</a></Link>
        </div>
    )
}

export default About;