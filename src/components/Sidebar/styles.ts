import styled from 'styled-components';

export const Container = styled.aside`
  height: auto;
  width: 24rem;
  position: relative;
  background: var(--color-primary);

  .sidebar-logo {
    color: var(--color-text-light);
    font-size: 3.6rem;
    text-align: center;
  }

  .user-avatar {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .user-avatar img {
    height: 14rem;
    width: 14rem;

    border-radius: 50%;
  }

  .user-name {
    width: 100%;
    margin: 2rem 0 3rem 0;

    color: var(--color-text-light);
    font-size: 2.4rem;
    text-align: center;
  }

  .navigator-list {
    list-style: none;
  }

  .list-item {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    padding: 1rem 0;
    transition: 0.2s;

    cursor: pointer;
  }

  .list-item:hover {
    background: var(--color-secondary-light);
  }

  .list-item a {
    color: var(--color-text-light);
    font-size: 1.8rem;
    text-decoration: none;
  }

  .item-image {
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }

  .item-image img {
    height: 2rem;
    width: 2rem;
  }

  .sidebar-image {
    width: 100%;
    position: absolute;
    bottom: 1rem;
  }

  .sidebar-image img {
    height: 100%;
    width: 100%;
  }
`;
