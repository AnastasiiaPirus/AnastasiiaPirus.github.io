import styled from "styled-components";

export const ToolsContainer = styled.div`
    color: #aaa;
    background: '#071E22';

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
    background-color: #071E22;
    display: grid;
    place-items: center;
`;

export const ToolsWrapper = styled.div`
    display: grid;
    /* z-index: 1; */ 
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right:auto;
    margin-left:auto;
    padding: 0 24px;
    /* justify-content: center;  */
`;

export const ToolsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
     font-size: 2rem;   
    }
`;

export const ToolsCarousel = styled.div`
    border: orange 1px solid;
`;

export const ToolsSlider = styled.div`
    border: pink 2px solid;

`;

export const ToolsList = styled.ul`
    border: blue 1px solid;
    list-style: none;
    display: flex;
    width: calc(100px*24);
    animation: scroll 40s linear infinite;

    &:hover {
        animation-play-state: paused;
    }
    @keyframes scroll {
        0% {transform: translateX(0)}
        100% {transform: translateX(calc(-100px * 12))}
    }

`;

export const ToolItem = styled.li`
width: 100px;
  height: 100px;
  border: 2px solid #333;

`;

export const ToolIcon = styled.span`
border: green 1px solid;
`;

