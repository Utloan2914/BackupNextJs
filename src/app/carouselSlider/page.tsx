// 'use client';
// import React, { FC } from 'react';
// import 'react-image-gallery/styles/css/image-gallery.css';
// import ImageGallery from 'react-image-gallery';
// import '../carouselSlider/style.scss'; 

// export const CarouselSlider: FC = () => {
//   const images = [
//     {
//       original: './img/meo1.jpg',
//       thumbnail: './img/meo1.jpg',
//       description: 'Hello, have a nice day!',
//     },
//     {
//       original: './img/cucmo.png',
//       thumbnail: './img/cucmo.png',
//       description: 'Hello, have a nice day!',
//     },
//     {
//       original: './img/meo8.jpg',
//       thumbnail: './img/meo8.jpg',
//       description: 'Hello, have a nice day!',
//     },
//     {
//       original: './img/meo8.jpg',
//       thumbnail: './img/meo8.jpg',
//       description: 'Hello, have a nice day!',
//     },
//     {
//       original: './img/meo7.jpg',
//       thumbnail: './img/meo7.jpg',
//       description: 'Hello, have a nice day!',
//     },
//     {
//       original: './img/meo8.jpg',
//       thumbnail: './img/meo8.jpg',
//       description: 'Hello, have a nice day!',
//     },
//     {
//       original: './img/meo8.jpg',
//       thumbnail: './img/meo8.jpg',
//       description: 'Hello, have a nice day!',
//     },
//     {
//       original: './img/meo8.jpg',
//       thumbnail: './img/meo8.jpg',
//       description: 'Hello, have a nice day!',
//     },
//     {
//       original: './img/meo8.jpg',
//       thumbnail: './img/meo8.jpg',
//       description: 'Hello, have a nice day!',
//     },
//     {
//       original: './img/meo8.jpg',
//       thumbnail: './img/meo8.jpg',
//       description: 'Hello, have a nice day!',
//     },
//   ];

//   return (
//     <div className="custom-gallery-container">
//       <ImageGallery
//         items={images}
//         showThumbnails={true}
//         showBullets={true}
//         showFullscreenButton={true}
//         showPlayButton={false}
//         slideInterval={2800}
//         autoPlay={true}
//         renderItem={(item) => {
//           console.log('Rendering item:', item); // Debug log
//           return (
//             <div className="image-gallery-item">
//               <img src={item.original} alt={item.description} />
//               <div className="lightGallery-captions">
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           );
//         }}
//       />
//     </div>
//   );
// };

// export default CarouselSlider;

'use client';
import React, { FC } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../carouselSlider/style.scss'; // Import CSS styles here

export const CarouselSlider: FC = () => {
  const images = [
    {
      original: './img/meo1.jpg',
      thumbnail: './img/meo1.jpg',
      description: 'Whiskers',
      smallDescription: 'Adorable and fluffy!',
    },
    {
      original: './img/meo2.jpg',
      thumbnail: './img/meo2.jpg',
      description: 'Fluffy',
      smallDescription: 'Adorable and fluffy!',
    },
    {
      original: './img/meo3.jpg',
      thumbnail: './img/meo3.jpg',
      description: 'Mittens',
      smallDescription: 'Adorable and fluffy!',
    },
    {
      original: './img/meo4.jpg',
      thumbnail: './img/meo4.jpg',
      description: 'Shadow',
      smallDescription: 'Adorable and fluffy!',
    },
    {
      original: './img/meo5.jpg',
      thumbnail: './img/meo5.jpg',
      description: 'Smokey',
      smallDescription: 'Adorable and fluffy!',
    },
    {
      original: './img/meo6.jpg',
      thumbnail: './img/meo6.jpg',
      description: 'Tiger',
      smallDescription: 'Adorable and fluffy!',
    },
    {
      original: './img/meo7.jpg',
      thumbnail: './img/meo7.jpg',
      description: 'Simba',
      smallDescription: 'Adorable and fluffy!',
    },
    {
      original: './img/meo8.jpg',
      thumbnail: './img/meo8.jpg',
      description: 'Rex',
      smallDescription: 'Adorable and fluffy!',
    },
    {
      original: './img/meo9.jpg',
      thumbnail: './img/meo9.jpg',
      description: 'Daisy',
      smallDescription: 'Adorable and fluffy!',
    },
    {
      original: './img/meo10.jpg',
      thumbnail: './img/meo10.jpg',
      description: 'Charlie',
      smallDescription: 'Adorable and fluffy!',
    },
    {
      original: './img/meo11.jpg',
      thumbnail: './img/meo11.jpg',
      description: 'Peanut',
      smallDescription: 'Adorable and fluffy!',
    },
    {
      original: './img/meo12.jpg',
      thumbnail: './img/meo12.jpg',
      description: 'Snowball',
      smallDescription: 'Adorable and fluffy!',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-y-11" style={{ columnGap: '2px', marginLeft: '100px' }}>
      {images.map((image, index) => (
        <div key={index} className="text-black max-w-sm rounded overflow-hidden shadow-lg bg-white" >
          <img
    className="w-full"
    style={{
      height: '400px',
      objectFit: 'cover',
      transform: 'scale(1.0)',
      transition: 'transform 0.2s ease-in-out'
    }}
    src={image.original}
    alt={image.description}
  />
  <div className="px-6 py-4 mb-0">
            <div className="font-bold text-xl mb-2">{image.description}</div>
            <p className="text-black">{image.smallDescription}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselSlider;
