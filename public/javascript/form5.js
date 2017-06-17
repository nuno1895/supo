$("#budgetBtn5").on("click", function() {
    var housingTotal = parseInt($("#mortgageRent").val()) + parseInt($("#secondMortgage").val()) + parseInt($("#taxes").val()) + parseInt($("#repairsMaint").val()) + parseInt($("#dues").val());
    var budgetObject = {
        mortgageRent: $("#mortgageRent").val(),
        secondMortgage: $("#secondMortgage").val(),
        taxes: $("#taxes").val(),
        repairsMaint: $("#repairsMaint").val(),
        dues: $("#dues").val(),
        housingTotal: housingTotal
    };
    console.log("budgetObject form 5", budgetObject);
    localStorage.setItem("budgetForm5", JSON.stringify(budgetObject));

    window.location.href = "/grader/housing";
});

$("#budgetBtn5Back").on("click", function() {
    window.location.href = "/budgetForm/4";     
});