module.exports = function(sequelize, Sequelize) {

    var Budget = sequelize.define('Budget', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        user_id: {
            foreignKey: true,
            allowNull: false,
            type: Sequelize.INTEGER
        },
        month: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        takehome: {
            type: Sequelize.INTEGER,
        },
        frequency: {
            type: Sequelize.INTEGER
        },

        groceries: {
            type: Sequelize.INTEGER
        },

        eatingout: {
            type: Sequelize.INTEGER
        },
    });

    return Budget;
}

    // The next thing we are going to do is create the budget model, which is basically the budget table. This will contain basic budget information.

    // In our models folder, we create a file and name it budget.js. The full path for this file should be app/models/budget.js.