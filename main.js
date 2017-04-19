window.addEventListener("load", function(){

var randFrame = document.getElementById("frame");
var randButton = document.getElementById("randButton");

function genRandomUrl(randFrame) {
	var maxID = 1942;
	var randID = Math.ceil((Math.random() * maxID));
	var randComicID = ("0000" + randID).substr(-4,4);
	randFrame.src = 'http://phdcomics.com/comics/archive.php?comicid=' + randComicID;
}

randButton.addEventListener("click",function(){
	genRandomUrl(randFrame);
});
genRandomUrl(randFrame);
});