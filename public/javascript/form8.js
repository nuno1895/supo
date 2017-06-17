$("#budgetBtn8").on("click", function() {
    var insuranceTotal = parseInt($("#lifeInsurance").val()) + parseInt($("#healthInsurance").val()) + parseInt($("#autoInsurance").val()) + parseInt($("#homeRentalInsurance").val()) + parseInt($("#disabilityInsurance").val()) + parseInt($("#longTermInsurance").val());
    var budgetObject = {
    	lifeInsurance: $("#lifeInsurance").val(),
    	healthInsurance: $("#healthInsurance").val(),
    	autoInsurance: $("#autoInsurance").val(),
    	homeRentalInsurance: $("#homeRentalInsurance").val(),
    	disabilityInsurance: $("#disabilityInsurance").val(),
    	longTermInsurance: $("#longTermInsurance").val(),
        insuranceTotal: insuranceTotal

    };
    console.log("budgetObject form 8", budgetObject);
    localStorage.setItem("budgetForm8", JSON.stringify(budgetObject));

    window.location.href = "/grader/insurance";
});

$("#budgetBtn8Back").on("click", function() {
    window.location.href = "/grader/medical";     
});