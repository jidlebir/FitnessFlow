const { Model, DataTypes } = require('sequelize');
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
        allowNull: true,
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
    profile_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'profile',
        key: 'id'
      }
    },   
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    },   
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_workout'
  }
);

module.exports = User_Workout;