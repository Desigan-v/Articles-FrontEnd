import React, { useState } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articleName, setArticleName] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/articles/article/${articleName}`);
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={articleName}
        onChange={(e) => setArticleName(e.target.value)}
        placeholder="Search by Article Name"
      />
      <button onClick={handleSearch}>Search</button>

      {articles.length > 0 && (
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
      )}
    </div>
  );
};

export default ArticleList;
