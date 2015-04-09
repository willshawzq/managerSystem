/**
 * Created by 醉 on 2015/4/10.
 */
shaw.setRightContentWidth = function () {
    var lWidth = document.getElementById("left").offsetWidth;
    var sWidth = document.documentElement.clientWidth;
    document.getElementById("right").style.width = (sWidth - lWidth) + "px";
};

window.onload = window.onresize = function () {
    shaw.setRightContentWidth();
};