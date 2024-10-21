import React from 'react';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Foot = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-2 text-center md:text-left">
        
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Makerble</h3>
          <ul className="text-sm text-gray-600">
            <li className="mb-2">
              <a href="#" className="hover:underline">About us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Privacy & Cookies</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">organisations</h3>
          <ul className="text-sm text-gray-600">
            <li className="mb-2">
              <a href="#" className="hover:underline">Control Panel</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Discover the Marketplace</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Create Organisation Account</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Your Account</h3>
          <ul className="text-sm text-gray-600">
            <li className="mb-2">
              <a href="#" className="hover:underline">Library</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Profile</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Projects</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Help</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Explore</h3>
          <ul className="text-sm text-gray-600">
            <li className="mb-2">
              <a href="#" className="hover:underline">Metrics</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Networks</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Strategies</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Projects</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Studies</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Surveys</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Tips</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Vouchers</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col ">
          <h3 className="text-xl text-center font-bold text-gray-800 mb-4">Follow us</h3>
          <div className="flex justify-center gap-1">
            <a href="/" className="text-blue-500 text-2xl">
              <XIcon/>
            </a>
            <a href="/" className="text-red-500 text-2xl">
              <YouTubeIcon/>
            </a>
            <a href="/" className="text-pink-500 text-2xl">
              <InstagramIcon/>
            </a>
            <a href="/" className="text-blue-400 text-2xl">
              <LinkedInIcon/>
            </a>
            <a href="/" className="text-green-500 text-2xl">
              <FacebookIcon/>
            </a>
          </div>
        </div>

      </div>

      {/* Contact Info Section */}
      <div className="border-t border-gray-200 mt-8 py-4 text-center">
        <p className="text-sm text-gray-600">
          Contact Us: <a href="mailto:contact@makerble.com" className="text-blue-500 hover:underline">contact@makerble.com</a> | <a href="tel:02081236233" className="text-blue-500 hover:underline">020 8123 6233</a>
        </p>
        <p className="text-sm text-gray-600 mt-2">&copy; Makerble 2023</p>
      </div>
    </footer>
  );
};

export default Foot;

