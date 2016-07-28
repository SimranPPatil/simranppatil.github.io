function substr(string, idx){
	console.log("here:"+ string.slice(0,idx));
	return string.slice(0,idx);
}
function cursor(string, i){
	var refreshId = setInterval(function(){
		$('#cursor').animate({opacity:0}).animate({opacity:1});
		if(i>string.length)
			clearInterval(refreshId);
	}, 50);
};

function imageRotator(array){
	let i =0;
	setInterval(function(){
		var input = array[i];
		console.log(input);
		document.getElementById("myImg").style.backgroundImage = 'url('+input+')';
		if(i<array.length-1){
			i++;
		}
		else
			i=0; //reset
	}, 2000);
};

function openNav() {
    document.getElementById("Intro").style.height = "100%";
    document.getElementById("myImg").style.height = "0%";
    document.getElementById("introimg2").style.height = "0%";
    typewriter("Hello! Nice to see you again!");
}

function closeNav() {
	$(".content").show();
    document.getElementById("Intro").style.height = "0%";
    document.getElementById("myImg").style.height = "0%";
	setTimeout(function(){
			$('.fly-in').removeClass('hidden');
	},500);
}

function typewriter(string){
	
	let i=0; 
	var refreshId = setInterval(function(){
		var sub = substr(string,i);
		$('#type').text(sub);
		cursor(string,i);
		if(i<string.length)
			i++;
		else{
    		clearInterval(refreshId);
		}
	},120);
	$('#introimg').hide();
	$('#introimg2').hide();
	setTimeout(function(){ $('#introimg').fadeIn("slow"); }, 1500);
	setTimeout(function(){ $('#introimg2').show().css('position', 'absolute'); }, 2500);
}

var main = function(){
	var gallery = [ "UIUC.jpg", "union.jpg", "Altgeld.jpg", "eceb.jpeg"];
	$("#starters").hide();
	imageRotator(gallery);
	typewriter("Hi there! Welcome Aboard! I'm Simran Patil");
	$(".content").hide();
}

$(document).ready(main);
