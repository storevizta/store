const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Report",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.ENUM("User", "Advertisement"),
      },

      denouncedId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      reason: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
};