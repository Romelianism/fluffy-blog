import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const url = "https://fluffy-blog.vercel.app/";
const title = "Fluffy's Awsome Blog About Him Self";
const description =
  "Chat with an AI that's powered by GPT-j. Talk with it, set parameters, ask questions, and twist words";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fluffy Blog</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />


        <meta property="fb:app_id" content="377261767145225" />

        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={"Fluffy Blog"} />
        <meta property="og:type" content={"website"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={url + "Computer Fluffy"} />
        <meta property="og:image:alt" content={description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@romelianism" />
        <meta name="twitter:description" content={description} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Fluffy&apos;s Blog!<br/>
          World&apos;s Best Polar Bear!
        </h1>
        <figure>
          <Image src="/Normal Fluffy.jpg" alt='Fluffy World&apos;s Best Polar Bear!' width={500} height={500}/>
        </figure>
        <p className={styles.description}>
          Fluffy is so great that he saved the world 5 times <br />
          Examples:
          <ol>
            <li className={styles.card}>
              He singlehandedly started the Green Revolution, preventing what would otherwise have been the <b>largest mass starvation in human history</b>.
            </li>
            <li className={styles.card}>
              When he was working in the soviet union as a lieutenant colonel of the Soviet Air Defence Forces he singlehandedly stopped a nuclear false alarm by doing so preventing what would otherwise <b>billions of deaths</b>.
            </li>
            <li className={styles.card}>
              When Fluffy Lacks went to american for Henrietta Lacks cancer treatment, he unwittingly made a tremendous contribution to science. <b>HE CURED CANCER!</b>
            </li>
            <li className={styles.card}>
              Before he saved the world from Planet X crashing into earth, he donated his blood to every baby in world giving them <b>100% survival rate</b>.
            </li>
            <li className={styles.card}>
              {new Date().getFullYear()} years ago he descended from being god to be <b>JESUS🙏</b>, by curing the sick, restoring the sight of the blind, making the lame walk, raising the dead back to life, feeding the hungry, and driving away demons from possessed people.
            </li>
          </ol>
        </p>
        <figure>
          <Image src="/Computer Fluffy.jpg" alt='Fluffy World&apos;s Best Polar Bear!' width={500} height={500}/>
        </figure>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <b>Fluffy</b>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
