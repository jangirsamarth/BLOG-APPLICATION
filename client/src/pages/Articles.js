import React from "react";
import { useParams } from "react-router-dom";
import articlecontent from "./article-content";
import Article from "../components/Article";
import NotFound from "./NotFound";

const Articles = () => {
  const { name } = useParams();
  const article = articlecontent.find((article) => article.name === name);
  if (!article) return <h1><NotFound/></h1>;
  const otherArticles = articlecontent.filter((article) => article.name !== name);
  return (
    <>
      <h1 className="sm:text-4x1 text-2xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p key={index} className="mx-auto leading-relaxed text-base mb-4">
          {paragraph}
        </p>
      ))}
      <h1 className="sm:text2xl text-xl font-bold my-4 text-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-erap -m-4">
       <Article articles={otherArticles} />
      </div>
    </>
  );
};

export default Articles;
