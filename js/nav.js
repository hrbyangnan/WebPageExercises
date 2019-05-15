//Host Navigation
$('.middle-nav1>li').click(function(){
	$(this).siblings('li').children('span').removeClass('underline');
	$(this).children('span').addClass('underline');
})
// Header Navigation 
$('.header-right-mon').mouseover(function(){
	$('.header-menu1').stop().fadeIn(800);
})
$('.header-right-mon').mouseout(function(){
	$('.header-menu1').stop().fadeOut(800);
})
$('.header-right-lan').mouseover(function(){
	$('.header-menu2').stop().fadeIn(800);
})
$('.header-right-lan').mouseout(function(){
	$('.header-menu2').stop().fadeOut(800);
})
$('.home').mouseover(function(){
	$(this).find('.homeMenu').stop().fadeIn(400);
})
$('.home').mouseout(function(){
	$(this).find('.homeMenu').stop().fadeOut(400);
})
$('.homeMenu>li').mouseover(function(){
	$(this).find('.homeMenu2').stop().fadeIn(400);
})
$('.homeMenu>li').mouseout(function(){
	$(this).find('.homeMenu2').stop().fadeOut(400);
})
$('.goods').mouseover(function(){
	$(this).find('.goodsMenu').stop().fadeIn(400);
})
$('.goods').mouseout(function(){
	$(this).find('.goodsMenu').stop().fadeOut(400);
})

// search
$('.searchIcon').click(function(){
	$('.search').toggleClass('searchAnimate');
})
$('.middle-cart').click(function(){
	$(this).toggleClass('middle-cartClicked');
	$('.checkedCart').fadeToggle();
})

//-----------------返回顶部------------------//
$('.goTop').click(function(){
    $('body,html').animate({scrollTop:0},300);
})
