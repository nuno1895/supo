$("#budgetBtn4").on("click", function() {
    var budgetObject = {
        electricity: $("#electricity").val(),
        mobilePhone: $("#mobilePhone").val(),
        gas: $("#gas").val(),
        trash: $("#trash").val(),
        water: $("#water").val(),
        internet: $("#internet").val(),
        cable: $("#cable").val()
    };
    console.log("budgetObject form 4", budgetObject);
    localStorage.setItem("budgetForm4", JSON.stringify(budgetObject));

    window.location.href = "/grader/utilities";
});

$("#budgetBtn4Back").on("click", function() {
    window.location.href = "/grader/clothing";   
});