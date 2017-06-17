$(document).ready(function() {
	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm10 = JSON.parse(localStorage.getItem("budgetForm10"));
	console.log("budgetForm10", budgetForm10);

	var personalBudget = parseInt(budgetForm10.educationTuition) + parseInt(budgetForm10.childCare) + parseInt(budgetForm10.hairCareCosmetics) + parseInt(budgetForm10.bookSupplies) + parseInt(budgetForm10.childSupport) + parseInt(budgetForm10.alimony) + parseInt(budgetForm10.pocketMoney) + parseInt(budgetForm10.subscriptions) + parseInt(budgetForm10.babySupplies) + parseInt(budgetForm10.petSupplies) + parseInt(budgetForm10.otherPersonal1) + parseInt(budgetForm10.otherPersonal2) + parseInt(budgetForm10.otherPersonal3);
	console.log("personalBudget", personalBudget);

	var totalPersonalBudget = $("<h2>Your total personal budget is: " + personalBudget + "</h2>");
	var percentOfBudget = $("<h2>Your personal budget is " + (personalBudget * 100)/totalPay + "% of your total budget.</h2>");
	var suggestedBudgetPercent = 15;
	var percentDiff = percentOfBudget - suggestedBudgetPercent;
	//-------------------------------------------------------------
	// var grade = grader.getGrade(percentDiff);
	// console.log(grade);
	// var personalGrade = $("<h5>Your grade is: " + grade + "</h5>");
	//--------------------------------------------------------------
	$("#budgetTotal").append(totalPersonalBudget);
	$("#budgetPercent").append(percentOfBudget);
	// $("#budgetGrade").append(medicalGrade);
});

$("#personalGraderBack").on("click", function() {
	window.location.href = "/budgetForm/10";
});

$("#personalGraderNext").on("click", function() {
	window.location.href = "/budgetForm/11";
});