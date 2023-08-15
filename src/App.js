import React from 'react';
import './App.css';
import 'h8k-components';
import HackerMart from './components/HackerMart';
import { BrowserRouter as Router } from "react-router-dom";

const title = "Market";

const App = () => {
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <Router>
                <HackerMart />
            </Router>
        </div>
    );
}

export default App;
