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
    console.log("budgetObject form 10", budgetObject);
    localStorage.setItem("budgetForm10", JSON.stringify(budgetObject));

    window.location.href = "/budgetForm/11";
});

$("#budgetBtn10Back").on("click", function() {
    window.location.href = "/budgetForm/9";     
});