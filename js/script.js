var imageList=['https://www.readdork.com/images/article/Artist-Images/H/Hayley%20Williams/Simmer-Single-Art.jpg', 'https://i.ytimg.com/vi/-uj9b9JCIJM/maxresdefault.jpg','https://i.ytimg.com/vi/4SZEDBFPpgw/maxresdefault.jpg'];
imageList.forEach(function(images){
    $('.images').append("<p>" + `<img src=${images}>` + "</p>");
});
var artistList=['Hayley Williams', 'The Weeknd','Porter Robinson'];
artistList.forEach(function(artists){
    $('.artistList').append("<p>" + "By: "+ artists + "</p>");
});
var lengthList=['4:47','4:03','3:38'];
lengthList.forEach(function(lengths){
    $('.lengthList').append("<p>" + lengths + "</p>");
});
var songList=['Simmer Down','Heartless','Get your Wish'];
songList.forEach(function(SongNames){
    $('.songList').append("<p>" + SongNames + "</p>");
});
var linkList=['https://www.youtube.com/watch?v=93MpOKKcjL0','https://www.youtube.com/watch?v=1DpH-icPpl0','https://www.youtube.com/watch?v=4SZEDBFPpgw'];
linkList.forEach(function(links){
    $('.links').append("<p>" + `<a href=${links}>Listen</a>` + "</p>");
});
//var playList = [{image:'https://www.readdork.com/images/article/Artist-Images/H/Hayley%20Williams/Simmer-Single-Art.jpg'},{image:'https://i.ytimg.com/vi/-uj9b9JCIJM/maxresdefault.jpg'},
//{image:'https://i.ytimg.com/vi/4SZEDBFPpgw/maxresdefault.jpg'},{artist:'Hayley Williams'},{artist:'The Weeknd'},{artist:'Porter Robinson'},{length:'4:47'},{length:'4:03'},{length:'3:38'},
//{song:'Simmer Down'},{song:'Heartless'},{song:'Get your Wish'},{link:'https://www.youtube.com/watch?v=93MpOKKcjL0'},{link:'https://www.youtube.com/watch?v=1DpH-icPpl0'},{link:'https://www.youtube.com/watch?v=4SZEDBFPpgw'}];
//playList.forEach(function(play){
    //$('.images').append(play.image);
    //$('.artistList').append(play.artist);
    //$('.lengthList').append(play.length);
    //$('.songList').append(play.song);
    //$('.links').append(play.link);
//});