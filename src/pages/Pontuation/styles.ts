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

  .content-welcome {
    width: 100%;
    max-width: 940px;

    color: var(--color-text-dark);
    font-size: 3.6rem;
    font-weight: 700;
  }

  .content-header {
    width: 100%;
    max-width: 940px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .content-news {
    max-height: 23rem;
    max-width: 59rem;
    padding: 1rem;

    background: var(--color-secondary);
    border-radius: 2rem;
  }

  .content-news img {
    height: 100%;
    width: 100%;
  }

  .myPoints-title {
    margin-bottom: 1.5rem;

    color: var(--color-text-dark);
    font-size: 2rem;
  }

  .myPoints-background {
    height: 20rem;
    width: 18.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--color-secondary);
    border-radius: 2rem;
  }

  .myPoints-points {
    height: 130px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--color-secondary-light);
    color: var(--color-text-light);
    font-size: 3rem;
    text-align: center;
    border-radius: 50%;
  }

  .content-informations {
    width: 100%;
    max-width: 940px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .activities-title {
    color: var(--color-text-darker);
    font-size: 2rem;
  }

  .activities-button {
    width: 100px;
    padding: 0.3rem;
    margin-left: 1rem;

    background: #c4c4c4;
    color: #fff;
    font-size: 1.4rem;
    border-radius: 2rem;
    border: none;
  }

  .activities-background {
    max-width: 320px;
    margin-top: 1rem;
    padding: 1rem;

    background: var(--color-background-informations);
    border-radius: 2rem;
  }

  .activity {
    width: 300px;
    margin-bottom: 1.5rem;
    padding: 0.7rem;
    transition: 0.2s;

    background: var(--color-background-informations);
    border-radius: 1.5rem;
  }

  .activity:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .activity-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .activity-name {
    color: var(--color-text-darker);
    font-size: 2rem;
    font-weight: 700;
  }

  .activity-response {
    padding: 0.5rem;
    transition: 0.2s;

    background: #fff;
    color: #000;
    font-size: 1.4rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
  }

  .activity-response:hover {
    color: #fff;
    background: var(--color-green);
  }

  .activity-progress {
    height: 14px;
    width: 100%;
    margin-top: 1rem;
    background: #c4c4c4;
    border-radius: 2rem;
  }

  .recomendations-title {
    color: var(--color-text-darker);
    font-size: 2rem;
  }

  .recomendations-background {
    width: 230px;
    margin-top: 1rem;
    padding: 0.5rem;

    background: var(--color-background-informations);
    border-radius: 2rem;
  }

  .recomendation {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1.5rem;
    padding: 0.7rem;
    transition: 0.2s;

    background: var(--color-background-informations);
    border-radius: 1.5rem;
  }

  .recomendation:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .recomendation-name {
    color: var(--color-text-darker);
    font-size: 2rem;
    font-weight: 600;
  }

  .points-number {
    color: var(--color-green);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }

  .points-legend {
    color: var(--color-green);
    font-size: 1.2rem;
    font-weight: 700;
  }

  .recomendation-response {
    padding: 0.5rem;
    transition: 0.2s;

    background: #fff;
    color: #000;
    font-size: 1.4rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
  }

  .recomendation-response:hover {
    color: #fff;
    background: var(--color-green);
  }

  .ranking-title {
    color: var(--color-text-darker);
    font-size: 2rem;
  }

  .ranking-background {
    width: 345px;
    margin-top: 1rem;
    padding: 0.5rem;

    background: #798bde;
    border-radius: 2rem;
  }

  .ranking-types {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;

    border-bottom: 1px solid #fff;
  }

  .ranking-types span {
    color: var(--color-text-light);
    font-size: 2rem;
    cursor: pointer;
  }

  .student {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem;
  }

  .student--gold img {
    border-color: #f1c40f;
  }

  .student-avatar {
    height: 6rem;
    width: 6rem;

    border: 0.5rem solid #fff;
    border-radius: 50%;
  }

  .student-name {
    color: var(--color-text-light);
    font-size: 2.5rem;
  }

  .student-XP {
    color: var(--color-text-light);
    font-size: 2rem;
    font-weight: 700;
  }
`;
