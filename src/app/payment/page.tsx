// 'use client'
// import React, { useState } from 'react';

// const PaymentInstructions = () => {
//   const [selectedFile, setSelectedFile] = useState<string | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setSelectedFile(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <section className="body-font h-screen bg-gray-100 pt-10 text-gray-600">
//       <div className="container mx-auto mt-10 flex max-w-3xl flex-wrap justify-center rounded-lg bg-white px-5 py-24">
//         <div className="flex flex-col md:flex-row w-full">
//           {/* Steps Section */}
//           <div className="md:w-1/2 flex flex-col justify-between">
//             <div className="mb-12">
//               <div className="relative flex pb-12">
//                 <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
//                   <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
//                 </div>
//                 <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="h-5 w-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//                   </svg>
//                 </div>
//                 <div className="flex-grow pl-4">
//                   <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
//                     STEP 1
//                   </h2>
//                   <p className="font-laonoto leading-relaxed">
//                     Make a payment by scanning the <br />
//                     <b>QR CODE</b> or transfer funds using the account number.
//                   </p>
//                 </div>
//               </div>
//               <div className="relative flex pb-12">
//                 <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
//                   <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
//                 </div>
//                 <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="h-5 w-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//                   </svg>
//                 </div>
//                 <div className="flex-grow pl-4">
//                   <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
//                     STEP 2
//                   </h2>
//                   <p className="font-laonoto leading-relaxed">
//                     Notify us of your payment by uploading a <b>receipt image</b> or <b>proof of payment</b>.
//                   </p>
//                 </div>
//               </div>
//               <div className="relative flex pb-12">
//                 <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="h-5 w-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle cx="12" cy="5" r="3"></circle>
//                     <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
//                   </svg>
//                 </div>
//                 <div className="flex-grow pl-4">
//                   <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
//                     STEP 3
//                   </h2>
//                   <p className="font-laonoto leading-relaxed">
//                     Once you complete the payment, please wait for our staff to verify. You can check the payment status on the <span><b>Payments</b></span> page.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* QR Code and File Upload Section */}
//           <div className="md:w-1/2 flex flex-col items-center md:items-start">
//             <img
//               className="mx-auto mt-12 h-52 w-52 rounded-lg border p-2"
//               src="https://cdn.vn.alongwalk.info/wp-content/uploads/2023/03/22182033/image-mien-phi-190-hinh-anh-hoa-hong-vang-da-lat-dep-nhat-ruc-ro-noi-bat-167945883259586.jpg"
//               alt="QR Code for Payment"
//               width={208}
//               height={208}
//             />
//             <div>
//               <h1 className="font-laonoto mt-4 text-center text-xl font-bold">
//                 Scan QR Code for Payment
//               </h1>
//               <p className="mt-2 text-center font-semibold text-gray-600">
//                 YOTHIN BOUBPHA
//               </p>
//               <p className="mt-1 text-center font-medium text-red-500">
//                 040-12-00-01166166-001
//               </p>
//             </div>

//             <div className="mt-8 w-full flex flex-col items-center">
//               <div className="m-4 w-full max-w-xs">
//                 <div className="flex w-full items-center justify-center">
//                   <label className="flex h-14 w-full cursor-pointer flex-col border-4 border-dashed border-gray-200 hover:border-gray-300 hover:bg-gray-100">
//                     <div className="mt-4 flex items-center justify-center space-x-1">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="h-6 w-6 text-gray-400"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
//                         />
//                       </svg>
//                       <p className="font-laonoto text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
//                         Upload Receipt Image
//                       </p>
//                     </div>
//                     <input
//                       type="file"
//                       className="opacity-0"
//                       onChange={handleFileChange}
//                     />
//                   </label>
//                 </div>
//                 {selectedFile && (
//                   <div className="mt-4">
//                     <img
//                       src={selectedFile}
//                       alt="Selected File Preview"
//                       className="mx-auto h-32 w-32 rounded-lg border"
//                     />
//                   </div>
//                 )}
//               </div>
//               <button className="mx-auto block rounded-md border bg-blue-500 px-6 py-2 text-white outline-none">
//                 Submit Payment Receipt
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PaymentInstructions;

// pages/checkout.js
import React from 'react';

const PaymentInstructions = () => {
  return (
    <div className="mb-36 mt-48">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-2/3 bg-white p-6 rounded-lg ">
            <h2 className="text-2xl font-bold mb-6">Check out</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                />
                <div className="mt-2">
                  <input type="checkbox" />
                  <label className="ml-2 text-gray-700">Email me with news and offers.</label>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Address (Line 02)</label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                />
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
                  <input
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Region (optional)</label>
                  <input
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                  <input
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Zip Code</label>
                  <input
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                />
              </div>
              <div className="mt-2">
                <input type="checkbox" />
                <label className="ml-2 text-gray-700">Save this information for next time.</label>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none  mt-6"
              >
                Proceed to payment
              </button>
            </form>
          </div>
          <div className="w-1/3 ml-6">
            <div className="bg-white p-6 rounded-lg ">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <img src="/path-to-image" alt="Slim Fit Checkered Trousers" className="w-16 h-16"/>
                  <div className="ml-4">
                    <p className="text-gray-700">Slim Fit Checkered Trousers</p>
                    <p className="text-gray-500">Black</p>
                    <p className="text-gray-500">Small</p>
                  </div>
                  <p className="text-gray-700">$20</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <img src="/path-to-image" alt="Relax Fit Shirt" className="w-16 h-16"/>
                  <div className="ml-4">
                    <p className="text-gray-700">Relax Fit Shirt</p>
                    <p className="text-gray-500">Blue</p>
                    <p className="text-gray-500">Medium</p>
                  </div>
                  <p className="text-gray-700">$20</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <img src="/path-to-image" alt="Jacket" className="w-16 h-16"/>
                  <div className="ml-4">
                    <p className="text-gray-700">Jacket</p>
                    <p className="text-gray-500">Badge</p>
                    <p className="text-gray-500">Large</p>
                  </div>
                  <p className="text-gray-700">$20</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-gray-700">
                  <p>Total Items</p>
                  <p>04</p>
                </div>
                <div className="flex justify-between text-gray-700">
                  <p>Total Charges</p>
                  <p>$80</p>
                </div>
                <div className="flex justify-between text-gray-700">
                  <p>Shipping Charges</p>
                  <p>$90</p>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-700 mt-4">
                  <p>Total</p>
                  <p>$170</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInstructions;
