type Props = { params: { id: string } };

export default async function PostDetail({ params }: Props) {
  const { id } = await params;
  return (
    <div>
      <h1>게시글 상세 페이지</h1>
      <p>이 게시글의 id: {id}</p>
    </div>
  );
}
