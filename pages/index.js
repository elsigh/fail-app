import Link from 'next/link'
//import Head from 'next/head'
import styles from '../styles/globals.module.css'

const Index = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1>Sentry + Next.js Test Cases 🚨</h1>
      <p>
        This example demonstrates how to record unhandled exceptions in your
        code with Sentry. There are several test pages below that result in
        various kinds of unhandled exceptions.
      </p>
      <p>
        <strong>Important:</strong> exceptions in development mode take a
        different path than in production. These tests should be run on a
        production build (i.e. 'next build').{' '}
        <a href="https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-error-page">
          Read more
        </a>
      </p>
    </header>

    <main className={styles.main}>
      <h3>Server exceptions</h3>
      <ul className={styles.exceptions}>
        <li>
          <p>
            getServerSideProps throws an Error. This should record Error('Server
            Test 1') in Sentry.
          </p>
          <a href="/server/test1" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          <p>
            getServerSideProps returns a Promise that rejects. This should
            record Error('Server Test 2') in Sentry.
          </p>
          <a href="/server/test2" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          <p>
            getServerSideProps calls a Promise that rejects, but does not handle
            the rejection or await its result (returning synchronously). Sentry
            should record Error('Server Test 3').
          </p>
          <a href="/server/test3" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          <p>
            getStaticProps calls a Promise that rejects, but does not handle the
            rejection or await its result (returning synchronously).
            `revalidate: 1` is set. Sentry should record Error('Server Test 4').
          </p>
          <a href="/server/test4" target="_blank">
            Open in a new tab
          </a>
        </li>
      </ul>

      <h3>Client exceptions</h3>
      <ul className={styles.exceptions}>
        <li>
          <p>
            There is a top-of-module Promise that rejects, but its result is not
            awaited. Sentry should record Error('Client Test 1').
          </p>
          <Link href="/client/test1">
            <a>Perform client side navigation</a>
          </Link>{' '}
          or{' '}
          <a href="/client/test1" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          <p>
            There is a top-of-module exception. This should record
            ReferenceError('process is not defined') in Sentry.
          </p>
          <Link href="/client/test2">
            <a>Perform client side navigation</a>
          </Link>{' '}
          or{' '}
          <a href="/client/test2" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          <p>
            There is an exception during React lifecycle that is caught by
            Next.js's React Error Boundary. In this case, when the component
            mounts. This should record Error('Client Test 3') in Sentry.
          </p>
          <Link href="/client/test3">
            <a>Perform client side navigation</a>
          </Link>{' '}
          or{' '}
          <a href="/client/test3" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          <p>
            There is an unhandled Promise rejection during React lifecycle. In
            this case, when the component mounts. Sentry should record
            Error('Client Test 4').
          </p>
          <Link href="/client/test4">
            <a>Perform client side navigation</a>
          </Link>{' '}
          or{' '}
          <a href="/client/test4" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          <p>
            An Error is thrown from an event handler. Sentry should record
            Error('Client Test 5').
          </p>
          <Link href="/client/test5">
            <a>Perform client side navigation</a>
          </Link>{' '}
          or{' '}
          <a href="/client/test5" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          <p>
            An Error is thrown after the initial render in the render lifecycle
            method. Sentry should record Error('Client Test 6').
          </p>
          <Link href="/client/test6">
            <a>Perform client side navigation</a>
          </Link>{' '}
          or{' '}
          <a href="/client/test6" target="_blank">
            Open in a new tab
          </a>
        </li>
        <li>
          <p>
            An Error is thrown in the componentDidMount lifecycle method. Sentry
            should record Error('Client Test 7').
          </p>
          <Link href="/client/test7">
            <a>Perform client side navigation</a>
          </Link>{' '}
          or{' '}
          <a href="/client/test7" target="_blank">
            Open in a new tab
          </a>
        </li>
      </ul>
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=with-sentry&utm_medium=default-template&utm_campaign=with-sentry"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  </div>
)

export default Index
