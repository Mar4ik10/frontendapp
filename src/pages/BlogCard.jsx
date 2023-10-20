import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTruncate from "../hooks/useTruncate";

function BlogCard({ imageName, title, timePublished, id }) {
  const ref = useRef(null);
  const shortTitle = useTruncate(ref, title);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={`../../assets/images/${imageName}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title" ref={ref} style={{ margin: 0 }}>
            <span>{shortTitle}</span>
          </h5>
          <small className="text-muted d-block mb-3">
            {new Date(timePublished).toString()}
          </small>
          <Link to={`/blog/${id}`} className="btn btn-primary">
            Read
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
