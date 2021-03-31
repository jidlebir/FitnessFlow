const { Model, DataTypes } = require('sequelize');
const { User } = require('.');
const sequelize = require('../config/connection');

class User_Workout extends Model {}

User_Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    workout_date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'exercise',
        key: 'id'
      }
    },   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout'
  }
);

await User.drop();
console.log("User_Workout table dropped!");

await sequelize.drop();
console.log("All tables dropped!");
    
    

module.exports = Workout;