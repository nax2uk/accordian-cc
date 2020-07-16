import React, { useContext } from 'react';
import { AccordionContext, SectionContext } from '../context/context';
import '../css/Accordian.css';

const Title = ({ children }) => {
    let { index, activeIndex, setActiveIndex } = useContext(AccordionContext)
    let isActive = index === activeIndex
    let { disabled } = useContext(SectionContext);

    return (
        <div
            data-panel-title
            className={
                disabled ? 'disabled' : isActive ? 'expanded' : ''
            }
            onClick={() => {
                if (!disabled) {
                    setActiveIndex(index)
                }
            }}
        >
            {children}
        </div>
    )
};

export default Title;
