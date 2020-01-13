import React from 'react';

import Dimensions from './Dimensions/Dimensions';
import UserDiet from './UserDiet/UserDiet';
import UserPlan from './UserPlan/UserPlan';

import classes from './User.module.css';

const User = (props) => {
    return(
        <div>
            <UserDiet/>
            <UserPlan/>
            <Dimensions/>
        </div>
    )
};

export default User;