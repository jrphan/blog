import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login">
            <span className="login__title">Login</span>
            <form className="login__form">
                <label htmlFor="Email">Email:</label>
                <input type="email" placeholder="Enter your email..." id="Email"/>
                <label htmlFor="pass">Password:</label>
                <input type="password" placeholder="Enter your Password..." id="pass"/>
                <button className="btn-login"> Login</button>
            </form>
            <button className="btn-register"> 
                <Link to="/register" className="link">Register</Link>
            </button>
        </div>
    )
}
