export default function Home() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Fail App</h1>
        <h2 className="subtitle">Home Page</h2>
      </header>

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
