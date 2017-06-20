module.exports = {
    renderForm: function(req, res) {
        res.render('budgetForm/budgetForm', {
            userData: req.user
        });
    },
    renderForm2: function(req, res) {
        res.render('budgetForm/budgetForm2', {
            userData: req.user
        });
    },
    renderFoodGrader: function(req, res) {
        res.render('sectionGraders/foodGrader', {
            userData: req.user
        });
    },
    renderForm3: function(req, res) {
        res.render('budgetForm/budgetForm3', {
            userData: req.user
        });
    },
    renderClothingGrader: function(req, res) {
        res.render('sectionGraders/clothingGrader', {
            userData: req.user
        });
    },
    renderForm4: function(req, res) {
        res.render('budgetForm/budgetForm4', {
            userData: req.user
        });
    },
    renderUtilitiesGrader: function(req, res) {
        res.render('sectionGraders/utilitiesGrader', {
            userData: req.user
        });
    },
    renderForm5: function(req, res) {
        res.render('budgetForm/budgetForm5', {
            userData: req.user
        });
    },
    renderHousingGrader: function(req, res) {
        res.render('sectionGraders/housingGrader', {
            userData: req.user
        });
    },
    renderForm6: function(req, res) {
        res.render('budgetForm/budgetForm6', {
            userData: req.user
        });
    },
    renderSavingsGrader: function(req, res) {
        res.render('sectionGraders/savingsGrader', {
            userData: req.user
        });
    },
    renderForm7: function(req, res) {
        res.render('budgetForm/budgetForm7', {
            userData: req.user
        });
    },
    renderMedicalGrader: function(req, res) {
        res.render('sectionGraders/medicalGrader', {
            userData: req.user
        });
    },
    renderForm8: function(req, res) {
        res.render('budgetForm/budgetForm8', {
            userData: req.user
        });
    },
    renderInsuranceGrader: function(req, res) {
        res.render('sectionGraders/insuranceGrader', {
            userData: req.user
        });
    },
    renderForm9: function(req, res) {
        res.render('budgetForm/budgetForm9', {
            userData: req.user
        });
    },
    renderTransportationGrader: function(req, res) {
        res.render('sectionGraders/transportationGrader', {
            userData: req.user
        });
    },
    renderForm10: function(req, res) {
        res.render('budgetForm/budgetForm10', {
            userData: req.user
        });
    },
    renderPersonalGrader: function(req, res) {
        res.render('sectionGraders/personalGrader', {
            userData: req.user
        });
    },
    renderForm11: function(req, res) {
        res.render('budgetForm/budgetForm11', {
            userData: req.user
        });
    },
    renderEntertainmentGrader: function(req, res) {
        res.render('sectionGraders/entertainmentGrader', {
            userData: req.user
        });
    },
    renderForm12: function(req, res) {
        res.render('budgetForm/budgetForm12', {
            userData: req.user
        });
    },
    renderDebtGrader: function(req, res) {
        res.render('sectionGraders/debtGrader', {
            userData: req.user
        });
    },
    results: function(req, res) {
        res.render('results/graderResults', {
            userData: req.user
        });
    },
    expenses: function(req, res) {
        res.render('expenses/dailyTracker', {
            userData: req.user
        });
    },
};