$(document).ready(function() {
    $('#collapseAdvice').collapse("hide");


	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm10 = JSON.parse(localStorage.getItem("budgetForm10"));
	console.log("budgetForm10", budgetForm10);

	var personalBudget = parseInt(budgetForm10.personalTotal);
	console.log("personalBudget", personalBudget);

	var personalBudgetPercent = (personalBudget*100)/totalPay;

	var totalPersonalBudget = $("<h2>Your total personal budget is: " + personalBudget + "</h2>");
	var percentOfBudget = $("<h2>Your personal budget is " + personalBudgetPercent + "% of your total budget.</h2>");

	var suggestedBudgetPercent = 7;

	var percentDiff = personalBudgetPercent - suggestedBudgetPercent;
	console.log(percentDiff);

	var grade = getGrade(percentDiff);
	console.log(grade);
	var personalGrade = $("<h5>Your grade is: " + grade + "</h5>");
    localStorage.setItem("personalGrade", grade);

	let personalAdvice;

    if (grade === "A+") {
        personalAdvice = advice.personal[1];
    } else if (grade === "A-") {
        personalAdvice = advice.personal[2].slice(0, 0);
    }
    else if (grade === "B+") {
        personalAdvice = advice.personal[2].slice(0, 1);
    }
    else if (grade === "B-") {
        personalAdvice = advice.personal[2].slice(0, 2);
    }
    else if (grade === "C+") {
        personalAdvice = advice.personal[2].slice(0, 3);       
    }
    else if (grade === "C-") {
        personalAdvice = advice.personal[2].slice(0, 3);       
    }
     else if (grade === "D") {
        personalAdvice = advice.personal[2].slice(0, 4);       
    }
     else if (grade === "D-") {
        personalAdvice = advice.personal[2].slice(0, 4);       
    }
      else {
        personalAdvice = advice.personal[2];
    }

	$("#budgetTotal").append(totalPersonalBudget);
	$("#budgetPercent").append(percentOfBudget);
	$("#budgetGrade").append(personalGrade);

    if(grade == 'A+'){
        $("#advice").hide();
        $("#aplus").append(personalAdvice);
    } else{
        for(var i = 0; i < personalAdvice.length; i++){
            $(".list-group").append("<li class='list-group-item'>" + foodAdvice[i] + "</li>");
        }
    }
});

$("#personalGraderBack").on("click", function() {
	window.location.href = "/budgetForm/10";
});

$("#personalGraderNext").on("click", function() {
	window.location.href = "/budgetForm/11";
});