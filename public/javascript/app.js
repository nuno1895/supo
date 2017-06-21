$(document).ready(function(){
    var scroll_start = 0;
    var jumbotron = $('.jumbotron');
    var offset = jumbotron.offset();
    var budgetHead = $(".budgetHead");
    var budgetOffset = budgetHead.offset();
    var yourRezults = $(".yourRezults");
    var yourRezultsOffSet = yourRezults.offset();
    var debtGradeDiv = $(".debtGradeDiv");
    var debtGradeDivOffSet = debtGradeDiv.offset();
    var topSignIn = $(".signinDiv");
    var topSignInOffset = topSignIn.offset();
    var topSignup = $(".signupDiv");
    var topSignupOffset = topSignup.offset();

    if (jumbotron.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
            } else {
                $(".container-fluid").css('background-color', 'rgba(41, 43, 44, .1)').css('padding', '1em');                
            }
        });
    }

    if (budgetHead.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > budgetOffset.top) {
                $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
            } else {
                $(".container-fluid").css('background-color', 'rgba(41, 43, 44, .1)').css('padding', '1em');                
            }
        });
    }

    if (yourRezults.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > yourRezultsOffSet.top) {
                $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
            } else {
                $(".container-fluid").css('background-color', 'rgba(41, 43, 44, .1)').css('padding', '1em');                
            }
        });
    }

    if (debtGradeDiv.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > debtGradeDivOffSet.top) {
                $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
            } else {
                $(".container-fluid").css('background-color', 'rgba(41, 43, 44, .1)').css('padding', '1em');                
            }
        });
    }
    
    if (topSignIn.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > topSignInOffset.top) {
                $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
            } else {
                $(".container-fluid").css('background-color', 'rgba(41, 43, 44, .1)').css('padding', '1em');                
            }
        });
    }
    
    if (topSignup.length){
    $(document).scroll(function(){
        scroll_start = $(this).scrollTop();
        if(scroll_start > topSignupOffset.top) {
            $(".container-fluid").css('background-color', '#292b2c').css('padding', '0');
        } else {
            $(".container-fluid").css('background-color', 'rgba(41, 43, 44, .1)').css('padding', '1em');                
        }
    });
    }
// var monthDropDown = {
//     'january': 'January',
//     'february': 'February',
//     'march': 'March'
// };

// var s = $("<select id='month' class='form-control' />")

// for (var val in monthDropDown){
//     $("<option/>", {value: val, text: monthDropDown[val]}).appendTo(s);
// }

// s.appendTo('.form-groupMonth');


});


window.onscroll = function() {
    $('.container-fluid').css('padding', '0 !important');
}
