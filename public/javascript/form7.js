var count = 1;

$("#addMedBill").on("click", function(){

    var medBillDiv = $("<div class='form-group'>");
    var medBillLabel = $("<label for='otherMedical" + count + "'>Other Medical " + count + ":</label>");
    var medBillInput = $("<input type='text' class='form-control' id='otherMedical" + count + "'>");

    medBillDiv.append(medBillLabel).append(medBillInput);

    $('#additionalMedBillDiv').append(medBillDiv);

    if(count === 3) {
        document.getElementById("addMedBill").disabled = true;
    } else count++;
});


$("#budgetBtn7").on("click", function() {
    var budgetForm7 = JSON.parse(localStorage.getItem("budgetForm7"));
    var otherMedical1;
    var otherMedical2;
    var otherMedical3;

    if(budgetForm7.otherMedical1 === undefined) {
        otherMedical1 = 0;
    } else otherMedical1 = parseInt(budgetForm7.otherMedical1);

    if(budgetForm7.otherMedical2 === undefined) {
        otherMedical2 = 0;
    } else otherMedical2 = parseInt(budgetForm7.otherMedical2);

    if(budgetForm7.otherMedical3 === undefined) {
        otherMedical3 = 0;
    } else otherMedical3 = parseInt(budgetForm7.otherMedical3);

    var medicalTotal = parseInt($("#medications").val()) + parseInt($("#doctorBills").val()) + otherMedical1 + otherMedical2 + otherMedical3;

    var budgetObject = {
    	medications: $("#medications").val(),
    	doctorBills: $("#doctorBills").val(),
    	hospitalBills: $("#hospitalBills").val(),
    	otherMedical1: otherMedical1,
    	otherMedical2: otherMedical2,
    	otherMedical3: otherMedical3,
        medicalTotal: medicalTotal
    };
    console.log("budgetObject form 7", budgetObject);
    localStorage.setItem("budgetForm7", JSON.stringify(budgetObject));

    window.location.href = "/grader/medical";
});

$("#budgetBtn7Back").on("click", function() {
    window.location.href = "/grader/savings";
});