$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });


  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
	const scrollAmount = $(window).scrollTop();
	const windowHeight = $(window).height();
	$('section').each(function () {
		const position = $(this).offset().top;
		if (scrollAmount > position - windowHeight + 100) {
		$(this).addClass('fade-in');
		}
});
});

// ヘッダーメニュを上スクロールで表示

$(document).ready(function () {
  let start_position = 0,
    window_position;
    const header = $("header");
  // スクロールイベントを設定
  $(window).scroll(function () {
    // 現在のウィンドウのスクロール量を取得
    window_position = $(window).scrollTop();
    // ヘッダーの高さを取得
    const headerHeight = header.outerHeight();
    // スクロール量が初期位置より小さい場合、上にスクロールしているのでヘッダーを表示
    if (window_position <= start_position) {
      header.css("top", "0");
    } else {
      // スクロール量が初期位置より大きい場合、下にスクロールしているのでヘッダーを非表示
      header.css("top", -headerHeight + "px");
    }
    // 現在の位置を更新
    start_position = window_position;
  });
  // ページ読み込み時に中途半端な位置でロードされたときでも正しくヘッダーの表示を設定するためにスクロールイベントを発生させる
  $(window).trigger("scroll");
});

$('.hamburger').click(function() {
  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
      $('.sp-gnav').addClass('active');
  } else {
      $('.sp-gnav').removeClass('active');
  } 

});
});
//メニュー内を閉じておく
$(function() {
$('.sp-gnav a[href]').click(function() {
  $('.sp-gnav').removeClass('active');
 $('.hamburger').removeClass('active');

});

});