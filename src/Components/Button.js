import React from "react";

function Button({fruits}) {
    return (
        <div>
          <button style={{backgroundColor: fruits[1], color: fruits[2]}}>{fruits[0]}</button>
          {/*<p>This is {text} which is {color} in color</p>*/}
        </div>
    );
}

export default Button;