var activeUser = 0;

$(document).ready(function(){
	showActiveUser();
	$(".placeEmpty").click( function() {
		buttonClicked($(this).parent());
		switchUser();
		showActiveUser();
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

function showActiveUser(){
	$(".top-box").text("active user: " + activeUser);
}

function buttonClicked(btn) {
	console.log(btn.attr('id'));
	//$(this).removeClass("placeEmpty");
	btn.find(".placeEmpty").remove();
	addObject(userToSign(activeUser), btn.attr('id'));
}

function addObject(obj, cltion) {
	console.log("#"+cltion);
	$("#"+cltion).append(obj);
}
