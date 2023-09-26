import React from 'react';
const testimonalsData = [
  { name: "strie anggih", rate: 5, photos: "/assets/img/testimonials/testimonials-1.jpg", created: "3 months ago",  quotes: "So tasty and rich. One of hidden gems. But there's no space for parking your car." },
  { name: "Tan Evelyn Tanujayanti", rate: 5, photos: "/assets/img/testimonials/testimonials-2.jpg", created: "11 months ago",  quotes: "Literally hidden gem as google said! Nice taste, the collagen broth soup is very good tho, don't forget to add chili oil and chili powder. I order the extrim and tantan ramen. The price is a bit pricey but worth the price. The minus is only parking area since they are located in very narrow area" },
  { name: "Erlyn Annisa", rate: 5, photos: "/assets/img/testimonials/testimonials-3.jpg", created: "7 months ago",  quotes: "Parkirnya susah, tapi..... the taste will definitely make u come back. They serve sushi but you have to pre order it first to taste it. The toripaitan is beyond words and the gyoza wowwww! Must visit" },
  { name: "ZE. Ferdi F. Putra", rate: 5, photos: "/assets/img/testimonials/testimonials-4.jpg", created: "11 months ago",  quotes: "I finally found the best ramen in Tebet. They said it's hidden gem, and they were true! It's really a hidden gem. Price around IDR40 and above. I ordered Toripaitan Ramen Shoyu and it tasted so good in my mouth." },
];
function Testimonials(props) {
	return (
		<section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Testimonials</h2>
          <p>What Are They <span>Saying About Us</span></p>
        </div>

        <div className="slides-1 swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
            {testimonalsData.map((d,k)=>(
              <div key={k} className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-12">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left"></i>
                          {d.quotes}
                          <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>{d.name}</h3>
                        {/* <h4>{d.title}</h4> */}
                        <div>
                        </div>
                        <div className="stars">
                          <i className={'bi bi-star'+(d.rate>0?'-fill':'')}></i>
                          <i className={'bi bi-star'+(d.rate>1?'-fill':'')}></i>
                          <i className={'bi bi-star'+(d.rate>2?'-fill':'')}></i>
                          <i className={'bi bi-star'+(d.rate>3?'-fill':'')}></i>
                          <i className={'bi bi-star'+(d.rate>4?'-fill':'')}></i>
                          <h4 style={{display:'inline-block',marginLeft: "15px"}}> ~ {d.created}</h4>
                        </div>
                      </div>
                    </div>
                    {/*
                    <div className="col-lg-2 text-center">
                      <img src={d.photos} className="img-fluid testimonial-img" alt="" />
                    </div>
                    */}
                  </div>
                </div>
              </div>
            ))}

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
	)
}

export default Testimonials;