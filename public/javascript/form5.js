$("#budgetBtn5").on("click", function() {
    var budgetObject = {
        mortgageRent: $("#mortgageRent").val(),
        secondMortgage: $("#secondMortgage").val(),
        taxes: $("#taxes").val(),
        repairsMaint: $("#repairsMaint").val(),
        dues: $("#dues").val()
    };
    console.log("budgetObject form 5", budgetObject);
    localStorage.setItem("budgetForm5", JSON.stringify(budgetObject));

    window.location.href = "/budgetForm/6";
});

$("#budgetBtn5Back").on("click", function() {
    window.location.href = "/budgetForm/4";     
});