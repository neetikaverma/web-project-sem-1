
// roll over images in the end

"use strict";
$(document).ready(function() {
    $("#image_rollovers img").each(function() {
        var oldURL = $(this).attr("src");      // gets the src attribute
        var newURL = $(this).attr("id");       // gets the id attribute

        // preload rollover image		
        var rolloverImage = new Image();
        rolloverImage.src = newURL;

        // set up event handlers
        $(this).hover(
            function() {
                $(this).attr("src", newURL);  // sets the src attribute
            },
            function() {
                $(this).attr("src", oldURL);   // sets the src attribute
            }
        );  // end hover
    }); // end each
}); // end ready




//slide show in the beginning

//Section 1 ------------  declare an array of images
var myImagesArray = ["images/contact.jpg","images/contact2.jpeg","images/contaa.jpg"];



// Section 2 -------------------------------------------------
//make an automatic slide to display the images
var ImageNumber = 0;
var difference = myImagesArray.length -1;

var delay = 3000; //milliseconds    1sec=1000milliseconds

setInterval("ChangeImages(-1)", delay);
//-1 to show the slide backwards
//1 to show the slide forwards

function ChangeImages(direction)
{//begin function
    
    ImageNumber = ImageNumber + direction;

    if(ImageNumber > difference)
    {//begin inner first if
        ImageNumber = 0;
    }//end inner first if

    if(ImageNumber < 0)
    {//begin inner second if
        ImageNumber = difference;
    }//end inner second if
    //document.slideshow.src = myImagesArray[ImageNumber];
    document.getElementById('slideshow').src = myImagesArray[ImageNumber];

   

}//end function