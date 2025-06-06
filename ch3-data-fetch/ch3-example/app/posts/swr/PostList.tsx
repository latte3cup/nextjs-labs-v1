"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PostList() {
  // 5초마다 데이터 자동 갱신
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
    {
      refreshInterval: 5000,
      onSuccess: (data) => {
        console.log("패칭 성공:", new Date().toLocaleTimeString());
      },
    }
  );

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p style={{ color: "red" }}>에러 발생: {error.message}</p>;

  return (
    <ul>
      {data.slice(0, 5).map((post: any) => (
        <li key={post.id}>
          <b>{post.title}</b>
        </li>
      ))}
    </ul>
  );
}
