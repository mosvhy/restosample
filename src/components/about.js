import React from 'react';

function About(props) {
	return (
		<section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>About Us</h2>
          <p>Learn More <span>About Us</span></p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-7 position-relative about-img" style={{
            backgroundImage: "url(/assets/img/knife-yamato.jpg)",
            backgroundSize: "100%",
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }} data-aos="fade-up" data-aos-delay="150">
            <div className="call-us position-absolute">
              <h4>Delviery & Reservation</h4>
              <p><a href="tel:+6287885848411">0878 8584 8411</a></p>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                <strong>
                  Authentic Halal Toripaitan Collagen Ramen
                </strong>
              </p>
              <ul>
                <li><i className="bi bi-check2-all"></i> The original recipe from Japan, crafted by one of the finest chefs in Japan.</li>
                <li><i className="bi bi-check2-all"></i> Made from Japanese White Chicken and select local chicken.</li>
                <li><i className="bi bi-check2-all"></i> High in protein, amino acids, and other minerals that are beneficial for beauty and health.</li>
                <li><i className="bi bi-check2-all"></i> Made halal while preserving the same authentic Japanese taste.</li>
              </ul>
              <p className="fst-italic"><strong>Collagen Facts</strong></p>
              <p>
                Helps improve body metabolism, strengthens the immune system, reduces cellulite, wrinkles, stretch marks, restores skin moisture, tightens skin, reduces hair loss, assists in reducing food allergies, heals leaky gut, and much more.
              </p>

              <div className="position-relative mt-4">
                <img src="assets/img/about-7.png" className="img-fluid" alt="" />
                <a href="assets/img/video-1.mp4" className="glightbox play-btn">{''}</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
	)
}

export default About;