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
            <center><h2 className="title">About Us</h2></center>
                <div className='article-item'>

                  <div className='all-articles-container'>
                  <h3 className="article-title">Our vision</h3>
                  <p className="article-description">Welcome to ArticlesHub! 
                    Our vision is to cultivate a vibrant community where tech enthusiasts 
                    and writers collaborate and contribute to a world where knowledge is 
                    shared freely and widely. We aim to become a go-to platform where 
                    readers and writers alike can exchange ideas, foster learning, 
                    and push the boundaries of innovation."</p><br></br>

                  <h3 className="article-title">Our Mission</h3>
                  <p className="article-description">Welcome to ArticlesHub! Our goal is to 
                    educate, inform and inspires the writers and
                    readers with well-researched and engaging articles covering 
                    We aim to create a reliable resource for anyone looking to deepen their
                    knowledge and stay updated in these fields.</p><br></br>

                  <h3 className="article-title">Our Story</h3>
                  <p className="article-description">ArticlesHub began with a simple yet powerful idea:
                     to create a place where anyone passionate about technology and programming could 
                     find insightful, accessible articles that educate and inspire. 
                     Our founder, Mr.Desigan, wanted a resource where complex ideas could be 
                     simplified and shared with a wider audience. Starting as a personal project, 
                     ArticlesHub has since grown into a community-driven platform that not only supports 
                     learning but also encourages readers to think critically and contribute their own knowledge.</p><br></br>

                    <h3 className="article-title">Who We Are</h3>
                    <p className="article-description">
                    We are a dedicated team of writers and tech enthusiasts who believe in 
                    the power of information and its ability to transform understanding and skills. 
                    Our backgrounds are rooted in software development, programming, and a love 
                    for learning. Every member of our team is driven by a shared passion for 
                    technology, continuous growth, and helping others achieve their learning goals.</p><br></br>

                    <h3 className="article-title">What We Write About</h3>
                    <p className="article-description">At ArticlesHub, we cover a range of topics designed to cater to developers, tech professionals, and curious readers alike. 
                        Here’s a glimpse of the type of content you’ll find:<br></br>
                        <font color="red" size="5" face="italic">Tech Tutorials:</font> Step-by-step guides and deep dives into programming languages, frameworks, and tools that developers use every day.<br></br>
                        <font color="red" size="5" face="Arial">Industry Insights:</font> Analysis of current tech trends, emerging technologies, and their impact on the industry.<br></br>
                        <font color="red" size="5" face="Arial">Career Advice:</font> Helpful tips for budding developers and seasoned professionals on navigating tech careers, from entry-level advice to insights on full-stack development.<br></br>
                        <font color="red" size="5" face="Arial">How-To Guides:</font> Practical solutions for coding challenges, debugging techniques, and tips for leveraging popular development frameworks.
                        We publish regularly, ensuring our articles are both timely and relevant to the fast-paced world of technology.</p><br></br>

                    <h3 className="article-title">Our Commitment to Quality</h3>
                    <p className="article-description">Quality is at the heart of everything we do. 
                      Each article published on ArticlesHub goes through careful research and vetting to ensure 
                      accuracy, clarity, and value. We are dedicated to providing well-researched, fact-checked 
                      content that readers can rely on. By staying current with industry standards and trends, 
                      we aim to be a trustworthy resource for both new and experienced readers.</p><br></br>

                    <h3 className="article-title">Community Engagement</h3>
                    <p className="article-description">ArticlesHub is more than just a website; 
                      it’s a community. We encourage readers to actively engage by commenting on posts, 
                      joining discussions, and providing feedback. We also invite contributions from guest 
                      writers who are passionate about sharing their insights. Join us on our journey by 
                      subscribing to our newsletter, following us on social media, and becoming a part of our learning community.</p>
                </div>
              </div>
                <center><h4>Welcome To Articles World</h4></center>
            </div>
        </div>
  );
};

export default Home;
