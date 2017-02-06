"use strict";

console.log("Hello grid2");

let getGrid002 = function () {

    //create XHR to load the image
    var loader = new XMLHttpRequest();

    //Add listener to loader
    loader.addEventListener("load", function(){
      console.log("Loading grid image 2");
      let blob = this.response;
      let image = document.getElementsByClassName("grid-02")[0];

      image.addEventListener("load", function(event) {
        URL.revokeObjectURL(event.target.src);
      });
      image.src = URL.createObjectURL(blob);

      //now go get the next one
      getGrid003();
    });


    loader.addEventListener("error", function(){
      console.log("Error occured");
    });

    loader.open("GET", "../images/grid002.png");
    loader.responseType = "blob";

    //gving a delay, simulate network loading
    window.setTimeout(function () {
      loader.send();
    }, Math.random() * 2000);

};