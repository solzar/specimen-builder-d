/******/ (function(modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = {}; // The require function
	/******/
	/******/ /******/ function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/ if (installedModules[moduleId]) {
			/******/ return installedModules[moduleId].exports;
			/******/
		} // Create a new module (and put it into the cache)
		/******/ /******/ var module = (installedModules[moduleId] = {
			/******/ i: moduleId,
			/******/ l: false,
			/******/ exports: {}
			/******/
		}); // Execute the module function
		/******/
		/******/ /******/ modules[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		); // Flag the module as loaded
		/******/
		/******/ /******/ module.l = true; // Return the exports of the module
		/******/
		/******/ /******/ return module.exports;
		/******/
	} // expose the modules object (__webpack_modules__)
	/******/
	/******/
	/******/ /******/ __webpack_require__.m = modules; // expose the module cache
	/******/
	/******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
	/******/
	/******/ /******/ __webpack_require__.d = function(exports, name, getter) {
		/******/ if (!__webpack_require__.o(exports, name)) {
			/******/ Object.defineProperty(exports, name, {
				enumerable: true,
				get: getter
			});
			/******/
		}
		/******/
	}; // define __esModule on exports
	/******/
	/******/ /******/ __webpack_require__.r = function(exports) {
		/******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
			/******/ Object.defineProperty(exports, Symbol.toStringTag, {
				value: "Module"
			});
			/******/
		}
		/******/ Object.defineProperty(exports, "__esModule", { value: true });
		/******/
	}; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
	/******/
	/******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
		value,
		mode
	) {
		/******/ if (mode & 1) value = __webpack_require__(value);
		/******/ if (mode & 8) return value;
		/******/ if (
			mode & 4 &&
			typeof value === "object" &&
			value &&
			value.__esModule
		)
			return value;
		/******/ var ns = Object.create(null);
		/******/ __webpack_require__.r(ns);
		/******/ Object.defineProperty(ns, "default", {
			enumerable: true,
			value: value
		});
		/******/ if (mode & 2 && typeof value != "string")
			for (var key in value)
				__webpack_require__.d(
					ns,
					key,
					function(key) {
						return value[key];
					}.bind(null, key)
				);
		/******/ return ns;
		/******/
	}; // getDefaultExport function for compatibility with non-harmony modules
	/******/
	/******/ /******/ __webpack_require__.n = function(module) {
		/******/ var getter =
			module && module.__esModule
				? /******/ function getDefault() {
						return module["default"];
				  }
				: /******/ function getModuleExports() {
						return module;
				  };
		/******/ __webpack_require__.d(getter, "a", getter);
		/******/ return getter;
		/******/
	}; // Object.prototype.hasOwnProperty.call
	/******/
	/******/ /******/ __webpack_require__.o = function(object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	}; // __webpack_public_path__
	/******/
	/******/ /******/ __webpack_require__.p = "./"; // Load entry module and return exports
	/******/
	/******/
	/******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js":
			/*!**********************************************************************!*\
  !*** ./node_modules/fontfaceobserver/fontfaceobserver.standalone.js ***!
  \**********************************************************************/
			/*! no static exports found */
			/***/ function(module, exports, __webpack_require__) {
				eval(
					'/* Font Face Observer v2.3.0 - © Bram Stein. License: BSD-3-Clause */(function(){function p(a,c){document.addEventListener?a.addEventListener("scroll",c,!1):a.attachEvent("scroll",c)}function u(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function b(){document.removeEventListener("DOMContentLoaded",b);a()}):document.attachEvent("onreadystatechange",function g(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",g),a()})};function w(a){this.g=document.createElement("div");this.g.setAttribute("aria-hidden","true");this.g.appendChild(document.createTextNode(a));this.h=document.createElement("span");this.i=document.createElement("span");this.m=document.createElement("span");this.j=document.createElement("span");this.l=-1;this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";\nthis.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.h.appendChild(this.m);this.i.appendChild(this.j);this.g.appendChild(this.h);this.g.appendChild(this.i)}\nfunction x(a,c){a.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+c+";"}function B(a){var c=a.g.offsetWidth,b=c+100;a.j.style.width=b+"px";a.i.scrollLeft=b;a.h.scrollLeft=a.h.scrollWidth+100;return a.l!==c?(a.l=c,!0):!1}function C(a,c){function b(){var e=g;B(e)&&null!==e.g.parentNode&&c(e.l)}var g=a;p(a.h,b);p(a.i,b);B(a)};function D(a,c,b){c=c||{};b=b||window;this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal";this.context=b}var E=null,F=null,G=null,H=null;function I(a){null===F&&(M(a)&&/Apple/.test(window.navigator.vendor)?(a=/AppleWebKit\\/([0-9]+)(?:\\.([0-9]+))(?:\\.([0-9]+))/.exec(window.navigator.userAgent),F=!!a&&603>parseInt(a[1],10)):F=!1);return F}function M(a){null===H&&(H=!!a.document.fonts);return H}\nfunction N(a,c){var b=a.style,g=a.weight;if(null===G){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(q){}G=""!==e.style.font}return[b,g,G?a.stretch:"","100px",c].join(" ")}\nD.prototype.load=function(a,c){var b=this,g=a||"BESbswy",e=0,q=c||3E3,J=(new Date).getTime();return new Promise(function(K,L){if(M(b.context)&&!I(b.context)){var O=new Promise(function(r,t){function h(){(new Date).getTime()-J>=q?t(Error(""+q+"ms timeout exceeded")):b.context.document.fonts.load(N(b,\'"\'+b.family+\'"\'),g).then(function(n){1<=n.length?r():setTimeout(h,25)},t)}h()}),P=new Promise(function(r,t){e=setTimeout(function(){t(Error(""+q+"ms timeout exceeded"))},q)});Promise.race([P,O]).then(function(){clearTimeout(e);\nK(b)},L)}else u(function(){function r(){var d;if(d=-1!=k&&-1!=l||-1!=k&&-1!=m||-1!=l&&-1!=m)(d=k!=l&&k!=m&&l!=m)||(null===E&&(d=/AppleWebKit\\/([0-9]+)(?:\\.([0-9]+))/.exec(window.navigator.userAgent),E=!!d&&(536>parseInt(d[1],10)||536===parseInt(d[1],10)&&11>=parseInt(d[2],10))),d=E&&(k==y&&l==y&&m==y||k==z&&l==z&&m==z||k==A&&l==A&&m==A)),d=!d;d&&(null!==f.parentNode&&f.parentNode.removeChild(f),clearTimeout(e),K(b))}function t(){if((new Date).getTime()-J>=q)null!==f.parentNode&&f.parentNode.removeChild(f),\nL(Error(""+q+"ms timeout exceeded"));else{var d=b.context.document.hidden;if(!0===d||void 0===d)k=h.g.offsetWidth,l=n.g.offsetWidth,m=v.g.offsetWidth,r();e=setTimeout(t,50)}}var h=new w(g),n=new w(g),v=new w(g),k=-1,l=-1,m=-1,y=-1,z=-1,A=-1,f=document.createElement("div");f.dir="ltr";x(h,N(b,"sans-serif"));x(n,N(b,"serif"));x(v,N(b,"monospace"));f.appendChild(h.g);f.appendChild(n.g);f.appendChild(v.g);b.context.document.body.appendChild(f);y=h.g.offsetWidth;z=n.g.offsetWidth;A=v.g.offsetWidth;t();\nC(h,function(d){k=d;r()});x(h,N(b,\'"\'+b.family+\'",sans-serif\'));C(n,function(d){l=d;r()});x(n,N(b,\'"\'+b.family+\'",serif\'));C(v,function(d){m=d;r()});x(v,N(b,\'"\'+b.family+\'",monospace\'))})})}; true?module.exports=D:(undefined);}());\n\n\n//# sourceURL=webpack:///./node_modules/fontfaceobserver/fontfaceobserver.standalone.js?'
				);

				/***/
			},

		/***/ "./src/_data/fontdata.json":
			/*!*********************************!*\
  !*** ./src/_data/fontdata.json ***!
  \*********************************/
			/*! exports provided: 0, 1, default */
			/***/ function(module) {
				eval(
					'module.exports = JSON.parse("[{\\"name\\":\\"DDAANNTTEE Italic\\",\\"selector\\":\\"ddaannttee-italic\\",\\"style\\":\\"italic\\"},{\\"name\\":\\"DDAANNTTEE Roman\\",\\"selector\\":\\"ddaannttee-roman\\",\\"style\\":\\"roman\\"}]");\n\n//# sourceURL=webpack:///./src/_data/fontdata.json?'
				);

				/***/
			},

		/***/ "./src/css/main.css":
			/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
			/*! no static exports found */
			/***/ function(module, exports, __webpack_require__) {
				eval(
					"// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/main.css?"
				);

				/***/
			},

		/***/ "./src/img sync recursive \\.(png|jpg|svg)$":
			/*!*************************************************!*\
  !*** ./src/img ?external sync \.(png|jpg|svg)$ ***!
  \*************************************************/
			/*! no static exports found */
			/***/ function(module, exports) {
				eval(
					'function webpackEmptyContext(req) {\n\tvar e = new Error("Cannot find module \'" + req + "\'");\n\te.code = \'MODULE_NOT_FOUND\';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = "./src/img sync recursive \\\\.(png|jpg|svg)$";\n\n//# sourceURL=webpack:///./src/img_?'
				);

				/***/
			},

		/***/ "./src/js/assets.js":
			/*!**************************!*\
  !*** ./src/js/assets.js ***!
  \**************************/
			/*! no static exports found */
			/***/ function(module, exports, __webpack_require__) {
				eval(
					'/**\n * This file automatically requires every supported image in `src/img`.\n */\nconst requireAll = r => r.keys().forEach(r);\nrequireAll(__webpack_require__("./src/img sync recursive \\\\.(png|jpg|svg)$"));\n\n//# sourceURL=webpack:///./src/js/assets.js?'
				);

				/***/
			},

		/***/ "./src/js/main.js":
			/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
			/*! no exports provided */
			/***/ function(module, __webpack_exports__, __webpack_require__) {
				"use strict";
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.js */ "./src/js/assets.js");\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_fontdata_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_data/fontdata.json */ "./src/_data/fontdata.json");\nvar _data_fontdata_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../_data/fontdata.json */ "./src/_data/fontdata.json", 1);\n/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");\n/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fontfaceobserver__WEBPACK_IMPORTED_MODULE_2__);\n// Copyright 2019 Google LLC\n\n// Licensed under the Apache License, Version 2.0 (the "License");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n\n//     https://www.apache.org/licenses/LICENSE-2.0\n\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an "AS IS" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n\n\n\nconst fontTimeOut = 5000; // In milliseconds\nconst fontClasses = _data_fontdata_json__WEBPACK_IMPORTED_MODULE_1__.map(f => f.selector);\n\n// Generic: throttle\nconst throttle = (fn, wait) => {\n  let last, queue;\n  return function runFn() {\n    const now = Date.now();\n    queue = clearTimeout(queue);\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    if (!last || now - last >= wait) {\n      fn.apply(null, args);\n      last = now;\n    } else {\n      queue = setTimeout(runFn.bind(null, ...args), wait - (now - last));\n    }\n  };\n};\n\n// Set up FontFaceObserver\nlet observers = [];\nfor (const fd of _data_fontdata_json__WEBPACK_IMPORTED_MODULE_1__) {\n  const font = new fontfaceobserver__WEBPACK_IMPORTED_MODULE_2___default.a(fd.name);\n  observers.push(font.load(null, fontTimeOut));\n}\nPromise.all(observers).then(() => {\n  // All fonts have loaded\n  document.documentElement.classList.add("fonts-loaded");\n}, () => {\n  // One or more fonts didn\'t load\n  document.documentElement.classList.add("fonts-failed");\n});\n\n// Interactive controls (sliders that tweak axes)\nconst interactives = document.querySelectorAll(".interactive-controls");\nfor (const interactive of interactives) {\n  const area = interactive.querySelector(".interactive-controls-text");\n  const styles = interactive.querySelector(".interactive-controls-styles");\n  const sliders = interactive.querySelectorAll(".interactive-controls-slider");\n  const instances = interactive.querySelector(".interactive-controls-instances");\n  const varset = (name, value) => {\n    area.style.setProperty("--".concat(name), value);\n  };\n  for (const slider of sliders) {\n    // Apply initial axis value to text area\n    varset(slider.name, slider.value);\n    slider.oninput = e => {\n      // Set new axis value to text area\n      varset(e.target.name, e.target.value);\n      // Unselect named instance dropdown\n      // Optionally, see if current axes match instance and select that\n      if (instances) {\n        instances.selectedIndex = -1;\n      }\n    };\n  }\n  if (instances) {\n    instances.onchange = e => {\n      const axes = JSON.parse(e.target.options[e.target.selectedIndex].value);\n      for (const axis in axes) {\n        // Set new axis value on slider\n        interactive.querySelector("[name=".concat(axis, "]")).value = axes[axis];\n        // Apply new axis value to text area\n        varset(axis, axes[axis]);\n      }\n    };\n  }\n  if (styles) {\n    styles.onchange = e => {\n      area.classList.remove(...fontClasses);\n      area.classList.add(e.target.value);\n    };\n  }\n\n  // Alignment controls for type tester\n  // Add active class to the current button (highlight it)\n  const buttonContainer = interactive.querySelector(".interactive-controls-buttons");\n  const buttons = buttonContainer.querySelectorAll("button");\n  for (const button of buttons) {\n    button.addEventListener("click", function () {\n      // Update button class\n      buttonContainer.querySelector(".active").classList.remove("active");\n      this.classList.add("active");\n      // Apply new alignment\n      area.classList.remove("align-left", "align-centre", "align-right");\n      area.classList.add(this.value);\n    });\n  }\n}\n\n// Watch if .am-i-in-view elements are visible on screen\n// and apply a class accordingly\nif ("IntersectionObserver" in window) {\n  // eslint-disable-next-line compat/compat\n  const obs = new IntersectionObserver(els => {\n    els.forEach(el => {\n      el.intersectionRatio > 0 ? el.target.classList.add("in-view") : el.target.classList.remove("in-view");\n    });\n  });\n  const elements = document.querySelectorAll(".am-i-in-view");\n  elements.forEach(el => {\n    obs.observe(el);\n  });\n}\n\n// Character grid\nconst grid = document.querySelector(".character-grid");\nconst gridzoom = document.querySelector(".character-grid-zoom");\nconst gridtoggle = document.querySelector(".character-grid-toggle");\ngrid.onmousemove = throttle(e => {\n  if (e.target.tagName === "LI") {\n    gridzoom.innerHTML = e.target.innerHTML;\n  }\n}, 100);\nif (gridtoggle) {\n  gridtoggle.onchange = e => {\n    grid.classList.remove(...fontClasses);\n    grid.classList.add(e.target.value);\n  };\n}\n\n//# sourceURL=webpack:///./src/js/main.js?'
				);

				/***/
			},

		/***/ 0:
			/*!*************************************************!*\
  !*** multi ./src/js/main.js ./src/css/main.css ***!
  \*************************************************/
			/*! no static exports found */
			/***/ function(module, exports, __webpack_require__) {
				eval(
					'__webpack_require__(/*! /home/human/workspace/specimen-builder/src/js/main.js */"./src/js/main.js");\nmodule.exports = __webpack_require__(/*! /home/human/workspace/specimen-builder/src/css/main.css */"./src/css/main.css");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js_./src/css/main.css?'
				);

				/***/
			}

		/******/
	}
);
