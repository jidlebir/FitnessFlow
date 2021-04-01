const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Profile extends Model {
}
// create fields/columns for User model
Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },    
    favorite_workout: {
      type: DataTypes.STRING,
      allowNull: true
    },    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile'
    
  }
)

module.exports = Profile;