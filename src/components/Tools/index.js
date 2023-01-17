import React, {useRef} from 'react';
import {
    ToolsContainer,
    ToolsWrapper,
    ToolsH1,
    ToolsSlider,
    ToolsList,
    ToolsCarousel,
    ToolItem,
    ToolIcon

} from './ToolsElements';


const Tools = () => {

    const icons = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12]

    const renderItems = () => {
        let items = [];
        for (let i = 0; i < icons.length; i++) {
            items.push(<ToolItem key={i} ><ToolIcon>{icons[i]}</ToolIcon></ToolItem>);
        }
        return items;
    };


 

    return (
        <>
            <ToolsContainer id="tools">
                <ToolsH1>Tools</ToolsH1>
                <ToolsWrapper>
                    <ToolsCarousel>
                        <ToolsSlider>
                            <ToolsList>
                                {renderItems()}
                            </ToolsList>
                        </ToolsSlider>
                        
                    </ToolsCarousel>
                </ToolsWrapper>
            </ToolsContainer>
        </>
    )
}

export default Tools