const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote, Downvote, Workout, Exercise } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'content',
      'title',
      'created_at', 
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count'],
      [sequelize.literal('(SELECT COUNT(*) FROM downvote WHERE post.id = downvote.post_id)'), 'down_vote_count']     
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      },
      
    ]
  })
    .then(dbPostData => {
      console.log('====dash-list==', dbPostData);
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard-list', { posts, loggedIn: true });
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
      'content',
      'title',
      'created_at', 
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count'],
      [sequelize.literal('(SELECT COUNT(*) FROM downvote WHERE post.id = downvote.post_id)'), 'down_vote_count']   
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      },   
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        console.log("****", dbPostData);
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
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




