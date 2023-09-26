import React, { useState } from 'react';

const data = {
  category: [
    { label: 'Starters', name: 'menu-starters' },
    { label: 'Breakfast', name: 'menu-breakfast' },
    { label: 'Lunch', name: 'menu-lunch' },
    { label: 'Dinner', name: 'menu-dinner' },
  ],
  menu: [
    { category: ['menu-starters'], title: 'Magnam Tiste', price: '$5.95', description: 'Lorem, deren, trataro, filede, nerada', img: 'yamato-gallery-1.png' },
    { category: ['menu-starters','menu-breakfast'], title: 'Aut Luia', price: '$14.95', description: 'Lorem, deren, trataro, filede, nerada', img: 'yamato-gallery-2.png' },
    { category: ['menu-starters','menu-breakfast','menu-dinner'], title: 'Est Eligendi', price: '$8.95', description: 'Lorem, deren, trataro, filede, nerada', img: 'yamato-gallery-3.png' },
    { category: ['menu-starters','menu-lunch','menu-dinner'], title: 'Eos Luibusdam', price: '$12.95', description: 'Lorem, deren, trataro, filede, nerada', img: 'yamato-gallery-4.png' },
    { category: ['menu-starters','menu-breakfast','menu-lunch','menu-dinner'], title: 'Eos Luibusdam', price: '$12.95', description: 'Lorem, deren, trataro, filede, nerada', img: 'yamato-gallery-5.png' },
    { category: ['menu-starters','menu-dinner'], title: 'Laboriosam Direva', price: '$9.95', description: 'Lorem, deren, trataro, filede, nerada', img: 'yamato-gallery-6.png' },
    { category: ['menu-starters','menu-dinner'], title: 'Laboriosam Direva', price: '$9.95', description: 'Lorem, deren, trataro, filede, nerada', img: 'yamato-gallery-7.png' },
    { category: ['menu-starters','menu-dinner'], title: 'Laboriosam Direva', price: '$9.95', description: 'Lorem, deren, trataro, filede, nerada', img: 'yamato-gallery-8.png' },
    { category: ['menu-starters','menu-dinner'], title: 'Laboriosam Direva', price: '$9.95', description: 'Lorem, deren, trataro, filede, nerada', img: 'yamato-gallery-9.png' },
    { category: ['menu-starters','menu-dinner'], title: 'Laboriosam Direva', price: '$9.95', description: 'Lorem, deren, trataro, filede, nerada', img: 'yamato-gallery-10.png' },
  ],
}

function GalleryV2(props) {
  const [limit,setLimit] = useState(6);

	return (
		<section id="gallery" className="menu gallery-grid" style={{background:'whitesmoke'}}>
      <div className="container" data-aos="fade-up">

        <div className="section-header mb-4">
          <h2>gallery</h2>
          <p>Check <span>Our Gallery</span></p>
        </div>

        {/*<ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

          {data.category.map((d,k)=>(
            <li className="nav-item" key={k}>
              <a className={"nav-link"+(k==0?' active show':'')} data-bs-toggle="tab" data-bs-target={`#${d.name}`}>
                <h4>{d.label}</h4>
              </a>
            </li>
          ))}
        </ul>*/}

        <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
          <div className={"tab-pane fade active show"}>
            {/*<div className="tab-header text-center mb-4">
              <p>Menu</p>
              <h3>{d.label}</h3>
            </div>*/}

            <div className="row gy-5">

              {data.menu.map((v,j)=>(
                <div key={j} className="col-4 menu-item" style={{
                  display: (j < limit ? '' : 'none')
                }}>
                  <a
                    className="glightbox"
                    href={`/assets/img/gallery/${v.img}`}
                    alt={v.title}
                    title={v.title}
                  >
                    <img
                      className="menu-img img-fluid"
                      src={`/assets/img/gallery/thumb/${v.img}`}
                      alt={v.title}
                      title={v.title}
                    />
                    <div className="glightbox-desc">{v.description}</div>
                  </a>
                </div>
              ))}

            </div>  
          </div>
        </div>

        {limit < data.menu.length && (
          <div className="mt-4 d-flex justify-content-center">
            <button onClick={()=>{
              setLimit((old)=>old+=6)
            }}>More</button>
          </div>
        )}

      </div>
    </section>
	)
}

export default GalleryV2;