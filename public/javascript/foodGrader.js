// var grader = require("./grader.js"); <-- shits broke

$(document).ready(function() {
	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm2 = JSON.parse(localStorage.getItem("budgetForm2"));
	console.log("budgetForm2", budgetForm2);

	var foodBudget = parseInt(budgetForm2.groceries) + parseInt(budgetForm2.eatingout);
	console.log("foodBudget", foodBudget);

	var totalFoodBudget = $("<h2>Your total food budget is: " + foodBudget + "</h2>");
	var percentOfBudget = $("<h2>Your food budget is " + (foodBudget * 100)/totalPay + "% of your total budget.</h2>");
	var suggestedBudgetPercent = 15;
	var percentDiff = percentOfBudget - suggestedBudgetPercent;
	//-------------------------------------------------------------
	// var grade = grader.getGrade(percentDiff);
	// console.log(grade);
	// var foodGrade = $("<h4>Your grade is: " + grade + "</h4>");
	//--------------------------------------------------------------
	$("#budgetTotal").append(totalFoodBudget);
	$("#budgetPercent").append(percentOfBudget);
	// $("#budgetGrade").append(foodGrade);
});

$("#foodGraderBack").on("click", function() {
	window.location.href = "/budgetForm/2";
});

$("#foodGraderNext").on("click", function() {
	window.location.href = "/budgetForm/3";
});