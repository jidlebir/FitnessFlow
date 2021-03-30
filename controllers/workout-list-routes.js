const router = require('express').Router();
const sequelize = require('../config/connection');
const { Workout, Exercise} = require('../models');
//const withAuth = require('../../utils/auth');


// GET ALL //
router.get('/', (req, res) => {
  console.log('========workout========');

  Workout.findAll({
  
    attributes: [
      'id',
      'workout_date',
      'workout_title',      
    ],
     include: [
      {
        model: Exercise,
        attributes: [
          "exercise_title",
          "id"
        ]        
      },
     ]    
  })  
    .then(dbWorkoutData => {
      console.log('test db', dbWorkoutData[0]);
      const workouts = dbWorkoutData.map(workout => workout.get({ plain: true }));
      res.render('workout-list', { workouts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

module.exports = router;