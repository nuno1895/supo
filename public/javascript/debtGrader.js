$(document).ready(function() {
    var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
    console.log("budgetForm", budgetForm);

    var totalPay = parseInt(budgetForm.totalPay);
    console.log("totalPay", totalPay);

    var budgetForm12 = JSON.parse(localStorage.getItem("budgetForm12"));
    console.log("budgetForm12", budgetForm12);

    var debtBudget = parseInt(budgetForm12.debtTotal);
    console.log("debtBudget", debtBudget);

    var debtBudgetPercent = (debtBudget * 100) / totalPay;

    var totalDebtBudget = $("<h2>Your total debt budget is: " + debtBudget + "</h2>");
    var percentOfBudget = $("<h2>Your debt budget is " + debtBudgetPercent + "% of your total budget.</h2>");

    var suggestedBudgetPercent = 0;

    var percentDiff = debtBudgetPercent - suggestedBudgetPercent;
    console.log(percentDiff);

    var grade = getGrade(percentDiff);
    console.log(grade);
    var debtGrade = $("<h5>Your grade is: " + grade + "</h5>");

    localStorage.setItem("debtGrade", grade);

    let debtAdvice;

    if (grade === "A+") {
        debtAdvice = advice.debt[1];
    } else if (grade === "A-") {
        debtAdvice = advice.debt[2].slice(0, 3);
    } else if (grade === "B+") {
        debtAdvice = advice.debt[2].slice(0, 6);
    } else if (grade === "B-") {
        debtAdvice = advice.debt[2].slice(0, 9);
    } else if (grade === "C+") {
        debtAdvice = advice.debt[2].slice(0, 12);
    } else if (grade === "C-") {
        debtAdvice = advice.debt[2].slice(0, 15);
    } else if (grade === "D") {
        debtAdvice = advice.debt[2].slice(0, 18);
    } else if (grade === "D-") {
        debtAdvice = advice.debt[2].slice(0, 21);
    } else {
        debtAdvice = advice.debt[2];
    }

    $("#budgetTotal").append(totalDebtBudget);
    $("#budgetPercent").append(percentOfBudget);

    // $("#budgetGrade").append(medicalGrade);

    var pullForTotals = {
        budgetForm: JSON.parse(localStorage.getItem("budgetForm")),
        budgetForm2: JSON.parse(localStorage.getItem("budgetForm2")),
        budgetForm3: JSON.parse(localStorage.getItem("budgetForm3")),
        budgetForm4: JSON.parse(localStorage.getItem("budgetForm4")),
        budgetForm5: JSON.parse(localStorage.getItem("budgetForm5")),
        budgetForm6: JSON.parse(localStorage.getItem("budgetForm6")),
        budgetForm7: JSON.parse(localStorage.getItem("budgetForm7")),
        budgetForm8: JSON.parse(localStorage.getItem("budgetForm8")),
        budgetForm9: JSON.parse(localStorage.getItem("budgetForm9")),
        budgetForm10: JSON.parse(localStorage.getItem("budgetForm10")),
        budgetForm11: JSON.parse(localStorage.getItem("budgetForm11")),
        budgetForm12: JSON.parse(localStorage.getItem("budgetForm12")),
    };


    var budgetTotals = {
        totalPay: pullForTotals.budgetForm.takehome,
        foodTotal: pullForTotals.budgetForm2.foodTotal,
        clothingTotal: pullForTotals.budgetForm3.clothingTotal,
        utilitiesTotal: pullForTotals.budgetForm4.utilitiesTotal,
        housingTotal: pullForTotals.budgetForm5.housingTotal,
        savingsTotal: pullForTotals.budgetForm6.savingsTotal,
        medicalTotal: pullForTotals.budgetForm7.medicalTotal,
        insuranceTotal: pullForTotals.budgetForm8.insuranceTotal,
        transportationTotal: pullForTotals.budgetForm9.transportationTotal,
        personalTotal: pullForTotals.budgetForm10.personalTotal,
        entertainmentTotal: pullForTotals.budgetForm11.entertainmentTotal,
        debtTotal: pullForTotals.budgetForm12.debtTotal
    };

    console.log(pullForTotals);
    console.log(budgetTotals);



    var totalsForDisplay = (parseInt(budgetTotals.totalPay) - (parseInt(budgetTotals.foodTotal) + parseInt(budgetTotals.clothingTotal) + parseInt(budgetTotals.utilitiesTotal) + parseInt(budgetTotals.housingTotal) + parseInt(budgetTotals.savingsTotal) + parseInt(budgetTotals.medicalTotal) + parseInt(budgetTotals.insuranceTotal) + parseInt(budgetTotals.transportationTotal) + parseInt(budgetTotals.personalTotal) + parseInt(budgetTotals.entertainmentTotal) + parseInt(budgetTotals.debtTotal)));
    localStorage.setItem("totalsForDisplay", totalsForDisplay);
    var totalPay = $("<h2>Your Total Pay is: " + budgetTotals.totalPay + "</h2>");
    var displayBudgetTotals = $("<h2>We added all your budgets and you have: " + totalsForDisplay + "left over.</h2><h3>You should go back and put this into your debt or maybe even your saving!</h2>")
    $("#totalPay").append(totalPay);
    $("#budgetLeft").append(displayBudgetTotals);
    $("#budgetGrade").append(debtGrade);
    $("#advice").append(debtAdvice);
});

