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
      res.render("workout-list", { workouts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

router.get('/edit/:id', withAuth, (req, res) => {
  Workout.findByPk(req.params.id,{  
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
      if (dbWorkoutData) {
        console.log("****1111", dbWorkoutData);
        const workout = dbWorkoutData.get({ plain: true });
        
        res.render('edit-workout', {
          workout,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;