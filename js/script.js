//ハンバーガーボタン
$(function () {
    $('.menu-trigger').click(function () {          //ハンバーガーボタン(.menu-trigger)をタップすると、
        $(this).toggleClass('active');　　　　　　　 //タップしたハンバーガーボタン(.menutrigger)に(.active)を追加・削除する。
        if ($(this).hasClass('active')) {　　　　　　//もし、ハンバーガーボタン(.menu-trigger)に(.active)があれば、
          $('.g-navi').addClass('active');　　　　　 //(.g-navi)にも(.active)を追加する。
        }　　　　　　　　　　　　　　　　　　　　　　　//それ以外の場合は、
        else{                                        //(.g-navi)にある(.active)を削除する。
            $('.g-navi').removeClass('active');
        }
    });
    $('.nav-wrapper ul li a').click(function (){     //各メニューリンク(.nav-wrapper ul li a)タップすると、
        $('.menu-trigger').removeClass('active');    //ハンバーガーボタン(.menu-trigger)みある(.active)を削除する。
        $('.g-navi').removeClass('active');          //(.g-navi)にある(.active)も削除する。
    });
});


jQuery(window).on('scroll', function () {
 
    if (jQuery('.header').height() < jQuery(this).scrollTop()) { 
   jQuery('.header').addClass('header_active'); }
    else {
    jQuery('.header').removeClass('header_active'); } });