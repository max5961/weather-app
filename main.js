/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/index.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/index.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_src_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./src/reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/src/reset.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_src_responsive_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./src/responsive.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/src/responsive.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__);
// Imports





var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/media/background-image3.jpg */ "./src/media/background-image3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_src_reset_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_src_responsive_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* main components */
#content {
    width: 100vw;
    height: 100vh;
    padding: 10px;
    position: relative;
    display: grid;
    gap: 25px;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "sidebar  current"
        "sidebar ."
        "forecast forecast";
    filter: saturate(0.8);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    /* background-color: antiquewhite; */
}
.sidebar {
    grid-area: sidebar;
}
.content-box.current {
    grid-area: current;
}
.content-box.forecast {
    grid-area: forecast;
}
img.loading-gif {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
}

.content-box {
    background-color: #2e2e2e40;
    backdrop-filter: blur(5px);
    border-radius: 15px;
    padding: 15px;
    border: 3px solid #22487E;
    color: #ffffff;
}

#main-content {
    height: 100vh;
    flex-grow: 1;
    padding: 10px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

img.icon {
    filter: brightness(0) invert(1);
}

/* sidebar */
.sidebar {
    height: 100%;
    width: 300px;
}
.sidebar img {
    height: 35px;
    width: 35px;
}
.sidebar .content-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    overflow: auto;
}
.sidebar form.search  {
    margin-bottom: 20px;
    width: 100%;
}
.sidebar form.search input {
    height: 40px;
    width: 100%;
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 50px;
    border: 2px solid #ffffff;
    margin-bottom: 10px;
    font-size: 18px;
    background-color: transparent;
    color: #ffffff;
}
.sidebar form.search input::placeholder {
    color: #d3d3d3;
}
.sidebar form.search button[type="submit"] {
    position: absolute;
    top: 19px;
    right: 25px;
}
.sidebar form.search img.search-icon {
    height: 30px;
    width: 30px;
}
.sidebar form.search img.search-icon:hover {
    filter: brightness(.8);
}
.sidebar form.search img.search-icon:active {
    filter: brightness(.6);
}
.sidebar form.search p.error-message {
    visibility: hidden;
    text-align: center;
}
.sidebar form.search p.error-message.visible {
    visibility: visible;
}
.sidebar button.expand-menu {
    width: 100%;
    height: 0;
    overflow: hidden;
}
.sidebar .settings-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 20px;
    width: 100%;
}
.sidebar .settings-content .toggle-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    width: 100%;
}
.sidebar .toggle-container button {
    border: 2px solid #ffffff;
    padding: 5px 0 5px 0;
    border-radius: 20px;
    transition: all 100ms ease-in-out;
}
.sidebar .toggle-container button:hover {
    border-color:#000000;
    background-color: #000000;
}
.sidebar .toggle-container button:active {
    border-color:#000000;
    background-color: #00000080;
}
.sidebar .toggle-container button.chosen-setting {
    color: #000000;
    background-color: #69bbff80;
    border-color: #000000;
}
.sidebar ul.saved-cities {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
}
.sidebar ul.saved-cities li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
}
.sidebar ul.saved-cities li img.delete {
    height: 19px;
    width: 19px;
}
.sidebar ul.saved-cities li button.delete {
    filter: brightness(0) invert(1);
    transition: filter 100ms ease-in-out;
}
.sidebar ul.saved-cities li button.delete:hover {
    filter: brightness(0.9);
}
.sidebar ul.saved-cities li button.delete:active {
    filter: brightness(1);
}
.sidebar ul.saved-cities button.left-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-grow: 1;
    text-align: left;
    transition: color 100ms ease-in-out;
}
.sidebar ul.saved-cities button.left-container:hover {
    color: #e2e2e2;
}
.sidebar ul.saved-cities button.left-container:active {
    color: #cccccc;
}
.sidebar ul.saved-cities h3 {
    font-size: 15px;
}
.sidebar ul.saved-cities p.region {
    font-size: 12px;
}

/* current weather */
.content-box.current {
    padding-left: 25px;
    padding-right: 25px;
    max-width: 750px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-template-areas:
        "city-region time-date"
        "city-region ."
        "temp condition"
        "properties properties"
          
}
.content-box.current .city-region-container {
    grid-area: city-region;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
    .content-box.current .city {
        font-size: 30px;
    }
    .content-box.current .region {
        font-size: 16px;
    }
.content-box.current .time-date-container {
    grid-area: time-date;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}
    .content-box.current .time {
        font-size: 25px;
    }
        .content-box.current .time span {
            font-size: 18px;
            margin-right: 6px;
        }
    .content-box.current .date {
        font-size: 12px;
    }
.content-box.current .temp {
    grid-area: temp;
    font-size: 50px;
    font-weight: 900;
    align-self: end;
}
.content-box.current .condition-container {
    grid-area: condition;
    justify-self: end;
    align-self: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: auto;
}
    .content-box.current .condition-icon {
        height: 65px;
        width: 65px;
    }
.content-box.current .weather-properties {
    grid-area: properties;
}

/* weather-properties container*/
.weather-properties {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    align-items: center;
    gap: 15px;
    width: 100%;
    border-top: 2px solid #ffffff;
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
}
.weather-properties .weather-property {
    display: flex;
    gap: 5px;
}
.weather-properties .weather-property img {
    height: 20px;
    width: 20px;
    align-self: center;
}
.weather-properties .weather-property .right-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

/* forecast */
.content-box.forecast {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    overflow: auto;
}
.content-box.forecast .hourly-date-container {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
}
.content-box.forecast .hourly-date-container .hours-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
}
.content-box.forecast .hourly-date-container p.date {
    font-weight: 900;
    font-size: 15px;
    width: 100%;
    border-bottom: 2px solid #ffffff;
}
.content-box.forecast .forecast-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    flex-shrink: 0;
}
.content-box.forecast .forecast-item > * {
    width: 100%;
    text-align: center;
}
.content-box.forecast .forecast-item h3 {
    margin-bottom: 5px;
}
.content-box.forecast .high-low-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3px;
}
    .content-box.forecast span.divider {
        font-size: 15px;
        font-weight: 900;
    }
    .content-box.forecast span.high-temp {
        font-weight: 900;
        font-size: 15px;
    }
    .content-box.forecast span.low-temp {
        font-size: 13px;
    }
.content-box.forecast .condition-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/style/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('./src/reset.css');\n\n/* main components */\n#content {\n    width: 100vw;\n    height: 100vh;\n    padding: 10px;\n    position: relative;\n    display: grid;\n    gap: 25px;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n        \"sidebar  current\"\n        \"sidebar .\"\n        \"forecast forecast\";\n    filter: saturate(0.8);\n    background-image: url('../../src/media/background-image3.jpg');\n    background-size: cover;\n    /* background-color: antiquewhite; */\n}\n.sidebar {\n    grid-area: sidebar;\n}\n.content-box.current {\n    grid-area: current;\n}\n.content-box.forecast {\n    grid-area: forecast;\n}\nimg.loading-gif {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n.content-box {\n    background-color: #2e2e2e40;\n    backdrop-filter: blur(5px);\n    border-radius: 15px;\n    padding: 15px;\n    border: 3px solid #22487E;\n    color: #ffffff;\n}\n\n#main-content {\n    height: 100vh;\n    flex-grow: 1;\n    padding: 10px;\n    color: #ffffff;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nimg.icon {\n    filter: brightness(0) invert(1);\n}\n\n/* sidebar */\n.sidebar {\n    height: 100%;\n    width: 300px;\n}\n.sidebar img {\n    height: 35px;\n    width: 35px;\n}\n.sidebar .content-box {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 5px;\n    overflow: auto;\n}\n.sidebar form.search  {\n    margin-bottom: 20px;\n    width: 100%;\n}\n.sidebar form.search input {\n    height: 40px;\n    width: 100%;\n    border-radius: 20px;\n    padding-left: 20px;\n    padding-right: 50px;\n    border: 2px solid #ffffff;\n    margin-bottom: 10px;\n    font-size: 18px;\n    background-color: transparent;\n    color: #ffffff;\n}\n.sidebar form.search input::placeholder {\n    color: #d3d3d3;\n}\n.sidebar form.search button[type=\"submit\"] {\n    position: absolute;\n    top: 19px;\n    right: 25px;\n}\n.sidebar form.search img.search-icon {\n    height: 30px;\n    width: 30px;\n}\n.sidebar form.search img.search-icon:hover {\n    filter: brightness(.8);\n}\n.sidebar form.search img.search-icon:active {\n    filter: brightness(.6);\n}\n.sidebar form.search p.error-message {\n    visibility: hidden;\n    text-align: center;\n}\n.sidebar form.search p.error-message.visible {\n    visibility: visible;\n}\n.sidebar button.expand-menu {\n    width: 100%;\n    height: 0;\n    overflow: hidden;\n}\n.sidebar .settings-content {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 10px;\n    margin-bottom: 20px;\n    width: 100%;\n}\n.sidebar .settings-content .toggle-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 5px;\n    width: 100%;\n}\n.sidebar .toggle-container button {\n    border: 2px solid #ffffff;\n    padding: 5px 0 5px 0;\n    border-radius: 20px;\n    transition: all 100ms ease-in-out;\n}\n.sidebar .toggle-container button:hover {\n    border-color:#000000;\n    background-color: #000000;\n}\n.sidebar .toggle-container button:active {\n    border-color:#000000;\n    background-color: #00000080;\n}\n.sidebar .toggle-container button.chosen-setting {\n    color: #000000;\n    background-color: #69bbff80;\n    border-color: #000000;\n}\n.sidebar ul.saved-cities {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 20px;\n    width: 100%;\n}\n.sidebar ul.saved-cities li {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n}\n.sidebar ul.saved-cities li img.delete {\n    height: 19px;\n    width: 19px;\n}\n.sidebar ul.saved-cities li button.delete {\n    filter: brightness(0) invert(1);\n    transition: filter 100ms ease-in-out;\n}\n.sidebar ul.saved-cities li button.delete:hover {\n    filter: brightness(0.9);\n}\n.sidebar ul.saved-cities li button.delete:active {\n    filter: brightness(1);\n}\n.sidebar ul.saved-cities button.left-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-grow: 1;\n    text-align: left;\n    transition: color 100ms ease-in-out;\n}\n.sidebar ul.saved-cities button.left-container:hover {\n    color: #e2e2e2;\n}\n.sidebar ul.saved-cities button.left-container:active {\n    color: #cccccc;\n}\n.sidebar ul.saved-cities h3 {\n    font-size: 15px;\n}\n.sidebar ul.saved-cities p.region {\n    font-size: 12px;\n}\n\n/* current weather */\n.content-box.current {\n    padding-left: 25px;\n    padding-right: 25px;\n    max-width: 750px;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-auto-rows: auto;\n    grid-template-areas:\n        \"city-region time-date\"\n        \"city-region .\"\n        \"temp condition\"\n        \"properties properties\"\n          \n}\n.content-box.current .city-region-container {\n    grid-area: city-region;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n    .content-box.current .city {\n        font-size: 30px;\n    }\n    .content-box.current .region {\n        font-size: 16px;\n    }\n.content-box.current .time-date-container {\n    grid-area: time-date;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n    .content-box.current .time {\n        font-size: 25px;\n    }\n        .content-box.current .time span {\n            font-size: 18px;\n            margin-right: 6px;\n        }\n    .content-box.current .date {\n        font-size: 12px;\n    }\n.content-box.current .temp {\n    grid-area: temp;\n    font-size: 50px;\n    font-weight: 900;\n    align-self: end;\n}\n.content-box.current .condition-container {\n    grid-area: condition;\n    justify-self: end;\n    align-self: start;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    height: auto;\n}\n    .content-box.current .condition-icon {\n        height: 65px;\n        width: 65px;\n    }\n.content-box.current .weather-properties {\n    grid-area: properties;\n}\n\n/* weather-properties container*/\n.weather-properties {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n    align-items: center;\n    gap: 15px;\n    width: 100%;\n    border-top: 2px solid #ffffff;\n    margin-top: 20px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.weather-properties .weather-property {\n    display: flex;\n    gap: 5px;\n}\n.weather-properties .weather-property img {\n    height: 20px;\n    width: 20px;\n    align-self: center;\n}\n.weather-properties .weather-property .right-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n/* forecast */\n.content-box.forecast {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 25px;\n    overflow: auto;\n}\n.content-box.forecast .hourly-date-container {\n    width: auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    gap: 10px;\n}\n.content-box.forecast .hourly-date-container .hours-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 25px;\n}\n.content-box.forecast .hourly-date-container p.date {\n    font-weight: 900;\n    font-size: 15px;\n    width: 100%;\n    border-bottom: 2px solid #ffffff;\n}\n.content-box.forecast .forecast-item {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    width: 100px;\n    flex-shrink: 0;\n}\n.content-box.forecast .forecast-item > * {\n    width: 100%;\n    text-align: center;\n}\n.content-box.forecast .forecast-item h3 {\n    margin-bottom: 5px;\n}\n.content-box.forecast .high-low-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 3px;\n}\n    .content-box.forecast span.divider {\n        font-size: 15px;\n        font-weight: 900;\n    }\n    .content-box.forecast span.high-temp {\n        font-weight: 900;\n        font-size: 15px;\n    }\n    .content-box.forecast span.low-temp {\n        font-size: 13px;\n    }\n.content-box.forecast .condition-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n@import url('./src/responsive.css');\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/src/reset.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/src/reset.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&family=Roboto+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-font: 'Montserrat', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--main-font);
}
button {
    background-color: inherit;
    color: inherit;
    border: none;
}
li {
    list-style-type: none;
}
textarea {
    resize: none;
    outline: none;
}
input {
    outline: none;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: inherit;
    height: 35px;
}

