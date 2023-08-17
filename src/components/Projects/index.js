import React from 'react'
import SpaceJourney from '../../images/SpaceJourney.png'
import BankingApp from '../../images/BankingApp.png'
import TimerApp from '../../images/TimerApp.png'
import Portfolio from '../../images/Portfolio.png'
import Cyberpunk from '../../images/Cyberpunk.png'
import Wiki from '../../images/Wiki.png'
import Finance from '../../images/Finance.png'
import Google from '../../images/Google.png'
import ComingSoon from '../../images/coming-soon.png'
import Kanban from '../../images/Kanban.png'
import StellarWeb from '../../images/StellarWeb.png'
import TSA from '../../images/TSA.png'
import Fedd from '../../images/Fedd.png'

import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsH2,
    ProjectsP,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    LinkButton,
    GitButton,
    ButtonsContainer
} from './ProjectsElements'

const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>Recent Projects</ProjectsH1>
                <ProjectsWrapper>

                    <ProjectsCard>
                        <ProjectsH2>Stellar Personnel</ProjectsH2>
                        <ProjectsIcon src={StellarWeb} />
                        <ProjectsP>React landing page with functional forms and localization implementation.</ProjectsP>
                        <ButtonsContainer>
                            <LinkButton href='https://www.stellarpersonnel.co/' target='_blank'
                                rel="noopener">Visit website</LinkButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard> 
                        <ProjectsH2>The Solution Academy</ProjectsH2>
                        <ProjectsIcon src={TSA} />
                        <ProjectsP>Landing page for professional education company (unfinished yet).</ProjectsP> 
                        <ButtonsContainer>
                            <LinkButton href='https://www.thesolutionacademy.co/' target='_blank'
                                rel="noopener">Visit website</LinkButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>Fedd</ProjectsH2>
                        <ProjectsIcon src={Fedd} />
                        <ProjectsP>React/Typescript project with external API and GraphQL queries & mutations.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/nyble-fedd-challenge" target='_blank'
                                       rel="noopener"
                                       aria-label='Github'>GitHub</GitButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>Kanban Board</ProjectsH2>
                        <ProjectsIcon src={Kanban} />
                        <ProjectsP>React Drag&Drop app with styled components made in few hours.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/kanban-dashboard" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>
                            <LinkButton href='https://anastasiiapirus.github.io/kanban-dashboard/' target='_blank'
                                rel="noopener">Visit website</LinkButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>Banking App</ProjectsH2>
                        <ProjectsIcon src={BankingApp} />
                        <ProjectsP>React app with styled components.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/banking-app" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>
                            <LinkButton href='https://anastasiiapirus.github.io/banking-app/' target='_blank'
                                rel="noopener">Visit website</LinkButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>SpaceJourney</ProjectsH2>
                        <ProjectsIcon src={SpaceJourney} />
                        <ProjectsP>React website inspired by AI design.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/Dashboard" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>
                            <LinkButton href='https://anastasiiapirus.github.io/Dashboard/' target='_blank'
                                rel="noopener">Visit website</LinkButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>Timer App</ProjectsH2>
                        <ProjectsIcon src={TimerApp} />
                        <ProjectsP>Gamified productivity timer. HTML5, CSS, Bootstrap, JS, Flask, and SQLite.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/Timer-App" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>
                            <LinkButton href='http://apirus.pythonanywhere.com/login' target='_blank'
                                rel="noopener">Visit website</LinkButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>Portfolio website</ProjectsH2>
                        <ProjectsIcon src={Portfolio} />
                        <ProjectsP>You are here now :) React website with styled components.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/AnastasiiaPirus.github.io" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>
                            <LinkButton href='https://anastasiiapirus.github.io/' target='_blank'
                                rel="noopener">Visit website</LinkButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>Cyberpunk-themed website</ProjectsH2>
                        <ProjectsIcon src={Cyberpunk} />
                        <ProjectsP>HTML5 website with third-party weather API and Bootstrap.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/cyberpunk-themed-website" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>
                            <LinkButton href='https://anastasiiapirus.github.io/cyberpunk-themed-website/' target='_blank'
                                rel="noopener">Visit website</LinkButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>Wiki</ProjectsH2>
                        <ProjectsIcon src={Wiki} />
                        <ProjectsP>A Wikipedia-like online encyclopedia. Back-end made with Django.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/CS50-Projects/tree/main/wiki" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>

                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>Finance</ProjectsH2>
                        <ProjectsIcon src={Finance} />
                        <ProjectsP>Website to manage portfolios of stocks. Back-end made with Flask.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/CS50-Projects/tree/main/finance" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>Search</ProjectsH2>
                        <ProjectsIcon src={Google} />
                        <ProjectsP>A copy of Google front-end with HTML5.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/CS50-Projects/tree/main/search" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>Commerce</ProjectsH2>
                        <ProjectsIcon src={ComingSoon} />
                        <ProjectsP>Online marketplace back-end (Django).</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/CS50-Projects/tree/main/commerce" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects