"use strict";

let getColors = function () {

  return new Promise((resolve, reject) => {
    // Create an XHR to load the json file
    let request = new XMLHttpRequest();

    // Listen for when the load event is broadcast
    // and execute an anonymous callback
    request.addEventListener("load", function () {
      console.log("Loading colors");
      var data = JSON.parse(request.responseText);
      let legoItems = [];
      let parseData = data.LegoColorss.forEach(function(element){
        legoItems.push(element)
      });
     // modify the data into array
      let container = document.getElementsByClassName("grid-07")[0];
      resolve(legoItems); //the resolve contains the data -- returned to the caller
        // resolve(request.response); // default
    });

    // If an error occurs, reject the promise
    request.addEventListener("error", function (a, b, c) {
      console.log("Error occurred");
      reject(new Error("XMLHttpRequest Error ",request.statusText));
    });


    request.open("GET", "../lego-colors.json");
    
    
    window.setTimeout(function () {
      request.send();
    }, Math.random() * 2000);
  });
};
