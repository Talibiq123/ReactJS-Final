import React, {useState} from "react";

function StateWithArray() {
    let [favorites,setFavorites] = useState(["apple", "mango", "banana"]);
    let [fruit, setfruit] = useState("");

    console.log("Favorites: " + favorites);
    console.log("Fruits", fruit);

    function addToFavourite() {
        setFavorites([...favorites, fruit]);
    }

    return (
        <div>
            <input type="text" placeholder="Enter favorites fruits" onChange={(event) => setfruit(event.target.value)}/>
            <button onClick={addToFavourite}>Add to favorites</button>

            <h1>{favorites.join(", ")}</h1>
        </div>
    );
}

export default StateWithArray;