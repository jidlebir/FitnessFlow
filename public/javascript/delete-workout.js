async function deleteWorkoutHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    // ==============Add Jens Table and Route===========//
    const response = await fetch(`/api/user-workout/${id}`, {
        // =============================================//
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard-list/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#delete-workout-btn').addEventListener('click', deleteWorkoutHandler);
  