/**
 * swiper-init.js
 * 用途：首頁熱銷個案輪播初始化
 * 套件：Swiper.js v11
 * 上傳位置：Webflow Assets
 * 
 * 修改說明：
 * - slidesPerView：每次顯示幾張
 * - spaceBetween：卡片間距（px）
 * - left / right：箭頭離 slider 的距離（在 Page Settings CSS 調整）
 */

window.addEventListener('load', function () {

  // 確認 slider 元素存在才初始化
  // 避免在沒有 slider 的頁面報錯
  var sliderEl = document.querySelector('.project_slider');
  if (!sliderEl) {
    return;
  }

  // 確認 Swiper 套件有成功載入
  if (typeof Swiper === 'undefined') {
    console.error('Swiper 套件未載入，請確認 CDN script 標籤正確');
    return;
  }

  new Swiper('.project_slider', {

    // 每次顯示幾張（桌機）
    slidesPerView: 4,

    // 卡片之間的間距（px）
    spaceBetween: 16,

    // 箭頭按鈕
    // 對應 Code Embed 的 .project_arrow-prev / .project_arrow-next
    navigation: {
      nextEl: '.project_arrow-next',
      prevEl: '.project_arrow-prev',
    },

    // 圓點分頁
    // 對應頁面上 class 為 project_dots 的元素
    pagination: {
      el: '.project_dots',
      clickable: true,
    },

    // 響應式斷點
    // 螢幕寬度達到以下數值時套用對應設定
    breakpoints: {
      0:   { slidesPerView: 1.2, spaceBetween: 12 }, // 手機
      768: { slidesPerView: 2.5, spaceBetween: 16 }, // 平板
      992: { slidesPerView: 4,   spaceBetween: 16 }, // 桌機
    },

  });

});
