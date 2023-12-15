import React from 'react';
import "./index.css";
import Hello from './Components/useContext/Hello.js';
import CricketContext from './Components/useContext/CricketContext.js';



function App() {

    return (
        <div>
            <Hello />
            <CricketContext />
        </div>
    )
}

export default App;