  
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const workOutRoutes = require('./workout-routes');
const profileRoutes = require("./profile-routes");


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/workouts', workOutRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
