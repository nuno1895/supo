$("#budgetBtn3").on("click", function() {
    var budgetObject = {
        clothingAdult: $("#clothingAdult").val(),
        clothingKids: $("#clothingKids").val(),
        dryCleaning: $("#dryCleaning").val()
    };
    console.log("budgetObject form 3", budgetObject);
    localStorage.setItem("budgetForm3", JSON.stringify(budgetObject));

    window.location.href = "/budgetForm/4";
});

$("#budgetBtn3Back").on("click", function() {
    window.location.href = "/budgetForm/2";     
});