$("#budgetBtn2").on("click", function() {
	var foodTotal = parseInt($("#groceries").val()) + parseInt($("#eatingout").val());
    var budgetObject = {
        groceries: $("#groceries").val(),
        eatingout: $("#eatingout").val(), 
        foodTotal: foodTotal
    };
    console.log("budgetObject Form 2:", budgetObject);
    localStorage.setItem("budgetForm2", JSON.stringify(budgetObject));

    window.location.href = "/grader/food";
});

$("#budgetBtn2Back").on("click", function() {
    window.location.href = "/budgetForm";
});

// $("#finalSubmit").on("click", function() {
//     //sets current form dara into local storage
//     var budgetObject = {
//         groceries: $("#groceries").val(),
//         eatingout: $("#eatingout").val(),
//     };
//     console.log("HERE: ", budgetObject)
//     localStorage.setItem("budgetForm2", JSON.stringify(budgetObject))

//     //combines all local storage
//     var dataToPost = {
//         budgetForm: JSON.parse(localStorage.getItem("budgetForm")),
//         budgetForm2: JSON.parse(localStorage.getItem("budgetForm2")),
//     };

//     //posts data in local storage
//     $.post("/budgetdata", dataToPost).then(function(response) {
//         console.log("this posted");
//     });
// });