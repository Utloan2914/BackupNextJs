'use client'
import Head from 'next/head';
import CarouselSlider from '@/app/carouselSlider/page';
import { useState } from 'react';
const HomePage = () => {
  return (
  <>
    <div style={{marginTop:"100px"}}  className="min-h-screen w-full mt-15 mb-5">
      <div className="relative">
        <img 
          src="https://media.istockphoto.com/id/1445196818/vi/anh/nh%C3%B3m-th%C3%BA-c%C6%B0ng-d%E1%BB%85-th%C6%B0%C6%A1ng-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-thi%E1%BA%BFt-k%E1%BA%BF-banner.jpg?s=612x612&w=0&k=20&c=myhE61nTrpPOv0ywv6-NXIaLXjfLPQB629P_RDAcXU4=" 
          alt="Monspet" 
          className="w-full h-full object-cover" // Tailwind CSS class for width: 100% and height: 400px
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
          <h2 className="text-9xl font-bold">PetCare Hub</h2>
          <h4 className="text-2xl mt-2">Care for your pet with love and devotion. Register now to enjoy the best service</h4>
        </div>
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row mt-4">
          <div className="md:w-1/2">
            <div className="mt-10 text-xl text-blue-gray-700">
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <br />
              <strong>PetCare Hub</strong>is a website dedicated to pet care services, especially grooming, care, and pet sitting services for registered time slots or daily arrangements. With a professional and dedicated team, we are committed to bringing absolute peace of mind and satisfaction for your pets.
            </div>
            <div className="mt-10 text-xl text-blue-gray-700">
              <h2 className="text-2xl font-semibold">Description</h2>
              <br />
              A comprehensive care center for your pets, offering everything from registration, care, to special services. At PetCare Hub, your pets will be cared for like family members with high-quality and professional services.
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-0">
            <img 
              src="https://bizweb.dktcdn.net/thumb/large/100/348/235/articles/screen-shot-2019-04-21-at-4-27-02-pm.png?v=1555838839880" 
              alt="Monspet Information" 
              className="w-70 h-70 object-cover "
              style={{ width: '500px', height: '500px', borderRadius: '15px', fontSize: '60px' }}
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
      <h2 style={{marginLeft:"95px"}} className="text-2xl font-semibold">Our Services</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 ml-12">
  
  <div className="flex flex-col items-center">
    <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 18h4l2-2H4v-2z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold">Grooming</h3>
    <p className="text-blue-gray-700 mt-2">Professional grooming services for your pets</p>
  </div>
  <div className="flex flex-col items-center">
    <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold">Pet Care</h3>
    <p className="text-blue-gray-700 mt-2">Comprehensive care services for your pets</p>
  </div>
  <div className="flex flex-col items-center">
    <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold">Hourly/Daily Care</h3>
    <p className="text-blue-gray-700 mt-2">Hourly or daily pet sitting services</p>
  </div>
</div>
<div>
  
<h2 style={{marginLeft:"95px", marginTop:"90px"}} className="text-2xl font-semibold">Pet cute</h2>

<CarouselSlider/>
</div>

      </div>
    </div>
  </>
);
}
export default HomePage;
