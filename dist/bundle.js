/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/body.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/body.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Roboto\", serif;\n  padding: 0 20px;\n  background: #222831;\n  height: 100vh;\n}\nbody .input-container {\n  width: 500px;\n  margin: 10px auto 50px auto;\n  padding: 10px;\n  position: relative;\n}\nbody .input-container #input {\n  width: 490px;\n  padding: 10px 20px;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n}\nbody main {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: auto auto;\n  /* Ensure two rows for location and conditions */\n  gap: 40px;\n  margin: 0;\n  padding: 0;\n}\nbody main .location-container {\n  grid-column: 1/2;\n  /* Ensures it is in the first column */\n  grid-row: 1/2;\n  height: 54vh;\n  /* Place in the first row */\n}\nbody main .location-container .weather-data {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nbody main .location-container .weather-data .location h1 {\n  color: #fff;\n  font-size: 3rem;\n}\nbody main .location-container .weather-data .location p {\n  color: #fff;\n}\nbody main .location-container .weather-data .weather-image {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nbody main .location-container .weather-data .weather-image .weather-icon {\n  width: 200px;\n  height: 200px;\n}\nbody main .location-container .weather-data .weather-image p {\n  color: #fff;\n  font-size: 1.2rem;\n  text-transform: capitalize;\n}\nbody main .days-container {\n  grid-column: 2/3;\n  /* Ensures it is in the second column */\n  grid-row: 1/3;\n  /* Span across the two rows */\n  padding: 0 20px;\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n  border-radius: 4px;\n}\nbody main .days-container h2 {\n  text-align: center;\n  color: #fff;\n}\nbody main .days-container .day-item {\n  padding: 5px 10px;\n  margin: 15px 0;\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  background: #9098a5;\n  border-radius: 4px;\n}\nbody main .days-container .day-item .day-icon {\n  width: 50px;\n  height: 50px;\n}\nbody .conditions-container {\n  grid-column: 1/2;\n  /* Places it directly below location-container */\n  grid-row: 2/3;\n  /* Place in the second row */\n  width: 100%;\n  padding: 10px;\n  height: 150px;\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n  color: #fff;\n  border-radius: 4px;\n}\nbody .conditions-container h1 {\n  color: #fff;\n  text-align: center;\n  margin: 0;\n}\nbody .conditions-container .condition {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nbody .conditions-container .condition .wrapper {\n  text-align: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-web-app/./src/styles/body.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-web-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-web-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/body.scss":
/*!******************************!*\
  !*** ./src/styles/body.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./body.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/body.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-web-app/./src/styles/body.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-web-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-web-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-web-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-web-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-web-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-web-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/icons.js":
/*!*********************************!*\
  !*** ./src/components/icons.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_image_clear_day_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/image/clear-day.svg */ \"./src/assets/image/clear-day.svg\");\n/* harmony import */ var _assets_image_clear_night_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/image/clear-night.svg */ \"./src/assets/image/clear-night.svg\");\n/* harmony import */ var _assets_image_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/image/cloudy.svg */ \"./src/assets/image/cloudy.svg\");\n/* harmony import */ var _assets_image_fog_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/image/fog.svg */ \"./src/assets/image/fog.svg\");\n/* harmony import */ var _assets_image_hail_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/image/hail.svg */ \"./src/assets/image/hail.svg\");\n/* harmony import */ var _assets_image_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/image/partly-cloudy-day.svg */ \"./src/assets/image/partly-cloudy-day.svg\");\n/* harmony import */ var _assets_image_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/image/partly-cloudy-night.svg */ \"./src/assets/image/partly-cloudy-night.svg\");\n/* harmony import */ var _assets_image_rain_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/image/rain.svg */ \"./src/assets/image/rain.svg\");\n/* harmony import */ var _assets_image_rain_snow_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/image/rain-snow.svg */ \"./src/assets/image/rain-snow.svg\");\n/* harmony import */ var _assets_image_rain_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/image/rain-snow-showers-day.svg */ \"./src/assets/image/rain-snow-showers-day.svg\");\n/* harmony import */ var _assets_image_rain_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/image/rain-snow-showers-night.svg */ \"./src/assets/image/rain-snow-showers-night.svg\");\n/* harmony import */ var _assets_image_showers_day_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/image/showers-day.svg */ \"./src/assets/image/showers-day.svg\");\n/* harmony import */ var _assets_image_showers_night_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/image/showers-night.svg */ \"./src/assets/image/showers-night.svg\");\n/* harmony import */ var _assets_image_sleet_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/image/sleet.svg */ \"./src/assets/image/sleet.svg\");\n/* harmony import */ var _assets_image_snow_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/image/snow.svg */ \"./src/assets/image/snow.svg\");\n/* harmony import */ var _assets_image_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/image/snow-showers-day.svg */ \"./src/assets/image/snow-showers-day.svg\");\n/* harmony import */ var _assets_image_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/image/snow-showers-night.svg */ \"./src/assets/image/snow-showers-night.svg\");\n/* harmony import */ var _assets_image_thunder_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/image/thunder.svg */ \"./src/assets/image/thunder.svg\");\n/* harmony import */ var _assets_image_thunder_rain_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/image/thunder-rain.svg */ \"./src/assets/image/thunder-rain.svg\");\n/* harmony import */ var _assets_image_thunder_showers_day_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/image/thunder-showers-day.svg */ \"./src/assets/image/thunder-showers-day.svg\");\n/* harmony import */ var _assets_image_thunder_showers_night_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/image/thunder-showers-night.svg */ \"./src/assets/image/thunder-showers-night.svg\");\n/* harmony import */ var _assets_image_wind_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/image/wind.svg */ \"./src/assets/image/wind.svg\");\n// Import images\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Map condition names to images\r\nconst icons = {\r\n    'clear-day': _assets_image_clear_day_svg__WEBPACK_IMPORTED_MODULE_0__,\r\n    'clear-night': _assets_image_clear_night_svg__WEBPACK_IMPORTED_MODULE_1__,\r\n    'cloudy': _assets_image_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__,\r\n    'fog': _assets_image_fog_svg__WEBPACK_IMPORTED_MODULE_3__,\r\n    'hail': _assets_image_hail_svg__WEBPACK_IMPORTED_MODULE_4__,\r\n    'partly-cloudy-day': _assets_image_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_5__,\r\n    'partly-cloudy-night': _assets_image_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_6__,\r\n    'rain': _assets_image_rain_svg__WEBPACK_IMPORTED_MODULE_7__,\r\n    'rain-snow': _assets_image_rain_snow_svg__WEBPACK_IMPORTED_MODULE_8__,\r\n    'rain-snow-showers-day': _assets_image_rain_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_9__,\r\n    'rain-snow-showers-night': _assets_image_rain_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_10__,\r\n    'showers-day': _assets_image_showers_day_svg__WEBPACK_IMPORTED_MODULE_11__,\r\n    'showers-night': _assets_image_showers_night_svg__WEBPACK_IMPORTED_MODULE_12__,\r\n    'sleet': _assets_image_sleet_svg__WEBPACK_IMPORTED_MODULE_13__,\r\n    'snow': _assets_image_snow_svg__WEBPACK_IMPORTED_MODULE_14__,\r\n    'snow-showers-day': _assets_image_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_15__,\r\n    'snow-showers-night': _assets_image_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_16__,\r\n    'thunder': _assets_image_thunder_svg__WEBPACK_IMPORTED_MODULE_17__,\r\n    'thunder-rain': _assets_image_thunder_rain_svg__WEBPACK_IMPORTED_MODULE_18__,\r\n    'thunder-showers-day': _assets_image_thunder_showers_day_svg__WEBPACK_IMPORTED_MODULE_19__,\r\n    'thunder-showers-night': _assets_image_thunder_showers_night_svg__WEBPACK_IMPORTED_MODULE_20__,\r\n    'wind': _assets_image_wind_svg__WEBPACK_IMPORTED_MODULE_21__,\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);\r\n\r\n\n\n//# sourceURL=webpack://weather-web-app/./src/components/icons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_body_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/body.scss */ \"./src/styles/body.scss\");\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/icons */ \"./src/components/icons.js\");\n// Import your styles\r\n\r\n\r\n\r\nconst API_KEY = \"AUJFLCFVM6F8SMRCWH6N7XJBE\";\r\nconst BASE_URL = \"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline\";\r\n\r\n// Selecting the search button and input field\r\nconst searchInput = document.querySelector('input');\r\n\r\nsearchInput.addEventListener('keydown', async (event) => {\r\n\r\n    if (event.key === 'Enter') {\r\n        const location = searchInput.value.trim();\r\n\r\n        if (location) {\r\n            try {\r\n                const weatherData = await fetchWeatherData(location);\r\n                displayWeatherData(weatherData);\r\n            } catch (error) {\r\n                console.error('Error fetching weather data:', error);\r\n            }\r\n        } else {\r\n            alert('Please enter a location!');\r\n        }\r\n    }\r\n});\r\n\r\n// Function to fetch weather data\r\nasync function fetchWeatherData(location) {\r\n    try {\r\n        const url = `${BASE_URL}/${location}?unitGroup=us&key=${API_KEY}&contentType=json`;\r\n        console.log('API Request URL:', url);\r\n\r\n        const response = await fetch(url);\r\n\r\n        if (!response.ok) {\r\n            throw new Error(`Failed to fetch data: ${response.status}`);\r\n        }\r\n\r\n        const data = await response.json();\r\n        console.log(data)\r\n\r\n        return data;\r\n    } catch (error) {\r\n        console.error('Network Error:', error);\r\n        return null;\r\n    }\r\n}\r\n\r\n// Function to display the weather data\r\nfunction displayWeatherData(weatherData) {\r\n    if (!weatherData) {\r\n        console.error('No weather data available.');\r\n        return;\r\n    }\r\n\r\n    const container = document.querySelector('.location-container');\r\n    let weatherContainer = document.querySelector('.weather-data');\r\n\r\n    if (weatherContainer) weatherContainer.remove();\r\n\r\n\r\n    // Create a new weather container\r\n    weatherContainer = document.createElement('div');\r\n    weatherContainer.className = 'weather-data';\r\n    const location = document.createElement('div');\r\n    location.className = 'location';\r\n    const image = document.createElement('div');\r\n    image.className = 'weather-image';\r\n\r\n    const locationName = weatherData.resolvedAddress || 'Unknown';\r\n    const temperature = weatherData.currentConditions?.temp || 'N/A';\r\n    const description = weatherData.description || 'N/A';\r\n    const conditionText = weatherData.currentConditions?.icon || 'unknown';  // Visual Crossing provides `icon` or `weather description`.\r\n    const iconPath = _components_icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"][conditionText] || _components_icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"default\"];\r\n\r\n    location.innerHTML = `\r\n        <h1>${locationName}</h1>\r\n        <p>Temperature: ${temperature}°C</p>\r\n        <p>${description}</p>\r\n            `;\r\n    image.innerHTML = `\r\n            <img src=\"${iconPath}\" alt=\"${conditionText}\" class=\"weather-icon\">\r\n            <p>${conditionText}</p>\r\n\r\n    `\r\n    weatherContainer.appendChild(location);\r\n    weatherContainer.appendChild(image);\r\n    container.appendChild(weatherContainer);\r\n\r\n    displaySevenDays(weatherData);\r\n    displayConditions(weatherData)\r\n}\r\n\r\nfunction displaySevenDays(weatherData) {\r\n    // Render 7-day forecast\r\n    const daysContainer = document.querySelector('.days-container');\r\n    daysContainer.innerHTML = `<h2>7-Day Forecast</h2>`;\r\n\r\n    const dailyData = weatherData?.days;\r\n\r\n    console.log(dailyData)\r\n\r\n    if (Array.isArray(dailyData) && dailyData.length >= 7) {\r\n        dailyData.slice(0, 7).forEach(dayData => {\r\n            const dayItem = document.createElement('div');\r\n            dayItem.className = 'day-item';\r\n\r\n            const date = new Date(dayData.datetime);\r\n            const formattedDate = `${date.getMonth() + 1}-${date.getDate()}- ${date.getFullYear()}`;\r\n\r\n            const iconPathForDay = _components_icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"][dayData.icon] || _components_icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"default\"];\r\n            const tempHigh = dayData.tempmax;\r\n            const tempLow = dayData.tempmin;\r\n\r\n            dayItem.innerHTML = `\r\n                <p><strong>${formattedDate}</strong></p>\r\n                <img src=\"${iconPathForDay}\" alt=\"${dayData.icon}\" class=\"day-icon\">\r\n                <p>High: ${tempHigh}°C / Low: ${tempLow}°C</p>\r\n            `;\r\n\r\n            daysContainer.appendChild(dayItem);\r\n        });\r\n    } else {\r\n        daysContainer.innerHTML = `<p>7-day forecast data is not available.</p>`;\r\n    }\r\n}\r\n\r\nfunction displayConditions(weatherData) {\r\n    const conditionCon = document.querySelector('.conditions-container');\r\n    const condition = document.createElement('div');\r\n    condition.className = 'condition';\r\n\r\n    conditionCon.innerHTML = `\r\n        <h1>Air Conditions</h1>\r\n    `\r\n\r\n    // Clear any existing content\r\n    condition.innerHTML = '';\r\n\r\n    // Data to display\r\n    const dataToDisplay = [\r\n        { title: 'Humidity', value: `${weatherData.currentConditions.humidity}%` },\r\n        { title: 'Condition', value: weatherData.currentConditions.conditions },\r\n        { title: 'Wind Speed', value: `${weatherData.currentConditions.windspeed}mph` },\r\n        { title: 'Wind Gust', value: `${weatherData.currentConditions.windgust}mph` }\r\n\r\n    ];\r\n\r\n    // Dynamically create wrapper elements\r\n    dataToDisplay.forEach(item => {\r\n        const wrapper = document.createElement('div');\r\n        wrapper.className = 'wrapper';\r\n\r\n        const title = document.createElement('h2');\r\n        title.textContent = item.title;\r\n\r\n        const value = document.createElement('p');\r\n        value.textContent = item.value;\r\n\r\n        wrapper.appendChild(title);\r\n        wrapper.appendChild(value);\r\n        condition.appendChild(wrapper)\r\n        conditionCon.appendChild(condition);\r\n    });\r\n}\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', async () => {\r\n    const defaultLocation = 'Miami';\r\n\r\n    try {\r\n        const weatherData = await fetchWeatherData(defaultLocation);\r\n        displayWeatherData(weatherData);\r\n    } catch (error) {\r\n        console.error('Failed to load default location weather data for Miami', error);\r\n    }\r\n})\r\n\r\n\n\n//# sourceURL=webpack://weather-web-app/./src/index.js?");

