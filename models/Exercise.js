const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model {}

Exercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    exercise_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    workout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'workout',
        key: 'id'
      },
      
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise'
  }
);

module.exports = Exercise;