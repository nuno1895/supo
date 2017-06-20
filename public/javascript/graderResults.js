$(document).ready(function() {
    $.get("/expensedata", function(budgetData) {
        console.log(budgetData);
    });
});