/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/watcher */ \"./js/utils/watcher.js\");\n/* harmony import */ var _utils_moudle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/moudle */ \"./js/utils/moudle.js\");\nlet _dom=document.getElementById('dom');_dom.addEventListener('input',function(e){obj.key=_dom.value;});let obj={key:'value',data:2};new _utils_watcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"](obj);// 监听者模型\nnew _utils_moudle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('key',function(){// 订阅者模型\nreturn obj.key;},function(val){console.log(val,'moudle cd');});\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/utils/deper.js":
/*!***************************!*\
  !*** ./js/utils/deper.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 订阅者处理类\r\n * @param {*} obj \r\n */let uid=0;let deper=function(obj){this.params=obj;this.subs=[];this.id=uid++;};deper.prototype={addSub(sub){this.subs.push(sub);},addMoudle(){deper.target.addSub(this);},removeSub(sub){let index=this.subs.indexOf(sub);if(~index){this.subs.slice(index,1);}},notify(newVal){console.log(this.subs,'subs');this.subs.forEach(sub=>{sub.update(newVal);});}};deper.target=null;/* harmony default export */ __webpack_exports__[\"default\"] = (deper);\n\n//# sourceURL=webpack:///./js/utils/deper.js?");

/***/ }),

/***/ "./js/utils/moudle.js":
/*!****************************!*\
  !*** ./js/utils/moudle.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deper */ \"./js/utils/deper.js\");\n/**\r\n * 订阅者模型\r\n */let Moudle=function(key,expOrFn,cd){// this.obj = options.data\nthis.key=key;this.cd=cd;this.depids={};if(typeof expOrFn==='function'){this.getter=expOrFn;}this.value=this.get();};Moudle.prototype={update(newVal){this.run(newVal);},run(newVal){let oldVal=this.value;console.log(oldVal,'oldval');if(newVal!==oldVal){console.log('done');this.value=newVal;this.cd(newVal);}},addSub(dep){if(!this.depids.hasOwnProperty(dep.id)){dep.addSub(this);this.depids[dep.id]=dep;}},get(){_deper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target=this;let val=this.getter();_deper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target=null;return val;}};/* harmony default export */ __webpack_exports__[\"default\"] = (Moudle);\n\n//# sourceURL=webpack:///./js/utils/moudle.js?");

/***/ }),

/***/ "./js/utils/observ.js":
/*!****************************!*\
  !*** ./js/utils/observ.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return observ; });\n/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watcher */ \"./js/utils/watcher.js\");\nfunction observ(obj){if(obj&&typeof obj==='object'){return new _watcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"](obj);}}\n\n//# sourceURL=webpack:///./js/utils/observ.js?");

/***/ }),

/***/ "./js/utils/watcher.js":
/*!*****************************!*\
  !*** ./js/utils/watcher.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deper */ \"./js/utils/deper.js\");\n/* harmony import */ var _observ__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observ */ \"./js/utils/observ.js\");\n/**\r\n * 监听者模型\r\n * @param {*} options \r\n */let Watcher=function(options){this.data=options;console.log(options);// this.key = options.key\n// this.cd = options.cd\nthis.init(this.data);};Watcher.prototype={init(data){Object.keys(data).forEach(key=>{this.dealData(key,data[key]);});},dealData(key,val){this.watch(this.data,key,val);},watch(data,key,val){let _this=this;let dep=new _deper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();// 子对象处理\nlet childObj=Object(_observ__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(val);Object.defineProperty(data,key,{set(newVal){console.log(newVal,'setData');if(typeof _this.cd==='function'){_this.cd(newVal);}if(typeof newVal==='object'){childObj=Object(_observ__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newVal);}dep.notify(newVal);// 通知所有订阅者\n},get(){if(_deper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target){dep.addMoudle();}return val;}});}};/* harmony default export */ __webpack_exports__[\"default\"] = (Watcher);\n\n//# sourceURL=webpack:///./js/utils/watcher.js?");

/***/ })

/******/ });