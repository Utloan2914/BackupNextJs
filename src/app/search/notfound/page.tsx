'use client'
import React from 'react';
import { useLanguage } from '@/context/languageContext';
const ErrorSearch = () => {
  const { language } = useLanguage(); 
  return (
    <div className="flex flex-col items-center justify-center mb-2 h-96">
      <h2 className="text-6xl font-bold text-red-500">  {language === 'en' ? 'Oop!' : 'Có lỗi!'}</h2>
      <p className="text-2xl mb-8">
      {language === 'en' ? 'Sorry, the product you are looking for could not be found.' : 'Xin lỗi, sản phẩm bạn đang tìm kiếm không thể tìm thấy.'}
      </p>
    </div>
  );
};

export default ErrorSearch;
