"use strict";

let getGrid005 = function () {

  return new Promise((resolve, reject) => {
    // Create an XHR to load the image
    var loader = new XMLHttpRequest();

    // Listen for when the load event is broadcast
    // and execute an anonymous callback
    loader.addEventListener("load", function () {
      console.log("Loading grid image 5");
      let blob = this.response;
      let image = document.getElementsByClassName("grid-05")[0];
      image.addEventListener("load", function (evt) {
        URL.revokeObjectURL(evt.target.src);
      });
      image.src = URL.createObjectURL(blob);
      resolve();
    });

    // If an error occurs, reject the promise
    loader.addEventListener("error", function () {
      console.log("Error occurred");
      reject();
    });

    loader.open("GET", "../images/grid005.png");
    loader.responseType = "blob";
    
    window.setTimeout(function () {
      loader.send();
    }, Math.random() * 2000);
  });
};
