import Link from "next/link";
import React from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 2000)); // To delay the response

  return posts;
};

const Posts = async () => {
  const posts = await fetchPosts();

  return (
    <>
      <h1>Posts</h1>

      {posts?.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <p>{post.title}</p>
        </Link>
      ))}
    </>
  );
};

export default Posts;
