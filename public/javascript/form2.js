var budgetArray = [];


$("#budgetBtn2").on("click", function() {

    var budgetObject = {
        groceries: $("#groceries").val(),
        eatingout: $("#eatingout").val()
    };
    localStorage.setItem("budgetForm2", JSON.stringify(budgetObject))
    console.log(localStorage.getItem("budgetForm2"));
    window.location.href = "/dash";

});


//at the end use this to post to database
var dataToPost={
	budgetForm: JSON.parse(localStorage.getItem("budgetForm")),
	budgetForm2: JSON.parse(localStorage.getItem("budgetForm2")),
};

$("#finalSubmit").on("click", function() {
    var formAdd = {
        name : $("#name").val(),
        amount : $("#amount").val(),
        groceries: $("#groceries").val(),
        eatingout: $("#eatingout").val()
    }
    budgetArray.push(formAdd)
    localStorage.setItem("budgetForm2", JSON.stringify(budgetArray));
    console.log(localStorage);
    console.log("Foradd" , formAdd);
    var newItem = $("<li>").text(formAdd.name + " - " + formAdd.amount).addClass("list-group-item");
    $("#budgetAdd").append(newItem);

    $.post("/budgetdata", dataToPost).then(function(response){console.log(response)});

})


// if (localStorage.getItem("tacos")) {
//   values = localStorage.getItem("tacos"); 
// } 
// else { 
//   values = {}  
// }

// var values = localStorage.getItem("budgetForm2") || {$("#car").val(values.car);