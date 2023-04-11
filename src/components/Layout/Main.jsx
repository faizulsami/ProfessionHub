import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const path = useLocation().pathname
    return (
        <div className={ (path === '/') && 'mx-5 lg:mx-40'}>
        { (path === '/') && <Header></Header>}
        <Outlet></Outlet>
        </div>
    );
};

export default Main;