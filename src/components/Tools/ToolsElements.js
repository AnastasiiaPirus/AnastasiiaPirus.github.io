import styled from "styled-components";

export const ToolsContainer = styled.div`
    color: #aaa;
    display: grid;
    place-items: center;
    position: relative; 
`;

export const ToolsBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -10;
`;

export const ImageBg = styled.img`
    width:100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit:cover;
    background: '#071E22';
    /* opacity: 50% */
    filter: grayscale(91%) sepia(66%) blur(3px) brightness(13%) hue-rotate(132deg) saturate(194%);
    -webkit-filter: grayscale(91%) sepia(66%) blur(3px) brightness(13%) hue-rotate(132deg) saturate(194%);
    -moz-filter: grayscale(91%) sepia(66%) blur(3px) brightness(13%) hue-rotate(132deg) saturate(194%);

`;

export const ToolsWrapper = styled.div`
    display: grid;
    /* z-index: 1; */ 
    height: 500px;
    width: 100%;
    /* max-width: 1100px; */
    margin-right:auto;
    margin-left:auto;
    padding: 0 0px;
    overflow-x: hidden;
    /* justify-content: center;  */
`;

export const ToolsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    margin-top: 64px;
    color: #F4C095;

    @media screen and (max-width: 480px) {
     font-size: 2rem;   
    }
`;

export const ToolsCarousel = styled.div`
    /* border: orange 1px solid; */
`;

export const ToolsSlider = styled.div`
    /* border: pink 2px solid; */

`;

export const ToolsListLeft = styled.ul`
    /* border: blue 1px solid; */
    list-style: none;
    display: flex;
    width: calc(100px*24);
    animation: scrollLeft 40s linear infinite;
    color:#679289;
    &:hover {
        transition: all 0.2s ease-in-out;
        animation-play-state: paused;
        color: #F4C095;
    }
    @keyframes scrollLeft {
        0% {transform: translateX(0)}
        100% {transform: translateX(calc(-100px * 12))}
    }

`;
export const ToolsListRight = styled.ul`
    /* border: blue 1px solid; */
    list-style: none;
    display: flex;
    /* justify-content:flex-end; */
    width: calc(100px*24);
    animation: scrollRight 40s linear infinite;
    color:#679289;
    &:hover {
        transition: all 0.2s ease-in-out;
        animation-play-state: paused;
        color: #F4C095;
    }
    @keyframes scrollRight {
        0% {transform: translateX(calc(-100px * 12))}
        100% {transform: translateX(0)}
    }

`;

export const ToolItem = styled.li`
    min-width: 100px;
    height: 140px;
  /* border: 2px solid #333; */
    position: relative;
    &:hover {
        /* background: rgba( 100, 100, 100, 0.2 );
        box-shadow: 0 8px 32px 0 rgba( 13, 48, 15, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 30, 30, 30, 0.18 );
        transition: 0.2s ease-in-out; */
    }
    


`;

export const ToolIcon = styled.span`
    /* border: green 1px solid; */
    font-size: 5rem;
    

    &:hover {
        transition: all 0.2s ease-in-out;
        font-size:6.5rem;
        color: #EE2E31; 
        
    }
    &:hover > * {    
        transition: 0.2s ease-in-out;
        display:block;
       
    }
    
`;

export const IconLabel = styled.div`
    position:absolute;
    font-size: 16px;
    top: 110px;
    width: 100%;
    align-self: center;
    text-align: center;
    display: none;
    font-weight: bold;

`
