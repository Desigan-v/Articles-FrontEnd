import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllArticles.css'; // Import the CSS file for custom styling

const AllArticles = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [isUpdating, setIsUpdating] = useState<number | null>(null);
  const [updatedArticle, setUpdatedArticle] = useState({ article: '', description: '' });
  const [file, setFile] = useState<File | null>(null);

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

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this article?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/articles/${id}`);
        setArticles(articles.filter(article => article.id !== id));
        const Delete = alert("Article deleted Sucessfully");
      } catch (error) {
        console.error('Error deleting article:', error);
      }
    }
  };

  const handleUpdate = (article: any) => {
    setIsUpdating(article.id);
    setUpdatedArticle({ article: article.article, description: article.description });
    setFile(null);
  };

  const submitUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const confirmUpdate = window.confirm("Are you sure you want to update this article?");
    if (!confirmUpdate) return;

    const formData = new FormData();
    formData.append('article', updatedArticle.article);
    formData.append('description', updatedArticle.description);
    if (file) {
      formData.append('articleFile', file);
    }

    if (isUpdating) {
      try {
        await axios.put(`http://localhost:3000/articles/${isUpdating}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setArticles(articles.map(article => (article.id === isUpdating ? { ...article, ...updatedArticle } : article)));
        const Delete = alert("Article Updated Sucessfully");
        setIsUpdating(null);
      } catch (error) {
        console.error('Error updating article:', error);
      }
    }
  };

  return (
    <div className="all-articles-container">
      <center><h2 className="title">All Articles</h2></center>

      <ul
      className="article-list">
        {articles.map((article) => (
          <li key={article.id} className="article-item">
            <h3 className="article-title">{article.article}</h3>
            <p className="article-description">{article.description}</p>
            <h3 className="article-author">Author's Name: {article.authorName}</h3>
            {article.articleFile && (
              <a href={`http://localhost:3000/${article.articleFile}`} target="_blank" className="article-link">
                View Article
              </a>
            )}
            <button
            className="delete-button" onClick={() => handleDelete(article.id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
            className="update-button" onClick={() => handleUpdate(article)}>
              <i className="fas fa-edit"></i>
            </button>
            {isUpdating === article.id && (
              <div className="update-form">
                <h3 className='form-title'>Update Article</h3>
                <form onSubmit={submitUpdate}>
                  <input
                    type="text"
                    value={updatedArticle.article} 
                    onChange={(e) => setUpdatedArticle({ ...updatedArticle, article: e.target.value })} 
                    placeholder="Article Title"
                    className="input-field"
                    required
                  />
                  <textarea 
                    value={updatedArticle.description} 
                    onChange={(e) => setUpdatedArticle({ ...updatedArticle, description: e.target.value })} 
                    placeholder="Description" 
                    className="input-field"
                    required 
                  />
                  <input 
                    type="file" 
                    className='file-input'
                    onChange={(e) => e.target.files && setFile(e.target.files[0])}
                    required
                  />
                  <button type="submit" className='ok'><i className="fa-solid fa-check"></i></button>
                  <button type="button" className='can' onClick={() => setIsUpdating(null)}><i className="fa-solid fa-xmark"></i></button>
                </form>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllArticles;
