/**
 * Custom Methods
 * @author Gopesh
 * 
 */

var textarray = [
    "Fear not what is not real, never was and never will be. What is real, always was and cannot be destroyed",
    "It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection.",
    "No one who does good work will ever come to a bad end, either here or in the world to come",
    "Hell has three hates: lust, anger and greed.",
    "Performing the duty prescribed by (one's own) nature, one incurreth no sin.",
    "Reshape yourself through the power of your will...
 "
];

function RndText() 
{
    var rannum = Math.floor(Math.random() * textarray.length);
    
    $('#gitaquotes p').fadeOut('fast', function() { 
        $(this).text(textarray[rannum]).fadeIn('fast');
    });
}

$(function() {
    // Call the random function when the DOM is ready:
    RndText(); 
});
var inter = setInterval(function() { RndText(); }, 5000);