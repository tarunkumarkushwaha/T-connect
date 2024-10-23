import React, { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Modal from "./Modal";
import Sidebar from "./Sidebar";


const LeftDashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("contact");
  const [organisation, setorganisation] = useState(["An Organisation Demo", "A Showcase International Development Education Charity", "Oak Tree Secondary School"])
  const [contact, setcontact] = useState(["herry", "siyamadit", "Claire"]);
  const [project, setproject] = useState(["Training Project", "Test Project 1", "Training Project 2"]);
  const [album, setalbum] = useState(["2021 Portfolio", "All Partners", "Big Lottery Fund"])
  const [board, setboard] = useState(["Angola Production", "Attendance Reporting", "CHIVA RYH"])

  const colors = [
    'text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500',
    'text-pink-500', 'text-indigo-500', 'text-teal-500', 'text-orange-500', 'text-cyan-500',
  ];
  

  const handleAdd = (data) => {
    if (modalType == "project") {
      setproject(prev => [...prev, data]);
    }
    else if (modalType == "contact") {
      setcontact(prev => [...prev, data]);
    }
    else if (modalType == "album") {
      setalbum(prev => [...prev, data]);
    }
    else if (modalType == "board") {
      setboard(prev => [...prev, data]);
    }
    else if (modalType == "organisation") {
      setorganisation(prev => [...prev, data]);
    }
    setModalOpen(false);
  };

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  // d dummy data

  // let organisation = ["An Organisation Demo", "A Showcase International Development Education Charity", "Oak Tree Secondary School"];
  let followers = [1, 2, 3, 4, 5, 6]
  let peopleYouFollow = [1, 2, 3, 4]


  return (
    <>

      <div className=" relative gap-0 pl-16 md:order-1 order-2 p-4 md:w-[35%] w-full bg-slate-100 rounded-lg shadow-md">
        <Sidebar setmodalType={setModalType} modalType={modalType} />
        <>

          {/* Card Section */}

          <div className="bg-white w-full p-2 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg text-blue-500 font-semibold mx-1">{modalType[0].toUpperCase() + modalType.slice(1)}</h2>
              <button onClick={() => openModal(modalType)} className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white p-2 text-xs rounded-lg">
                + New {modalType}
              </button>
            </div>
            <div className="mt-4">
              <ul>
                {eval(modalType).map((item, i) => <li key={i} className="flex items-center text-sm text-gray-600 font-semibold"><img className='h-14 w-14 mx-2 my-1 rounded-xl' src='/makerbleborderlogo.png' alt={modalType} /> {item}</li>)}
              </ul>
            </div>
          </div>
        </>

        {/* Followers Section */}

        <div className="bg-white p-4 w-full rounded-lg shadow-md mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg text-blue-500 font-semibold">Followers</h2>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {followers.map((_, i) => <div className={`cursor-pointer ${colors[Math.floor(Math.random() * colors.length)]}`}> <AccountCircleIcon key={i} /></div>)}
          </div>
        </div>

        {/* People You Followw Section */}

        <div className="bg-white p-4 w-full rounded-lg shadow-md mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg text-blue-500 font-semibold">People You Follow</h2>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {peopleYouFollow.map((_, i) => <div className={`cursor-pointer ${colors[Math.floor(Math.random() * colors.length)]}`}> <AccountCircleIcon key={i} /></div>)}
          </div>
        </div>

      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAction={handleAdd}
        actionLabel={`+ New ${modalType}`}
        actionName={`${modalType}`}
      />
    </>
  );
};

export default LeftDashboard;
