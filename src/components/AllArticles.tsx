import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2>All Articles</h2>
      <ul>
        {articles.map((article: any) => (
          <li key={article.id}>
            <h3>{article.article}</h3>
            <p>{article.description}</p>
            <p>Author: {article.authorName}</p>
            {article.articleFile && (
              <a href={`http://localhost:3000/${article.articleFile}`} target="_blank">
                View Article
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllArticles;
