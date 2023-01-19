import React from 'react'
import SpaceJourney from '../../images/SpaceJourney.png'
import BankingApp from '../../images/BankingApp.png'
import TimerApp from '../../images/TimerApp.png'
import Cyberpunk from '../../images/Cyberpunk.png'

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
                        <ProjectsP>React website designed by AI.</ProjectsP>
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
                        <ProjectsP>Productivity timer build with Flusk back-end and SQLite.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/Timer-App" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>
                            <LinkButton href='http://apirus.pythonanywhere.com/login' target='_blank'
                                rel="noopener">Visit website</LinkButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>Cyberpunk-themed website</ProjectsH2>
                        <ProjectsIcon src={Cyberpunk} />
                        <ProjectsP>HTML5 website with use of third-party weather API and Bootstrap.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/cyberpunk-themed-website" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>
                            <LinkButton href='https://anastasiiapirus.github.io/cyberpunk-themed-website/' target='_blank'
                                rel="noopener">Visit website</LinkButton>
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>SpaceJourney</ProjectsH2>
                        <ProjectsIcon src={SpaceJourney} />
                        <ProjectsP>React website designed by AI.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/banking-app" target='_blank'
                                rel="noopener"
                                aria-label='Github'>GitHub</GitButton>
                            
                        </ButtonsContainer>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsH2>SpaceJourney</ProjectsH2>
                        <ProjectsIcon src={SpaceJourney} />
                        <ProjectsP>React website designed by AI.</ProjectsP>
                        <ButtonsContainer>
                            <GitButton href="https://github.com/AnastasiiaPirus/banking-app" target='_blank'
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