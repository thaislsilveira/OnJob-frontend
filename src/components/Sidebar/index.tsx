import React from 'react';

import { Container } from './styles';

import Notify from '../Notifybar';

import rankingImage from '../../assets/images/ranking.svg';
import avatarImage from '../../assets/images/avatar.png';

import rankingSearchIco from '../../assets/icons/ranking_search.svg';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <div className="sidebar-logo">
        <div className="user-avatar">
          <img src={avatarImage} alt="Avatar" />
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
