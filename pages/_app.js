import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Head>
        <title>Next Fail App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navigation">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </nav>

      <main className="main">
        <Component {...pageProps} />
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
