


// 'use client';
// import { Carousel } from 'react-responsive-carousel';
// import CarouselSlider from '@/app/carouselSlider/page';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const HomePage = () => {
//   return (
//     <>
//       <div className="min-h-screen w-full mt-15 mb-5">
//         <div className="relative">
//           <Carousel
//             showArrows={true}
//             autoPlay={true}
//             infiniteLoop={true}
//             showThumbs={false}
//             showStatus={false}
//             interval={3000}
//           >
//             <div>
//               <img 
//               style={{height:"500px"}}
//                 src="https://media.istockphoto.com/id/1445196818/vi/anh/nh%C3%B3m-th%C3%BA-c%C6%B0ng-d%E1%BB%85-th%C6%B0%C6%A1ng-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-thi%E1%BA%BFt-k%E1%BA%BF-banner.jpg?s=612x612&w=0&k=20&c=myhE61nTrpPOv0ywv6-NXIaLXjfLPQB629P_RDAcXU4=" 
//                 alt="Monspet"
//                 className="w-full  object-cover" 
//               />
//             </div>
//             <div>
//               <img 
//               style={{height:"500px"}}
//                 src="https://product.hstatic.net/200000731893/product/cham-soc-meo_8b9638608af64d62956ff622d3117d54.png" 
//                 alt="PetCare Hub" 
//                 className="w-full  object-cover" 
//               />
//             </div>
//             <div>
//               <img 
//               style={{height:"500px"}}
//                 src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/1/18/1139516/Anh-3--Bai-So-Thich-.jpg?w=800&h=496&crop=auto&scale=both" 
//                 alt="PetCare Hub" 
//                 className="w-full  object-cover" 
//               />
//             </div>
//             <div>
//               <img 
//               style={{height:"500px"}}
//                 src="https://mediabcb.mediatech.vn/upload/image/201812/medium/58951_cham%20soc.jpg" 
//                 alt="PetCare Hub" 
//                 className="w-full object-cover" 
//               />
//             </div>
//           </Carousel>
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
//             <h2 className="text-9xl font-bold">PetCare Hub</h2>
//             <h4 className="text-2xl mt-2">Care for your pet with love and devotion. Register now to enjoy the best service</h4>
//           </div>
//         </div>
//         <div className="container mx-auto py-8 px-4">
//           <div className="flex flex-col md:flex-row mt-4">
//             <div className="md:w-1/2">
//               <div className="mt-10 text-xl text-blue-gray-700">
//                 <h2 className="text-2xl font-semibold">Introduction</h2>
//                 <br />
//                 <strong>PetCare Hub</strong> is a website dedicated to pet care services, especially grooming, care, and pet sitting services for registered time slots or daily arrangements. With a professional and dedicated team, we are committed to bringing absolute peace of mind and satisfaction for your pets.
//               </div>
//               <div className="mt-10 text-xl text-blue-gray-700">
//                 <h2 className="text-2xl font-semibold">Description</h2>
//                 <br />
//                 A comprehensive care center for your pets, offering everything from registration, care, to special services. At PetCare Hub, your pets will be cared for like family members with high-quality and professional services.
//               </div>
//             </div>
//             <div className="md:w-1/2 md:pl-8 mt-0">
//               <img 
//                 src="https://bizweb.dktcdn.net/thumb/large/100/348/235/articles/screen-shot-2019-04-21-at-4-27-02-pm.png?v=1555838839880" 
//                 alt="Monspet Information" 
//                 className="w-70 h-70 object-cover"
//                 style={{ width: '500px', height: '500px', borderRadius: '15px', fontSize: '60px' }}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-8">
//           <h2 style={{ marginLeft: "95px" }} className="text-2xl font-semibold">Our Services</h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 ml-12">
//             <div className="flex flex-col items-center">
//               <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 18h4l2-2H4v-2z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold">Grooming</h3>
//               <p className="text-blue-gray-700 text-xl mt-2">Professional grooming services for your pets</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold">Pet Care</h3>
//               <p className="text-blue-gray-700 text-xl mt-2">Comprehensive care services for your pets</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold">Hourly/Daily Care</h3>
//               <p className="text-blue-gray-700 mt-2 text-xl">Hourly or daily pet sitting services</p>
//             </div>
//           </div>
//           <div>
//             <h2 style={{ marginLeft: "95px", marginTop: "90px" }} className="text-2xl font-semibold">Pet cute</h2>
//             <CarouselSlider/>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;




'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import CarouselSlider from '@/app/carouselSlider/page';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useLanguage } from '@/context/languageContext'; // Import context

