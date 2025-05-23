import React from "react";
import Link from "next/link";
const PostPage = () => {
  const postsIds = [1, 2, 3];
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {postsIds.map((id) => (
          <li key={id}>
            <Link href={`/posts/${id}`}> Ver post {id} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
