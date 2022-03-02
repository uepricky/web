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

/*header スクロール変化*/
jQuery(window).on('scroll', function () {
 
    if (jQuery('.header').height() < jQuery(this).scrollTop() > 0) { 
   jQuery('.header').addClass('header_active'); }
    else {
    jQuery('.header').removeClass('header_active'); } });
    
    
/*header スクロール変化、レスポンシブ*/
jQuery(window).on('scroll', function () {
 
    if (jQuery('.g-navi-sp').height() < jQuery(this).scrollTop() > 0) { 
    jQuery('.g-navi-sp').addClass('active'); }
    else {
    jQuery('.g-navi-sp').removeClass('active'); } }); 


/*top-service画像(フェードイン)*/
$(function(){
    $(".inview_re").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is-show");
      } else {
        $(this).stop().removeClass("is-show");
      }
    });
  });
  
/*company本文(フェードイン)*/
  $('#animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('#animation').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 400){
   $(this).addClass("fadeInDown");
  }
 });
});