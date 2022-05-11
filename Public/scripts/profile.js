import 
{ getCurrentUser, setCurrentUser, removeCurrentUser, logout, fetchData } 
from './main.js'

let user = getCurrentUser();

if(!user) window.location.href = "login.html";

let profile = document.getElementById("profile");
profile.innerHTML = `
  <h2>Welcome back  ${user.username}! </h2>
  <div>
    <p class="error"></p>
    <button class="btn" id="delete">Delete Account</button>
  </div>
`;

document.getElementById("delete").addEventListener('click', deleteAccount);

function deleteAccount() {
  if(confirm('Are you sure you want to delete your account???')) {
    fetchData('/users/delete', {userId: user.user_id}, "DELETE")
    .then((data) => {
      if(!data.message) {
        console.log(data.success)
        logout();
        window.location.href = "Register.html"
      }
    })
    .catch((error) => {
      const errText = error.message;
     // document.querySelector("#profile div p.error").innerHTML = errText;
      console.log(`Error! ${errText}`)
    })
  }
}