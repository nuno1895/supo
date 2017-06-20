$(document).ready(function() {
    $.get("/allbudgetdata", function(budgetData) {
        console.log(budgetData);
    });
});