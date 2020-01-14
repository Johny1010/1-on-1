import React from 'react';

import { Route } from 'react-router-dom';

import Dimensions from './Dimensions/Dimensions';
import UserDiet from './UserDiet/UserDiet';
import UserPlan from './UserPlan/UserPlan';

import classes from './User.module.css';

const User = (props) => {

    console.log(`/user/daily-diet`);

    return(
        <div>
            <Route path={`/user/daily-diet`} component={UserDiet} />
            <Route path={`/user/training`} component={UserPlan} />
            <Route path={`/user/dimensions`} component={Dimensions} />
        </div>
    )
};

export default User;