::-webkit-scrollbar {
    height: 12px;
}
::-webkit-scrollbar-thumb {
    background-color: #2d5894; 
    border-radius: 10px;
}
::-webkit-scrollbar-track:hover {
    background-color: transparent;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #16345f;
}`, "",{"version":3,"sources":["webpack://./src/style/src/reset.css"],"names":[],"mappings":"AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,yBAAyB;IACzB,cAAc;IACd,YAAY;AAChB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;AACA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,yBAAyB;AAC7B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&family=Roboto+Mono&display=swap');\n\n:root {\n    --main-font: 'Montserrat', sans-serif;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--main-font);\n}\nbutton {\n    background-color: inherit;\n    color: inherit;\n    border: none;\n}\nli {\n    list-style-type: none;\n}\ntextarea {\n    resize: none;\n    outline: none;\n}\ninput {\n    outline: none;\n    border-radius: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    background-color: inherit;\n    height: 35px;\n}\n\n::-webkit-scrollbar {\n    height: 12px;\n}\n::-webkit-scrollbar-thumb {\n    background-color: #2d5894; \n    border-radius: 10px;\n}\n::-webkit-scrollbar-track:hover {\n    background-color: transparent;\n}\n::-webkit-scrollbar-thumb:hover {\n    background-color: #16345f;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/src/responsive.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/src/responsive.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (max-width: 750px) {
    body #content {
        display: grid;
        height: auto;
        min-height: 100vh;
        width: auto;
        gap: 25px;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
            "sidebar"
            "current"
            "forecast";
    }
    #content .sidebar {
        grid-area: sidebar;
        width: 100%;
        height: 142px;
        overflow: hidden;
    }
        #content .sidebar .content-box {
            overflow: hidden;
        }
        #content .sidebar .content-box form {
            margin-bottom: 5px;
        }
        #content .sidebar .content-box button.expand-menu {
            height: auto;
            overflow: visible;
            border-radius: 20px;
            width: 100%;
            background-color: transparent;
        }
        #content .sidebar .content-box button.expand-menu:hover {
            background-color: #00000050;
        }
        #content .sidebar .content-box button.expand-menu:active {
            background-color: #00000030;
        }
    #content .content-box.current {
        grid-area: current;
        width: 100%;
    }
    #content .content-box.forecast {
        grid-area: forecast;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    #content .content-box.forecast > * {
        width: 100%;
    }
    #content .content-box.forecast .forecast-item {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #content .content-box.forecast .forecast-item .condition-container {
        display: flex;
        flex-direction: row;
    }

    #content .content-box.forecast.hourly {
        display: flex;
        flex-direction: column;
        height: auto;
    }
    #content .content-box.forecast.hourly .hourly-date-container {
        display: flex;
        flex-direction: column;
    }
    #content .content-box.forecast.hourly .hourly-date-container .hours-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    #content .content-box.forecast.hourly .hourly-date-container .hours-container .forecast-item {
        display: grid;
        grid-template-columns: 1fr 2fr 2fr;
    }
}

@media screen and (max-width: 500px) {
    body #content .content-box.current {
        padding-left: 25px;
        padding-right: 25px;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    body #content .content-box.current > * {
        width: 100%;
        align-items: center;
        text-align: center;
    }
    body #content .content-box.current .city-region-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
    }

    #content .content-box.forecast.hourly .hourly-date-container .hours-container .forecast-item {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    #content > * {
        font-size: 0.8em;
    }
}`, "",{"version":3,"sources":["webpack://./src/style/src/responsive.css"],"names":[],"mappings":"AAAA;IACI;QACI,aAAa;QACb,YAAY;QACZ,iBAAiB;QACjB,WAAW;QACX,SAAS;QACT,0BAA0B;QAC1B,iCAAiC;QACjC;;;sBAGc;IAClB;IACA;QACI,kBAAkB;QAClB,WAAW;QACX,aAAa;QACb,gBAAgB;IACpB;QACI;YACI,gBAAgB;QACpB;QACA;YACI,kBAAkB;QACtB;QACA;YACI,YAAY;YACZ,iBAAiB;YACjB,mBAAmB;YACnB,WAAW;YACX,6BAA6B;QACjC;QACA;YACI,2BAA2B;QAC/B;QACA;YACI,2BAA2B;QAC/B;IACJ;QACI,kBAAkB;QAClB,WAAW;IACf;IACA;QACI,mBAAmB;QACnB,aAAa;QACb,sBAAsB;QACtB,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;QACI,WAAW;QACX,aAAa;QACb,mBAAmB;QACnB,8BAA8B;IAClC;;IAEA;QACI,aAAa;QACb,mBAAmB;IACvB;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,YAAY;IAChB;IACA;QACI,aAAa;QACb,sBAAsB;IAC1B;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;IACf;IACA;QACI,aAAa;QACb,kCAAkC;IACtC;AACJ;;AAEA;IACI;QACI,kBAAkB;QAClB,mBAAmB;QACnB,WAAW;QACX,YAAY;QACZ,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;IACA;QACI,WAAW;QACX,mBAAmB;QACnB,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,QAAQ;IACZ;;IAEA;QACI,aAAa;QACb,kCAAkC;IACtC;;IAEA;QACI,gBAAgB;IACpB;AACJ","sourcesContent":["@media screen and (max-width: 750px) {\n    body #content {\n        display: grid;\n        height: auto;\n        min-height: 100vh;\n        width: auto;\n        gap: 25px;\n        grid-template-columns: 1fr;\n        grid-template-rows: auto 1fr auto;\n        grid-template-areas:\n            \"sidebar\"\n            \"current\"\n            \"forecast\";\n    }\n    #content .sidebar {\n        grid-area: sidebar;\n        width: 100%;\n        height: 142px;\n        overflow: hidden;\n    }\n        #content .sidebar .content-box {\n            overflow: hidden;\n        }\n        #content .sidebar .content-box form {\n            margin-bottom: 5px;\n        }\n        #content .sidebar .content-box button.expand-menu {\n            height: auto;\n            overflow: visible;\n            border-radius: 20px;\n            width: 100%;\n            background-color: transparent;\n        }\n        #content .sidebar .content-box button.expand-menu:hover {\n            background-color: #00000050;\n        }\n        #content .sidebar .content-box button.expand-menu:active {\n            background-color: #00000030;\n        }\n    #content .content-box.current {\n        grid-area: current;\n        width: 100%;\n    }\n    #content .content-box.forecast {\n        grid-area: forecast;\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n    }\n    #content .content-box.forecast > * {\n        width: 100%;\n    }\n    #content .content-box.forecast .forecast-item {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n    }\n\n    #content .content-box.forecast .forecast-item .condition-container {\n        display: flex;\n        flex-direction: row;\n    }\n\n    #content .content-box.forecast.hourly {\n        display: flex;\n        flex-direction: column;\n        height: auto;\n    }\n    #content .content-box.forecast.hourly .hourly-date-container {\n        display: flex;\n        flex-direction: column;\n    }\n    #content .content-box.forecast.hourly .hourly-date-container .hours-container {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n    }\n    #content .content-box.forecast.hourly .hourly-date-container .hours-container .forecast-item {\n        display: grid;\n        grid-template-columns: 1fr 2fr 2fr;\n    }\n}\n\n@media screen and (max-width: 500px) {\n    body #content .content-box.current {\n        padding-left: 25px;\n        padding-right: 25px;\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n    body #content .content-box.current > * {\n        width: 100%;\n        align-items: center;\n        text-align: center;\n    }\n    body #content .content-box.current .city-region-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        gap: 5px;\n    }\n\n    #content .content-box.forecast.hourly .hourly-date-container .hours-container .forecast-item {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n\n    #content > * {\n        font-size: 0.8em;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/index.css":
/*!*****************************!*\
  !*** ./src/style/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/APIkey.js":
/*!***********************!*\
  !*** ./src/APIkey.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIkey: () => (/* binding */ APIkey)
/* harmony export */ });
const APIkey = '68775dfbe4c64b54a9015320232606';

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   Load: () => (/* binding */ Load),
/* harmony export */   Move: () => (/* binding */ Move),
/* harmony export */   Populate: () => (/* binding */ Populate),
/* harmony export */   Settings: () => (/* binding */ Settings),
/* harmony export */   UI: () => (/* binding */ UI),
/* harmony export */   getWeather: () => (/* binding */ getWeather),
/* harmony export */   iconImports: () => (/* binding */ iconImports)
/* harmony export */ });
/* harmony import */ var _APIkey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIkey */ "./src/APIkey.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _media_loading_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/loading.gif */ "./src/media/loading.gif");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
const iconImports = {};
const dayIcons = ["day/113.png","day/143.png","day/185.png","day/248.png","day/281.png","day/299.png","day/311.png","day/323.png","day/335.png","day/356.png","day/368.png","day/386.png","day/116.png","day/176.png","day/200.png","day/260.png","day/284.png","day/302.png","day/314.png","day/326.png","day/338.png","day/359.png","day/371.png","day/389.png","day/119.png","day/179.png","day/227.png","day/263.png","day/293.png","day/305.png","day/317.png","day/329.png","day/350.png","day/362.png","day/374.png","day/392.png","day/122.png","day/182.png","day/230.png","day/266.png","day/296.png","day/308.png","day/320.png","day/332.png","day/353.png","day/365.png","day/377.png","day/395.png"]
const nightIcons = ["night/113.png","night/143.png","night/185.png","night/248.png","night/281.png","night/299.png","night/311.png","night/323.png","night/335.png","night/356.png","night/368.png","night/386.png","night/116.png","night/176.png","night/200.png","night/260.png","night/284.png","night/302.png","night/314.png","night/326.png","night/338.png","night/359.png","night/371.png","night/389.png","night/119.png","night/179.png","night/227.png","night/263.png","night/293.png","night/305.png","night/317.png","night/329.png","night/350.png","night/362.png","night/374.png","night/392.png","night/122.png","night/182.png","night/230.png","night/266.png","night/296.png","night/308.png","night/320.png","night/332.png","night/353.png","night/365.png","night/377.png","night/395.png"];
// import all icons
[dayIcons, nightIcons].flat().forEach(icon => iconImports[icon] = __webpack_require__("./src/media/apiIcons sync recursive ^\\.\\/.*$")(`./${icon}`));




 


// DONE WITH IMPORTS

