import React from "react";

function Button(props) {
    return (
        <div>
          <button>{props.text}</button>
          <p>This is {props.text} which is {props.color} in color</p>
        </div>
    );
}

export default Button;