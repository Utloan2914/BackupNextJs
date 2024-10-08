'use client';
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { FormData } from '../../component/formData/page';
import { useLanguage } from '@/context/languageContext';

interface ViewProfileProps {
  formDataProp: FormData;
  onUpdateProfile?: (updatedData: FormData) => void;
}
const ViewProfile: React.FC<ViewProfileProps> = ({ formDataProp, onUpdateProfile = () => {} }) => {
  const [formData, setFormData] = useState<FormData | null>(formDataProp);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showForm, setShowForm] = useState(false); 
  const router = useRouter();
  const [user, setUser] = useState<FormData | null>(null);
  const { language } = useLanguage();

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

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('formData') || '{}');
    setUser(storedUser);
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
  
    try {
      onUpdateProfile(formData);
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('urlImage', formData.urlImage || '');
      setUser(formData);
  
      setSuccess('Profile updated successfully!');
      setShowForm(false);
      setTimeout(() => {
        setSuccess('');
      }, 2000);
    } catch (e) {
      if (e instanceof DOMException && e.name === 'QuotaExceededError') {
        setError('Local storage quota exceeded. Please clear some data.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };
  if (!user || !formData) {
    return <div>Loading...</div>;
  }
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };
  const fullNameLabel = language === 'en' ? 'Full Name' : 'Tên của bạn';
  const addressLabel = language === 'en' ? 'Address' : 'Địa chỉ';
  const birthdayLabel = language === 'en' ? 'Birthday' : 'Ngày sinh';
  const emailLabel = language === 'en' ? 'Email Address' : 'Địa chỉ Email';
  const passwordLabel = language === 'en' ? 'Password' : 'Mật khẩu';
  const phoneLabel = language === 'en' ? 'Phone Number' : 'Số điện thoại';
  const descriptionLabel = language === 'en' ? 'Description' : 'Mô tả';
  const saveButtonLabel = language === 'en' ? 'Save All' : 'Lưu tất cả';
  const returnButtonLabel = language === 'en' ? 'Back Home' : 'Quay về trang chủ';
  const generalInformationTitle = language === 'en' ? 'Edit profile' : 'Chỉnh sửa thông tin';

  return (
    <div className="flex flex-col lg:flex-row p-6 gap-6 text-black justify-center mt-11 mb-11 items-center">
      {showForm ? (
        <>
          <div className="bg-white  rounded-lg p-6" style={{ width: "80%" }}>
            <h2 className="text-3xl text-center font-bold mb-4">{generalInformationTitle}</h2>
            {error && <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>}
            {success && <div className="bg-green-500 text-white p-2 rounded mb-4">{success}</div>}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xl font-bold">{fullNameLabel}</label>
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
                <label className="block text-xl font-bold">{addressLabel}</label>
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
                <label className="block text-xl font-bold">{birthdayLabel}</label>
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
                <label className="block text-xl font-bold">{emailLabel}</label>
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
                <label htmlFor="password" className="text-xl font-bold">{passwordLabel}</label>
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
                <label className="block text-xl font-bold">{phoneLabel}</label>
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
                <label htmlFor="description" className="text-xl font-bold">{descriptionLabel}</label>
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
                <label htmlFor="urlImage" className="text-xl font-bold">{language === 'en' ? 'Profile Image: ' : 'Ảnh đại diện:'}</label>
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
              <div className="col-span-2 flex">
  <button
    type="button"
    className="mt-4 text-xl bg-blue-700 text-white p-3 w-1/2 rounded-lg hover:bg-blue-900 mx-3"
    onClick={() => setShowForm(false)} 
  >
    {returnButtonLabel}
  </button>
  <button
    type="submit"
    className="mt-4 text-xl bg-blue-700 text-white p-3 w-1/2 rounded-lg hover:bg-blue-900 mx-3"
  >
    {saveButtonLabel}
  </button>
</div>

            </form>
          </div>
        </>
      ) : (
<div className="flex flex-col items-center bg-white rounded-lg shadow-md mx-auto" style={{ width: '800px' }}>
  <img
    className="w-full h-64 object-cover rounded-t-lg"
    src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    alt="Mountain"
  />
  <div className="relative -mt-20 overflow-hidden">
    <div className="w-32 h-32 mx-auto rounded-full border-4 border-white">
      <img
        className="w-full h-full object-cover rounded-full"
        src={user.urlImage}
        alt="User Image"
      />
    </div>
  </div>
  <div className="text-center mt-2 mb-7">
    <h2 className="text-2xl font-bold">{user.name}</h2>
  </div>
  <div className="px-6 pb-6 w-full">
    <div className="flex justify-between items-center">
      <p className="text-xl text-gray-800 w-1/2 pr-2">
        <span className="font-bold">{language === 'en' ? 'Email: ' : 'Email: '}</span>
        {user.email}
      </p>
      <p className="text-xl text-gray-800 w-1/2 pl-2">
        <span className="font-bold">{language === 'en' ? 'Phone: ' : 'Số điện thoại: '}</span>
        {user.phone}
      </p>
    </div>
    <div className="flex">
      <div className="w-1/2 pr-2">
        <p className="text-xl text-gray-800 mb-3">
          <span className="font-bold">{language === 'en' ? 'Birthday: ' : 'Ngày sinh: '}</span>
          {formatDate(user.dateOfBirth)}
        </p>
      </div>
      <div className="w-1/2 pl-2">
        <p className="text-xl text-gray-800">
          <span className="font-bold">{language === 'en' ? 'Address: ' : 'Địa chỉ: '}</span>
          {user.address}
        </p>
      </div>
    </div>
    <div>
      <p className="text-xl font-bold text-gray-800">{language === 'en' ? 'Description:' : 'Mô tả:'}</p>
      <p className="text-gray-500 text-xl">{user.description}</p>
    </div>
    <button
      onClick={() => setShowForm(true)}
      className="mt-4 mb-4 text-xl bg-blue-700 text-white py-3 px-4 w-full rounded-lg hover:bg-blue-900"
    >
      {language === 'en' ? 'Edit Profile' : 'Chỉnh sửa hồ sơ'}
    </button>
  </div>
</div>


      )}
    </div>
  );
};

export default ViewProfile;