import React from 'react';
import {
    ToolsContainer,
    ToolsWrapper,
    ToolsH1,
    ToolsSlider,
    ToolsCarousel,
    ToolItem,
    ToolIcon,
    ToolsListRight,
    ToolsListLeft,
    IconLabel,
    ToolsBg,
    ImageBg

} from './ToolsElements';

import {
    SiStyledcomponents,
    SiJavascript,
    SiC,
    SiBootstrap,
    SiDjango,
    SiFlask,
    SiCanva,
    SiMicrosoftoffice,
    SiFigma,
    SiAdobephotoshop,
    SiTrello,
    SiSass,
    SiSqlite,
    SiGithub,
    SiReact,
    SiCss3,
    SiPython,
    SiHtml5
    
} from "react-icons/si";

import Background from '../../images/background.jpg'


const Tools = () => {

    const icons1 = [
        ["HTML5", <SiHtml5 />], 
        ["JavaScript", <SiJavascript />],
        ["Python", <SiPython />],
        ["CSS3", <SiCss3/>],
        ["C",<SiC />],
        ["Sqllite",<SiSqlite />],
        ["HTML5", <SiHtml5 />], 
        ["JavaScript", <SiJavascript />],
        ["Python", <SiPython />],
        ["CSS3", <SiCss3/>],
        ["C",<SiC />],
        ["Sqllite",<SiSqlite />],
        ["HTML5", <SiHtml5 />], 
        ["JavaScript", <SiJavascript />],
        ["Python", <SiPython />],
        ["CSS3", <SiCss3/>],
        ["C",<SiC />],
        ["Sqllite",<SiSqlite />],
        ["HTML5", <SiHtml5 />], 
        ["JavaScript", <SiJavascript />],
        ["Python", <SiPython />],
        ["CSS3", <SiCss3/>],
        ["C",<SiC />],
        ["Sqllite",<SiSqlite />],
        ["HTML5", <SiHtml5 />], 
        ["JavaScript", <SiJavascript />],
        ["Python", <SiPython />],
        ["CSS3", <SiCss3/>],
        ["C",<SiC />],
        ["Sqllite",<SiSqlite />],
        ["HTML5", <SiHtml5 />], 
        ["JavaScript", <SiJavascript />],
        ["Python", <SiPython />],
        ["CSS3", <SiCss3/>],
        ["C",<SiC />],
        ["Sqllite",<SiSqlite />],
        ["HTML5", <SiHtml5 />], 
        ["JavaScript", <SiJavascript />],
        ["Python", <SiPython />],
        ["CSS3", <SiCss3/>],
        ["C",<SiC />],
        ["Sqllite",<SiSqlite />],
    ]
    const icons2 = [
        ["Styled Components", <SiStyledcomponents />],
        ["React", <SiReact />],
        ["Bootstrap",<SiBootstrap />],
        ["Sass",<SiSass />],
        ['Django',<SiDjango />],
        ['Flask', <SiFlask />],
        ["Styled Components", <SiStyledcomponents />],
        ["React", <SiReact />],
        ["Bootstrap",<SiBootstrap />],
        ["Sass",<SiSass />],
        ['Django',<SiDjango />],
        ['Flask', <SiFlask />],
        ["Styled Components", <SiStyledcomponents />],
        ["React", <SiReact />],
        ["Bootstrap",<SiBootstrap />],
        ["Sass",<SiSass />],
        ['Django',<SiDjango />],
        ['Flask', <SiFlask />],
        ["Styled Components", <SiStyledcomponents />],
        ["React", <SiReact />],
        ["Bootstrap",<SiBootstrap />],
        ["Sass",<SiSass />],
        ['Django',<SiDjango />],
        ['Flask', <SiFlask />],
        ["Styled Components", <SiStyledcomponents />],
        ["React", <SiReact />],
        ["Bootstrap",<SiBootstrap />],
        ["Sass",<SiSass />],
        ['Django',<SiDjango />],
        ['Flask', <SiFlask />],
        ["Styled Components", <SiStyledcomponents />],
        ["React", <SiReact />],
        ["Bootstrap",<SiBootstrap />],
        ["Sass",<SiSass />],
        ['Django',<SiDjango />],
        ['Flask', <SiFlask />],
        ["Styled Components", <SiStyledcomponents />],
        ["React", <SiReact />],
        ["Bootstrap",<SiBootstrap />],
        ["Sass",<SiSass />],
        ['Django',<SiDjango />],
        ['Flask', <SiFlask />],
    ]
    const icons3 = [
        ["Figma", <SiFigma/>],
        ["Adobe Photoshop", <SiAdobephotoshop />],
        ["Trello",<SiTrello />],
        ["Github",<SiGithub />],
        ['Canva',<SiCanva/>],
        ['Microsoft Office',<SiMicrosoftoffice />],
        ["Figma", <SiFigma/>],
        ["Adobe Photoshop", <SiAdobephotoshop />],
        ["Trello",<SiTrello />],
        ["Github",<SiGithub />],
        ['Canva',<SiCanva/>],
        ['Microsoft Office',<SiMicrosoftoffice />],
        ["Figma", <SiFigma/>],
        ["Adobe Photoshop", <SiAdobephotoshop />],
        ["Trello",<SiTrello />],
        ["Github",<SiGithub />],
        ['Canva',<SiCanva/>],
        ['Microsoft Office',<SiMicrosoftoffice />],
        ["Figma", <SiFigma/>],
        ["Adobe Photoshop", <SiAdobephotoshop />],
        ["Trello",<SiTrello />],
        ["Github",<SiGithub />],
        ['Canva',<SiCanva/>],
        ['Microsoft Office',<SiMicrosoftoffice />],
        ["Figma", <SiFigma/>],
        ["Adobe Photoshop", <SiAdobephotoshop />],
        ["Trello",<SiTrello />],
        ["Github",<SiGithub />],
        ['Canva',<SiCanva/>],
        ['Microsoft Office',<SiMicrosoftoffice />],
        ["Figma", <SiFigma/>],
        ["Adobe Photoshop", <SiAdobephotoshop />],
        ["Trello",<SiTrello />],
        ["Github",<SiGithub />],
        ['Canva',<SiCanva/>],
        ['Microsoft Office',<SiMicrosoftoffice />],
        ["Figma", <SiFigma/>],
        ["Adobe Photoshop", <SiAdobephotoshop />],
        ["Trello",<SiTrello />],
        ["Github",<SiGithub />],
        ['Canva',<SiCanva/>],
        ['Microsoft Office',<SiMicrosoftoffice />],

    ]

    const renderItems = (icons) => {
        let items = [];
        for (let i = 0; i < icons.length; i++) {
            items.push(<ToolItem key={i} >
                <ToolIcon>{icons[i][1]}<IconLabel>{icons[i][0]}</IconLabel></ToolIcon>

            </ToolItem>);
        }
        return items;
    };




    return (
        <>
            <ToolsContainer id="tools">
                <ToolsBg>
                    <ImageBg src={Background} />
                </ToolsBg>
                <ToolsH1>Tools I often use:</ToolsH1>
                <ToolsWrapper>
                    <ToolsCarousel>
                        <ToolsSlider>
                            <ToolsListRight>
                                {renderItems(icons1)}
                            </ToolsListRight>
                            <ToolsListLeft>
                                {renderItems(icons2)}
                            </ToolsListLeft>
                            <ToolsListRight>
                                {renderItems(icons3)}
                            </ToolsListRight>
                        </ToolsSlider>
                    </ToolsCarousel>
                </ToolsWrapper>
            </ToolsContainer>
        </>
    )
}

export default Tools