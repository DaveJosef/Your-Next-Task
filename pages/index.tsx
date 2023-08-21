import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Main from './Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Next Task</title>
        <meta name="description" content="Your Next Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
