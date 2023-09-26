import React from 'react';

function Footer(props) {
	return (
		<footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-3">
          {/*<div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon"></i>
            <div>
              <h4>Address</h4>
              <p>
                1266 <br/>
                Ludhiana, Punjab 141008 - IND<br />
              </p>
            </div>

          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <i className="bi bi-telephone icon"></i>
            <div>
              <h4>Reservations</h4>
              <p>
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a7cec9c1c8e7c2dfc6cad7cbc289c4c8ca">[email&#160;protected]</a><br />
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <i className="bi bi-clock icon"></i>
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Mon-Sat: 11AM</strong> - 23PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>*/}

          {/*<div className="col-lg-3 col-md-6 footer-links">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>*/}
        <div className="col-12 footer-links text-center">
            <h4>Follow Us</h4>
            <div className="social-links d-flex justify-content-center">
              <a target="_blank" rel="noreferrer" href="#/" className="twitter"><i className="bi bi-twitter"></i></a>
              <a target="_blank" rel="noreferrer" href="#/" className="facebook"><i className="bi bi-facebook"></i></a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/yamato.idn/" className="instagram"><i className="bi bi-instagram"></i></a>
              <a target="_blank" rel="noreferrer" href="#/" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        {/*<div className="copyright">
          &copy; Copyright <strong><span>Jassa</span></strong>. All Rights Reserved
        </div>*/}
        <div className="credits">
          With love <a href="#/">&copy; Yamato Ramen</a>
        </div>
      </div>
    </footer>
	)
}

export default Footer;