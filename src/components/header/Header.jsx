import React from 'react';
import './Header.scss';

export default function Header() {
    return (
        <div className="header">
            <div className="header__titles">
                <span className="header__titles-sm">Sport & Life</span>
                <span className="header__titles-lg">
                    <span>B</span>
                    <span>l</span>
                    <span>o</span>
                    <span>g</span>
                </span>
            </div>
            <img src="https://anhdepblog.com/wp-content/uploads/2018/01/top-hinh-nen-bong-da-dep-77.jpg" alt="banner" className="header__img"/>
        </div>
    )
}
