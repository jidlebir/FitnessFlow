async function newWorkoutHandler(event) {
    event.preventDefault();
  
    const workoutTitle = document.querySelector('input[name="workout-title"]').value;
    const date = document.querySelector('textarea[name="date-content"]').value;
  

    // ==============Add Jens Table and Routes=========//
    const response = await fetch(`/api/user-workout`, {
      //============================================
      method: 'POST',
      body: JSON.stringify({
        // =============Add Jens table content=========//
        title, //workoutTitle
        content // date
        //============================================//
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
  
  // ===========add front end button ID============================//
  document.querySelector('#new-Workout').addEventListener('submit', newWorkoutHandler);


