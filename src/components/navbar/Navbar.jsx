import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import data from '../../commons/data';
import user from '../../assets/user.png';
import '../../styles/navbar.css';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav className="nav-container">
      <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
        <span>Book Store CMS</span>
      </Link>
      <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
        {data.map((item) => (
          <li key={item.id}>
            <NavLink to={item.link} className={({ isActive }) => (isActive ? 'active-nav' : '')} onClick={() => setIsNavShowing((prev) => !prev)}>{ item.title }</NavLink>
          </li>
        ))}
      </ul>
      <div className="user-avatar">
        <img src={user} alt="user-avatar" />
      </div>
      <button type="button" className="nav-toggle-btn" onClick={() => setIsNavShowing((prev) => !prev)}>
        {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
      </button>
    </nav>
  );
};

export default Navbar;
