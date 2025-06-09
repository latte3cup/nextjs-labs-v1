"use client"; ///Next.js가 이래야 인식함

import { useEffect, useState } from "react";

type Post = { id: number; title: string; body: string };

export default function PostsClientPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("네트워크 에러");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-gray-500">로딩 중...</p>;
  if (error) return <p className="text-red-500">오류: {error}</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">[클라이언트 패칭] 게시글 목록</h2>
      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border-b pb-2">
            <b>{post.title}</b>
            <div className="text-sm text-gray-700">{post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
