'use client'
import React, { useState } from 'react';
import AddArticle from '../components/AddArticle';
import ArticleList from '../components/ArticleList';
import AuthorArticles from '../components/AuthorArticles';
import AllArticles from '../components/AllArticles';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import "./globals.css";
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const [view, setView] = useState(''); // State to handle view rendering

  const handleViewChange = (newView: string) => setView(newView);

  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);


  const router = useRouter();
    const logOut = ()=> {
        Cookies.remove("loggedin");
        router.push('http://localhost:3001')}
        
  return (
    <div className="container">
        <button
          className="account-icon fas fa-user-circle button2"
          onClick={() => setIsLeftSidebarOpen(true)}
          aria-label="Open Left Sidebar"
        ></button>

      <div className={`sidebar left ${isLeftSidebarOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={() => setIsLeftSidebarOpen(false)}>← Back</button>
        <div className="sidebar-content p-3">
          <h2>Desigan</h2>
            <Link href="/">
              <button  className="button">
                <i className="fas fa-home"></i> Home
              </button>
            </Link><br></br>
            <Link href="/About">
              <button  className="button">
                <i className="fa-solid fa-people-group"></i>About
              </button>
            </Link><br></br>
            <Link href="/Contect">
              <button  className="button">
              <i className="fa-solid fa-address-card"></i>Contect
              </button>
            </Link><br></br>
          <button type='submit'
          className='button'
        onClick={()=>logOut()}><i className="fa-solid fa-right-from-bracket"></i>Logout</button>
        </div>
      </div>
      <div>
          <div className='button-container'>
            <Link href="/">
                <button className="button"><i className="fa-solid fa-house"></i></button>
            </Link>

            <Link href="/About">
                <button className="button"><i className="fa-solid fa-people-group"></i></button>
            </Link>

            <Link href="/Contect">
                <button className="button"><i className="fa-solid fa-address-card"></i></button>
            </Link></div>
      <button
        className="button1"
        type='submit'
        onClick={()=>logOut()}><i className="fa-solid fa-right-from-bracket"></i></button>
        </div>
          <br></br>
          <center><h2 className="title">ArticlesHub</h2></center>

            <Image className='img'
                  src="/images/pro1.jpg"
                  alt="Oops"
                  width={1075}
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
