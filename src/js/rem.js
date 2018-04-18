// 通过js动态获取屏幕的宽度（document.clientWidth）然后根据屏幕宽度动态计算出rem的实际值。
!(function(doc, win) {
    // 拿到html标签的dom元素对象
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            // 拿到当前屏幕的尺寸
            var width = docEle.clientWidth;
            width = width < 320 ? 320 : width;
            width = width > 640 ? 640 : width;
            width && (docEle.style.fontSize = 100 * (width / 640) + "px");
        };

    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);

}(document, window));