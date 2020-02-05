import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Header.module.css';

// [to do] add dropdown menu for User Links

const Header = (props) => {
    return(
        <header>
            <nav  className={"navbar" + ' ' + classes.NavBar}>
                <ul className={"nav" + ' ' + classes.NavButtons}>
                    <li className={"btn"}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={"btn"}>
                        <Link to={{pathname: '/diet'}}>Diet</Link>
                    </li>
                    <li className={"btn"}>
                        <Link to={{pathname: '/training-plans'}}>Training</Link>
                    </li>
                    <li className={"btn"}>
                        <Link to={{pathname: '/user/daily-diet'}}>Daily diet</Link>
                    </li>
                    <li className={"btn"}>
                        <Link to={{pathname: '/user/training'}}>Your training</Link>
                    </li>
                    <li className={"btn"}>
                        <Link to={{pathname: '/user/dimensions'}}>Your body</Link>
                    </li>
                    <li className={"btn"}>
                        <Link to={{pathname: '/add-product'}}>Add product</Link>
                    </li>
                    <li className={"btn"}>
                        <Link to={{pathname: '/add-training-plan'}}>Custom training plan</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;