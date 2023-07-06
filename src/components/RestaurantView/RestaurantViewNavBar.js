import "./RestaurantViewNavBar.css"
import { FaMap } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom"
import React, {useEffect, useState} from "react";

const RestaurantViewNavBar = ({ }) => {
    return (
        <div id = "RVNB-navbar">
            <div id = "RVNB-top">
                <div id = "RVNB-title">
                    CRUZ
                </div>
            </div>
            <div id = "RVNB-second">
                <div id = "RVNB-left">
                    <div id = "RVNB-map-icon">
                        <FaMap />
                    </div>
                    <div id = "RVNB-bars-icon">
                        <FaBars />
                    </div>
                </div>
                <div id = "RVNB-center">
                    Pick a Restaurant
                </div>
                <div id = "RVNB-right">
                    <Link to = "/cart-view">
                        <FaShoppingCart />
                    </Link>
                </div >
            </div>
        </div>
    )
}

export default RestaurantViewNavBar