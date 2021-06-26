import React, { useEffect, useState } from 'react';
import { useWindowScroll} from 'react-use';
import './scroll.scss';

export default function Scroll() {
    const {y} = useWindowScroll();
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrolled((y /height) * 100);
    }, [y]);

    return (
        <div className="scroll__container">
            <div 
                className="indicator"
                style={{width: `${scrolled}%`}}
            >
            </div>
            
        </div>
    )
}
