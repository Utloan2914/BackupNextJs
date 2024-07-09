'use client';
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { FormData } from '../../component/formData/page';

interface EditProfileProps {
  formDataProp: FormData;
  onUpdateProfile: (updatedData: FormData) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ formDataProp, onUpdateProfile }) => {
  const [formData, setFormData] = useState<FormData | null>(formDataProp);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

    const { name, email, password, phone, address } = formData;

    if (!name || !email || !password || !phone || !address) {
      setError('All fields are required.');
      return;
    }

    onUpdateProfile(formData);

    localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem('urlImage', formData.urlImage || '');
    setSuccess('Profile updated successfully!');
    router.push('/viewProfile');
  };

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full pt-10 min-h-screen flex justify-center items-start dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 w-full max-w-4xl p-8 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className=" title text-2xl font-bold text-center  w-full">Edit Profile</h2>
          <button
            onClick={() => router.push('/viewProfile')}
            className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {error && <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>}
        {success && <div className="bg-green-500 text-white p-2 rounded mb-4">{success}</div>}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Part */}
          <div className="flex flex-col">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Name</dt>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Password</dt>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone</dt>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Right Part */}
          <div className="flex flex-col">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Address</dt>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Your address"
              value={formData.address}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Choose Image</dt>
            <input
              type="file"
              accept="image/*"
              name="urlImage"
              id="urlImage"
              onChange={handleImageChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-2 flex justify-center">
              <img
                src={formData.urlImage || '/image/defaultImage.png'}
                alt="User Image"
                className="w-40 h-40 rounded-full object-cover border border-gray-300"
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
