const nav = document.querySelector('nav');
if(getCurrentUser()) {
  nav.innerHTML = `
     <ul class="navbar">
       <li class="nav"><a id="logout" href="Login.html">Logout</a></li>
       <li class="nav"><a href="Home.html">Home</a></li>
       <li class="nav"><a href="Profile.html">Profile</a></li>
      
     </ul>
  `;
} else {



}
export async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`${route}`, {
    method: methodType, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if(response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}



export function setCurrentUser(user) {
  localStorage.setItem('users', JSON.stringify(user));
}


export function removeCurrentUser() {
  localStorage.removeItem('users')
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('users'));
}

export function setCurrentNote(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
}

export function getCurrentNote() {
  return JSON.parse(localStorage.getItem('notes'));
}


export function getAllNotes(username) {
  return true;
}


export const logoutBtn = document.getElementById("logout");
if(logoutBtn) logoutBtn.addEventListener('click', logout)

export function logout() {
  removeCurrentUser();
  window.location.href = "login.html";
}

export const homeBtn = document.getElementById("homeico");
if(homeBtn) homeBtn.addEventListener('click', Home)

export function Home() {

  window.location.href = "Home.html";
}


export const proBtn = document.getElementById("profileico");
if(proBtn) proBtn.addEventListener('click', Profile)

export function Profile() {

  window.location.href = "Profile.html";
}


