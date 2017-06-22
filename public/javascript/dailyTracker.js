var month;

$(document).ready(function() {
    var currentBudget = 0;
    var currentDataBudgetID;
    var expenses;

    var monthArray = new Array();
    monthArray[0] = "January";
    monthArray[1] = "February";
    monthArray[2] = "March";
    monthArray[3] = "April";
    monthArray[4] = "May";
    monthArray[5] = "June";
    monthArray[6] = "July";
    monthArray[7] = "August";
    monthArray[8] = "September";
    monthArray[9] = "October";
    monthArray[10] = "November";
    monthArray[11] = "December";

    var date = new Date();
    month = monthArray[date.getMonth()];

    $('#monthToday').html(month);

    $.get("/expensedata", function(budgetData) {
        console.log(budgetData)
        var budgetSelect = $('<select class="form-control budgetCompareSelector">');
        budgetSelect.append("<option>Choose One Of Your Budgets</option");
        for (var i = 0; i < budgetData.length; i++) {
            budgetSelect.append($("<option></option>", {
                value: budgetData[i].id,
                text: budgetData[i].name
            }));
            // $("#foodBudget").html(budgetData[i].foodTotal);
        }
        $("#currentBudgetName").append(budgetSelect);
    });

    $(document).on('change', '.budgetCompareSelector', function() {
        //use value below (budget id) - to store all of the data from that budget into currentBudget variable;

        var budgetDataHolder;
        var subBudgetTotals = {};

        //-----------! IMPORTANT !-----------//
        $("#foodCategory").empty();
        $("#foodBudgetRemainder").empty();
        $("#clothingCategory").empty();
        $("#clothingBudgetRemainder").empty();
        $("#utilitiesCategory").empty();
        $("#utilitiesBudgetRemainder").empty();
        $("#housingCategory").empty();
        $("#housingBudgetRemainder").empty();
        $("#savingsCategory").empty();
        $("#savingsBudgetRemainder").empty();
        $("#medicalCategory").empty();
        $("#medicalBudgetRemainder").empty();
        $("#insuranceCategory").empty();
        $("#insuranceBudgetRemainder").empty();
        $("#transportationCategory").empty();
        $("#transportationBudgetRemainder").empty();
        $("#personalCategory").empty();
        $("#personalBudgetRemainder").empty();
        $("#entertainmentCategory").empty();
        $("#entertainmentBudgetRemainder").empty();
        $("#debtCategory").empty();
        $("#debtBudgetRemainder").empty();
        //We need to empty the accordian here so on change it refreshes the html//
        //Otherwise you can change budgets and it'll just keep adding to the drop down and mush things together//

        console.log($('.budgetCompareSelector').val());
        $.get("/expensedata", function(budgetData) {
            var budgetId = $('.budgetCompareSelector').val();
            console.log("BUDGETID: ", budgetId);
            currentDataBudgetID = budgetId;
            budgetDataHolder = budgetData;
            console.log("CurrentB: " + currentBudget);

            for (var i = 0; i < budgetData.length; i++) {
                if (budgetData[i].id == budgetId) {
                    console.log(budgetData[i]);
                    currentBudget = budgetData[i];
                    $("#foodBudget").html(currentBudget.foodTotal);
                    subBudgetTotals.foodTotal = currentBudget.foodTotal;
                    $("#clothingBudget").html(currentBudget.clothingTotal);
                    subBudgetTotals.clothingTotal = currentBudget.clothingTotal;
                    $("#utilitiesBudget").html(currentBudget.utilitiesTotal);
                    subBudgetTotals.utilitiesTotal = currentBudget.utilitiesTotal;
                    $("#housingBudget").html(currentBudget.housingTotal);
                    subBudgetTotals.housingTotal = currentBudget.housingTotal;
                    $("#savingsBudget").html(currentBudget.savingsTotal);
                    subBudgetTotals.savingsTotal = currentBudget.savingsTotal;
                    $("#medicalBudget").html(currentBudget.medicalTotal);
                    subBudgetTotals.medicalTotal = currentBudget.medicalTotal;
                    $("#insuranceBudget").html(currentBudget.insuranceTotal);
                    subBudgetTotals.insuranceTotal = currentBudget.insuranceTotal;
                    $("#transportationBudget").html(currentBudget.transportationTotal);
                    subBudgetTotals.transportationTotal = currentBudget.transportationTotal;
                    $("#personalBudget").html(currentBudget.personalTotal);
                    subBudgetTotals.personalTotal = currentBudget.personalTotal;
                    $("#entertainmentBudget").html(currentBudget.entertainmentTotal);
                    subBudgetTotals.entertainmentTotal = currentBudget.entertainmentTotal;
                    $("#debtBudget").html(currentBudget.debtTotal);
                    subBudgetTotals.debtTotal = currentBudget.debtTotal;
                }
            }
        });

        $.get("/allexpenseresults", function(expenses) {
            console.log("Current Budget ID: " + currentDataBudgetID);
            console.log("BUDGET DATA JEFF: ", budgetDataHolder);
            console.log("SUBBUDGET TOTALS JEFF: ", subBudgetTotals);

            var foodExpenseTotal = 0;
            var foodBudget = subBudgetTotals.foodTotal;
            var clothingExpenseTotal = 0;
            var clothingBudget = subBudgetTotals.clothingTotal;
            var utilitiesExpenseTotal = 0;
            var utilitiesBudget = subBudgetTotals.utilitiesTotal;
            var housingExpenseTotal = 0;
            var housingBudget = subBudgetTotals.housingTotal;
            var savingsExpenseTotal = 0;
            var savingsBudget = subBudgetTotals.savingsTotal;
            var medicalExpenseTotal = 0;
            var medicalBudget = subBudgetTotals.medicalTotal;
            var insuranceExpenseTotal = 0;
            var insuranceBudget = subBudgetTotals.insuranceTotal;
            var transportationExpenseTotal = 0;
            var transportationBudget = subBudgetTotals.transportationTotal;
            var personalExpenseTotal = 0;
            var personalBudget = subBudgetTotals.personalTotal;
            var entertainmentExpenseTotal = 0;
            var entertainmentBudget = subBudgetTotals.entertainmentTotal;
            var debtExpenseTotal = 0;
            var debtBudget = subBudgetTotals.debtTotal;

            var dateObj = new Date();
            var month = dateObj.getMonth() + 1; //months from 1-12
            var day = dateObj.getDate();
            var year = dateObj.getFullYear();

            newdate = month + "/" + day + "/" + year ;

            for (var i = 0; i < expenses.length; i++) {
                console.log("Expense Loop: " + expenses[i]);
                console.log("EXPENSES: " + expenses[i].BudgetId);
                console.log("Current Budget ID: " + currentDataBudgetID);

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "food") {
                    foodExpenseTotal += expenses[i].expenseAmount;

                    $("#foodCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "clothing") {
                    clothingExpenseTotal += expenses[i].expenseAmount;

                    $("#clothingCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": $" + expenses[i].expenseAmount + ".00 " + newdate + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "utilities") {
                    utilitiesExpenseTotal += expenses[i].expenseAmount;

                    $("#utiltiesCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": " + expenses[i].expenseAmount + " " + expenses[i].createdAt + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "housing") {
                    housingExpenseTotal += expenses[i].expenseAmount;

                    $("#housingCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": " + expenses[i].expenseAmount + " " + expenses[i].createdAt + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "savings") {
                    savingsExpenseTotal += expenses[i].expenseAmount;

                    $("#savingsCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": " + expenses[i].expenseAmount + " " + expenses[i].createdAt + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "medical") {
                    medicalExpenseTotal += expenses[i].expenseAmount;

                    $("#medicalCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": " + expenses[i].expenseAmount + " " + expenses[i].createdAt + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "insurance") {
                    insuranceExpenseTotal += expenses[i].expenseAmount;

                    $("#insuranceCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": " + expenses[i].expenseAmount + " " + expenses[i].createdAt + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "transportation") {
                    clothingExpenseTotal += expenses[i].expenseAmount;

                    $("#transportationCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": " + expenses[i].expenseAmount + " " + expenses[i].createdAt + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "personal") {
                    personalExpenseTotal += expenses[i].expenseAmount;

                    $("#personalCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": " + expenses[i].expenseAmount + " " + expenses[i].createdAt + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "entertainment") {
                    entertainmentExpenseTotal += expenses[i].expenseAmount;

                    $("#entertainmentCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": " + expenses[i].expenseAmount + " " + expenses[i].createdAt + "</li>");
                }

                if (expenses[i].BudgetId == currentDataBudgetID && expenses[i].category == "debt") {
                    debtExpenseTotal += expenses[i].expenseAmount;

                    $("#debtCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": " + expenses[i].expenseAmount + " " + expenses[i].createdAt + "</li>");
                }
            };

            var foodRemainder = foodBudget - foodExpenseTotal;
            $("#foodBudgetRemainder").append(foodRemainder);
            if ((foodExpenseTotal/foodBudget) >= .80) {
                $("#panelHeading").css("background-color", "yellow");
            }else if ((foodExpenseTotal/foodBudget) > 1) {
                $("#panelHeading").css("background-color", "red");
            }else {
                $("#panelHeading").css("background-color", "#23ABF");
            }

            var clothingRemainder = clothingBudget - clothingExpenseTotal;
            $("#clothingBudgetRemainder").append(clothingRemainder);
            if ((clothingExpenseTotal/clothingBudget) >= .80) {
                $("#panelHeading").css("background-color", "yellow");
            }else if ((clothingExpenseTotal/clothingBudget) > 1) {
                $("#panelHeading").css("background-color", "red");
            }else {
                $("#panelHeading").css("background-color", "#23ABF");
            }

            var utilitiesRemainder = utilitiesBudget - utilitiesExpenseTotal;
            $("#utilitiesBudgetRemainder").append(utilitiesRemainder);
            if ((utilitiesExpenseTotal/utilitiesBudget) >= .80) {
                $("#panelHeading").css("background-color", "yellow");
            }else if ((utilitiesExpenseTotal/utilitiesBudget) > 1) {
                $("#panelHeading").css("background-color", "red");
            }else {
                $("#panelHeading").css("background-color", "#23ABF");
            }

            var housingRemainder = housingBudget - housingExpenseTotal;
            $("#housingBudgetRemainder").append(housingRemainder);
            if ((housingExpenseTotal/housingBudget) >= .80) {
                $("#panelHeading").css("background-color", "yellow");
            }else if ((housingExpenseTotal/housingBudget) > 1) {
                $("#panelHeading").css("background-color", "red");
            }else {
                $("#panelHeading").css("background-color", "#23ABF");
            }

            var savingsRemainder = savingsBudget - savingsExpenseTotal;
            $("#savingsBudgetRemainder").append(savingsRemainder);
            if ((savingsExpenseTotal/savingsBudget) >= .80) {
                $("#panelHeading").css("background-color", "yellow");
            }else if ((savingsExpenseTotal/savingsBudget) > 1) {
                $("#panelHeading").css("background-color", "red");
            }else {
                $("#panelHeading").css("background-color", "#23ABF");
            }

            var medicalRemainder = medicalBudget - medicalExpenseTotal;
            $("#medicalBudgetRemainder").append(medicalRemainder);
            if ((medicalExpenseTotal/medicalBudget) >= .80) {
                $("#panelHeading").css("background-color", "yellow");
            }else if ((medicalExpenseTotal/medicalBudget) > 1) {
                $("#panelHeading").css("background-color", "red");
            }else {
                $("#panelHeading").css("background-color", "#23ABF");
            }

            var insuranceRemainder = insuranceBudget - insuranceExpenseTotal;
            $("#insuranceBudgetRemainder").append(insuranceRemainder);
            if ((insuranceExpenseTotal/insuranceBudget) >= .80) {
                $("#panelHeading").css("background-color", "yellow");
            }else if ((insuranceExpenseTotal/insuranceBudget) > 1) {
                $("#panelHeading").css("background-color", "red");
            }else {
                $("#panelHeading").css("background-color", "#23ABF");
            }

            var transportationRemainder = transportationBudget - transportationExpenseTotal;
            $("#transportationBudgetRemainder").append(transportationRemainder);
            if ((transportationExpenseTotal/transportationBudget) >= .80) {
                $("#panelHeading").css("background-color", "yellow");
            }else if ((transportationExpenseTotal/transportationBudget) > 1) {
                $("#panelHeading").css("background-color", "red");
            }else {
                $("#panelHeading").css("background-color", "#23ABF");
            }

            var personalRemainder = personalBudget - personalExpenseTotal;
            $("#personalBudgetRemainder").append(personalRemainder);
            if ((personalExpenseTotal/personalBudget) >= .80) {
                $("#panelHeading").css("background-color", "yellow");
            }else if ((personalExpenseTotal/personalBudget) > 1) {
                $("#panelHeading").css("background-color", "red");
            }else {
                $("#panelHeading").css("background-color", "#23ABF");
            }

            var entertainmentRemainder = entertainmentBudget - entertainmentExpenseTotal;
            $("#entertainmentBudgetRemainder").append(entertainmentRemainder);
            if ((entertainmentExpenseTotal/entertainmentBudget) >= .80) {
                $("#panelHeading").css("background-color", "yellow");
            }else if ((entertainmentExpenseTotal/entertainmentBudget) > 1) {
                $("#panelHeading").css("background-color", "red");
            }else {
                $("#panelHeading").css("background-color", "#23ABF");
            }

            var debtRemainder = debtBudget - debtExpenseTotal;
            $("#debtBudgetRemainder").append(debtRemainder);
            if ((debtExpenseTotal/debtBudget) >= .80) {
                $("#panelHeading").css("background-color", "yellow");
            }else if ((debtExpenseTotal/debtBudget) > 1) {
                $("#panelHeading").css("background-color", "red");
            }else {
                $("#panelHeading").css("background-color", "#23ABF");
            }
        });
    });
});

$("#expenseSubmit").on("click", function() {
    var expenseData = {
        month: month,
        category: $("#category").val(),
        expenseName: $("#expenseName").val(),
        expenseAmount: $("#expenseAmount").val()
    };

    console.log("expenseData", expenseData);

    $.post("/expenseData", expenseData).then(function(response) {
        console.log("POSTED");
    });
    window.location.reload(false);

    $.get("/allexpenseresults", function(expenseResults) {
        console.log(expenseResults);
    });
});