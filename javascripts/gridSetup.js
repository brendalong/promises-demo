// getGrid001().then(
//   	getGrid003, console.error)
// .then(
//   	getGrid005, console.error)
// .then(
//   	getGrid002, console.error)
// .then(
//   	getGrid004, console.error)
// .then(
//   	getGrid006, console.error)
// .then(
// 	getColors, console.error)
// .then(
// 	function (resolve) {
// 		console.log("the colors:", resolve);
// 		let newItem = {LegoName: "Brenda's Pick", ColorHex: "A2A2D0", YearFrom:"2009", YearTo:"Present"};
// 		resolve.push(newItem);
// 		showItems(resolve);
// 	},
// 	function (reject) {
// 		console.log("OOPs", reject);
// 	},
//   	getToolbar());




//////////// for the legos ////////////////////////////////
let showItems = function(legosData){
	// console.log("showItems", legosData);
	let legoDisplay = document.getElementById("lego-display");

	legosData.forEach(function(lego){
		let legoBlock = buildLego(lego);
		legoDisplay.innerHTML += legoBlock;
	});
}

let buildLego = function(lego){
	//building a string to create the visual display

	let block = "",
		wrapper = `<div class="col-sm-3" style="border: 2px solid #000000; background-color:#${lego.ColorHex}">`,
		title = `<h3>Name: ${lego.LegoName}</h3>`,
		years = `<div class="block-years">Manufactured ${lego.YearFrom} - ${lego.YearTo}</div>`;
		// image = `<div class="card-img" style="background-image: url('images/${car.image}')"></div>`,
		let link = lego.ColorstreamLinkImage;
		if (link){
			 block += `<a href="${link}">${wrapper + title + years}</a></div>`;
		}else{
			block += `${wrapper + title + years}</section>`;
		}
  	return block;
}

// FROM MDN
///////////////// promise all ////////////////////
// if any rejected, catch fires

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); // [3, 1337, "foo"] 
});

///////////////// promise race ////////////////////
// triggers as soon as any promise is returned

// var p1 = new Promise((resolve, reject) => { 
//   	setTimeout(resolve, 1000, 'one'); 
// }); 
// var p2 = new Promise((resolve, reject) => { 
//   	setTimeout(resolve, 2000, 'two'); 
// });
// var p3 = new Promise((resolve, reject) => {
//   	setTimeout(resolve, 3000, 'three');
// });
// var p4 = new Promise((resolve, reject) => {
//   	setTimeout(resolve, 400, 'four');
// });
// var p5 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 1000, 'five');
//  	// try both ways
//   	// reject('reject');
// });

// Promise.race([p1, p2, p3, p4, p5])
// .then(values => { 
// 	console.log(values);
// }, 
// reason => {
// 	console.log(reason)
// });