async function getWeather(location) {
    Move.removeWeather();
    Move.insertLoadingGIF();

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${_APIkey__WEBPACK_IMPORTED_MODULE_0__.APIkey}&q=${location}&days=7&aqi=no&alerts=yes`, {mode: 'cors'});
        const data = await response.json();

        if (!response.ok) {
            if (data.error.message) {
                throw new Error(data.error.message);
            } else {
                throw new Error(' unknown error has occured');
            }
        
        } else {
            Move.removeLoadingGIF();
            Input.handleData(data);
        }
    } catch(err) {
        console.log(err.message);
        Move.removeLoadingGIF();
        // ErrorMessage.updateGUI();
    }
}
const Settings = {
    measurement: 'US', // 'US' or 'metric'
    forecast: 'hourly', // 'hourly' or 'daily'
}

class Move {
    static removeWeather() {
        const currentWeather = document.querySelector('.content-box.current');
        const forecastWeather = document.querySelector('.content-box.forecast');
        if (currentWeather) {
            currentWeather.remove();
        }
        if (forecastWeather) {
            forecastWeather.remove();
        }
    }

    static insertLoadingGIF() {
        const gif = document.createElement('img');
        gif.classList.add('loading-gif');
        gif.src = _media_loading_gif__WEBPACK_IMPORTED_MODULE_2__;
        document.querySelector('#content').appendChild(gif);
    }

    static removeLoadingGIF() {
        document.querySelector('img.loading-gif').remove();
    }


}

class Populate {
    static dailyMetric() {
        Load.removeContent();
        Load.currentWeather(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.metric);
        Load.forecastDaily(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.metric)
    }
    
    static dailyUS() {
        Load.removeContent();
        Load.currentWeather(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.US);
        Load.forecastDaily(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.US);
    }

    static hourlyMetric() {
        Load.removeContent();
        Load.currentWeather(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.metric);
        Load.forecastHourly(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.metric);
    }

    static hourlyUS() {
        Load.removeContent();
        Load.currentWeather(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.US);
        Load.forecastHourly(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.US);
    }

    static clickUS(e) {
        Settings.measurement = 'US';
        UI.updateMeasurementButtons(e);

        if (_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.isEmpty()) {
            return;
        } 
        else {
            if (Settings.forecast === 'hourly') {
                Populate.hourlyUS();
                return;
            }
            if (Settings.forecast === 'daily') {
                Populate.dailyUS();
                return;
            }
        }
    }

    static clickMetric(e) {
        Settings.measurement = 'metric';
        UI.updateMeasurementButtons(e);

        if (_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.isEmpty()) {
            return;
        }
        else {
            if (Settings.forecast === 'hourly') {
                Populate.hourlyMetric();
                return;
            }
            if (Settings.forecast === 'daily') {
                Populate.dailyMetric();
                return;
            }
        }
    }

    static clickDaily(e) {
        Settings.forecast = 'daily';
        UI.updateForecastButtons(e);

        if (_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.isEmpty()) {
            return;
        }
        else {
            if (Settings.measurement === 'US') {
                Populate.dailyUS();
                return;
            }
            if (Settings.measurement === 'metric') {
                Populate.dailyMetric();
                return;
            }
        }
    }

    static clickHourly(e) {
        Settings.forecast = 'hourly';
        UI.updateForecastButtons(e);

        if (_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.isEmpty()) {
            return;
        }
        else {
            if (Settings.measurement === 'US') {
                Populate.hourlyUS();
                return;
            }
            if (Settings.measurement === 'metric') {
                Populate.hourlyMetric();
                return;
            }
        }
    }
}

class Load {
    static removeContent() {
        const current = document.querySelector('.content-box.current');
        const forecast = document.querySelector('.content-box.forecast');

        if (current) {
            current.remove();
        }
        if (forecast) {
            forecast.remove();
        }
    }
    static defaultUI() {
        document.querySelector('#content').appendChild(_view_js__WEBPACK_IMPORTED_MODULE_3__.Build.sidebar());
    }

    static currentWeather(data) {
        document.querySelector('#content').appendChild(_view_js__WEBPACK_IMPORTED_MODULE_3__.Build.currentWeather(data));
    }

    static forecastDaily(data) {
        const forecastContainer = _view_js__WEBPACK_IMPORTED_MODULE_3__.Build.forecastContainer();
        for (let i = 0; i < 7; i++) {
            forecastContainer.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_3__.Build.forecastItemDaily(data.daily[i]));
        }

        document.querySelector('#content').appendChild(forecastContainer);
    }

    static forecastHourly(data) {
        // gets exactly 24 hours of forecast data split into hours, so data needs to be grabbed from multiple days
        // get number value in 24 hr time represting current time
        const currentHour = Number(_model_js__WEBPACK_IMPORTED_MODULE_1__.Format.getHour24HR(data.location.localTime));
        // get the hours left in current day
        const currentDayHours = data.hourly[0].slice(currentHour);
        // get the remaining hours left to equal 24 total
        const nextDayHours = data.hourly[1].slice(0, data.hourly[1].length - currentDayHours.length);
        
        // forecast container contains 2 main containers for each day
        const forecastContainer = _view_js__WEBPACK_IMPORTED_MODULE_3__.Build.forecastContainer();
        
        // insert data for each hour of day one into day one's container and add day one's container to the parent container
        const dayOneHourlyDateContainer = _view_js__WEBPACK_IMPORTED_MODULE_3__.Build.hourlyDateContainer(data.daily[0])
        const dayOneContent = createHoursContainer();
        for (let i = 0; i < currentDayHours.length; i++) {
            dayOneContent.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_3__.Build.forecastItemHourly(currentDayHours[i]))
        }
        dayOneHourlyDateContainer.appendChild(dayOneContent);
        forecastContainer.appendChild(dayOneHourlyDateContainer);

        // repeat for day two
        const dayTwoHourlyDateContainer = _view_js__WEBPACK_IMPORTED_MODULE_3__.Build.hourlyDateContainer(data.daily[1]);
        const dayTwoContent = createHoursContainer();
        for (let i = 0; i < nextDayHours.length; i++) {
            dayTwoContent.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_3__.Build.forecastItemHourly(nextDayHours[i]));
        }
        dayTwoHourlyDateContainer.appendChild(dayTwoContent);
        forecastContainer.appendChild(dayTwoHourlyDateContainer);

        // insert everything into the document
        document.querySelector('#content').appendChild(forecastContainer);

        function createHoursContainer() {
            const container = document.createElement('div');
            container.classList.add('hours-container');
            return container;
        }
    }
}

class Input {
    static submitLocation(e) {
        e.preventDefault();

        const input = document.querySelector('input#search-location');

        if (input.value.length > 0 ) {
            const location = input.value.trimEnd();
            input.value = "";
            getWeather(location);
        }
    }

    static handleData(data) {
        _index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.setData(data);

        if (Settings.measurement === 'US') {
            if (Settings.forecast === 'daily') {
                Populate.dailyUS();
                return;
            }
            if (Settings.forecast === 'hourly') {
                Populate.hourlyUS();
                return;
            }
        }

        if (Settings.measurement === 'metric') {
            if (Settings.forecast === 'daily') {
                Populate.dailyMetric();
                return;
            }
            if (Settings.forecast === 'hourly') {
                Populate.hourlyMetric();
                return;
            }
        }
    }
}

class UI {
    static updateMeasurementButtons(e) {
        const US = document.querySelector('button.settings.us-measurement');
        const metric = document.querySelector('button.settings.metric-measurement');
        [US, metric].forEach(button => button.classList.remove('chosen-setting'));
        e.target.classList.add('chosen-setting');
    }

    static updateForecastButtons(e) {
        const daily = document.querySelector('button.settings.daily-forecast');
        const hourly = document.querySelector('button.settings.hourly-forecast');
        [daily, hourly].forEach(button => button.classList.remove('chosen-setting'));
        e.target.classList.add('chosen-setting');
    }
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weatherData: () => (/* binding */ weatherData)
/* harmony export */ });
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.css */ "./src/style/index.css");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ "./src/model.js");





const weatherData = new _model_js__WEBPACK_IMPORTED_MODULE_2__.WeatherData();

_controller_js__WEBPACK_IMPORTED_MODULE_1__.Load.defaultUI();







/***/ }),

/***/ "./src/media/apiIcons sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./src/media/apiIcons/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./day/113.png": "./src/media/apiIcons/day/113.png",
	"./day/116.png": "./src/media/apiIcons/day/116.png",
	"./day/119.png": "./src/media/apiIcons/day/119.png",
	"./day/122.png": "./src/media/apiIcons/day/122.png",
	"./day/143.png": "./src/media/apiIcons/day/143.png",
	"./day/176.png": "./src/media/apiIcons/day/176.png",
	"./day/179.png": "./src/media/apiIcons/day/179.png",
	"./day/182.png": "./src/media/apiIcons/day/182.png",
	"./day/185.png": "./src/media/apiIcons/day/185.png",
	"./day/200.png": "./src/media/apiIcons/day/200.png",
	"./day/227.png": "./src/media/apiIcons/day/227.png",
	"./day/230.png": "./src/media/apiIcons/day/230.png",
	"./day/248.png": "./src/media/apiIcons/day/248.png",
	"./day/260.png": "./src/media/apiIcons/day/260.png",
	"./day/263.png": "./src/media/apiIcons/day/263.png",
	"./day/266.png": "./src/media/apiIcons/day/266.png",
	"./day/281.png": "./src/media/apiIcons/day/281.png",
	"./day/284.png": "./src/media/apiIcons/day/284.png",
	"./day/293.png": "./src/media/apiIcons/day/293.png",
	"./day/296.png": "./src/media/apiIcons/day/296.png",
	"./day/299.png": "./src/media/apiIcons/day/299.png",
	"./day/302.png": "./src/media/apiIcons/day/302.png",
	"./day/305.png": "./src/media/apiIcons/day/305.png",
	"./day/308.png": "./src/media/apiIcons/day/308.png",
	"./day/311.png": "./src/media/apiIcons/day/311.png",
	"./day/314.png": "./src/media/apiIcons/day/314.png",
	"./day/317.png": "./src/media/apiIcons/day/317.png",
	"./day/320.png": "./src/media/apiIcons/day/320.png",
	"./day/323.png": "./src/media/apiIcons/day/323.png",
	"./day/326.png": "./src/media/apiIcons/day/326.png",
	"./day/329.png": "./src/media/apiIcons/day/329.png",
	"./day/332.png": "./src/media/apiIcons/day/332.png",
	"./day/335.png": "./src/media/apiIcons/day/335.png",
	"./day/338.png": "./src/media/apiIcons/day/338.png",
	"./day/350.png": "./src/media/apiIcons/day/350.png",
	"./day/353.png": "./src/media/apiIcons/day/353.png",
	"./day/356.png": "./src/media/apiIcons/day/356.png",
	"./day/359.png": "./src/media/apiIcons/day/359.png",
	"./day/362.png": "./src/media/apiIcons/day/362.png",
	"./day/365.png": "./src/media/apiIcons/day/365.png",
	"./day/368.png": "./src/media/apiIcons/day/368.png",
	"./day/371.png": "./src/media/apiIcons/day/371.png",
	"./day/374.png": "./src/media/apiIcons/day/374.png",
	"./day/377.png": "./src/media/apiIcons/day/377.png",
	"./day/386.png": "./src/media/apiIcons/day/386.png",
	"./day/389.png": "./src/media/apiIcons/day/389.png",
	"./day/392.png": "./src/media/apiIcons/day/392.png",
	"./day/395.png": "./src/media/apiIcons/day/395.png",
	"./night/113.png": "./src/media/apiIcons/night/113.png",
	"./night/116.png": "./src/media/apiIcons/night/116.png",
	"./night/119.png": "./src/media/apiIcons/night/119.png",
	"./night/122.png": "./src/media/apiIcons/night/122.png",
	"./night/143.png": "./src/media/apiIcons/night/143.png",
	"./night/176.png": "./src/media/apiIcons/night/176.png",
	"./night/179.png": "./src/media/apiIcons/night/179.png",
	"./night/182.png": "./src/media/apiIcons/night/182.png",
	"./night/185.png": "./src/media/apiIcons/night/185.png",
	"./night/200.png": "./src/media/apiIcons/night/200.png",
	"./night/227.png": "./src/media/apiIcons/night/227.png",
	"./night/230.png": "./src/media/apiIcons/night/230.png",
	"./night/248.png": "./src/media/apiIcons/night/248.png",
	"./night/260.png": "./src/media/apiIcons/night/260.png",
	"./night/263.png": "./src/media/apiIcons/night/263.png",
	"./night/266.png": "./src/media/apiIcons/night/266.png",
	"./night/281.png": "./src/media/apiIcons/night/281.png",
	"./night/284.png": "./src/media/apiIcons/night/284.png",
	"./night/293.png": "./src/media/apiIcons/night/293.png",
	"./night/296.png": "./src/media/apiIcons/night/296.png",
	"./night/299.png": "./src/media/apiIcons/night/299.png",
	"./night/302.png": "./src/media/apiIcons/night/302.png",
	"./night/305.png": "./src/media/apiIcons/night/305.png",
	"./night/308.png": "./src/media/apiIcons/night/308.png",
	"./night/311.png": "./src/media/apiIcons/night/311.png",
	"./night/314.png": "./src/media/apiIcons/night/314.png",
	"./night/317.png": "./src/media/apiIcons/night/317.png",
	"./night/320.png": "./src/media/apiIcons/night/320.png",
	"./night/323.png": "./src/media/apiIcons/night/323.png",
	"./night/326.png": "./src/media/apiIcons/night/326.png",
	"./night/329.png": "./src/media/apiIcons/night/329.png",
	"./night/332.png": "./src/media/apiIcons/night/332.png",
	"./night/335.png": "./src/media/apiIcons/night/335.png",
	"./night/338.png": "./src/media/apiIcons/night/338.png",
	"./night/350.png": "./src/media/apiIcons/night/350.png",
	"./night/353.png": "./src/media/apiIcons/night/353.png",
	"./night/356.png": "./src/media/apiIcons/night/356.png",
	"./night/359.png": "./src/media/apiIcons/night/359.png",
	"./night/362.png": "./src/media/apiIcons/night/362.png",
	"./night/365.png": "./src/media/apiIcons/night/365.png",
	"./night/368.png": "./src/media/apiIcons/night/368.png",
	"./night/371.png": "./src/media/apiIcons/night/371.png",
	"./night/374.png": "./src/media/apiIcons/night/374.png",
	"./night/377.png": "./src/media/apiIcons/night/377.png",
	"./night/386.png": "./src/media/apiIcons/night/386.png",
	"./night/389.png": "./src/media/apiIcons/night/389.png",
	"./night/392.png": "./src/media/apiIcons/night/392.png",
	"./night/395.png": "./src/media/apiIcons/night/395.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/media/apiIcons sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Format: () => (/* binding */ Format),
/* harmony export */   WeatherData: () => (/* binding */ WeatherData)
/* harmony export */ });
class WeatherData {
    constructor(data) {
        this.weather = {US:{}, metric:{}};
    }

    isEmpty() {
        return Object.keys(this.weather.US).length === 0;
    }
    
    setData(data) {
        const current = this.getCurrent(data);
        const daily = this.getDailyForecast(data);
        const hourly = this.getHourlyForecast(data);

        Object.assign(this.weather, this.getLocation(data));
        Object.assign(this.weather.US, current.US);
        Object.assign(this.weather.US, daily.US);
        Object.assign(this.weather.US, hourly.US);
        Object.assign(this.weather.metric, current.metric);
        Object.assign(this.weather.metric, daily.metric);
        Object.assign(this.weather.metric, hourly.metric);
    }

    getLocation(data) {
        return {
            US: {
                location: {
                    city: data.location.name,
                    region: data.location.region,
                    country: Format.abbreviateCountryName(data.location.country),
                    localTime: data.location.localtime,
                },
            },
            metric: {
                location: {
                    city: data.location.name,
                    region: data.location.region,
                    country: Format.abbreviateCountryName(data.location.country),
                    localTime: data.location.localtime,
                },
            }
        }
    }

    getCurrent(data) {
        return {
            US: {
                current: {
                    lastUpdated: data.current.last_updated,
                    condition: data.current.condition.text,
                    icon: Format.getIconPath(data.current.condition.icon),
                    rainChance: data.forecast.forecastday[0].day.daily_chance_of_rain,
                    snowChance: data.forecast.forecastday[0].day.daily_chance_of_snow,
                    humidity: data.current.humidity,
                    pressure: data.current.pressure_in + ' inHg',
                    temp: data.current.temp_f + '\u00B0 F',
                    feelsLike: data.current.feelslike_f + '\u00B0',
                    wind: data.current.wind_mph + ' mph',
                }
            },
            metric: {
                current: {
                    lastUpdated: data.current.last_updated,
                    condition: data.current.condition.text,
                    icon: Format.getIconPath(data.current.condition.icon),
                    rainChance: data.forecast.forecastday[0].day.daily_chance_of_rain,
                    snowChance: data.forecast.forecastday[0].day.daily_chance_of_snow,
                    humidity: data.current.humidity,
                    pressure: data.current.pressure_mb + ' mb',
                    temp: data.current.temp_c + '\u00B0 C',
                    feelsLike: data.current.feelslike_c + '\u00B0',
                    wind: data.current.wind_kph + ' kph',
                }
            }
        }
    }

    getDailyForecast(data) {
        const dailyForecast = { US: {daily:[]}, metric: {daily:[]}};
        for (let i = 0; i < 7; i++) {
            const singleDay = this.setSingleDayForecast(data, i);
            dailyForecast.US.daily.push(singleDay.US);
            dailyForecast.metric.daily.push(singleDay.metric);
        }

        return dailyForecast;
    }

    setSingleDayForecast(data, i) {
        return {
            US: {
                date: data.forecast.forecastday[i].date,
                highTemp: data.forecast.forecastday[i].day.maxtemp_f,
                lowTemp: data.forecast.forecastday[i].day.mintemp_f,
                condition: data.forecast.forecastday[i].day.condition.text,
                icon: Format.getIconPath(data.forecast.forecastday[i].day.condition.icon),
            },
            metric: {
                date: data.forecast.forecastday[i].date,
                highTemp: data.forecast.forecastday[i].day.maxtemp_c,
                lowTemp: data.forecast.forecastday[i].day.mintemp_c,
                condition: data.forecast.forecastday[i].day.condition.text,
                icon: Format.getIconPath(data.forecast.forecastday[i].day.condition.icon),
            }
        }
    }

    getHourlyForecast(data) {
        const twoDays = { US: {hourly:[]}, metric: {hourly:[]}};
        // gets days 1 and days 2 hourly forecast from fetch data
        for (let i = 0; i < 2; i++) {
            
            twoDays.US.hourly.push([]);
            twoDays.metric.hourly.push([]);

            for (let j = 0; j < 24; j++) {
                const hourData = this.setHour(data, i, j);
                twoDays.US.hourly[i].push(hourData.US);
                twoDays.metric.hourly[i].push(hourData.metric);
            }
        }

        return twoDays;
    }

    setHour(data, i, j) {
        return {
            US: {
                time: data.forecast.forecastday[i].hour[j].time,
                temp: data.forecast.forecastday[i].hour[j].temp_f,
                condition: data.forecast.forecastday[i].hour[j].condition.text,
                icon: Format.getIconPath(data.forecast.forecastday[i].hour[j].condition.icon),
            },
            metric: {
                time: data.forecast.forecastday[i].hour[j].time,
                temp: data.forecast.forecastday[i].hour[j].temp_c,
                condition: data.forecast.forecastday[i].hour[j].condition.text,
                icon: Format.getIconPath(data.forecast.forecastday[i].hour[j].condition.icon),
            }
        }
    }
}

class Format {

    // gets the property that can be used to reference an imported icon
    // iconImports[Format.getIconPath(data)];
    static getIconPath(string) {
        if (string.includes('night')) {
            return `night/${sliceString(string)}`;
        }

        if (string.includes('day')) {
            return `day/${sliceString(string)}`;
        }

        function sliceString(string) {
            return string.slice(string.length - 7, string.length);
        }
    }

    static getDayNameLong(string) {
        return ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(string).getDay()];
    }
    
    static getDayNameShort(string) {
        return ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(string).getDay()];
    }

    static getDayNumber(string) {
        // string represting date must be in 'yyyy-MM-dd' format
        return string.split('-')[2].slice(0,2);
    }

    static getMonthName(string) {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][new Date(string).getMonth()];
    }

    static getDayNumberPrefix(string) {
        const number = new Date(string).getDate();
        let suffix = 'th';

        if (number == 1 || number == 21 || number == 31) {
            return number + 'st';
        }
        if (number == 2 || number == 22) {
            return number + 'nd';
        }
        if (number == 3 || number == 23) {
            return number + 'rd';
        }
        else {
            return number + suffix;
        }
    }

    static getDayNumber(string) {
        const number = new Date(string).getDate();
        if (number > 9) {
            return number.toString();
        }
        if (number < 10) {
            return '0' + number;
        }
    }

    static getYearNumber(string) {
        return new Date(string).getFullYear();
    }

    static getSpokenDate(string) {
        return `${this.getDayNameLong(string)}, ${this.getMonthName(string)} ${this.getDayNumberPrefix(string)}, ${this.getYearNumber(string)}`;
    }

    static getLocaleTime(string) {
        const date = new Date(string).toLocaleTimeString();
        if (date.length === 11) {
            return date.slice(0,5) + date.slice(9,11).toLowerCase();
        } else {
            return date.slice(0,4) + date.slice(8,10).toLowerCase();
        }
    }

    static getHour24HR(string) {
        // returns the hour of a date in the format 'hh'
        // to be used with data.forecast.forecastday[i].hour[i].time
        // date must be formatted in 'yyyy-MM-dd hh-mm" format
        return string.split(' ')[1].split(':')[0];
    }

    static getHourAMPM(string) {
        const datedString = new Date(string).toLocaleTimeString();
        return datedString.split(' ')[0].split(':')[0] + datedString.split(' ')[1].toLowerCase();
    }

    static abbreviateCountryName(string) {
        if (string === 'United States of America') {
            return "USA";
        } else {
            return string;
        }
    }
}



/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Build: () => (/* binding */ Build)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _media_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/search.svg */ "./src/media/search.svg");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ "./src/model.js");







class Element {
    constructor(
        config = {
            'tagname':'div',
        }
    ) {
        this.config = config;
    }

    build() {
        //new Element().build() will default to a created div element
        //if a config object is passed in as a parameter, then a tagname property always needs to be added
        const element = document.createElement(this.config['tagname']);
        
        for (const property in this.config) {
            if (property === 'class') {
                // allow multiple classnames in single declaration
                const classNames = this.config['class'].split(' ');

                if (classNames.length === 1) {
                    element.classList.add(this.config['class']);
                } else {
                    for (const className of classNames) {
                        element.classList.add(className);
                    }
                }
            }
            else if (property === 'id') {
                element.setAttribute('id', this.config['id']);
            }
            else if (property === 'text-content') {
                element.textContent = this.config['text-content'];
            }
            else if (property === 'event-listeners') {
                for (const property in this.config['event-listeners']){
                    element.addEventListener(property, this.config['event-listeners'][property]);
                }
            }
            else if (property === 'src') {
                element.src = this.config['src'];
            }
            //child must be built using this.build()
            else if (property === 'children') {
                for(const child of this.config['children']){
                    element.appendChild(child);
                }
            }
            else if (property === 'style') {
                for(const property in this.config['style']){
                    element.style[property] = this.config['style'][property];
                }
            }
            else if (property !== 'tagname') {
                element.setAttribute(property, this.config[property]);
            }
        }

        return element;
    }
}

class Build {
    static sidebar() {
        return new Element({
            'tagname': 'div',
            'class': 'sidebar',
            'children': [
                new Element({
                    'tagname': 'div',
                    'class': 'content-box',
                    'children': [
                        new Element({
                            'tagname': 'form',
                            'class': 'search',
                            'event-listeners':{'submit':_controller_js__WEBPACK_IMPORTED_MODULE_0__.Input.submitLocation},
                            'children': [
                                new Element({
                                    'tagname': 'input',
                                    'type': 'text',
                                    'name': 'search-location',
                                    'id': 'search-location',
                                    'placeholder': 'zip code or city',
                                    'autofocus': 'true',
                                }).build(),
                                new Element({
                                    'tagname': 'button',
                                    'type': 'submit',
                                    'children': [
                                        new Element({
                                            'tagname': 'img',
                                            'class': 'search-icon',
                                            'src': _media_search_svg__WEBPACK_IMPORTED_MODULE_1__,
                                            'alt': 'search-icon',
                                        }).build(),
                                    ],
                                }).build(),
                                new Element({
                                    'tagname': 'p',
                                    'class': 'error-message',
                                    'text-content': 'No matching location found.',
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'button',
                            'class': 'expand-menu',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/down-carrot.svg',
                                    'alt': 'expand-menu',
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'h2',
                            'text-content': 'Settings',
                        }).build(),
                        new Element({
                            'tagname': 'div',
                            'class': 'settings-content',
                            'children': [
                                new Element({
                                    'tagname': 'h4',
                                    'text-content': 'Measurement',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'toggle-container measurement',
                                    'children': [
                                        new Element({
                                            'tagname': 'button',
                                            'text-content': 'US',
                                            'class':'settings us-measurement chosen-setting',
                                            'event-listeners':{'click':_controller_js__WEBPACK_IMPORTED_MODULE_0__.Populate.clickUS},
                                        }).build(),
                                        new Element({
                                            'tagname': 'button',
                                            'text-content': 'Metric',
                                            'class':'settings metric-measurement',
                                            'event-listeners':{'click':_controller_js__WEBPACK_IMPORTED_MODULE_0__.Populate.clickMetric},
                                        }).build(),
                                    ],
                                }).build(),
                                new Element({
                                    'tagname': 'h4',
                                    'text-content': 'Forecast',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'toggle-container forecast-hourly chosen-setting',
                                    'children': [
                                        new Element({
                                            'tagname': 'button',
                                            'text-content': 'Hourly',
                                            'class':'settings hourly-forecast chosen-setting',
                                            'event-listeners':{'click':_controller_js__WEBPACK_IMPORTED_MODULE_0__.Populate.clickHourly},
                                        }).build(),
                                        new Element({
                                            'tagname': 'button',
                                            'text-content': 'Daily',
                                            'class':'settings daily-forecast',
                                            'event-listeners':{'click':_controller_js__WEBPACK_IMPORTED_MODULE_0__.Populate.clickDaily},
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'h2',
                            'text-content': 'Saved Locations',
                        }).build(),
                        new Element({
                            'tagname': 'ul',
                            'class': 'saved-cities',
                        }).build(),
                    ],
                }).build(),
            ],
        }).build();
    }

    static savedCityItem() {
        return new Element({
            'tagname': 'li',
            'class': 'city-name',
            'children': [
                new Element({
                    'tagname': 'button',
                    'class': 'left-container',
                    'children': [
                        new Element({
                            'tagname': 'h3',
                            'text-content': 'Boston',
                        }).build(),
                        new Element({
                            'tagname': 'p',
                            'class': 'region',
                            'text-content': 'Massachusetts, USA',
                        }).build(),
                    ],
                }).build(),
                new Element({
                    'tagname': 'button',
                    'class': 'delete',
                    'city-object-id': '12345',
                    'children': [
                        new Element({
                            'tagname': 'img',
                            'class': 'delete',
                            'src': '../src/media/delete.svg',
                            'alt': '',
                        }).build(),
                    ],
                }).build(),
            ],
        }).build();
    }

    static currentWeather(data) {
        return new Element({
            'tagname': 'div',
            'class': 'content-box current',
            'children': [
                new Element({
                    'tagname': 'div',
                    'class': 'city-region-container',
                    'children': [
                        new Element({
                            'tagname': 'h2',
                            'class': 'city',
                            'text-content': `${data.location.city}`,
                        }).build(),
                        new Element({
                            'tagname': 'h5',
                            'class': 'region',
                            'text-content': `${data.location.region}, ${data.location.country}`,
                        }).build(),
                    ],
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'time-date-container',
                    'children': [
                        new Element({
                            'tagname': 'p',
                            'class': 'time',
                            'children': [
                                new Element({
                                    'tagname': 'span',
                                    'text-content': 'as of',
                                }).build(),
                                new Element({
                                    'tagname': 'span',
                                    'text-content': _model_js__WEBPACK_IMPORTED_MODULE_2__.Format.getLocaleTime(data.current.lastUpdated),
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'p',
                            'class': 'date',
                            'text-content': _model_js__WEBPACK_IMPORTED_MODULE_2__.Format.getSpokenDate(data.current.lastUpdated),
                        }).build(),
                    ],
                }).build(),
                new Element({
                    'tagname': 'p',
                    'class': 'temp',
                    'text-content': `${data.current.temp}`,
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'condition-container',
                    'children': [
                        new Element({
                            'tagname': 'img',
                            'src': _controller_js__WEBPACK_IMPORTED_MODULE_0__.iconImports[data.current.icon],
                            'alt': 'weather-icon',
                            'class': 'condition-icon icon',
                        }).build(),
                        new Element({
                            'tagname': 'p',
                            'class': 'condition',
                            'text-content': `${data.current.condition}`,
                        }).build(),
                    ],
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'weather-properties',
                    'children': [
                        new Element({
                            'tagname': 'div',
                            'class': 'weather-property feels-like',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/thermometer.svg',
                                    'alt': 'feels-like',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'right-content',
                                    'children': [
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'text',
                                            'text-content': 'Feels like',
                                        }).build(),
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'value',
                                            'text-content': `${data.current.feelsLike}`
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'div',
                            'class': 'weather-property wind',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/wind.svg',
                                    'alt': 'wind',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'right-content',
                                    'children': [
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'text',
                                            'text-content': 'Wind',
                                        }).build(),
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'value',
                                            'text-content': `${data.current.wind}`,
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'div',
                            'class': 'weather-property chance-rain',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/rain.svg',
                                    'alt': 'rain',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'right-content',
                                    'children': [
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'text',
                                            'text-content': 'Rain',
                                        }).build(),
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'value',
                                            'text-content': `${data.current.rainChance}%`,
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'div',
                            'class': 'weather-property chance-snow',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/snow.svg',
                                    'alt': 'snow',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'right-content',
                                    'children': [
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'text',
                                            'text-content': 'Snow:',
                                        }).build(),
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'value',
                                            'text-content': `${data.current.snowChance}%`,
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'div',
                            'class': 'weather-property humidity',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/humidity.svg',
                                    'alt': 'humidity',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'right-content',
                                    'children': [
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'text',
                                            'text-content': 'Humidity',
                                        }).build(),
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'value',
                                            'text-content': `${data.current.humidity}%`,
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'div',
                            'class': 'weather-property pressure',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/pressure.svg',
                                    'alt': 'pressure',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'right-content',
                                    'children': [
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'text',
                                            'text-content': 'Pressure',
                                        }).build(),
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'value',
                                            'text-content': `${data.current.pressure}`
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                    ],
                }).build(),
            ],
        }).build();
    }

    static forecastContainer() {
        return new Element({
            'tagname': 'div',
            'class': 'content-box forecast',
        }).build();
    }

    static forecastItemDaily(data) {
        return new Element({
            'tagname': 'div',
            'class': 'forecast-item daily-item',
            'children': [
                new Element({
                    'tagname': 'h3',
                    'text-content': `${_model_js__WEBPACK_IMPORTED_MODULE_2__.Format.getDayNameShort(data.date)} ${_model_js__WEBPACK_IMPORTED_MODULE_2__.Format.getDayNumber(data.date)}`,
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'high-low-container',
                    'children': [
                        new Element({
                            'tagname': 'span',
                            'class': 'high-temp',
                            'text-content': `${data.highTemp}\u00B0`,
                        }).build(),
                        new Element({
                            'tagname': 'span',
                            'class': 'divider',
                            'text-content': '/',
                        }).build(),
                        new Element({
                            'tagname': 'span',
                            'class': 'low-temp',
                            'text-content': `${data.lowTemp}\u00B0`,
                        }).build(),
                    ],
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'condition-container',
                    'children': [
                        new Element({
                            'tagname': 'img',
                            'class': 'condition icon',
                            'src': _controller_js__WEBPACK_IMPORTED_MODULE_0__.iconImports[data.icon],
                            'alt': '',
                        }).build(),
                        new Element({
                            'tagname': 'p',
                            'class': 'condition',
                            'text-content': `${data.condition}`,
                        }).build(),
                    ],
                }).build(),
            ],
        }).build();
    }

    static forecastItemHourly(data) {
        return new Element({
            'tagname': 'div',
            'class': 'forecast-item hourly-item',
            'children': [
                new Element({
                    'tagname': 'h3',
                    'text-content': _model_js__WEBPACK_IMPORTED_MODULE_2__.Format.getHourAMPM(data.time),
                }).build(),
                new Element({
                    'tagname': 'p',
                    'class': 'hourly-temp',
                    'text-content':`${data.temp}\u00B0`,
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'condition-container',
                    'children': [
                        new Element({
                            'tagname': 'img',
                            'class': 'condition icon',
                            'src': _controller_js__WEBPACK_IMPORTED_MODULE_0__.iconImports[data.icon],
                            'alt': '',
                        }).build(),
                        new Element({
                            'tagname': 'p',
                            'class': 'condition',
                            'text-content': `${data.condition}`,
                        }).build(),
                    ],
                }).build(),
            ],
        }).build();
    }

    static hourlyDateContainer(data) {
        // to be appended inside of .content-box.forecast
        return new Element({
            'tagname': 'div',
            'class': 'hourly-date-container',
            'children': [
                new Element({
                    'tagname': 'p',
                    'class': 'date',
                    'text-content': `${_model_js__WEBPACK_IMPORTED_MODULE_2__.Format.getSpokenDate(data.date)}`,
                }).build(),

                // *** build .hours-container directly in js ***
                // new Element({
                //     'tagname': 'div',
                //     'class': 'hours-container',
                //     // .forecast-item.hourly-item to be appended inside of .hours-container
                // }).build(),
            ],
        }).build();
    }
}

/***/ }),

/***/ "./src/media/apiIcons/day/113.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/113.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17608b0baa1391eb05a0.png";

/***/ }),

/***/ "./src/media/apiIcons/day/116.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/116.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8ea9e73debaf4c25a8cf.png";

/***/ }),

/***/ "./src/media/apiIcons/day/119.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/119.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e740cebbccd7be04d824.png";

/***/ }),

/***/ "./src/media/apiIcons/day/122.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/122.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "036a7f4b9402e1d74535.png";

/***/ }),

/***/ "./src/media/apiIcons/day/143.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/143.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a93c5cdce8f09616fc0e.png";

/***/ }),

/***/ "./src/media/apiIcons/day/176.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/176.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/media/apiIcons/day/179.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/179.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/media/apiIcons/day/182.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/182.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6fe62e8748f042a1cbc4.png";

/***/ }),

/***/ "./src/media/apiIcons/day/185.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/185.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b29c7a91f5f0986860ea.png";

/***/ }),

/***/ "./src/media/apiIcons/day/200.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/200.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cc1054a285a2ec8fecca.png";

/***/ }),

/***/ "./src/media/apiIcons/day/227.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/227.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b129e818f96bfd5302e9.png";

/***/ }),

/***/ "./src/media/apiIcons/day/230.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/230.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b8b0bf9be35bccc67ed8.png";

/***/ }),

/***/ "./src/media/apiIcons/day/248.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/248.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b2a1d4434712ee44f9ba.png";

/***/ }),

/***/ "./src/media/apiIcons/day/260.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/260.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83e24a5eb9c1903d153a.png";

/***/ }),

/***/ "./src/media/apiIcons/day/263.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/263.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f768941645c662c7fad.png";

/***/ }),

/***/ "./src/media/apiIcons/day/266.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/266.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f768941645c662c7fad.png";

/***/ }),

/***/ "./src/media/apiIcons/day/281.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/281.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b29c7a91f5f0986860ea.png";

/***/ }),

/***/ "./src/media/apiIcons/day/284.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/284.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "56ec9edb8b4e68fe86cd.png";

/***/ }),

/***/ "./src/media/apiIcons/day/293.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/293.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/media/apiIcons/day/296.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/296.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "be8d48a6fb6962fa1edd.png";

/***/ }),

/***/ "./src/media/apiIcons/day/299.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/299.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/media/apiIcons/day/302.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/302.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "be8d48a6fb6962fa1edd.png";

/***/ }),

/***/ "./src/media/apiIcons/day/305.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/305.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b79f79a47ff26675bbb6.png";

/***/ }),

/***/ "./src/media/apiIcons/day/308.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/308.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "abccde130cb90d6b8d28.png";

/***/ }),

/***/ "./src/media/apiIcons/day/311.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/311.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a856df694720212e414a.png";

/***/ }),

/***/ "./src/media/apiIcons/day/314.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/314.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a856df694720212e414a.png";

/***/ }),

/***/ "./src/media/apiIcons/day/317.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/317.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "21cb978b0b5bc99863da.png";

/***/ }),

/***/ "./src/media/apiIcons/day/320.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/320.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "21cb978b0b5bc99863da.png";

/***/ }),

/***/ "./src/media/apiIcons/day/323.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/323.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/media/apiIcons/day/326.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/326.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "997f80887a654d8e2bd8.png";

/***/ }),

/***/ "./src/media/apiIcons/day/329.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/329.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/media/apiIcons/day/332.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/332.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "997f80887a654d8e2bd8.png";

/***/ }),

/***/ "./src/media/apiIcons/day/335.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/335.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f112e7b7295449ca0f2c.png";

/***/ }),

/***/ "./src/media/apiIcons/day/338.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/338.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "33ecc25ad9b9bcdead64.png";

/***/ }),

/***/ "./src/media/apiIcons/day/350.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/350.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e2ffeba8f660e868882d.png";

/***/ }),

/***/ "./src/media/apiIcons/day/353.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/353.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/media/apiIcons/day/356.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/356.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b79f79a47ff26675bbb6.png";

/***/ }),

/***/ "./src/media/apiIcons/day/359.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/359.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4e620fd4749c3b4e4e0.png";

/***/ }),

/***/ "./src/media/apiIcons/day/362.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/362.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6fe62e8748f042a1cbc4.png";

/***/ }),

/***/ "./src/media/apiIcons/day/365.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/365.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "de693c69934c56d7621b.png";

/***/ }),

/***/ "./src/media/apiIcons/day/368.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/368.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/media/apiIcons/day/371.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/371.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f112e7b7295449ca0f2c.png";

/***/ }),

/***/ "./src/media/apiIcons/day/374.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/374.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bbb2a9027eb47dd6fc81.png";

/***/ }),

/***/ "./src/media/apiIcons/day/377.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/377.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d5b7ec94bf807ad7a1f5.png";

/***/ }),

/***/ "./src/media/apiIcons/day/386.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/386.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cc1054a285a2ec8fecca.png";

/***/ }),

/***/ "./src/media/apiIcons/day/389.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/389.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f01fba5ae744838fbf95.png";

/***/ }),

/***/ "./src/media/apiIcons/day/392.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/392.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "654b4a200e85db363fc9.png";

/***/ }),

/***/ "./src/media/apiIcons/day/395.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/395.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1cb8e1c8dd3b23368d56.png";

/***/ }),

/***/ "./src/media/apiIcons/night/113.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/113.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a181351a22b54059f46.png";

/***/ }),

/***/ "./src/media/apiIcons/night/116.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/116.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "337f58255916e54ea1e1.png";

/***/ }),

/***/ "./src/media/apiIcons/night/119.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/119.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "877a68f87ae89bb957ef.png";

/***/ }),

/***/ "./src/media/apiIcons/night/122.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/122.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fe1ad0ff1820050f573a.png";

/***/ }),

/***/ "./src/media/apiIcons/night/143.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/143.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c3bf6ea1c4a78e617c93.png";

/***/ }),

/***/ "./src/media/apiIcons/night/176.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/176.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/media/apiIcons/night/179.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/179.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/media/apiIcons/night/182.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/182.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17b97c48fb138ff20843.png";

/***/ }),

/***/ "./src/media/apiIcons/night/185.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/185.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "73c62dfd22eaf889b373.png";

/***/ }),

/***/ "./src/media/apiIcons/night/200.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/200.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a85bb9589ece1a589e53.png";

/***/ }),

/***/ "./src/media/apiIcons/night/227.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/227.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a417dc841fb787a3121e.png";

/***/ }),

/***/ "./src/media/apiIcons/night/230.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/230.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "af63c80cb02f1b88520b.png";

/***/ }),

/***/ "./src/media/apiIcons/night/248.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/248.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "360b1cd2a1b3bf3eccf0.png";

/***/ }),

/***/ "./src/media/apiIcons/night/260.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/260.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cb1570c9ecb894bc1087.png";

/***/ }),

/***/ "./src/media/apiIcons/night/263.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/263.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e3495b8348354827949.png";

/***/ }),

/***/ "./src/media/apiIcons/night/266.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/266.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e3495b8348354827949.png";

/***/ }),

/***/ "./src/media/apiIcons/night/281.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/281.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "73c62dfd22eaf889b373.png";

/***/ }),

/***/ "./src/media/apiIcons/night/284.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/284.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bf216d4d2f4aa9d2a734.png";

/***/ }),

/***/ "./src/media/apiIcons/night/293.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/293.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/media/apiIcons/night/296.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/296.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e15944de07d227742faa.png";

/***/ }),

/***/ "./src/media/apiIcons/night/299.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/299.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/media/apiIcons/night/302.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/302.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e15944de07d227742faa.png";

/***/ }),

/***/ "./src/media/apiIcons/night/305.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/305.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f3012ddd8e268e19eb2e.png";

/***/ }),

/***/ "./src/media/apiIcons/night/308.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/308.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3b4d7dcbbedd8be85713.png";

/***/ }),

/***/ "./src/media/apiIcons/night/311.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/311.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "32aa06f17c3f7cfb3a99.png";

/***/ }),

/***/ "./src/media/apiIcons/night/314.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/314.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "32aa06f17c3f7cfb3a99.png";

/***/ }),

/***/ "./src/media/apiIcons/night/317.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/317.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5b39c4234abc34044d08.png";

/***/ }),

/***/ "./src/media/apiIcons/night/320.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/320.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5b39c4234abc34044d08.png";

/***/ }),

/***/ "./src/media/apiIcons/night/323.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/323.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/media/apiIcons/night/326.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/326.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "66cad1fd4ea2b425476d.png";

/***/ }),

/***/ "./src/media/apiIcons/night/329.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/329.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/media/apiIcons/night/332.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/332.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "66cad1fd4ea2b425476d.png";

/***/ }),

/***/ "./src/media/apiIcons/night/335.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/335.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/media/apiIcons/night/338.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/338.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "68e33fb0d2d3d215a5fe.png";

/***/ }),

/***/ "./src/media/apiIcons/night/350.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/350.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c33e3dd2cb58a8c51b7.png";

/***/ }),

/***/ "./src/media/apiIcons/night/353.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/353.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/media/apiIcons/night/356.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/356.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f3012ddd8e268e19eb2e.png";

/***/ }),

/***/ "./src/media/apiIcons/night/359.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/359.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f0ea4e443a205a9cfbbf.png";

/***/ }),

/***/ "./src/media/apiIcons/night/362.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/362.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17b97c48fb138ff20843.png";

/***/ }),

/***/ "./src/media/apiIcons/night/365.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/365.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e3b2a1ad34b9471b980.png";

/***/ }),

/***/ "./src/media/apiIcons/night/368.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/368.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/media/apiIcons/night/371.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/371.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c7b41d4dea564886958.png";

/***/ }),

/***/ "./src/media/apiIcons/night/374.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/374.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "42f4df0e587e14e2ec2d.png";

/***/ }),

/***/ "./src/media/apiIcons/night/377.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/377.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2821934c72b0870a790d.png";

/***/ }),

/***/ "./src/media/apiIcons/night/386.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/386.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a85bb9589ece1a589e53.png";

/***/ }),

/***/ "./src/media/apiIcons/night/389.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/389.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "815a9988eef459cc98c3.png";

/***/ }),

/***/ "./src/media/apiIcons/night/392.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/392.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "972cf01edfd40c105c6c.png";

/***/ }),

/***/ "./src/media/apiIcons/night/395.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/395.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1cb8e1c8dd3b23368d56.png";

/***/ }),

/***/ "./src/media/background-image3.jpg":
/*!*****************************************!*\
  !*** ./src/media/background-image3.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c148af7fb78b412303e7.jpg";

/***/ }),

/***/ "./src/media/loading.gif":
/*!*******************************!*\
  !*** ./src/media/loading.gif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b75b820d5677a45b26bd.gif";

/***/ }),

/***/ "./src/media/search.svg":
/*!******************************!*\
  !*** ./src/media/search.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9e2158463dbb540800d3.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDZ0I7QUFDSztBQUNkO0FBQ25HLDRDQUE0QywrSUFBd0Q7QUFDcEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwwQkFBMEIsMEZBQWlDO0FBQzNELDBCQUEwQiwrRkFBaUM7QUFDM0QseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZGQUE2RixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySE87QUFDUDtBQUNBLHdCQUF3QixLQUFLO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcGtCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veS8uL3NyYy9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8veS8uL3NyYy9zdHlsZS9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovL3kvLi9zcmMvc3R5bGUvc3JjL3Jlc3BvbnNpdmUuY3NzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL3N0eWxlL2luZGV4LmNzcz85Y2YwIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9BUElrZXkuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9tZWRpYS9hcGlJY29ucy8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL3kvLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3kvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3kvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9yZXNldC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcmMvcmVzcG9uc2l2ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vc3JjL21lZGlhL2JhY2tncm91bmQtaW1hZ2UzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogbWFpbiBjb21wb25lbnRzICovXG4jY29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDI1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJzaWRlYmFyICBjdXJyZW50XCJcbiAgICAgICAgXCJzaWRlYmFyIC5cIlxuICAgICAgICBcImZvcmVjYXN0IGZvcmVjYXN0XCI7XG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgwLjgpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTsgKi9cbn1cbi5zaWRlYmFyIHtcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XG59XG4uY29udGVudC1ib3guY3VycmVudCB7XG4gICAgZ3JpZC1hcmVhOiBjdXJyZW50O1xufVxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IHtcbiAgICBncmlkLWFyZWE6IGZvcmVjYXN0O1xufVxuaW1nLmxvYWRpbmctZ2lmIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jb250ZW50LWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUyZTQwO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMjI0ODdFO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4jbWFpbi1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmltZy5pY29uIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xufVxuXG4vKiBzaWRlYmFyICovXG4uc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbi5zaWRlYmFyIGltZyB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xufVxuLnNpZGViYXIgLmNvbnRlbnQtYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLnNpZGViYXIgZm9ybS5zZWFyY2ggIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNpZGViYXIgZm9ybS5zZWFyY2ggaW5wdXQge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4uc2lkZWJhciBmb3JtLnNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZDNkM2QzO1xufVxuLnNpZGViYXIgZm9ybS5zZWFyY2ggYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE5cHg7XG4gICAgcmlnaHQ6IDI1cHg7XG59XG4uc2lkZWJhciBmb3JtLnNlYXJjaCBpbWcuc2VhcmNoLWljb24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbjpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKC44KTtcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbjphY3RpdmUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguNik7XG59XG4uc2lkZWJhciBmb3JtLnNlYXJjaCBwLmVycm9yLW1lc3NhZ2Uge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lkZWJhciBmb3JtLnNlYXJjaCBwLmVycm9yLW1lc3NhZ2UudmlzaWJsZSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5zaWRlYmFyIGJ1dHRvbi5leHBhbmQtbWVudSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2lkZWJhciAuc2V0dGluZ3MtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zaWRlYmFyIC5zZXR0aW5ncy1jb250ZW50IC50b2dnbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zaWRlYmFyIC50b2dnbGUtY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcbn1cbi5zaWRlYmFyIC50b2dnbGUtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiMwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbi5zaWRlYmFyIC50b2dnbGUtY29udGFpbmVyIGJ1dHRvbjphY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjojMDAwMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MDtcbn1cbi5zaWRlYmFyIC50b2dnbGUtY29udGFpbmVyIGJ1dHRvbi5jaG9zZW4tc2V0dGluZyB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY5YmJmZjgwO1xuICAgIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcbn1cbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTBweDtcbn1cbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBsaSBpbWcuZGVsZXRlIHtcbiAgICBoZWlnaHQ6IDE5cHg7XG4gICAgd2lkdGg6IDE5cHg7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgbGkgYnV0dG9uLmRlbGV0ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMTAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgbGkgYnV0dG9uLmRlbGV0ZTpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgbGkgYnV0dG9uLmRlbGV0ZTphY3RpdmUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcbn1cbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBidXR0b24ubGVmdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgYnV0dG9uLmxlZnQtY29udGFpbmVyOmhvdmVyIHtcbiAgICBjb2xvcjogI2UyZTJlMjtcbn1cbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBidXR0b24ubGVmdC1jb250YWluZXI6YWN0aXZlIHtcbiAgICBjb2xvcjogI2NjY2NjYztcbn1cbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBoMyB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIHAucmVnaW9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi8qIGN1cnJlbnQgd2VhdGhlciAqL1xuLmNvbnRlbnQtYm94LmN1cnJlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgIG1heC13aWR0aDogNzUwcHg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcImNpdHktcmVnaW9uIHRpbWUtZGF0ZVwiXG4gICAgICAgIFwiY2l0eS1yZWdpb24gLlwiXG4gICAgICAgIFwidGVtcCBjb25kaXRpb25cIlxuICAgICAgICBcInByb3BlcnRpZXMgcHJvcGVydGllc1wiXG4gICAgICAgICAgXG59XG4uY29udGVudC1ib3guY3VycmVudCAuY2l0eS1yZWdpb24tY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IGNpdHktcmVnaW9uO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4gICAgLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNpdHkge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5yZWdpb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLnRpbWUtZGF0ZS1jb250YWluZXIge1xuICAgIGdyaWQtYXJlYTogdGltZS1kYXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC50aW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbiAgICAgICAgLmNvbnRlbnQtYm94LmN1cnJlbnQgLnRpbWUgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgfVxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbi5jb250ZW50LWJveC5jdXJyZW50IC50ZW1wIHtcbiAgICBncmlkLWFyZWE6IHRlbXA7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xufVxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNvbmRpdGlvbi1jb250YWluZXIge1xuICAgIGdyaWQtYXJlYTogY29uZGl0aW9uO1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4gICAgLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNvbmRpdGlvbi1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgICB3aWR0aDogNjVweDtcbiAgICB9XG4uY29udGVudC1ib3guY3VycmVudCAud2VhdGhlci1wcm9wZXJ0aWVzIHtcbiAgICBncmlkLWFyZWE6IHByb3BlcnRpZXM7XG59XG5cbi8qIHdlYXRoZXItcHJvcGVydGllcyBjb250YWluZXIqL1xuLndlYXRoZXItcHJvcGVydGllcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi53ZWF0aGVyLXByb3BlcnRpZXMgLndlYXRoZXItcHJvcGVydHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG59XG4ud2VhdGhlci1wcm9wZXJ0aWVzIC53ZWF0aGVyLXByb3BlcnR5IGltZyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi53ZWF0aGVyLXByb3BlcnRpZXMgLndlYXRoZXItcHJvcGVydHkgLnJpZ2h0LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi8qIGZvcmVjYXN0ICovXG4uY29udGVudC1ib3guZm9yZWNhc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY29udGVudC1ib3guZm9yZWNhc3QgLmhvdXJseS1kYXRlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5ob3VybHktZGF0ZS1jb250YWluZXIgLmhvdXJzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjVweDtcbn1cbi5jb250ZW50LWJveC5mb3JlY2FzdCAuaG91cmx5LWRhdGUtY29udGFpbmVyIHAuZGF0ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY7XG59XG4uY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG4uY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jb250ZW50LWJveC5mb3JlY2FzdCAuaGlnaC1sb3ctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDNweDtcbn1cbiAgICAuY29udGVudC1ib3guZm9yZWNhc3Qgc3Bhbi5kaXZpZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgIH1cbiAgICAuY29udGVudC1ib3guZm9yZWNhc3Qgc3Bhbi5oaWdoLXRlbXAge1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIC5jb250ZW50LWJveC5mb3JlY2FzdCBzcGFuLmxvdy10ZW1wIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbi5jb250ZW50LWJveC5mb3JlY2FzdCAuY29uZGl0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakM7OzsyQkFHdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHlEQUE4RDtJQUM5RCxzQkFBc0I7SUFDdEIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFB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QTtRQUNJLGVBQWU7SUFDbkI7QUFDSjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnLi9zcmMvcmVzZXQuY3NzJyk7XFxuXFxuLyogbWFpbiBjb21wb25lbnRzICovXFxuI2NvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwic2lkZWJhciAgY3VycmVudFxcXCJcXG4gICAgICAgIFxcXCJzaWRlYmFyIC5cXFwiXFxuICAgICAgICBcXFwiZm9yZWNhc3QgZm9yZWNhc3RcXFwiO1xcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDAuOCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vc3JjL21lZGlhL2JhY2tncm91bmQtaW1hZ2UzLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7ICovXFxufVxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbn1cXG4uY29udGVudC1ib3guY3VycmVudCB7XFxuICAgIGdyaWQtYXJlYTogY3VycmVudDtcXG59XFxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IHtcXG4gICAgZ3JpZC1hcmVhOiBmb3JlY2FzdDtcXG59XFxuaW1nLmxvYWRpbmctZ2lmIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi5jb250ZW50LWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJlMmU0MDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyMjQ4N0U7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5pbWcuaWNvbiB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcblxcbi8qIHNpZGViYXIgKi9cXG4uc2lkZWJhciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG4uc2lkZWJhciBpbWcge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbn1cXG4uc2lkZWJhciAuY29udGVudC1ib3gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuLnNpZGViYXIgZm9ybS5zZWFyY2ggIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGlucHV0IHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnNpZGViYXIgZm9ybS5zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNkM2QzZDM7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxOXB4O1xcbiAgICByaWdodDogMjVweDtcXG59XFxuLnNpZGViYXIgZm9ybS5zZWFyY2ggaW1nLnNlYXJjaC1pY29uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuLnNpZGViYXIgZm9ybS5zZWFyY2ggaW1nLnNlYXJjaC1pY29uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKC44KTtcXG59XFxuLnNpZGViYXIgZm9ybS5zZWFyY2ggaW1nLnNlYXJjaC1pY29uOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguNik7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIHAuZXJyb3ItbWVzc2FnZSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2lkZWJhciBmb3JtLnNlYXJjaCBwLmVycm9yLW1lc3NhZ2UudmlzaWJsZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5zaWRlYmFyIGJ1dHRvbi5leHBhbmQtbWVudSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zaWRlYmFyIC5zZXR0aW5ncy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnNpZGViYXIgLnNldHRpbmdzLWNvbnRlbnQgLnRvZ2dsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcXG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiMwMDAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcbi5zaWRlYmFyIC50b2dnbGUtY29udGFpbmVyIGJ1dHRvbjphY3RpdmUge1xcbiAgICBib3JkZXItY29sb3I6IzAwMDAwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xcbn1cXG4uc2lkZWJhciAudG9nZ2xlLWNvbnRhaW5lciBidXR0b24uY2hvc2VuLXNldHRpbmcge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY5YmJmZjgwO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDA7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBsaSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGltZy5kZWxldGUge1xcbiAgICBoZWlnaHQ6IDE5cHg7XFxuICAgIHdpZHRoOiAxOXB4O1xcbn1cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgbGkgYnV0dG9uLmRlbGV0ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAxMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGU6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG59XFxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGU6YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xcbn1cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgYnV0dG9uLmxlZnQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAxMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGJ1dHRvbi5sZWZ0LWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZTJlMmUyO1xcbn1cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgYnV0dG9uLmxlZnQtY29udGFpbmVyOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjY2NjY2NjO1xcbn1cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgaDMge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBwLnJlZ2lvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLyogY3VycmVudCB3ZWF0aGVyICovXFxuLmNvbnRlbnQtYm94LmN1cnJlbnQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICAgIG1heC13aWR0aDogNzUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiY2l0eS1yZWdpb24gdGltZS1kYXRlXFxcIlxcbiAgICAgICAgXFxcImNpdHktcmVnaW9uIC5cXFwiXFxuICAgICAgICBcXFwidGVtcCBjb25kaXRpb25cXFwiXFxuICAgICAgICBcXFwicHJvcGVydGllcyBwcm9wZXJ0aWVzXFxcIlxcbiAgICAgICAgICBcXG59XFxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNpdHktcmVnaW9uLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogY2l0eS1yZWdpb247XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbiAgICAuY29udGVudC1ib3guY3VycmVudCAuY2l0eSB7XFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQtYm94LmN1cnJlbnQgLnJlZ2lvbiB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG4uY29udGVudC1ib3guY3VycmVudCAudGltZS1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogdGltZS1kYXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC50aW1lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgfVxcbiAgICAgICAgLmNvbnRlbnQtYm94LmN1cnJlbnQgLnRpbWUgc3BhbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xcbiAgICAgICAgfVxcbiAgICAuY29udGVudC1ib3guY3VycmVudCAuZGF0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG4uY29udGVudC1ib3guY3VycmVudCAudGVtcCB7XFxuICAgIGdyaWQtYXJlYTogdGVtcDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcbi5jb250ZW50LWJveC5jdXJyZW50IC5jb25kaXRpb24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBjb25kaXRpb247XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcbiAgICAuY29udGVudC1ib3guY3VycmVudCAuY29uZGl0aW9uLWljb24ge1xcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xcbiAgICAgICAgd2lkdGg6IDY1cHg7XFxuICAgIH1cXG4uY29udGVudC1ib3guY3VycmVudCAud2VhdGhlci1wcm9wZXJ0aWVzIHtcXG4gICAgZ3JpZC1hcmVhOiBwcm9wZXJ0aWVzO1xcbn1cXG5cXG4vKiB3ZWF0aGVyLXByb3BlcnRpZXMgY29udGFpbmVyKi9cXG4ud2VhdGhlci1wcm9wZXJ0aWVzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2ZmZmZmZjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4ud2VhdGhlci1wcm9wZXJ0aWVzIC53ZWF0aGVyLXByb3BlcnR5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbi53ZWF0aGVyLXByb3BlcnRpZXMgLndlYXRoZXItcHJvcGVydHkgaW1nIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4ud2VhdGhlci1wcm9wZXJ0aWVzIC53ZWF0aGVyLXByb3BlcnR5IC5yaWdodC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLyogZm9yZWNhc3QgKi9cXG4uY29udGVudC1ib3guZm9yZWNhc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5jb250ZW50LWJveC5mb3JlY2FzdCAuaG91cmx5LWRhdGUtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uY29udGVudC1ib3guZm9yZWNhc3QgLmhvdXJseS1kYXRlLWNvbnRhaW5lciAuaG91cnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcbi5jb250ZW50LWJveC5mb3JlY2FzdCAuaG91cmx5LWRhdGUtY29udGFpbmVyIHAuZGF0ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xcbn1cXG4uY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcbi5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSA+ICoge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gaDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5jb250ZW50LWJveC5mb3JlY2FzdCAuaGlnaC1sb3ctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn1cXG4gICAgLmNvbnRlbnQtYm94LmZvcmVjYXN0IHNwYW4uZGl2aWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB9XFxuICAgIC5jb250ZW50LWJveC5mb3JlY2FzdCBzcGFuLmhpZ2gtdGVtcCB7XFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50LWJveC5mb3JlY2FzdCBzcGFuLmxvdy10ZW1wIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgfVxcbi5jb250ZW50LWJveC5mb3JlY2FzdCAuY29uZGl0aW9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuQGltcG9ydCB1cmwoJy4vc3JjL3Jlc3BvbnNpdmUuY3NzJyk7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZmYW1pbHk9Um9ib3RvJmZhbWlseT1Sb2JvdG8rTW9ubyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLW1haW4tZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xufVxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbmxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG50ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogMTJweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDU4OTQ7IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjM0NWY7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3JjL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmZhbWlseT1Sb2JvdG8mZmFtaWx5PVJvYm90bytNb25vJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNTg5NDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjM0NWY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICBib2R5ICNjb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGdhcDogMjVweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwic2lkZWJhclwiXG4gICAgICAgICAgICBcImN1cnJlbnRcIlxuICAgICAgICAgICAgXCJmb3JlY2FzdFwiO1xuICAgIH1cbiAgICAjY29udGVudCAuc2lkZWJhciB7XG4gICAgICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTQycHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3gge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggZm9ybSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IGJ1dHRvbi5leHBhbmQtbWVudSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgICNjb250ZW50IC5zaWRlYmFyIC5jb250ZW50LWJveCBidXR0b24uZXhwYW5kLW1lbnU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDUwO1xuICAgICAgICB9XG4gICAgICAgICNjb250ZW50IC5zaWRlYmFyIC5jb250ZW50LWJveCBidXR0b24uZXhwYW5kLW1lbnU6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzMDtcbiAgICAgICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5jdXJyZW50IHtcbiAgICAgICAgZ3JpZC1hcmVhOiBjdXJyZW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IHtcbiAgICAgICAgZ3JpZC1hcmVhOiBmb3JlY2FzdDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgPiAqIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtIC5jb25kaXRpb24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG5cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3VybHktZGF0ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3VybHktZGF0ZS1jb250YWluZXIgLmhvdXJzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3VybHktZGF0ZS1jb250YWluZXIgLmhvdXJzLWNvbnRhaW5lciAuZm9yZWNhc3QtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAyZnI7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIGJvZHkgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmN1cnJlbnQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gICAgYm9keSAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCA+ICoge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBib2R5ICNjb250ZW50IC5jb250ZW50LWJveC5jdXJyZW50IC5jaXR5LXJlZ2lvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgfVxuXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuaG91cmx5LWRhdGUtY29udGFpbmVyIC5ob3Vycy1jb250YWluZXIgLmZvcmVjYXN0LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIH1cblxuICAgICNjb250ZW50ID4gKiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3NyYy9yZXNwb25zaXZlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsV0FBVztRQUNYLFNBQVM7UUFDVCwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDOzs7c0JBR2M7SUFDbEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjtRQUNJO1lBQ0ksZ0JBQWdCO1FBQ3BCO1FBQ0E7WUFDSSxrQkFBa0I7UUFDdEI7UUFDQTtZQUNJLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCw2QkFBNkI7UUFDakM7UUFDQTtZQUNJLDJCQUEyQjtRQUMvQjtRQUNBO1lBQ0ksMkJBQTJCO1FBQy9CO0lBQ0o7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixTQUFTO0lBQ2I7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7UUFDYixrQ0FBa0M7SUFDdEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFNBQVM7SUFDYjtJQUNBO1FBQ0ksV0FBVztRQUNYLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLFFBQVE7SUFDWjs7SUFFQTtRQUNJLGFBQWE7UUFDYixrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICBib2R5ICNjb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgZ2FwOiAyNXB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJzaWRlYmFyXFxcIlxcbiAgICAgICAgICAgIFxcXCJjdXJyZW50XFxcIlxcbiAgICAgICAgICAgIFxcXCJmb3JlY2FzdFxcXCI7XFxuICAgIH1cXG4gICAgI2NvbnRlbnQgLnNpZGViYXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDE0MnB4O1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IHtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IGZvcm0ge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICAgIH1cXG4gICAgICAgICNjb250ZW50IC5zaWRlYmFyIC5jb250ZW50LWJveCBidXR0b24uZXhwYW5kLW1lbnUge1xcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IGJ1dHRvbi5leHBhbmQtbWVudTpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDUwO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IGJ1dHRvbi5leHBhbmQtbWVudTphY3RpdmUge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzMDtcXG4gICAgICAgIH1cXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmN1cnJlbnQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBjdXJyZW50O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IHtcXG4gICAgICAgIGdyaWQtYXJlYTogZm9yZWNhc3Q7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSAuY29uZGl0aW9uLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmhvdXJseS1kYXRlLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3VybHktZGF0ZS1jb250YWluZXIgLmhvdXJzLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmhvdXJseS1kYXRlLWNvbnRhaW5lciAuaG91cnMtY29udGFpbmVyIC5mb3JlY2FzdC1pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIGJvZHkgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmN1cnJlbnQge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuICAgIGJvZHkgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmN1cnJlbnQgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICBib2R5ICNjb250ZW50IC5jb250ZW50LWJveC5jdXJyZW50IC5jaXR5LXJlZ2lvbi1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmhvdXJseS1kYXRlLWNvbnRhaW5lciAuaG91cnMtY29udGFpbmVyIC5mb3JlY2FzdC1pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50ID4gKiB7XFxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IEFQSWtleSA9ICc2ODc3NWRmYmU0YzY0YjU0YTkwMTUzMjAyMzI2MDYnOyIsImV4cG9ydCBjb25zdCBpY29uSW1wb3J0cyA9IHt9O1xuY29uc3QgZGF5SWNvbnMgPSBbXCJkYXkvMTEzLnBuZ1wiLFwiZGF5LzE0My5wbmdcIixcImRheS8xODUucG5nXCIsXCJkYXkvMjQ4LnBuZ1wiLFwiZGF5LzI4MS5wbmdcIixcImRheS8yOTkucG5nXCIsXCJkYXkvMzExLnBuZ1wiLFwiZGF5LzMyMy5wbmdcIixcImRheS8zMzUucG5nXCIsXCJkYXkvMzU2LnBuZ1wiLFwiZGF5LzM2OC5wbmdcIixcImRheS8zODYucG5nXCIsXCJkYXkvMTE2LnBuZ1wiLFwiZGF5LzE3Ni5wbmdcIixcImRheS8yMDAucG5nXCIsXCJkYXkvMjYwLnBuZ1wiLFwiZGF5LzI4NC5wbmdcIixcImRheS8zMDIucG5nXCIsXCJkYXkvMzE0LnBuZ1wiLFwiZGF5LzMyNi5wbmdcIixcImRheS8zMzgucG5nXCIsXCJkYXkvMzU5LnBuZ1wiLFwiZGF5LzM3MS5wbmdcIixcImRheS8zODkucG5nXCIsXCJkYXkvMTE5LnBuZ1wiLFwiZGF5LzE3OS5wbmdcIixcImRheS8yMjcucG5nXCIsXCJkYXkvMjYzLnBuZ1wiLFwiZGF5LzI5My5wbmdcIixcImRheS8zMDUucG5nXCIsXCJkYXkvMzE3LnBuZ1wiLFwiZGF5LzMyOS5wbmdcIixcImRheS8zNTAucG5nXCIsXCJkYXkvMzYyLnBuZ1wiLFwiZGF5LzM3NC5wbmdcIixcImRheS8zOTIucG5nXCIsXCJkYXkvMTIyLnBuZ1wiLFwiZGF5LzE4Mi5wbmdcIixcImRheS8yMzAucG5nXCIsXCJkYXkvMjY2LnBuZ1wiLFwiZGF5LzI5Ni5wbmdcIixcImRheS8zMDgucG5nXCIsXCJkYXkvMzIwLnBuZ1wiLFwiZGF5LzMzMi5wbmdcIixcImRheS8zNTMucG5nXCIsXCJkYXkvMzY1LnBuZ1wiLFwiZGF5LzM3Ny5wbmdcIixcImRheS8zOTUucG5nXCJdXG5jb25zdCBuaWdodEljb25zID0gW1wibmlnaHQvMTEzLnBuZ1wiLFwibmlnaHQvMTQzLnBuZ1wiLFwibmlnaHQvMTg1LnBuZ1wiLFwibmlnaHQvMjQ4LnBuZ1wiLFwibmlnaHQvMjgxLnBuZ1wiLFwibmlnaHQvMjk5LnBuZ1wiLFwibmlnaHQvMzExLnBuZ1wiLFwibmlnaHQvMzIzLnBuZ1wiLFwibmlnaHQvMzM1LnBuZ1wiLFwibmlnaHQvMzU2LnBuZ1wiLFwibmlnaHQvMzY4LnBuZ1wiLFwibmlnaHQvMzg2LnBuZ1wiLFwibmlnaHQvMTE2LnBuZ1wiLFwibmlnaHQvMTc2LnBuZ1wiLFwibmlnaHQvMjAwLnBuZ1wiLFwibmlnaHQvMjYwLnBuZ1wiLFwibmlnaHQvMjg0LnBuZ1wiLFwibmlnaHQvMzAyLnBuZ1wiLFwibmlnaHQvMzE0LnBuZ1wiLFwibmlnaHQvMzI2LnBuZ1wiLFwibmlnaHQvMzM4LnBuZ1wiLFwibmlnaHQvMzU5LnBuZ1wiLFwibmlnaHQvMzcxLnBuZ1wiLFwibmlnaHQvMzg5LnBuZ1wiLFwibmlnaHQvMTE5LnBuZ1wiLFwibmlnaHQvMTc5LnBuZ1wiLFwibmlnaHQvMjI3LnBuZ1wiLFwibmlnaHQvMjYzLnBuZ1wiLFwibmlnaHQvMjkzLnBuZ1wiLFwibmlnaHQvMzA1LnBuZ1wiLFwibmlnaHQvMzE3LnBuZ1wiLFwibmlnaHQvMzI5LnBuZ1wiLFwibmlnaHQvMzUwLnBuZ1wiLFwibmlnaHQvMzYyLnBuZ1wiLFwibmlnaHQvMzc0LnBuZ1wiLFwibmlnaHQvMzkyLnBuZ1wiLFwibmlnaHQvMTIyLnBuZ1wiLFwibmlnaHQvMTgyLnBuZ1wiLFwibmlnaHQvMjMwLnBuZ1wiLFwibmlnaHQvMjY2LnBuZ1wiLFwibmlnaHQvMjk2LnBuZ1wiLFwibmlnaHQvMzA4LnBuZ1wiLFwibmlnaHQvMzIwLnBuZ1wiLFwibmlnaHQvMzMyLnBuZ1wiLFwibmlnaHQvMzUzLnBuZ1wiLFwibmlnaHQvMzY1LnBuZ1wiLFwibmlnaHQvMzc3LnBuZ1wiLFwibmlnaHQvMzk1LnBuZ1wiXTtcbi8vIGltcG9ydCBhbGwgaWNvbnNcbltkYXlJY29ucywgbmlnaHRJY29uc10uZmxhdCgpLmZvckVhY2goaWNvbiA9PiBpY29uSW1wb3J0c1tpY29uXSA9IHJlcXVpcmUoYC4vbWVkaWEvYXBpSWNvbnMvJHtpY29ufWApKTtcblxuaW1wb3J0IHsgQVBJa2V5IH0gZnJvbSBcIi4vQVBJa2V5XCI7XG5pbXBvcnQgeyBXZWF0aGVyRGF0YSB9IGZyb20gXCIuL21vZGVsLmpzXCI7XG5pbXBvcnQgbG9hZGluZ0dpZiBmcm9tICcuL21lZGlhL2xvYWRpbmcuZ2lmJ1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICcuL3ZpZXcuanMnIFxuaW1wb3J0IHsgRm9ybWF0IH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQgeyB3ZWF0aGVyRGF0YSB9IGZyb20gJy4vaW5kZXguanMnO1xuLy8gRE9ORSBXSVRIIElNUE9SVFNcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgICBNb3ZlLnJlbW92ZVdlYXRoZXIoKTtcbiAgICBNb3ZlLmluc2VydExvYWRpbmdHSUYoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJa2V5fSZxPSR7bG9jYXRpb259JmRheXM9NyZhcWk9bm8mYWxlcnRzPXllc2AsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignIHVua25vd24gZXJyb3IgaGFzIG9jY3VyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBNb3ZlLnJlbW92ZUxvYWRpbmdHSUYoKTtcbiAgICAgICAgICAgIElucHV0LmhhbmRsZURhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgIE1vdmUucmVtb3ZlTG9hZGluZ0dJRigpO1xuICAgICAgICAvLyBFcnJvck1lc3NhZ2UudXBkYXRlR1VJKCk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IFNldHRpbmdzID0ge1xuICAgIG1lYXN1cmVtZW50OiAnVVMnLCAvLyAnVVMnIG9yICdtZXRyaWMnXG4gICAgZm9yZWNhc3Q6ICdob3VybHknLCAvLyAnaG91cmx5JyBvciAnZGFpbHknXG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlIHtcbiAgICBzdGF0aWMgcmVtb3ZlV2VhdGhlcigpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3guY3VycmVudCcpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3guZm9yZWNhc3QnKTtcbiAgICAgICAgaWYgKGN1cnJlbnRXZWF0aGVyKSB7XG4gICAgICAgICAgICBjdXJyZW50V2VhdGhlci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9yZWNhc3RXZWF0aGVyKSB7XG4gICAgICAgICAgICBmb3JlY2FzdFdlYXRoZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaW5zZXJ0TG9hZGluZ0dJRigpIHtcbiAgICAgICAgY29uc3QgZ2lmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGdpZi5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nLWdpZicpO1xuICAgICAgICBnaWYuc3JjID0gbG9hZGluZ0dpZjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChnaWYpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVMb2FkaW5nR0lGKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcubG9hZGluZy1naWYnKS5yZW1vdmUoKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgY2xhc3MgUG9wdWxhdGUge1xuICAgIHN0YXRpYyBkYWlseU1ldHJpYygpIHtcbiAgICAgICAgTG9hZC5yZW1vdmVDb250ZW50KCk7XG4gICAgICAgIExvYWQuY3VycmVudFdlYXRoZXIod2VhdGhlckRhdGEud2VhdGhlci5tZXRyaWMpO1xuICAgICAgICBMb2FkLmZvcmVjYXN0RGFpbHkod2VhdGhlckRhdGEud2VhdGhlci5tZXRyaWMpXG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBkYWlseVVTKCkge1xuICAgICAgICBMb2FkLnJlbW92ZUNvbnRlbnQoKTtcbiAgICAgICAgTG9hZC5jdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF0YS53ZWF0aGVyLlVTKTtcbiAgICAgICAgTG9hZC5mb3JlY2FzdERhaWx5KHdlYXRoZXJEYXRhLndlYXRoZXIuVVMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBob3VybHlNZXRyaWMoKSB7XG4gICAgICAgIExvYWQucmVtb3ZlQ29udGVudCgpO1xuICAgICAgICBMb2FkLmN1cnJlbnRXZWF0aGVyKHdlYXRoZXJEYXRhLndlYXRoZXIubWV0cmljKTtcbiAgICAgICAgTG9hZC5mb3JlY2FzdEhvdXJseSh3ZWF0aGVyRGF0YS53ZWF0aGVyLm1ldHJpYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhvdXJseVVTKCkge1xuICAgICAgICBMb2FkLnJlbW92ZUNvbnRlbnQoKTtcbiAgICAgICAgTG9hZC5jdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF0YS53ZWF0aGVyLlVTKTtcbiAgICAgICAgTG9hZC5mb3JlY2FzdEhvdXJseSh3ZWF0aGVyRGF0YS53ZWF0aGVyLlVTKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xpY2tVUyhlKSB7XG4gICAgICAgIFNldHRpbmdzLm1lYXN1cmVtZW50ID0gJ1VTJztcbiAgICAgICAgVUkudXBkYXRlTWVhc3VyZW1lbnRCdXR0b25zKGUpO1xuXG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdob3VybHknKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuaG91cmx5VVMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdkYWlseScpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5kYWlseVVTKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWNrTWV0cmljKGUpIHtcbiAgICAgICAgU2V0dGluZ3MubWVhc3VyZW1lbnQgPSAnbWV0cmljJztcbiAgICAgICAgVUkudXBkYXRlTWVhc3VyZW1lbnRCdXR0b25zKGUpO1xuXG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5mb3JlY2FzdCA9PT0gJ2hvdXJseScpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5ob3VybHlNZXRyaWMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdkYWlseScpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5kYWlseU1ldHJpYygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjbGlja0RhaWx5KGUpIHtcbiAgICAgICAgU2V0dGluZ3MuZm9yZWNhc3QgPSAnZGFpbHknO1xuICAgICAgICBVSS51cGRhdGVGb3JlY2FzdEJ1dHRvbnMoZSk7XG5cbiAgICAgICAgaWYgKHdlYXRoZXJEYXRhLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKFNldHRpbmdzLm1lYXN1cmVtZW50ID09PSAnVVMnKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuZGFpbHlVUygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5tZWFzdXJlbWVudCA9PT0gJ21ldHJpYycpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5kYWlseU1ldHJpYygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjbGlja0hvdXJseShlKSB7XG4gICAgICAgIFNldHRpbmdzLmZvcmVjYXN0ID0gJ2hvdXJseSc7XG4gICAgICAgIFVJLnVwZGF0ZUZvcmVjYXN0QnV0dG9ucyhlKTtcblxuICAgICAgICBpZiAod2VhdGhlckRhdGEuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MubWVhc3VyZW1lbnQgPT09ICdVUycpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5ob3VybHlVUygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5tZWFzdXJlbWVudCA9PT0gJ21ldHJpYycpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5ob3VybHlNZXRyaWMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkIHtcbiAgICBzdGF0aWMgcmVtb3ZlQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJveC5jdXJyZW50Jyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm94LmZvcmVjYXN0Jyk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGN1cnJlbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcmVjYXN0KSB7XG4gICAgICAgICAgICBmb3JlY2FzdC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZGVmYXVsdFVJKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKEJ1aWxkLnNpZGViYXIoKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGN1cnJlbnRXZWF0aGVyKGRhdGEpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChCdWlsZC5jdXJyZW50V2VhdGhlcihkYXRhKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmVjYXN0RGFpbHkoZGF0YSkge1xuICAgICAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IEJ1aWxkLmZvcmVjYXN0Q29udGFpbmVyKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChCdWlsZC5mb3JlY2FzdEl0ZW1EYWlseShkYXRhLmRhaWx5W2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGZvcmVjYXN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9yZWNhc3RIb3VybHkoZGF0YSkge1xuICAgICAgICAvLyBnZXRzIGV4YWN0bHkgMjQgaG91cnMgb2YgZm9yZWNhc3QgZGF0YSBzcGxpdCBpbnRvIGhvdXJzLCBzbyBkYXRhIG5lZWRzIHRvIGJlIGdyYWJiZWQgZnJvbSBtdWx0aXBsZSBkYXlzXG4gICAgICAgIC8vIGdldCBudW1iZXIgdmFsdWUgaW4gMjQgaHIgdGltZSByZXByZXN0aW5nIGN1cnJlbnQgdGltZVxuICAgICAgICBjb25zdCBjdXJyZW50SG91ciA9IE51bWJlcihGb3JtYXQuZ2V0SG91cjI0SFIoZGF0YS5sb2NhdGlvbi5sb2NhbFRpbWUpKTtcbiAgICAgICAgLy8gZ2V0IHRoZSBob3VycyBsZWZ0IGluIGN1cnJlbnQgZGF5XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXlIb3VycyA9IGRhdGEuaG91cmx5WzBdLnNsaWNlKGN1cnJlbnRIb3VyKTtcbiAgICAgICAgLy8gZ2V0IHRoZSByZW1haW5pbmcgaG91cnMgbGVmdCB0byBlcXVhbCAyNCB0b3RhbFxuICAgICAgICBjb25zdCBuZXh0RGF5SG91cnMgPSBkYXRhLmhvdXJseVsxXS5zbGljZSgwLCBkYXRhLmhvdXJseVsxXS5sZW5ndGggLSBjdXJyZW50RGF5SG91cnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGZvcmVjYXN0IGNvbnRhaW5lciBjb250YWlucyAyIG1haW4gY29udGFpbmVycyBmb3IgZWFjaCBkYXlcbiAgICAgICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBCdWlsZC5mb3JlY2FzdENvbnRhaW5lcigpO1xuICAgICAgICBcbiAgICAgICAgLy8gaW5zZXJ0IGRhdGEgZm9yIGVhY2ggaG91ciBvZiBkYXkgb25lIGludG8gZGF5IG9uZSdzIGNvbnRhaW5lciBhbmQgYWRkIGRheSBvbmUncyBjb250YWluZXIgdG8gdGhlIHBhcmVudCBjb250YWluZXJcbiAgICAgICAgY29uc3QgZGF5T25lSG91cmx5RGF0ZUNvbnRhaW5lciA9IEJ1aWxkLmhvdXJseURhdGVDb250YWluZXIoZGF0YS5kYWlseVswXSlcbiAgICAgICAgY29uc3QgZGF5T25lQ29udGVudCA9IGNyZWF0ZUhvdXJzQ29udGFpbmVyKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudERheUhvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkYXlPbmVDb250ZW50LmFwcGVuZENoaWxkKEJ1aWxkLmZvcmVjYXN0SXRlbUhvdXJseShjdXJyZW50RGF5SG91cnNbaV0pKVxuICAgICAgICB9XG4gICAgICAgIGRheU9uZUhvdXJseURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5T25lQ29udGVudCk7XG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheU9uZUhvdXJseURhdGVDb250YWluZXIpO1xuXG4gICAgICAgIC8vIHJlcGVhdCBmb3IgZGF5IHR3b1xuICAgICAgICBjb25zdCBkYXlUd29Ib3VybHlEYXRlQ29udGFpbmVyID0gQnVpbGQuaG91cmx5RGF0ZUNvbnRhaW5lcihkYXRhLmRhaWx5WzFdKTtcbiAgICAgICAgY29uc3QgZGF5VHdvQ29udGVudCA9IGNyZWF0ZUhvdXJzQ29udGFpbmVyKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV4dERheUhvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkYXlUd29Db250ZW50LmFwcGVuZENoaWxkKEJ1aWxkLmZvcmVjYXN0SXRlbUhvdXJseShuZXh0RGF5SG91cnNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICBkYXlUd29Ib3VybHlEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheVR3b0NvbnRlbnQpO1xuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlUd29Ib3VybHlEYXRlQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBpbnNlcnQgZXZlcnl0aGluZyBpbnRvIHRoZSBkb2N1bWVudFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGZvcmVjYXN0Q29udGFpbmVyKTtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVIb3Vyc0NvbnRhaW5lcigpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElucHV0IHtcbiAgICBzdGF0aWMgc3VibWl0TG9jYXRpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNzZWFyY2gtbG9jYXRpb24nKTtcblxuICAgICAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gaW5wdXQudmFsdWUudHJpbUVuZCgpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgZ2V0V2VhdGhlcihsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlRGF0YShkYXRhKSB7XG4gICAgICAgIHdlYXRoZXJEYXRhLnNldERhdGEoZGF0YSk7XG5cbiAgICAgICAgaWYgKFNldHRpbmdzLm1lYXN1cmVtZW50ID09PSAnVVMnKSB7XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdkYWlseScpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5kYWlseVVTKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFNldHRpbmdzLmZvcmVjYXN0ID09PSAnaG91cmx5Jykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmhvdXJseVVTKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFNldHRpbmdzLm1lYXN1cmVtZW50ID09PSAnbWV0cmljJykge1xuICAgICAgICAgICAgaWYgKFNldHRpbmdzLmZvcmVjYXN0ID09PSAnZGFpbHknKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuZGFpbHlNZXRyaWMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdob3VybHknKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuaG91cmx5TWV0cmljKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVUkge1xuICAgIHN0YXRpYyB1cGRhdGVNZWFzdXJlbWVudEJ1dHRvbnMoZSkge1xuICAgICAgICBjb25zdCBVUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5zZXR0aW5ncy51cy1tZWFzdXJlbWVudCcpO1xuICAgICAgICBjb25zdCBtZXRyaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uc2V0dGluZ3MubWV0cmljLW1lYXN1cmVtZW50Jyk7XG4gICAgICAgIFtVUywgbWV0cmljXS5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXNldHRpbmcnKSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1zZXR0aW5nJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZUZvcmVjYXN0QnV0dG9ucyhlKSB7XG4gICAgICAgIGNvbnN0IGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLnNldHRpbmdzLmRhaWx5LWZvcmVjYXN0Jyk7XG4gICAgICAgIGNvbnN0IGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5zZXR0aW5ncy5ob3VybHktZm9yZWNhc3QnKTtcbiAgICAgICAgW2RhaWx5LCBob3VybHldLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tc2V0dGluZycpKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXNldHRpbmcnKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCAnLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBMb2FkIH0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCB7IFdlYXRoZXJEYXRhIH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5cbmV4cG9ydCBjb25zdCB3ZWF0aGVyRGF0YSA9IG5ldyBXZWF0aGVyRGF0YSgpO1xuXG5Mb2FkLmRlZmF1bHRVSSgpO1xuXG5cblxuXG5cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9kYXkvMTEzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8xMTMucG5nXCIsXG5cdFwiLi9kYXkvMTE2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8xMTYucG5nXCIsXG5cdFwiLi9kYXkvMTE5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8xMTkucG5nXCIsXG5cdFwiLi9kYXkvMTIyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8xMjIucG5nXCIsXG5cdFwiLi9kYXkvMTQzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8xNDMucG5nXCIsXG5cdFwiLi9kYXkvMTc2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8xNzYucG5nXCIsXG5cdFwiLi9kYXkvMTc5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8xNzkucG5nXCIsXG5cdFwiLi9kYXkvMTgyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8xODIucG5nXCIsXG5cdFwiLi9kYXkvMTg1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8xODUucG5nXCIsXG5cdFwiLi9kYXkvMjAwLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8yMDAucG5nXCIsXG5cdFwiLi9kYXkvMjI3LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8yMjcucG5nXCIsXG5cdFwiLi9kYXkvMjMwLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8yMzAucG5nXCIsXG5cdFwiLi9kYXkvMjQ4LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8yNDgucG5nXCIsXG5cdFwiLi9kYXkvMjYwLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8yNjAucG5nXCIsXG5cdFwiLi9kYXkvMjYzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8yNjMucG5nXCIsXG5cdFwiLi9kYXkvMjY2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8yNjYucG5nXCIsXG5cdFwiLi9kYXkvMjgxLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8yODEucG5nXCIsXG5cdFwiLi9kYXkvMjg0LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8yODQucG5nXCIsXG5cdFwiLi9kYXkvMjkzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8yOTMucG5nXCIsXG5cdFwiLi9kYXkvMjk2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8yOTYucG5nXCIsXG5cdFwiLi9kYXkvMjk5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8yOTkucG5nXCIsXG5cdFwiLi9kYXkvMzAyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMDIucG5nXCIsXG5cdFwiLi9kYXkvMzA1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMDUucG5nXCIsXG5cdFwiLi9kYXkvMzA4LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMDgucG5nXCIsXG5cdFwiLi9kYXkvMzExLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMTEucG5nXCIsXG5cdFwiLi9kYXkvMzE0LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMTQucG5nXCIsXG5cdFwiLi9kYXkvMzE3LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMTcucG5nXCIsXG5cdFwiLi9kYXkvMzIwLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMjAucG5nXCIsXG5cdFwiLi9kYXkvMzIzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMjMucG5nXCIsXG5cdFwiLi9kYXkvMzI2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMjYucG5nXCIsXG5cdFwiLi9kYXkvMzI5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMjkucG5nXCIsXG5cdFwiLi9kYXkvMzMyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMzIucG5nXCIsXG5cdFwiLi9kYXkvMzM1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMzUucG5nXCIsXG5cdFwiLi9kYXkvMzM4LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zMzgucG5nXCIsXG5cdFwiLi9kYXkvMzUwLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zNTAucG5nXCIsXG5cdFwiLi9kYXkvMzUzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zNTMucG5nXCIsXG5cdFwiLi9kYXkvMzU2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zNTYucG5nXCIsXG5cdFwiLi9kYXkvMzU5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zNTkucG5nXCIsXG5cdFwiLi9kYXkvMzYyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zNjIucG5nXCIsXG5cdFwiLi9kYXkvMzY1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zNjUucG5nXCIsXG5cdFwiLi9kYXkvMzY4LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zNjgucG5nXCIsXG5cdFwiLi9kYXkvMzcxLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zNzEucG5nXCIsXG5cdFwiLi9kYXkvMzc0LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zNzQucG5nXCIsXG5cdFwiLi9kYXkvMzc3LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zNzcucG5nXCIsXG5cdFwiLi9kYXkvMzg2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zODYucG5nXCIsXG5cdFwiLi9kYXkvMzg5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zODkucG5nXCIsXG5cdFwiLi9kYXkvMzkyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zOTIucG5nXCIsXG5cdFwiLi9kYXkvMzk1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL2RheS8zOTUucG5nXCIsXG5cdFwiLi9uaWdodC8xMTMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMTEzLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMTE2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzExNi5wbmdcIixcblx0XCIuL25pZ2h0LzExOS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8xMTkucG5nXCIsXG5cdFwiLi9uaWdodC8xMjIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMTIyLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMTQzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzE0My5wbmdcIixcblx0XCIuL25pZ2h0LzE3Ni5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8xNzYucG5nXCIsXG5cdFwiLi9uaWdodC8xNzkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMTc5LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMTgyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzE4Mi5wbmdcIixcblx0XCIuL25pZ2h0LzE4NS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8xODUucG5nXCIsXG5cdFwiLi9uaWdodC8yMDAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjAwLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjI3LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzIyNy5wbmdcIixcblx0XCIuL25pZ2h0LzIzMC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yMzAucG5nXCIsXG5cdFwiLi9uaWdodC8yNDgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjQ4LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjYwLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzI2MC5wbmdcIixcblx0XCIuL25pZ2h0LzI2My5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yNjMucG5nXCIsXG5cdFwiLi9uaWdodC8yNjYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjY2LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjgxLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzI4MS5wbmdcIixcblx0XCIuL25pZ2h0LzI4NC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yODQucG5nXCIsXG5cdFwiLi9uaWdodC8yOTMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjkzLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjk2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzI5Ni5wbmdcIixcblx0XCIuL25pZ2h0LzI5OS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yOTkucG5nXCIsXG5cdFwiLi9uaWdodC8zMDIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzAyLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzA1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMwNS5wbmdcIixcblx0XCIuL25pZ2h0LzMwOC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMDgucG5nXCIsXG5cdFwiLi9uaWdodC8zMTEucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzExLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzE0LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMxNC5wbmdcIixcblx0XCIuL25pZ2h0LzMxNy5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMTcucG5nXCIsXG5cdFwiLi9uaWdodC8zMjAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzIwLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzIzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMyMy5wbmdcIixcblx0XCIuL25pZ2h0LzMyNi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMjYucG5nXCIsXG5cdFwiLi9uaWdodC8zMjkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzI5LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzMyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMzMi5wbmdcIixcblx0XCIuL25pZ2h0LzMzNS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMzUucG5nXCIsXG5cdFwiLi9uaWdodC8zMzgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzM4LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzUwLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM1MC5wbmdcIixcblx0XCIuL25pZ2h0LzM1My5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNTMucG5nXCIsXG5cdFwiLi9uaWdodC8zNTYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzU2LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzU5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM1OS5wbmdcIixcblx0XCIuL25pZ2h0LzM2Mi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNjIucG5nXCIsXG5cdFwiLi9uaWdodC8zNjUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzY1LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzY4LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM2OC5wbmdcIixcblx0XCIuL25pZ2h0LzM3MS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNzEucG5nXCIsXG5cdFwiLi9uaWdodC8zNzQucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzc0LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzc3LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM3Ny5wbmdcIixcblx0XCIuL25pZ2h0LzM4Ni5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zODYucG5nXCIsXG5cdFwiLi9uaWdodC8zODkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzg5LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzkyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM5Mi5wbmdcIixcblx0XCIuL25pZ2h0LzM5NS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zOTUucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL21lZGlhL2FwaUljb25zIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiZXhwb3J0IGNsYXNzIFdlYXRoZXJEYXRhIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMud2VhdGhlciA9IHtVUzp7fSwgbWV0cmljOnt9fTtcbiAgICB9XG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy53ZWF0aGVyLlVTKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIFxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5nZXRDdXJyZW50KGRhdGEpO1xuICAgICAgICBjb25zdCBkYWlseSA9IHRoaXMuZ2V0RGFpbHlGb3JlY2FzdChkYXRhKTtcbiAgICAgICAgY29uc3QgaG91cmx5ID0gdGhpcy5nZXRIb3VybHlGb3JlY2FzdChkYXRhKTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMud2VhdGhlciwgdGhpcy5nZXRMb2NhdGlvbihkYXRhKSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy53ZWF0aGVyLlVTLCBjdXJyZW50LlVTKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndlYXRoZXIuVVMsIGRhaWx5LlVTKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndlYXRoZXIuVVMsIGhvdXJseS5VUyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy53ZWF0aGVyLm1ldHJpYywgY3VycmVudC5tZXRyaWMpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMud2VhdGhlci5tZXRyaWMsIGRhaWx5Lm1ldHJpYyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy53ZWF0aGVyLm1ldHJpYywgaG91cmx5Lm1ldHJpYyk7XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb24oZGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgVVM6IHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiBkYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogZGF0YS5sb2NhdGlvbi5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IEZvcm1hdC5hYmJyZXZpYXRlQ291bnRyeU5hbWUoZGF0YS5sb2NhdGlvbi5jb3VudHJ5KSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxUaW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IGRhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiBkYXRhLmxvY2F0aW9uLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTogRm9ybWF0LmFiYnJldmlhdGVDb3VudHJ5TmFtZShkYXRhLmxvY2F0aW9uLmNvdW50cnkpLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbFRpbWU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFVTOiB7XG4gICAgICAgICAgICAgICAgY3VycmVudDoge1xuICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZDogZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZCxcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGljb246IEZvcm1hdC5nZXRJY29uUGF0aChkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24pLFxuICAgICAgICAgICAgICAgICAgICByYWluQ2hhbmNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICAgICAgICAgICAgc25vd0NoYW5jZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3Nub3csXG4gICAgICAgICAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgICAgICAgICAgICAgIHByZXNzdXJlOiBkYXRhLmN1cnJlbnQucHJlc3N1cmVfaW4gKyAnIGluSGcnLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wOiBkYXRhLmN1cnJlbnQudGVtcF9mICsgJ1xcdTAwQjAgRicsXG4gICAgICAgICAgICAgICAgICAgIGZlZWxzTGlrZTogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mICsgJ1xcdTAwQjAnLFxuICAgICAgICAgICAgICAgICAgICB3aW5kOiBkYXRhLmN1cnJlbnQud2luZF9tcGggKyAnIG1waCcsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBGb3JtYXQuZ2V0SWNvblBhdGgoZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKSxcbiAgICAgICAgICAgICAgICAgICAgcmFpbkNoYW5jZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgICAgICAgICAgIHNub3dDaGFuY2U6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93LFxuICAgICAgICAgICAgICAgICAgICBodW1pZGl0eTogZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICAgICAgICAgICAgICBwcmVzc3VyZTogZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICsgJyBtYicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXA6IGRhdGEuY3VycmVudC50ZW1wX2MgKyAnXFx1MDBCMCBDJyxcbiAgICAgICAgICAgICAgICAgICAgZmVlbHNMaWtlOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MgKyAnXFx1MDBCMCcsXG4gICAgICAgICAgICAgICAgICAgIHdpbmQ6IGRhdGEuY3VycmVudC53aW5kX2twaCArICcga3BoJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREYWlseUZvcmVjYXN0KGRhdGEpIHtcbiAgICAgICAgY29uc3QgZGFpbHlGb3JlY2FzdCA9IHsgVVM6IHtkYWlseTpbXX0sIG1ldHJpYzoge2RhaWx5OltdfX07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzaW5nbGVEYXkgPSB0aGlzLnNldFNpbmdsZURheUZvcmVjYXN0KGRhdGEsIGkpO1xuICAgICAgICAgICAgZGFpbHlGb3JlY2FzdC5VUy5kYWlseS5wdXNoKHNpbmdsZURheS5VUyk7XG4gICAgICAgICAgICBkYWlseUZvcmVjYXN0Lm1ldHJpYy5kYWlseS5wdXNoKHNpbmdsZURheS5tZXRyaWMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhaWx5Rm9yZWNhc3Q7XG4gICAgfVxuXG4gICAgc2V0U2luZ2xlRGF5Rm9yZWNhc3QoZGF0YSwgaSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgVVM6IHtcbiAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGUsXG4gICAgICAgICAgICAgICAgaGlnaFRlbXA6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZixcbiAgICAgICAgICAgICAgICBsb3dUZW1wOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2YsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICBpY29uOiBGb3JtYXQuZ2V0SWNvblBhdGgoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLmljb24pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSxcbiAgICAgICAgICAgICAgICBoaWdoVGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgICAgIGxvd1RlbXA6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgIGljb246IEZvcm1hdC5nZXRJY29uUGF0aChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbiksXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRIb3VybHlGb3JlY2FzdChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHR3b0RheXMgPSB7IFVTOiB7aG91cmx5OltdfSwgbWV0cmljOiB7aG91cmx5OltdfX07XG4gICAgICAgIC8vIGdldHMgZGF5cyAxIGFuZCBkYXlzIDIgaG91cmx5IGZvcmVjYXN0IGZyb20gZmV0Y2ggZGF0YVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0d29EYXlzLlVTLmhvdXJseS5wdXNoKFtdKTtcbiAgICAgICAgICAgIHR3b0RheXMubWV0cmljLmhvdXJseS5wdXNoKFtdKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAyNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91ckRhdGEgPSB0aGlzLnNldEhvdXIoZGF0YSwgaSwgaik7XG4gICAgICAgICAgICAgICAgdHdvRGF5cy5VUy5ob3VybHlbaV0ucHVzaChob3VyRGF0YS5VUyk7XG4gICAgICAgICAgICAgICAgdHdvRGF5cy5tZXRyaWMuaG91cmx5W2ldLnB1c2goaG91ckRhdGEubWV0cmljKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0d29EYXlzO1xuICAgIH1cblxuICAgIHNldEhvdXIoZGF0YSwgaSwgaikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgVVM6IHtcbiAgICAgICAgICAgICAgICB0aW1lOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0udGltZSxcbiAgICAgICAgICAgICAgICB0ZW1wOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0udGVtcF9mLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2pdLmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgIGljb246IEZvcm1hdC5nZXRJY29uUGF0aChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0uY29uZGl0aW9uLmljb24pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgICAgIHRpbWU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uaG91cltqXS50aW1lLFxuICAgICAgICAgICAgICAgIHRlbXA6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uaG91cltqXS50ZW1wX2MsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0uY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgaWNvbjogRm9ybWF0LmdldEljb25QYXRoKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uaG91cltqXS5jb25kaXRpb24uaWNvbiksXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXQge1xuXG4gICAgLy8gZ2V0cyB0aGUgcHJvcGVydHkgdGhhdCBjYW4gYmUgdXNlZCB0byByZWZlcmVuY2UgYW4gaW1wb3J0ZWQgaWNvblxuICAgIC8vIGljb25JbXBvcnRzW0Zvcm1hdC5nZXRJY29uUGF0aChkYXRhKV07XG4gICAgc3RhdGljIGdldEljb25QYXRoKHN0cmluZykge1xuICAgICAgICBpZiAoc3RyaW5nLmluY2x1ZGVzKCduaWdodCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gYG5pZ2h0LyR7c2xpY2VTdHJpbmcoc3RyaW5nKX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cmluZy5pbmNsdWRlcygnZGF5JykpIHtcbiAgICAgICAgICAgIHJldHVybiBgZGF5LyR7c2xpY2VTdHJpbmcoc3RyaW5nKX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2xpY2VTdHJpbmcoc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKHN0cmluZy5sZW5ndGggLSA3LCBzdHJpbmcubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXREYXlOYW1lTG9uZyhzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFsnU3VuZGF5JywnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddW25ldyBEYXRlKHN0cmluZykuZ2V0RGF5KCldO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0RGF5TmFtZVNob3J0KHN0cmluZykge1xuICAgICAgICByZXR1cm4gWydTdW4nLCdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddW25ldyBEYXRlKHN0cmluZykuZ2V0RGF5KCldO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREYXlOdW1iZXIoc3RyaW5nKSB7XG4gICAgICAgIC8vIHN0cmluZyByZXByZXN0aW5nIGRhdGUgbXVzdCBiZSBpbiAneXl5eS1NTS1kZCcgZm9ybWF0XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJy0nKVsyXS5zbGljZSgwLDIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRNb250aE5hbWUoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVtuZXcgRGF0ZShzdHJpbmcpLmdldE1vbnRoKCldO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREYXlOdW1iZXJQcmVmaXgoc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IG5ldyBEYXRlKHN0cmluZykuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgc3VmZml4ID0gJ3RoJztcblxuICAgICAgICBpZiAobnVtYmVyID09IDEgfHwgbnVtYmVyID09IDIxIHx8IG51bWJlciA9PSAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlciA9PSAyIHx8IG51bWJlciA9PSAyMikge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlciA9PSAzIHx8IG51bWJlciA9PSAyMykge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgc3VmZml4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERheU51bWJlcihzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gbmV3IERhdGUoc3RyaW5nKS5nZXREYXRlKCk7XG4gICAgICAgIGlmIChudW1iZXIgPiA5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlciA8IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gJzAnICsgbnVtYmVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFllYXJOdW1iZXIoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShzdHJpbmcpLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFNwb2tlbkRhdGUoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldERheU5hbWVMb25nKHN0cmluZyl9LCAke3RoaXMuZ2V0TW9udGhOYW1lKHN0cmluZyl9ICR7dGhpcy5nZXREYXlOdW1iZXJQcmVmaXgoc3RyaW5nKX0sICR7dGhpcy5nZXRZZWFyTnVtYmVyKHN0cmluZyl9YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0TG9jYWxlVGltZShzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0cmluZykudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIGlmIChkYXRlLmxlbmd0aCA9PT0gMTEpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnNsaWNlKDAsNSkgKyBkYXRlLnNsaWNlKDksMTEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5zbGljZSgwLDQpICsgZGF0ZS5zbGljZSg4LDEwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEhvdXIyNEhSKHN0cmluZykge1xuICAgICAgICAvLyByZXR1cm5zIHRoZSBob3VyIG9mIGEgZGF0ZSBpbiB0aGUgZm9ybWF0ICdoaCdcbiAgICAgICAgLy8gdG8gYmUgdXNlZCB3aXRoIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uaG91cltpXS50aW1lXG4gICAgICAgIC8vIGRhdGUgbXVzdCBiZSBmb3JtYXR0ZWQgaW4gJ3l5eXktTU0tZGQgaGgtbW1cIiBmb3JtYXRcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgnICcpWzFdLnNwbGl0KCc6JylbMF07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEhvdXJBTVBNKHN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRlZFN0cmluZyA9IG5ldyBEYXRlKHN0cmluZykudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBkYXRlZFN0cmluZy5zcGxpdCgnICcpWzBdLnNwbGl0KCc6JylbMF0gKyBkYXRlZFN0cmluZy5zcGxpdCgnICcpWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFiYnJldmlhdGVDb3VudHJ5TmFtZShzdHJpbmcpIHtcbiAgICAgICAgaWYgKHN0cmluZyA9PT0gJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYScpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlVTQVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgaWNvbkltcG9ydHMgfSBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuL21lZGlhL3NlYXJjaC5zdmcnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vbW9kZWwuanNcIjtcbmltcG9ydCB7IEZvcm1hdCB9IGZyb20gXCIuL21vZGVsLmpzXCI7XG5pbXBvcnQgeyBQb3B1bGF0ZSB9IGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcblxuY2xhc3MgRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICd0YWduYW1lJzonZGl2JyxcbiAgICAgICAgfVxuICAgICkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLy9uZXcgRWxlbWVudCgpLmJ1aWxkKCkgd2lsbCBkZWZhdWx0IHRvIGEgY3JlYXRlZCBkaXYgZWxlbWVudFxuICAgICAgICAvL2lmIGEgY29uZmlnIG9iamVjdCBpcyBwYXNzZWQgaW4gYXMgYSBwYXJhbWV0ZXIsIHRoZW4gYSB0YWduYW1lIHByb3BlcnR5IGFsd2F5cyBuZWVkcyB0byBiZSBhZGRlZFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmNvbmZpZ1sndGFnbmFtZSddKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IG11bHRpcGxlIGNsYXNzbmFtZXMgaW4gc2luZ2xlIGRlY2xhcmF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IHRoaXMuY29uZmlnWydjbGFzcyddLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnWydjbGFzcyddKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBjbGFzc05hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5jb25maWdbJ2lkJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcGVydHkgPT09ICd0ZXh0LWNvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuY29uZmlnWyd0ZXh0LWNvbnRlbnQnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnZXZlbnQtbGlzdGVuZXJzJykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5jb25maWdbJ2V2ZW50LWxpc3RlbmVycyddKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHByb3BlcnR5LCB0aGlzLmNvbmZpZ1snZXZlbnQtbGlzdGVuZXJzJ11bcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gJ3NyYycpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNyYyA9IHRoaXMuY29uZmlnWydzcmMnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY2hpbGQgbXVzdCBiZSBidWlsdCB1c2luZyB0aGlzLmJ1aWxkKClcbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGNoaWxkIG9mIHRoaXMuY29uZmlnWydjaGlsZHJlbiddKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcGVydHkgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5jb25maWdbJ3N0eWxlJ10pe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHRoaXMuY29uZmlnWydzdHlsZSddW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSAhPT0gJ3RhZ25hbWUnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHRoaXMuY29uZmlnW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCdWlsZCB7XG4gICAgc3RhdGljIHNpZGViYXIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ3NpZGViYXInLFxuICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2Zvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdzZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnc3VibWl0JzpJbnB1dC5zdWJtaXRMb2NhdGlvbn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ3NlYXJjaC1sb2NhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2VhcmNoLWxvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICd6aXAgY29kZSBvciBjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdXRvZm9jdXMnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3NlYXJjaC1pY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6IHNlYXJjaEljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnc2VhcmNoLWljb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdlcnJvci1tZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnTm8gbWF0Y2hpbmcgbG9jYXRpb24gZm91bmQuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdleHBhbmQtbWVudScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvZG93bi1jYXJyb3Quc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnZXhwYW5kLW1lbnUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2gyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ1NldHRpbmdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc2V0dGluZ3MtY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdoNCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ01lYXN1cmVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0b2dnbGUtY29udGFpbmVyIG1lYXN1cmVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnVVMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidzZXR0aW5ncyB1cy1tZWFzdXJlbWVudCBjaG9zZW4tc2V0dGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnY2xpY2snOlBvcHVsYXRlLmNsaWNrVVN9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ01ldHJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J3NldHRpbmdzIG1ldHJpYy1tZWFzdXJlbWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnY2xpY2snOlBvcHVsYXRlLmNsaWNrTWV0cmljfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaDQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdGb3JlY2FzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndG9nZ2xlLWNvbnRhaW5lciBmb3JlY2FzdC1ob3VybHkgY2hvc2VuLXNldHRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdIb3VybHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidzZXR0aW5ncyBob3VybHktZm9yZWNhc3QgY2hvc2VuLXNldHRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQtbGlzdGVuZXJzJzp7J2NsaWNrJzpQb3B1bGF0ZS5jbGlja0hvdXJseX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnRGFpbHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidzZXR0aW5ncyBkYWlseS1mb3JlY2FzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnY2xpY2snOlBvcHVsYXRlLmNsaWNrRGFpbHl9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2gyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ1NhdmVkIExvY2F0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc2F2ZWQtY2l0aWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNhdmVkQ2l0eUl0ZW0oKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAndGFnbmFtZSc6ICdsaScsXG4gICAgICAgICAgICAnY2xhc3MnOiAnY2l0eS1uYW1lJyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsZWZ0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdoMycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdCb3N0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncmVnaW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ01hc3NhY2h1c2V0dHMsIFVTQScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NpdHktb2JqZWN0LWlkJzogJzEyMzQ1JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvZGVsZXRlLnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3VycmVudFdlYXRoZXIoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdjb250ZW50LWJveCBjdXJyZW50JyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjaXR5LXJlZ2lvbi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5sb2NhdGlvbi5jaXR5fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2g1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncmVnaW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5sb2NhdGlvbi5yZWdpb259LCAke2RhdGEubG9jYXRpb24uY291bnRyeX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RpbWUtZGF0ZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RpbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ2FzIG9mJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogRm9ybWF0LmdldExvY2FsZVRpbWUoZGF0YS5jdXJyZW50Lmxhc3RVcGRhdGVkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IEZvcm1hdC5nZXRTcG9rZW5EYXRlKGRhdGEuY3VycmVudC5sYXN0VXBkYXRlZCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RlbXAnLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50LnRlbXB9YCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogaWNvbkltcG9ydHNbZGF0YS5jdXJyZW50Lmljb25dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnd2VhdGhlci1pY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29uZGl0aW9uLWljb24gaWNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmN1cnJlbnQuY29uZGl0aW9ufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnd2VhdGhlci1wcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dlYXRoZXItcHJvcGVydHkgZmVlbHMtbGlrZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvdGhlcm1vbWV0ZXIuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnZmVlbHMtbGlrZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncmlnaHQtY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ0ZlZWxzIGxpa2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEuY3VycmVudC5mZWVsc0xpa2V9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dlYXRoZXItcHJvcGVydHkgd2luZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvd2luZC5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICd3aW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdyaWdodC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnV2luZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50LndpbmR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd3ZWF0aGVyLXByb3BlcnR5IGNoYW5jZS1yYWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogJy4uL3NyYy9tZWRpYS9yYWluLnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJ3JhaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JpZ2h0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdSYWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmN1cnJlbnQucmFpbkNoYW5jZX0lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd3ZWF0aGVyLXByb3BlcnR5IGNoYW5jZS1zbm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogJy4uL3NyYy9tZWRpYS9zbm93LnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJ3Nub3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JpZ2h0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdTbm93OicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50LnNub3dDaGFuY2V9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnd2VhdGhlci1wcm9wZXJ0eSBodW1pZGl0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvaHVtaWRpdHkuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnaHVtaWRpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JpZ2h0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdIdW1pZGl0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dlYXRoZXItcHJvcGVydHkgcHJlc3N1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiAnLi4vc3JjL21lZGlhL3ByZXNzdXJlLnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJ3ByZXNzdXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdyaWdodC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnUHJlc3N1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEuY3VycmVudC5wcmVzc3VyZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmVjYXN0Q29udGFpbmVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdjb250ZW50LWJveCBmb3JlY2FzdCcsXG4gICAgICAgIH0pLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmVjYXN0SXRlbURhaWx5KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZm9yZWNhc3QtaXRlbSBkYWlseS1pdGVtJyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2gzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke0Zvcm1hdC5nZXREYXlOYW1lU2hvcnQoZGF0YS5kYXRlKX0gJHtGb3JtYXQuZ2V0RGF5TnVtYmVyKGRhdGEuZGF0ZSl9YCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2hpZ2gtbG93LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaGlnaC10ZW1wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5oaWdoVGVtcH1cXHUwMEIwYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2RpdmlkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnLycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsb3ctdGVtcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEubG93VGVtcH1cXHUwMEIwYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb25kaXRpb24tY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbiBpY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogaWNvbkltcG9ydHNbZGF0YS5pY29uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmNvbmRpdGlvbn1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9yZWNhc3RJdGVtSG91cmx5KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZm9yZWNhc3QtaXRlbSBob3VybHktaXRlbScsXG4gICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdoMycsXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBGb3JtYXQuZ2V0SG91ckFNUE0oZGF0YS50aW1lKSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdob3VybHktdGVtcCcsXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOmAke2RhdGEudGVtcH1cXHUwMEIwYCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29uZGl0aW9uIGljb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiBpY29uSW1wb3J0c1tkYXRhLmljb25dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEuY29uZGl0aW9ufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5idWlsZCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBob3VybHlEYXRlQ29udGFpbmVyKGRhdGEpIHtcbiAgICAgICAgLy8gdG8gYmUgYXBwZW5kZWQgaW5zaWRlIG9mIC5jb250ZW50LWJveC5mb3JlY2FzdFxuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdob3VybHktZGF0ZS1jb250YWluZXInLFxuICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke0Zvcm1hdC5nZXRTcG9rZW5EYXRlKGRhdGEuZGF0ZSl9YCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuXG4gICAgICAgICAgICAgICAgLy8gKioqIGJ1aWxkIC5ob3Vycy1jb250YWluZXIgZGlyZWN0bHkgaW4ganMgKioqXG4gICAgICAgICAgICAgICAgLy8gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIC8vICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIC8vICAgICAnY2xhc3MnOiAnaG91cnMtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gLmZvcmVjYXN0LWl0ZW0uaG91cmx5LWl0ZW0gdG8gYmUgYXBwZW5kZWQgaW5zaWRlIG9mIC5ob3Vycy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAvLyB9KS5idWlsZCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==