import React from 'react';

function Header({ data }) {
	return (
		<header id="header" className="header fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">

        <a href="/#" className="logo d-flex align-items-center me-auto me-lg-0">
          <img
            src="/assets/img/logo.png"
            title="Yamato Tamen Logo"
            alt="Yamato Tamen Logo"
          />
          {/*<h1>
            {
              (data.title1 && data.title2) 
              ? (<>{data.title1}<span>{data.title2}</span></>) 
              : (data.title)
            }
          </h1>*/}
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="#hero" className="">Home</a></li>
            <li><a href="#about" className="">About</a></li>
            <li><a href="#menu" className="">Menu</a></li>
            <li><a href="#testimonials" className="">Testimonials</a></li>
            {/*<li><a href="#events" className="">Events</a></li>*/}
            {/*<li><a href="#chefs" className="">Chefs</a></li>*/}
            <li><a href="#gallery" className="">Gallery</a></li>
            <li><a href="#contact" className="">Contact</a></li>
            {/*data.mainMenu.map((value,key)=>(
              <li key={key}><a href={value.href} className={""}>{value.label}</a></li>
            ))*/}
          </ul>
        </nav>

        {data.rightMenu.map((value,key)=>(
          <a key={key} className={value.className} href={value.href}>{value.label}</a>
        ))}
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

      </div>
    </header>
	)
}

export default Header;