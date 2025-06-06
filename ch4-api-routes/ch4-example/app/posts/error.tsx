"use client";
interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: Props) {
  return (
    <div style={{ textAlign: "center", color: "red", padding: "2rem" }}>
      <h2>오류 발생!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>다시 시도</button>
    </div>
  );
}
