const { Model, DataTypes } = require('sequelize');
const { User } = require('.');
const sequelize = require('../config/connection');

class User_Workout extends Model {}

User_Workout.id(
  [
    {
      "id": 1,
      "workout_date": "02/02/2021",
      "workout_title": "abs",
      "exercises": [
        {
          "exercise_title": "Crunches",
          "id": 11
        },
        {
          "exercise_title": "Situps",
          "id": 12
        },
        {
          "exercise_title": "Bicycles",
          "id": 13
        },
        {
          "exercise_title": "Planks",
          "id": 14
        },
        {
          "exercise_title": "Side Planks",
          "id": 15
        },
        {
          "exercise_title": "Leg Lifts",
          "id": 16
        },
        {
          "exercise_title": "Russian Twists",
          "id": 17
        },
        {
          "exercise_title": "Flutter Kicks",
          "id": 18
        },
        {
          "exercise_title": "Plank Hip Dips",
          "id": 19
        }
      ]
    },
    {
      "id": 2,
      "workout_date": "02/02/2021",
      "workout_title": "back",
      "exercises": [
        {
          "exercise_title": "Lat Pull Down",
          "id": 21
        },
        {
          "exercise_title": "Barbell Rows",
          "id": 22
        },
        {
          "exercise_title": "Dumbell Rows",
          "id": 23
        },
        {
          "exercise_title": "Dumbell Flys",
          "id": 24
        },
        {
          "exercise_title": "Deadlift",
          "id": 25
        },
        {
          "exercise_title": "One Arm Dumbell Rows",
          "id": 26
        },
        {
          "exercise_title": "RDL's",
          "id": 26
        },
        {
          "exercise_title": "Barbell Front Extension ",
          "id": 27
        },
        {
          "exercise_title": "Pull Up's",
          "id": 28
        },
        {
          "exercise_title": "Low Cable Row",
          "id": 29
        }
      ]
    },
    {
      "id": 3,
      "workout_date": "03/03/2021",
      "workout_title": "shoulders",
      "exercises": [
        {
          "exercise_title": "Shoulder Press",
          "id": 30
        },
        {
          "exercise_title": "Shoulder Shrugs",
          "id": 31
        },
        {
          "exercise_title": "Standing Dumbell Flys",
          "id": 32
        },
        {
          "exercise_title": "Barbell Overhead Press",
          "id": 33
        },
        {
          "exercise_title": "Clean and Press",
          "id": 34
        },
        {
          "exercise_title": "Band Lateral Raise",
          "id": 35
        },
        {
          "exercise_title": "Suspension Pike Pushups",
          "id": 36
        },
        {
          "exercise_title": "Upright Dumbell Rows",
          "id": 37
        },
        {
          "exercise_title": "Seated Arnold Dumbell Press",
          "id": 38
        },
        {
          "exercise_title": "Arm Circles",
          "id": 39
        }
      ]
    },
    {
      "id": 4,
      "workout_date": "02/02/2021",
      "workout_title": "Cardio",
      "exercises": [
        {
          "exercise_title": "1.5 Mile Run",
          "id": 40
        },
        {
          "exercise_title": "10 Min StairMaster",
          "id": 41
        },
        {
          "exercise_title": "Jumprope",
          "id": 42
        },
        {
          "exercise_title": "Side Shuffles",
          "id": 43
        },
        {
          "exercise_title": "Burpees",
          "id": 44
        },
        {
          "exercise_title": "Squat Jumps",
          "id": 45
        },
        {
          "exercise_title": "Jump Split Lunges",
          "id": 46
        },
        {
          "exercise_title": "Mountain Climbers",
          "id": 47
        },
        {
          "exercise_title": "High Knees",
          "id": 48
        },
        {
          "exercise_title": "Skater Jumps",
          "id": 49
        }
      ]
    },
    {
      "id": 5,
      "workout_date": "02/02/2021",
      "workout_title": "Chest",
      "exercises": [
        {
          "exercise_title": "Bench",
          "id": 50
        },
        {
          "exercise_title": "Dumbell Bench",
          "id": 51
        },
        {
          "exercise_title": "Flys",
          "id": 52
        },
        {
          "exercise_title": "Cable Flys",
          "id": 53
        },
        {
          "exercise_title": "Incline Benchpress",
          "id": 54
        },
        {
          "exercise_title": "Decline Benchpress",
          "id": 55
        },
        {
          "exercise_title": "Pushups",
          "id": 56
        },
        {
          "exercise_title": "Decline Pushups",
          "id": 57
        },
        {
          "exercise_title": "Dips for Chest",
          "id": 58
        },
        {
          "exercise_title": "Incline Bench Cable Fly",
          "id": 59
        }
      ]
    }
  ]
)

await User.drop();
console.log("User_Workout table dropped!");

await sequelize.drop();
console.log("All tables dropped!");

module.exports = Workout;