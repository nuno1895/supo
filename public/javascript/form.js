// $(function(){
//     $('#phone-navigation #phone-menu').change(function(){
//         var url = $(this).val();
//         if(url) {
//             window.location = url;
//         }
//     });
// });

console.log("hi");

// var fancyFilter = function(filterListSelector, gallerySelector) {
//     //Filter Button Code
//     $(filterListSelector + ' a').click(function() {
//         $(filterListSelector + ' li').removeClass('active');
//         var $this = $(this);
//         var filterType = $this.data('filter');
//         if(!filterType) return true;

//         $this.closest('li').addClass('active');
//         $(gallerySelector).isotope({ 
//             filter: filterType,
//         });

//         return false;
//     });
// };

$("#budgetBtn").on("click", function() {
    var budgetObject = {
        month: $("#month").val(),
        takehome: $("#takehome").val(),
        food: $("#food").val(),
        eatingout: $("#eatingout").val(),
    };
    localStorage.setItem("budgetForm", JSON.stringify(budgetObject))
    console.log(localStorage.getItem("budgetForm"));
    window.location.href = "budgetForm/2";		

});

