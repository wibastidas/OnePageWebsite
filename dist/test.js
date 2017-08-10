"use strict";

$(document).ready(function() {
    $("#contact-form").on("submit", function(e) {
        e.preventDefault();
        var t = $("#name").val(), a = $("#email").val(), o = $("#comments").val();
        $.ajax({
            url: "https://formspree.io/wibastidas77@gmail.com",
            method: "POST",
            data: {
                name: t,
                _replyto: a,
                email: a,
                comments: o,
                _subject: "My Form Submission"
            },
            dataType: "json",
            success: function() {
                console.log("success");
            }
        });
    });
});