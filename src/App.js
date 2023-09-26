// import { useState, useEffect } from 'react';
import * as Component from "./components";
// import { db } from "./config/firebase";
// import { 
//   collection,
//   // deleteDoc,
//   // addDoc,
//   getDocs,
// } from "firebase/firestore";

// const pause = (n) => new Promise((resolve)=>{setTimeout(()=>{resolve()},n)})

const data = {
  header: [
    { name: "Header", data: {
      title: (<>Yamato<span>Ramen</span></>),
      mainMenu: [
        { index: 1, href: "#hero", label: "Home" },
        { index: 2, href: "#about", label: "About" },
        { index: 3, href: "#menu", label: "Menu" },
        { index: 4, href: "#events", label: "Events" },
        { index: 5, href: "#chefs", label: "Chefs" },
        { index: 6, href: "#gallery", label: "Gallery" },
        { index: 7, href: "#contact", label: "Contact" },
      ],
      rightMenu: [
        { index: 1, href: "#book-a-table", label: "Reservation", className: "btn-book-a-table" },
      ],
    } },
    { name: "Hero", data: {} },
  ],
  component: [
    { index: 1, name: "About", data: {} },
    { index: 2, name: "WhyUs", data: {} },
    { index: 3, name: "StatsCounter", data: {} },
    { index: 4, name: "Menu", data: {} },
    { index: 5, name: "Testimonials", data: {} },
    { index: 6, name: "Events", data: {} },
    { index: 7, name: "Chefs", data: {} },
    { index: 8, name: "BookTable", data: {} },
    { index: 9, name: "Gallery", data: {} },
    { index: 10, name: "Contact", data: {} },
  ],
  footer: [
    { name: "Footer", data: {} },
  ],
};

function App(){
  // const [init,setInit] = useState(true);
  // const [refresh,setRefresh] = useState(false);
  // const [dataHeader, setDataHeader] = useState({
  //   title: "Yamato Ramen",
  //   title1: "Yamato",
  //   title2: "Ramen",
  //   mainMenu: [],
  //   rightMenu: [],
  // });
  // const [users,setUsers] = useState([]);

  // const userCollectionRef = collection(db,"users");
  // const commonVarsCollectionRef = collection(db,"common-vars");
  // const mainMenuCollectionRef = collection(db,"main-menu");
  // const rightMenuCollectionRef = collection(db,"right-menu");

  // const fireAdd = (collectionName, data) => {
  //   return new Promise(async (resolve)=>{
  //     addDoc(collectionName, data).then(()=>{
  //       resolve(true)
  //     })
  //   })
  // };

  // useEffect(()=>{
  //   if (refresh) {
  //     setRefresh(false);
  //     const fireGet = async (collectionName) => {
  //       const d = await getDocs(collectionName);
  //       return d.docs.map((doc)=>({...doc.data(), id: doc.id}));
  //     };
  //     const getData = async () => {
  //       const newDataHeader = { ...dataHeader };
  //       await fireGet(commonVarsCollectionRef).then(([doc])=>{
  //         if (doc) {
  //           newDataHeader.title = doc.title || newDataHeader.title;
  //           newDataHeader.title1 = doc.title1 || newDataHeader.title1;
  //           newDataHeader.title2 = doc.title2 || newDataHeader.title2;
  //         }
  //       });
  //       // await fireGet(mainMenuCollectionRef).then((docs)=>{
  //       //   newDataHeader.mainMenu = [...docs].sort((a,b)=>a.index-b.index);
  //       // });
  //       // await fireGet(rightMenuCollectionRef).then((docs)=>{
  //       //   newDataHeader.rightMenu = [...docs];
  //       // });
  //       // await fireGet(userCollectionRef).then((docs)=>{ setUsers(docs) });
  //       setDataHeader((oldState)=>({ ...oldState, ...newDataHeader }));
  //     }

  //     getData();
  //   }
  // },[refresh]); // eslint-disable-line

  // useEffect(()=>{
  //   // setRefresh(false);
  //   // if (dataHeader) {
  //   //   if (dataHeader.mainMenu.length) {
  //   //     // for (let menu of dataHeader.mainMenu) {
  //   //     //   const d = doc(db,"main-menu",menu.id);
  //   //     //   await deleteDoc(d);
  //   //     // }
  //   //   }
  //   // }
  //   // setRefresh(true);
  // // },[]);
  // useEffect(()=>{
  //   // console.log('called',init,Date.now());
  //   // const getApi=async()=>{
  //   //   for (let v of [
  //   //     { index: 0, href: "#hero", label: "Home" },
  //   //     { index: 1, href: "#about", label: "About" },
  //   //     { index: 2, href: "#menu", label: "Menu" },
  //   //     { index: 3, href: "#events", label: "Events" },
  //   //     { index: 4, href: "#chefs", label: "Chefs" },
  //   //     { index: 5, href: "#gallery", label: "Gallery" },
  //   //     { index: 6, href: "#contact", label: "Contact" },
  //   //   ]) {
  //   //     fireAdd(mainMenuCollectionRef,v);
  //   //   }
  //   //   for (let v of [
  //   //     { index: 0, href: "#book-a-table", label: "Booking", className: "btn-book-a-table" },
  //   //   ]) {
  //   //     fireAdd(rightMenuCollectionRef,v);
  //   //   }
  //   // };
  //   // getApi();
  //   setRefresh(true)
  // },[]);

  return (
    <div className='app'>
        {/* header */}
        <Component.Header {...data.header[0]} />

        {/* hero */}
        <Component.Hero {...data.header[1]} />

        <main id="main">
          {/* about */}
          <Component.About {...data.component[0]} />

          {/* why-us */}
          <Component.WhyUs {...data.component[1]} />

          {/* menu */}
          <Component.Menu {...data.component[3]} />

          {/* testimonials */}
          <Component.Testimonials {...data.component[4]} />

          {/* events */}
          {/*<Component.Events {...data.component[5]} />*/}

          {/* chefs */}
          {/*<Component.Chefs {...data.component[6]} />*/}

          {/* stats-counter */}
          <Component.StatsCounter {...data.component[2]} />

          {/* gallery */}
          <Component.GalleryV2 />
          {/*<Component.Gallery {...data.component[8]} />*/}

          {/* book-a-table */}
          <Component.BookTable {...data.component[7]} />

          {/* contact */}
          <Component.Contact {...data.component[9]} />

        </main>
        {/*<Component.IconList />*/}

        {/* footer */}
        <Component.Footer {...data.footer[0]} />

        <a href={"#hero"} className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        <div id="preloader"></div>
    </div>
  )
}

export default App;