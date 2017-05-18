// sanity check 
console.log("hi!")
$(document).ready(function(e) {
    



$(window).on("keydown", function moveHare(event){

	if (event.keyCode==13){
	$("#hare").appendTo("#cent-left")}
	
	// $("#hare").css({"float": "right",
	// "margin": "180px 0 0 0",
	// "height": "200px",
	// "width": "220px"
	// "transform": scale(-1, 1);})


	}); 

$(window).on("keydown", function moveTort(event){

	if (event.keyCode==20){
	$("#tort").appendTo("#cent-right")}
	
	// $("#hare").css({"float": "right",
	// "margin": "180px 0 0 0",
	// "height": "200px",
	// "width": "220px"
	// "transform": scale(-1, 1);})


	})











});


// .css({
//     position: 'absolute',
//     left: 169,
//     top: 182

// $(this).rules('add', {
// 		float: left,
// 		margin: 0 0 0 0

// 	});