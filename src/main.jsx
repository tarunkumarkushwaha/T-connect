import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './routes/Dashboard'
import ErrorPage from './routes/ErrorPage.jsx';
import Foot from './component/Foot.jsx';
import MyApps from './routes/MyApps.jsx';
import Explore from './routes/Explore.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/><Dashboard /><Foot/></>,
    errorElement: <><App/><ErrorPage/><Foot/></>
  },
  {
    path: "/myapps",
    element: <><App/><MyApps/><Foot/></>,
    errorElement: <><App/><ErrorPage/><Foot/></>
  },
  {
    path: "/explore",
    element: <><App/><Explore/><Foot/></>,
    errorElement: <><App/><ErrorPage/><Foot/></>
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
