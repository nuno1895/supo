$(document).ready(function() {
	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm6 = JSON.parse(localStorage.getItem("budgetForm6"));
	console.log("budgetForm6", budgetForm6);

	var savingsBudget = parseInt(budgetForm6.emergencyFund) + parseInt(budgetForm6.retirementFund) + parseInt(budgetForm6.collegeFund);
	console.log("savingsBudget", savingsBudget);

	var totalSavingsBudget = $("<h2>Your total savings budget is: " + savingsBudget + "</h2>");
	var percentOfBudget = $("<h2>Your savings budget is " + (savingsBudget * 100)/totalPay + "% of your total budget.</h2>");
	var suggestedBudgetPercent = 15;
	var percentDiff = percentOfBudget - suggestedBudgetPercent;
	//-------------------------------------------------------------
	// var grade = grader.getGrade(percentDiff);
	// console.log(grade);
	// var savingsGrade = $("<h5>Your grade is: " + grade + "</h5>");
	//--------------------------------------------------------------
	$("#budgetTotal").append(totalSavingsBudget);
	$("#budgetPercent").append(percentOfBudget);
	// $("#budgetGrade").append(savingsGrade);
});

$("#savingsGraderBack").on("click", function() {
	window.location.href = "/budgetForm/6";
});

$("#savingsGraderNext").on("click", function() {
	window.location.href = "/budgetForm/7";
});