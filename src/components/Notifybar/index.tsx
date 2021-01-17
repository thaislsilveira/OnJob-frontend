import React from 'react';

import searchIco from '../../assets/icons/search.svg';
import mailIco from '../../assets/icons/mail.svg';
import notificationIco from '../../assets/icons/notification.svg';

import { Container } from './styles';

const Notifybar: React.FC = () => {
  return (
    <Container>
      <img src={searchIco} alt="Search"/>
      <img src={mailIco} alt="Mail"/>
      <img src={notificationIco} alt="Notification"/>
    </Container>
  );
};

export default Notifybar;
