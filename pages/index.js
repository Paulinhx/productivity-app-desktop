index.js

import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import App from './_app';

export default function Home() {
  return (
    <>
      <Head>
        <title>Productivity App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={inter.className}>Productivity App</h1>
          <App />
        </div>
      </main>
    </>
  );
}


