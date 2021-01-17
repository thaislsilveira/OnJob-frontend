import React from 'react';

import { Container, Content } from './styles';

import Sidebar from '../../components/Sidebar';
import Notify from '../../components/Notifybar';

import rankingImage from '../../assets/images/ranking.svg';
import avatarImage from '../../assets/images/avatar.png';

import rankingSearchIco from '../../assets/icons/ranking_search.svg';

const Ranking: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Notify />
        <p className="ranking-welcome">Ranking</p>
        <img
          className="ranking-image"
          src={rankingImage}
          alt="Pódio do Ranking"
        />
        <div className="ranking-podium">
          <img className="podium-second" src={avatarImage} alt="2º Lugar" />
          <img className="podium-first" src={avatarImage} alt="1º Lugar" />
          <img className="podium-third" src={avatarImage} alt="3º Lugar" />
        </div>
        <div className="rankings">
          <div className="rankings-search">
            <img src={rankingSearchIco} alt="Search" />
            <input type="text" placeholder="Buscar..." />
          </div>
          <div className="rankings-categories">
            <span>Hoje</span>
            <span>Semanal</span>
            <span>Mensal</span>
            <span>Geral</span>
          </div>
          <div className="students-list">
            <div className="position">
              <img className="position-image" src={avatarImage} alt="Avatar" />
              <p className="position-name">Luiza</p>
              <p className="position-local">São Paulo - SP</p>
              <p className="position-XP">2.000 XP</p>
            </div>
            <div className="position">
              <img className="position-image" src={avatarImage} alt="Avatar" />
              <p className="position-name">Luiza</p>
              <p className="position-local">São Paulo - SP</p>
              <p className="position-XP">2.000 XP</p>
            </div>
            <div className="position">
              <img className="position-image" src={avatarImage} alt="Avatar" />
              <p className="position-name">Luiza</p>
              <p className="position-local">São Paulo - SP</p>
              <p className="position-XP">2.000 XP</p>
            </div>
            <div className="position">
              <img className="position-image" src={avatarImage} alt="Avatar" />
              <p className="position-name">Luiza</p>
              <p className="position-local">São Paulo - SP</p>
              <p className="position-XP">2.000 XP</p>
            </div>
            <div className="position">
              <img className="position-image" src={avatarImage} alt="Avatar" />
              <p className="position-name">Luiza</p>
              <p className="position-local">São Paulo - SP</p>
              <p className="position-XP">2.000 XP</p>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Ranking;
