import React from 'react';
import Button from './Components/Button';

function App() {
  // let arr = ["Apple", "white", "black"];
    return (
        <div>
          <h1>Hello World...</h1>
          <Button fruits={["Apple", "white", "black"]}></Button>
          <Button fruits={['Banana', 'yellow', 'red']}></Button>
          <Button fruits={['Pineapple', 'green', 'blue']}></Button>
        </div>
    )
}

export default App;