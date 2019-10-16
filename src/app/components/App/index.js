import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//components
import Switch from '../App/Switch/Switch';
import Login from '../App/Login/login';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/" exact component={Switch} />
                <Route path="/login" exact component={Login} />
            </BrowserRouter>
        </div>
    )
}

export default App;
