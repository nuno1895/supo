$(document).ready(function() {
	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm3 = JSON.parse(localStorage.getItem("budgetForm3"));
	console.log("budgetForm3", budgetForm3);

	var clothingBudget = parseInt(budgetForm3.clothingAdult) + parseInt(budgetForm3.clothingKids) + parseInt(budgetForm3.dryCleaning);
	console.log("clothingBudget", clothingBudget);

	var clothingBudgetPercent = (clothingBudget*100)/totalPay;

	var totalclothingBudget = $("<h2>Your total clothing budget is: " + clothingBudget + "</h2>");
	var percentOfBudget = $("<h2>Your clothing budget is " + clothingBudgetPercent + "% of your total budget.</h2>");
	
	var suggestedBudgetPercent = 7;

	var percentDiff = clothingBudgetPercent - suggestedBudgetPercent;
	console.log(percentDiff);

	var grade = getGrade(percentDiff);
	console.log(grade);
	var clothingGrade = $("<h4>Your grade is: " + grade + "</h4>");

	$("#budgetTotal").append(totalclothingBudget);
	$("#budgetPercent").append(percentOfBudget);
	$("#budgetGrade").append(clothingGrade);
});

$("#clothingGraderBack").on("click", function() {
	window.location.href = "/budgetForm/3";
});

$("#clothingGraderNext").on("click", function() {
	window.location.href = "/budgetForm/4";
});