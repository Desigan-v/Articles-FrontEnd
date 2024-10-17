'use client'
import React, { useState } from 'react';
import AddArticle from '../components/AddArticle';
import ArticleList from '../components/ArticleList';
import AuthorArticles from '../components/AuthorArticles';
import AllArticles from '../components/AllArticles';
import "./globals.css";
import Image from 'next/image';
const Home = () => {
  const [view, setView] = useState(''); // State to handle view rendering

  const handleViewChange = (newView: string) => setView(newView);

  return (
    <div className="container">
            <Image className='img'
                  src="/images/pro1.jpg"  // Ensure the file extension is correct
                  alt="Oops"
                  width={1070}
                  height={200}
                  priority
              />
        <center><h1>Article Management</h1></center>
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
          {view === 'viewAll' && <AllArticles />}<br></br>
          <center><h4>Welcome To Articles World</h4></center>
        </div>
    </div>
  );
};

export default Home;