//console.log(5 + 12);

//alert("This is from JavaScript");


$(".dropdown-button").dropdown();

$('.slider').slider({
    full_width: true,
    interval: 1000
});

$('.slider').slider('pause');

$('#nextBtn').click(function(){
    $('.slider').slider('start');
    setTimeout(function(){
        $('.slider').slider('pause');
    },800);
});



$( "#bigBtn" ).click(function() {
  $("#smallBtn").removeClass( "visibility" );
  $( "#bigBtn").addClass( "visibility" );
    $("#smallBtn").show();
    $( "#bigBtn").hide();

    // $("#font_body").addClass( "big-font" );
    // $(".row").addClass( "big-font" );
    $("nav ul li a").addClass( "big-font" );
     $("p").addClass( "big-font" );

});

$( "#smallBtn" ).click(function() {
  $("#bigBtn").removeClass( "visibility" );
  $( "#smallBtn").addClass( "visibility" );
    $("#bigBtn").show();

    // $(".row").removeClass( "big-font" );
    $("nav ul li a").removeClass( "big-font" );
    $("p").removeClass( "big-font" );
});