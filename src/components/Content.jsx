import React, { useContext } from 'react';
import { AccordionContext } from '../context/context';
import '../css/Accordian.css';

const Content = ({ children }) => {
    let { index, activeIndex } = useContext(AccordionContext)
    let isActive = index === activeIndex

    return (
        <div data-panel-content className={isActive ? 'expanded' : ''}>
            {children}
        </div>
    )
};

export default Content;
