

var i = 0;
var path = new Array();
path[0] = "images/hospital.jpg";
path[1] = "images/hospital1.jpg";
path[2] = "images/hospital2.jpg";
path[3] = "images/hospital3.jpg";

function swapimage(){
	document.getElementById("slide").src= path[i];
	if(i < path.length -1) i++;
	else i = 0;
	setTimeout("swapimage()", 3000);
}


$(document).ready(function(){
	$(".topbar5").click(function(){
		$(".have-some").slideToggle(1000);
	});
});

$(document).ready(function(){
	$(".click").click(function(){
		$(".water").slideToggle(1000);
	});
});


$(document).ready(function(){
	$(".toggle-btn").click(function(){
		$(".toggle-btn i").toggleClass("fas fa-times");
		$("nav ul").toggleClass("active");
	});
});