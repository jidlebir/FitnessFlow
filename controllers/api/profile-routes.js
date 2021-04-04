// const { restore } = require("../models/Post")

const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Profile, User_Workout } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Profile.findAll({
    attributes: [
      'id',
      'name',
      'age',
      'height',
      'weight',
      'favorite_workout',
      'created_at'  
    ],
    include:
    {
      model: User,
      attributes: ['username'],
      through: User_Workout,
      as: 'user_profile'    },
  })
    .then(dbProfileData => res.json(dbProfileData))    
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Profile.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'age',
      'height',
      'weight',
      'favorite_workout',
      'user_id',
      'created_at',              
    ],
    include:
    {
      model: User,
      attributes: ['username'],
      through: User_Workout,
      as: 'user_profile'    },

  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No profile found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => { 
  Profile.create({
    name: req.body.name,
    age: req.body.age,
    height: req.body.height,
    weight: req.body.weight,
    favorite_workout: req.body.favorite_workout,
    user_id: req.session.user_id
  })
    .then(dbProfileData => res.json(dbProfileData))
    
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Profile.update({
    name: req.body.name,
    age: req.body.age,
    height: req.body.height,
    weight: req.body.weight,
    favorite_workout: req.body.favorite_workout,
    
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No profile found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id',(req, res) => {
  console.log('id', req.params.id);
  Profile.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No profile found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;


