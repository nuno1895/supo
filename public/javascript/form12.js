$("#budgetBtn12").on("click", function() {
    // var debtTotal = parseInt($("#carPayment1").val()) + parseInt($("#carPayment2").val()) + parseInt($("#creditCard1").val()) + parseInt($("#creditCard2").val()) + parseInt($("#creditCard3").val()) + parseInt($("#creditCard4").val()) + parseInt($("#creditCard5").val()) + parseInt($("#creditCard6").val()) + parseInt($("#studentLoan1").val()) + parseInt($("#studentLoan2").val()) + parseInt($("#studentLoan3").val()) + parseInt($("#studentLoan4").val()) + parseInt($("#debt1").val()) + parseInt($("#debt2").val()) + parseInt($("#debt3").val()) + parseInt($("#debt4").val());
  
    var budgetObject = {
        carPayment1: $("#carPayment1").val(),
        carPayment2: $("#carPayment2").val(),
        creditCard1: $("#creditCard1").val(),
        creditCard2: $("#creditCard2").val(),
        creditCard3: $("#creditCard3").val(),
        creditCard4: $("#creditCard4").val(),
        creditCard5: $("#creditCard5").val(),
        creditCard6: $("#creditCard6").val(),
        studentLoan1: $("#studentLoan1").val(),
        studentLoan2: $("#studentLoan2").val(),
        studentLoan3: $("#studentLoan3").val(),
        studentLoan4: $("#studentLoan4").val(),
        debt1: $("#debt1").val(),
        debt2: $("#debt2").val(),
        debt3: $("#debt3").val(),
        debt4: $("#debt4").val()
    };

    var carPayment1;
    var carPayment2;
    var creditCard1;
    var creditCard2;
    var creditCard3;
    var creditCard4;
    var creditCard5;
    var creditCard6;
    var studentLoan1;
    var studentLoan2;
    var studentLoan3;
    var studentLoan4;
    var debt1;
    var debt2;
    var debt3;
    var debt4;

    if(budgetObject.carPayment1 === undefined) {
        carPayment1 = 0;
    } else carPayment1 = parseInt(budgetObject.carPayment1);

    if(budgetObject.carPayment2 === undefined) {
        carPayment2 = 0;
    } else carPayment2 = parseInt(budgetObject.carPayment2);

    if(budgetObject.creditCard1 === undefined) {
        creditCard1 = 0;
    } else creditCard1 = parseInt(budgetObject.creditCard1);

    if(budgetObject.creditCard2 === undefined) {
        creditCard2 = 0;
    } else creditCard2 = parseInt(budgetObject.creditCard2);

    if(budgetObject.creditCard3 === undefined) {
        creditCard3 = 0;
    } else creditCard3 = parseInt(budgetObject.creditCard3);

    if(budgetObject.creditCard4 === undefined) {
        creditCard4 = 0;
    } else creditCard4 = parseInt(budgetObject.creditCard4);

    if(budgetObject.creditCard5 === undefined) {
        creditCard5 = 0;
    } else creditCard5 = parseInt(budgetObject.creditCard5);

    if(budgetObject.creditCard6 === undefined) {
        creditCard6 = 0;
    } else creditCard6 = parseInt(budgetObject.creditCard6);

    if(budgetObject.studentLoan1 === undefined) {
        studentLoan1 = 0;
    } else studentLoan1 = parseInt(budgetObject.studentLoan1);

    if(budgetObject.studentLoan2 === undefined) {
        studentLoan2 = 0;
    } else studentLoan2 = parseInt(budgetObject.studentLoan2);

    if(budgetObject.studentLoan3 === undefined) {
        studentLoan3 = 0;
    } else studentLoan3 = parseInt(budgetObject.studentLoan3);

    if(budgetObject.studentLoan4 === undefined) {
        studentLoan4 = 0;
    } else studentLoan4 = parseInt(budgetObject.studentLoan4);

    if(budgetObject.debt1 === undefined) {
        debt1 = 0;
    } else debt1 = parseInt(budgetObject.debt1);

    if(budgetObject.debt2 === undefined) {
        debt2 = 0;
    } else debt2 = parseInt(budgetObject.debt2);

    if(budgetObject.debt3 === undefined) {
        debt3 = 0;
    } else debt3 = parseInt(budgetObject.debt3);

    if(budgetObject.debt4 === undefined) {
        debt4 = 0;
    } else debt4 = parseInt(budgetObject.debt4);

    var debtTotal = carPayment1 + carPayment2 + creditCard1 + creditCard2 + creditCard3 + 
    creditCard4 + creditCard5 + creditCard6 + studentLoan1 + studentLoan2 + studentLoan3 + studentLoan4 + debt1 + debt2 + debt3 + debt4;

    budgetObject.debtTotal = debtTotal;

    console.log("budgetObject form 12", budgetObject);
    localStorage.setItem("budgetForm12", JSON.stringify(budgetObject));
    
    var dataToPost = {
        budgetForm: JSON.parse(localStorage.getItem("budgetForm")),
        budgetForm2: JSON.parse(localStorage.getItem("budgetForm2")),
        budgetForm3: JSON.parse(localStorage.getItem("budgetForm3")),
        budgetForm4: JSON.parse(localStorage.getItem("budgetForm4")),
        budgetForm5: JSON.parse(localStorage.getItem("budgetForm5")),
        budgetForm6: JSON.parse(localStorage.getItem("budgetForm6")),
        budgetForm7: JSON.parse(localStorage.getItem("budgetForm7")),
        budgetForm8: JSON.parse(localStorage.getItem("budgetForm8")),
        budgetForm9: JSON.parse(localStorage.getItem("budgetForm9")),
        budgetForm10: JSON.parse(localStorage.getItem("budgetForm10")),
        budgetForm11: JSON.parse(localStorage.getItem("budgetForm11")),
        budgetForm12: JSON.parse(localStorage.getItem("budgetForm12")),
    };

    console.log("dataToPost", dataToPost);

    $.post("/budgetdata", dataToPost).then(function(response) {
        console.log("POSTED");

        window.location.href = "/grader/debt"
        // window.location.href = "/budgetresults";
    });
});

