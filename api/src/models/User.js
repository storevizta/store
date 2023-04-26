const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    nickname: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    picture: { type: DataTypes.TEXT, allowNull: false },
    address: { type: DataTypes.ARRAY(DataTypes.JSON), allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: true },
  });
};
