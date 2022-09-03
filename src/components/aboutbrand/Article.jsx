import React from "react";
import { Link } from "react-router-dom";
import "./article.css";
function Article({ imgUrl, text, link }) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <h3>{text}</h3>
        </div>
        {(text = text.replaceAll(" ", "-"))}
        {(text = text.replaceAll("---", "-"))}
        <Link to={`/aj/${text.toLowerCase()}`}>
          <p>Explore your vechile</p>
        </Link>
      </div>
    </div>
  );
}

export default Article;
