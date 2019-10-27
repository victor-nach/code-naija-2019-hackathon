'use strict';
module.exports = (sequelize, DataTypes) => {
  const Properties = sequelize.define('Properties', {
    address: DataTypes.STRING,
    photo: DataTypes.ARRAY(DataTypes.STRING),
    type: DataTypes.STRING,
    price: DataTypes.NUMBER,
    cover: DataTypes.STRING,
    lng: DataTypes.NUMBER,
    lat: DataTypes.NUMBER,
  }, {});
  Properties.associate = function(models) {
    // associations can be defined here
  };
  return Properties;
};

