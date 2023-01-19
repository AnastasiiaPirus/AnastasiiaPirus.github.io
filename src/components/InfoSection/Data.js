import * as animationData1 from '../../images/HeroSection.json'
import * as animationData2 from '../../images/InfoSection.json'

export const homeObjOne = {
    id: 'hero',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Hi! I'm Anastasiia.",
    headLine:'Front-End Developer',
    description: [ <br/>,"Bring to life your designs.",  <br/>, " Freelance developer. Open to full-time opportunities.", <br />,<br />,"Let's collaborate :)"] ,
    buttonLabel: 'Learn more',
    imgStart: false,
    // img: require("../../images/svg-1.svg").default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
    lightTopLine: true,
    link: "about",
    animation: animationData1

};

export const homeObjTwo = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: '',
    headLine: 'Bring to life your designs',
    description: ['Something about me. Ask Vlad later.',<br />,<br />,"Say that I'm from Toronto, Canada. Have freelance experience (maybe, or maybe upd. later). Have professional background in Finance and accounting.", <br />,<br />," Have an interesting project?"],
    buttonLabel: "Let's Talk",
    imgStart: true,
    // img: require("../../images/svg-2.svg").default,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
    link: "contacts",
    animation: animationData2
};

// export const homeObjThree = {
//     id: 'signup',
//     lightBg: true,
//     lightText: false,
//     lightTextDesc: false,
//     topLine: 'Join our team',
//     headLine: 'Creating an account is extreme easy',
//     description: "Get everything set up and ready under 10 minutes. All you need to do is add your information and you're ready to go.",
//     buttonLabel: 'Start Now',
//     imgStart: false,
//     img: require("../../images/svg-3.svg").default,
//     alt: 'Presentation',
//     dark: false,
//     primary: false,
//     darkText: true
// };