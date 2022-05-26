import React, { useState } from 'react';

import 'antd/dist/antd.css';
import "./Header.css"

const AppHeader = () => {
    const [Header, setHeader] = useState(false);

    const changeBg = () => {
        if (window.scrollY >=100 ) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };
    window.addEventListener("scroll", changeBg);

    return (
        <div className={ Header ? "header2" : "header" }>
            <img src={require('../../assets/image-processing20200828-9377--unscreen.gif')} alt="iocn" />
            <nav className='menu'>
                <li className='nav-list'>Home</li>
                <li className='nav-list'>About Us</li>
                <li className='nav-list'>Applications</li>
                <li className='nav-list'>Products</li>
                <li className='nav-list'>Blog</li>
                <li className='nav-list'>Login</li>
            </nav>
        </div>
    )
};

export default AppHeader;
