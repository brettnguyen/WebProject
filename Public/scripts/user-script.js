import 
{ fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } 
from './main.js'


const loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {

  
    e.preventDefault();
  
    const name = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    fetchData('/users/login', {username: name, password: pass}, "POST")
    .then((data) => { //cathy123, 12345
      if(!data.message) {
        setCurrentUser(data);
        window.location.href = "Home.html";
      }
      
    })
    .catch((error) => {
      const errText = error.message;
     // document.querySelector("#login-form p.error").innerHTML = errText;
      document.getElementById("password").value = "";
      console.log(`Error! ${errText}`)
    });
  }
 
const regForm = document.getElementById("reg-form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  fetchData('/users/register', {username: name, password: pass}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "Home.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
   // document.querySelector("#reg-form p.error").innerHTML = errText;
    document.getElementById("password").value = "";
    console.log(`Error! ${errText}`)
  });
}


  