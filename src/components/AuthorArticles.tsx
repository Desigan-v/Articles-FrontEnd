import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import the custom styles

const AuthorArticles = () => {
  const [authorName, setAuthorName] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/articles/author/${authorName}`);
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  return (
    <div className="author-articles-container">
      <h2 className="search-title">Search Articles by Author</h2>
      <div className="search-box">
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Enter Author Name"
          className="input-field"
        />
        <center>
          <button onClick={handleSearch} className="search-button">Search</button>
        </center>
      </div>

      {articles.length > 0 && (
        <ul className="articles-list">
          {articles.map((article: any) => (
            <li key={article.id} className="article-item">
              <h3 className="article-title">{article.article}</h3>
              <p className="article-description">{article.description}</p>
              <p className="article-author">Author: {article.authorName}</p>
              {article.articleFile && (
                <a href={`http://localhost:3000/${article.articleFile}`} target="_blank" className="view-article-link">
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

export default AuthorArticles;
