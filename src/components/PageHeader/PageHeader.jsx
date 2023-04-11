import React from 'react';
import Header from '../Header/Header';

const PageHeader = ({title}) => {
    return (
        <div>
            <div className='bg-green-300 px-5 pb-40 lg:px-40'>
                <Header></Header>
                <h2 className='text-center text-2xl font-bold'>{title}</h2>
            </div>
        </div>
    );
};

export default PageHeader;