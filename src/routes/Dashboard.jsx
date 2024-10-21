import React from 'react'
import { useNavigate } from 'react-router-dom';
import PostComponent from '../component/PostComponent';
import LeftDashboard from '../component/LeftDashboard';
import RightDashboard from '../component/RightDashboard';

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex flex-wrap justify-between gap-2 mx-4 my-4">
        <LeftDashboard />
        <PostComponent />
        <RightDashboard />
      </div>
    </>
  )
}

export default Dashboard