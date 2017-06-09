$("#finalSubmit").on("click", function(res, req) {
    //sets current form dara into local storage
    var budgetObject = {
        groceries: $("#groceries").val(),
        eatingout: $("#eatingout").val(),
    };
    console.log("HERE: ", budgetObject)
    localStorage.setItem("budgetForm2", JSON.stringify(budgetObject))

    //combines all local storage
    var dataToPost = {
        budgetForm: JSON.parse(localStorage.getItem("budgetForm")),
        budgetForm2: JSON.parse(localStorage.getItem("budgetForm2")),
    };

    //sets local storage to a json object
    localStorage.setItem("budgetForm2", JSON.stringify(dataToPost));
    console.log("dataToPost;", dataToPost);

    //posts data in local storage
    $.post("/budgetdata", dataToPost).then(function(response) {
        console.log("this posted");
    });
});





// var budgetArray = [];


// $("#budgetBtn2").on("click", function() {

//     var budgetObject = {
//         groceries: $("#groceries").val(),
//         eatingout: $("#eatingout").val(),
//         frequency: $("#frequency").val()
//     };
//     console.log("HERE: ", budgetObject)
//     localStorage.setItem("budgetForm2", JSON.stringify(budgetObject))
//     console.log(localStorage.getItem("budgetForm2"));
//     window.location.href = "/dash";

// });


//at the end use this to post to database
// var dataToPost = {
//     budgetForm: JSON.parse(localStorage.getItem("budgetForm")),
//     budgetForm2: JSON.parse(localStorage.getItem("budgetForm2")),
// };




//this is sending to the database along with apiRoutes.js
// $("#finalSubmit").on("click", function(res, req) {
//     var formAdd = {
//         name: $("#name").val(),
//         amount: $("#amount").val(),
//         groceries: $("#groceries").val(),
//         eatingout: $("#eatingout").val()
//     }
//     budgetArray.push(formAdd)
//     localStorage.setItem("budgetForm2", JSON.stringify(budgetArray));
//     console.log(localStorage);
//     console.log("Foradd", formAdd);
//     var newItem = $("<li>").text(formAdd.name + " - " + formAdd.amount).addClass("list-group-item");
//     $("#budgetAdd").append(newItem);

//     $.post("/budgetdata", dataToPost).then(function(response) {
//         debugger;
//         console.log(response)
//     });

// })

// if (localStorage.getItem("tacos")) {
//   values = localStorage.getItem("tacos");

// }

// else {

//   values = {} 

// }

// var values = localStorage.getItem("budgetForm2") || {$("#car").val(values.car);