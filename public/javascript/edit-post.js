async function editFormHandler(event) {
  event.preventDefault();

  const WorkoutTitle = document.querySelector('input[name="workout-title"]').value.trim();
  const date = document.querySelector('textarea[name="date-content"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

//  ==================add Jens table and Routes==========//
  const response = await fetch(`/api/user-workout/${id}`, {
    // ===================================================//
    method: 'PUT',
    body: JSON.stringify({
      title, //workout-title
      content // date
         
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

document.querySelector('#edit-workout-form').addEventListener('submit', editWorkoutHandler);
