import React from 'react';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Foot = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Makerble</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">About us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition-colors">Privacy & Cookies</a>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-2xl font-bold mb-4">Organisations</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Control Panel</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Discover the Marketplace</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition-colors">Create Organisation Account</a>
            </li>
          </ul>
        </div>

      {/* // creator tarun  */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Your Account</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Library</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Profile</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition-colors">Help</a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-2xl font-bold mb-4">Explore</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Metrics</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Networks</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Strategies</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Projects</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Studies</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Surveys</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Tips</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition-colors">Vouchers</a>
            </li>
          </ul>
        </div>

       
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-center mb-4">Follow Us</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="text-blue-400 text-3xl hover:scale-150 transition-transform">
              <XIcon />
            </a>
            <a href="/" className="text-red-700 text-3xl hover:scale-150 transition-transform">
              <YouTubeIcon />
            </a>
            <a href="/" className="text-pink-800 text-3xl hover:scale-150 transition-transform">
              <InstagramIcon />
            </a>
            <a href="/" className="text-cyan-600 text-3xl hover:scale-150 transition-transform">
              <LinkedInIcon />
            </a>
            <a href="/" className="text-blue-700 text-3xl hover:scale-150 transition-transform">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-200 mt-8 py-4 text-center text-white">
        <p className="text-sm">
          Contact Us: <a href="mailto:contact@makerble.com" className="text-blue-200 hover:underline">contact@makerble.com</a> | <a href="tel:02081236233" className="text-blue-200 hover:underline">020 8123 6233</a>
        </p>
        <p className="text-sm mt-2">&copy; Makerble 2023</p>
      </div>
    </footer>
  );
};

export default Foot;


