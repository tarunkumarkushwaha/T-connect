import React, { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Modal from "./Modal";


const LeftDashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [contacts, setcontacts] = useState(["herry", "siyamadit", "Claire"]);
  const [projects, setprojects] = useState(["Training Project", "Test Project 1", "Training Project 2"]);
  const [albums, setalbums] = useState(["2021 Portfolio", "All Partners", "Big Lottery Fund"])

  const handleAdd = (data) => {
    if (modalType == "project") {
      setprojects(prev => [...prev, data]);
    }
    else if (modalType == "contact") {
      setcontacts(prev => [...prev, data]);
    }
    else if (modalType == "albums") {
      setalbums(prev => [...prev, data]);
    }
    setModalOpen(false);
  };

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  // d dummy data

  let organisations = ["An Organisation Demo", "A Showcase International Development Education Charity", "Oak Tree Secondary School"];
  let followers = [1, 2, 3, 4, 5, 6]
  let peopleYouFollow = [1, 2, 3, 4]


  return (
    <div className="container p-4 w-[32%] bg-slate-100 rounded-lg shadow-md">

      {/* Contacts Section */}

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-blue-500 font-semibold">Contacts</h2>
          <button onClick={() => openModal('contact')} className="bg-blue-500 text-white p-2 text-xs rounded-lg">
            + New Contact
          </button>
        </div>
        <div className="mt-4">
          <ul>
            {contacts.map((contact, i) => <li key={i} className="flex items-center text-sm text-gray-600 font-semibold"><img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" /> {contact}</li>)}
          </ul>
        </div>
      </div>

      {/* Projects Section */}

      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-blue-500 font-semibold">Projects</h2>
          <button onClick={() => openModal('project')} className="bg-blue-500 text-white p-2 text-xs rounded-lg">
            + New Project
          </button>
        </div>
        <div className="mt-4">
          <ul>
            {projects.map((project, i) => <li key={i} className="flex items-center text-sm text-gray-600 font-semibold"><img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" /> {project}</li>)}
          </ul>
        </div>
      </div>

      {/* Albums Section */}

      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-blue-500 font-semibold">Albums</h2>
          <button onClick={() => openModal('albums')} className="bg-blue-500 text-white p-2 text-xs rounded-lg">
            + New Album
          </button>
        </div>

        <div className="mt-4">
          <ul>
            {albums.map((album, i) => <li key={i} className="flex items-center text-sm text-gray-600 font-semibold">
              <img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" />
              {album}</li>)}
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
            {organisations.map((organisation, i) => <li key={i} className="flex items-center text-sm text-gray-600 font-semibold">
              <img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" />
              {organisation}</li>)}
          </ul>
        </div>
      </div>

      {/* Followers Section */}

      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-blue-500 font-semibold">Followers</h2>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {followers.map((_, i) => <AccountCircleIcon key={i} />)}
        </div>
      </div>

      {/* People You Follow Section */}

      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm text-blue-500 font-semibold">People You Follow</h2>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {peopleYouFollow.map((_, i) => <AccountCircleIcon key={i} />)}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAction={handleAdd}
        actionLabel={`+ New ${modalType}`}
        actionName={`${modalType}`}
      />
    </div>
  );
};

export default LeftDashboard;
