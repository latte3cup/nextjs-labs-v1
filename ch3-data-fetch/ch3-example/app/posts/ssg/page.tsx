type Post = { id: number; title: string; body: string };

// 서버 컴포넌트 (기본)
export default async function PostsSSGPage() {
  // fetch는 빌드 시점에 실행되어 SSG가 됨
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // next: { revalidate: 60 } // ISR 원하면 추가
  });
  if (!res.ok) throw new Error("데이터 불러오기 실패");
  const posts: Post[] = await res.json();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">[SSG] 게시글 목록 (정적 생성)</h2>
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
