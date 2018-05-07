
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers_dbs", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  return burger;
};