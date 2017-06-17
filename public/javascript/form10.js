$("#budgetBtn10").on("click", function() {
    var personalTotal = parseInt($("#educationTuition").val()) + parseInt($("#childCare").val()) + parseInt($("#hairCareCosmetics").val()) + parseInt($("#bookSupplies").val()) + parseInt($("#childSupport").val()) + parseInt($("#alimony").val()) + parseInt($("#pocketMoney").val()) + parseInt($("#subscriptions").val()) + parseInt($("#babySupplies").val()) + parseInt($("#petSupplies").val()) + parseInt($("#otherPersonal1").val()) + parseInt($("#otherPersonal2").val()) + parseInt($("#otherPersonal3").val());
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
        otherPersonal3: $("#otherPersonal3").val(),
        personalTotal: personalTotal

    };
    console.log("budgetObject form 10", budgetObject);
    localStorage.setItem("budgetForm10", JSON.stringify(budgetObject));

    window.location.href = "/grader/personal"
});

$("#budgetBtn10Back").on("click", function() {
    window.location.href = "/grader/transportation";  
});