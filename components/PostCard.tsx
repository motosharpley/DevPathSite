const PostCard = ({ post }: { post: { title: string; excerpt: string } }) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  );
};
export default PostCard;