var carBillCount = 1;

$("#addCarBill").on("click", function(){

    var carBillDiv = $("<div class='form-group'>");
    var carBillLabel = $("<label for='carPayment" + carBillCount + "'>Car Payment " + carBillCount + ":</label>");
    var carBillInput = $("<input type='text' class='form-control' id='carPayment" + carBillCount + "'>");

    carBillDiv.append(carBillLabel).append(carBillInput);

    $('#carPaymentsDiv').append(carBillDiv);

    if(carBillCount === 2) {
        document.getElementById("addCarBill").disabled = true;
    } else carBillCount++;
});

var creditCardBillCount = 1;

$("#addCreditCardBill").on("click", function(){

    var creditCardBillDiv = $("<div class='form-group'>");
    var creditCardBillLabel = $("<label for='creditCard" + creditCardBillCount + "'>Credit Card " + creditCardBillCount + ":</label>");
    var creditCardBillInput = $("<input type='text' class='form-control' id='creditCard" + creditCardBillCount + "'>");

    creditCardBillDiv.append(creditCardBillLabel).append(creditCardBillInput);

    $('#creditCardsDiv').append(creditCardBillDiv);

    if(creditCardBillCount === 6) {
        document.getElementById("addCreditCardBill").disabled = true;
    } else creditCardBillCount++;
});

var studentLoansCount = 1;

$("#addStudentLoanBill").on("click", function(){

    var studentLoanBillDiv = $("<div class='form-group'>");
    var studentLoanBillLabel = $("<label for='studentLoan" + studentLoansCount + "'>Student Loan " + studentLoansCount + ":</label>");
    var studentLoanBillInput = $("<input type='text' class='form-control' id='studnetLoan" + studentLoansCount + "'>");

    studentLoanBillDiv.append(studentLoanBillLabel).append(studentLoanBillInput);

    $('#studentLoansDiv').append(studentLoanBillDiv);

    if(studentLoansCount === 4) {
        document.getElementById("addStudentLoanBill").disabled = true;
    } else studentLoansCount++;
});

var debtCount = 1;

$("#addDebt").on("click", function(){

    var debtDiv = $("<div class='form-group'>");
    var debtLabel = $("<label for='debt" + debtCount + "'>Debt " + debtCount + ":</label>");
    var debtInput = $("<input type='text' class='form-control' id='debt" + debtCount + "'>");

    debtDiv.append(debtLabel).append(debtInput);

    $('#debtDiv').append(debtDiv);

    if(debtCount === 4) {
        document.getElementById("addDebt").disabled = true;
    } else debtCount++;
});

$("#budgetBtn12Back").on("click", function() {
    window.location.href = "/grader/entertainment";
});