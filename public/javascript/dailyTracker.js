var month;

$(document).ready(function() {
    var currentBudget = 0;
    var currentDataBudget;
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

        console.log($('.budgetCompareSelector').val());
        $.get("/expensedata", function(budgetData) {
            var budgetId = $('.budgetCompareSelector').val();
            console.log("BUDGETID: ", budgetId);
            currentDataBudget = budgetId;
            console.log("CurrentB: " + currentBudget);
            for (var i = 0; i < budgetData.length; i++) {
                if (budgetData[i].id == budgetId) {
                    console.log(budgetData[i]);
                    currentBudget = budgetData[i];
                    $("#foodBudget").html(currentBudget.foodTotal);
                    $("#clothingBudget").html(currentBudget.clothingTotal);
                    $("#utilitiesBudget").html(currentBudget.utilitiesTotal);
                    $("#housingBudget").html(currentBudget.housingTotal);
                    $("#savingsBudget").html(currentBudget.savingsTotal);
                    $("#medicalBudget").html(currentBudget.medicalTotal);
                    $("#insuranceBudget").html(currentBudget.InsuranceTotal);
                    $("#transportationBudget").html(currentBudget.transportationTotal);
                    $("#personalBudget").html(currentBudget.personalTotal);
                    $("#entertainmentBudget").html(currentBudget.entertainmentTotal);
                    $("#debtBudget").html(currentBudget.debtTotal);
                }
            }
            // for (var i = 0; i < expenses.length; i++) {
            //     console.log("Expense Loop: " + expenses);
            // }

        });
        $.get("/allexpenseresults", function(expenses) {
            console.log("Current Budget: " + currentDataBudget);
            for (var i = 0; i < expenses.length; i++) {
                console.log("Expense Loop: " + expenses[i]);
                console.log("EXPENSES BITCH: " + expenses[i].BudgetId);
                console.log("Current Budget: " + currentBudget);

                if (expenses[i].BudgetId == currentDataBudget && expenses[i].category == "food") {
                    $("#foodCategory").append("<li class='list-group-item'>" + expenses[i].expenseName + ": " + expenses[i].expenseAmount + " " + expenses[i].createdAt + "</li>");
                } else {
                    console.log("FUCKYOU");
                }
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