const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const Madinatulfusha = sequelize.define(
  "madinatulfusha",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // createdat: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    // },
    no: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nomorjulus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nomorva: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "madinatulfusha",
    timestamps: true,
  }
);

module.exports = Madinatulfusha;
