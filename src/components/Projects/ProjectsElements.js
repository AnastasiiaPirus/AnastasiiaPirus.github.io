import styled from "styled-components";

export const ProjectsContainer = styled.div`
    height: fit-content;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    background: #071E22;
    padding-bottom: 30px;
    /* @media screen and (max-width: 1000px) {
        height: 1200px;
    }

    @media screen and (max-width: 768px) {
        height: 1800px;
    }

    @media screen and (max-width: 480px) {
        height: fit-content;
    } */

`;

export const ProjectsWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1100px) {
     grid-template-columns: 1fr 1fr;   
    }

    @media screen and (max-width: 768px) {
     grid-template-columns: 1fr;  
     padding: 0 20px; 
    }
`;

export const ProjectsCard = styled.div`
    background: rgba(72, 72, 72, 0.2);
    border: 1px solid rgba(234, 234, 234, 0.2);
    backdrop-filter: blur(2px);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectsIcon = styled.img`
    /* height: 160px; */
    max-width: 260px;
    margin-bottom: 10px;
    max-height: 150px;

    @media screen and (max-width: 370px) {
        max-width: 200px;
        max-height: 100px;
    }

`;

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #F4C095;
    margin-bottom: 64px;
    margin-top: 64px;
    @media screen and (max-width: 480px) {
     font-size: 2rem;   
    }
`;

export const ProjectsH2 = styled.h2`
    font-size:1rem;
    margin-bottom: 10px;
    color:#F4C095;
    @media screen and (max-width: 370px) {
        font-size: 0.8rem;
    }
`;

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
    color:#F4C095;
    @media screen and (max-width: 370px) {
        font-size: 0.8rem;
    }
    height: 3rem;
`;

export const GitButton = styled.a`
    background-image: linear-gradient(to right, #020818 0%, #303648 51%, #020818  100%);
    margin: 10px;
    padding: 10px 15px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #111;
    border-radius: 10px;
    display: flex;
    align-items:center;
    font-size: 0.8rem;
    text-decoration: none;
    &:hover {
        background-position: right center; /* change the direction of the change here */
        text-decoration: none;
    }
    @media screen and (max-width: 370px) {
        font-size: 0.6rem;
    }
    
`;

export const LinkButton = styled.a`
    background-image: linear-gradient(to right, #1D7874 0%, #1A333E  51%, #1D7874 100%);
    margin: 10px;
    padding: 10px 15px;
    text-align: center;
    justify-content:center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #111;
    border-radius: 10px;
    display: block;
    font-size: 0.8rem;
    text-decoration: none;
    &:hover {
        background-position: right center; /* change the direction of the change here */
        text-decoration: none;
    }
    @media screen and (max-width: 370px) {
        font-size: 0.6rem;
    }
`;

export const ButtonsContainer = styled.div`
width: 100%;
display: flex;
justify-content:space-evenly;
`;
