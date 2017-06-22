$(document).ready(function() {

      $('#collapseAdvice').collapse("hide");

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

  localStorage.setItem("clothingGrade", grade);

	let clothingAdvice;

     if (grade === "A+") {
               clothingAdvice = advice.clothing[1];
           } else if (grade === "A-") {
               clothingAdvice = advice.clothing[2].slice(0, 2);
           }
           else if (grade === "B+") {
               clothingAdvice = advice.clothing[2].slice(0, 4);
           }
           else if (grade === "B-") {
               clothingAdvice = advice.clothing[2].slice(0, 6);
           }
           else if (grade === "C+") {
               clothingAdvice = advice.clothing[2].slice(0, 8);       
           }
           else if (grade === "C-") {
               clothingAdvice = advice.clothing[2].slice(0, 12);       
           }
            else if (grade === "D") {
               clothingAdvice = advice.clothing[2].slice(0, 14);       
           }
            else if (grade === "D-") {
               clothingAdvice = advice.clothing[2].slice(0, 16);       
           }
             else {
               clothingAdvice = advice.clothing[2];
           }

	$("#budgetTotal").append(totalclothingBudget);
	$("#budgetPercent").append(percentOfBudget);
	$("#budgetGrade").append(clothingGrade);
    if(grade == 'A+'){
        $("#advice").hide();
        $("#aplus").append(clothingAdvice);
    } else{
        for(var i = 0; i < clothingAdvice.length; i++){
            $(".list-group").append("<li class='list-group-item'>" + clothingAdvice[i] + "</li>");

        }
    }
});

$("#clothingGraderBack").on("click", function() {
    window.location.href = "/budgetForm/3";
});

$("#clothingGraderNext").on("click", function() {
    window.location.href = "/budgetForm/4";
});