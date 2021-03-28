const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Workout, Exercise} = require('../../models');
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

    //UNDEFINED **THIS IS MY ISSUE**//

    include: [
      {
        model: Exercise,      
        
      },
    ]

    
  })
    // .then(dbWorkoutData => res.json(dbWorkoutData))
    .then(dbWorkoutData => {
      console.log(dbWorkoutData[0])
      //dive into the object and test properties til we see exactly what we want.
      console.log("exercise title:", dbWorkoutData[0].exercises )
      var myExampleObject = {
        id: dbWorkoutData[0].id,
        workout_date: dbWorkoutData[0].workout_date,
        workout_title: dbWorkoutData[0].workout_title,
        exercise_title: dbWorkoutData[0].exercises.dataValues.exercise_title,
      }
      //Generalizeds myExampleObject to return an ARRAY of objects to use in front end.
      var myArray = dbWorkoutData.map((element, i)=>{
        var myObject = {
          id: element.id,
          workout_date: element.workout_date,
          workout_title: element.workout_title,
          exercise_title: element.exercises.dataValues.exercise_title,
        }
        return myObject
      })
      // res.json(dbWorkoutData)
      res.json(myArray)
    })
    
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

router.put('/:id',(req, res) => {
  Workout.update(
    {
      workout_title: req.body.workout_title,
      workout_date: req.body.workout_date
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