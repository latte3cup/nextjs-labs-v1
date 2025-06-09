type Params = { params: { id: string } };
export default function PostDetail({ params }: Params) {
  return (
    <div>
      <h2>posts 상세 페이지</h2>
      <p>이 게시글 id: {params.id}</p>
    </div>
  );
}
