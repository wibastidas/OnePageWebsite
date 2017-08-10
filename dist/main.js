"use strict";

navigator.serviceWorker && navigator.serviceWorker.register("/sw.js"), function() {
    function e() {
        var e = t();
        e && !a ? (a = !0, i()) : !e && a && (a = !1, o());
    }
    function n() {
        $("#responsive-nav ul").toggleClass("active"), $("#menu-opened").toggleClass("glyphicon-menu-hamburger");
    }
    function i() {
        $("#description").addClass("fixed").removeClass("absolute"), $("#navigation").addClass("hidden"), 
        $("#sticky-navigation").removeClass("hidden");
    }
    function o() {
        $("#description").removeClass("fixed").addClass("absolute"), $("#navigation").removeClass("hidden"), 
        $("#sticky-navigation").addClass("hidden");
    }
    function t() {
        var e = $("#description").height();
        return $(window).scrollTop() > $(window).height() - 2 * e;
    }
    var a = !1, s = 0, r = $("[data-name='image-counter']").attr("content");
    $("#contact-form").on("submit", function(e) {
        return e.preventDefault(), sendForm($(this)), !1;
    }), e(), function() {
        var e = new Date().getHours();
        console.log("isOpen", e), (e < 17 || e > 22) && $("#is-open .text").html("Cerrado ahora <br> Abierto de 5:00pm a 11:00pm");
    }(), $("#menu-opened").on("click", n), $(".menu-link").on("click", n), setInterval(function() {
        s < r ? s++ : s = 0, $("#gallery .inner").css({
            left: "-" + 100 * s + "%"
        });
    }, 4e3), $(window).scroll(e);
}();