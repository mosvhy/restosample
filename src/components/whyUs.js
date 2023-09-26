import React from 'react';

function WhyUs(props) {
	return (
		<section id="why-us" className="why-us section-bg">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="why-box">
              <h3>Why Choose Yamato Ramen?</h3>
              <p>
                Halal Ramen Collagen Toripaitan. Branch Of Yamato Ramen Tokyo Japan, coffee shop and best donburi in Town.
              </p>
              {/*<div className="text-center">
                <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
              </div>*/}
            </div>
          </div>

          <div className="col-lg-9 d-flex align-items-center">
            <div className="row gy-4">

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-stars"></i>
                  <h4>Hygienic</h4>
                  <p>Our product is a top choice because it prioritizes hygiene, ensuring that every bite is safe and clean for your enjoyment.</p>
                </div>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-gem"></i>
                  <h4>Quality</h4>
                  <p>We take pride in using only the finest quality ingredients, guaranteeing a premium and wholesome dining experience.</p>
                </div>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-emoji-heart-eyes"></i>
                  <h4>Taste</h4>
                  <p>The exquisite taste of our product is a testament to our commitment to delivering unparalleled flavor and satisfaction with every bite.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
	)
}

export default WhyUs;