import React from 'react';
import '../login/Login.scss';
import { Link } from "react-router-dom";    

export default function Register() {
    return (
        <div className="login">
            <span className="login__title">Register</span>
            <form className="login__form">
                <label htmlFor="User">Username:</label>
                <input type="text" placeholder="Enter your email..." id="User"/>
                <label htmlFor="Email">Email:</label>
                <input type="email" placeholder="Enter your email..." id="Email"/>
                <label htmlFor="pass">Password:</label>
                <input type="password" placeholder="Enter your Password..." id="pass"/>
                <label htmlFor="Re-pass">Re-password:</label>
                <input type="password" placeholder="Enter your Password again..." id="Re-pass"/>
                <button className="btn-register re"> Register</button>
            </form>
            <button className="btn-register"> 
                <Link to="/login" className="link">Login</Link>
            </button>
        </div>
    )
}
