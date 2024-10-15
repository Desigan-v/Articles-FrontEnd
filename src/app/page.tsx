'use client'
import React, { useState } from 'react';
import AddArticle from '../components/AddArticle';
import ArticleList from '../components/ArticleList';
import AuthorArticles from '../components/AuthorArticles';
import AllArticles from '../components/AllArticles';
import "./globals.css";

const Home = () => {
  const [view, setView] = useState(''); // State to handle view rendering

  const handleViewChange = (newView: string) => setView(newView);

  return (
    <div className="container">
      <center>
        <h1>Article Management</h1>

        <div className="button-container">
          <button className="button" onClick={() => handleViewChange('add')}>
            Add Article
          </button>
          <button className="button" onClick={() => handleViewChange('findByName')}>
            Find by Article Name
          </button>
          <button className="button" onClick={() => handleViewChange('findByAuthor')}>
            Find by Author Name
          </button>
          <button className="button" onClick={() => handleViewChange('viewAll')}>
            View All Articles
          </button>
        </div>

        
        <div className="content">
          {view === 'add' && <AddArticle />}
          {view === 'findByName' && <ArticleList />}
          {view === 'findByAuthor' && <AuthorArticles />}
          {view === 'viewAll' && <AllArticles />}
        </div>
      </center>
    </div>
  );
};

export default Home;


/*import React, { useState } from 'react';
import AddArticle from '../components/AddArticle';
import ArticleList from '../components/ArticleList';
import AuthorArticles from '../components/AuthorArticles';
import AllArticles from '../components/AllArticles';
import "./globals.css";

const Home = () => {
  const [view, setView] = useState(''); // State to handle view rendering

  const handleViewChange = (newView: string) => setView(newView);

  return (
    <div>
      <center>
      <h1>Article Management</h1>
      <button onClick={() => handleViewChange('add')}>Add Article</button>
      <button onClick={() => handleViewChange('findByName')}>Find by Article Name</button>
      <button onClick={() => handleViewChange('findByAuthor')}>Find by Author Name</button>
      <button onClick={() => handleViewChange('viewAll')}>View All Articles</button>

      {view === 'add' && <AddArticle />}
      {view === 'findByName' && <ArticleList />}
      {view === 'findByAuthor' && <AuthorArticles />}
      {view === 'viewAll' && <AllArticles />}
      </center>
    </div>
  );
};

export default Home;
*/