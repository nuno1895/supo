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
            month: req.body.budgetForm.month,
            takehome: req.body.budgetForm.takehome,
            frequency: req.body.budgetForm.frequency,
            groceries: req.body.budgetForm2.groceries,
            eatingout: req.body.budgetForm2.eatingout,
            clothingAdult: req.body.budgetForm3.clothingAdult,
            clothingKids: req.body.budgetForm3.clothingKids,
            dryCleaning: req.body.budgetForm3.dryCleaning,
            electricity: req.body.budgetForm4.electricity,
            mobilePhone: req.body.budgetForm4.mobilePhone,
            gas: req.body.budgetForm4.gas,
            trash: req.body.budgetForm4.trash,
            water: req.body.budgetForm4.water,
            internet: req.body.budgetForm4.internet,
            cable: req.body.budgetForm4.cable,
            mortgageRent: req.body.budgetForm5.mortgageRent,
            secondMortgage: req.body.budgetForm5.secondMortgage,
            taxes: req.body.budgetForm5.taxes,
            repairsMaint: req.body.budgetForm5.repairsMaint,
            dues: req.body.budgetForm5.dues,
            emergencyFund: req.body.budgetForm6.emergencyFund,
            retirementFund: req.body.budgetForm6.retirementFund,
            collegeFund: req.body.budgetForm6.collegeFund,
            medications: req.body.budgetForm7.medications,
            doctorBills: req.body.budgetForm7.doctorBills,
            hospitalBills: req.body.budgetForm7.hospitalBills,
            otherMedical1: req.body.budgetForm7.otherMedical1,
            otherMedical2: req.body.budgetForm7.otherMedical2,
            otherMedical3: req.body.budgetForm7.otherMedical3,
            lifeInsurance: req.body.budgetForm8.lifeInsurance,
            healthInsurance: req.body.budgetForm8.healthInsurance,
            autoInsurance: req.body.budgetForm8.autoInsurance,
            homeRentalInsurance: req.body.budgetForm8.homeRentalInsurance,
            disabilityInsurance: req.body.budgetForm8.disabilityInsurance,
            longTermInsurance: req.body.budgetForm8.longTermInsurance,
            carFuel: req.body.budgetForm9.carFuel,
            carRepairs: req.body.budgetForm9.carRepairs,
            bus: req.body.budgetForm9.bus,
            train: req.body.budgetForm9.train,
            newCarFund: req.body.budgetForm9.newCarFund,
            otherTransportation: req.body.budgetForm9.otherTransportation,
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
            entertainment: req.body.budgetForm11.entertainment,
            vacation: req.body.budgetForm11.vacation,
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
            debt4: req.body.budgetForm12.debt4
        }).then(function(budget) {

            res.redirect("results/graderResults");

            res.redirect("/graderResults");

        });
    });

    app.get("/budgetresults", function(req, res) {
        console.log(req.session)
        models.Budget.findAll({
            where: {
                UserId: req.session.passport.user,
                id: 1
            }
        }).then(function(budgetResults) {
            // res.send(budgetResults);
            res.render("results/graderResults", {
                budgetResults: budgetResults[0]
            });
        });
    });

    // router.post("/budgetdata", function(req, res) {
    //     models.Budget.create({
    //         month: dataToPost.budgetForm.month,
    //         takehome: dataToPost.budgetForm.takehome,
    //         groceries: dataToPost.budgetForm2.groceries,
    //         eatingout: dataToPost.budgetForm2.eatingout
    //     }).then(function(budget) {
    //         console.log(month);
    //         res.json(month)
    //     });
    // });

    app.get("/budget/all", function(req, res) {
        models.User.findAll({}).then(function(results) {
            res.json(results);
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
    })

};