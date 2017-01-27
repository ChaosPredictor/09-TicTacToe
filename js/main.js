var activeUser = 0;

$(document).ready(function(){
	showActiveUser();
	$(".placeEmpty").click( function() {
		showActiveUser();
		buttonClicked($(this).parent());
		switchUser();
		//console.log("clicked");
	});
	
});


function switchUser(){
//	console.log("switch user");
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

function showWinUser(user) {
	$(".top-box").text("User " + user + " WIN");
	startNewGame();
}

function startNewGame() {
	console.log("new game");
	restartNewGame()
}

function restartNewGame() {
	list = $("td").removeClass();;
	list.empty();
	list.addClass("place");
	list.append('<button class="placeEmpty"></button>');
	$(".placeEmpty").click( function() {
		showActiveUser();
		buttonClicked($(this).parent());
		switchUser();
		//console.log("clicked");
	});
}

function buttonClicked(td) {
//	console.log(td.attr('id'));
	//$(this).removeClass("placeEmpty");
	td.find(".placeEmpty").remove();
	td.addClass("place" + activeUser);
	addObject(userToSign(activeUser), td.attr('id'));
	if (checkIfWin(activeUser)) {
		console.log("win");	
		showWinUser(activeUser);
	};
}

function addObject(obj, cltion) {
//	console.log("#"+cltion);
	$("#"+cltion).append(obj);
}

function checkIfWin(user){
	for(var i = 1; i <= 3; i++){
		if($("#1"+i).hasClass("place"+user) && $("#2"+i).hasClass("place"+user) && $("#3"+i).hasClass("place"+user)) {
			return true;
			//console.log("win");
		}
	}
	for(var i = 1; i <= 3; i++){
		if($("#"+i+"1").hasClass("place"+user) && $("#"+i+"2").hasClass("place"+user) && $("#"+i+"3").hasClass("place"+user)) {
			return true;
			//console.log("win");
		}
	}
	if ($("#13").hasClass("place"+user) && $("#22").hasClass("place"+user) && $("#31").hasClass("place"+user)) {
		return true;
		//console.log("win");
	}
	if ($("#11").hasClass("place"+user) && $("#22").hasClass("place"+user) && $("#33").hasClass("place"+user)) {
		return true;
		//console.log("win");
	}
	return false;
}
