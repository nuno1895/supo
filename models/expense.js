module.exports = function(sequelize, Sequelize) {

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

        expenseName: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        expenseAmount: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: true,
        tableName: 'expenses',
        classMethods: {
            associate: function(models) {
                Expense.belongsTo(models.User, {
                    foreignKey: {
                        allowNull: false

                    }
                });

            }
        }
    });

    return Expense;
};