"use strict";

var Observer = (function () {
    var __messages = {};
    return {
        regist: function regist(type, fn) {
            if (typeof __messages[type] === "undefined") {
                __messages[type] = [fn];
            } else {
                __messages[type].push(fn);
            }
        },
        fire: function fire(type, args) {
            if (!__messages[type]) {
                return;
            }
            var events = {
                type: type,
                args: args || {}
            };
            for (var i = 0; i < __messages[type].length; i++) {
                var param = __messages[type][i];
                if (typeof param === "function") {
                    param.call(this, events);
                }
            }
        },
        remove: function remove(type, fn) {
            if (__messages[type] instanceof Array) {
                var i = __messages[type].length - 1;
                for (; i >= 0; i--) {
                    __messages[type][i] === fn && __messages[type].splice(i, 1);
                }
            }
        }
    };
})();

module.exports =Observer;