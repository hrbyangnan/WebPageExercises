$('.cart').click(function(){
    $('.first').css('display','block');
    $('.second,.third').css('display','none');
    $(this).addClass('clicked');
    $(this).siblings().removeClass('clicked');
})
$('.account').click(function(){
    $('.second').css('display','block');
    $('.first,.third').css('display','none');
    $(this).addClass('clicked');
    $(this).siblings().removeClass('clicked');
})
$('.receive').click(function(){
    $('.third').css('display','block');
    $('.first,.second').css('display','none');
    $(this).addClass('clicked');
    $(this).siblings().removeClass('clicked');
})
$('.caculation').click(function(){
    $('.second').css('display','block');
    $('.first,.third').css('display','none');
    $('.account').addClass('clicked');
    $('.account').siblings().removeClass('clicked');
})
//-----------------封装计价模块-------------------//
function countPrice(){
    var item=$('.pricetag').length;
    for(var i=0;i<item;i++){
        var price=Number($('.pricetag').eq(i).text().substring(1));
        var qtn=$('.pricetag').eq(i).parent().siblings('td').find('.quantity').val();
        var priceTotal='$ '+(price*qtn).toFixed(2);
        $('.pricetag').eq(i).parent().siblings('td').find('.price').text(priceTotal);
        $('.checkedBill').eq(i).text(priceTotal);
        $('.received3').eq(i).text(priceTotal);
    }
    var item2=$('.price').length;
    var totalPrice=0;
    for(var i=0;i<item2;i++){
        var price1=Number($('.price').eq(i).text().substring(1));
        totalPrice+=price1;
    }
    totalPrice=totalPrice.toFixed(2);
    $('.total').text('$ '+totalPrice);
}

//-----------------增加按钮-------------------//
$('.plus').click(function(){
    var i=$(this).siblings('.quantity').val();
    i=Number(i);//字符串转为数字
    i=i+1;
    $(this).siblings('.quantity').val(i);
    countPrice();
})
//-----------------减少按钮------------------//
$('.subtract').click(function(){
    var i=$(this).siblings('.quantity').val();
    i=Number(i);
    if(i>1){
    i=i-1;
    }else{
        i=1;//数量不可小于0
    }
    $(this).siblings('.quantity').val(i);
    countPrice();
})

//-----------------返回顶部------------------//
$('.goTop').click(function(){
    $('body,html').animate({scrollTop:0},300);
})