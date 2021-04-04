// import all models
const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');
const Downvote = require('./Downvote');
const Comment = require('./Comment');
const Workout = require('./Workout');
const Exercise = require('./Exercise');
const Profile = require('./Profile');
const User_Workout = require('./User_Workout');


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
  through: User_Workout,
  as: 'user_Workout_posts',
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
  through: User_Workout,
  as: 'post_workout_User',
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

// -------------------//

User.hasMany(User_Workout,{
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
}),
User_Workout.belongsTo(User,{
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
}),

User.belongsToMany(Workout, {
  through: User_Workout,
  as: 'user_Wo',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Exercise, {
  through: User_Workout,
  as: 'user_exercise',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});
Workout.belongsToMany(Exercise, {
  through: User_Workout,
  as: 'workout_exercise',
  foreignKey: 'workout_id',
  onDelete: 'SET NULL'
});

Exercise.belongsToMany(Workout, {
  through: User_Workout,
  as: 'exercise',
  foreignKey: 'exercise_id',
  onDelete: 'SET NULL'
});

User_Workout.belongsTo(User, {
  foreignKey:'user_id',
  onDelete: 'SET NULL'
});
User_Workout.belongsTo(Workout, {
  foreignKey:'workout_id',
  onDelete: 'SET NULL'
});
User_Workout.belongsTo(Exercise, {
  foreignKey:'exercise_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(Workout, {
  through: User_Workout,
  as: 'post_workout',
  foreignKey:'user_id',
  onDelete: 'SET NULL'
});
Post.belongsToMany(Exercise, {
  through: User_Workout,
  as: 'post_exercise',
  foreignKey:'user_id',
  onDelete: 'SET NULL'
});

User.hasOne(Profile, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
})

Profile.belongsToMany(User, {
  through: User_Workout,
  as: 'user_profile',
  foreignKey:'profile_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(Profile, {
  through: User_Workout,
  as: 'post_profile',
  foreignKey: 'user_id',
})










module.exports = { 
  User,
  Post,
  Vote, 
  Downvote, 
  Comment, 
  Workout, 
  Exercise, 
  Profile, 
  User_Workout 
};
