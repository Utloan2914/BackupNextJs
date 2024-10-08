

// 'use client';
// import React, { FC } from 'react';
// import 'react-image-gallery/styles/css/image-gallery.css';
// import '../carouselSlider/style.scss'; // Import CSS styles here

// export const CarouselSlider: FC = () => {
//   const images = [
//     {
//       original: './img/meo1.jpg',
//       thumbnail: './img/meo1.jpg',
//       description: 'Whiskers',
//       smallDescription: 'Adorable and fluffy!',
//     },
//     {
//       original: './img/meo2.jpg',
//       thumbnail: './img/meo2.jpg',
//       description: 'Fluffy',
//       smallDescription: 'Adorable and fluffy!',
//     },
//     {
//       original: './img/meo3.jpg',
//       thumbnail: './img/meo3.jpg',
//       description: 'Mittens',
//       smallDescription: 'Adorable and fluffy!',
//     },
//     {
//       original: './img/meo4.jpg',
//       thumbnail: './img/meo4.jpg',
//       description: 'Shadow',
//       smallDescription: 'Adorable and fluffy!',
//     },
//     {
//       original: './img/meo5.jpg',
//       thumbnail: './img/meo5.jpg',
//       description: 'Smokey',
//       smallDescription: 'Adorable and fluffy!',
//     },
//     {
//       original: './img/meo6.jpg',
//       thumbnail: './img/meo6.jpg',
//       description: 'Tiger',
//       smallDescription: 'Adorable and fluffy!',
//     },
//     {
//       original: './img/meo7.jpg',
//       thumbnail: './img/meo7.jpg',
//       description: 'Simba',
//       smallDescription: 'Adorable and fluffy!',
//     },
//     {
//       original: './img/meo8.jpg',
//       thumbnail: './img/meo8.jpg',
//       description: 'Rex',
//       smallDescription: 'Adorable and fluffy!',
//     },
//     {
//       original: './img/meo9.jpg',
//       thumbnail: './img/meo9.jpg',
//       description: 'Daisy',
//       smallDescription: 'Adorable and fluffy!',
//     },
//     {
//       original: './img/meo10.jpg',
//       thumbnail: './img/meo10.jpg',
//       description: 'Charlie',
//       smallDescription: 'Adorable and fluffy!',
//     },
//     {
//       original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZRAtmG6JduuiDQBdlwQYIcDRza4Lb2lqlA&s',
//       thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZRAtmG6JduuiDQBdlwQYIcDRza4Lb2lqlA&s',
//       description: 'Peanut',
//       smallDescription: 'Adorable and fluffy!',
//     },
//     {
//       original: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/11/20/975861/5-Giong-Cho-Long-Xu-.jpg',
//       thumbnail: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/11/20/975861/5-Giong-Cho-Long-Xu-.jpg',
//       description: 'Snowball',
//       smallDescription: 'Adorable and fluffy!',
//     },
//   ];

//       return (
//         <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-y-11" style={{ columnGap: '2px', marginLeft: '100px' }}>
//           {images.map((image, index) => (
//             <div key={index} className="text-black max-w-sm rounded overflow-hidden shadow-lg bg-white">
//               <div className="overflow-hidden">
//                 <img
//                   className="w-full h-96 object-cover transform transition-transform duration-200 ease-in-out hover:scale-110"
//                   src={image.original}
//                   alt={image.description}
//                 />
//               </div>
//               <div className="px-6 py-4 mb-0">
//                 <div className="font-bold text-xl mb-2">{image.description}</div>
//                 <p className="text-black text-xl">{image.smallDescription}</p>
//               </div>
//               <div className="px-6 pt-4 pb-2">
//                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     };
    
//     export default CarouselSlider;
    


'use client';
import React, { FC } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../carouselSlider/style.scss'; // Import CSS styles here
import { useLanguage } from '@/context/languageContext'; // Import context