const HomePage = () => {
  const { language } = useLanguage(); // Use context to get the current language

  return (
    <>
      <div className="min-h-screen w-full mt-15 mb-5">
        <div className="relative">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            interval={3000}
          >
            <div>
              <img 
                style={{height:"500px"}}
                src="https://media.istockphoto.com/id/1445196818/vi/anh/nh%C3%B3m-th%C3%BA-c%C6%B0ng-d%E1%BB%85-th%C6%B0%C6%A1ng-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-thi%E1%BA%BFt-k%E1%BA%BF-banner.jpg?s=612x612&w=0&k=20&c=myhE61nTrpPOv0ywv6-NXIaLXjfLPQB629P_RDAcXU4=" 
                alt="Monspet"
                className="w-full object-cover" 
              />
            </div>
            <div>
              <img 
                style={{height:"500px"}}
                src="https://product.hstatic.net/200000731893/product/cham-soc-meo_8b9638608af64d62956ff622d3117d54.png" 
                alt="PetCare Hub" 
                className="w-full object-cover" 
              />
            </div>
            <div>
              <img 
                style={{height:"500px"}}
                src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/1/18/1139516/Anh-3--Bai-So-Thich-.jpg?w=800&h=496&crop=auto&scale=both" 
                alt="PetCare Hub" 
                className="w-full object-cover" 
              />
            </div>
            <div>
              <img 
                style={{height:"500px"}}
                src="https://mediabcb.mediatech.vn/upload/image/201812/medium/58951_cham%20soc.jpg" 
                alt="PetCare Hub" 
                className="w-full object-cover" 
              />
            </div>
          </Carousel>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h2 className="text-9xl font-bold">{language === 'en' ? 'PetCare Hub' : 'Trung Tâm Chăm Sóc Thú Cưng'}</h2>
            <h4 className="text-2xl mt-2">
              {language === 'en' ? 'Care for your pet with love and devotion. Register now to enjoy the best service' : 'Chăm sóc thú cưng của bạn với tình yêu và sự tận tâm. Đăng ký ngay để tận hưởng dịch vụ tốt nhất'}
            </h4>
          </div>
        </div>
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row mt-4">
            <div className="md:w-1/2">
              <div className="mt-10 text-xl text-blue-gray-700">
                <h2 className="text-2xl font-semibold">{language === 'en' ? 'Introduction' : 'Giới Thiệu'}</h2>
                <br />
                <strong>{language === 'en' ? 'PetCare Hub' : 'Trung Tâm Chăm Sóc Thú Cưng'}</strong> {language === 'en' ? 'is a website dedicated to pet care services, especially grooming, care, and pet sitting services for registered time slots or daily arrangements. With a professional and dedicated team, we are committed to bringing absolute peace of mind and satisfaction for your pets.' : 'là một trang web chuyên cung cấp dịch vụ chăm sóc thú cưng, đặc biệt là dịch vụ tắm rửa, chăm sóc và giữ thú cưng theo thời gian đăng ký hoặc theo ngày. Với đội ngũ chuyên nghiệp và tận tâm, chúng tôi cam kết mang lại sự yên tâm và hài lòng tuyệt đối cho thú cưng của bạn.'}
              </div>
              <div className="mt-10 text-xl text-blue-gray-700">
                <h2 className="text-2xl font-semibold">{language === 'en' ? 'Description' : 'Mô Tả'}</h2>
                <br />
                {language === 'en' ? 'A comprehensive care center for your pets, offering everything from registration, care, to special services. At PetCare Hub, your pets will be cared for like family members with high-quality and professional services.' : 'Một trung tâm chăm sóc toàn diện cho thú cưng của bạn, cung cấp tất cả các dịch vụ từ đăng ký, chăm sóc đến các dịch vụ đặc biệt. Tại Trung Tâm Chăm Sóc Thú Cưng, thú cưng của bạn sẽ được chăm sóc như những thành viên trong gia đình với các dịch vụ chất lượng cao và chuyên nghiệp.'}
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8 mt-0">
              <img 
                src="https://bizweb.dktcdn.net/thumb/large/100/348/235/articles/screen-shot-2019-04-21-at-4-27-02-pm.png?v=1555838839880" 
                alt="Monspet Information" 
                className="w-70 h-70 object-cover"
                style={{ width: '500px', height: '500px', borderRadius: '15px', fontSize: '60px' }}
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 style={{ marginLeft: "95px" }} className="text-2xl font-semibold">{language === 'en' ? 'Our Services' : 'Dịch Vụ Của Chúng Tôi'}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 ml-12">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500  rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 18h4l2-2H4v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{language === 'en' ? 'Grooming' : 'Tắm Rửa'}</h3>
              <p className=" text-black text-xl mt-2">{language === 'en' ? 'Professional grooming services for your pets' : 'Dịch vụ tắm rửa chuyên nghiệp cho thú cưng của bạn'}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-500  rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{language === 'en' ? 'Pet Sitting' : 'Giữ Thú Cưng'}</h3>
              <p className=" text-black  text-xl mt-2">{language === 'en' ? 'Reliable pet sitting services for your convenience' : 'Dịch vụ giữ thú cưng đáng tin cậy để bạn yên tâm'}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500  rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{language === 'en' ? 'Consultation' : 'Tư Vấn'}</h3>
              <p className=" text-black  text-xl mt-2">{language === 'en' ? 'Expert advice and consultation for pet care' : 'Tư vấn và lời khuyên chuyên gia về chăm sóc thú cưng'}</p>
            </div>
          </div>
        </div>
        <CarouselSlider />
      </div>
    </>
  );
};

export default HomePage;