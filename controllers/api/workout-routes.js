const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Workout, Exercise, User} = require('../../models');
//const withAuth = require('../../utils/auth');


// GET ALL //
router.get('/', (req, res) => {
  console.log('========workout========');
  Workout.findAll({
        attributes: [
      'id',      
      'workout_title',      
    ], 
    include: [
      {
        model: Exercise,
        attributes: ["exercise_title","id"]        
      },
      {
        model: User,
        attributes: [ 'id', 'username']        
      }
     ]      
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
      'workout_title',      
    ],
    where: {
      id:req.params.id
    },
    include: [
      {
        model: Exercise,
        attributes: ["exercise_title","id"]        
      },
      {
        model: User,
        attributes: [ 'id', 'username']        
      }
     ]  
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
    user_id: req.body.user_id,
    
  })
    .then(dbWorkoutData => res.json(dbWorkoutData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id',(req, res) => {
  Workout.update(
    {
      workout_title: req.body.workout_title,      
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbWorkoutData) {
        res.status(404).json({ message: 'No Workout found with this id' });
        return;
      }
      res.json(dbWorkoutData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// DELETE WORKOUT //
router.delete('/:id',(req, res) => {
  console.log("===============workout DELETE=========="); 
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