export type Post = { id: number; title: string; body: string };

let posts: Post[] = [
  { id: 1, title: "Next.js란?", body: "React를 위한 프레임워크입니다." },
  {
    id: 2,
    title: "API Routes 소개",
    body: "Next.js에서는 백엔드 API도 만들 수 있어요.",
  },
];
let nextId = 3;

export function getPosts() {
  return posts;
}

export function addPost(title: string, body: string) {
  const post = { id: nextId++, title, body };
  posts.push(post);
  return post;
}

export function getPostById(id: number) {
  return posts.find((p) => p.id === id);
}
