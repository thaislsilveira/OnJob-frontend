import React from 'react';

import { Container, Content } from './styles';

import Sidebar from '../../components/Sidebar';
import Notify from '../../components/Notifybar';

import dashboardImage from '../../assets/images/dashboard.png';
import avatarImage from '../../assets/images/avatar.png';

const Pontuation: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Notify />
      </Content>
    </Container>
  );
};

export default Pontuation;
