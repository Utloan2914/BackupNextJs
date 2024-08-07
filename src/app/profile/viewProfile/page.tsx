


// import React, { useEffect, useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import { FormData } from '../../component/formData/page';
// import Link from 'next/link';

// interface ViewProfileProps {
//     formData: FormData;
// }

// const ViewProfile: React.FC<ViewProfileProps> = ({ formData }) => {
//     const [user, setUser] = useState<FormData | null>(null);

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem('formData') || '{}');
//         setUser(storedUser);
//     }, []);

//     if (!user) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <section className="w-full overflow-hidden dark:text-white mx-auto">
//             <div className="flex flex-col">
//                 {/* Cover Image */}
//                 <img 
//                     src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" 
//                     alt="User Cover" 
//                     className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem] object-cover" 
//                 />

//                 {/* Profile Image and Name */}
//                 <div className="sm:w-[80%] xs:w-[90%] mx-auto flex items-center justify-between">
//                     <div className="flex items-center">
//                         <Avatar
//                             alt="User Image"
//                             src={user.urlImage}
//                             className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
//                         />
//                         <h2 className="w-full my-4  text-3xl font-bold" style={{ marginLeft: '20px' }}>
//                             {user.name}
//                         </h2>

//                     </div>
//                     <Link href="/editProfile">
//                         <button className="mt-2 px-6 py-2 bg-blue-500 text-white text-bold rounded-sm shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//                             Edit Profile
//                         </button>
//                     </Link>
//                 </div>

//                 {/* Description and Details */}
//                 <div className="xl:w-[80%] lg:w-[90%]  md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
//                 <p className="w-fit  text-lg sm:text-xl md:text-lg lg:text-xl">
//                     {user.description || 'No description provided.'}
//                 </p>

//                     {/* Display user information */}
//                     <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
//                         <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-between">
//                             <div className="flex-1">
//                                 <dl className=" divide-y divide-gray-200">
//                                     <div className="flex flex-col pb-3">
//                                         <dt className="mb-1 text-xl ">Email</dt>
//                                         <dd className="text-lg text-xl break-words">{user.email}</dd>
//                                     </div>
//                                     <div className="flex flex-col py-3">
//                                         <dt className="mb-1 text-xl ">Phone</dt>
//                                         <dd className="text-lg text-xl">{user.phone}</dd>
//                                     </div>
//                                 </dl>
//                             </div>
//                             <div className="flex-1">
//                                 <dl className="divide-y divide-gray-200 ">
//                                     <div className="flex flex-col pb-3">
//                                         <dt className="mb-1 text-xl ">Address</dt>
//                                         <dd className="text-lg text-xl">{user.address}</dd>
//                                     </div>
//                                     <div className="flex flex-col py-3">
//                                         <dt className="mb-1 text-xl ">Date of birth</dt>
//                                         <dd className="text-lg text-xl">{user.dateOfBirth || 'Not provided'}</dd>
//                                     </div>
//                                 </dl>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

// export default ViewProfile;



'use client';
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/navigation';
import { FormData } from '../../component/formData/page';

// Đặt giá trị mặc định cho onUpdateProfile là một hàm trống
interface ViewProfileProps {
  formDataProp: FormData;
  onUpdateProfile?: (updatedData: FormData) => void; // optional function
}

