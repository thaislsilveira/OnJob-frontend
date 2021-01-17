import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .ranking-welcome {
    width: 100%;
    max-width: 940px;

    color: var(--color-text-dark);
    font-size: 3.6rem;
    font-weight: 700;
  }

  .ranking-image {
    margin-bottom: 2rem;
  }

  .podium-first {
    height: 135px;
    width: 135px;
    margin: 0 1rem;

    border: 5px solid #f1c40f;
    border-radius: 50%;
  }

  .podium-second {
    height: 100px;
    width: 100px;

    border: 3px solid #7f8c8d;
    border-radius: 50%;
  }

  .podium-third {
    height: 100px;
    width: 100px;

    border: 3px solid #cd7f32;
    border-radius: 50%;
  }

  .rankings {
    width: 100%;
    max-width: 940px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .rankings-search {
    display: flex;
    align-items: center;
    padding: 0.5rem;

    background: #e5e5e5;
    border-radius: 2rem;
  }

  .rankings-search img {
    margin: 0 1rem;
    cursor: pointer;
  }

  .rankings-search input {
    width: 100%;

    background: none;
    border: none;
    outline: none;
  }

  .rankings-categories {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0;

    color: var(--color-text-darker);
    font-size: 1.8rem;
  }

  .position {
    display: flex;
    align-items: center;
    justify-content: space-around;

    font-size: 2.5rem;
  }
  .position + .position {
    margin-top: 1rem;
  }

  .position-image {
    width: 50px;
    height: 50px;

    border: 2px solid var(--color-secondary);
    border-radius: 50%;
  }

  .position-XP {
    color: var(--color-secondary);
    font-weight: 700;
  }
`;
