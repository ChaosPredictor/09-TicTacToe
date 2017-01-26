$(document).ready(function(){
	$(".place").click( function() {
		buttonClicked(this);
		//console.log("clicked");
	});
	
});


function buttonClicked(btn) {
	//console.log(btn.id);
	addObject("x", btn.id);
}

function addObject(obj, cltion) {
	console.log("#"+cltion);
	$("#"+cltion).text("X");
}
