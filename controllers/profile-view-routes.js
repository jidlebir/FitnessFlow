const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote, Downvote, Workout, Exercise, Profile } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Profile.findAll({
    where: {
      user_id: req.session.user_id
    },
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
        attributes: ['username']
      },
      
    ]
  })
    .then(dbProfileData => {
      console.log('====Profile===', dbProfileData);
      const profile = dbProfileData.map(profile => profile.get({ plain: true }));
      res.render('profile', { profile, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
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
        attributes: ['username']
      },    
    ]
  })
    .then(dbProfileData => {
      if (dbProfileData) {
        console.log("****", dbProfileData);
        const profile = dbProfileData.get({ plain: true });
        
        res.render('profile', {
          profile,
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
