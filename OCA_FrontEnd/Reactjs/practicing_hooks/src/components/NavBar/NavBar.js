import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/AboutUs">AboutUs</NavLink>
        <NavLink to="/ContactUs">Contact Us</NavLink>
        <NavLink to="/input">Input</NavLink>
        <NavLink to="/Posts">Posts</NavLink>
        <NavLink to="/Posts/PostLists">PostLists</NavLink>
      </nav>
    </>
  );
};
export default NavBar;
