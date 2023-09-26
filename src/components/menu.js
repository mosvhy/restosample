import React from 'react';
const path = '/assets/img/menu/y/'
const data = {
  category: [
    { label: 'Populars', name: 'menu-populars' },
    { label: 'Starters', name: 'menu-starters' },
    // { label: 'Drinks', name: 'menu-drinks' },
    // { label: 'Dinner', name: 'menu-dinner' },
  ],
  menu: [
    {
      category: ['menu-starters'],
      title: 'Extreme',
      price: '50.000',
      description: "Ramen Extreme is a bold and hearty variation of the classic Japanese noodle dish. It's known for its intensely flavorful broth, often spiced with fiery chili, and topped with an assortment of ingredients like sliced pork, bamboo shoots, and a perfectly boiled egg.",
      img: 'menu-item-1-extreme.jpg'
    },
    {
      category: ['menu-starters'],
      title: 'Miso',
      price: '50.000',
      description: "Ramen Miso is a savory and comforting ramen style that features a rich and earthy miso-based broth. This soup is typically garnished with ingredients such as sliced green onions, bean sprouts, and marinated pork.",
      img: 'menu-item-2-miso.jpg'
    },
    {
      category: ['menu-starters'],
      title: 'Soyu',
      price: '50.000',
      description: "Ramen Soyu is a popular ramen variety celebrated for its umami-packed soy sauce-based broth. It offers a balanced and salty-savory flavor profile and is commonly served with toppings like nori (seaweed), soft-boiled eggs, and tender slices of chashu pork.",
      img: 'menu-item-3-soyu.jpg'
    },
    {
      category: ['menu-starters'],
      title: 'Traditional Tokyo',
      price: '50.000',
      description: "Ramen Traditional Tokyo, often referred to as Shoyu Ramen, is a classic Tokyo-style ramen characterized by its clear and aromatic soy sauce-based broth. It's usually accompanied by toppings like sliced scallions, menma (fermented bamboo shoots), and tender slices of roasted pork. This style showcases the essence of traditional Japanese ramen.",
      img: 'menu-item-4-traditional-tokyo.jpg'
    },
    {
      category: ['menu-populars'],
      title: 'Katsu Don',
      price: '45.000',
      description: "Katsu Don is a classic Japanese dish featuring a crispy breaded pork or chicken cutlet served over a bed of steamed rice, topped with a savory and slightly sweet sauce, onions, and a gently cooked egg.",
      img: 'katsu-don.png'
    },
    {
      category: ['menu-populars'],
      title: 'Katsu Curry',
      price: '47.900',
      description: "Katsu Curry is a delicious fusion of Japanese and Indian flavors, consisting of a breaded and fried pork or chicken cutlet served with a rich and aromatic Japanese curry sauce, typically accompanied by rice.",
      img: 'katsu-curry.png'
    },
    {
      category: ['menu-populars'],
      title: 'Gyudon',
      price: '47.900',
      description: "Gyudon is a popular Japanese dish featuring thinly sliced beef and onions simmered in a flavorful soy-based sauce, then served over a bowl of hot steamed rice. It's a simple and satisfying comfort food option.",
      img: 'gyudon.png'
    },
    {
      category: ['menu-populars'],
      title: 'Oyakodon',
      price: '45.000', description: "Oyakodon is a comforting Japanese one-bowl meal. It consists of simmered chicken and onions in a savory broth, topped with a beaten egg, and served over a bowl of steamed rice.",
      img: 'oyakodon.png'
    },
  ],
}

function Menu(props) {
	return (
		<section id="menu" className="menu">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Our Menu</h2>
          <p>Check Our <span>Menu</span></p>
        </div>

        <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

          {data.category.map((d,k)=>(
            <li className="nav-item" key={k}>
              <a href={`#${d.name}`} className={"nav-link"+(k===0?' active show':'')} data-bs-toggle="tab" data-bs-target={`#${d.name}`}>
                <h4>{d.label}</h4>
              </a>
            </li>
          ))}
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
          {data.category.map((d,k)=>(
            <div key={k} className={"tab-pane fade"+(k===0?' active show':'')} id={d.name}>
              <div className="tab-header text-center mb-4">
                <p>Menu</p>
                <h3>{d.label}</h3>
              </div>

              <div className="row gy-5">

                {data.menu.filter(({category})=>category.includes(d.name)).map((v,j)=>(
                  <div key={j} className="col-6 col-sm-4 menu-item">
                    <a
                      href={`${path}${v.img}`}
                      className="glightbox"
                      title={v.title}
                    >
                      {/*<div className={''} style={{
                        backgroundImage: `url(${path}${v.img})`,
                        backgroundSize: '100% auto',
                        minHeight: '180px',
                        backgroundRepeat: 'no-repeat',
                      }}></div>*/}
                      <h4 style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        position: 'absolute',
                        fontSize: '18px',
                        fontFamily: 'var(--font-secondary)',
                        fontWeight: 'bold',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        textAlignLast: 'left',
                      }}>{v.title}</h4>
                      <img
                        className="menu-img img-fluid"
                        src={`${path}${v.img}`}
                        alt={v.title}
                        title={v.title}
                      />
                      <div className="glightbox-desc">
                        <div>
                          <p className="p-0 mb-0 gslide-price">Rp. {v.price},-{' '}</p>
                          <p className="p-0 gslide-desc">{v.description}</p>
                        </div>
                      </div>
                    </a>
                    <div className="px-1">
                      <p style={{fontSize: '18px', textAlignLast: 'left'}} className="mb-0 price">Rp. {v.price},-</p>
                      <p style={{fontSize: '16px', textAlign: 'justify', textAlignLast: 'left'}} className="mb-4 ingredients">{v.description}</p>
                    </div>
                  </div>
                ))}

              </div>  
            </div>
          ))}

        </div>

      </div>
    </section>
	)
}

export default Menu;