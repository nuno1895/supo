$("#budgetBtn11").on("click", function() {
    var budgetObject = {
        entertainment: $("#entertainment").val(),
        vacation: $("#vacation").val()
    };
    console.log("budgetObject form 11", budgetObject);
    localStorage.setItem("budgetForm11", JSON.stringify(budgetObject));

    window.location.href = "/budgetForm/12";
});