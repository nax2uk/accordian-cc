import React, { useState, Fragment } from 'react';
import '../css/Accordian.css'

const Accordian = ({ data, position = "top", disabled = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div data-accordion>
            {data.map((tab, index) => {
                const isActive = index === activeIndex;
                const isDisabled = disabled.includes(index);

                const title = (
                    <div
                        data-panel-title
                        className={
                            isDisabled ? 'disabled' : isActive ? 'expanded' : ''}
                        onClick={() => { if (!isDisabled) setActiveIndex(index) }}>
                        <span>{tab.label}</span>
                        <span>{tab.icon}</span>
                    </div>
                )

                const content = (
                    <div data-panel-content className={isActive ? 'expanded' : ''}>
                        {tab.content}
                    </div>
                )

                return (
                    <Fragment key={index}>
                        {position === 'bottom' ? [content, title] : [title, content]}
                    </Fragment>
                )
            })}
        </div>
    )
};

export default Accordian;
