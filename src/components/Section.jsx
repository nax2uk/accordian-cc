import React from 'react';
import '../css/Accordian.css';
import { SectionContext } from '../context/context';
function Section({ children, disabled }) {
    return <SectionContext.Provider value={{ disabled }}>
        <div data-section>{children}</div>
    </SectionContext.Provider>
}

export default Section;