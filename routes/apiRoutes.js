var testApiController = require('../controllers/testApi');
var budgetController = require('../controllers/budgetController');
var models = require("../models");

module.exports = function(app) {

    app.get('/test', testApiController.index);

    app.get('/budget', budgetController.index);

    //this and form2 are sending to the db...but HOW? or...WHY? 
    app.post("/budgetdata", function(req, res) {
        console.log(req.session);
        console.log(req.body);

        // res.send("hello");
        models.Budget.create({
            UserId: req.session.passport.user,
            name: req.body.budgetForm.name,
            month: req.body.budgetForm.month,
            takehome: req.body.budgetForm.takehome,
            frequency: req.body.budgetForm.frequency,
            groceries: req.body.budgetForm2.groceries,
            eatingout: req.body.budgetForm2.eatingout,
            foodTotal: req.body.budgetForm2.foodTotal,
            foodGrade: req.body.foodGrade,
            clothingAdult: req.body.budgetForm3.clothingAdult,
            clothingKids: req.body.budgetForm3.clothingKids,
            dryCleaning: req.body.budgetForm3.dryCleaning,
            clothingTotal: req.body.budgetForm3.clothingTotal,
            clothingGrade: req.body.clothingGrade,
            electricity: req.body.budgetForm4.electricity,
            mobilePhone: req.body.budgetForm4.mobilePhone,
            gas: req.body.budgetForm4.gas,
            trash: req.body.budgetForm4.trash,
            water: req.body.budgetForm4.water,
            internet: req.body.budgetForm4.internet,
            cable: req.body.budgetForm4.cable,
            utilitiesTotal: req.body.budgetForm4.utilitiesTotal,
            utilitiesGrade: req.body.utilitiesGrade,
            mortgageRent: req.body.budgetForm5.mortgageRent,
            secondMortgage: req.body.budgetForm5.secondMortgage,
            taxes: req.body.budgetForm5.taxes,
            repairsMaint: req.body.budgetForm5.repairsMaint,
            dues: req.body.budgetForm5.dues,
            housingTotal: req.body.budgetForm5.housingTotal,
            housingGrade: req.body.housingGrade,
            emergencyFund: req.body.budgetForm6.emergencyFund,
            retirementFund: req.body.budgetForm6.retirementFund,
            collegeFund: req.body.budgetForm6.collegeFund,
            savingsTotal: req.body.budgetForm6.savingsTotal,
            savingsGrade: req.body.savingsGrade,
            medications: req.body.budgetForm7.medications,
            doctorBills: req.body.budgetForm7.doctorBills,
            hospitalBills: req.body.budgetForm7.hospitalBills,
            otherMedical1: req.body.budgetForm7.otherMedical1,
            otherMedical2: req.body.budgetForm7.otherMedical2,
            otherMedical3: req.body.budgetForm7.otherMedical3,
            medicalTotal: req.body.budgetForm7.medicalTotal,
            medicalGrade: req.body.medicalGrade,
            lifeInsurance: req.body.budgetForm8.lifeInsurance,
            healthInsurance: req.body.budgetForm8.healthInsurance,
            autoInsurance: req.body.budgetForm8.autoInsurance,
            homeRentalInsurance: req.body.budgetForm8.homeRentalInsurance,
            disabilityInsurance: req.body.budgetForm8.disabilityInsurance,
            longTermInsurance: req.body.budgetForm8.longTermInsurance,
            InsuranceTotal: req.body.budgetForm8.insuranceTotal,
            InsuranceGrade: req.body.insuranceGrade,
            carFuel: req.body.budgetForm9.carFuel,
            carRepairs: req.body.budgetForm9.carRepairs,
            bus: req.body.budgetForm9.bus,
            train: req.body.budgetForm9.train,
            newCarFund: req.body.budgetForm9.newCarFund,
            otherTransportation: req.body.budgetForm9.otherTransportation,
            transportationTotal: req.body.budgetForm9.transportationTotal,
            transportationGrade: req.body.transportationGrade,
            educationTuition: req.body.budgetForm10.educationTuition,
            childCare: req.body.budgetForm10.childCare,
            hairCareCosmetics: req.body.budgetForm10.hairCareCosmetics,
            bookSupplies: req.body.budgetForm10.bookSupplies,
            childSupport: req.body.budgetForm10.childSupport,
            alimony: req.body.budgetForm10.alimony,
            pocketMoney: req.body.budgetForm10.pocketMoney,
            subscriptions: req.body.budgetForm10.subscriptions,
            babySupplies: req.body.budgetForm10.babySupplies,
            petSupplies: req.body.budgetForm10.petSupplies,
            otherPersonal1: req.body.budgetForm10.otherPersonal1,
            otherPersonal2: req.body.budgetForm10.otherPersonal2,
            otherPersonal3: req.body.budgetForm10.otherPersonal3,
            personalTotal: req.body.budgetForm10.personalTotal,
            personalGrade: req.body.personalGrade,
            entertainment: req.body.budgetForm11.entertainment,
            vacation: req.body.budgetForm11.vacation,
            entertainmentTotal: req.body.budgetForm11.entertainmentTotal,
            entertainmentGrade: req.body.entertainmentGrade,
            carPayment1: req.body.budgetForm12.carPayment1,
            carPayment2: req.body.budgetForm12.carPayment2,
            creditCard1: req.body.budgetForm12.creditCard1,
            creditCard2: req.body.budgetForm12.creditCard2,
            creditCard3: req.body.budgetForm12.creditCard3,
            creditCard4: req.body.budgetForm12.creditCard4,
            creditCard5: req.body.budgetForm12.creditCard5,
            creditCard6: req.body.budgetForm12.creditCard6,
            studentLoan1: req.body.budgetForm12.studentLoan1,
            studentLoan2: req.body.budgetForm12.studentLoan2,
            studentLoan3: req.body.budgetForm12.studentLoan3,
            studentLoan4: req.body.budgetForm12.studentLoan4,
            debt1: req.body.budgetForm12.debt1,
            debt2: req.body.budgetForm12.debt2,
            debt3: req.body.budgetForm12.debt3,
            debt4: req.body.budgetForm12.debt4,
            debtTotal: req.body.budgetForm12.debtTotal,
            debtGrade: req.body.debtGrade
        }).then(function(budget) {

            res.redirect("/budgetresults");

        });
    });

    app.post("/expensedata", function(req, res) {
        console.log(req.body);
        models.Budget.findAll({
            where: {
                UserId: req.session.passport.user,
            }
        }).then(function(budgetResults) {
            // res.send(budgetResults[0]);
            models.Expense.create({
                UserId: req.session.passport.user,
                BudgetId: budgetResults[0].id,
                month: req.body.month,
                category: req.body.category,
                expenseName: req.body.expenseName,
                expenseAmount: req.body.expenseAmount
            }).then(function() {
                res.redirect("/expenses");
            });
        });

    });

    // app.get("/dailyTracker", function(req, res) {
    //     console.log("hello")
    //     models.Budget.findAll({
    //         where: {
    //             UserId: req.session.passport.user
    //         }
    //     }).then(function(trackerResults) {
    //         res.render("/dailyTracker", {
    //             trackerResults: trackerResults
    //         });
    //     });
    //     console.log(trackerResults);
    // });

    app.get("/allbudgetresults", function(req, res) {
        console.log(req.session)
        models.Budget.findAll({
            where: {
                UserId: req.session.passport.user
            }
        }).then(function(budgetResults) {
            // res.send(budgetResults);
            res.send(budgetResults);
        });
    });

    app.get("/allexpenseresults", function(req, res) {
        models.Expense.findAll({
            where: {
                UserId: req.session.passport.user
            }
        }).then(function(allExpenses) {
            res.send(allExpenses);
        });
    });

    app.get("/budgetresults", function(req, res) {
        console.log(req.session)
        models.Budget.findAll({
            where: {
                UserId: req.session.passport.user
            }
        }).then(function(budgetResults) {
            // res.send(budgetResults);
            res.render("results/graderResults", {
                budgetResults: budgetResults[0]
            });
        });
    });

    app.get("/expensedata", function(req, res) {
        console.log("hello")
        models.Budget.findAll({
            where: {
                UserId: req.session.passport.user
            }
        }).then(function(budgetResults) {
            res.send(budgetResults);
        });
    });




    app.get("budget/:month", function(req, res) {
        if (req.params.budget) {
            Budget.findAll({
                where: {
                    month: req.params.budget
                }
            }).then(function(results) {
                res.json(results);
            })
        }
    });

    app.put('/updatebudget', function(req, res) {
        models.Budget.update({
            name: req.body.budgetForm.name,
            month: req.body.budgetForm.month,
            takehome: req.body.budgetForm.takehome,
            frequency: req.body.budgetForm.frequency,
            groceries: req.body.budgetForm2.groceries,
            eatingout: req.body.budgetForm2.eatingout,
            foodTotal: req.body.budgetForm2.foodTotal,
            clothingAdult: req.body.budgetForm3.clothingAdult,
            clothingKids: req.body.budgetForm3.clothingKids,
            dryCleaning: req.body.budgetForm3.dryCleaning,
            clothingTotal: req.body.budgetForm3.clothingTotal,
            electricity: req.body.budgetForm4.electricity,
            mobilePhone: req.body.budgetForm4.mobilePhone,
            gas: req.body.budgetForm4.gas,
            trash: req.body.budgetForm4.trash,
            water: req.body.budgetForm4.water,
            internet: req.body.budgetForm4.internet,
            cable: req.body.budgetForm4.cable,
            utilitiesTotal: req.body.budgetForm4.utilitiesTotal,
            mortgageRent: req.body.budgetForm5.mortgageRent,
            secondMortgage: req.body.budgetForm5.secondMortgage,
            taxes: req.body.budgetForm5.taxes,
            repairsMaint: req.body.budgetForm5.repairsMaint,
            dues: req.body.budgetForm5.dues,
            housingTotal: req.body.budgetForm5.housingTotal,
            emergencyFund: req.body.budgetForm6.emergencyFund,
            retirementFund: req.body.budgetForm6.retirementFund,
            collegeFund: req.body.budgetForm6.collegeFund,
            savingsTotal: req.body.budgetForm6.savingsTotal,
            medications: req.body.budgetForm7.medications,
            doctorBills: req.body.budgetForm7.doctorBills,
            hospitalBills: req.body.budgetForm7.hospitalBills,
            otherMedical1: req.body.budgetForm7.otherMedical1,
            otherMedical2: req.body.budgetForm7.otherMedical2,
            otherMedical3: req.body.budgetForm7.otherMedical3,
            medicalTotal: req.body.budgetForm7.medicalTotal,
            lifeInsurance: req.body.budgetForm8.lifeInsurance,
            healthInsurance: req.body.budgetForm8.healthInsurance,
            autoInsurance: req.body.budgetForm8.autoInsurance,
            homeRentalInsurance: req.body.budgetForm8.homeRentalInsurance,
            disabilityInsurance: req.body.budgetForm8.disabilityInsurance,
            longTermInsurance: req.body.budgetForm8.longTermInsurance,
            InsuranceTotal: req.body.budgetForm8.insuranceTotal,
            carFuel: req.body.budgetForm9.carFuel,
            carRepairs: req.body.budgetForm9.carRepairs,
            bus: req.body.budgetForm9.bus,
            train: req.body.budgetForm9.train,
            newCarFund: req.body.budgetForm9.newCarFund,
            otherTransportation: req.body.budgetForm9.otherTransportation,
            transportationTotal: req.body.budgetForm9.transportationTotal,
            educationTuition: req.body.budgetForm10.educationTuition,
            childCare: req.body.budgetForm10.childCare,
            hairCareCosmetics: req.body.budgetForm10.hairCareCosmetics,
            bookSupplies: req.body.budgetForm10.bookSupplies,
            childSupport: req.body.budgetForm10.childSupport,
            alimony: req.body.budgetForm10.alimony,
            pocketMoney: req.body.budgetForm10.pocketMoney,
            subscriptions: req.body.budgetForm10.subscriptions,
            babySupplies: req.body.budgetForm10.babySupplies,
            petSupplies: req.body.budgetForm10.petSupplies,
            otherPersonal1: req.body.budgetForm10.otherPersonal1,
            otherPersonal2: req.body.budgetForm10.otherPersonal2,
            otherPersonal3: req.body.budgetForm10.otherPersonal3,
            personalTotal: req.body.budgetForm10.personalTotal,
            entertainment: req.body.budgetForm11.entertainment,
            vacation: req.body.budgetForm11.vacation,
            entertainmentTotal: req.body.budgetForm11.entertainmentTotal,
            carPayment1: req.body.budgetForm12.carPayment1,
            carPayment2: req.body.budgetForm12.carPayment2,
            creditCard1: req.body.budgetForm12.creditCard1,
            creditCard2: req.body.budgetForm12.creditCard2,
            creditCard3: req.body.budgetForm12.creditCard3,
            creditCard4: req.body.budgetForm12.creditCard4,
            creditCard5: req.body.budgetForm12.creditCard5,
            creditCard6: req.body.budgetForm12.creditCard6,
            studentLoan1: req.body.budgetForm12.studentLoan1,
            studentLoan2: req.body.budgetForm12.studentLoan2,
            studentLoan3: req.body.budgetForm12.studentLoan3,
            studentLoan4: req.body.budgetForm12.studentLoan4,
            debt1: req.body.budgetForm12.debt1,
            debt2: req.body.budgetForm12.debt2,
            debt3: req.body.budgetForm12.debt3,
            debt4: req.body.budgetForm12.debt4,
            debtTotal: req.body.budgetForm12.debtTotal
        }, {
            where: {
                name: req.body.budgetName,
                UserId: req.body.session.user
            }
        }).then(function() {
            res.redirect('/tempPath');
        });
    });
};