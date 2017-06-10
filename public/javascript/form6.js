$("#budgetBtn6").on("click", function() {
    var budgetObject = {
        emergencyFund: $("#emergencyFund").val(),
        retirementFund: $("#retirementFund").val(),
        collegeFund: $("#collegeFund").val()
    };
    console.log("budgetObject form 6", budgetObject);
    localStorage.setItem("budgetForm6", JSON.stringify(budgetObject));

    window.location.href = "/budgetForm/7";
});