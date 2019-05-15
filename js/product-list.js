// left navigation
$('.productNav span:not(.proAll)').click(function(){
    $(this).parent().siblings('li').find('i').removeClass('iconEffect');
    $(this).parent().siblings('li').find('.innerContent').slideUp();
    $(this).parent().siblings('li').children('span').removeClass('navEffect');
    $(this).siblings('.innerContent').stop().slideToggle();
    $(this).toggleClass('navEffect');
    $(this).children('i').toggleClass('iconEffect');
})

$('.glyphicon-th').click(function(){
    $('.glyphicon-th-list').removeClass('listChosen');
    $(this).addClass('listChosen');
    $('.tab2').css('display','none');
    $('.tab1').css('display','block');
})
$('.glyphicon-th-list').click(function(){
    $('.glyphicon-th').removeClass('listChosen');
    $(this).addClass('listChosen');
    $('.tab1').css('display','none');
    $('.tab2').css('display','block');
})