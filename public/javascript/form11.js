$("#budgetBtn11").on("click", function() {
	var entertainmentTotal = parseInt($("#entertainment").val()) + parseInt($("#vacation").val());
    var budgetObject = {
        entertainment: $("#entertainment").val(),
        vacation: $("#vacation").val(),
        entertainmentTotal: entertainmentTotal
    };
    console.log("budgetObject form 11", budgetObject);
    localStorage.setItem("budgetForm11", JSON.stringify(budgetObject));

    window.location.href = "/grader/entertainment"
});

$("#budgetBtn11Back").on("click", function() {
    window.location.href = "/budgetForm/10";     
});