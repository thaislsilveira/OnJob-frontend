import styled from 'styled-components';

export const Container = styled.aside`
  height: 7rem;
  width: 100%;
  max-width: 940px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img + img {
    margin-left: 2rem;
  }
`;
