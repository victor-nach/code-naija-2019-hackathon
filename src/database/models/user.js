module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lng: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    lat: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
