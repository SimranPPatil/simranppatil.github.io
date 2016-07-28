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
	let i = 9;
	var time = new Date().getHours();
	var evening = array[0];
	var morning = array[1];
	var night = array[2];
	var afternoon = array[3];
	console.log(time);
	if(0<=time && time<5){
		document.getElementById("myImg").style.backgroundImage = 'url('+night+')';
	}
	else if(time>=5 && time<12){
		document.getElementById("myImg").style.backgroundImage = 'url('+morning+')';
	}
	else if(time>=12 && time<=18){
		document.getElementById("myImg").style.backgroundImage = 'url('+afternoon+')';
	}
	else{
		document.getElementById("myImg").style.backgroundImage = 'url('+evening+')';
	}
};


var main = function(){
	var string = "Hi there! Welcome Aboard! I am Simran Patil."
	let i=0; 
	var gallery = [ "evening.jpg", "hotairballoonbg.jpg", "night.jpg", "kitebg.jpg"];
		
	var refreshId = setInterval(function(){
		var sub = substr(string,i);
		$('#type').text(sub);
		cursor(string,i);
		if(i<string.length)
			i++;
		else{
    		clearInterval(refreshId);
		}
	},100);
	imageRotator(gallery);

	
}

$(document).ready(main);
