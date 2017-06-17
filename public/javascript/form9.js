$("#budgetBtn9").on("click", function() {
    var budgetObject = {
    	carFuel: $("#carFuel").val(),
        carRepairs: $("#carRepairs").val(),
        bus: $("#bus").val(),
        train: $("#train").val(),
        newCarFund: $("#newCarFund").val(),
        otherTransportation: $("#otherTransportation").val()
    };
    console.log("budgetObject form 9", budgetObject);
    localStorage.setItem("budgetForm9", JSON.stringify(budgetObject));

    window.location.href = "/grader/transportation";
});

$("#budgetBtn9Back").on("click", function() {
    window.location.href = "/budgetForm/8";     
});