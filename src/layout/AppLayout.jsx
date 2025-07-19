
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';


function AppLayout({location, getLocation, dropdown, setDropdown}) {
   
    return ( 
        <>
        <Navbar location={location} getLocation={getLocation} dropdown={dropdown} setDropdown={setDropdown} />
        <Outlet />
        <Footer />
        </>
     );
}

export default AppLayout;