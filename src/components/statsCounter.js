import React from 'react';

function StatsCounter(props) {
	return (
		<section id="stats-counter" className="stats-counter">
      <div className="container" data-aos="zoom-out">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="222" data-purecounter-duration="1" className="purecounter"></span>
              <p>Reviews</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="104" data-purecounter-duration="1" className="purecounter"></span>
              <p>Events</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="352" data-purecounter-duration="1" className="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
              <p>Workers</p>
            </div>
          </div>

        </div>

      </div>
    </section>
	)
}

export default StatsCounter;