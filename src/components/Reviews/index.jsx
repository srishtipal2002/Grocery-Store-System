// Reviews
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { Autoplay } from 'swiper';
import './Reviews.css';
import 'swiper/swiper.min.css';

export default function Reviews() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        customer&apos;s
        {' '}
        <span>review</span>
      </h1>
      <div className="reviews-slider">
        <Swiper
          loop
          autoplay={{ delay: 7500, disableOnInteraction: false }}
          slidesPerView={3}
          centeredSlides
          spaceBetween={20}
          pagination={{ clickable: true }}
          style={{ padding: '1rem' }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="box">
              <img src="image/pic-1.png" alt="" />
              <p>Surprised with delivery and assembling received, Amazing Service.</p>
              <h3>Starc Johnson</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="image/pic-2.png" alt="" />
              <p>Quality and freshness of organic products so good recommend groco to everyone.</p>
              <h3>Jayshree Krishnan</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="image/pic-3.png" alt="" />
              <p>Best site to buy organic groceries,best decision to shop through their website.</p>
              <h3>Mitchell Marc</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="image/pic-4.png" alt="" />
              <p>Found fresh and tasty non-veg products, neat and reasonably priced groceries.</p>
              <h3>Rama Choudhary</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
