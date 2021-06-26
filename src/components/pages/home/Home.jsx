import React from 'react';
import './Home.scss';
import Header from '../../header/Header';
import Sidebar from '../../sidebar/Sidebar';
import Posts from '../../posts/Posts';
import Footer from '../../footer/Footer';

export default function Home() {
    return (
        <>
           <Header/>
            <div className="home">
                <Posts/>
                <Sidebar/>
            </div>
            <Footer/>
        </>
    )
}
