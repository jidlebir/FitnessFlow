$( document ).ready(function() {
    $.ajax({
        url: "/api/workouts",
        
      }).done(function() {
        console.log('data');;

        document.querySelector('#workout_id').addEventListener('onchange', )
      });
});


