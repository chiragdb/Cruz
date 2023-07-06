import "./Join-Username.css"
import { Link } from "react-router-dom"
import {useState} from 'react'
import React from 'react';
import { useNavigate } from "react-router-dom";
import { joinGroupOrder } from "../../firebase";
import { setORDER_ID, getORDER_ID, setUSER_ID, getUSER_ID, setUSERNAME } from "../order_info";


const JoinUsername = ({ }) => {
    
    const [username, setUsername] = useState('');
    // const [updated, setUpdated] = useState(username);

    const [orderId, setOrderId] = useState('')
    // const [updatedId, setUpdatedId] = useState(orderId);

    const navigate = useNavigate();

    const handleChangeUser = (event) => {
        setUsername(event.target.value);
        setUSERNAME(event.target.value)
        // console.log(getUSER_ID())
    };

    const handleChangeID = (event) => {
        setOrderId(event.target.value);
        setORDER_ID(event.target.value)
        // console.log(getORDER_ID())
    };

    const handleClick = () => {
        // setUpdatedId(orderId);
        // setUpdated(username);
        joinGroupOrder(username, orderId);
        navigate('/cart-view', {state: {orderID: orderId}});
    };

    

    return (
        <div id = "JU-total">
            <div id = "JU-center-box">
                <div id = "JU-username">
                    <input type="text" id="username" name="username" placeholder="Enter username" onChange = {handleChangeUser} value = {username}/>
                </div>
                <div id = "JU-orderID">
                    <input type="text" id="orderId" name="orderId" placeholder="Enter order ID" onChange = {handleChangeID} value = {orderId}/>
                </div>
                <div id = "JU-enter">
                    <button type="JU-button" onClick={handleClick} id = "btn">Enter</button>
                </div>
            </div>
        </div>
        )
}

export default JoinUsername