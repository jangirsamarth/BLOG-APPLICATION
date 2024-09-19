import React from "react";
import articlecontent from "./article-content";
import { Link } from "react-router-dom";
import Article from "../components/Article";

const ArticleList = () => {
  return (
    <div>
      <h1 className="sm:text-4x1 text-2xl font-bold my-6 text-gray-900">
        Article List
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Article articles={articlecontent} />
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
