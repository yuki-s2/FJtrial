'use strict';
$(document).ready(function(){
	if (window.matchMedia('(min-width: 768px)').matches) {

$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: false,//下部ドットナビゲーションの表示
});

}
});

// $(".slide-items").slick({
//           arrows: true, // 前・次のボタンを表示する
//       dots: false, // ドットナビゲーションを表示する
//     //   appendDots: $('.dots-3'), // ドットナビゲーションの生成位置を変更
//       speed: 1000, // スライドさせるスピード（ミリ秒）
//       slidesToShow: 1, // 表示させるスライド数
//       centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
//       variableWidth: true, // スライド幅の自動計算を無効化
//     autoplay: true, // 自動再生
//   });
// $(function () {
//     $('#js-slider-3').slick({
//       arrows: true, // 前・次のボタンを表示する
//       dots: false, // ドットナビゲーションを表示する
//     //   appendDots: $('.dots-3'), // ドットナビゲーションの生成位置を変更
//       speed: 1000, // スライドさせるスピード（ミリ秒）
//       slidesToShow: 1, // 表示させるスライド数
//       centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
//       variableWidth: true, // スライド幅の自動計算を無効化
//       autoplay: true,
//     });
//   });
