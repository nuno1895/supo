$(document).ready(function() {
	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm7 = JSON.parse(localStorage.getItem("budgetForm7"));
	console.log("budgetForm7", budgetForm7);

	var medicalBudget = parseInt(budgetForm7.medications) + parseInt(budgetForm7.doctorBills) + parseInt(budgetForm7.hospitalBills) + parseInt(budgetForm7.otherMedical1) + parseInt(budgetForm7.otherMedical2) + parseInt(budgetForm7.otherMedical3);
	console.log("medicalBudget", medicalBudget);

	var totalMedicalBudget = $("<h2>Your total medical budget is: " + medicalBudget + "</h2>");
	var percentOfBudget = $("<h2>Your medical budget is " + (medicalBudget * 100)/totalPay + "% of your total budget.</h2>");
	var suggestedBudgetPercent = 15;
	var percentDiff = percentOfBudget - suggestedBudgetPercent;
	//-------------------------------------------------------------
	// var grade = grader.getGrade(percentDiff);
	// console.log(grade);
	// var medicalGrade = $("<h5>Your grade is: " + grade + "</h5>");
	//--------------------------------------------------------------
	$("#budgetTotal").append(totalMedicalBudget);
	$("#budgetPercent").append(percentOfBudget);
	// $("#budgetGrade").append(medicalGrade);
});

$("#medicalGraderBack").on("click", function() {
	window.location.href = "/budgetForm/7";
});

$("#medicalGraderNext").on("click", function() {
	window.location.href = "/budgetForm/8";
});