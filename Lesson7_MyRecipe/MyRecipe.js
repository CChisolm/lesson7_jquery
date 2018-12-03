/*
Program Name: Recipe Display Application
Author: Cameron Chisolm
Date: 11/29/18
Filename: MyRecipe.js
*/

/* global $ */


//displays the next element after the current target
function display(event) {
    
    
    $(event.currentTarget).next().slideDown("slow");

    
    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
//$("h3").click(display);

//displays and animates the next element after the current target
function display2(event) {
    
    $(event.currentTarget).next().slideDown("slow");
    
 

 
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
    
    $(this).css("background-color", "orange");
    
 }, function(){
     
    $(this).css("background-color", "yellow");
    
});

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);