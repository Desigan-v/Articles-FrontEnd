import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles.css";  // Import the CSS file for custom styling

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
    <div className="all-articles-container">
      <center><h2 className="title">All Articles</h2></center>
      <ul className="article-list">
        {articles.map((article: any) => (
          <li key={article.id} className="article-item">
            <h3 className="article-title">{article.article}</h3>
            <p className="article-description">{article.description}</p>
            <p className="article-author">Author's Name: {article.authorName}</p>
            {article.articleFile && (
              <a href={`http://localhost:3000/${article.articleFile}`} target="_blank" className="article-link">
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
