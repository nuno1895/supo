$("#budgetBtn12").on("click", function() {
	var budgetObject = {
		carPayment1: $("#carPayment1").val(),
		carPayment2: $("#carPayment2").val(),
		creditCard1: $("#creditCard1").val(),
		creditCard2: $("#creditCard2").val(),
		creditCard3: $("#creditCard3").val(),
		creditCard4: $("#creditCard4").val(),
		creditCard5: $("#creditCard5").val(),
		creditCard6: $("#creditCard6").val(),
		studentLoan1: $("#studentLoan1").val(),
		studentLoan2: $("#studentLoan2").val(),
		studentLoan3: $("#studentLoan3").val(),
		studentLoan4: $("#studentLoan4").val(),
		debt1: $("#debt1").val(),
		debt2: $("#debt2").val(),
		debt3: $("#debt3").val(),
		debt4: $("#debt4").val()
	};
	console.log("budgetObject form 12", budgetObject);
	localStorage.setItem("budgetForm12", JSON.stringify(budgetObject));

	var dataToPost = {
		budgetForm: JSON.parse(localStorage.getItem("budgetForm")),
		budgetForm2: JSON.parse(localStorage.getItem("budgetForm2")),
		budgetForm3: JSON.parse(localStorage.getItem("budgetForm3")),
		budgetForm4: JSON.parse(localStorage.getItem("budgetForm4")),
		budgetForm5: JSON.parse(localStorage.getItem("budgetForm5")),
		budgetForm6: JSON.parse(localStorage.getItem("budgetForm6")),
		budgetForm7: JSON.parse(localStorage.getItem("budgetForm7")),
		budgetForm8: JSON.parse(localStorage.getItem("budgetForm8")),
		budgetForm9: JSON.parse(localStorage.getItem("budgetForm9")),
		budgetForm10: JSON.parse(localStorage.getItem("budgetForm10")),
		budgetForm11: JSON.parse(localStorage.getItem("budgetForm11")),
		budgetForm12: JSON.parse(localStorage.getItem("budgetForm12")),
	};

	console.log("dataToPost", dataToPost);

	$.post("/budgetdata", dataToPost).then(function(response) {
		console.log("POSTED");
	});
});



$("#budgetBtn12Back").on("click", function() {
    window.location.href = "/budgetForm/11";     
});