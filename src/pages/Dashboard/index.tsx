import React, { useCallback } from 'react';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Landing: React.FC = () => {
  const { signOut } = useAuth();

  const signOutToProfile = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      LANDING
      <button type="button" onClick={signOutToProfile}>
        Sair
      </button>
    </Container>
  );
};

export default Landing;
