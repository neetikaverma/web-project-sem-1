
// faq

$(document).ready(function() {
    $("#accordion").accordion(
        { 
            event: "click",
            heightStyle: "content",
            collapsible: true 
        });
});



//declare an array of images
var myImagesArray = ["images/ask.jpg","images/ask1.jpg","images/ask3.jpg","images/ask4.jpeg"];




//make an automatic slide to display the images
var ImageNumber = 0;
var difference = myImagesArray.length -1;

var delay = 2500; //milliseconds    1sec=1000milliseconds

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
    document.getElementById('slideshow').src = myImagesArray[ImageNumber];

   

}//end function






// form validation
window.onload = function() {
    document.getElementById('register').onclick = validateForm;
}



function validateForm(){
    let firstname = document.querySelector('#fname');
    let lastname = document.querySelector('#lname');
    let namepatern = /^[a-zA-Z]{2,20}$/;
    let email = document.querySelector('#mail');
    let reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let phoneno = document.querySelector('#phone');
    let rePhone = /^[6-9]\d{9}$/ ;


    if((firstname.value == "") || (!namepatern.test(firstname.value))){ 
        firstname.nextElementSibling.innerHTML = "Please enter a valid First Name";
        firstname.focus(); 
        return false; 
    }
    

    if((lastname.value == "") || (!namepatern.test(lastname.value))){
        lastname.nextElementSibling.innerHTML = "Please enter a valid Last name";
        lastname.focus(); 
        return false;
    
     } 

    if((email.value == "") || (!reEmail.test(email.value))){
        email.nextElementSibling.innerHTML = "Please enter a valid E-mail";
        email.focus(); 
        return false;
    
    } 

    if((phoneno.value == "") || (!rePhone.test(phoneno.value))) {
        phoneno.nextElementSibling.innerHTML = "Please enter a valid Phone Number";
        phoneno.focus(); 
        return false;
    
    } 
    return true;
}



