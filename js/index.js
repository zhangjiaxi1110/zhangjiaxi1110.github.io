//初始化  自动轮播


$(function(){
    var slider = mui(".mui-slider");
        slider.slider({
            interval: 1000         //每隔5秒调用一次
        });
})