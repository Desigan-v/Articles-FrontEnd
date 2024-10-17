import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; 

const AddArticle = () => {
  const [authorName, setAuthorName] = useState('');
  const [article, setArticle] = useState('');
  const [description, setDescription] = useState('');
  const [articleFile, setArticleFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('authorName', authorName);
    formData.append('article', article);
    formData.append('description', description);
    if (articleFile) formData.append('articleFile', articleFile);

    try {
      await axios.post('http://localhost:3000/articles', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Article added successfully');
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-article-form">
      <h2 className="form-title">Add New Article</h2>
      <input
        type="text"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        placeholder="Author Name"
        className="input-field"
        required
      />
      <input
        type="text"
        value={article}
        onChange={(e) => setArticle(e.target.value)}
        placeholder="Article Name"
        className="input-field"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Article Description"
        className="textarea-field"
        required
      />
      <input
        type="file"
        onChange={(e) => setArticleFile(e.target.files?.[0] || null)}
        className="file-input"
      />
      <center>
        <button type="submit" className="submit-button">Add Article</button>
      </center>
    </form>
  );
};

export default AddArticle;
