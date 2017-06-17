$("#budgetBtn6").on("click", function() {
	var savingsTotal = parseInt($("#emergencyFund").val()) + parseInt($("#retirementFund").val()) + parseInt($("#collegeFund").val());
    var budgetObject = {
        emergencyFund: $("#emergencyFund").val(),
        retirementFund: $("#retirementFund").val(),
        collegeFund: $("#collegeFund").val(),
        savingsTotal: savingsTotal
    };
    console.log("budgetObject form 6", budgetObject);
    localStorage.setItem("budgetForm6", JSON.stringify(budgetObject));

    window.location.href = "/grader/savings";
});

$("#budgetBtn6Back").on("click", function() {
    window.location.href = "/grader/housing";    
});