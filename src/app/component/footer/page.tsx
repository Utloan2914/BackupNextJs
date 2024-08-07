import React from 'react';
import { styled } from '@mui/system';
import 'animate.css';

const Logo = styled('div')({
  width: '200px',
  height: '120px',
  borderRadius: '5px',
  objectFit: 'cover',
});

const Footer = () => {
  return (
    <div>
      <section className="py-6" style={{ backgroundColor: '#062b63' }}>
        <div className="container mx-auto flex flex-wrap justify-between animate__animated animate__fadeInUp">
          <div className="w-full md:w-1/3 p-4">
            <div className="mb-4" style={{ marginBottom: '50px' }}>
              <Logo>
                <img
                  src="./img/logo.png"
                  alt="Pet Shop Logo"
                />
              </Logo>
            </div>
            <p className="text-white italic text-xl" style={{ marginTop: '80px' }}>
              PET SHOP is a vast and completely free information portal about issues surrounding pets and animals.
            </p>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-lg mb-4 text-white text-xl">Page List</h3>
            <ul className="text-white">
              <li className="mb-2">
                <a href="#" className="hover:text-black text-xl">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" target="_blank" rel="noreferrer noopener" className="text-xl hover:text-black">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#" target="_blank" rel="noreferrer noopener" className="text-xl hover:text-black">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" target="_blank" rel="noreferrer noopener" className="text-xl hover:text-black">Terms of Service</a>
              </li>
            </ul>
            <p className="text-white text-xl mt-4">
              <span>@Copyright articles belong to Monspet.com</span>
            </p>
            <p className="mt-2">
              <a className="dmca-badge" title="DMCA.com Protection Status" href="//www.dmca.com/Protection/Status.aspx?ID=0f93ff48-5a1d-4adf-9e2e-de2394ec0768">
                <img decoding="async" src="https://images.dmca.com/Badges/dmca_protected_sml_120d.png?ID=0f93ff48-5a1d-4adf-9e2e-de2394ec0768" alt="DMCA.com Protection Status" className="w-30 h-auto" />
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-xl mb-4 text-white">Follow Us At</h3>
            <div className="flex space-x-4">
              <a className="text-white text-xl hover:text-black" href="https://www.instagram.com/monspetcom/" target="_blank" rel="nofollow noopener">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a className="text-white text-xl hover:text-black" href="https://www.tiktok.com/@lethuivadongbon" target="_blank" rel="nofollow noopener">
                <i className="fab fa-tiktok text-2xl"></i>
              </a>
              <a className="text-white text-xl hover:text-black" href="https://www.pinterest.com/monspetblog/" target="_blank" rel="nofollow noopener">
                <i className="fab fa-pinterest text-2xl"></i>
              </a>
              <a className="text-white text-xl hover:text-black" href="https://www.facebook.com/monspet/" target="_blank" rel="nofollow noopener">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a className="text-white text-xl hover:text-black" href="https://twitter.com/MonsPetblog" target="_blank" rel="nofollow noopener">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a className="text-white text-xl hover:text-black" href="https://www.youtube.com/@monspetofficial" target="_blank" rel="nofollow noopener">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-white">
            Copyright © [2024] <a href="https://monspet.com/" className="hover:text-black">Monspet</a> | All rights reserved
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
