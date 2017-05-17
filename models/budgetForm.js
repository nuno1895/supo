"use strict";

module.exports = function(sequelize, DataTypes) {
    var SavedRecipes = sequelize.define("SavedRecipes", {
        month: DataTypes.string,
        takeHome: DataTypes.INTEGER,
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: "user_saved_recipes"
    });

   return SavedRecipes;
};