const ViewProfile: React.FC<ViewProfileProps> = ({ formDataProp, onUpdateProfile = () => {} }) => {
  const [formData, setFormData] = useState<FormData | null>(formDataProp);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();
  const [user, setUser] = useState<FormData | null>(null);

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    const storedImage = localStorage.getItem('urlImage');
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);
      if (storedImage) {
        parsedFormData.urlImage = storedImage;
      }
      setFormData(parsedFormData);
    } else if (storedImage) {
      setFormData(prevState => ({
        ...prevState!,
        urlImage: storedImage
      }));
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState!,
      [name]: value
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prevState => ({
        ...prevState!,
        urlImage: imageUrl
      }));
      localStorage.setItem('urlImage', imageUrl);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData) return;

    const { name, email, password, phone, address, description, dateOfBirth } = formData;

    if (!name || !email || !password || !phone || !address || !description || !dateOfBirth) {
      setError('All fields are required.');
      return;
    }

    onUpdateProfile(formData);
    localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem('urlImage', formData.urlImage || '');
    setSuccess('Profile updated successfully!');
    router.push('/viewProfile');
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('formData') || '{}');
    setUser(storedUser);
  }, []);

  if (!user || !formData) {
    return <div>Loading...</div>;
  }

  // Helper function to format the date
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="flex flex-col lg:flex-row p-6 gap-6  text-black justify-center mt-11 mb-11 items-center">
      <div className="bg-white shadow-lg rounded-lg p-6" style={{ width: "50%" }}>
        <h2 className="text-3xl text-center font-bold mb-4">General Information</h2>
        {error && <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>}
        {success && <div className="bg-green-500 text-white p-2 rounded mb-4">{success}</div>}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xl font-bold">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border text-xl border-gray-300 rounded-md w-full"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-xl font-bold">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 text-xl p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter your address"
            />
          </div>
          <div>
            <label className="block text-xl font-bold">Birthday</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 text-xl rounded-md w-full"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div>
            <label className="block text-xl font-bold">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 text-xl rounded-md w-full"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xl font-bold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 border text-xl border-gray-300 rounded-md w-full"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-xl font-bold">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-xl w-full"
              placeholder={formData.phone}
            />
          </div>
          <div>
  <label htmlFor="description" className="text-xl font-bold">Description</label>
  <textarea
    id="description"
    name="description"
    value={formData.description}
    onChange={handleChange}
    className="mt-1 p-2 border dark:bg-white border-gray-300 rounded-md text-xl w-full h-40 overflow-y-auto bg-white"
    placeholder="Tell us something about yourself"
  ></textarea>
</div>

          <div className="flex flex-col">
            <label htmlFor="urlImage" className="text-xl font-bold">Profile Image</label>
            <input
              type="file"
              id="urlImage"
              name="urlImage"
              onChange={handleImageChange}
              accept="image/*"
              className="mt-1 text-xl p-2 border border-gray-300 rounded-md w-full"
            />
            {formData.urlImage && (
              <div className="flex justify-center w-full mt-4">
                <img
                  src={formData.urlImage}
                  alt="Profile Preview"
                  className="border-2 border-gray-300"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full text-xl bg-blue-500 text-white p-2 font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save All
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white h-auto rounded-lg p-6" style={{ width: "40%" }}>
        <img
          className="w-full"
          style={{ height: "230px", borderRadius:"4px" }}
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
        <div className="mx-auto w-32 h-32 relative -mt-16 overflow-hidden">
          <Avatar
            alt="User Image"
            src={user.urlImage}
            className="w-32 h-32 text-xl rounded-full border-4 border-white"
          />
        </div>
        <div className="text-center mt-2 mb-2">
          <h2 className="text-2xl font-bold">{user.name}</h2>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2">
            <div className="text-left ">
              <p className="text-xl text-black mb-3"><span className="font-bold">Email: </span>{user.email}</p>
            </div>
            <div className="text-left">
              <p className="text-xl text-black mb-3"><span className="font-bold">Phone: </span>{user.phone}</p>
            </div>
          </div>
          <div className="w-1/2">
    <div className="text-left">
      <p className="text-xl text-black mb-3"><span className="font-bold">Birthday: </span>{formatDate(user.dateOfBirth)}</p>
    </div>
    <div className="text-left">
      <p className="text-xl text-black"><span className="font-bold">Address: </span>{user.address}</p>
    </div>
  </div>
        </div>
        <div>
          <p className="text-xl font-bold text-black">Description:</p>
          <p className="text-gray-400 text-xl text-black" style={{ height: '200px' }}>{user.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
