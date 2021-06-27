import React from 'react';
import './Setting.scss';
import Sidebar from '../../sidebar/Sidebar';

export default function Setting() {
    return (
        <div className="setting">   
            <div className="settingwrapper">
                <div className="settingwrapper__titles">
                    <span className="settingwrapper__titles-update">Update Your Account</span>
                    <span className="settingwrapper__titles-delete">Delete Account</span>
                </div>
                <form className="settingwrapper__form">
                    <label>Profile Picutre</label>
                    <img
                        src="https://s.yimg.com/fz/api/res/1.2/GtjgeMpMNywGknC7_3VFNw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/e6eaa121-39e5-322e-b9f7-9dc65475a2d0/t_1024x1024"
                        alt=""
                    />
                    <label htmlFor="fileinput">
                        <i className="icon fas fa-users"></i>
                    </label>
                    <input type="file" id="fileinput" style={{display: "none"}}/>
                    <label htmlFor="user">Username</label>
                    <input type="text" placeholder="JR Phan" id="user"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="phanduytam0306.ltp@gmail.com" id="email"/>
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass"/>
                    <button className="submit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
