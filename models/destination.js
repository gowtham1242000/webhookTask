const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('Destination', {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    httpMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    headers: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });

