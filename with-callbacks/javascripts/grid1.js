"use strict";

console.log("Hello grid1");

//look at grid3.js, too. console.log for responseType details
let getGrid001 = function () {

    //create XHR to load the image
    var loader = new XMLHttpRequest();

    //Add listener to loader
    loader.addEventListener("load", function(){
      console.log("Loading grid image 1");
      let blob = this.response; //Blobs are immutable objects that represent raw data
      console.log("blob", blob);
      let image = document.getElementsByClassName("grid-01")[0];

      image.addEventListener("load", function(event) {
        URL.revokeObjectURL(event.target.src); //release resources associate with creating url
      });

      image.src = URL.createObjectURL(blob);

      //now go get the next one
      getGrid002();
    });


    loader.addEventListener("error", function(){
      console.log("Error occured");
    });

    loader.open("GET", "../images/grid001.png");
    loader.responseType = "blob";

    //gving a delay, simulate network loading
    window.setTimeout(function () {
      loader.send();
    }, Math.random() * 2000);

};

