$(".intro").hide();
$(".dessert").hide();
$(".food").hide();

//1
$(".start").click(function() {
   $(".intro").slideDown();
});

//2
$(".start").dblclick(function() {
     $(".intro").slideUp();
});

//3
$(".sweet").mouseenter(function() {
     $(".dessert").slideDown();
});

//4
$(".sugar").mouseover(function() {
     $(".food").slideDown();
});

//5
$(".dessert").mouseenter(function(){
    $(".dessert").css("background-color","blue");
});

//6

    
    