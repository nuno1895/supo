$(document).ready(function() {
    $('#collapseAdvice').collapse("hide");


	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm8 = JSON.parse(localStorage.getItem("budgetForm8"));
	console.log("budgetForm8", budgetForm8);

	var insuranceBudget = parseInt(budgetForm8.lifeInsurance) + parseInt(budgetForm8.healthInsurance) + parseInt(budgetForm8.autoInsurance) + parseInt(budgetForm8.homeRentalInsurance) + parseInt(budgetForm8.disabilityInsurance) + parseInt(budgetForm8.longTermInsurance);
	console.log("insuranceBudget", insuranceBudget);

	var insuranceBudgetPercent = (insuranceBudget*100)/totalPay;

	var totalInsuranceBudget = $("<h2>Your total insurance budget is: " + insuranceBudget + "</h2>");
	var percentOfBudget = $("<h2>Your insurance budget is " + insuranceBudgetPercent + "% of your total budget.</h2>");

	var suggestedBudgetPercent = 25;

	var percentDiff = insuranceBudgetPercent - suggestedBudgetPercent;
	console.log(percentDiff);

	var grade = getGrade(percentDiff);
	console.log(grade);
	var insuranceGrade = $("<h5>Your grade is: " + grade + "</h5>");
    localStorage.setItem("insuranceGrade", grade);

	let insuranceAdvice;

     if (grade === "A+") {
         insuranceAdvice = advice.insurance[1];
     } else if (grade === "A-") {
         insuranceAdvice = advice.insurance[2].slice(0, 1);
     }
     else if (grade === "B+") {
         insuranceAdvice = advice.insurance[2].slice(0, 2);
     }
     else if (grade === "B-") {
         insuranceAdvice = advice.insurance[2].slice(0, 3);
     }
     else if (grade === "C+") {
         insuranceAdvice = advice.insurance[2].slice(0, 5);       
     }
     else if (grade === "C-") {
         insuranceAdvice = advice.insurance[2].slice(0, 7);       
     }
      else if (grade === "D") {
         insuranceAdvice = advice.insurance[2].slice(0, 8);       
     }
      else if (grade === "D-") {
         insuranceAdvice = advice.insurance[2].slice(0, 10);       
     }
       else {
         insuranceAdvice = advice.insurance[2];
     }


	$("#budgetTotal").append(totalInsuranceBudget);
	$("#budgetPercent").append(percentOfBudget);
	$("#budgetGrade").append(insuranceGrade);

    if(grade == 'A+'){
        $("#advice").hide();
        $("#aplus").append(insuranceAdvice);
    } else{
        for(var i = 0; i < insuranceAdvice.length; i++){
            $(".list-group").append("<li class='list-group-item'>" + foodAdvice[i] + "</li>");
        }
    }

});

$("#insuranceGraderBack").on("click", function() {
	window.location.href = "/budgetForm/8";
});

$("#insuranceGraderNext").on("click", function() {
	window.location.href = "/budgetForm/9";
});