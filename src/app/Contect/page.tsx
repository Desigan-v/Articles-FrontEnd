'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';
import "../style.css"

const Home = () => {

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
          
            <div className="content">
            <center><h2 className="title">Contect Us</h2></center>
                <div className='article-item'>

                  <div className='all-articles-container1'>
                  <h3 className="article-title">Mr. Desigan</h3>
                    <i class="fa-solid fa-mobile-screen-button"></i> : (+91)9856258756 <br></br>
                    <i className="fa-solid fa-phone-volume"></i> : (+91) 1452 96556357<br></br>
                    <i class="fa-solid fa-envelope"></i> : desigan1506@gmail.com
                </div>
                
                <br></br>

                <div className='all-articles-container1'>
                  <h3 className="article-title">Mr. Varatha</h3>
                    <i class="fa-solid fa-mobile-screen-button"></i> : (+91)9688562354 <br></br>
                    <i className="fa-solid fa-phone-volume"></i> : (+91) 1452 85635798<br></br>
                    <i class="fa-solid fa-envelope"></i> : varatha1506@gmail.com
                </div>

                <br></br>

                <div className='all-articles-container1'>
                  <h3 className="article-title">Mrs. Deepika</h3>
                    <i class="fa-solid fa-mobile-screen-button"></i> : (+91)9856248526 <br></br>
                    <i className="fa-solid fa-phone-volume"></i> : (+91) 1452 32580159<br></br>
                    <i class="fa-solid fa-envelope"></i> : deepi1506@gmail.com
                </div>
                <br></br>

                <div className='all-articles-container1'>
                  <h3 className="article-title">Mrs. Kalai</h3>
                    <i class="fa-solid fa-mobile-screen-button"></i> : (+91)6523584258 <br></br>
                    <i className="fa-solid fa-phone-volume"></i> : (+91) 1452 856954258<br></br>
                    <i class="fa-solid fa-envelope"></i> : kalai1506@gmail.com
                </div>

              </div>
                <center><h4>Welcome To Articles World</h4></center>
            </div>
        </div>
  );
};

export default Home;
