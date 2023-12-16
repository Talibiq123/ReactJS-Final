import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './index.css';
import CricketProvider from './Components/useContext/CricketProvider.js';





// ReactDOM.render(<App />, document.getElementById('root'));


const root = 
createRoot(document.getElementById('root'));

root.render(
    <CricketProvider>
        <App />
    </CricketProvider>
);