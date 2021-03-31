// const { restore } = require("../models/Post")

const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Profile } = require('../../models');
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
    include: [
     {
        model: User,
        attributes: [
          'username',
          
        ]
      },
    ]
  })
    .then(dbProfileData => res.json(dbProfileData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      user_id: req.params.user_id
    },
    attributes: [
      'id',
      'name',
      'age',
      'height',
      'weight',
      'favorite_workout',
      'created_at',              
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },   
    ]
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => { 
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

router.put('/:id', withAuth, (req, res) => {
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
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;


// router.get("/", function (req, res) {
//   res.render("profile");
// });
// module.exports = router;
