//  author liqing
// date 2018 / 12 / 11

// begin
// 获取年月日 星期 时间
;$(function ($) {
    function getDate() {
        var today = new Date();
        var date = today.getFullYear() + "年" + twoDigits(today.getMonth() + 1) + "月" + twoDigits(today.getDate()) + "日 ";
        var week = " 星期" + "日一二三四五六 ".charAt(today.getDay());
        var time = twoDigits(today.getHours()) + ":" + twoDigits(today.getMinutes()) + ":" + twoDigits(today.getSeconds());
        $(".date").html(date);
        $(".week").html(week);
        $(".clock").html(time);
    }
    function twoDigits(val) {
        if (val < 10) return "0" + val; return val;
    }
    $(function () {
        setInterval(getDate, 1000);
    });
}(jQuery));