import css from "../css/index1.css"
import sass from "../sass/index.scss"
import sass from "../sass/common.scss"
import Swiper from "../lib/swiper/js/swiper"
import 'lib-flexible'
// import $ from "../lib/zepto"
// var $ = require('zepto');

// 页面加载完成后的事件
$(function() {
    $("#btnSrch").on("click", function(e) {
        // 获取搜索文本框的文本
        var txt = $("#srchTxt").val() || "女装";
        // 页面跳转到搜索页面并吧参数传递给搜索页面
        window.location.href = "../srch.html?kw = " + txt;
    });
    initBannerSwiper();
});

// banner区域轮播图
function initBannerSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
}