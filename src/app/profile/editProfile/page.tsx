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

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-10 flex justify-center items-start dark:bg-gray-900" style={{ width: '30%' }}>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full">
        <h2 className="title text-4xl font-bold text-center mb-6">Edit Profile</h2>
        {error && <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>}
        {success && <div className="bg-green-500 text-white p-2 rounded mb-4">{success}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-black text-xl font-bold">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-black text-xl font-bold">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control text-lg text-xl w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="password" className="text-black text-xl font-bold">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control text-lg text-xl w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-black text-xl font-bold">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control w-full text-lg text-xl p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="address" className="text-black text-xl font-bold">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control text-lg text-xl w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="dateOfBirth" className="text-black text-xl font-bold">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="form-control w-full text-lg text-xl p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-black text-xl font-bold">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="urlImage" className="text-black text-xl font-bold">Profile Image:</label>
            <input
              type="file"
              id="urlImage"
              name="urlImage"
              onChange={handleImageChange}
              accept="image/*"
              className="form-control w-full p-2 text-lg text-xl rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            
            {formData.urlImage && (
              <div className="flex justify-center w-full mt-4">
                <img 
                  src={formData.urlImage} 
                  alt="Profile Preview" 
                  className="border-2 border-gray-300" 
                  style={{ borderWidth: '5px', borderStyle: 'solid', width: '200px', height: '200px' }} 
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 text-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
