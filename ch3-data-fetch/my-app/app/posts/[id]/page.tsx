import LikeButton from "./LikeButton";

type Post = { id: number; title: string; body: string };

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  return posts.slice(0, 10).map((post) => ({
    id: post.id.toString(),
  }));
}

type Props = {
  params: { id: string };
};
// 타입 제거(임시)
export default async function Page({ params }: Props) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok) throw new Error("데이터 불러오기 실패");

  const post: Post = await res.json();

  return (
    <>
      <div>
        <h2>게시글 상세 (ID: {params.id})</h2>
        <b>{post.title}</b>
        <div>{post.body}</div>
      </div>
      <LikeButton initialLikes={3} />
    </>
  );
}
