$(document).ready(function(){
    var scroll_start = 0;
    var jumbotron = $('.jumbotron');
    var offset = jumbotron.offset();
    var budgetHead = $(".budgetHead");
    var budgetOffset = budgetHead.offset();

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


});

window.onscroll = function() {
    $('.container-fluid').css('padding', '0 !important');
}
