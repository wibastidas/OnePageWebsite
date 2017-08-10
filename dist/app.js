"use strict";

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var a = e[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, n, a) {
        return n && t(e.prototype, n), a && t(e, a), e;
    };
}();

!function() {
    var t = function() {
        function t() {
            _classCallCheck(this, t);
        }
        return _createClass(t, null, [ {
            key: "get",
            value: function(t) {
                navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(e) {
                    t({
                        lat: e.coords.latitude,
                        lng: e.coords.longitude
                    });
                }) : aler("No pudimos detectar el lugar en el que te encuentras");
            }
        } ]), t;
    }(), e = {
        lat: -34.9145862,
        lng: -56.1851446
    };
    google.maps.event.addDomListener(window, "load", function() {
        var n = new google.maps.Map(document.getElementById("map"), {
            center: e,
            zoom: 15
        });
        new google.maps.Marker({
            map: n,
            position: e,
            title: "Búfon taller gourmet",
            visible: !0
        }), t.get(function(t) {
            var n = new google.maps.LatLng(t.lat, t.lng), a = new google.maps.LatLng(e.lat, e.lng);
            new google.maps.DistanceMatrixService().getDistanceMatrix({
                origins: [ n ],
                destinations: [ a ],
                travelMode: google.maps.TravelMode.DRIVING
            }, function(t, e) {
                if (e === google.maps.DistanceMatrixStatus.OK) {
                    var n = t.rows[0].elements[0].duration.text;
                    document.querySelector("#message").innerHTML = "\n\t\t\t\t\t\t\t\tEstás a " + n + ' de nuestro \n\t\t\t\t\t\t\t\t<span class="dancing-script medium">\n\t\t\t\t\t\t\t\tBúfon taller gourmet\n\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t';
                }
            });
        });
    });
}(), $.fn.formObject = function() {
    var e = {};
    return $.each($(this).serializeArray(), function(r, n) {
        e[n.name] = n.value || "";
    }), e;
}, navigator.serviceWorker && navigator.serviceWorker.register("/sw.js"), function() {
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
}(), function() {
    function t() {
        n() ? c() : e($(i).find(".input:invalid").first().parent());
    }
    function n() {
        return document.querySelector(i).checkValidity();
    }
    function e(t) {
        $(".step.active").removeClass("active"), t.addClass("active"), t.find(".input").focus();
        var n = t.index(".step") + 1;
        a($(".path-step:nth-child(" + n + ")").addClass("active"));
    }
    function a(t) {
        $(".path-step.active").removeClass("active"), t.addClass("active");
    }
    function c() {
        var t = $(i);
        $.ajax({
            url: t.attr("action"),
            method: "POST",
            data: t.formObject(),
            dataType: "json",
            success: function() {
                t.slideUp(), $("#info-contacto").html("Enviamos tu mensaje, pronto nos pondremos en contacto contigo.");
            }
        });
    }
    var i = "#contact-form";
    $(".step textarea").on("keydown", function(t) {
        13 == t.keycode && (t.preventDefauld(), $(t.target).blur());
    }), $(".path-step").on("click", function(t) {
        var n = $(t.target);
        a(n);
        var c = n.index(".path-step") + 1;
        e($(".step:nth-child(" + c + ")"));
    }), $(i).find(".input").on("change", function(a) {
        var c = $(a.target).parent().next(".step");
        !n() && c.length > 0 ? e(c) : t();
    });
}();