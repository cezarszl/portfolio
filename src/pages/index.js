import Hero from '@/components/hero';



import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>Cezary Szal - Web Developer</title>
                <meta name="description" content="Cezary Szal - Web Developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/favicon-32x32.png" />
            </Head>
            <div>
                <Hero />
            </div>
        </>
    );
};

export default Home;