$('.spanBorder').mouseover(function(){
    $(this).children().eq(0).css('width','60%');
    $(this).children().eq(1).css('height','75%');
    $(this).children().eq(2).css('width','80%');
    $(this).children().eq(3).css('height','35%');
    $(this).siblings('img').addClass('blur');
    $(this).parent().addClass('moveUp');
})
$('.spanBorder').mouseout(function(){
    $(this).children().eq(0).css('width','0');
    $(this).children().eq(1).css('height','0');
    $(this).children().eq(2).css('width','0');
    $(this).children().eq(3).css('height','0');
    $(this).siblings('img').removeClass('blur');
    $(this).parent().removeClass('moveUp');
})
$('.spanBorder1').mouseover(function(){
    $(this).children().eq(0).css('width','60%');
    $(this).children().eq(1).css('height','35%');
    $(this).children().eq(2).css('width','80%');
    $(this).children().eq(3).css('height','75%');
    $(this).siblings('img').addClass('blur');
    $(this).parent().addClass('moveUp');
})
$('.spanBorder1').mouseout(function(){
    $(this).children().eq(0).css('width','0');
    $(this).children().eq(1).css('height','0');
    $(this).children().eq(2).css('width','0');
    $(this).children().eq(3).css('height','0');
    $(this).siblings('img').removeClass('blur');
    $(this).parent().removeClass('moveUp');
})

$('.colBag').mouseover(function(){
    $(this).addClass('moveUp1');
})
$('.colBag').mouseout(function(){
    $(this).removeClass('moveUp1');
})
$('.colSize').mouseover(function(){
    $(this).addClass('moveUp1');
})
$('.colSize').mouseout(function(){
    $(this).removeClass('moveUp1');
})
$('.colShoe').mouseover(function(){
    $(this).addClass('moveUp1');
})
$('.colShoe').mouseout(function(){
    $(this).removeClass('moveUp1');
})
$('.colNew').mouseover(function(){
    $(this).addClass('moveUp2');
})
$('.colNew').mouseout(function(){
    $(this).removeClass('moveUp2');
})