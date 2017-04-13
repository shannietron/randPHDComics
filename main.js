var maxID = 1940;
var randID = Math.ceil((Math.random() * maxID));
var randComicID = ("0000" + randID).substr(-4,4);
window.location = 'http://phdcomics.com/comics/archive.php?comicid=' + randComicID;