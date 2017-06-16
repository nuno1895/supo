module.exports = function(sequelize, Sequelize) {


    // The next thing we are going to do is create the budget model, which is basically the budget table. This will contain basic budget information.

    // In our models folder, we create a file and name it budget.js. The full path for this file should be app/models/budget.js.

    var Expense = sequelize.define('Expense', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        month: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        category: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        amount: {
            type: Sequelize.INTEGER
        },

        budgetLeft: {
            type: Sequelize.INTEGER
        },


    }, {

        timestamps: true,

        tableName: 'expense',


        classMethods: {
            associate: function(models) {
                Expense.belongsTo(models.Budget, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    },
    {

        classMethods: {
            associate: function(models) {
                Expense.belongsTo(models.User, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    }


    );
    return Expense;


};