let email = document.getElementById('email');
let userPwd = document.getElementById('password');
store=()=> {
    localStorage.setItem('email', email.value);
    localStorage.setItem('pwd', userPwd.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('pwd', userPwd.value);
}

signUp=()=>{
    let userRePwd = document.getElementById('repassword');
    let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    password1 = form.password1.value; 
    password2 = form.password2.value;
    if (!emailRegex.test(email.value)) {
        email.style.backgroundColor = "rgb(241, 160, 160)";
        email.focus;
        return false;
    }
    else if (checkPassword()== false) {
        userPwd.style.backgroundColor = "rgb(241, 160, 160)";
        userRePwd.style.backgroundColor = "rgb(241, 160, 160)";
        userRePwd.focus;
        userPwd.focus;
    }
    else 
    {
       window.location = "post.html";
    }
}		

validateEmail=()=> {
    let emailTextBox = document.getElementById("email");
    let email = emailTextBox.value;
    let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(emailRegex.test(email)) {
        emailTextBox.style.backgroundColor = "#ddffdd";
    }
    else {
        emailTextBox.style.backgroundColor = "#ffffcc";
    }
}

checkPassword=()=> { 
    password1 = form.password1.value; 
    password2 = form.password2.value; 

    if (password1 == '') {
      return false;
    }
    else if (password2 == '') {
      return false;
    }
    else if (password1 != password2) { 
      return false; 
    }   
  }



showHide=() =>{
    const userPass = document.getElementById("password");
    if(userPass.type == "password") {
        userPass.type = "text";
    }
    else {
        userPass.type = "password";
    }
}

facebookLink=()=>{
    window.location.href = "http://facebook.com/";
    return true;
}

googleLink=()=>{
    window.location.href = "http://google.com/";
    return true;
}