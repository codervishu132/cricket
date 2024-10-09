// // src/app/components/Carousel.js

// import { useState } from 'react';
// import Image from 'next/image';  // Import Next.js Image component
// import styles from './Carousel.module.css';

// const images = [
//   { src: '/cricket1.jpg', alt: 'Cricket match 1' },
//   { src: '/cricket2.jpg', alt: 'Cricket match 2' },
//   { src: '/cricket3.jpg', alt: 'Cricket match 3' },
// ];

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastSlide = currentIndex === images.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className={styles.carousel}>
//       <button className={styles.arrow} onClick={goToPrevious}>❮</button>
//       <div className={styles.imageContainer}>
//         <Image
//           src={images[currentIndex].src}
//           alt={images[currentIndex].alt}
//           layout="fill"               
//           objectFit="cover"           
//           priority={true}             
//         />
//       </div>
//       <button className={styles.arrow} onClick={goToNext}>❯</button>
//     </div>
//   );
// }
