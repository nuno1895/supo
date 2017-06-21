$("#budgetBtn10").on("click", function() {
    var budgetObject = {
        educationTuition: $("#educationTuition").val(),
        childCare: $("#childCare").val(),
        hairCareCosmetics: $("#hairCareCosmetics").val(),
        bookSupplies: $("#bookSupplies").val(),
        childSupport: $("#childSupport").val(),
        alimony: $("#alimony").val(),
        pocketMoney: $("#pocketMoney").val(),
        subscriptions: $("#subscriptions").val(),
        babySupplies: $("#babySupplies").val(),
        petSupplies: $("#petSupplies").val(),
        otherPersonal1: $("#otherPersonal1").val(),
        otherPersonal2: $("#otherPersonal2").val(),
        otherPersonal3: $("#otherPersonal3").val()
    };

    var otherPersonal1;
    var otherPersonal2;
    var otherPersonal3;

    if(budgetObject.otherPersonal1 === undefined) {
        otherPersonal1 = 0;
    } else otherPersonal1 = parseInt(budgetObject.otherPersonal1);

    if(budgetObject.otherPersonal2 === undefined) {
        otherPersonal2 = 0;
    } else otherPersonal2 = parseInt(budgetObject.otherPersonal2);

    if(budgetObject.otherPersonal3 === undefined) {
        otherPersonal3 = 0;
    } else otherPersonal3 = parseInt(budgetObject.otherPersonal3);

    var personalTotal = parseInt($("#educationTuition").val()) + parseInt($("#childCare").val()) + parseInt($("#hairCareCosmetics").val()) + parseInt($("#bookSupplies").val()) + parseInt($("#childSupport").val()) + parseInt($("#alimony").val()) + parseInt($("#pocketMoney").val()) + parseInt($("#subscriptions").val()) + parseInt($("#babySupplies").val()) + parseInt($("#petSupplies").val()) + otherPersonal1 + otherPersonal2 + otherPersonal3;

    budgetObject.personalTotal = personalTotal;

    console.log("budgetObject form 10", budgetObject);
    localStorage.setItem("budgetForm10", JSON.stringify(budgetObject));

    window.location.href = "/grader/personal";
});

var otherPersonalCount = 1;

$("#addPersonalExpense").on("click", function(){

    var personalExpenseDiv = $("<div class='form-group'>");
    var personalExpenseLabel = $("<label for='otherPersonal" + otherPersonalCount + "'>Other Personal " + otherPersonalCount + ":</label>");
    var personalExpenseInput = $("<input type='text' class='form-control' id='otherPersonal" + otherPersonalCount + "'>");

    personalExpenseDiv.append(personalExpenseLabel).append(personalExpenseInput);

    $('#otherPersonalDiv').append(personalExpenseDiv);

    if(otherPersonalCount === 3) {
        document.getElementById("addPersonalExpenseBill").disabled = true;
    } else otherPersonalCount++;
});

$("#budgetBtn10Back").on("click", function() {
    window.location.href = "/grader/transportation";  
});