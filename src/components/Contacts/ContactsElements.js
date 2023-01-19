import styled from "styled-components";

export const ContactsContainer = styled.div`
    height: fit-content;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    background: #F4C095;
    padding-bottom: 30px;
    min-height: 700px;
`;

export const ContactsWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    @media screen and (max-width: 768px) {
     grid-template-columns: 1fr;  
     padding: 0 20px; 
    }
`;

export const ContactsH1 = styled.h1`
    font-size: 2.5rem;
    color: #071E22;
    margin-bottom: 64px;
    margin-top: 64px;
    @media screen and (max-width: 480px) {
     font-size: 2rem;   
    }
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.17 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: grid;
    grid-template-columns: 1fr;


`;

export const ContactsH2 = styled.h2`
    font-size:1rem;
    margin-bottom: 10px;
    color:#1D7874;
    padding-left: 10px;
    @media screen and (max-width: 370px) {
        font-size: 0.8rem;
    }
`;

export const ContactsP = styled.p`
    font-size: 1rem;
    text-align: start;
    color:#1D7874;
    padding-left: 10px;
   
    @media screen and (max-width: 768px) {
        
        overflow-wrap: break-word;
        word-wrap: break-word;

        -ms-word-break: break-all;
        /* This is the dangerous one in WebKit, as it breaks things wherever */
        word-break: break-all;
        /* Instead use this non-standard one: */
        word-break: break-word;
        
    }
    @media screen and (max-width: 370px) {
        font-size: 0.8rem;        
    }
    
    
    
`;

export const ContactPoint = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 6fr;
    padding: 10px;
`
export const ContactsIcon = styled.div`
    font-size: 4rem;
    color: #EE2E31;

    @media screen and (max-width: 370px) {
        font-size: 2rem;
        
    }
`
export const ContactsText = styled.div`
    display:block;
`