export const CarouselSlider: FC = () => {
  const { language } = useLanguage(); // Use context to get the current language

  // Define images with descriptions in different languages
  const images = [
    {
      original: './img/meo1.jpg',
      thumbnail: './img/meo1.jpg',
      description: language === 'en' ? 'Whiskers' : 'Whiskers',
      smallDescription: language === 'en' ? 'Adorable and fluffy!' : 'Dễ thương và xù lông!',
    },
    {
      original: './img/meo2.jpg',
      thumbnail: './img/meo2.jpg',
      description: language === 'en' ? 'Fluffy' : 'Fluffy',
      smallDescription: language === 'en' ? 'Adorable and fluffy!' : 'Dễ thương và xù lông!',
    },
        {
      original: './img/meo3.jpg',
      thumbnail: './img/meo3.jpg',
      description: 'Mittens',
      smallDescription: language === 'en' ? 'Adorable and fluffy!' : 'Dễ thương và xù lông!',
    },
    {
      original: './img/meo4.jpg',
      thumbnail: './img/meo4.jpg',
      description: 'Shadow',
      smallDescription: language === 'en' ? 'Adorable and fluffy!' : 'Dễ thương và xù lông!',
    },
    {
      original: './img/meo5.jpg',
      thumbnail: './img/meo5.jpg',
      description: 'Smokey',
      smallDescription:language === 'en' ? 'Adorable and fluffy!' : 'Dễ thương và xù lông!',
    },
    {
      original: './img/meo6.jpg',
      thumbnail: './img/meo6.jpg',
      description: 'Tiger',
      smallDescription:language === 'en' ? 'Adorable and fluffy!' : 'Dễ thương và xù lông!',
    },
    {
      original: './img/meo7.jpg',
      thumbnail: './img/meo7.jpg',
      description: 'Simba',
      smallDescription:language === 'en' ? 'Adorable and fluffy!' : 'Dễ thương và xù lông!',
    },
    {
      original: './img/meo8.jpg',
      thumbnail: './img/meo8.jpg',
      description: 'Rex',
      smallDescription:language === 'en' ? 'Adorable and fluffy!' : 'Dễ thương và xù lông!',
    },
    {
      original: './img/meo9.jpg',
      thumbnail: './img/meo9.jpg',
      description: 'Daisy',
      smallDescription:language === 'en' ? 'Adorable and fluffy!' : 'Dễ thương và xù lông!',
    },
    {
      original: './img/meo10.jpg',
      thumbnail: './img/meo10.jpg',
      description: 'Charlie',
      smallDescription:language === 'en' ? 'Adorable and fluffy!' : 'Dễ thương và xù lông!',
    },
    {
      original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZRAtmG6JduuiDQBdlwQYIcDRza4Lb2lqlA&s',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZRAtmG6JduuiDQBdlwQYIcDRza4Lb2lqlA&s',
      description: 'Peanut',
      smallDescription:language === 'en' ? 'Adorable and fluffy!' : 'Dễ thương và xù lông!',
    },
    {
      original: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/11/20/975861/5-Giong-Cho-Long-Xu-.jpg',
      thumbnail: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/11/20/975861/5-Giong-Cho-Long-Xu-.jpg',
      description: 'Snowball',
      smallDescription:language === 'en' ? 'Adorable and fluffy!' : 'Dễ thương và xù lông!',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-y-11" style={{ columnGap: '2px', marginLeft: '100px' }}>
      {images.map((image, index) => (
        <div key={index} className="text-black max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="overflow-hidden">
            <img
              className="w-full h-96 object-cover transform transition-transform duration-200 ease-in-out hover:scale-110"
              src={image.original}
              alt={image.description}
            />
          </div>
          <div className="px-6 py-4 mb-0">
            <div className="font-bold text-xl mb-2">{image.description}</div>
            <p className="text-black text-xl">{image.smallDescription}</p>
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
