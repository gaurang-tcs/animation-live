import React from 'react';

import 'antd/dist/antd.css';
import "./Header.css"
import { Menu } from 'antd';

const AppHeader = () => (
    <div className='header'>
        <nav className='menu'>
            <li className='nav-list'>Home</li>
            <li className='nav-list'>About Us</li>
            <li className='nav-list'>Applications</li>
            <li className='nav-list'>Products</li>
            <li className='nav-list'>Blog</li>
            <li className='nav-list'>Login</li>
        </nav>
    </div>
);

export default AppHeader;
