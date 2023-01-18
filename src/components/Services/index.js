import React from 'react'
import Icon1 from '../../images/1.png'
import Icon2 from '../../images/1.png'
import Icon3 from '../../images/1.png'

import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesP,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    LinkButton,
    GitButton,
    ButtonsContainer
} from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id="projects">
                <ServicesH1>Recent Projects</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesH2>SpaceJourney</ServicesH2>
                        <ServicesIcon src={Icon1} />
                        <ServicesP>React website designed by AI.</ServicesP>
                        <ButtonsContainer>
                            <GitButton>GitHub</GitButton>
                            <LinkButton>Visit website</LinkButton>
                        </ButtonsContainer>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesH2>Virtual offices</ServicesH2>
                        <ServicesIcon src={Icon2} />
                        <ServicesP>You can access our platform.</ServicesP>
                        <ButtonsContainer>
                            <GitButton>GitHub</GitButton>
                            <LinkButton>Visit website</LinkButton>
                        </ButtonsContainer>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesH2>Premium benefits</ServicesH2>
                        <ServicesIcon src={Icon3} />
                        <ServicesP>Unlock our special membership.</ServicesP>
                        <ButtonsContainer>
                            <GitButton>GitHub</GitButton>
                            <LinkButton>Visit website</LinkButton>
                        </ButtonsContainer>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesH2>Premium benefits</ServicesH2>
                        <ServicesIcon src={Icon3} />
                        <ServicesP>Unlock our special membership.</ServicesP>
                        <ButtonsContainer>
                            <GitButton>GitHub</GitButton>
                            <LinkButton>Visit website</LinkButton>
                        </ButtonsContainer>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesH2>SpaceJourney</ServicesH2>
                        <ServicesIcon src={Icon1} />
                        <ServicesP>React website designed by AI.</ServicesP>
                        <ButtonsContainer>
                            <GitButton>GitHub</GitButton>
                            <LinkButton>Visit website</LinkButton>
                        </ButtonsContainer>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesH2>SpaceJourney</ServicesH2>
                        <ServicesIcon src={Icon1} />
                        <ServicesP>React website designed by AI.</ServicesP>
                        <ButtonsContainer>
                            <GitButton>GitHub</GitButton>
                            <LinkButton>Visit website</LinkButton>
                        </ButtonsContainer>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services