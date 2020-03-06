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
