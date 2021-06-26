import React from 'react';
import './Sidebar.scss';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <span className="sidebar__item-title">
                    about me
                </span>
                <img src="https://s.yimg.com/fz/api/res/1.2/GtjgeMpMNywGknC7_3VFNw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/e6eaa121-39e5-322e-b9f7-9dc65475a2d0/t_1024x1024" alt=""/>
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