/***/ }),

/***/ "./src/assets/image/clear-day.svg":
/*!****************************************!*\
  !*** ./src/assets/image/clear-day.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/clear-day.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/clear-day.svg?");

/***/ }),

/***/ "./src/assets/image/clear-night.svg":
/*!******************************************!*\
  !*** ./src/assets/image/clear-night.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/clear-night.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/clear-night.svg?");

/***/ }),

/***/ "./src/assets/image/cloudy.svg":
/*!*************************************!*\
  !*** ./src/assets/image/cloudy.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/cloudy.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/cloudy.svg?");

/***/ }),

/***/ "./src/assets/image/fog.svg":
/*!**********************************!*\
  !*** ./src/assets/image/fog.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/fog.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/fog.svg?");

/***/ }),

/***/ "./src/assets/image/hail.svg":
/*!***********************************!*\
  !*** ./src/assets/image/hail.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/hail.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/hail.svg?");

/***/ }),

/***/ "./src/assets/image/partly-cloudy-day.svg":
/*!************************************************!*\
  !*** ./src/assets/image/partly-cloudy-day.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/partly-cloudy-day.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/partly-cloudy-day.svg?");

/***/ }),

/***/ "./src/assets/image/partly-cloudy-night.svg":
/*!**************************************************!*\
  !*** ./src/assets/image/partly-cloudy-night.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/partly-cloudy-night.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/partly-cloudy-night.svg?");

/***/ }),

