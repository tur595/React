import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function Posts() {
  const [realtimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      <p>Posts</p>
    </div>
  );
}

export default Posts;
