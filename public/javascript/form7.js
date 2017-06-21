$("#budgetBtn7").on("click", function() {

    var budgetObject = {
        medications: $("#medications").val(),
        doctorBills: $("#doctorBills").val(),
        hospitalBills: $("#hospitalBills").val(),
        otherMedical1: $("#otherMedical1").val(),
        otherMedical2: $("#otherMedical2").val(),
        otherMedical3: $("#otherMedical3").val(),
    };

    var otherMedical1;
    var otherMedical2;
    var otherMedical3;

    if(budgetObject.otherMedical1 === undefined) {
        otherMedical1 = 0;
    } else otherMedical1 = parseInt(budgetObject.otherMedical1);

    if(budgetObject.otherMedical2 === undefined) {
        otherMedical2 = 0;
    } else otherMedical2 = parseInt(budgetObject.otherMedical2);

    if(budgetObject.otherMedical3 === undefined) {
        otherMedical3 = 0;
    } else otherMedical3 = parseInt(budgetObject.otherMedical3);

    var medicalTotal = parseInt($("#medications").val()) + parseInt($("#doctorBills").val()) + parseInt($("#hospitalBills").val()) + otherMedical1 + otherMedical2 + otherMedical3;

    budgetObject.medicalTotal = medicalTotal;

    console.log("budgetObject form 7", budgetObject);
    localStorage.setItem("budgetForm7", JSON.stringify(budgetObject));

    window.location.href = "/grader/medical";
});

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

$("#budgetBtn7Back").on("click", function() {
    window.location.href = "/grader/savings";
});