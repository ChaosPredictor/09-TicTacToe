var activeUser = 0;

$(document).ready(function(){
	$(".place").click( function() {
		buttonClicked(this);
		switchUser();
		//console.log("clicked");
	});
	
});


function switchUser(){
	console.log("switch user");
	if (activeUser == 0){
		activeUser = 1;
	} else {
		activeUser = 0;
	}
}

function userToSign(user) {
	if (activeUser == 0){
		return "X";
	} else {
		return "O";
	}
}

function buttonClicked(btn) {
	//console.log(btn.id);
	addObject(userToSign(activeUser), btn.id);
}

function addObject(obj, cltion) {
	console.log("#"+cltion);
	$("#"+cltion).text(obj);
}
