import React from 'react';

function Contact(props) {
	return (
		<section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Contact</h2>
          <p>Need Help? <span>Contact Us</span></p>
        </div>

        <div className="mb-3">
          <iframe
            style={{border:"0", width: "100%", height: "350px"}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5646962833215!2d106.85322072321189!3d-6.229574256748841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f36715fd33ed%3A0xac94e98075a39c83!2sYamato%20Ramen!5e0!3m2!1sen!2sid!4v1695720164213!5m2!1sen!2sid"
            frameBorder="0" 
            title="Yamato Ramen Tebet" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="row gy-4">

          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-map flex-shrink-0"></i>
              <div>
                <h3>Our Address</h3>
                <p>Jalan Tebet Timur Dalam I No.M No 1<br />
                Daerah Khusus Ibukota Jakarta 12820<br />
                Indonesia</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p><a href="#/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e2818d8c96838196a2879a838f928e87cc818d8f">[email&#160;protected]</a></p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p><a href="tel:+6287885848411">0878 8584 8411</a></p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-clock flex-shrink-0"></i>
              <div>
                <h3>Opening Hours</h3>
                <div>
                  <strong>Weekday:</strong> 08AM - 01AM<br />
                  <strong>Weekend:</strong> 08AM - 01AM
                </div>
              </div>
            </div>
          </div>

        </div>

        <form action="#" method="post" role="main" className="php-email-form p-3 p-md-4">
          <div className="row">
            <div className="col-xl-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-xl-6 form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
            <p><em><small>Make sure to avoid including any sensitive information you don't want to share with this business.</small></em></p>
          </div>
          <div className="text-center"><button onClick={()=>{
            console.log('test')
          }} type="submit">Send Message</button></div>
        </form>

      </div>
    </section>
	)
}

export default Contact;