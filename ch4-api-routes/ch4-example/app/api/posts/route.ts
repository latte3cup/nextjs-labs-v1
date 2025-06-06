import { getPosts, addPost } from "../postsData";

export async function GET() {
  return Response.json(getPosts());
}

export async function POST(req: Request) {
  const { title, body } = await req.json();
  if (!title || !body) {
    return new Response(
      JSON.stringify({ error: "Title and body are required" }),
      { status: 400 }
    );
  }
  const post = addPost(title, body);
  return Response.json(post, { status: 201 });
}
