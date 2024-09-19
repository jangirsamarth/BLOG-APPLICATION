import React from 'react'
import { Link } from 'react-router-dom'
const Article = ({articles}) => {
  return (
    <>
       {articles.map((article, index) => (
            <div key={index} className="p-4 md:w-1/2">
              <div className="h-full border-2 border-grey-200 border-opacity-55 rounded-lg overflow-hidden">
                <Link to={`/articles/${article.name}`}>
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={article.thumbnail}
                    alt="blog"
                  />
                </Link>
                <div className="p-6">
                  <Link to={`/articles/${article.name}`}>
                    <h3 className=" text-lg font-medium text-gray-900 mb-3">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="leading-relaxed mb-3">
                    {article.content[0].substring(0, 100)}...
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      to={`/articles/${article.name}`}
                      className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  )
}

export default Article