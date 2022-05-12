

import 
{ fetchData, setCurrentNote, getCurrentUser, getAllNotes, getCurrentNote } 
from './main.js'

let user = getCurrentUser();

let profile = document.getElementById("profile");
profile.innerHTML = `
  <h2>Welcome back  ${user.username}! </h2>

`;


const noteform = document.getElementById("test");
if(noteform) noteform.addEventListener('submit', send);
//document.getElementById("btn").addEventListener('submit', send);

function send(e) {

  
    e.preventDefault();
  
    const demo = document.getElementById("note").value;
    const uname = getCurrentUser().username;
    
    fetchData('notes/createNote', {note: demo, username:uname}, "POST")
   .then((data) => {
      data = {note: demo, username:uname} 
       setCurrentNote(data);
       //window.location.href = "Home.html";
       
       let li = document.createElement('li');
       li.style.backgroundColor = "darkslategray"
       li.style.width = "83%"
       li.style.height = "60px"
       li.style.paddingTop = "20px"
       li.style.paddingLeft = "10px"
       li.style.marginBottom = "28px"
       li.style.marginLeft = "50px"
       li.style.fontSize = "18px"
       li.style.borderRadius = "10px"
       li.style.textAlign = "center"
       li.style.color = "white"
       li.value = demo;
       li.className = 'note';
       li.appendChild(document.createTextNode(demo));
       notes.appendChild(li);
        document.getElementById("note").value = "";
     
  })
    .catch((error) => {
     const errText = error.message;
      //document.querySelector("#login-form p.error").innerHTML = errText;
      
    });
  }

 


 if(getCurrentUser().username){
  const uname = getCurrentUser().username;
 await fetch('http://localhost:3000/notes/getAllNotes',{username: uname}).then(function(response) { 
    // Convert to JSON
    return response.json();
  }).then(function(j) {
    

 var t =  JSON.stringify(j.note),  ul = document.createElement('ul');
 document.getElementById('results').appendChild(ul);

 j.forEach(item => {
   if(item.username == uname)
   {
    let li = document.createElement('li');
    ul.appendChild(li);

   li.innerHTML += item.note;
   }
});
  })
}





