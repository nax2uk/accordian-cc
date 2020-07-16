import React, { useState } from 'react';
import { AccordionContext } from '../context/context';
import '../css/Accordian.css';
function AccordianCC({ children }) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div data-accordion>
            {children.map((child, index) => {
                return (
                    <AccordionContext.Provider
                        key={`section-${index}`}
                        value={{ index, activeIndex, setActiveIndex }}
                    >
                        {child}
                    </AccordionContext.Provider>
                )
            })}
        </div>
    )
};

export default AccordianCC;