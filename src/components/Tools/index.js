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
    DiReact,
    DiJavascript,
    DiCss3,
    DiHtml5,
    DiPython
} from "react-icons/di";
import {
    SiStyledcomponents
} from "react-icons/si";

import Background from '../../images/amy-hirschi-szrJ3wjzOMg-unsplash.jpg'


const Tools = () => {

    const iconsLeft = [
        ["React", <DiReact />],
        ["JavaScript", <DiJavascript />],
        ["CSS3", <DiCss3 />],
        ["HTML5", <DiHtml5 />],
        ["Styled Components", <SiStyledcomponents />],
        ["Python", <DiPython />],
        ["React", <DiReact />],
        ["JavaScript", <DiJavascript />],
        ["CSS3", <DiCss3 />],
        ["HTML5", <DiHtml5 />],
        ["Styled Components", <SiStyledcomponents />],
        ["Python", <DiPython />],
        ["React", <DiReact />],
        ["JavaScript", <DiJavascript />],
        ["CSS3", <DiCss3 />],
        ["HTML5", <DiHtml5 />],
        ["Styled Components", <SiStyledcomponents />],
        ["Python", <DiPython />],
        ["React", <DiReact />],
        ["JavaScript", <DiJavascript />],
        ["CSS3", <DiCss3 />],
        ["HTML5", <DiHtml5 />],
        ["Styled Components", <SiStyledcomponents />],
        ["Python", <DiPython />],
        ["React", <DiReact />],
        ["JavaScript", <DiJavascript />],
        ["CSS3", <DiCss3 />],
        ["HTML5", <DiHtml5 />],
        ["Styled Components", <SiStyledcomponents />],
        ["Python", <DiPython />],
        ["React", <DiReact />],
        ["JavaScript", <DiJavascript />],
        ["CSS3", <DiCss3 />],
        ["HTML5", <DiHtml5 />],
        ["Styled Components", <SiStyledcomponents />],
        ["Python", <DiPython />],
        ["React", <DiReact />],
        ["JavaScript", <DiJavascript />],
        ["CSS3", <DiCss3 />],
        ["HTML5", <DiHtml5 />],
        ["Styled Components", <SiStyledcomponents />],
        ["Python", <DiPython />],
        ["React", <DiReact />],
        ["JavaScript", <DiJavascript />],
        ["CSS3", <DiCss3 />],
        ["HTML5", <DiHtml5 />],
        ["Styled Components", <SiStyledcomponents />],
        ["Python", <DiPython />],
        
    ]
    const renderItems = () => {
        let items = [];
        for (let i = 0; i < iconsLeft.length; i++) {
            items.push(<ToolItem key={i} >
                <ToolIcon>{iconsLeft[i][1]}<IconLabel>{iconsLeft[i][0]}</IconLabel></ToolIcon>

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
                                {renderItems()}
                            </ToolsListRight>
                            <ToolsListLeft>
                                {renderItems()}
                            </ToolsListLeft>
                            <ToolsListRight>
                                {renderItems()}
                            </ToolsListRight>
                        </ToolsSlider>
                    </ToolsCarousel>
                </ToolsWrapper>
            </ToolsContainer>
        </>
    )
}

export default Tools