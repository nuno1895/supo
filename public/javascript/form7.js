var medBill = {
    'otherMedical1': 'Other Medical 1',
    'otherMedical2': 'Other Medical 2',
    'otherMedical3': 'Other Medical 3'
};


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

    var s = $("<select class='form-control' id='medAddOn' />")
        $("<option/>", {text:'Choose an Medical Add On Option'}).appendTo(s);

        for (var val in medBill){
            $("<option/>", {value: val, id: val, class: 'medBillAddOpt', text: medBill[val]}).attr('data', medBill[val],).appendTo(s);
        }
    s.appendTo('.addMedBillDiv');

});

$(document).on('change', "#medAddOn", function() {
    debugger;
    console.log(this.data);
    if(this.value == 'otherMedical1' || this.value == 'otherMedical2' || this.value == 'otherMedical3'){
        $('.addMedBillDiv').append("<label for='" + this.value +"'>" + $(this).find(':selected').attr('data') + "</label>");
        $('.addMedBillDiv').append("<input id='" + this.value + "'" + " " + "class='form-control medInpAdd'/>");
    } else{
        console.log('whoopsiedoodle')
    }
});
// $(document).on('change', "#medAddOn", function() {
//     if(this.value == 'otherMedical1' || this.value == 'otherMedical2' || this.value == 'otherMedical3'){
//         $('.addMedBillDiv').append("<input id='" + this.value + "'" + " " + "class='form-control medInpAdd'/>");
//     } {
//         console.log('whoopsiedoodle')
//     }
// });


$("#budgetBtn7Back").on("click", function() {
    window.location.href = "/budgetForm/6";     
});