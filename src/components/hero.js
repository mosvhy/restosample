import React from 'react';

function Hero(props) {
	return (
		<section id="hero" className="hero d-flex align-items-center section-bg" style={{
      backgroundImage: 'url(/assets/img/hero-bg.png)',
      backgroundSize: 'cover',
    }}>
      <div className="container" style={{
        backgroundColor: 'rgba(255,255,255,.6)',
        padding: '12px',
      }}>
        <div className="row justify-content-between gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start" style={{paddingLeft:'15px'}}>
            <h2 data-aos="fade-up">Ramen Restaurant in South Jakarta</h2>
            <p data-aos="fade-up" data-aos-delay="100">Indulge in the savory delight of Halal Ramen Collagen Toripaitan, brought to you by the renowned Yamato Ramen Tokyo Japan branch, where you can also enjoy a delightful coffee shop experience and savor the best donburi in town.</p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#book-a-table" className="btn-book-a-table">Book a Table</a>
              <a href="/assets/img/video-1.mp4" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
              {/* https://youtu.be/lE8NzMhdmK8 */}
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <img src="assets/img/about-4_1000x1000.png" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
          </div>
        </div>
      </div>
    </section>
	)
}

export default Hero;