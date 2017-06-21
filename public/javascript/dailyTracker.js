var month;

$(document).ready(function() {
    var currentBudget = 0;

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

    $.get("/allexpenseresults", function(expenseResults) {
        console.log(expenseResults);
    });

    $.get("/expensedata", function(budgetData) {
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
            console.log(budgetData);
            var budgetId = $('.budgetCompareSelector').val();
            console.log("BUDGETID: ", budgetId);

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