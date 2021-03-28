const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Workout} = require('../../models');
//const withAuth = require('../../utils/auth');

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

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No workout found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;