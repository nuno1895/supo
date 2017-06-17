$("#budgetBtn3").on("click", function() {
	var clothingTotal = parseInt($("#clothingAdult").val()) + parseInt($("#clothingKids").val()) + parseInt($("#dryCleaning").val());
    var budgetObject = {
        clothingAdult: $("#clothingAdult").val(),
        clothingKids: $("#clothingKids").val(),
        dryCleaning: $("#dryCleaning").val(),
        clothingTotal: clothingTotal
    };
    console.log("budgetObject form 3", budgetObject);
    localStorage.setItem("budgetForm3", JSON.stringify(budgetObject));

     window.location.href = "/grader/clothing";
});

$("#budgetBtn3Back").on("click", function() {
    window.location.href = "/budgetForm/2";     
});