module.exports = function(sequelize, Sequelize) {


    // The next thing we are going to do is create the budget model, which is basically the budget table. This will contain basic budget information.

    // In our models folder, we create a file and name it budget.js. The full path for this file should be app/models/budget.js.

    var Budget = sequelize.define('Budget', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        name: {
            type: Sequelize.STRING,
            notEmpty: true
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

        totalPay: {
            type: Sequelize.INTEGER
        },

        groceries: {
            type: Sequelize.INTEGER
        },

        eatingout: {
            type: Sequelize.INTEGER
        },

        foodTotal: {
            type: Sequelize.INTEGER
        },

        foodGrade: {
            type: Sequelize.STRING
        },

        clothingAdult: {
            type: Sequelize.INTEGER
        },

        clothingKids: {
            type: Sequelize.INTEGER
        },

        dryCleaning: {
            type: Sequelize.INTEGER
        },

        clothingTotal: {
            type: Sequelize.INTEGER
        },

        clothingGrade: {
            type: Sequelize.STRING
        },

        electricity: {
            type: Sequelize.INTEGER
        },

        mobilePhone: {
            type: Sequelize.INTEGER
        },

        gas: {
            type: Sequelize.INTEGER
        },

        trash: {
            type: Sequelize.INTEGER
        },

        water: {
            type: Sequelize.INTEGER
        },

        internet: {
            type: Sequelize.INTEGER
        },

        cable: {
            type: Sequelize.INTEGER
        },

        utilitiesTotal: {
            type: Sequelize.INTEGER
        },

        utilitiesGrade: {
            type: Sequelize.STRING
        },

        mortgageRent: {
            type: Sequelize.INTEGER
        },

        secondMortgage: {
            type: Sequelize.INTEGER
        },

        taxes: {
            type: Sequelize.INTEGER
        },

        repairsMaint: {
            type: Sequelize.INTEGER
        },

        dues: {
            type: Sequelize.INTEGER
        },

        housingTotal: {
            type: Sequelize.INTEGER
        },

        housingGrade: {
            type: Sequelize.STRING
        },

        emergencyFund: {
            type: Sequelize.INTEGER
        },

        retirementFund: {
            type: Sequelize.INTEGER
        },

        collegeFund: {
            type: Sequelize.INTEGER
        },

        savingsTotal: {
            type: Sequelize.INTEGER
        },

        savingsGrade: {
            type: Sequelize.STRING
        },

        medications: {
            type: Sequelize.INTEGER
        },

        doctorBills: {
            type: Sequelize.INTEGER
        },

        hospitalBills: {
            type: Sequelize.INTEGER
        },

        otherMedical1: {
            type: Sequelize.INTEGER
        },

        otherMedical2: {
            type: Sequelize.INTEGER
        },

        otherMedical3: {
            type: Sequelize.INTEGER
        },

        medicalTotal: {
            type: Sequelize.INTEGER
        },

        medicalGrade: {
            type: Sequelize.STRING
        },

        lifeInsurance: {
            type: Sequelize.INTEGER
        },

        healthInsurance: {
            type: Sequelize.INTEGER
        },

        autoInsurance: {
            type: Sequelize.INTEGER
        },

        homeRentalInsurance: {
            type: Sequelize.INTEGER
        },

        disabilityInsurance: {
            type: Sequelize.INTEGER
        },

        longTermInsurance: {
            type: Sequelize.INTEGER
        },

        InsuranceTotal: {
            type: Sequelize.INTEGER
        },

        InsuranceGrade: {
            type: Sequelize.STRING
        },

        carFuel: {
            type: Sequelize.INTEGER
        },

        carRepairs: {
            type: Sequelize.INTEGER
        },

        bus: {
            type: Sequelize.INTEGER
        },

        train: {
            type: Sequelize.INTEGER
        },

        newCarFund: {
            type: Sequelize.INTEGER
        },

        otherTransportation: {
            type: Sequelize.INTEGER
        },

        transportationTotal: {
            type: Sequelize.INTEGER
        },

        transportationGrade: {
            type: Sequelize.STRING
        },

        educationTuition: {
            type: Sequelize.INTEGER
        },

        childCare: {
            type: Sequelize.INTEGER
        },

        hairCareCosmetics: {
            type: Sequelize.INTEGER
        },

        bookSupplies: {
            type: Sequelize.INTEGER
        },

        childSupport: {
            type: Sequelize.INTEGER
        },

        alimony: {
            type: Sequelize.INTEGER
        },

        pocketMoney: {
            type: Sequelize.INTEGER
        },

        subscriptions: {
            type: Sequelize.INTEGER
        },

        babySupplies: {
            type: Sequelize.INTEGER
        },

        petSupplies: {
            type: Sequelize.INTEGER
        },

        otherPersonal1: {
            type: Sequelize.INTEGER
        },

        otherPersonal2: {
            type: Sequelize.INTEGER
        },

        otherPersonal3: {
            type: Sequelize.INTEGER
        },

        personalTotal: {
            type: Sequelize.INTEGER
        },

        personalGrade: {
            type: Sequelize.STRING
        },

        entertainment: {
            type: Sequelize.INTEGER
        },

        vacation: {
            type: Sequelize.INTEGER
        },

        entertainmentTotal: {
            type: Sequelize.INTEGER
        },

        entertainmentGrade: {
            type: Sequelize.STRING
        },

        carPayment1: {
            type: Sequelize.INTEGER
        },

        carPayment2: {
            type: Sequelize.INTEGER
        },

        creditCard1: {
            type: Sequelize.INTEGER
        },

        creditCard2: {
            type: Sequelize.INTEGER
        },

        creditCard3: {
            type: Sequelize.INTEGER
        },

        creditCard4: {
            type: Sequelize.INTEGER
        },

        creditCard5: {
            type: Sequelize.INTEGER
        },

        creditCard6: {
            type: Sequelize.INTEGER
        },

        studentLoan1: {
            type: Sequelize.INTEGER
        },

        studentLoan2: {
            type: Sequelize.INTEGER
        },

        studentLoan3: {
            type: Sequelize.INTEGER
        },

        studentLoan4: {
            type: Sequelize.INTEGER
        },

        debt1: {
            type: Sequelize.INTEGER
        },
        debt2: {
            type: Sequelize.INTEGER
        },
        debt3: {
            type: Sequelize.INTEGER
        },
        debt4: {
            type: Sequelize.INTEGER
        },

        debtTotal: {
            type: Sequelize.INTEGER
        },

        debtGrade: {
            type: Sequelize.STRING
        },

        totalBudget: {
            type: Sequelize.INTEGER
        },

        finalGrade: {
            type: Sequelize.STRING
        }
    }, {

        classMethods: {
            associate: function(models) {
                Budget.belongsTo(models.User, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Budget;


};