'use client';
import Link from 'next/link';
import '../styles/globals.css';
import React from 'react';
import Navbar from '@/components/Navbar';

const Slider = () => {
  return (
    <div className="slider" style={{ '--quantity': 10 }}>
      <div className="item" style={{ '--position': 1 }}>
        <img src="images/cricket1.jpg" alt="" />
      </div>
      <div className="item" style={{ '--position': 2 }}>
        <img src="images/cricket2.jpg" alt="" />
      </div>
      <div className="item" style={{ '--position': 3 }}>
        <img src="images/cricket3.jpg" alt="" />
      </div>
      <div className="item" style={{ '--position': 4 }}>
        <img src="images/cricket4.jpg" alt="" />
      </div>
      <div className="item" style={{ '--position': 5 }}>
        <img src="images/cricket5.jpg" alt="" />
      </div>
      <div className="item" style={{ '--position': 6 }}>
        <img src="images/cricket6.jpg" alt="" />
      </div>
      <div className="item" style={{ '--position': 7 }}>
        <img src="images/cricket7.jpg" alt="" />
      </div>
      <div className="item" style={{ '--position': 8 }}>
        <img src="images/cricket8.jpg" alt="" />
      </div>
      <div className="item" style={{ '--position': 9 }}>
        <img src="images/cricket9.jpg" alt="" />
      </div>
      <div className="item" style={{ '--position': 10 }}>
        <img src="images/cricket10.jpg" alt="" />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="content">
      <h1 data-content="CSS ONLY">CSS ONLY</h1>
      <div className="author">
        <h2>CRIC HEROS</h2>
        <p><b>Web Design</b></p>
        <p>YOUR ULTIMATE CRICKET WEBSITE</p>
      </div>
      <div className="model"></div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <Slider />
      <Content />
    </div>
  );
};

export default function Home() {
  return (
    <div>
      
      <Banner />
      
    </div>
  );
}

//  'use client';
//  import '../styles/globals.css';

//  import React from 'react';
// // import CustomCarousel from '@/components/Carousel';  // Adjust this path

//  export default function Home() {
//    return (
//      <div>
//        <h1>Welcome to crekt live</h1>
//        {/* <CustomCarousel /> */}
//      </div>
//    );
//  }

// // 'use client';
// // import React from 'react';
// // import '../styles/BannerPage.module.css';  // Importing your CSS file

// // export default function Home() {
// //   return (
// //     <div className="banner">
// //       <div className="slider" style={{ "--quantity": 3 }}>
// //         <div className="item" style={{ "--position": 1 }}><img src="/images/cricket1.jpg" alt="Dragon 1" /></div>
// //         <div className="item" style={{ "--position": 2 }}><img src="/images/cricket2.jpg" alt="Dragon 2" /></div>
// //         <div className="item" style={{ "--position": 3 }}><img src="/images/cricket3.jpg" alt="Dragon 3" /></div>
// //         {/* <div className="item" style={{ "--position": 4 }}><img src="/images/dragon_4.jpg" alt="Dragon 4" /></div>
// //         <div className="item" style={{ "--position": 5 }}><img src="/images/dragon_5.jpg" alt="Dragon 5" /></div>
// //         <div className="item" style={{ "--position": 6 }}><img src="/images/dragon_6.jpg" alt="Dragon 6" /></div>
// //         <div className="item" style={{ "--position": 7 }}><img src="/images/dragon_7.jpg" alt="Dragon 7" /></div>
// //         <div className="item" style={{ "--position": 8 }}><img src="/images/dragon_8.jpg" alt="Dragon 8" /></div>
// //         <div className="item" style={{ "--position": 9 }}><img src="/images/dragon_9.jpg" alt="Dragon 9" /></div>
// //         <div className="item" style={{ "--position": 10 }}><img src="/images/dragon_10.jpg" alt="Dragon 10" /></div> */}
// //       </div>
// //       <div className="content">
// //         <h1 data-content="CSS ONLY">CSS ONLY</h1>
// //         <div className="author">
// //           <h2>LUN DEV</h2>
// //           <p><b>Web Design</b></p>
// //           <p>Subscribe to the channel to watch many interesting videos</p>
// //         </div>
// //         <div className="model"></div>
// //       </div>
// //     </div>
// //   );
// // }


// import React from 'react';
// import './globals.css'; // Assuming you move your CSS to this file

// const Banner = () => {
//   const images = [
//     'cricket1.jpg', 'cricket2.jpg', 'cricket3.jpg', 'cricket4.jpg', 'cricket5.jpg',
//     'cricket6.jpg', 'cricket7.jpg', 'cricket8.jpg', 'cricket9.jpg', 'cricket10.jpg'
//   ];

//   return (
//     <div className="banner">
//       <div className="slider" style={{'--quantity': 10}}>
//         {images.map((img, index) => (
//           <div key={index} className="item" style={{'--position': index + 1}}>
//             <img src={`images/${img}`} alt="" />
//           </div>
//         ))}
//       </div>
//       <div className="content">
//         <h1 data-content="CSS ONLY">CSS ONLY</h1>
//         <div className="author">
//           <h2>CRIC HEROS</h2>
//           <p><b>Web Design</b></p>
//           <p>YOUR ULTIMATE CRICKET WEBSITE</p>
//         </div>
//         <div className="model"></div>
//       </div>
//     </div>
//   );
// };

// export default Banner;