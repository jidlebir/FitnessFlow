const router = require('express').Router();
const sequelize = require('../config/connection');
const { Workout, Exercise, User} = require('../models');
const withAuth = require('../utils/auth');


// GET ALL //
router.get('/', withAuth, (req, res) => {
  console.log('========workout========');

  Workout.findAll({
    where: {
      user_id: req.session.user_id
    },
  
    attributes: [
      'id',     
      'workout_title',
      "user_id"      
    ],
     include: [
      {
        model: Exercise,
        attributes: [
          "exercise_title",
          "id"
        ]        
      },
      {
        model: User,
        attributes: [ 
          'id', 
          'username'
        ]        
      }
     ]    
  })  
    .then(dbWorkoutData => {
      console.log('+=+=+=test db+=+=+=', dbWorkoutData);
      const workouts = dbWorkoutData.map(workout => workout.get({ plain: true }));
      res.render('workout-list', { workouts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

module.exports = router;