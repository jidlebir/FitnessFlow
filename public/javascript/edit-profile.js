async function newProfileHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="profile-name"]').value;
    const age = document.querySelector('input[name="profile-age"]').value;
    const height = document.querySelector('input[name="profile-height"]').value;
    const weight = document.querySelector('input[name="profile-weight"]').value;
    const favorite_workout = document.querySelector('input[name="profile-workout"]').value;
    const id = 'test'
  
    const response = await fetch(`/api/profile/`, {
      method: 'PUT',
      body: JSON.stringify({
        name,
        age,
        height,
        weight,
        favorite_workout
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard-list/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#edit-profile').addEventListener('submit', newProfileHandler);