async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

function idleTimer() {
  let timer;  
  window.onmousemove = resetTimer; 
  window.onmousedown = resetTimer; 
  window.onclick = resetTimer;     
  window.onscroll = resetTimer;    
  window.onkeypress = resetTimer;  

  function onLogout() {     
    logout()
  }

 function resetTimer() {
      clearTimeout(timer);
      timer = setTimeout(logout, 120000);  
      
  }
};
idleTimer();

document.querySelector('#logout').addEventListener('click', logout);
