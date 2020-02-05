var artistList=['Hayley Williams', 'The Weeknd','Porter Robinson'];
artistList.forEach(function(artists){
    $('.artistList').append("<p>" + "By:"+ artists + "</p>");
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
    $('.links').append("<p>" + links + "</p>");
});