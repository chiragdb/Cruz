import { getDatabase, ref, child, get } from "firebase/database";

var assert = require('assert');

const dbRef = ref(getDatabase());
const createGroupOrder = require('./firebase')

describe('Firebase', function () {
  describe('#createGroupOrder', function () {
    const pair = createGroupOrder("Vansh G")
    const userID = pair[0]
    const orderID = pair[1]
    let expected = ""

    get(child(dbRef, `orders/${orderID}/${userID}`)).then((snapshot) => {
        if (snapshot.exists()) {
          expected = snapshot.val();
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

    // if (expected === "Vansh G") {
    //   console.log("CreateGroupOrder: Test passed!\n")
    // } else {
    //   console.log("CreateGroupOrder: Test failed!\n")
    // }

    assert.equal(expected, "Vansh G")
  });
  
});