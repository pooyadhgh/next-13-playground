import React from "react";

const Post = ({ params: { post } }) => {
  return (
    <>
      <h1>{post}</h1>
    </>
  );
};

export default Post;
