import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { GladfyEditor } from '../lib'
import styles from '../styles/Home.module.css'

const content = () => {
  return `
		<h2>
			Hi there,
		</h2>
		<img src="https://avatars.githubusercontent.com/u/2500670?s=120&v=4" width="100%" height="200px"></img>


		<node-view>
			<div contenteditable="false">
				non-editable text
			</div>
			<div>
				editable text
			</div>
		</node-view>

		<editable-block>
			<div>
				editable text
			</div>
		</editable-block>

		<image-block count="0" 
			url="https://avatars.githubusercontent.com/u/2500670?s=120&v=4">
			<p>This is editable.</p>
		</image-block>

		<react-component count="0" 
			url="https://avatars.githubusercontent.com/u/2500670?s=120&v=4">
			<p>This is editable.</p>
		</react-component>

		<p>
			this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
		</p>
		<ul>
			<li>
				That’s a bullet list with one …
			</li>
			<li>
				… or two list items.
			</li>
		</ul>
		<p>
			Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
		</p>
		<pre><code class="language-css">body {
		display: none;
		}</code></pre>
		<p>
			I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
		</p>
		<blockquote>
			Wow, that’s amazing. Good work, boy! 👏
			<br />
			— Mom
		</blockquote>
`;
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gladfy WYSIMYG</title>

        <meta name="description" content="A React WYSIMYG for Gladfy" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/kiddoinpyjamas/gladfy-wysimyg">Gladfy WYSIMYG!</a>
        </h1>

        <GladfyEditor content={content()} />

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
