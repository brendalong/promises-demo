"use strict";
console.log("Hello grid3");

// Example modified to like in class demo of XHR
let getGrid003 = function () {

  var dataRequest = new XMLHttpRequest();

  dataRequest.addEventListener("load", transferComplete);
  dataRequest.addEventListener("error", transferFailed);


  function transferComplete(evt) {
    console.log("Loading grid image 3");
    console.log("The transfer is complete and we have data.", evt);
    let image = document.getElementsByClassName("grid-03")[0];
    // console.log("evt response", this.response); // oops, this doesn't look good...
    //setup better way to call display images
    let blob = this.response; //object to hold raw data

    image.addEventListener("load", function(event) {
        URL.revokeObjectURL(event.target.src); //release resources associate with createObjectURL
      });

    //here is correct way. 
    image.src = URL.createObjectURL(blob);

    //now get the next one
    getGrid004();

  }

  function transferFailed(evt) {
    console.log("Oops, an error occurred while transferring the file.");
  }


  dataRequest.open("GET", "../images/grid003.png");
  console.log("go get the data", dataRequest);
  dataRequest.responseType = "blob"; //supported values, what we are expecting


    window.setTimeout(function () {
      dataRequest.send(); //adds it to the event loop. 
    }, Math.random() * 2000);
 
};
