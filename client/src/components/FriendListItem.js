import React from 'react';
import styled from 'styled-components';
import Studdy from '../assets/images/people.svg';
import Chat from '../assets/images/chat.svg';

const SidebarDropdown = styled.li`
  display: flex;

  > img {
    margin-right: 10px;
  }
`;

const FriendListItem = ({ friend }) => {
  return (
    <SidebarDropdown className="sidebar-dropdown">
      <a href="#"><span>{friend}</span></a>
      <img src={Studdy} />
      <img src={Chat} />
    </SidebarDropdown>
  )
};

export default FriendListItem;