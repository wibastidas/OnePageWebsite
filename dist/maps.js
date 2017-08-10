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
        });
        t.get(function(t) {
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
}();