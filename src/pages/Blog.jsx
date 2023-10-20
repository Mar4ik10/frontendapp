import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import BlogCard from "./BlogCard.jsx";
import postsData from "../data/posts.json";

function Blog() {
  return (
    <div className="posts-container">
      {postsData.map(({ id, imageName, timePublished, title }) => (
        <BlogCard
          id={id}
          imageName={imageName}
          timePublished={timePublished}
          title={title}
          key={id}
        />
      ))}
    </div>
  );
}

export default Blog;
