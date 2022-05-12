

import 
{ fetchData, setCurrentNote, getCurrentUser, getAllNotes, getCurrentNote } 
from './main.js'



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
       li.style.width = "88%"
       li.style.height = "60px"
       li.style.paddingTop = "20px"
       li.style.paddingLeft = "10px"
       li.style.marginBottom = "28px"
       li.style.marginLeft = "12px"
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
    
j.reverse();
 var t =  JSON.stringify(j.note),  ul = document.createElement('ul');
 ul.style.listStyle = "none";
 document.getElementById('results').appendChild(ul);

 j.forEach(item => {
   if(item.username == uname)
   {
    let x = document.createElement('button');
    ul.appendChild(x);
    let li = document.createElement('li');
    li.style.backgroundColor = "darkslategray"
       li.style.width = "88%"
       li.style.height = "60px"
       li.style.paddingTop = "20px"
       li.style.paddingLeft = "10px"
       li.style.marginBottom = "28px"
       li.style.marginLeft = "12px"
       li.style.fontSize = "18px"
       li.style.borderRadius = "10px"
       li.style.textAlign = "center"
       li.style.color = "white"
      // li.value = item.note;
       li.className = 'note';
       //li.appendChild(document.createTextNode(item.note));
    ul.appendChild(li);

   li.innerHTML += item.note;
   }
   
});

  })
}





