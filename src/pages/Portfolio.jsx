import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import PortfolioCard from "./PortfolioCard.jsx";
import portfolioData from "../data/portfolio.json";

function Portfolio() {
  return (
    <div className="posts-container">
      {portfolioData.map(({ id, imageName, title, url }) => (
        <PortfolioCard
          id={id}
          imageName={imageName}
          title={title}
          key={id}
          url={url}
        />
      ))}
    </div>
  );
}

export default Portfolio;
