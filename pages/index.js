import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';



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
<h1>Productivity App</h1>
<TodoList />
<PomodoroTimer />
<Calendar onEventSelect={handleEventSelect} />
</div>
</main>
</>
);
}




