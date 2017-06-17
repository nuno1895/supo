$(document).ready(function() {
	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm12 = JSON.parse(localStorage.getItem("budgetForm12"));
	console.log("budgetForm12", budgetForm12);

	var debtBudget = parseInt(budgetForm12.carPayment1) + parseInt(budgetForm12.carPayment2) + parseInt(budgetForm12.creditCard1) + parseInt(budgetForm12.creditCard2) + parseInt(budgetForm12.creditCard3) + parseInt(budgetForm12.creditCard4) + parseInt(budgetForm12.creditCard5) + parseInt(budgetForm12.creditCard6) + parseInt(budgetForm12.studentLoan1) + parseInt(budgetForm12.studentLoan2) + parseInt(budgetForm12.studentLoan3) + parseInt(budgetForm12.studentLoan4) + parseInt(budgetForm12.debt1) + parseInt(budgetForm12.debt2) + parseInt(budgetForm12.debt3) + parseInt(budgetForm12.debt4);
	console.log("debtBudget", debtBudget);

	var totalDebtBudget = $("<h2>Your total debt budget is: " + debtBudget + "</h2>");
	var percentOfBudget = $("<h2>Your debt budget is " + (debtBudget * 120)/totalPay + "% of your total budget.</h2>");
	var suggestedBudgetPercent = 15;
	var percentDiff = percentOfBudget - suggestedBudgetPercent;
	//-------------------------------------------------------------
	// var grade = grader.getGrade(percentDiff);
	// console.log(grade);
	// var debtGrade = $("<h5>Your grade is: " + grade + "</h5>");
	//--------------------------------------------------------------
	$("#budgetTotal").append(totalDebtBudget);
	$("#budgetPercent").append(percentOfBudget);
	// $("#budgetGrade").append(medicalGrade);
});

$("#debtGraderBack").on("click", function() {
	window.location.href = "/budgetForm/12";
});

$("#debtGraderNext").on("click", function() {
	window.location.href = "/budgetresults";
});