const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) =>
  sequelize.define('Account', {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appSecretToken: {
      type: DataTypes.STRING,
      defaultValue: uuidv4,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

