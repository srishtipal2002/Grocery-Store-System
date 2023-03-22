import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

import './Blogs.css';

export default function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our
        {' '}
        <span>blogs</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/blog-1.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                By Raj Krishnan
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                12th October, 2022
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>I Wish I had magic secrets or shortcuts to share but food blogging is hard work. </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-2.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by Sanjay Bhatt
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                12th September,2022
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>No matter how much you love what you do, it can be hard to come up with material.</p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-3.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by Riya Kundan
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                6th September 2022
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>If blogging isn’t your cup of tea and your just here for food and the recipes.</p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
