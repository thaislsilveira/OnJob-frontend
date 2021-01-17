import React, { useCallback } from 'react';

import { useAuth } from '../../hooks/auth';

import Sidebar from '../../components/Sidebar';
import Notify from '../../components/Notifybar';

import dashboardImage from '../../assets/images/dashboard.png';
import avatarImage from '../../assets/images/avatar.png';

import { Container, Content } from './styles';

const Landing: React.FC = () => {
  const { signOut } = useAuth();

  const signOutToProfile = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <Sidebar />
      <Content>
        <Notify />
        <button type="button" onClick={signOutToProfile}>
          Sair
        </button>
        <p className="content-welcome">Olá Eduardo!</p>

        <div className="content-header">
          <div className="content-news">
            <img src={dashboardImage} alt="News" />
          </div>

          <div className="content-myPoints">
            <p className="myPoints-title">Minha pontuação</p>
            <div className="myPoints-background">
              <div className="myPoints-points">
                1.000 <br /> XP
              </div>
            </div>
          </div>
        </div>

        <div className="content-informations">
          <div className="informations-activities">
            <span className="activities-title">Atividades disponíveis</span>
            <button type="button" className="activities-button">
              todas
            </button>
            <div className="activities-background">
              <div className="activity">
                <div className="activity-header">
                  <p className="activity-name">Excel nível avançado</p>
                  <button type="button" className="activity-response">
                    responder
                  </button>
                </div>
                <div className="activity-progress" />
              </div>
              <div className="activity">
                <div className="activity-header">
                  <p className="activity-name">Inglês intermediário</p>
                  <button type="button" className="activity-response">
                    responder
                  </button>
                </div>
                <div className="activity-progress" />
              </div>
              <div className="activity">
                <div className="activity-header">
                  <p className="activity-name">HTML básico</p>
                  <button type="button" className="activity-response">
                    responder
                  </button>
                </div>
                <div className="activity-progress" />
              </div>
              <div className="activity">
                <div className="activity-header">
                  <p className="activity-name">Word avançado</p>
                  <button type="button" className="activity-response">
                    responder
                  </button>
                </div>
                <div className="activity-progress" />
              </div>
              <div className="activity">
                <div className="activity-header">
                  <p className="activity-name">Marketing</p>
                  <button type="button" className="activity-response">
                    responder
                  </button>
                </div>
                <div className="activity-progress" />
              </div>
            </div>
          </div>

          <div className="informations-recomendations">
            <span className="recomendations-title">Recomendações</span>
            <div className="recomendations-background">
              <div className="recomendation">
                <p className="recomendation-name">Word</p>
                <div className="recomendation-points">
                  <p className="points-number">+7</p>
                  <p className="points-legend">pontos</p>
                </div>
                <button type="button" className="recomendation-response">
                  responder
                </button>
              </div>
              <div className="recomendation">
                <p className="recomendation-name">Word</p>
                <div className="recomendation-points">
                  <p className="points-number">+7</p>
                  <p className="points-legend">pontos</p>
                </div>
                <button type="button" className="recomendation-response">
                  responder
                </button>
              </div>
              <div className="recomendation">
                <p className="recomendation-name">Word</p>
                <div className="recomendation-points">
                  <p className="points-number">+7</p>
                  <p className="points-legend">pontos</p>
                </div>
                <button type="button" className="recomendation-response">
                  responder
                </button>
              </div>
              <div className="recomendation">
                <p className="recomendation-name">Word</p>
                <div className="recomendation-points">
                  <p className="points-number">+7</p>
                  <p className="points-legend">pontos</p>
                </div>
                <button type="button" className="recomendation-response">
                  responder
                </button>
              </div>
            </div>
          </div>

          <div className="informations-ranking">
            <span className="ranking-title">Ranking</span>
            <div className="ranking-background">
              <div className="ranking-types">
                <span>Hoje</span>
                <span>Semanal</span>
                <span>Mensal</span>
              </div>
              <div className="student student--gold">
                <img className="student-avatar" src={avatarImage} />
                <p className="student-name">Luiza</p>
                <div className="student-XP">2.000 XP</div>
              </div>
              <div className="student">
                <img className="student-avatar" src={avatarImage} />
                <p className="student-name">Luiza</p>
                <div className="student-XP">2.000 XP</div>
              </div>
              <div className="student">
                <img className="student-avatar" src={avatarImage} />
                <p className="student-name">Luiza</p>
                <div className="student-XP">2.000 XP</div>
              </div>
              <div className="student">
                <img className="student-avatar" src={avatarImage} />
                <p className="student-name">Luiza</p>
                <div className="student-XP">2.000 XP</div>
              </div>
              <div className="student">
                <img className="student-avatar" src={avatarImage} />
                <p className="student-name">Luiza</p>
                <div className="student-XP">2.000 XP</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Landing;
