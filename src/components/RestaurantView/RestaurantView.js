import RestaurantCard from "./RestaurantCard";
import "./RestaurantView.css"
import RestaurantViewNavBar from "./RestaurantViewNavBar";
import "./SearchBar.css"
import SearchBar from "./SearchBar";
import RestaurantComponent from "./restaurant_api"
import { useLocation } from "react-router-dom";


const results = <RestaurantComponent query=""/>

const RestaurantView = ({ }) => {
    return (
        <div id = "RV-bottom">
            <RestaurantViewNavBar/>
            <SearchBar/>
            <RestaurantComponent query=""/>
        </div>
    )
}

export default RestaurantView