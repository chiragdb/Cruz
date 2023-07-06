// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, update, push, remove, onValue} from "firebase/database";
import { setORDER_ID, setUSER_ID } from "./components/order_info";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDIvB8A1L0-gHcXN4AZp7UliYUz0wYBPt0",
  authDomain: "cruz-e3bfe.firebaseapp.com",
  databaseURL: "https://cruz-e3bfe-default-rtdb.firebaseio.com",
  projectId: "cruz-e3bfe",
  storageBucket: "cruz-e3bfe.appspot.com",
  messagingSenderId: "15242307316",
  appId: "1:15242307316:web:1558e5fb98858be011a0a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// const orderRef = ref(database, 'orders/')
//   onValue(orderRef, (snapshot) => {
//     const data = snapshot.val()
//     console.log(data)
// })

export function createGroupOrder (username) { 
    //Generate orderID and create new group order
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let orderID = '';
    const ID_LEN = 5;
    for ( let i = 0; i < ID_LEN; i++ ) {
      orderID += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    const TEST_ORDER = {
      name: username,
      restaurant_name: "Chipotle",
      food_items: ["Chicken Burrito", "Chips", "Mexican Coke"]
    }

    // attachListener(orderID)
    let userID = joinGroupOrder(username, orderID) // Create Initial User
    setORDER_ID(orderID)
    setUSER_ID(userID)
    // let user2 = joinGroupOrder("Vansh G", orderID) // Test adding user
    // addFoodItems(user1, orderID, TEST_ORDER) // Updating user order
    // console.log(orderID)
    return orderID;
}

export function joinGroupOrder (username, orderID) {
  //Join existing group order
  const newUserID = push(child(ref(database), 'orders/' + orderID)).key;
  setUSER_ID(newUserID);
  const updates = {}

  const blank_order = {
    name: username,
    restaurant_name: "",
    food_items: ""
  }
  updates['/orders/' + orderID + '/' + newUserID] = blank_order

  update(ref(database), updates)

  return newUserID
}

export function addFoodItems (userID, orderID, orderInfo) {
  //Add food items to user order
  // const updates = {}
  let path = '/orders/' + orderID + '/' + userID
  path = path.replace(/\s/g, '');

  // updates[path] = orderInfo
  const dataRef = ref(database, path)

  update(dataRef, orderInfo)
  .then(() => {
    console.log("Order succesfully inputted")
  })
  .catch((error) => {
    console.error("Order input failed: ", error)
  })
  // return update(ref(database), updates)
  // const userRef = data
}

export function deleteOrder (orderID) {
  // set(ref(database, 'orders/' + orderID), null)
  // .then(() => {
  //   console.log("Succesfully deleted order: " + orderID)
  // })

  // remove(ref(database, "orders/je212FzQ/-NSNFBfOEx6nzYKYo3VY")).then(() => {
  //   console.log("Succesfully deleted order: " + orderID)  
  // })
  // return remove(ref(database, 'orders/' + orderID))
}

export const attachListener = (orderID, callback) => {
  const orderRef = ref(database, 'orders/' + orderID)
  onValue(orderRef, (snapshot) => {
    const data = snapshot.val()
    callback(data)
    // console.log(data) //pass data to front end with every update to child nodes in realtime db
  })
}


// getOrder("je212FzQ")
// createGroupOrder("Suraj")

// deleteOrder("jlX81FUV")

// module.exports = createGroupOrder;
// module.exports = joinGroupOrder;
// module.exports = addFoodItems;
