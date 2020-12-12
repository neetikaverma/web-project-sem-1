let userPwd = document.getElementById('password');
let userNamee = document.getElementById('user');

loginStore=()=>
{   
    let username = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    let users= [{username:"abc" ,password:"passworddd"},{username:"abffc" ,password:"javascript"}] ;
    localStorage.setItem('userList', users);
    localStorage.setItem('userList', JSON.stringify(users));
    localStorage.setItem('Users',JSON.stringify(users));
    users=JSON.parse((localStorage.getItem("Users")));
    users.push({name: username, password: password});
    localStorage.setItem('AllUsers',JSON.stringify(users));
}

function deleteItems() {
    localStorage.clear();
}

login=()=>{
        let pwdRegex = /^[A-Za-z]\w{7,14}$/;
        let userRegex = /^[a-zA-Z\-]+$/;
        if ((!userRegex.test(userNamee.value)) || (userNamee=='')) {
            userNamee.style.backgroundColor = "rgb(241, 160, 160)";
            userNamee.focus;
            return false;
        }
		else if ((!pwdRegex.test(userPwd.value)) || (userPwd=='')) {
            userPwd.style.backgroundColor = "rgb(241, 160, 160)";
            userPwd.focus;
            return false;
        }
		else if((userRegex.test(userNamee.value)) &&(pwdRegex.test(userPwd.value)))
		{
           window.location = "post.html";
		}
    }		
    
    showHide=()=> {
        if(userPwd.type == "password") {
            userPwd.type = "text";
        }
        else {
            userPwd.type = "password";
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

    validatpassword=()=> {
        let password = userPwd.value;
        let pwdRegex = /^[A-Za-z]\w{7,14}$/;
    
        if(pwdRegex.test(password)) {
            userPwd.style.backgroundColor = "#ddffdd";
        }
        else {
            userPwd.style.backgroundColor = "#ffffcc";
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