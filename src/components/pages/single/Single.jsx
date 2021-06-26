import React from 'react';
import './Single.scss';
import Sidebar from '../../sidebar/Sidebar';
import Singlepost from '../../singlepost/Singlepost';
import Scroll from '../../scrollindicator/Scroll';
import Footer from '../../footer/Footer';

export default function Single() {
    return (
        <>
            <Scroll/>
            <div className="single">
                <Singlepost/>
                <Sidebar/>
            </div>
            <Footer/>
        </>
    )
}