$("#debtGraderBack").on("click", function() {
    window.location.href = "/budgetForm/12";
});

$("#debtGraderNext").on("click", function() {

    //     var pullForGrades = {
    //     foodGrade: JSON.parse(localStorage.getItem("foodGrade")),
    //     clothingGrade: JSON.parse(localStorage.getItem("clothingGrade")),
    //     housingGrade: JSON.parse(localStorage.getItem("housingGrade")),
    //     medicalGrade: JSON.parse(localStorage.getItem("medicalGrade")),
    //     insuranceGrade: JSON.parse(localStorage.getItem("insuranceGrade")),
    //     personalGrade: JSON.parse(localStorage.getItem("personalGrade")),
    //     savingsGrade: JSON.parse(localStorage.getItem("savingsGrade")),
    //     utilitesGrade: JSON.parse(localStorage.getItem("utilitesGrade")),
    //     transportationGrade: JSON.parse(localStorage.getItem("transportationGrade")),
    //     entertainmentGrade: JSON.parse(localStorage.getItem("entertainmentGrade")),
    //     debtGrade: JSON.parse(localStorage.getItem("debtGrade")),

    // };

    var dataToPost = {
        totalsForDisplay: localStorage.getItem("totalsForDisplay"),
        foodGrade: localStorage.getItem("foodGrade"),
        clothingGrade: localStorage.getItem("clothingGrade"),
        housingGrade: localStorage.getItem("housingGrade"),
        medicalGrade: localStorage.getItem("medicalGrade"),
        insuranceGrade: localStorage.getItem("insuranceGrade"),
        personalGrade: localStorage.getItem("personalGrade"),
        savingsGrade: localStorage.getItem("savingsGrade"),
        utilitiesGrade: localStorage.getItem("utilitiesGrade"),
        transportationGrade: localStorage.getItem("transportationGrade"),
        entertainmentGrade: localStorage.getItem("entertainmentGrade"),
        debtGrade: localStorage.getItem("debtGrade"),
        budgetForm: JSON.parse(localStorage.getItem("budgetForm")),
        budgetForm2: JSON.parse(localStorage.getItem("budgetForm2")),
        budgetForm3: JSON.parse(localStorage.getItem("budgetForm3")),
        budgetForm4: JSON.parse(localStorage.getItem("budgetForm4")),
        budgetForm5: JSON.parse(localStorage.getItem("budgetForm5")),
        budgetForm6: JSON.parse(localStorage.getItem("budgetForm6")),
        budgetForm7: JSON.parse(localStorage.getItem("budgetForm7")),
        budgetForm8: JSON.parse(localStorage.getItem("budgetForm8")),
        budgetForm9: JSON.parse(localStorage.getItem("budgetForm9")),
        budgetForm10: JSON.parse(localStorage.getItem("budgetForm10")),
        budgetForm11: JSON.parse(localStorage.getItem("budgetForm11")),
        budgetForm12: JSON.parse(localStorage.getItem("budgetForm12")),
    };

    debugger;
    console.log("dataToPost", dataToPost);

    $.post("/budgetdata", dataToPost).then(function(response) {
        debugger;
        console.log("POSTED");

        window.location.href = "/budgetresults";
    });
});