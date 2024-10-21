import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LeftDashboard = () => {
  return (
    <div className="container p-4 w-[32%] bg-slate-100 rounded-lg shadow-md">
      {/* Contacts Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-blue-500 font-semibold">15 Contacts</h2>
          <button className="bg-blue-500 text-white p-2 text-xs rounded-lg">
            + New Contact
          </button>
        </div>
        <div className="mt-4">
          <ul>
            <li className="flex items-center text-sm text-gray-600 font-semibold"><img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" /> herry</li>
            <li className="flex items-center text-sm text-gray-600 font-semibold"><img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" /> siyamadit</li>
            <li className="flex items-center text-sm text-gray-600 font-semibold"><img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" /> Claire</li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-blue-500 font-semibold">Projects</h2>
          <button className="bg-blue-500 text-white p-2 text-xs rounded-lg">
            + New Project
          </button>
        </div>
        <div className="mt-4">
          <ul>
            <li className="flex items-center text-sm text-gray-600 font-semibold"><img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" /> Training Project</li>
            <li className="flex items-center text-sm text-gray-600 font-semibold"><img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" /> test 1</li>
            <li className="flex items-center text-sm text-gray-600 font-semibold"><img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" /> test 2</li>
          </ul>
        </div>
      </div>

      {/* Albums Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-blue-500 font-semibold">Albums</h2>
          <button className="bg-blue-500 text-white p-2 text-xs rounded-lg">
            + New Album
          </button>
        </div>

        <div className="mt-4">
          <ul>
            <li className="flex items-center text-sm text-gray-600 font-semibold">
              <img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" />
              2021 Portfolio</li>
            <li className="flex items-center text-sm text-gray-600 font-semibold">
              <img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" />
              All Partners</li>
            <li className="flex items-center text-sm text-gray-600 font-semibold">
              <img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" />
              Big Lottery Fund</li>
          </ul>
        </div>

      </div>

      {/* Organisations Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-blue-500 font-semibold">Organisations</h2>
        </div>
        <div className="mt-4">
          <ul>
            <li className="flex items-center text-sm text-gray-600 font-semibold">
              <img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" />
              An Organisation Demo</li>
            <li className="flex items-center text-sm text-gray-600 font-semibold">
              <img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" />
              A Showcase International Development Education Charity</li>
            <li className="flex items-center text-sm text-gray-600 font-semibold">
              <img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/Logo1.png' alt="markable" />
              Oak Tree Secondary School</li>
          </ul>
        </div>
      </div>

      {/* Followers Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-blue-500 font-semibold">Followers</h2>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <AccountCircleIcon />
          <AccountCircleIcon />
          <AccountCircleIcon />
          <AccountCircleIcon />
          <AccountCircleIcon />
          <AccountCircleIcon />
        </div>
      </div>

      {/* People You Follow Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-blue-500 font-semibold">People You Follow</h2>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <AccountCircleIcon />
          <AccountCircleIcon />
          <AccountCircleIcon />
          <AccountCircleIcon />
          <AccountCircleIcon />
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default LeftDashboard;
