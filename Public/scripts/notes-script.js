

import 
{ fetchData, setCurrentNote, getCurrentUser, getAllNotes, getCurrentNote } 
from './main.js'



const noteform = document.getElementById("test");
if(noteform) noteform.addEventListener('submit', send);


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
      
    });
  }

 
  ///console.log(getCurrentNote())

 if(getCurrentUser().username){
  const uname = getCurrentUser().username;
 await fetch('http://localhost:3000/notes/getAllNotes',{username: uname}).then(function(response) { 
    // Convert to JSON
    return response.json();
  }).then(function(j) {
    
j.reverse();
 var t =  JSON.stringify(j.note),  ul = document.createElement('ul');
 ul.style.width = "82.5%"
 ul.style.listStyle = "none";
 document.getElementById('results').appendChild(ul);

 j.forEach(item => {
   if(item.username == uname)
   {
  
    let li = document.createElement('li');
      li.style.backgroundColor = "darkslategray"
      
       li.style.width = "100%"
       li.style.height = "60px"
       li.style.paddingTop = "20px"
       li.style.paddingLeft = "10px"
       li.style.marginBottom = "25px"
       li.style.marginTop = "15px"
       li.style.marginLeft = "20px"
       li.style.fontSize = "20px"
       li.style.borderRadius = "10px"
       li.style.textAlign = "center"
       li.style.color = "white"
       li.className = 'noted';
       li.id = 'cnote' ;
       li.value = item.note
       ul.appendChild(li)
    let x = document.createElement('input');
      x.style.visibility = "hidden"
      x.style.backgroundColor = "darkslategray"
      x.style.width = "79.5%"
      x.style.height = "55px"
      x.style.position = "absolute"
      x.style.paddingTop = "20px"
      x.style.paddingLeft = "10px"
      x.style.marginBottom = "25px"
      x.style.marginTop = "-107px"
      x.style.marginLeft = "20px"
      x.style.fontSize = "18px"
      x.style.borderRadius = "10px"
      x.style.textAlign = "center"
      x.style.color = "white"
      x.placeholder = "Write edit here"
      x.className = "show"
      x.id = "xnote" + item.notes_id ;
       // x.value = item.note
        ul.appendChild(x)

    let div = document .createElement('div');
      ul.appendChild(div);
      div.style.transform = "rotate(180deg)"

    let vbtn = document.createElement('button');
      vbtn.style.transform = "rotate(180deg)"
      vbtn.style.top = "20px"
      vbtn.style.position = "relative"
      vbtn.style.marginRight = "15px"
      vbtn.id = "visi" + item.notes_id;
      vbtn.textContent = "Edit"
      div.appendChild(vbtn);
      
    let editbtn = document.createElement('button');
      editbtn.style.visibility = "hidden"
      editbtn.style.transform = "rotate(180deg)"
      editbtn.style.top = "20px"
      editbtn.style.position = "relative"
      editbtn.style.marginRight = "15px"
      editbtn.id = "edit" + item.note;
      editbtn.textContent = "Finish"
      div.appendChild(editbtn);

    let dbtn = document.createElement('button');
      dbtn.style.visibility = "visible"
      dbtn.style.transform = "rotate(180deg)"
      dbtn.style.top = "20px"
      dbtn.style.position = "relative"
      dbtn.style.marginLeft = "-70px"
      dbtn.textContent = "Delete"  
      dbtn.id = "erase" + item.notes_id;
      div.appendChild(dbtn);

      li.id = item.notes_id
      li.innerHTML += item.note;


      document.getElementById("visi" + item.notes_id).addEventListener('click', editVisible);
      document.getElementById("edit" + item.note).addEventListener('click', editNote);

   //form.addEventListener('submit', editNote);
   function editVisible() {
     var visibutton = document.getElementById("visi" + item.notes_id)
     var noteform = document.getElementById("xnote" + item.notes_id);
     var editbutton = document.getElementById("edit" + item.note);
     var deletebutton = document.getElementById("erase" + item.notes_id)
    if(visibutton.textContent == "Edit")
    {
      visibutton.textContent ="Cancel"
    }
    else
    {
      visibutton.textContent ="Edit"
    }
     if(deletebutton.style.visibility == "visible" )
     {
      deletebutton.style.visibility = "hidden"
     }
     else
     {
      deletebutton.style.visibility = "visible"
     }

     if( editbutton.style.visibility == "hidden")
     {
      editbutton.style.visibility = "visible"
     }
     else
     {
      editbutton.style.visibility = "hidden"
     }

    if(noteform.style.visibility == "hidden")
     {
      
      noteform.style.visibility = "visible"
    }
      else
    {
      noteform.style.visibility = "hidden"
    }    
   
  }
    function editNote(e) {
      e.preventDefault();
  
      const tryt =  document.getElementById("xnote" + item.notes_id).value;
        fetchData('/notes/editNote', {noteId: item.notes_id, note: tryt}, "PUT")
        .then((data) => {
          data = {noteId: item.notes_id, note: tryt} 
            setCurrentNote(data);
            
            window.location.href = "Home.html"
          
        })
     
        .catch((error) => {
           const errText = error.message;
           //document.querySelector("#editForm p.error").innerHTML = errText;
           console.log(`Error! ${errText}`)
         });
      
      }


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








