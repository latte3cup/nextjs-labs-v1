export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>포스트 전용 사이드바</aside>
      <main>{children}</main>
    </div>
  );
}
