const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
const dashboardListRoutes = require("./dashboard-list-routes.js");
const workoutListRoutes = require("./workout-list-routes.js");
const profileRoutes = require("./profile-routes.js");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard-list", dashboardListRoutes);
router.use("/workout-list", workoutListRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
