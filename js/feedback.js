let userNamee = document.getElementById('user');
let emailId = document.getElementById('email');

store=()=> {
    localStorage.setItem('emailID', email.value);
    localStorage.setItem('userNamee', userNamee.value);
    sessionStorage.setItem('emailID', email.value);
    sessionStorage.setItem('userNamee', userNamee.value);
}

checkSubmit=()=>{
    let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let userRegex = /^[a-zA-Z\-]+$/;
    if ((!userRegex.test(userNamee.value)) || (userNamee=='')) {
        userNamee.style.backgroundColor = "rgb(241, 160, 160)";
        userNamee.focus;
        return false;
    }
    else if ((!emailRegex.test(emailId.value)) || (emailId=='')) {
        emailId.style.backgroundColor = "rgb(241, 160, 160)";
        emailId.focus;
        return false;
    }
    else if((userRegex.test(userNamee.value)) && (emailRegex.test(emailId.value)))
    {
       window.location.href = "post.html";
       return true;
    }
}

validatename=()=> {
    let userName = userNamee.value;
    let userRegex = /^[a-zA-Z\-]+$/;

    if(userRegex.test(userName)) {
        userNamee.style.backgroundColor = "#ddffdd";
    }
    else {
        userNamee.style.backgroundColor = "#ffffcc";
    }
}

validateEmail=()=> {
    let emailTextBox = document.getElementById("email");
    let email = emailTextBox.value;
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailRegex.test(email)) {
        emailTextBox.style.backgroundColor = "#ddffdd";
    }
    else {
        emailTextBox.style.backgroundColor = "#ffffcc";
    }
}