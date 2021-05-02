import React from 'react';
import styled from 'styled-components';
import Hamburger from '../assets/images/hamburger.svg';
import Online from '../assets/images/circle-fill.svg';
import Search from '../assets/images/search.svg';
import FriendListItem from './FriendListItem';

const PageWrapper = styled.div`
  height: 100vh;
`;

const SidebarWrapper = styled.nav`
  width: 260px;
  background: #1d1d1d;
  height: 100%;
  max-height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

const SidebarContent = styled.div`
  max-height: calc(100% - 30px);
  height: calc(100% - 30px);
  overflow-y: auto;
  position: relative;
`;

const SidebarBrand = styled.div`
  padding: 15px 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 1.6em;
    cursor: pointer;
  }

  > span {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px;
  overflow: hidden;
  border-top: 1px solid #2b2b2b;

  .user-pic {
    float: left;
    width: 80px;
    padding: 2px;
    border: 1px solid #585858;
    border-radius: 8px;
    margin-right: 10px;
  }

  .user-info {
    float: left;
    color: #b3b8c1;

    span {
      display: block;
    }

    .user-role {
      font-size: 12px;
      color: #7c818a;
    }

    .user-status {
      * {
        display: inline-block;
        color: #7c818a;
        font-size: 12px;
      }

      img {
        width: 8px;
        margin-right: 4px;
      }
    }
  }
`;

const SidebarSearch = styled.div`
   border-top: 1px solid #2b2b2b;

   > div {
    padding: 10px 20px;
   }

   .input-group {
     overflow: hidden;
   }

   input.search-menu {
    outline: none;
    padding: 9px;
    background: #2b2b2b;
    box-shadow: none;
    color: #7c818a;
    border: none;
    transition: color 0.5s;
   }

   .input-group-addon {
    background: #2b2b2b;
    padding: 10px;
    transition: color 0.5s;
   }

   .input-group-addon img {
      transform: translateY(3px);
   }
`;

const SidebarMenu = styled.div`
  border-top: 1px solid #2b2b2b;
  padding-bottom: 10px;

  .header-menu span {
    font-weight: bold;
    font-size: 14px;
    color: #4e5767;
    padding: 15px 20px 5px 20px;
    display: inline-block;
  }

  ul li a {
    display: inline-block;
    width: 100%;
    color: #7c818a;
    text-decoration: none;
    transition: color 0.3s;
    position: relative;
    padding: 8px 30px 8px 20px;
  }
`;

const FriendsList = () => {

  const friends = ["Ted", "Todd", "Thomas", "Theodore", "Tommy"];

  return (
    <PageWrapper className="page-wrapper toggled">
      <SidebarWrapper id="sidebar" className="sidebar-wrapper">
        <SidebarContent className="sidebar-content">
          <SidebarBrand className="sidebar-brand">
            <img src={Hamburger} alt="Hamburger"/>
            <span>Friends List</span>
            <div></div>
          </SidebarBrand>
          <SidebarHeader class="sidebar-header">
            <div className="user-pic">
              <img className="img-responsive img-rounded" src="https://www.gravatar.com/avatar/0184a137bf6706a73d006a6a78fc0a46" alt="" />
            </div>
            <div className="user-info">
              <span className="user-name">William <strong>Ocampo</strong></span>
              <span className="user-role">Gamer</span>
              <div className="user-status">
                <img src={Online} alt="Online"/>
                <span>Online</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarSearch className="sidebar-search">
            <div>
              <div className="input-group">
                <input type="text" className="form-control search-menu" placeholder="Search for friends" />
                <span className="input-group-addon"><img src={Search} alt="Search"/></span>
              </div>
            </div>
          </SidebarSearch>
          <SidebarMenu className="sidebar-menu">
            <ul>
              <li className="header-menu"><span>Online</span></li>
              {friends.map(friend => <FriendListItem friend={friend} />)}
              <li className="header-menu"><span>Offline</span></li>
              {friends.map(friend => <FriendListItem friend={friend} />)}
            </ul>
          </SidebarMenu>
        </SidebarContent>
      </SidebarWrapper>
    </PageWrapper>
  )
}

export default FriendsList;