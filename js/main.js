var activeUser = 0;

$(document).ready(function(){
	showActiveUser();
	showResults();
	$(".placeEmpty").click( function() {
		showActiveUser();
		console.log($(this));
		buttonClicked($(this).parent());
		switchUser();
		//console.log("clicked");
	});
	
});


function switchUser(){
//	console.log("switch user");
	if (activeUser == 0){
		activeUser = 1;
		computeUser();
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
}

function showResults() {
	$(".bottom-box").text("User 1:");
}

function startNewGame() {
	console.log("new game");
	alert("end of game");
	showResults();
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
		startNewGame();
	} else if (allStepsDone()) {
		console.log("no one win");
		startNewGame();
	}
}

function allStepsDone(){
	if ($(".placeEmpty").length == 0) {
		return true;
	}
	return false;
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

function computeUser(){
	atackStep();
	switchUser();
}

function randomStep(){
	var list = $(".placeEmpty");
	//console.log(list);
	var rnd =  Math.floor(Math.random() * list.length); 
	buttonClicked($(list[rnd]).parent());
	//console.log($(list[rnd]));
}

function defenseStep(){
	var list = $(".placeEmpty");
	var td = null;
	//console.log(list);
	for(var i = 0; i < list.length; i++){
		$(list[i]).parent().addClass("place0");
		if (checkIfWin(0)) {
			td = $(list[i]).parent();	
		}
		$(list[i]).parent().removeClass("place0");
		if (td != null) {
			console.log("def Step!");
			buttonClicked(td);
			return true;
		}
	}
	console.log("not def Step");
	randomStep();
	return false;
	//console.log($(list[rnd]));
}

function atackStep(){
	var list = $(".placeEmpty");
	var td = null;
	for(var i = 0; i < list.length; i++){
		$(list[i]).parent().addClass("place1");
		if (checkIfWin(1)) {
			td = $(list[i]).parent();	
		}
		$(list[i]).parent().removeClass("place1");
		if (td != null) {
			console.log("atack Step!");
			buttonClicked(td);
			return true;
		}
	}
	console.log("not atack step");
	defenseStep();
	return false;
}

