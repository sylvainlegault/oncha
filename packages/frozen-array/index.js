/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Id :: Any -> Id
const Id = x => ({
  // chain :: ƒ -> Monad
  chain: f => f(x),
  // map :: ƒ -> Id
  map: f => Id(f(x)),
  // fold :: ƒ -> Any
  fold: f => f(x),
  // of :: Any -> Id
  of: x => Id(x),
  // inspect :: -> String
  inspect: () => `Id(${x})`,
})

// of :: Any -> Id
Id.of = x => Id(x)

/* harmony default export */ __webpack_exports__["a"] = Id;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Id__ = __webpack_require__(0);


// isFunction :: Any -> Boolean
const isFunction =
  func =>
    !!(func && func.constructor && func.call && func.apply)

// FrozenArray :: Array -> FrozenArray
const FrozenArray = array =>
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Id__["a" /* default */])(array || [])
    .map(Object.freeze)
    .chain(frozenArray => ({
      // head :: -> FrozenArray
      head: () => FrozenArray(frozenArray.slice(0, 1)),
      // tail :: -> FrozenArray
      tail: () => FrozenArray(frozenArray.slice(1)),
      // fold :: ƒ -> Array
      fold: f => isFunction(f) ? f(frozenArray) : frozenArray,
      // foldh :: ƒ -> Any
      foldh: f => isFunction(f) ? f(frozenArray.slice(0, 1)[0]) : frozenArray.slice(0, 1)[0],
      // nth :: Number -> Any
      nth: x => frozenArray[x],
      // concat :: FrozenArray -> FrozenArray
      concat: y => FrozenArray(frozenArray.concat(y)),
      // length :: -> Number
      length: () => frozenArray.length,
      // every :: ƒ -> Boolean
      every: f => frozenArray.every(f),
      // filter :: ƒ -> FrozenArray
      filter: f => FrozenArray(frozenArray.filter(f)),
      // includes :: Object -> Boolean
      includes: f => frozenArray.includes(f),
      // indexOf :: Object -> Number
      indexOf: f => frozenArray.indexOf(f),
      // inspect :: -> String
      inspect: () => `FrozenArray([${frozenArray}])`,
      // join :: ƒ -> String
      join: f => frozenArray.join(f),
      // lastIndexOf :: ƒ -> FrozenArray
      lastIndexOf: f => frozenArray.lastIndexOf(f),
      // map :: ƒ -> FrozenArray
      map: f => FrozenArray(frozenArray.map(f)),
      // reduce :: ƒ -> Any
      reduce: f => frozenArray.reduce(f),
      // reduceRight :: ƒ -> Any
      reduceRight: f => frozenArray.reduceRight(f),
      // reverse :: -> FrozenArray
      reverse: () => FrozenArray(frozenArray.reverse()),
      // slice :: Number -> (Number -> FrozenArray)
      slice: begin => end => FrozenArray(frozenArray.slice(begin, end)),
      // some :: ƒ -> Boolean
      some: f => frozenArray.some(f),
      // of :: Array -> FrozenArray
      of: array => FrozenArray(array),
    }))

// Array -> FrozenArray
FrozenArray.of = array => FrozenArray(array)

/* harmony default export */ __webpack_exports__["default"] = FrozenArray;


/***/ })
/******/ ]);