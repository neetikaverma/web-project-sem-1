window.onload = function () {
  document.getElementById('apply').onclick = validForm;
}

/*----------------------------------------------------
  Validate form
 -----------------------------------------------------*/
function validForm() {



  let name = document.forms["myform"]["field1"].value;

  let email = document.forms["myform"]["field2"].value;

  let contact = document.forms["myform"]["field3"].value;

  let fromlocation = document.forms["myform"]["field4"].value;

  let tolocation = document.forms["myform"]["field5"].value;

  let address = document.forms["myform"]["field7"].value;

  let dropdown = document.getElementById("dropdown");

  let ddlText = dropdown.options[dropdown.selectedIndex].value; 





  //  Validate the dropdown list

  

  if (ddlText == 0) {

    alert("Please select a type!");

    return false;

  }



  if (name == "") {

    alert("Please enter your name!");

    return false;

  }



  else if (email == "") {

    alert("Please enter your email id!");

    return false;

  }



  else if (contact == "") {

    alert("Please enter the contact no!");

    return false;

  }

  else if (fromlocation == "") {

    alert("Please enter the 'From' location!");

    return false;

  }



  else if (tolocation == "") {

    alert("Please enter the 'To' location!");

    return false;

  }



  else if (address == "") {

    alert("Please enter the address!");

    return false;

  }



  return true;

}

/*----------------------------------------------------------
Validate the contact no
-----------------------------------------------------------*/

function contactValid() {
  var phone = myform.field3.value;
  var phonepattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phone.match(phonepattern)) {
    return true;
  }
  else {
    alert("Contact no must be 999-999-9999!");
    return false;
  }

}

/*-----------------------------------------------------------
Validate the email id
-------------------------------------------------------------*/

function emailValid(mail) {
  var email = myform.field2.value;
  var emailpattern = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;;
  if (email.match(emailpattern)) {
    myform.desc.focus();
    return true;
  }
  else {
    alert("Invalid email address!");
    return false;
  }
}





