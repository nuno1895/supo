$(document).ready(function() {
	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm5 = JSON.parse(localStorage.getItem("budgetForm5"));
	console.log("budgetForm5", budgetForm5);

	var housingBudget = parseInt(budgetForm5.mortgageRent) + parseInt(budgetForm5.secondMortgage) + parseInt(budgetForm5.taxes) + parseInt(budgetForm5.repairsMaint) + parseInt(budgetForm5.dues);
	console.log("housingBudget", housingBudget);

	var housingBudgetPercent = (housingBudget*100)/totalPay;

	var totalHousingBudget = $("<h2>Your total housing budget is: " + housingBudget + "</h2>");
	var percentOfBudget = $("<h2>Your housing budget is " + housingBudgetPercent + "% of your total budget.</h2>");

	var suggestedBudgetPercent = 35;

	var percentDiff = housingBudgetPercent - suggestedBudgetPercent;
	console.log(percentDiff);

	var grade = getGrade(percentDiff);
	console.log(grade);
	var housingGrade = $("<h5>Your grade is: " + grade + "</h5>");

	$("#budgetTotal").append(totalHousingBudget);
	$("#budgetPercent").append(percentOfBudget);
	$("#budgetGrade").append(housingGrade);
});

$("#housingGraderBack").on("click", function() {
	window.location.href = "/budgetForm/5";
});

$("#housingGraderNext").on("click", function() {
	window.location.href = "/budgetForm/6";
});