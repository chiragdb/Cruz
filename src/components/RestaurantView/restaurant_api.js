import axios from "axios"
import React, { useEffect, useState } from "react"
import RestuarantCard from "./RestaurantCard"

//CORS Redirection
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'

//Google API Key 
const API_KEY = 'AIzaSyByLCj-Dm32_mhoEUPAt0DNjvwA1gNqW40'

//Initial Lat and Long (Pyramids of Giza)
let lat = 29.9773
let long = 31.1325

//Grabbing user's location and displaying closest restaurants in a 1.5km radius using Maps API

// var getRestaurants = function(query) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         //Getting lat and long from the position JSON 
//         lat = position['coords']['latitude']
//         long = position['coords']['longitude']
//         // if (!query) query = ""

//         //initializing API url with lat, long, radius
//         const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "%2C" + long + "&radius=1500&type=restaurant&keyword=" + query + "&key=" + API_KEY
        
//         //Using axios --> making the api call prefixed by the heroku CORS redirection url
//         axios.get(PROXY_URL + url).then(function (response) {
//             //Results array containing restaurant metadata
//             let rest = response.data["results"]
//             console.log(rest)
//             return results
//         }).catch(function (error) {
//             console.log(error)
//         })
//     })
// }

function RestaurantComponent({query}) {
    const[restaurants, setRestaurants] = useState([])
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            //Getting lat and long from the position JSON 
            lat = position['coords']['latitude']
            long = position['coords']['longitude']
            // if (!query) query = ""
    
            //initializing API url with lat, long, radius
            const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "%2C" + long + "&radius=1500&type=restaurant&keyword=" + query + "&key=" + API_KEY
            console.log(url)
            //Using axios --> making the api call prefixed by the heroku CORS redirection url
            axios.get(PROXY_URL + url).then(function (response) {
                setRestaurants(response.data.results.map(r => ({id: r.place_id, name: r.name, vicinity: r.vicinity, rating: r.rating}))) // r for restaurant
            })
        })
    }, []) // The [] prevents this from re-rendering endlessly (try without it and see for yourself)
    console.log(restaurants)
    return (
        <div>
            {restaurants.map(elem => 
                <div>
                    {/* <h1 key={"name" + elem.id}>{elem.name}</h1> 
                    <h2 key={"vicinity" + elem.id}>{elem.vicinity}</h2> */}
                    {/* key is to make console shut up about unique key prop errors */}
                    {/* You can either style this with css or create another React Component and pass in the parameters like so: */}
                    {/* <RestaurantPanel name={elem.name} vicinity={elem.vicinity} /> */}
                    <RestuarantCard name = {elem.name} vicinity = {elem.vicinity} rating = {elem.rating}/>
                </div>
            )}
        </div>
    )}

export default RestaurantComponent
// getRestaurants("")

