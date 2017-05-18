// sanity check 
console.log("hi!")
$(document).ready(function(e) {
    



$(window).on("keydown", function moveHare(event){

	if (event.keyCode==13){
	$("#hare").appendTo("#cent-left")}
	}); 

$(window).on("keydown", function moveTort(event){

	if (event.keyCode==16){
	$("#tort").appendTo("#cent-right")}
	
	// $("#hare").css({"float": "right",
	// "margin": "180px 0 0 0",
	// "height": "200px",
	// "width": "220px"
	// "transform": scale(-1, 1);})
	});

// function winner(x){
// 	if(entMoveHare==true){
// 		console.log("Hare wins!")
// 	};


// };



		




// {alert("Hare wins!")
// return 
// 	} else if(shiftMoveTort===true){
// 		alert("Tortoise wins!")
// 		return} 
// 		else {alert("Victory undecided")}

// 	}



// }


let x = function win() {
	if(moveHare()){
	alert("hare wins")

}} 



})




// .css({
//     position: 'absolute',
//     left: 169,
//     top: 182

// $(this).rules('add', {
// 		float: left,
// 		margin: 0 0 0 0

// 	});