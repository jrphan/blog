import React from 'react';
import './Sidebar.scss';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <span className="sidebar__item-title">
                    about me
                </span>
                <img src="https://media.bongda.com.vn/resize/500x300/files/hai.phan/2021/06/25/0_gettyimages-1231262866-2145.jpg" alt=""/>
                <p>gian gần đây, Man United đã trở lại và có những động thái đàm phán với Dortmund. Nhiều nguồn tin tiết lộ, Man United sẵn sàng chấp nhận mức phí chuyển nhượng 90 triệu euro do Dortmund yêu cầu.</p>
            </div>
            <div className="sidebar__item"> 
                <span className="sidebar__item-title">
                    categories
                </span>
                <ul className="sidebar__item-list">
                    <li className="item">Ronaldo</li>
                    <li className="item">messi</li>
                    <li className="item">style</li>
                    <li className="item">sport</li>
                    <li className="item">Ronaldo</li>
                    <li className="item">messi</li>
                    <li className="item">style</li>
                    <li className="item">sport</li>
                </ul>
            </div>
            <div className="sidebar__item"> 
                <span className="sidebar__item-title">
                    follow me
                </span>
                <div className="sidebar__item-icon">
                    <i className="item fab fa-facebook"></i>
                    <i className="item fab fa-instagram"></i>
                    <i className="item fab fa-github"></i>
                </div>
            </div>
        </div>
    )
}