/***/ "./src/assets/image/rain-snow-showers-day.svg":
/*!****************************************************!*\
  !*** ./src/assets/image/rain-snow-showers-day.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/rain-snow-showers-day.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/rain-snow-showers-day.svg?");

/***/ }),

/***/ "./src/assets/image/rain-snow-showers-night.svg":
/*!******************************************************!*\
  !*** ./src/assets/image/rain-snow-showers-night.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/rain-snow-showers-night.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/rain-snow-showers-night.svg?");

/***/ }),

/***/ "./src/assets/image/rain-snow.svg":
/*!****************************************!*\
  !*** ./src/assets/image/rain-snow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/rain-snow.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/rain-snow.svg?");

/***/ }),

/***/ "./src/assets/image/rain.svg":
/*!***********************************!*\
  !*** ./src/assets/image/rain.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/rain.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/rain.svg?");

/***/ }),

/***/ "./src/assets/image/showers-day.svg":
/*!******************************************!*\
  !*** ./src/assets/image/showers-day.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/showers-day.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/showers-day.svg?");

/***/ }),

/***/ "./src/assets/image/showers-night.svg":
/*!********************************************!*\
  !*** ./src/assets/image/showers-night.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/showers-night.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/showers-night.svg?");

/***/ }),

/***/ "./src/assets/image/sleet.svg":
/*!************************************!*\
  !*** ./src/assets/image/sleet.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/sleet.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/sleet.svg?");

/***/ }),

