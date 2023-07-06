import { Link } from "react-router-dom"
import React, {useEffect, useState} from "react";
import "./LoginPage.css"

const LoginPage = ({ }) => {
    return (
        <div id = "LP-total">
            <div id = "LP-title">
                CRUZ
            </div>
            <div id = "LP-main">
                <Link to = "/create">
                    <div id = "LP-create">                   
                        Create group order
                    </div>
                </Link>
                <Link to = "/join">
                    <div id = "LP-join">                   
                        Join group order
                    </div>
                </Link>
            </div>
        </div>
        
    )
}

export default LoginPage