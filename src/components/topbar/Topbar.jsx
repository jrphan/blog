import './Topbar.scss'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__icon">
                <i className="topbar__icon-item fab fa-facebook"></i>
                <i className="topbar__icon-item fab fa-instagram"></i>
                <i className="topbar__icon-item fab fa-github"></i>
            </div>
            <div className="topbar__menu">
                <ul className="topbar__menu-list">
                    <li className='item'>home</li>
                    <li className='item'>about</li>
                    <li className='item'>contact</li>
                    <li className='item'>write</li>
                    <li className='item'>logout</li>
                </ul>
            </div>
            <div className="topbar__login">
                <i className="topbar__login-search fas fa-search"></i>
                <img src="https://anhdepblog.com/wp-content/uploads/2018/01/top-hinh-nen-bong-da-dep-23.jpg" alt="avatar" className="topbar__login-img"/> 
            </div>
        </div>
    )
}
