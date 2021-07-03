import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { GladfyEditor } from '../lib'
import styles from '../styles/Home.module.css'

const content = {
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: { level: 2 },
      content: [
        { type: 'text', text: 'The Node version printed in the Node.js ' },
        {
          type: 'text',
          marks: [{ type: 'textStyle', attrs: { color: '' } }],
          text: 'Version',
        },
        { type: 'text', text: ' panel is used in Cypress to:' },
      ],
    },
    { type: 'paragraph' },
    {
      type: 'gladfyImage',
      attrs: {
        url: 'https://media1.giphy.com/media/3ohs7HdhQA4ffttvrO/giphy.gif',
        src: null,
        width: 480,
        height: 480,
        loading: false,
        loading_progress: 0,
        caption: 'caption!',
        direction: 'left',
        file: null,
        aspect_ratio: { width: 480, height: 480, ratio: 100 },
      },
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: "hola como estas I am very good and you this is the story of that Mary Lou did big time Big Bird big big boobs and then the lady Lilith ellise tired and leaves your do very low very low I want to live tonight by the new really countdown night I'm running kind of middle a the chicken ",
        },
        { type: 'text', marks: [{ type: 'bold' }], text: 'nevermind' },
        {
          type: 'text',
          text: " DiCaprio Pines everyone tonight both of them in the raking in the money moves Bueller I'm the sole in the crane than by there and its crying in the pride is too I am very cute and you this is the story of Mary to do did Big Time big bird big boobs and the little little league and then the little lady lived at least I added",
        },
      ],
    },
    {
      type: 'bulletList',
      content: [
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              content: [
                { type: 'text', text: 'Build files in the ' },
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'link',
                      attrs: {
                        href: 'https://docs.cypress.io/guides/references/configuration#Folders-Files',
                        target: '_blank',
                      },
                    },
                  ],
                  text: 'integrationFolder',
                },
                { type: 'text', text: '.' },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              content: [
                { type: 'text', text: 'Build files in the ' },
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'link',
                      attrs: {
                        href: 'https://docs.cypress.io/guides/references/configuration#Folders-Files',
                        target: '_blank',
                      },
                    },
                  ],
                  text: 'supportFile',
                },
                { type: 'text', text: '.' },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              content: [
                { type: 'text', text: 'Execute code in the ' },
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'link',
                      attrs: {
                        href: 'https://docs.cypress.io/guides/references/configuration#Folders-Files',
                        target: '_blank',
                      },
                    },
                  ],
                  text: 'pluginsFile',
                },
                { type: 'text', text: '.' },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Cypress comes automatically bundled with a set Node version by default. You can see the bundled version by running the ',
        },
        { type: 'text', marks: [{ type: 'code' }], text: 'cypress version' },
        { type: 'text', text: ' command, for example:' },
      ],
    },
    {
      type: 'codeBlock',
      attrs: { language: null },
      content: [
        {
          type: 'text',
          text: 'npx cypress version\n\tCypress package version: 6.2.1\n\tCypress binary version: 6.2.1\n\tElectron version: 11.1.1\n\tBundled Node version: 12.18.3\n\t',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'You may want to use a different Node version if the code executing from the plugins file requires features present in a different Node version from the Node version bundled with Cypress. You can use the Node version detected on your system by setting the ',
        },
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'https://docs.cypress.io/guides/references/configuration#Node-version',
                target: '_blank',
              },
            },
          ],
          text: 'nodeVersion',
        },
        { type: 'text', text: ' configuration to ' },
        { type: 'text', marks: [{ type: 'code' }], text: 'system' },
        {
          type: 'text',
          text: '. For example, you need to use the system Node if you want to load ',
        },
        { type: 'text', marks: [{ type: 'code' }], text: 'node-sass' },
        { type: 'text', text: ' or ' },
        { type: 'text', marks: [{ type: 'code' }], text: 'sqlite3' },
        { type: 'text', text: ' modules from your plugins file.' },
      ],
    },
    {
      type: 'gladfyImage',
      attrs: {
        url: null,
        src: 'https://docs.cypress.io/_nuxt/img/test-runner-settings-nodejs-version.4028364.jpg',
        width: 1000,
        height: 702,
        loading: false,
        loading_progress: 0,
        caption: 'caption!',
        direction: 'center',
        file: null,
        aspect_ratio: { width: 1000, height: 702, ratio: 70.19999999999999 },
      },
    },
    {
      type: 'heading',
      attrs: { level: 3 },
      content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'Experiments' }],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Configuration might include experimental options currently being tested. See ',
        },
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'https://docs.cypress.io/guides/references/experiments',
                target: '_blank',
              },
            },
          ],
          text: 'Experiments',
        },
        { type: 'text', text: ' page.' },
      ],
    },
    {
      type: 'heading',
      attrs: { level: 2 },
      content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'Overriding Options' }],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Cypress gives you the option to dynamically alter configuration values. This is helpful when running Cypress in multiple environments and on multiple developer machines.',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'This gives you the option to do things like override the ',
        },
        { type: 'text', marks: [{ type: 'code' }], text: 'baseUrl' },
        { type: 'text', text: ' or environment variables.' },
      ],
    },
    {
      type: 'heading',
      attrs: { level: 3 },
      content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'Command Line' }],
    },
    {
      type: 'paragraph',
      content: [
        { type: 'text', text: 'When ' },
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'https://docs.cypress.io/guides/guides/command-line',
                target: '_blank',
              },
            },
          ],
          text: 'running Cypress from the Command Line',
        },
        { type: 'text', text: ' you can pass a ' },
        { type: 'text', marks: [{ type: 'code' }], text: '--config' },
        { type: 'text', text: ' flag.' },
      ],
    },
    {
      type: 'paragraph',
      content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'Examples:' }],
    },
    {
      type: 'codeBlock',
      attrs: { language: null },
      content: [
        {
          type: 'text',
          text: 'cypress open --config pageLoadTimeout=30000,baseUrl=https://myapp.com\n\t',
        },
      ],
    },
    {
      type: 'codeBlock',
      attrs: { language: null },
      content: [
        {
          type: 'text',
          text: 'cypress run --config integrationFolder=tests,videoUploadOnPasses=false\n\t',
        },
      ],
    },
    {
      type: 'codeBlock',
      attrs: { language: null },
      content: [
        {
          type: 'text',
          text: 'cypress run --browser firefox --config viewportWidth=1280,viewportHeight=720\n\t',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'For more complex configuration objects, you may want to consider passing a ',
        },
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify',
                target: '_blank',
              },
            },
          ],
          text: 'JSON.stringified',
        },
        { type: 'text', text: ' object surrounded by single quotes.' },
      ],
    },
    {
      type: 'codeBlock',
      attrs: { language: null },
      content: [
        {
          type: 'text',
          text: 'cypress open --config \'{"watchForFileChanges":false,"testFiles":["**/*.js","**/*.ts"]}\'\n\t',
        },
      ],
    },
    {
      type: 'heading',
      attrs: { level: 3 },
      content: [
        {
          type: 'text',
          marks: [{ type: 'bold' }],
          text: 'Runner Specific Overrides',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'You can override configuration for either the E2E or ',
        },
        {
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'https://docs.cypress.io/guides/component-testing/introduction/',
                target: '_blank',
              },
            },
          ],
          text: 'Component Testing',
        },
        { type: 'text', text: ' runner using the ' },
        { type: 'text', marks: [{ type: 'code' }], text: 'e2e' },
        { type: 'text', text: ' and ' },
        { type: 'text', marks: [{ type: 'code' }], text: 'component' },
        { type: 'text', text: ' options.' },
      ],
    },
    {
      type: 'paragraph',
      content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'Examples' }],
    },
  ],
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

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <GladfyEditor content={content} />
        </div>
      </main>
    </div>
  )
}
