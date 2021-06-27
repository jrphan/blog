import './Topbar.scss';
import { Link } from "react-router-dom";

export default function Topbar() {
    const user = true;  

    return (
        <div className="topbar">
            <div className="topbar__icon">
                <i className="topbar__icon-item fab fa-facebook"></i>
                <i className="topbar__icon-item fab fa-instagram"></i>
                <i className="topbar__icon-item fab fa-github"></i>
            </div>
            <div className="topbar__menu">
                <ul className="topbar__menu-list">
                    <li className='item'>
                        <Link to="/" className="link">home</Link>
                    </li>
                    <li className='item'>
                        <Link to="/write" className="link">write</Link>
                    </li>
                    <li className='item'>
                    <Link to="/about" className="link">about</Link>
                    </li>
                    <li className='item'>
                        <Link to="/contact" className="link">contact</Link>
                    </li>
                    <li className='item'>
                        {user && (
                            <Link to="/login" className="link" >Logout</Link>
                        )}
                    </li>
                </ul>
            </div>
            <div className="topbar__login">
                <i className="topbar__login-search fas fa-search"></i>
                { user ? (
                    <img src="https://anhdepblog.com/wp-content/uploads/2018/01/top-hinh-nen-bong-da-dep-23.jpg" alt="avatar" className="topbar__login-img"/> 
                ): (
                        <Link to="/login" className="link">Login</Link>
                )}
            </div>
        </div>
    )
}
