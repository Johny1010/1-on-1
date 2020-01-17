import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Diet from './components/Diet/Diet';
import Training from './components/Training/Training';
import User from './components/User/User';
import NewProduct from './components/Diet/Product/NewProduct/NewProduct';

function App() {
    return (
        <div>
            <Header/>
            <Route path="/diet" component={Diet}/>
            <Route path="/training-plans" component={Training}/>
            <Route path="/user" component={User}/>
            <Route path="/add-product" component={NewProduct}/>
        </div>
    );
}

export default App;
