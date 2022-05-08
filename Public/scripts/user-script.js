import 
{ fetchData } 
from './main.js'


const loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {

  
    e.preventDefault();
  
    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    fetchData('/users/login', {username: name, password: password}, "POST")
    .then((data) => { //cathy123, 12345
      if(!data.message) {
     
        window.location.href = "Home.html";
      }
    })
    .catch((error) => {
      const errText = error.message;
      console.log(`Error! ${errText}`)
    });
  }
 
  