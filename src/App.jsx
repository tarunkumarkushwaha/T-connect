import Navbar from './component/Navbar'
import { useState } from 'react';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topbar from './component/Topbar';

function App() {
  const [topslide, settopslide] = useState(false);
  const [query, setQuery] = useState('')

  // const notify = () => toast("Wow so easy!");

  const toggletopslide = function () {
    settopslide(!topslide)
  }

  return (
    <>
      <Navbar query={query} setQuery={setQuery} toggletopslide={toggletopslide} />
      <Topbar topslide={topslide} toggletopslide={toggletopslide}/>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
