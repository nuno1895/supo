$("#budgetBtn7").on("click", function() {
    var medicalTotal = parseInt($("#medications").val()) + parseInt($("#doctorBills").val()) + parseInt($("#hospitalBills").val()) + parseInt($("#otherMedical1").val()) + parseInt($("#otherMedical2").val()) + parseInt($("#otherMedical3").val());
    var budgetObject = {
    	medications: $("#medications").val(),
    	doctorBills: $("#doctorBills").val(),
    	hospitalBills: $("#hospitalBills").val(),
    	otherMedical1: $("#otherMedical1").val(),
    	otherMedical2: $("#otherMedical2").val(),
    	otherMedical3: $("#otherMedical3").val(),
        medicalTotal: medicalTotal
    };
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
    window.location.href = "/budgetForm/6";     
});