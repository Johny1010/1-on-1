import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Diet from './components/Diet/Diet';
import Training from './components/Training/Training';
import User from './components/User/User';

function App() {
    return (
        <div>
            <Header/>
            <Diet/>
            <Training/>
            <User/>
        </div>
    );
}

export default App;
