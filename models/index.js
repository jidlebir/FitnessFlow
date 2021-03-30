// import all models
const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');
const Downvote = require('./Downvote');
const Comment = require('./Comment');
const Workout = require('./Workout');
const Exercise = require('./Exercise');


// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
  through: Downvote,
  as: 'down_voted_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: Downvote,
  as: 'down_voted_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});
Downvote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Downvote.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});
User.hasMany(Downvote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

Post.hasMany(Downvote, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

//WORK OUT RELATIONSHIP

User.hasMany(Workout, {
  foreignKey: 'user_id'
});

Workout.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Workout.hasMany(Exercise, {
  foreignKey: 'workout_id'
});

Exercise.belongsTo(Workout, {
  foreignKey: 'workout_id',
  onDelete: 'SET NULL'
});



module.exports = { User, Post, Vote, Downvote, Comment, Workout, Exercise };
