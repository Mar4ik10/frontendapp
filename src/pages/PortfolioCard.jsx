import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTruncate from "../hooks/useTruncate";

function PortfolioCard({ imageName, title, url, id }) {
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
          <Link to={url} className="btn btn-primary">
            View on GitHub
          </Link>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;
