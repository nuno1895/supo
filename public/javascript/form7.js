$("#budgetBtn7").on("click", function() {
    var budgetObject = {
    	medications: $("#medications").val(),
    	doctorBills: $("#doctorBills").val(),
    	hospitalBills: $("#hospitalBills").val(),
    	otherMedical1: $("#otherMedical1").val(),
    	otherMedical2: $("#otherMedical2").val(),
    	otherMedical3: $("#otherMedical3").val()
    };
    console.log("budgetObject form 7", budgetObject);
    localStorage.setItem("budgetForm7", JSON.stringify(budgetObject));

    window.location.href = "/budgetForm/8";
});

$("#addMedBill").on("click", function(){
var medBill = {
    'otherMedical1': 'Other Medical 1',
    'otherMedical2': 'Other Medical 2',
    'otherMedical3': 'Other Medical 3'
};

var s = $("<select id='" + this.medBill[val] + "' class='form-control' />")

for (var val in medBill){
    $("<option/>", {value: val, text: medBill[val]}).appendTo(s);
}

s.appendTo('.addMedBillDiv');

})

$("#budgetBtn7Back").on("click", function() {
    window.location.href = "/budgetForm/6";     
});