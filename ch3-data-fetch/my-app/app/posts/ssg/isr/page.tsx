// app/posts/isr/page.tsx
type Post = { id: number; title: string; body: string };

export default async function PostsISRPage() {
  // ISR: revalidate 옵션 사용 (10초마다 새로고침)
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 }, // 10초마다 백그라운드에서 새로운 HTML 생성
  });
  if (!res.ok) throw new Error("데이터 불러오기 실패");
  const posts: Post[] = await res.json();

  // 현재 시각도 같이 출력(진짜 갱신됐는지 체크용)
  const now = new Date().toLocaleString();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">
        [ISR] 게시글 목록 (10초마다 새로 생성)
      </h2>
      <div className="mb-2 text-gray-700">
        <b>페이지 생성 시각:</b> {now}
      </div>
      <ul className="space-y-4">
        {posts.slice(0, 5).map((post) => (
          <li key={post.id} className="border-b pb-2">
            <b>{post.title}</b>
            <div className="text-sm text-gray-700">{post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
