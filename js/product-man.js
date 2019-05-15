// Details
$('.tabs1 li').click(function(){
	$(this).siblings('li').removeClass('active');
	$(this).addClass('active');
	var showBlock=String('.detail'+($(this).index()+1));
	$(showBlock).siblings('div').css('display','none');
	$(showBlock).css('display','block');
})
// plus quantity
$('.pmBtn1').click(function(){
	var quantity=Number($('.quantity').val())+1;
	$('.quantity').val(quantity);
})
// minus quantity
$('.pmBtn2').click(function(){
	var quantity=Number($('.quantity').val());
	if (quantity>0){
		quantity=quantity-1;
	}else{
		quantity=0;
	}
	$('.quantity').val(quantity);
})
// toggle Image
$('.smallImg li').click(function(){
	$(this).siblings('li').removeClass('active1');
	$(this).addClass('active1');
	var x=Number($(this).index());
	$('.bigImg').children('img').css('display','none');
	$('.bigImg').children('img').eq(x).css('display','block');
})
$('.relativeImg').mouseenter(function(){
	$(this).addClass('active2');
	$(this).find('.mask').children('span').addClass('maskCover');
	$(this).find('.maskIcon').css('display','block');
	$(this).find('.maskIcon').stop().addClass('maskIconAni');
	$(this).find('.maskContent').stop().slideDown();
})
$('.relativeImg').mouseleave(function(){
	$(this).removeClass('active2');
	$(this).find('.mask').children('span').removeClass('maskCover');
	$(this).find('.maskIcon').css('display','none');
	$(this).find('.maskIcon').removeClass('maskIconAni');
	$(this).find('.maskContent').stop().slideUp();
})
