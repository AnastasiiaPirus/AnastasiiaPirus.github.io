import React from 'react'
import { FaLinkedin, FaCanadianMapleLeaf, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-scroll';

import FormApp from './ContactForm'
import {
    ContactsContainer,
    ContactsWrapper,
    ContactsH1,
    InfoContainer,
    ContactPoint,
    ContactsH2,
    ContactsIcon,
    ContactsP,
    ContactsText
} from './ContactsElements'

const Contacts = () => {
    return (
        <>
            <ContactsContainer id="contacts">
                <ContactsH1>Contact me:</ContactsH1>
                <ContactsWrapper>
                    <InfoContainer>
                        <ContactPoint>
                            <ContactsIcon><FaCanadianMapleLeaf /></ContactsIcon>
                            <ContactsText>
                                <ContactsH2>Location</ContactsH2>
                                <ContactsP>Toronto, Canada</ContactsP>
                            </ContactsText>
                        </ContactPoint>
                        <ContactPoint>
                            <ContactsIcon><FaEnvelope /></ContactsIcon>
                            <ContactsText>
                                <ContactsH2>Email:</ContactsH2>
                                <ContactsP>a.pirus2000@gmail.com</ContactsP>
                            </ContactsText>
                        </ContactPoint>
                        <ContactPoint>
                            <ContactsIcon><FaLinkedin /></ContactsIcon>
                            <ContactsText>
                                <ContactsH2>LinkedIn</ContactsH2>
                                <ContactsP><Link href='https://www.linkedin.com/in/anastasia-pirus/'>Link</Link></ContactsP>
                            </ContactsText>
                        </ContactPoint>
                        <ContactPoint>
                            <ContactsIcon><FaGithub /></ContactsIcon>
                            <ContactsText>
                                <ContactsH2>GitHub</ContactsH2>
                                <ContactsP><Link href='https://github.com/AnastasiiaPirus'>Link</Link> </ContactsP>
                            </ContactsText>
                        </ContactPoint>
                    </InfoContainer>
                    <FormApp />
                </ContactsWrapper>
            </ContactsContainer>
        </>
    )
}

export default Contacts