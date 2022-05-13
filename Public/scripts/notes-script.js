

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
       
      window.location.href = "Home.html";
      
      
     
  })
    .catch((error) => {
     const errText = error.message;
      //document.querySelector("#login-form p.error").innerHTML = errText;
      
    });
  }

 
  console.log(getCurrentNote())

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
    
    let li = document.createElement('li');
    li.style.backgroundColor = "darkslategray"
       li.style.width = "88%"
       li.style.height = "60px"
       li.style.paddingTop = "20px"
       li.style.paddingLeft = "10px"
       li.style.marginBottom = "25px"
       li.style.marginLeft = "12px"
       li.style.fontSize = "18px"
       li.style.borderRadius = "10px"
       li.style.textAlign = "center"
       li.style.color = "white"
      // li.value = item.note;
       li.className = 'noted';
       li.id = 'test';
       //li.appendChild(document.createTextNode(item.note));
    ul.appendChild(li);
    let x = document.createElement('button');
    x.style.marginBottom = "10px"
    x.style.top = "-20px"
    x.style.position = "relative"
    x.style.right = "-700px"
    x.style.marginRight = "100px"
    x.textContent = "Edit"
  
    ul.appendChild(x);

    let y = document.createElement('button');
    y.style.marginBottom = "10px"
    y.style.top = "-20px"
    y.style.position = "relative"
    y.style.left = "500px"
    y.style.marginRight = "10px"
    y.textContent = "Delete"
  
    y.id = "erase" + item.notes_id;
    ul.appendChild(y);

    li.id = item.notes_id

    li.innerHTML += item.note;


   document.getElementById("erase" + item.notes_id).addEventListener('click', deleteNote);

    function deleteNote() {
     
      if(confirm('Are you sure you want to delete this note?')) {
        fetchData('http://localhost:3000/notes/deleteNote', {noteId: item.notes_id}, "DELETE")
        .then((data) => {
          if(!data.message) {
            console.log(data.success)
            window.location.href = "Home.html"
          }
        })
        .catch((error) => {
          const errText = error.message;
          //document.querySelector("#profile div p.error").innerHTML = errText;
          console.log(`Error! ${errText}`)
        })
      }
    }

   }
   
});

  })

}






