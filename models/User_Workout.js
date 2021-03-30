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

module.exports = Workout;