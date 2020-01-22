import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Header.module.css';

const Header = (props) => {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={{pathname: '/diet'}}>Diet</Link></li>
                    <li><Link to={{pathname: '/training-plans'}}>Training</Link></li>
                    <li><Link to={{pathname: '/user/daily-diet'}}>Daily diet</Link></li>
                    <li><Link to={{pathname: '/user/training'}}>Your training</Link></li>
                    <li><Link to={{pathname: '/user/dimensions'}}>Your body</Link></li>
                    <li><Link to={{pathname: '/add-product'}}>Add product</Link></li>
                    <li><Link to={{pathname: '/add-training-plan'}}>Custom training plan</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;