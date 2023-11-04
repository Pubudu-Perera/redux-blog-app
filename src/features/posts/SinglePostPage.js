import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import { useParams, Link } from "react-router-dom";
import TimeAgo from "../posts/TimeAgo";
import PostAuthor from "../posts/PostAuthor";
import ReactionButtons from "../posts/ReactionButtons";

const SinglePostPage = () => {
  // retrieve post ID by the URL
  const  { postId } = useParams()


  const post = useSelector((state) => selectPostById(state, Number(postId)))
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p className="postCredit">
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePostPage;
