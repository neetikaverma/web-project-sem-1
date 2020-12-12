window.onload = function() {
    document.getElementById('apply').onclick = validateForm;
}

function validateForm() { 
    let firstname = document.getElementById('fname'); 
    let lastname = document.getElementById('lname'); 
    let mail = document.getElementById('email'); 
    let phonenum = document.getElementById('phone');
    let homeaddress = document.getElementById('address');
    let department = document.getElementById('dpmt');  
    let prevcomp = document.getElementById('lastComp'); 
    let salreq = document.getElementById('slryReq');

  
    if (firstname.value == "") { 
        window.alert("Please enter your First Name."); 
        firstname.focus(); 
        return false; 
    } 
  
    else if (lastname.value == "" ) { 
        window.alert("Please enter your Last Name."); 
        lastname.focus(); 
        return false; 
    }
    
    else if (firstname.value.length < 2 && lastname.value.length < 2) {
        window.alert("Please enter your Full Name");
        return false;
    }
  
    else if (mail.value == "" || mail.value.length < 5) { 
        window.alert( "Please enter a valid e-mail address."); 
        mail.focus(); 
        return false; 
    }   
  
    else if (phonenum.value == "" || phonenum.value.length < 4) { 
        window.alert( "Please enter your phone number."); 
        phonenum.focus(); 
        return false; 
    }
    
    else if (homeaddress.value == "" || homeaddress.value.length < 3) { 
        window.alert("Please enter your home address"); 
        address.focus(); 
        return false; 
    }

    else if (department.selectedIndex < 1) {
        window.alert("Please select a department");
        department.focus();
        return false;
    }
  
    else if (prevcomp.value == "" || prevcomp.value.length < 2) { 
        window.alert("Please enter the name of your previous employer"); 
        prevcomp.focus(); 
        return false; 
    } 
  
    else if (salreq.value == "" || salreq.value < 0 || salreq.value > 99999999) { 
        alert("Please enter your desired Salary."); 
        salreq.focus(); 
        return false; 
    }
  
    return true; 
    }