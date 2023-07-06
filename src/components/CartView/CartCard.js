import "./CartCard.css"
import React, {useEffect, useState} from "react";

const CartCard = ({ name, restaurantName, food }) => {
    console.log(name)
    // console.log(restaurantName)
    // console.log(food)
    return (
        <div id = "CC-card">
            {/* <h1>HelloWorld</h1> */}
            <h1>{name}</h1>
            {restaurantName && <h3 id="res-name">{restaurantName}</h3>}
            {food && <h3 id="food-item">{food}</h3>}
        </div>
    )
}

export default CartCard

