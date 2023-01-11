import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar.js';

const Layout = () => {
  return (
    <>
    <Navbar />
    <div id="page">
      <Outlet />
    </div>
    </>
  )
}

export default Layout
