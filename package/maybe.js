module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_id__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isNull__ = __webpack_require__(5);



// Nothing :: _ -> Nothing
const Nothing = () => ({
  // chain :: ƒ -> Nothing
  chain: () => Nothing(),
  // map :: ƒ -> Nothing
  map: () => Nothing(),
  // else :: ƒ -> Maybe
  else: f => Maybe(f()),
  // fold :: ƒ -> Any
  fold: f => f(),
  // Any -> Maybe
  of: x => Maybe(x),
  // inspect :: ƒ -> String
  inspect: () => 'Nothing()',
})

// Maybe :: Any -> Maybe
const Maybe = x =>
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_id__["default"])(x)
    .map(__WEBPACK_IMPORTED_MODULE_1_isNull__["a" /* default */])
    .fold(nulled => nulled
      ? Nothing()
      : ({
        // chain :: ƒ -> Any
        chain: f => f(x),
        // map :: ƒ -> Maybe
        map: f => Maybe(f(x)),
        // fold :: ƒ -> Any
        fold: f => f(x),
        // else :: ƒ -> Maybe
        else: () => Maybe(x),
        // Any -> Maybe
        of: x => Maybe(x),
        // inspect :: -> String
        inspect: () => `Maybe(${x})`,
      }))

// Any -> Maybe
Maybe.of = x => Maybe(x)

/* harmony default export */ __webpack_exports__["default"] = Maybe;


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Id :: Any -> Id
const Id = x => ({
  // chain :: ƒ -> Monad
  chain: f => f(x),
  // map :: ƒ -> Id
  map: f => Id(f(x)),
  // fold :: ƒ -> Any
  fold: f => f(x),
  // ap :: ƒ -> Any
  ap: f => x(f),
  // of :: Any -> Id
  of: x => Id(x),
  // inspect :: -> String
  inspect: () => `Id(${x})`,
})

// of :: Any -> Id
Id.of = x => Id(x)

/* harmony default export */ __webpack_exports__["default"] = Id;


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// isNull :: Any -> Boolean
const isNull =
  value =>
    value === null || value === undefined

/* harmony default export */ __webpack_exports__["a"] = isNull;


/***/ })

/******/ });