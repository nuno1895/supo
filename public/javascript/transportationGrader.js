$(document).ready(function() {
	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm9 = JSON.parse(localStorage.getItem("budgetForm9"));
	console.log("budgetForm9", budgetForm9);

	var transportationBudget = parseInt(budgetForm9.carFuel) + parseInt(budgetForm9.carRepairs) + parseInt(budgetForm9.bus) + parseInt(budgetForm9.train) + parseInt(budgetForm9.newCarFund) + parseInt(budgetForm9.otherTransportation);
	console.log("transportationBudget", transportationBudget);

	var totalTransportationBudget = $("<h2>Your total transportation budget is: " + transportationBudget + "</h2>");
	var percentOfBudget = $("<h2>Your transportation budget is " + (transportationBudget * 100)/totalPay + "% of your total budget.</h2>");
	var suggestedBudgetPercent = 15;
	var percentDiff = percentOfBudget - suggestedBudgetPercent;
	//-------------------------------------------------------------
	// var grade = grader.getGrade(percentDiff);
	// console.log(grade);
	// var transportationGrade = $("<h5>Your grade is: " + grade + "</h5>");
	//--------------------------------------------------------------
	$("#budgetTotal").append(totalTransportationBudget);
	$("#budgetPercent").append(percentOfBudget);
	// $("#budgetGrade").append(medicalGrade);
});

$("#transportationGraderBack").on("click", function() {
	window.location.href = "/budgetForm/9";
});

$("#transportationGraderNext").on("click", function() {
	window.location.href = "/budgetForm/10";
});