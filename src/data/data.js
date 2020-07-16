import Description from '../components/Description';
import React from 'react';
const data = [
    {
        label: 'Paris',
        icon: '🧀',
        content: <Description city="paris" />,
    },
    {
        label: 'Lech',
        icon: '⛷',
        content: <Description city="lech" />,
    },
    {
        label: 'Madrid',
        icon: '🍷',
        content: <Description city="madrid" />,
    },
]
export default data;