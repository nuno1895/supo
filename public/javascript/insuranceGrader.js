$(document).ready(function() {
	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm8 = JSON.parse(localStorage.getItem("budgetForm8"));
	console.log("budgetForm8", budgetForm8);

	var insuranceBudget = parseInt(budgetForm8.lifeInsurance) + parseInt(budgetForm8.healthInsurance) + parseInt(budgetForm8.autoInsurance) + parseInt(budgetForm8.homeRentalInsurance) + parseInt(budgetForm8.disabilityInsurance) + parseInt(budgetForm8.longTermInsurance);
	console.log("insuranceBudget", insuranceBudget);

	var totalInsuranceBudget = $("<h2>Your total insurance budget is: " + insuranceBudget + "</h2>");
	var percentOfBudget = $("<h2>Your insurance budget is " + (insuranceBudget * 100)/totalPay + "% of your total budget.</h2>");
	var suggestedBudgetPercent = 15;
	var percentDiff = percentOfBudget - suggestedBudgetPercent;
	//-------------------------------------------------------------
	// var grade = grader.getGrade(percentDiff);
	// console.log(grade);
	// var insuranceGrade = $("<h5>Your grade is: " + grade + "</h5>");
	//--------------------------------------------------------------
	$("#budgetTotal").append(totalInsuranceBudget);
	$("#budgetPercent").append(percentOfBudget);
	// $("#budgetGrade").append(medicalGrade);
});

$("#insuranceGraderBack").on("click", function() {
	window.location.href = "/budgetForm/8";
});

$("#insuranceGraderNext").on("click", function() {
	window.location.href = "/budgetForm/9";
});