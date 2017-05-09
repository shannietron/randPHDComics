var phdstr = /archive_print.php\?comicid=..../;

window.addEventListener("load", function(){

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function getMaxID(data){
	found = data.match(phdstr);
}

httpGetAsync("https://crossorigin.me/http://phdcomics.com/", getMaxID);


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