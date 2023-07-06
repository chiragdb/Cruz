import "./RestaurantCard.css"
import { FaMap } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaEgg } from "react-icons/fa";
import {FaStar} from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"
import React, {useEffect, useState} from "react";


const RestuarantCard = ({ name, vicinity, rating }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/order', {state:{name: name}});
    };

    return (
        <div id = "RC-card">
            <div id = "RC-rating">
                <FaStar/>
                {rating}
            </div>
            <div id = "RC-name">
                {name}
            </div>
            <div id = "RC-right">
                <div id = "RC-address">
                    {vicinity}
                </div>
                    <div id = "RC-add">
                        <FaRegPlusSquare onClick={handleClick}/>
                    </div>
            </div>
        </div>
    )
}

export default RestuarantCard

