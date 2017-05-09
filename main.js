var phdstr = /archive_print.php\?comicid=(....)/;

window.addEventListener("load", function(){
	
	var maxID = 1;
	var theURL = "https://crossorigin.me/http://phdcomics.com/";
	
	var randFrame = document.getElementById("frame");
	var randButton = document.getElementById("randButton");
	
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
			foundMaxID = xmlHttp.responseText.match(phdstr);
			maxID = foundMaxID[1];
		}
	}
	xmlHttp.open("GET", theURL, true); // true for asynchronous 
	xmlHttp.send(null);

	randButton.addEventListener("click",function(){
		var randID = Math.ceil((Math.random() * maxID));
		var randComicID = ("0000" + randID).substr(-4,4);
		randFrame.src = 'http://phdcomics.com/comics/archive.php?comicid=' + randComicID;
	});
	
	randFrame.src = 'http://phdcomics.com';
});
