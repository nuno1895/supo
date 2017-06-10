$("#budgetBtn7").on("click", function() {
    var budgetObject = {
    	medications: $("#medications").val(),
    	doctorBills: $("#doctorBills").val(),
    	hospitalBills: $("#hospitalBills").val(),
    	otherMedical1: $("#otherMedical1").val(),
    	otherMedical2: $("#otherMedical2").val(),
    	otherMedical3: $("#otherMedical3").val()
    };
    console.log("budgetObject form 7", budgetObject);
    localStorage.setItem("budgetForm7", JSON.stringify(budgetObject));

    window.location.href = "/budgetForm/8";
});