/***/ "./src/assets/image/snow-showers-day.svg":
/*!***********************************************!*\
  !*** ./src/assets/image/snow-showers-day.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/snow-showers-day.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/snow-showers-day.svg?");

/***/ }),

/***/ "./src/assets/image/snow-showers-night.svg":
/*!*************************************************!*\
  !*** ./src/assets/image/snow-showers-night.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/snow-showers-night.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/snow-showers-night.svg?");

/***/ }),

/***/ "./src/assets/image/snow.svg":
/*!***********************************!*\
  !*** ./src/assets/image/snow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/snow.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/snow.svg?");

/***/ }),

/***/ "./src/assets/image/thunder-rain.svg":
/*!*******************************************!*\
  !*** ./src/assets/image/thunder-rain.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/thunder-rain.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/thunder-rain.svg?");

/***/ }),

/***/ "./src/assets/image/thunder-showers-day.svg":
/*!**************************************************!*\
  !*** ./src/assets/image/thunder-showers-day.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/thunder-showers-day.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/thunder-showers-day.svg?");

/***/ }),

/***/ "./src/assets/image/thunder-showers-night.svg":
/*!****************************************************!*\
  !*** ./src/assets/image/thunder-showers-night.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/thunder-showers-night.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/thunder-showers-night.svg?");

/***/ }),

/***/ "./src/assets/image/thunder.svg":
/*!**************************************!*\
  !*** ./src/assets/image/thunder.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/thunder.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/thunder.svg?");

/***/ }),

/***/ "./src/assets/image/wind.svg":
/*!***********************************!*\
  !*** ./src/assets/image/wind.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/wind.svg\";\n\n//# sourceURL=webpack://weather-web-app/./src/assets/image/wind.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;