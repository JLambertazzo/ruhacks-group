import React from 'react';
import styled from 'styled-components';
import Studdy from '../assets/images/people.svg';
import Chat from '../assets/images/chat.svg';
import { useHistory } from 'react-router-dom';

const SidebarDropdown = styled.li`
  display: flex;

  > img {
    margin-right: 10px;
    cursor: pointer;
  }
`;

const FriendListItem = ({ friend, isOnline }) => {

  const history = useHistory();

  const renderOnlineFeatures = () => {

    if (isOnline) {
      return (
        <>
          <img onClick={() => history.push("/tasks/1984")} src={Studdy} alt="Studdy" />
          <img src={Chat} alt="Chat" />
        </>
      )
    }

    return null;
  }

  return (
    <SidebarDropdown className="sidebar-dropdown">
      <a href="#"><span>{friend}</span></a>
      {renderOnlineFeatures()}
    </SidebarDropdown>
  )
};

export default FriendListItem;