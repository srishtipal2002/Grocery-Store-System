// Banner
import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: 'url("../image/banner-bg.webp") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
        <h3>
          fresh and
          {' '}
          <span>organic</span>
          {' '}
          products for Your Home
        </h3>
        <p>
          <b>Get Your Groceries in as fast as an hour</b>
        </p>
        <button type="button" className="btn">
          <b>shop now</b>
        </button>
      </div>
    </section>
  );
}
