'use client';
import React, {  createContext, useContext, Suspense, ReactNode, useState } from 'react';

import Navbar from '@/app/component/navbar/page';
import Footer from '../footer/page';
import ErrorPage from '../../error/page';
import Product from '../../productAPI/page';
import PaymentInstructions from '@/app/payment/page';
import Purchase from '@/app/purchasePetFood/page';
import ProductCard from '@/app/productCard/page';
import Login from '../../login/page';
import OrderHistory from '@/app/orderHistory/page';
import HomePage from '@/app/home/page'; 
import SendEmail from '@/app/contactUs/page';
import Register from '../../register/page';
import ViewProfile from '@/app/profile/viewProfile/page';
import EditProfile from '@/app/profile/editProfile/page';
import { usePathname } from 'next/navigation'; 
import { FormData } from '../formData/page';
import { LanguageProvider } from '@/context/languageContext';
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    phone: '',
    address: '',
    urlImage: '',
    dateOfBirth: '',
    description: '',
  });
  const [language, setLanguage] = useState<string>('en'); // Default to English
  const isAuthenticated = true;

  const handleUpdateProfile = (updatedData: FormData) => {
    setFormData(updatedData);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageProvider>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
          <main className="flex flex-col items-center justify-center">
        
            {pathname === '/viewProfile' && isAuthenticated && <ViewProfile formDataProp={formData} />}
            {pathname === '/editProfile' && isAuthenticated && <EditProfile formDataProp={formData} onUpdateProfile={handleUpdateProfile} />}
            {pathname === '/productAPI' && <Product />}
            {pathname === '/login' && <Login />}
            {pathname === '/orderHistory' && <OrderHistory />}
            {pathname === '/purchase' && <Purchase />}
            {pathname === '/register' && <Register />}
            {pathname === '/home' && <HomePage />}
            {pathname === '/sendEmail' && <SendEmail />}
            {pathname === '/productCard' && <ProductCard />}
            {pathname === '/payment' && <PaymentInstructions />}
            {pathname === '/' && <div className="w-full h-full">{children}</div>}
            {!['/', '/viewProfile', '/editProfile', '/productAPI', '/login', '/register', '/home', '/sendEmail', '/purchase', '/productCard', '/payment', '/orderHistory'].includes(pathname) && <ErrorPage />}
            
          </main>
        </Suspense>
      </div>
      <Footer />
    </div>
    </LanguageProvider>
  );
  
};

export default Layout;
