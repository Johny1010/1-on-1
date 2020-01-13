import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Diet from './components/Diet/Diet';
import Training from './components/Training/Training';
import User from './components/User/User';

function App() {
    return (
        <div>
            <Header/>
            <Route path="/diet" render={() => <Diet/>}/>
            <Route path="/training-plans" render={() => <Training/>}/>
            <Route path="/user" render={() => <User/>}/>
        </div>
    );
}

export default App;
