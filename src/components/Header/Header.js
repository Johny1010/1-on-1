import React from 'react';

import classes from './Header.module.css';

const Header = (props) => {
    return(
        <div className={classes.Nav}>
            <ul className={classes.navLinks}>
                <li>
                    <a>Diet</a>
                </li>
                <li>
                    <a>Training</a>
                </li>
            </ul>
            <ul className={classes.loginList}>
                <li>
                    <a>Login</a>
                </li>
                <li>
                    <a>Register</a>
                </li>
            </ul>
        </div>
    )
};

export default Header;