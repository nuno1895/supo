var budgetArray = [];



$("#additem").on("click", function() {
	var formAdd = {
		name : $("#name").val(),
		amount : $("#amount").val()
	}
	budgetArray.push(formAdd)
	localStorage.setItem("budgetForm2", JSON.stringify(budgetArray));
	console.log(localStorage);
	console.log("Foradd" , formAdd);
	var newItem = $("<li>").text(formAdd.name + " - " + formAdd.amount).addClass("list-group-item");
	$("#budgetAdd").append(newItem);

})

$("#budgetBtn2").on("click", function() {
    var budgetObject = {
        car: $("#car").val(),
        house: $("#house").val()
    };
    localStorage.setItem("budgetForm2", JSON.stringify(budgetObject))
    console.log(localStorage.getItem("budgetForm2"));
    window.location.href = "budgetForm/2";

});

var dataToPost={
	budgetForm: JSON.parse(localStorage.getItem("budgetForm")),
	budgetForm2: JSON.parse(localStorage.getItem("budgetForm2")),
};


$.post("/budgetdata", dataToPost).then(function(response){console.log(response)});


// if (localStorage.getItem("tacos")) {
//   values = localStorage.getItem("tacos"); 
// } 
// else { 
//   values = {}  
// }

// var values = localStorage.getItem("budgetForm2") || {$("#car").val(values.car);