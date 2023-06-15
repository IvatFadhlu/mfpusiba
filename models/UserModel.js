const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

class UserModel {
  #model = sequelize.define(
    "user",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "user",
      updatedAt: false,
      underscored: true,
    }
  );

  async insertData(username, password) {
    const isertedData = await this.#model.create({ username, password });
    return isertedData;
  }

  async getData(username) {
    const data = await this.#model.findOne({
      where: {
        username,
      },
      attributes: ["username", "password"],
    });
    return data;
  }
}

const userModel = new UserModel();
module.exports = { userModel };
