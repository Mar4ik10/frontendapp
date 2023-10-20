import React from "react";
import { useParams } from "react-router-dom";
import postsData from "../data/posts.json";
import { useState, useEffect } from "react";

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    postsData.map(post => {
      if (post.id === parseInt(id)) {
        setPost(post);
      }
      return null;
    });
  }, []);

  if (!post) {
    return null;
  }

  return (
    <div className="blog-detail">
      <div className="blog-header">
        <img src={`../../assets/images/${post.imageName}`} alt="Blog image" />
        <h1>{post.title}</h1>
      </div>
      <div
        className="blog-body text-together"
        dangerouslySetInnerHTML={{ __html: post.text }}
      ></div>
    </div>
  );
}

export default BlogDetail;
