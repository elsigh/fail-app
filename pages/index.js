export default function Home() {
  return (
    <div>
      <h1 className="title">Fail App</h1>

      <p className="description">
        The following button will fail (throw an exception):{" "}
        <button
          onClick={() => {
            throw new Error("Click Fail");
          }}
        >
          pages/index.js
        </button>
      </p>
    </div>
  );
}
