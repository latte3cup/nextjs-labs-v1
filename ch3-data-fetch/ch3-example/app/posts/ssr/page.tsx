type Post = { id: number; title: string; body: string };

// 서버 컴포넌트 (SSR은 cache: "no-store" 옵션만 붙이면 끝)
export default async function PostsSSRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // SSR: 매 요청마다 서버에서 fetch!
  });
  if (!res.ok) throw new Error("데이터 불러오기 실패");
  const posts: Post[] = await res.json();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">[SSR] 게시글 목록 (서버사이드 렌더링)</h2>
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
