const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Workout} = require('../../models');
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
  })
    .then(dbWorkoutData => res.json(dbWorkoutData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET ONE //
router.get('/:id', (req, res) => {
  console.log('========workout========');

  Workout.findOne({
    attributes: [
      'id',
      'workout_date',
      'workout_title',      
    ],
  })
    .then(dbWorkoutData => res.json(dbWorkoutData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// CREATE WORKOUT //
router.post('/', (req, res) => {
  console.log("===============workout post==========");  
  Workout.create({
    workout_title: req.body.workout_title,
    workout_date: req.body.workout_date,
    user_id: req.body.user_id,
    
  })
    .then(dbWorkoutData => res.json(dbWorkoutData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});


// DELETE WORKOUT //
router.delete('/:id',(req, res) => {
  Workout.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbWorkoutData => {
      if (!dbWorkoutData) {
        res.status(404).json({ message: 'No workout found with this id!' });
        return;
      }
      res.json(dbWorkoutData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;