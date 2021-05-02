import React from 'react'
import './navbar.scss'
import styled from 'styled-components';
import HamburgerIcon from '../../assets/images/hamburger.svg';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/studybuddies_logo1.png';

const Hamburger = styled.img`
  position: absolute;
  right: 0;
  top: -0.4em;
  cursor: pointer;
  width: 2em;
`;

export const NavBar = ({ setSidebarActive }) => {

  const history = useHistory();

  const loggedInContent = () => {
    return (
      <div className='nav-right'>
        <Hamburger onClick={() => setSidebarActive(true)} src={HamburgerIcon} alt="Friends List" />
      </div>
    )
  }

  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <img onClick={() => history.push("/")} src={Logo} alt='Logo' />
      </div>
      {loggedInContent()}
    </nav>
  )
}

export default NavBar
