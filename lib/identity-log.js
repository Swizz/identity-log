(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.identityLog = {})));
}(this, (function (exports) { 'use strict';

function HelloWorld(name) {
    console.log("Hello %s", name);
}

exports.HelloWorld = HelloWorld;

Object.defineProperty(exports, '__esModule', { value: true });

})));
