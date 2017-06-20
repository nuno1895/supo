var month;

$(document).ready(function() {

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
        console.log(budgetData);
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
});