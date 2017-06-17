$("#budgetBtn9").on("click", function() {
    var transportationTotal = parseInt($("#carFuel").val()) + parseInt($("#carRepairs").val()) + parseInt($("#bus").val()) + parseInt($("#train").val()) + parseInt($("#newCarFund").val()) + parseInt($("#otherTransportation").val());
    var budgetObject = {
    	carFuel: $("#carFuel").val(),
        carRepairs: $("#carRepairs").val(),
        bus: $("#bus").val(),
        train: $("#train").val(),
        newCarFund: $("#newCarFund").val(),
        otherTransportation: $("#otherTransportation").val(),
        transportationTotal: transportationTotal
    };
    console.log("budgetObject form 9", budgetObject);
    localStorage.setItem("budgetForm9", JSON.stringify(budgetObject));

    window.location.href = "/grader/transportation";
});

$("#budgetBtn9Back").on("click", function() {
    window.location.href = "/budgetForm/8";     
});