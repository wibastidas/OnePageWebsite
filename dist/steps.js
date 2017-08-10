"use strict";

!function() {
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