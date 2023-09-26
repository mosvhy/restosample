import React from 'react';

function Gallery(props) {
	return (
		<section id="gallery" className="gallery section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>gallery</h2>
          <p>Check <span>Our Gallery</span></p>
        </div>

        <div className="gallery-slider swiper">
          <div className="swiper-wrapper align-items-center">
            {Array(9).fill(null).map((_,index)=>(
              <div key={index} className="swiper-slide">
                <a className="glightbox" data-gallery="images-gallery" href={`/assets/img/gallery/yamato-gallery-${index+1}.png`}>
                  <img src={`/assets/img/gallery/yamato-gallery-${index+1}.png`} className="img-fluid" alt="" style={{height:'200px', width: 'auto', margin: 'auto'}} />
                </a>
            </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
	)
}

export default Gallery;