$(document).ready(function() {

	$('#collapseAdvice').collapse("hide");

	
	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm4 = JSON.parse(localStorage.getItem("budgetForm4"));
	console.log("budgetForm4", budgetForm4);

	var utilitiesBudget = parseInt(budgetForm4.electricity) + parseInt(budgetForm4.mobilePhone) + parseInt(budgetForm4.gas)+ parseInt(budgetForm4.trash) + parseInt(budgetForm4.water) + parseInt(budgetForm4.internet) + parseInt(budgetForm4.cable);
	console.log("utilitiesBudget", utilitiesBudget);

	var utilitiesBudgetPercent = (utilitiesBudget*100)/totalPay;

	var totalUtilitiesBudget = $("<h2>Your total utilities budget is: " + utilitiesBudget + "</h2>");
	var percentOfBudget = $("<h2>Your utilities budget is " + utilitiesBudgetPercent + "% of your total budget.</h2>");

	var suggestedBudgetPercent = 10;

	var percentDiff = utilitiesBudgetPercent - suggestedBudgetPercent;
	console.log(percentDiff);

	var grade = getGrade(percentDiff);
	console.log(grade);
	var utilitiesGrade = $("<h4>Your grade is: " + grade + "</h4>");
	localStorage.setItem("utilitiesGrade", grade);

	 let utilitiesAdvice;

	if (grade === "A+") {
	          utilitiesAdvice = advice.utilities[1];
	      } else if (grade === "A-") {
	          utilitiesAdvice = advice.utilities[2].slice(0, 2);
	      }
	      else if (grade === "B+") {
	          utilitiesAdvice = advice.utilities[2].slice(0, 4);
	      }
	      else if (grade === "B-") {
	          utilitiesAdvice = advice.utilities[2].slice(0, 6);
	      }
	      else if (grade === "C+") {
	          utilitiesAdvice = advice.utilities[2].slice(0, 8);       
	      }
	      else if (grade === "C-") {
	          utilitiesAdvice = advice.utilities[2].slice(0, 12);       
	      }
	       else if (grade === "D") {
	          utilitiesAdvice = advice.utilities[2].slice(0, 14);       
	      }
	       else if (grade === "D-") {
	          utilitiesAdvice = advice.utilities[2].slice(0, 16);       
	      }
	        else {
	          utilitiesAdvice = advice.utilities[2];
	      }


	$("#budgetTotal").append(totalUtilitiesBudget);
	$("#budgetPercent").append(percentOfBudget);
	$("#budgetGrade").append(utilitiesGrade);

	if(grade == 'A+'){
	    $("#advice").hide();
	    $("#aplus").append(utilitiesAdvice);
	} else{
	    for(var i = 0; i < utilitiesAdvice.length; i++){
	        $(".list-group").append("<li class='list-group-item'>" + utilitiesAdvice[i] + "</li>");
	    }
	}

});

$("#utilitiesGraderBack").on("click", function() {
    window.location.href = "/budgetForm/4";
});

$("#utilitiesGraderNext").on("click", function() {
    window.location.href = "/budgetForm/5";
});