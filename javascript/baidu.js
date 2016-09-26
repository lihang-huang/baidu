var ani = 0; //logo动画全局变量
var navSign = 0; //用于指定当前标签,默认为第一个
var navList = $(".container");
var navButtonList = $(".container-nav>div>span");
var changeNav = function() {
    if (this != window) {
        //点击按钮时
        navSign = parseInt(this.dataset.value);
        localStorage.status = navSign; //传给localStorage
        for (var i = 0; i < navList.length; i++) {
            if (i == navSign) {
                navList[i].style.display = "block";
                navButtonList[i].style.color = "#fff";
                navButtonList[i].style.backgroundColor = "#9a9da2";
                if (i == 0) {
                    $("#mystar-icon").css("backgroundPositionX", "-144px");
                }
            } else {
                navList[i].style.display = "none";
                navButtonList[i].style.color = "#333";
                navButtonList[i].style.backgroundColor = "#fff";
                if (i == 0) {
                    $("#mystar-icon").css("backgroundPositionX", "-15px");
                }
            }
        }
    } else {
        for (var i = 0; i < navList.length; i++) {
            if (i == parseInt(localStorage.status)) {
                navList[i].style.display = "block";
                navButtonList[i].style.color = "#fff";
                navButtonList[i].style.backgroundColor = "#9a9da2";
                if (i == 0) {
                    $("#mystar-icon").css("backgroundPositionX", "-144px");
                }
            } else if (isNaN(parseInt(localStorage.status))) {
                navList[0].style.display = "block";
                navButtonList[0].style.color = "#fff";
                navButtonList[0].style.backgroundColor = "#9a9da2";
                $("#mystar-icon").css("backgroundPositionX", "-144px");
                localStorage.status = "0";
            } else {
                navList[i].style.display = "none";
                navButtonList[i].style.color = "#333";
                navButtonList[i].style.backgroundColor = "#fff";
                if (i == 0) {
                    $("#mystar-icon").css("backgroundPositionX", "-15px");
                }
            }
        }
    }
    //切换导航标识
}

var logoAni = function() {
    // logo图动画
    //logo动画调用函数
    $("#logo").css("backgroundPositionX", String(ani) + "px");
    if (ani <= -56400) {
        ani = 0;
    } else {
        ani -= 270;
    }
    setTimeout("logoAni()", 48);
}

var scrollFunc = function() {

    if (event.wheelDelta < 0) {
        $(".nav-wrap").css("overflow", "visible");
        $(".nav-wrap").css("height", "auto");
        $(".down-sign").css("display", "none");
        $("footer").css("position", "static");
    } else if (event.detail < 0) {
        $(".nav-wrap").css("overflow", "visible");
        $(".nav-wrap").css("height", "auto");
        $(".down-sign").css("display", "none");
        $("footer").css("position", "static");
    }
}


var sdelay = 0;

var returnTop = function() {
    window.scrollBy(0, -40); //Only for y vertical-axis
    if (document.body.scrollTop > 0) {
        sdelay = setTimeout('returnTop()', 10);
    }
}

$(document).ready(function() {
    //当DOM加载完毕时
    //header部分动画
    $("#user").mouseenter(
        function() {
            $("#user-inner").show();
        }
    );
    $("#user").mouseleave(
        function() {
            $("#user-inner").hide();
        }
    );

    $("#set").mouseenter(
        function() {
            $("#set-inner").show();
        }
    );
    $("#set").mouseleave(
        function() {
            $("#set-inner").hide();
        }
    );
    $("#more-up").mouseenter(
        function() {
            $("#more").fadeIn(200);
        }
    );
    // 右边栏更多产品动画
    $("#more").mouseleave(
        function() {
            $("#more").fadeOut(100);
        }
    );

    // 天气预报动画
    $("#weather").mouseenter(
        function() {
            $("#weather-data").fadeIn();
        }
    );

    $("#weather-data").mouseleave(
        function() {
            $("#weather-data").hide();
        }
    );

    // 中央部导航按钮
    $("#setting-button").click(
        function() {
            $("#hide-nav").slideToggle(100);
            event.stopPropagation();

        }
    );

    $("#hide-nav").click(
        function() {
            event.stopPropagation();
        }
    );

    $("body").click(
        function() {
            $("#hide-nav").slideUp(100);
        }
    ); //注册导航隐藏
    $(".container-nav>div>span").click(changeNav);
    logoAni(); //触发初始动画
    changeNav();

    // 鼠标滚轮事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    document.onmousewheel = scrollFunc;

    $(window).scroll(
        function() {
            if ($(window).scrollTop() > 0) {
                $(".back-to-top").css("visibility", "visible");
            } else {
                $(".back-to-top").css("visibility", "hidden");
            }
        }
    );

    $(".back-to-top").click(returnTop);
    // 换肤
    $(".change-skin").mouseenter(function() {
        $(".background").show(300);
    });

    $(".background").mouseleave(function() {
        $(".background").hide();
    });
    $("#bg1").click(function() {
        $(".skin-background").css("backgroundImage", "url(../img/background1.jpg)");
        $("header").css("opacity", "0.2");
    });

    $(window).scroll(
        function() {
            if ($(window).scrollTop() > 240) {
                $(".top-fix").slideDown(200);
                $(".top-fix>a>img").delay(100).fadeIn(1000);
                $(".search-wrap").css({
                    "position": "fixed",
                    "top": "15px"
                });
            } else if ($(window).scrollTop() <= 240) {
                $(".top-fix").slideUp(200);
                $(".search-wrap").css({
                    "position": "absolute",
                    "top": "200px"
                });
            }
        }
    );
});
