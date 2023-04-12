import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import FooterPart from '../Footer/FooterPart';
import './Main.css'

const Main = () => {
    const path = useLocation().pathname
    return (
        <div className={ (path === '/') && 'mx-5 lg:mx-40'}>
        { (path === '/') && <Header></Header>}
        <Outlet></Outlet>
        <div className='footer-custom-clr mt-6'>
        <FooterPart></FooterPart>
        </div>
        </div>
    );
};

export default Main;