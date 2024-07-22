import React from 'react';

const Footer = () => {
  return (
    <footer style={{  marginBottom:'0px', backgroundColor: '#5f5ff7', color: 'white' }} className="p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl text-white font-bold">SapotaCorp</h3>
          <p className="text-xm text-white mt-2">Building the future of technology.</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-xm text-white">
            &copy; 2024 SapotaCorp Company. All rights reserved.
          </p>
          <p className="text-xm mt-2 text-white">
            Address: 1234 Example St, City, Country <br />
            Phone: +123 456 789 <br />
            Email: info@sapotacorp.com
          </p>
        </div>
        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a href="/home" className="hover:text-gray-300 font-bold text-white transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/sendEmail" className="hover:text-gray-300 font-bold text-white transition duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
