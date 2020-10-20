import Link from "next/link";

export default function About() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Fail App</h1>
        <h2 className="subtitle">Posts Page</h2>
      </header>

      <p className="description">
        <Link href="/posts/1">
          <a>
            <u>Click here to open a post</u>
          </a>
        </Link>
      </p>

      <p className="description">
        The following button will fail throw an error:{" "}
        <button
          onClick={() => {
            throw new Error("Whoops!");
          }}
        >
          Whoops!
        </button>
      </p>
    </div>
  );
}
