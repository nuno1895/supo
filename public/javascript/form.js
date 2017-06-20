$("#budgetBtn").on("click", function() {
    var totalPay = $("#takehome").val() * $("#frequency").val();
    var budgetObject = {
        name: $("#name").val(),
        month: $("#month").val(),
        takehome: $("#takehome").val(),
        frequency: $("#frequency").val(),
        totalPay: totalPay
    };
    console.log("budgetObject form 1:", budgetObject);
    localStorage.setItem("budgetForm", JSON.stringify(budgetObject))
    window.location.href = "/budgetForm/2";
});