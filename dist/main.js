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
    /* background-image: url('../../src/media/night-background.jpg'); */
    background-size: cover;
    transition: background-image 1000ms ease-in-out;
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
    width: 125px;
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
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; */
    display: grid;
    grid-template-rows: 64px 50px;
    justify-items: center;
    align-items: center;
}
.content-box.forecast .condition-container p.condition {
    height: 45px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

}
`, "",{"version":3,"sources":["webpack://./src/style/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('./src/reset.css');\n\n/* main components */\n#content {\n    width: 100vw;\n    height: 100vh;\n    padding: 10px;\n    position: relative;\n    display: grid;\n    gap: 25px;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n        \"sidebar  current\"\n        \"sidebar .\"\n        \"forecast forecast\";\n    filter: saturate(0.8);\n    background-image: url('../../src/media/background-image3.jpg');\n    /* background-image: url('../../src/media/night-background.jpg'); */\n    background-size: cover;\n    transition: background-image 1000ms ease-in-out;\n}\n.sidebar {\n    grid-area: sidebar;\n}\n.content-box.current {\n    grid-area: current;\n}\n.content-box.forecast {\n    grid-area: forecast;\n}\nimg.loading-gif {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n.content-box {\n    background-color: #2e2e2e40;\n    backdrop-filter: blur(5px);\n    border-radius: 15px;\n    padding: 15px;\n    border: 3px solid #22487E;\n    color: #ffffff;\n}\n\n#main-content {\n    height: 100vh;\n    flex-grow: 1;\n    padding: 10px;\n    color: #ffffff;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nimg.icon {\n    filter: brightness(0) invert(1);\n}\n\n/* sidebar */\n.sidebar {\n    height: 100%;\n    width: 300px;\n}\n.sidebar img {\n    height: 35px;\n    width: 35px;\n}\n.sidebar .content-box {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 5px;\n    overflow: auto;\n}\n.sidebar form.search  {\n    margin-bottom: 20px;\n    width: 100%;\n}\n.sidebar form.search input {\n    height: 40px;\n    width: 100%;\n    border-radius: 20px;\n    padding-left: 20px;\n    padding-right: 50px;\n    border: 2px solid #ffffff;\n    margin-bottom: 10px;\n    font-size: 18px;\n    background-color: transparent;\n    color: #ffffff;\n}\n.sidebar form.search input::placeholder {\n    color: #d3d3d3;\n}\n.sidebar form.search button[type=\"submit\"] {\n    position: absolute;\n    top: 19px;\n    right: 25px;\n}\n.sidebar form.search img.search-icon {\n    height: 30px;\n    width: 30px;\n}\n.sidebar form.search img.search-icon:hover {\n    filter: brightness(.8);\n}\n.sidebar form.search img.search-icon:active {\n    filter: brightness(.6);\n}\n.sidebar form.search p.error-message {\n    visibility: hidden;\n    text-align: center;\n}\n.sidebar form.search p.error-message.visible {\n    visibility: visible;\n}\n.sidebar button.expand-menu {\n    width: 100%;\n    height: 0;\n    overflow: hidden;\n}\n.sidebar .settings-content {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 10px;\n    margin-bottom: 20px;\n    width: 100%;\n}\n.sidebar .settings-content .toggle-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 5px;\n    width: 100%;\n}\n.sidebar .toggle-container button {\n    border: 2px solid #ffffff;\n    padding: 5px 0 5px 0;\n    border-radius: 20px;\n    transition: all 100ms ease-in-out;\n}\n.sidebar .toggle-container button:hover {\n    border-color:#000000;\n    background-color: #000000;\n}\n.sidebar .toggle-container button:active {\n    border-color:#000000;\n    background-color: #00000080;\n}\n.sidebar .toggle-container button.chosen-setting {\n    color: #000000;\n    background-color: #69bbff80;\n    border-color: #000000;\n}\n.sidebar ul.saved-cities {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 20px;\n    width: 100%;\n}\n.sidebar ul.saved-cities li {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n}\n.sidebar ul.saved-cities li img.delete {\n    height: 19px;\n    width: 19px;\n}\n.sidebar ul.saved-cities li button.delete {\n    filter: brightness(0) invert(1);\n    transition: filter 100ms ease-in-out;\n}\n.sidebar ul.saved-cities li button.delete:hover {\n    filter: brightness(0.9);\n}\n.sidebar ul.saved-cities li button.delete:active {\n    filter: brightness(1);\n}\n.sidebar ul.saved-cities button.left-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-grow: 1;\n    text-align: left;\n    transition: color 100ms ease-in-out;\n}\n.sidebar ul.saved-cities button.left-container:hover {\n    color: #e2e2e2;\n}\n.sidebar ul.saved-cities button.left-container:active {\n    color: #cccccc;\n}\n.sidebar ul.saved-cities h3 {\n    font-size: 15px;\n}\n.sidebar ul.saved-cities p.region {\n    font-size: 12px;\n}\n\n/* current weather */\n.content-box.current {\n    padding-left: 25px;\n    padding-right: 25px;\n    max-width: 750px;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-auto-rows: auto;\n    grid-template-areas:\n        \"city-region time-date\"\n        \"city-region .\"\n        \"temp condition\"\n        \"properties properties\"\n          \n}\n.content-box.current .city-region-container {\n    grid-area: city-region;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n    .content-box.current .city {\n        font-size: 30px;\n    }\n    .content-box.current .region {\n        font-size: 16px;\n    }\n.content-box.current .time-date-container {\n    grid-area: time-date;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n    .content-box.current .time {\n        font-size: 25px;\n    }\n        .content-box.current .time span {\n            font-size: 18px;\n            margin-right: 6px;\n        }\n    .content-box.current .date {\n        font-size: 12px;\n    }\n.content-box.current .temp {\n    grid-area: temp;\n    font-size: 50px;\n    font-weight: 900;\n    align-self: end;\n}\n.content-box.current .condition-container {\n    grid-area: condition;\n    justify-self: end;\n    align-self: start;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    height: auto;\n}\n    .content-box.current .condition-icon {\n        height: 65px;\n        width: 65px;\n    }\n.content-box.current .weather-properties {\n    grid-area: properties;\n}\n\n/* weather-properties container*/\n.weather-properties {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n    align-items: center;\n    gap: 15px;\n    width: 100%;\n    border-top: 2px solid #ffffff;\n    margin-top: 20px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.weather-properties .weather-property {\n    display: flex;\n    gap: 5px;\n}\n.weather-properties .weather-property img {\n    height: 20px;\n    width: 20px;\n    align-self: center;\n}\n.weather-properties .weather-property .right-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n/* forecast */\n.content-box.forecast {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 25px;\n    overflow: auto;\n}\n.content-box.forecast .hourly-date-container {\n    width: auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    gap: 10px;\n}\n.content-box.forecast .hourly-date-container .hours-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 25px;\n}\n.content-box.forecast .hourly-date-container p.date {\n    font-weight: 900;\n    font-size: 15px;\n    width: 100%;\n    border-bottom: 2px solid #ffffff;\n}\n.content-box.forecast .forecast-item {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    width: 125px;\n    flex-shrink: 0;\n}\n.content-box.forecast .forecast-item > * {\n    width: 100%;\n    text-align: center;\n}\n.content-box.forecast .forecast-item h3 {\n    margin-bottom: 5px;\n}\n.content-box.forecast .high-low-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 3px;\n}\n    .content-box.forecast span.divider {\n        font-size: 15px;\n        font-weight: 900;\n    }\n    .content-box.forecast span.high-temp {\n        font-weight: 900;\n        font-size: 15px;\n    }\n    .content-box.forecast span.low-temp {\n        font-size: 13px;\n    }\n.content-box.forecast .condition-container {\n    /* display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between; */\n    display: grid;\n    grid-template-rows: 64px 50px;\n    justify-items: center;\n    align-items: center;\n}\n.content-box.forecast .condition-container p.condition {\n    height: 45px;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n@import url('./src/responsive.css');\n"],"sourceRoot":""}]);
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
    #content .content-box.forecast .forecast-item p.condition {
        text-align: right;
        max-width: 80px;
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
    #content .content-box.forecast .hourly-date-container {
        display: flex;
        flex-direction: column;
    }
    #content .content-box.forecast .hourly-date-container .hours-container {
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
        grid-template-columns: 1fr 2fr 4fr;
    }

    #content > * {
        font-size: 0.8em;
    }
}`, "",{"version":3,"sources":["webpack://./src/style/src/responsive.css"],"names":[],"mappings":"AAAA;IACI;QACI,aAAa;QACb,YAAY;QACZ,iBAAiB;QACjB,WAAW;QACX,SAAS;QACT,0BAA0B;QAC1B,iCAAiC;QACjC;;;sBAGc;IAClB;IACA;QACI,kBAAkB;QAClB,WAAW;QACX,aAAa;QACb,gBAAgB;IACpB;QACI;YACI,gBAAgB;QACpB;QACA;YACI,kBAAkB;QACtB;QACA;YACI,YAAY;YACZ,iBAAiB;YACjB,mBAAmB;YACnB,WAAW;YACX,6BAA6B;QACjC;QACA;YACI,2BAA2B;QAC/B;QACA;YACI,2BAA2B;QAC/B;IACJ;QACI,kBAAkB;QAClB,WAAW;IACf;IACA;QACI,mBAAmB;QACnB,aAAa;QACb,sBAAsB;QACtB,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;QACI,WAAW;QACX,aAAa;QACb,mBAAmB;QACnB,8BAA8B;IAClC;IACA;QACI,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,aAAa;QACb,mBAAmB;IACvB;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,YAAY;IAChB;IACA;QACI,aAAa;QACb,sBAAsB;IAC1B;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;IACf;IACA;QACI,aAAa;QACb,kCAAkC;IACtC;AACJ;;AAEA;IACI;QACI,kBAAkB;QAClB,mBAAmB;QACnB,WAAW;QACX,YAAY;QACZ,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;IACA;QACI,WAAW;QACX,mBAAmB;QACnB,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,QAAQ;IACZ;;IAEA;QACI,aAAa;QACb,kCAAkC;IACtC;;IAEA;QACI,gBAAgB;IACpB;AACJ","sourcesContent":["@media screen and (max-width: 750px) {\n    body #content {\n        display: grid;\n        height: auto;\n        min-height: 100vh;\n        width: auto;\n        gap: 25px;\n        grid-template-columns: 1fr;\n        grid-template-rows: auto 1fr auto;\n        grid-template-areas:\n            \"sidebar\"\n            \"current\"\n            \"forecast\";\n    }\n    #content .sidebar {\n        grid-area: sidebar;\n        width: 100%;\n        height: 142px;\n        overflow: hidden;\n    }\n        #content .sidebar .content-box {\n            overflow: hidden;\n        }\n        #content .sidebar .content-box form {\n            margin-bottom: 5px;\n        }\n        #content .sidebar .content-box button.expand-menu {\n            height: auto;\n            overflow: visible;\n            border-radius: 20px;\n            width: 100%;\n            background-color: transparent;\n        }\n        #content .sidebar .content-box button.expand-menu:hover {\n            background-color: #00000050;\n        }\n        #content .sidebar .content-box button.expand-menu:active {\n            background-color: #00000030;\n        }\n    #content .content-box.current {\n        grid-area: current;\n        width: 100%;\n    }\n    #content .content-box.forecast {\n        grid-area: forecast;\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n    }\n    #content .content-box.forecast > * {\n        width: 100%;\n    }\n    #content .content-box.forecast .forecast-item {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    #content .content-box.forecast .forecast-item p.condition {\n        text-align: right;\n        max-width: 80px;\n    }\n\n    #content .content-box.forecast .forecast-item .condition-container {\n        display: flex;\n        flex-direction: row;\n    }\n\n    #content .content-box.forecast.hourly {\n        display: flex;\n        flex-direction: column;\n        height: auto;\n    }\n    #content .content-box.forecast .hourly-date-container {\n        display: flex;\n        flex-direction: column;\n    }\n    #content .content-box.forecast .hourly-date-container .hours-container {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n    }\n    #content .content-box.forecast.hourly .hourly-date-container .hours-container .forecast-item {\n        display: grid;\n        grid-template-columns: 1fr 2fr 2fr;\n    }\n}\n\n@media screen and (max-width: 500px) {\n    body #content .content-box.current {\n        padding-left: 25px;\n        padding-right: 25px;\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n    body #content .content-box.current > * {\n        width: 100%;\n        align-items: center;\n        text-align: center;\n    }\n    body #content .content-box.current .city-region-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        gap: 5px;\n    }\n\n    #content .content-box.forecast.hourly .hourly-date-container .hours-container .forecast-item {\n        display: grid;\n        grid-template-columns: 1fr 2fr 4fr;\n    }\n\n    #content > * {\n        font-size: 0.8em;\n    }\n}"],"sourceRoot":""}]);
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
    Load.insertLoadingGIF();

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
            console.log(data);
            Load.removeLoadingGIF();
            UI.toggleBackgroundImage(data);
            Input.handleData(data);
        }
    } catch(err) {
        console.log(err.message);
        Load.removeLoadingGIF();
        // ErrorMessage.updateGUI();
    }
}

const Settings = {
    measurement: 'US', // 'US' or 'metric'
    forecast: 'hourly', // 'hourly' or 'daily'
}

class Populate {
    static dailyMetric() {
        Load.removeWeather();
        Load.currentWeather(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.metric);
        Load.forecastDaily(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.metric)
    }
    
    static dailyUS() {
        Load.removeWeather();
        Load.currentWeather(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.US);
        Load.forecastDaily(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.US);
    }

    static hourlyMetric() {
        Load.removeWeather();
        Load.currentWeather(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.metric);
        Load.forecastHourly(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData.weather.metric);
    }

    static hourlyUS() {
        Load.removeWeather();
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
    static removeWeather() {
        const current = document.querySelector('.content-box.current');
        const forecast = document.querySelector('.content-box.forecast');

        if (current) {
            current.remove();
        }
        if (forecast) {
            forecast.remove();
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
        // get the hours left in current day's hourly forecast
        const currentDayHours = data.hourly[0].slice(currentHour);
        // get the remaining hours needed to equal 24 total hours from the next day's hourly forecast
        const nextDayHours = data.hourly[1].slice(0, data.hourly[1].length - currentDayHours.length);
        
        // forecast container contains 2 main containers for each day
        const forecastContainer = _view_js__WEBPACK_IMPORTED_MODULE_3__.Build.forecastContainer();
        
        // insert data for each hour of day one into day one's container and add day one's container to the forecast container
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

        // add the hourly class to the forecast container to separate styling for hourly vs daily forecast
        forecastContainer.classList.add('hourly');

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

    static toggleBackgroundImage(data) {
        const content = document.querySelector('#content');
        if (data.current.condition.icon.includes('/night/')) {
            content.style.backgroundImage = "url('../src/media/night-background.jpg')"
        } else {
            content.style.backgroundImage = "url('../src/media/background-image3.jpg')";;
        }
    }

    static expandMobileSidebar(e) {
        const sidebar = document.querySelector('#content .sidebar');
        sidebar.style.height = 'auto';

        const expandButton = document.querySelector('button.expand-menu');
        expandButton.classList.add('expanded');
        expandButton.style.height = '0';

        const minimizeButton = document.createElement('button');
        minimizeButton.classList.add('expand-menu');
        const icon = document.createElement('img');
        icon.src = '../src/media/down-carrot.svg';
        minimizeButton.appendChild(icon);

        const sidebarContent = document.querySelector('#content .sidebar .content-box');
        sidebarContent.appendChild(icon);
    }

    static minimizeMobileSidebar(e) {
        const sidebar = document.querySelector('#content .sidebar');
        sidebar.style.height = '142px';
        const expandButton = document.querySelector('button.expand-menu');
        expandButton.classList.remove('expanded');
        expandButton.style.height = 'auto';
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
        // gets current day and next day hourly data from fetched dsta
        // needs both days for UI which displays a 24 hours in hour increments
        
        const twoDays = { US: {hourly:[]}, metric: {hourly:[]}};
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
    // iconImports[Format.getIconPath(string)];
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
                            'event-listeners':{'click':_controller_js__WEBPACK_IMPORTED_MODULE_0__.UI.expandMobileSidebar},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDZ0I7QUFDSztBQUNkO0FBQ25HLDRDQUE0QywrSUFBd0Q7QUFDcEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwwQkFBMEIsMEZBQWlDO0FBQzNELDBCQUEwQiwrRkFBaUM7QUFDM0QseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Qsc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLDZGQUE2RixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFB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QUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsVTJCO0FBQ2tCO0FBQ047QUFDRTs7QUFFbEMsd0JBQXdCLGtEQUFXOztBQUUxQyxnREFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JITztBQUNQO0FBQ0Esd0JBQXdCLEtBQUs7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLEtBQUssU0FBUyxXQUFXO0FBQ3pELHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsS0FBSyxVQUFVLFdBQVc7QUFDcEQsd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEOztBQUVBO0FBQ0EsMEJBQTBCLG9CQUFvQjtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsNEJBQTRCLElBQUksMkJBQTJCLEVBQUUsZ0NBQWdDLElBQUksMkJBQTJCO0FBQzlJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BQOEM7QUFDSDtBQUNIO0FBQ0M7QUFDTDtBQUNPO0FBQ047O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFNBQVMsaURBQUssZ0JBQWdC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QjtBQUN2RSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdGtCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veS8uL3NyYy9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8veS8uL3NyYy9zdHlsZS9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovL3kvLi9zcmMvc3R5bGUvc3JjL3Jlc3BvbnNpdmUuY3NzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL3N0eWxlL2luZGV4LmNzcz85Y2YwIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9BUElrZXkuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9tZWRpYS9hcGlJY29ucy8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL3kvLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3kvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3kvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9yZXNldC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcmMvcmVzcG9uc2l2ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vc3JjL21lZGlhL2JhY2tncm91bmQtaW1hZ2UzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogbWFpbiBjb21wb25lbnRzICovXG4jY29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDI1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJzaWRlYmFyICBjdXJyZW50XCJcbiAgICAgICAgXCJzaWRlYmFyIC5cIlxuICAgICAgICBcImZvcmVjYXN0IGZvcmVjYXN0XCI7XG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgwLjgpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL3NyYy9tZWRpYS9uaWdodC1iYWNrZ3JvdW5kLmpwZycpOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxMDAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uc2lkZWJhciB7XG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xufVxuLmNvbnRlbnQtYm94LmN1cnJlbnQge1xuICAgIGdyaWQtYXJlYTogY3VycmVudDtcbn1cbi5jb250ZW50LWJveC5mb3JlY2FzdCB7XG4gICAgZ3JpZC1hcmVhOiBmb3JlY2FzdDtcbn1cbmltZy5sb2FkaW5nLWdpZiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4uY29udGVudC1ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJlMmU0MDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzIyNDg3RTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI21haW4tY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5pbWcuaWNvbiB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcbn1cblxuLyogc2lkZWJhciAqL1xuLnNpZGViYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMzAwcHg7XG59XG4uc2lkZWJhciBpbWcge1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbn1cbi5zaWRlYmFyIC5jb250ZW50LWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoICB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGlucHV0IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuLnNpZGViYXIgZm9ybS5zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2QzZDNkMztcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxOXB4O1xuICAgIHJpZ2h0OiAyNXB4O1xufVxuLnNpZGViYXIgZm9ybS5zZWFyY2ggaW1nLnNlYXJjaC1pY29uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG59XG4uc2lkZWJhciBmb3JtLnNlYXJjaCBpbWcuc2VhcmNoLWljb246aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguOCk7XG59XG4uc2lkZWJhciBmb3JtLnNlYXJjaCBpbWcuc2VhcmNoLWljb246YWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjYpO1xufVxuLnNpZGViYXIgZm9ybS5zZWFyY2ggcC5lcnJvci1tZXNzYWdlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpZGViYXIgZm9ybS5zZWFyY2ggcC5lcnJvci1tZXNzYWdlLnZpc2libGUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uc2lkZWJhciBidXR0b24uZXhwYW5kLW1lbnUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNpZGViYXIgLnNldHRpbmdzLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc2lkZWJhciAuc2V0dGluZ3MtY29udGVudCAudG9nZ2xlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc2lkZWJhciAudG9nZ2xlLWNvbnRhaW5lciBidXR0b24ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uc2lkZWJhciAudG9nZ2xlLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjojMDAwMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG4uc2lkZWJhciAudG9nZ2xlLWNvbnRhaW5lciBidXR0b246YWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6IzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7XG59XG4uc2lkZWJhciAudG9nZ2xlLWNvbnRhaW5lciBidXR0b24uY2hvc2VuLXNldHRpbmcge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OWJiZmY4MDtcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDA7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDEwcHg7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgbGkgaW1nLmRlbGV0ZSB7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIHdpZHRoOiAxOXB4O1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGU6aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGU6YWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgYnV0dG9uLmxlZnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGJ1dHRvbi5sZWZ0LWNvbnRhaW5lcjpob3ZlciB7XG4gICAgY29sb3I6ICNlMmUyZTI7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgYnV0dG9uLmxlZnQtY29udGFpbmVyOmFjdGl2ZSB7XG4gICAgY29sb3I6ICNjY2NjY2M7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgaDMge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBwLnJlZ2lvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vKiBjdXJyZW50IHdlYXRoZXIgKi9cbi5jb250ZW50LWJveC5jdXJyZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJjaXR5LXJlZ2lvbiB0aW1lLWRhdGVcIlxuICAgICAgICBcImNpdHktcmVnaW9uIC5cIlxuICAgICAgICBcInRlbXAgY29uZGl0aW9uXCJcbiAgICAgICAgXCJwcm9wZXJ0aWVzIHByb3BlcnRpZXNcIlxuICAgICAgICAgIFxufVxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNpdHktcmVnaW9uLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1hcmVhOiBjaXR5LXJlZ2lvbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5jaXR5IHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICAuY29udGVudC1ib3guY3VycmVudCAucmVnaW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbi5jb250ZW50LWJveC5jdXJyZW50IC50aW1lLWRhdGUtY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IHRpbWUtZGF0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbiAgICAuY29udGVudC1ib3guY3VycmVudCAudGltZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG4gICAgICAgIC5jb250ZW50LWJveC5jdXJyZW50IC50aW1lIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIH1cbiAgICAuY29udGVudC1ib3guY3VycmVudCAuZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4uY29udGVudC1ib3guY3VycmVudCAudGVtcCB7XG4gICAgZ3JpZC1hcmVhOiB0ZW1wO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbn1cbi5jb250ZW50LWJveC5jdXJyZW50IC5jb25kaXRpb24tY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IGNvbmRpdGlvbjtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5jb25kaXRpb24taWNvbiB7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgfVxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLndlYXRoZXItcHJvcGVydGllcyB7XG4gICAgZ3JpZC1hcmVhOiBwcm9wZXJ0aWVzO1xufVxuXG4vKiB3ZWF0aGVyLXByb3BlcnRpZXMgY29udGFpbmVyKi9cbi53ZWF0aGVyLXByb3BlcnRpZXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ud2VhdGhlci1wcm9wZXJ0aWVzIC53ZWF0aGVyLXByb3BlcnR5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xufVxuLndlYXRoZXItcHJvcGVydGllcyAud2VhdGhlci1wcm9wZXJ0eSBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ud2VhdGhlci1wcm9wZXJ0aWVzIC53ZWF0aGVyLXByb3BlcnR5IC5yaWdodC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4vKiBmb3JlY2FzdCAqL1xuLmNvbnRlbnQtYm94LmZvcmVjYXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5ob3VybHktZGF0ZS1jb250YWluZXIge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTBweDtcbn1cbi5jb250ZW50LWJveC5mb3JlY2FzdCAuaG91cmx5LWRhdGUtY29udGFpbmVyIC5ob3Vycy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG59XG4uY29udGVudC1ib3guZm9yZWNhc3QgLmhvdXJseS1kYXRlLWNvbnRhaW5lciBwLmRhdGUge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xufVxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEyNXB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtIGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY29udGVudC1ib3guZm9yZWNhc3QgLmhpZ2gtbG93LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAzcHg7XG59XG4gICAgLmNvbnRlbnQtYm94LmZvcmVjYXN0IHNwYW4uZGl2aWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICB9XG4gICAgLmNvbnRlbnQtYm94LmZvcmVjYXN0IHNwYW4uaGlnaC10ZW1wIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICAuY29udGVudC1ib3guZm9yZWNhc3Qgc3Bhbi5sb3ctdGVtcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4uY29udGVudC1ib3guZm9yZWNhc3QgLmNvbmRpdGlvbi1jb250YWluZXIge1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjRweCA1MHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5jb25kaXRpb24tY29udGFpbmVyIHAuY29uZGl0aW9uIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakM7OzsyQkFHdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHlEQUE4RDtJQUM5RCxtRUFBbUU7SUFDbkUsc0JBQXNCO0lBQ3RCLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUEsWUFBWTtBQUNaO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1IsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0Isb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQjs7Ozs7O0FBTUo7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7SUFDSTtRQUNJLGVBQWU7SUFDbkI7UUFDSTtZQUNJLGVBQWU7WUFDZixpQkFBaUI7UUFDckI7SUFDSjtRQUNJLGVBQWU7SUFDbkI7QUFDSjtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCO0lBQ0k7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmO0FBQ0o7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUEsYUFBYTtBQUNiO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7SUFDSTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7SUFDSTs7O3FDQUdpQztJQUNqQyxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0FBRTNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCcuL3NyYy9yZXNldC5jc3MnKTtcXG5cXG4vKiBtYWluIGNvbXBvbmVudHMgKi9cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJzaWRlYmFyICBjdXJyZW50XFxcIlxcbiAgICAgICAgXFxcInNpZGViYXIgLlxcXCJcXG4gICAgICAgIFxcXCJmb3JlY2FzdCBmb3JlY2FzdFxcXCI7XFxuICAgIGZpbHRlcjogc2F0dXJhdGUoMC44KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9zcmMvbWVkaWEvYmFja2dyb3VuZC1pbWFnZTMuanBnJyk7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vc3JjL21lZGlhL25pZ2h0LWJhY2tncm91bmQuanBnJyk7ICovXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMTAwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG59XFxuLmNvbnRlbnQtYm94LmN1cnJlbnQge1xcbiAgICBncmlkLWFyZWE6IGN1cnJlbnQ7XFxufVxcbi5jb250ZW50LWJveC5mb3JlY2FzdCB7XFxuICAgIGdyaWQtYXJlYTogZm9yZWNhc3Q7XFxufVxcbmltZy5sb2FkaW5nLWdpZiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG5cXG4uY29udGVudC1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTJlNDA7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMjI0ODdFO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaW1nLmljb24ge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xcbn1cXG5cXG4vKiBzaWRlYmFyICovXFxuLnNpZGViYXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuLnNpZGViYXIgaW1nIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG59XFxuLnNpZGViYXIgLmNvbnRlbnQtYm94IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoICB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2lkZWJhciBmb3JtLnNlYXJjaCBpbnB1dCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjZDNkM2QzO1xcbn1cXG4uc2lkZWJhciBmb3JtLnNlYXJjaCBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTlweDtcXG4gICAgcmlnaHQ6IDI1cHg7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguOCk7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjYpO1xcbn1cXG4uc2lkZWJhciBmb3JtLnNlYXJjaCBwLmVycm9yLW1lc3NhZ2Uge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNpZGViYXIgZm9ybS5zZWFyY2ggcC5lcnJvci1tZXNzYWdlLnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4uc2lkZWJhciBidXR0b24uZXhwYW5kLW1lbnUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc2lkZWJhciAuc2V0dGluZ3MtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5zaWRlYmFyIC5zZXR0aW5ncy1jb250ZW50IC50b2dnbGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5zaWRlYmFyIC50b2dnbGUtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaWRlYmFyIC50b2dnbGUtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjojMDAwMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG4uc2lkZWJhciAudG9nZ2xlLWNvbnRhaW5lciBidXR0b246YWN0aXZlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiMwMDAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MDtcXG59XFxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uLmNob3Nlbi1zZXR0aW5nIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OWJiZmY4MDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgbGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBsaSBpbWcuZGVsZXRlIHtcXG4gICAgaGVpZ2h0OiAxOXB4O1xcbiAgICB3aWR0aDogMTlweDtcXG59XFxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBsaSBidXR0b24uZGVsZXRlOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBsaSBidXR0b24uZGVsZXRlOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcXG59XFxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGJ1dHRvbi5sZWZ0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBidXR0b24ubGVmdC1jb250YWluZXI6aG92ZXIge1xcbiAgICBjb2xvcjogI2UyZTJlMjtcXG59XFxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGJ1dHRvbi5sZWZ0LWNvbnRhaW5lcjphY3RpdmUge1xcbiAgICBjb2xvcjogI2NjY2NjYztcXG59XFxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGgzIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgcC5yZWdpb24ge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi8qIGN1cnJlbnQgd2VhdGhlciAqL1xcbi5jb250ZW50LWJveC5jdXJyZW50IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImNpdHktcmVnaW9uIHRpbWUtZGF0ZVxcXCJcXG4gICAgICAgIFxcXCJjaXR5LXJlZ2lvbiAuXFxcIlxcbiAgICAgICAgXFxcInRlbXAgY29uZGl0aW9uXFxcIlxcbiAgICAgICAgXFxcInByb3BlcnRpZXMgcHJvcGVydGllc1xcXCJcXG4gICAgICAgICAgXFxufVxcbi5jb250ZW50LWJveC5jdXJyZW50IC5jaXR5LXJlZ2lvbi1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IGNpdHktcmVnaW9uO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4gICAgLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNpdHkge1xcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5yZWdpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLnRpbWUtZGF0ZS1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IHRpbWUtZGF0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbiAgICAuY29udGVudC1ib3guY3VycmVudCAudGltZSB7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIH1cXG4gICAgICAgIC5jb250ZW50LWJveC5jdXJyZW50IC50aW1lIHNwYW4ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gICAgICAgIH1cXG4gICAgLmNvbnRlbnQtYm94LmN1cnJlbnQgLmRhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLnRlbXAge1xcbiAgICBncmlkLWFyZWE6IHRlbXA7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG4uY29udGVudC1ib3guY3VycmVudCAuY29uZGl0aW9uLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogY29uZGl0aW9uO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4gICAgLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNvbmRpdGlvbi1pY29uIHtcXG4gICAgICAgIGhlaWdodDogNjVweDtcXG4gICAgICAgIHdpZHRoOiA2NXB4O1xcbiAgICB9XFxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLndlYXRoZXItcHJvcGVydGllcyB7XFxuICAgIGdyaWQtYXJlYTogcHJvcGVydGllcztcXG59XFxuXFxuLyogd2VhdGhlci1wcm9wZXJ0aWVzIGNvbnRhaW5lciovXFxuLndlYXRoZXItcHJvcGVydGllcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmZmZmZmY7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuLndlYXRoZXItcHJvcGVydGllcyAud2VhdGhlci1wcm9wZXJ0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG4ud2VhdGhlci1wcm9wZXJ0aWVzIC53ZWF0aGVyLXByb3BlcnR5IGltZyB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLndlYXRoZXItcHJvcGVydGllcyAud2VhdGhlci1wcm9wZXJ0eSAucmlnaHQtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi8qIGZvcmVjYXN0ICovXFxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uY29udGVudC1ib3guZm9yZWNhc3QgLmhvdXJseS1kYXRlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5ob3VybHktZGF0ZS1jb250YWluZXIgLmhvdXJzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG4uY29udGVudC1ib3guZm9yZWNhc3QgLmhvdXJseS1kYXRlLWNvbnRhaW5lciBwLmRhdGUge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjtcXG59XFxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG4uY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtIGgzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uY29udGVudC1ib3guZm9yZWNhc3QgLmhpZ2gtbG93LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDNweDtcXG59XFxuICAgIC5jb250ZW50LWJveC5mb3JlY2FzdCBzcGFuLmRpdmlkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgfVxcbiAgICAuY29udGVudC1ib3guZm9yZWNhc3Qgc3Bhbi5oaWdoLXRlbXAge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcbiAgICAuY29udGVudC1ib3guZm9yZWNhc3Qgc3Bhbi5sb3ctdGVtcCB7XFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIH1cXG4uY29udGVudC1ib3guZm9yZWNhc3QgLmNvbmRpdGlvbi1jb250YWluZXIge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjRweCA1MHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb250ZW50LWJveC5mb3JlY2FzdCAuY29uZGl0aW9uLWNvbnRhaW5lciBwLmNvbmRpdGlvbiB7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuQGltcG9ydCB1cmwoJy4vc3JjL3Jlc3BvbnNpdmUuY3NzJyk7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZmYW1pbHk9Um9ib3RvJmZhbWlseT1Sb2JvdG8rTW9ubyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLW1haW4tZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xufVxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbmxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG50ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogMTJweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDU4OTQ7IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjM0NWY7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3JjL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmZhbWlseT1Sb2JvdG8mZmFtaWx5PVJvYm90bytNb25vJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNTg5NDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjM0NWY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICBib2R5ICNjb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGdhcDogMjVweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwic2lkZWJhclwiXG4gICAgICAgICAgICBcImN1cnJlbnRcIlxuICAgICAgICAgICAgXCJmb3JlY2FzdFwiO1xuICAgIH1cbiAgICAjY29udGVudCAuc2lkZWJhciB7XG4gICAgICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTQycHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3gge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggZm9ybSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IGJ1dHRvbi5leHBhbmQtbWVudSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgICNjb250ZW50IC5zaWRlYmFyIC5jb250ZW50LWJveCBidXR0b24uZXhwYW5kLW1lbnU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDUwO1xuICAgICAgICB9XG4gICAgICAgICNjb250ZW50IC5zaWRlYmFyIC5jb250ZW50LWJveCBidXR0b24uZXhwYW5kLW1lbnU6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzMDtcbiAgICAgICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5jdXJyZW50IHtcbiAgICAgICAgZ3JpZC1hcmVhOiBjdXJyZW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IHtcbiAgICAgICAgZ3JpZC1hcmVhOiBmb3JlY2FzdDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgPiAqIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSBwLmNvbmRpdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgfVxuXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtIC5jb25kaXRpb24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG5cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmhvdXJseS1kYXRlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuaG91cmx5LWRhdGUtY29udGFpbmVyIC5ob3Vycy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuaG91cmx5LWRhdGUtY29udGFpbmVyIC5ob3Vycy1jb250YWluZXIgLmZvcmVjYXN0LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICBib2R5ICNjb250ZW50IC5jb250ZW50LWJveC5jdXJyZW50IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgfVxuICAgIGJvZHkgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmN1cnJlbnQgPiAqIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgYm9keSAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCAuY2l0eS1yZWdpb24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogNXB4O1xuICAgIH1cblxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmhvdXJseS1kYXRlLWNvbnRhaW5lciAuaG91cnMtY29udGFpbmVyIC5mb3JlY2FzdC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDRmcjtcbiAgICB9XG5cbiAgICAjY29udGVudCA+ICoge1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zcmMvcmVzcG9uc2l2ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxTQUFTO1FBQ1QsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQzs7O3NCQUdjO0lBQ2xCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7UUFDSTtZQUNJLGdCQUFnQjtRQUNwQjtRQUNBO1lBQ0ksa0JBQWtCO1FBQ3RCO1FBQ0E7WUFDSSxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsNkJBQTZCO1FBQ2pDO1FBQ0E7WUFDSSwyQkFBMkI7UUFDL0I7UUFDQTtZQUNJLDJCQUEyQjtRQUMvQjtJQUNKO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsU0FBUztJQUNiO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGtDQUFrQztJQUN0QztBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztJQUNiO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsUUFBUTtJQUNaOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGtDQUFrQztJQUN0Qzs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgIGJvZHkgI2NvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBnYXA6IDI1cHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcInNpZGViYXJcXFwiXFxuICAgICAgICAgICAgXFxcImN1cnJlbnRcXFwiXFxuICAgICAgICAgICAgXFxcImZvcmVjYXN0XFxcIjtcXG4gICAgfVxcbiAgICAjY29udGVudCAuc2lkZWJhciB7XFxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTQycHg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3gge1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggZm9ybSB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IGJ1dHRvbi5leHBhbmQtbWVudSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggYnV0dG9uLmV4cGFuZC1tZW51OmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTA7XFxuICAgICAgICB9XFxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggYnV0dG9uLmV4cGFuZC1tZW51OmFjdGl2ZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDMwO1xcbiAgICAgICAgfVxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCB7XFxuICAgICAgICBncmlkLWFyZWE6IGN1cnJlbnQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3Qge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBmb3JlY2FzdDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCA+ICoge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtIHAuY29uZGl0aW9uIHtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSAuY29uZGl0aW9uLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuaG91cmx5LWRhdGUtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuaG91cmx5LWRhdGUtY29udGFpbmVyIC5ob3Vycy1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3VybHktZGF0ZS1jb250YWluZXIgLmhvdXJzLWNvbnRhaW5lciAuZm9yZWNhc3QtaXRlbSB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDJmcjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICBib2R5ICNjb250ZW50IC5jb250ZW50LWJveC5jdXJyZW50IHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcbiAgICBib2R5ICNjb250ZW50IC5jb250ZW50LWJveC5jdXJyZW50ID4gKiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgYm9keSAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCAuY2l0eS1yZWdpb24tY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgfVxcblxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3VybHktZGF0ZS1jb250YWluZXIgLmhvdXJzLWNvbnRhaW5lciAuZm9yZWNhc3QtaXRlbSB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDRmcjtcXG4gICAgfVxcblxcbiAgICAjY29udGVudCA+ICoge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBBUElrZXkgPSAnNjg3NzVkZmJlNGM2NGI1NGE5MDE1MzIwMjMyNjA2JzsiLCJleHBvcnQgY29uc3QgaWNvbkltcG9ydHMgPSB7fTtcbmNvbnN0IGRheUljb25zID0gW1wiZGF5LzExMy5wbmdcIixcImRheS8xNDMucG5nXCIsXCJkYXkvMTg1LnBuZ1wiLFwiZGF5LzI0OC5wbmdcIixcImRheS8yODEucG5nXCIsXCJkYXkvMjk5LnBuZ1wiLFwiZGF5LzMxMS5wbmdcIixcImRheS8zMjMucG5nXCIsXCJkYXkvMzM1LnBuZ1wiLFwiZGF5LzM1Ni5wbmdcIixcImRheS8zNjgucG5nXCIsXCJkYXkvMzg2LnBuZ1wiLFwiZGF5LzExNi5wbmdcIixcImRheS8xNzYucG5nXCIsXCJkYXkvMjAwLnBuZ1wiLFwiZGF5LzI2MC5wbmdcIixcImRheS8yODQucG5nXCIsXCJkYXkvMzAyLnBuZ1wiLFwiZGF5LzMxNC5wbmdcIixcImRheS8zMjYucG5nXCIsXCJkYXkvMzM4LnBuZ1wiLFwiZGF5LzM1OS5wbmdcIixcImRheS8zNzEucG5nXCIsXCJkYXkvMzg5LnBuZ1wiLFwiZGF5LzExOS5wbmdcIixcImRheS8xNzkucG5nXCIsXCJkYXkvMjI3LnBuZ1wiLFwiZGF5LzI2My5wbmdcIixcImRheS8yOTMucG5nXCIsXCJkYXkvMzA1LnBuZ1wiLFwiZGF5LzMxNy5wbmdcIixcImRheS8zMjkucG5nXCIsXCJkYXkvMzUwLnBuZ1wiLFwiZGF5LzM2Mi5wbmdcIixcImRheS8zNzQucG5nXCIsXCJkYXkvMzkyLnBuZ1wiLFwiZGF5LzEyMi5wbmdcIixcImRheS8xODIucG5nXCIsXCJkYXkvMjMwLnBuZ1wiLFwiZGF5LzI2Ni5wbmdcIixcImRheS8yOTYucG5nXCIsXCJkYXkvMzA4LnBuZ1wiLFwiZGF5LzMyMC5wbmdcIixcImRheS8zMzIucG5nXCIsXCJkYXkvMzUzLnBuZ1wiLFwiZGF5LzM2NS5wbmdcIixcImRheS8zNzcucG5nXCIsXCJkYXkvMzk1LnBuZ1wiXVxuY29uc3QgbmlnaHRJY29ucyA9IFtcIm5pZ2h0LzExMy5wbmdcIixcIm5pZ2h0LzE0My5wbmdcIixcIm5pZ2h0LzE4NS5wbmdcIixcIm5pZ2h0LzI0OC5wbmdcIixcIm5pZ2h0LzI4MS5wbmdcIixcIm5pZ2h0LzI5OS5wbmdcIixcIm5pZ2h0LzMxMS5wbmdcIixcIm5pZ2h0LzMyMy5wbmdcIixcIm5pZ2h0LzMzNS5wbmdcIixcIm5pZ2h0LzM1Ni5wbmdcIixcIm5pZ2h0LzM2OC5wbmdcIixcIm5pZ2h0LzM4Ni5wbmdcIixcIm5pZ2h0LzExNi5wbmdcIixcIm5pZ2h0LzE3Ni5wbmdcIixcIm5pZ2h0LzIwMC5wbmdcIixcIm5pZ2h0LzI2MC5wbmdcIixcIm5pZ2h0LzI4NC5wbmdcIixcIm5pZ2h0LzMwMi5wbmdcIixcIm5pZ2h0LzMxNC5wbmdcIixcIm5pZ2h0LzMyNi5wbmdcIixcIm5pZ2h0LzMzOC5wbmdcIixcIm5pZ2h0LzM1OS5wbmdcIixcIm5pZ2h0LzM3MS5wbmdcIixcIm5pZ2h0LzM4OS5wbmdcIixcIm5pZ2h0LzExOS5wbmdcIixcIm5pZ2h0LzE3OS5wbmdcIixcIm5pZ2h0LzIyNy5wbmdcIixcIm5pZ2h0LzI2My5wbmdcIixcIm5pZ2h0LzI5My5wbmdcIixcIm5pZ2h0LzMwNS5wbmdcIixcIm5pZ2h0LzMxNy5wbmdcIixcIm5pZ2h0LzMyOS5wbmdcIixcIm5pZ2h0LzM1MC5wbmdcIixcIm5pZ2h0LzM2Mi5wbmdcIixcIm5pZ2h0LzM3NC5wbmdcIixcIm5pZ2h0LzM5Mi5wbmdcIixcIm5pZ2h0LzEyMi5wbmdcIixcIm5pZ2h0LzE4Mi5wbmdcIixcIm5pZ2h0LzIzMC5wbmdcIixcIm5pZ2h0LzI2Ni5wbmdcIixcIm5pZ2h0LzI5Ni5wbmdcIixcIm5pZ2h0LzMwOC5wbmdcIixcIm5pZ2h0LzMyMC5wbmdcIixcIm5pZ2h0LzMzMi5wbmdcIixcIm5pZ2h0LzM1My5wbmdcIixcIm5pZ2h0LzM2NS5wbmdcIixcIm5pZ2h0LzM3Ny5wbmdcIixcIm5pZ2h0LzM5NS5wbmdcIl07XG4vLyBpbXBvcnQgYWxsIGljb25zXG5bZGF5SWNvbnMsIG5pZ2h0SWNvbnNdLmZsYXQoKS5mb3JFYWNoKGljb24gPT4gaWNvbkltcG9ydHNbaWNvbl0gPSByZXF1aXJlKGAuL21lZGlhL2FwaUljb25zLyR7aWNvbn1gKSk7XG5cbmltcG9ydCB7IEFQSWtleSB9IGZyb20gXCIuL0FQSWtleVwiO1xuaW1wb3J0IHsgV2VhdGhlckRhdGEgfSBmcm9tIFwiLi9tb2RlbC5qc1wiO1xuaW1wb3J0IGxvYWRpbmdHaWYgZnJvbSAnLi9tZWRpYS9sb2FkaW5nLmdpZidcbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnLi92aWV3LmpzJyBcbmltcG9ydCB7IEZvcm1hdCB9IGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IHsgd2VhdGhlckRhdGEgfSBmcm9tICcuL2luZGV4LmpzJztcbi8vIERPTkUgV0lUSCBJTVBPUlRTXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgTG9hZC5pbnNlcnRMb2FkaW5nR0lGKCk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSWtleX0mcT0ke2xvY2F0aW9ufSZkYXlzPTcmYXFpPW5vJmFsZXJ0cz15ZXNgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJyB1bmtub3duIGVycm9yIGhhcyBvY2N1cmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBMb2FkLnJlbW92ZUxvYWRpbmdHSUYoKTtcbiAgICAgICAgICAgIFVJLnRvZ2dsZUJhY2tncm91bmRJbWFnZShkYXRhKTtcbiAgICAgICAgICAgIElucHV0LmhhbmRsZURhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgIExvYWQucmVtb3ZlTG9hZGluZ0dJRigpO1xuICAgICAgICAvLyBFcnJvck1lc3NhZ2UudXBkYXRlR1VJKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgU2V0dGluZ3MgPSB7XG4gICAgbWVhc3VyZW1lbnQ6ICdVUycsIC8vICdVUycgb3IgJ21ldHJpYydcbiAgICBmb3JlY2FzdDogJ2hvdXJseScsIC8vICdob3VybHknIG9yICdkYWlseSdcbn1cblxuZXhwb3J0IGNsYXNzIFBvcHVsYXRlIHtcbiAgICBzdGF0aWMgZGFpbHlNZXRyaWMoKSB7XG4gICAgICAgIExvYWQucmVtb3ZlV2VhdGhlcigpO1xuICAgICAgICBMb2FkLmN1cnJlbnRXZWF0aGVyKHdlYXRoZXJEYXRhLndlYXRoZXIubWV0cmljKTtcbiAgICAgICAgTG9hZC5mb3JlY2FzdERhaWx5KHdlYXRoZXJEYXRhLndlYXRoZXIubWV0cmljKVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZGFpbHlVUygpIHtcbiAgICAgICAgTG9hZC5yZW1vdmVXZWF0aGVyKCk7XG4gICAgICAgIExvYWQuY3VycmVudFdlYXRoZXIod2VhdGhlckRhdGEud2VhdGhlci5VUyk7XG4gICAgICAgIExvYWQuZm9yZWNhc3REYWlseSh3ZWF0aGVyRGF0YS53ZWF0aGVyLlVTKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaG91cmx5TWV0cmljKCkge1xuICAgICAgICBMb2FkLnJlbW92ZVdlYXRoZXIoKTtcbiAgICAgICAgTG9hZC5jdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF0YS53ZWF0aGVyLm1ldHJpYyk7XG4gICAgICAgIExvYWQuZm9yZWNhc3RIb3VybHkod2VhdGhlckRhdGEud2VhdGhlci5tZXRyaWMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBob3VybHlVUygpIHtcbiAgICAgICAgTG9hZC5yZW1vdmVXZWF0aGVyKCk7XG4gICAgICAgIExvYWQuY3VycmVudFdlYXRoZXIod2VhdGhlckRhdGEud2VhdGhlci5VUyk7XG4gICAgICAgIExvYWQuZm9yZWNhc3RIb3VybHkod2VhdGhlckRhdGEud2VhdGhlci5VUyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWNrVVMoZSkge1xuICAgICAgICBTZXR0aW5ncy5tZWFzdXJlbWVudCA9ICdVUyc7XG4gICAgICAgIFVJLnVwZGF0ZU1lYXN1cmVtZW50QnV0dG9ucyhlKTtcblxuICAgICAgICBpZiAod2VhdGhlckRhdGEuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKFNldHRpbmdzLmZvcmVjYXN0ID09PSAnaG91cmx5Jykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmhvdXJseVVTKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFNldHRpbmdzLmZvcmVjYXN0ID09PSAnZGFpbHknKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuZGFpbHlVUygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjbGlja01ldHJpYyhlKSB7XG4gICAgICAgIFNldHRpbmdzLm1lYXN1cmVtZW50ID0gJ21ldHJpYyc7XG4gICAgICAgIFVJLnVwZGF0ZU1lYXN1cmVtZW50QnV0dG9ucyhlKTtcblxuICAgICAgICBpZiAod2VhdGhlckRhdGEuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdob3VybHknKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuaG91cmx5TWV0cmljKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFNldHRpbmdzLmZvcmVjYXN0ID09PSAnZGFpbHknKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuZGFpbHlNZXRyaWMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2xpY2tEYWlseShlKSB7XG4gICAgICAgIFNldHRpbmdzLmZvcmVjYXN0ID0gJ2RhaWx5JztcbiAgICAgICAgVUkudXBkYXRlRm9yZWNhc3RCdXR0b25zKGUpO1xuXG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5tZWFzdXJlbWVudCA9PT0gJ1VTJykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmRhaWx5VVMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MubWVhc3VyZW1lbnQgPT09ICdtZXRyaWMnKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuZGFpbHlNZXRyaWMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2xpY2tIb3VybHkoZSkge1xuICAgICAgICBTZXR0aW5ncy5mb3JlY2FzdCA9ICdob3VybHknO1xuICAgICAgICBVSS51cGRhdGVGb3JlY2FzdEJ1dHRvbnMoZSk7XG5cbiAgICAgICAgaWYgKHdlYXRoZXJEYXRhLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKFNldHRpbmdzLm1lYXN1cmVtZW50ID09PSAnVVMnKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuaG91cmx5VVMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MubWVhc3VyZW1lbnQgPT09ICdtZXRyaWMnKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuaG91cmx5TWV0cmljKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZCB7XG4gICAgc3RhdGljIHJlbW92ZVdlYXRoZXIoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3guY3VycmVudCcpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJveC5mb3JlY2FzdCcpO1xuXG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICBjdXJyZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JlY2FzdCkge1xuICAgICAgICAgICAgZm9yZWNhc3QucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaW5zZXJ0TG9hZGluZ0dJRigpIHtcbiAgICAgICAgY29uc3QgZ2lmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGdpZi5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nLWdpZicpO1xuICAgICAgICBnaWYuc3JjID0gbG9hZGluZ0dpZjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChnaWYpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVMb2FkaW5nR0lGKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcubG9hZGluZy1naWYnKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFVJKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKEJ1aWxkLnNpZGViYXIoKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGN1cnJlbnRXZWF0aGVyKGRhdGEpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChCdWlsZC5jdXJyZW50V2VhdGhlcihkYXRhKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmVjYXN0RGFpbHkoZGF0YSkge1xuICAgICAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IEJ1aWxkLmZvcmVjYXN0Q29udGFpbmVyKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChCdWlsZC5mb3JlY2FzdEl0ZW1EYWlseShkYXRhLmRhaWx5W2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGZvcmVjYXN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9yZWNhc3RIb3VybHkoZGF0YSkge1xuICAgICAgICAvLyBnZXRzIGV4YWN0bHkgMjQgaG91cnMgb2YgZm9yZWNhc3QgZGF0YSBzcGxpdCBpbnRvIGhvdXJzLCBzbyBkYXRhIG5lZWRzIHRvIGJlIGdyYWJiZWQgZnJvbSBtdWx0aXBsZSBkYXlzXG4gICAgICAgIC8vIGdldCBudW1iZXIgdmFsdWUgaW4gMjQgaHIgdGltZSByZXByZXN0aW5nIGN1cnJlbnQgdGltZVxuICAgICAgICBjb25zdCBjdXJyZW50SG91ciA9IE51bWJlcihGb3JtYXQuZ2V0SG91cjI0SFIoZGF0YS5sb2NhdGlvbi5sb2NhbFRpbWUpKTtcbiAgICAgICAgLy8gZ2V0IHRoZSBob3VycyBsZWZ0IGluIGN1cnJlbnQgZGF5J3MgaG91cmx5IGZvcmVjYXN0XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXlIb3VycyA9IGRhdGEuaG91cmx5WzBdLnNsaWNlKGN1cnJlbnRIb3VyKTtcbiAgICAgICAgLy8gZ2V0IHRoZSByZW1haW5pbmcgaG91cnMgbmVlZGVkIHRvIGVxdWFsIDI0IHRvdGFsIGhvdXJzIGZyb20gdGhlIG5leHQgZGF5J3MgaG91cmx5IGZvcmVjYXN0XG4gICAgICAgIGNvbnN0IG5leHREYXlIb3VycyA9IGRhdGEuaG91cmx5WzFdLnNsaWNlKDAsIGRhdGEuaG91cmx5WzFdLmxlbmd0aCAtIGN1cnJlbnREYXlIb3Vycy5sZW5ndGgpO1xuICAgICAgICBcbiAgICAgICAgLy8gZm9yZWNhc3QgY29udGFpbmVyIGNvbnRhaW5zIDIgbWFpbiBjb250YWluZXJzIGZvciBlYWNoIGRheVxuICAgICAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IEJ1aWxkLmZvcmVjYXN0Q29udGFpbmVyKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBpbnNlcnQgZGF0YSBmb3IgZWFjaCBob3VyIG9mIGRheSBvbmUgaW50byBkYXkgb25lJ3MgY29udGFpbmVyIGFuZCBhZGQgZGF5IG9uZSdzIGNvbnRhaW5lciB0byB0aGUgZm9yZWNhc3QgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGRheU9uZUhvdXJseURhdGVDb250YWluZXIgPSBCdWlsZC5ob3VybHlEYXRlQ29udGFpbmVyKGRhdGEuZGFpbHlbMF0pXG4gICAgICAgIGNvbnN0IGRheU9uZUNvbnRlbnQgPSBjcmVhdGVIb3Vyc0NvbnRhaW5lcigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnREYXlIb3Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGF5T25lQ29udGVudC5hcHBlbmRDaGlsZChCdWlsZC5mb3JlY2FzdEl0ZW1Ib3VybHkoY3VycmVudERheUhvdXJzW2ldKSlcbiAgICAgICAgfVxuICAgICAgICBkYXlPbmVIb3VybHlEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheU9uZUNvbnRlbnQpO1xuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlPbmVIb3VybHlEYXRlQ29udGFpbmVyKTtcblxuICAgICAgICAvLyByZXBlYXQgZm9yIGRheSB0d29cbiAgICAgICAgY29uc3QgZGF5VHdvSG91cmx5RGF0ZUNvbnRhaW5lciA9IEJ1aWxkLmhvdXJseURhdGVDb250YWluZXIoZGF0YS5kYWlseVsxXSk7XG4gICAgICAgIGNvbnN0IGRheVR3b0NvbnRlbnQgPSBjcmVhdGVIb3Vyc0NvbnRhaW5lcigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5leHREYXlIb3Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGF5VHdvQ29udGVudC5hcHBlbmRDaGlsZChCdWlsZC5mb3JlY2FzdEl0ZW1Ib3VybHkobmV4dERheUhvdXJzW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgZGF5VHdvSG91cmx5RGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlUd29Db250ZW50KTtcbiAgICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5VHdvSG91cmx5RGF0ZUNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gYWRkIHRoZSBob3VybHkgY2xhc3MgdG8gdGhlIGZvcmVjYXN0IGNvbnRhaW5lciB0byBzZXBhcmF0ZSBzdHlsaW5nIGZvciBob3VybHkgdnMgZGFpbHkgZm9yZWNhc3RcbiAgICAgICAgZm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5Jyk7XG5cbiAgICAgICAgLy8gaW5zZXJ0IGV2ZXJ5dGhpbmcgaW50byB0aGUgZG9jdW1lbnRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChmb3JlY2FzdENvbnRhaW5lcik7XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlSG91cnNDb250YWluZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Vycy1jb250YWluZXInKTtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnB1dCB7XG4gICAgc3RhdGljIHN1Ym1pdExvY2F0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjc2VhcmNoLWxvY2F0aW9uJyk7XG5cbiAgICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGlucHV0LnZhbHVlLnRyaW1FbmQoKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGdldFdlYXRoZXIobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZURhdGEoZGF0YSkge1xuICAgICAgICB3ZWF0aGVyRGF0YS5zZXREYXRhKGRhdGEpO1xuXG4gICAgICAgIGlmIChTZXR0aW5ncy5tZWFzdXJlbWVudCA9PT0gJ1VTJykge1xuICAgICAgICAgICAgaWYgKFNldHRpbmdzLmZvcmVjYXN0ID09PSAnZGFpbHknKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuZGFpbHlVUygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5mb3JlY2FzdCA9PT0gJ2hvdXJseScpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5ob3VybHlVUygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTZXR0aW5ncy5tZWFzdXJlbWVudCA9PT0gJ21ldHJpYycpIHtcbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5mb3JlY2FzdCA9PT0gJ2RhaWx5Jykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmRhaWx5TWV0cmljKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFNldHRpbmdzLmZvcmVjYXN0ID09PSAnaG91cmx5Jykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmhvdXJseU1ldHJpYygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVJIHtcbiAgICBzdGF0aWMgdXBkYXRlTWVhc3VyZW1lbnRCdXR0b25zKGUpIHtcbiAgICAgICAgY29uc3QgVVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uc2V0dGluZ3MudXMtbWVhc3VyZW1lbnQnKTtcbiAgICAgICAgY29uc3QgbWV0cmljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLnNldHRpbmdzLm1ldHJpYy1tZWFzdXJlbWVudCcpO1xuICAgICAgICBbVVMsIG1ldHJpY10uZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1zZXR0aW5nJykpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tc2V0dGluZycpO1xuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVGb3JlY2FzdEJ1dHRvbnMoZSkge1xuICAgICAgICBjb25zdCBkYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5zZXR0aW5ncy5kYWlseS1mb3JlY2FzdCcpO1xuICAgICAgICBjb25zdCBob3VybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uc2V0dGluZ3MuaG91cmx5LWZvcmVjYXN0Jyk7XG4gICAgICAgIFtkYWlseSwgaG91cmx5XS5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXNldHRpbmcnKSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1zZXR0aW5nJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvZ2dsZUJhY2tncm91bmRJbWFnZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBpZiAoZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLmluY2x1ZGVzKCcvbmlnaHQvJykpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9tZWRpYS9uaWdodC1iYWNrZ3JvdW5kLmpwZycpXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9tZWRpYS9iYWNrZ3JvdW5kLWltYWdlMy5qcGcnKVwiOztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBleHBhbmRNb2JpbGVTaWRlYmFyKGUpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50IC5zaWRlYmFyJyk7XG4gICAgICAgIHNpZGViYXIuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXG4gICAgICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5leHBhbmQtbWVudScpO1xuICAgICAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAgICAgZXhwYW5kQnV0dG9uLnN0eWxlLmhlaWdodCA9ICcwJztcblxuICAgICAgICBjb25zdCBtaW5pbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBtaW5pbWl6ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtbWVudScpO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGljb24uc3JjID0gJy4uL3NyYy9tZWRpYS9kb3duLWNhcnJvdC5zdmcnO1xuICAgICAgICBtaW5pbWl6ZUJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICBjb25zdCBzaWRlYmFyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50IC5zaWRlYmFyIC5jb250ZW50LWJveCcpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWluaW1pemVNb2JpbGVTaWRlYmFyKGUpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50IC5zaWRlYmFyJyk7XG4gICAgICAgIHNpZGViYXIuc3R5bGUuaGVpZ2h0ID0gJzE0MnB4JztcbiAgICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmV4cGFuZC1tZW51Jyk7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xuICAgICAgICBleHBhbmRCdXR0b24uc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0ICcuL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCB7IExvYWQgfSBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgV2VhdGhlckRhdGEgfSBmcm9tICcuL21vZGVsLmpzJztcblxuZXhwb3J0IGNvbnN0IHdlYXRoZXJEYXRhID0gbmV3IFdlYXRoZXJEYXRhKCk7XG5cbkxvYWQuZGVmYXVsdFVJKCk7XG5cblxuXG5cblxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2RheS8xMTMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzExMy5wbmdcIixcblx0XCIuL2RheS8xMTYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzExNi5wbmdcIixcblx0XCIuL2RheS8xMTkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzExOS5wbmdcIixcblx0XCIuL2RheS8xMjIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzEyMi5wbmdcIixcblx0XCIuL2RheS8xNDMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzE0My5wbmdcIixcblx0XCIuL2RheS8xNzYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzE3Ni5wbmdcIixcblx0XCIuL2RheS8xNzkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzE3OS5wbmdcIixcblx0XCIuL2RheS8xODIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzE4Mi5wbmdcIixcblx0XCIuL2RheS8xODUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzE4NS5wbmdcIixcblx0XCIuL2RheS8yMDAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzIwMC5wbmdcIixcblx0XCIuL2RheS8yMjcucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzIyNy5wbmdcIixcblx0XCIuL2RheS8yMzAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzIzMC5wbmdcIixcblx0XCIuL2RheS8yNDgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI0OC5wbmdcIixcblx0XCIuL2RheS8yNjAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI2MC5wbmdcIixcblx0XCIuL2RheS8yNjMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI2My5wbmdcIixcblx0XCIuL2RheS8yNjYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI2Ni5wbmdcIixcblx0XCIuL2RheS8yODEucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI4MS5wbmdcIixcblx0XCIuL2RheS8yODQucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI4NC5wbmdcIixcblx0XCIuL2RheS8yOTMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI5My5wbmdcIixcblx0XCIuL2RheS8yOTYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI5Ni5wbmdcIixcblx0XCIuL2RheS8yOTkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI5OS5wbmdcIixcblx0XCIuL2RheS8zMDIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMwMi5wbmdcIixcblx0XCIuL2RheS8zMDUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMwNS5wbmdcIixcblx0XCIuL2RheS8zMDgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMwOC5wbmdcIixcblx0XCIuL2RheS8zMTEucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMxMS5wbmdcIixcblx0XCIuL2RheS8zMTQucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMxNC5wbmdcIixcblx0XCIuL2RheS8zMTcucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMxNy5wbmdcIixcblx0XCIuL2RheS8zMjAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMyMC5wbmdcIixcblx0XCIuL2RheS8zMjMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMyMy5wbmdcIixcblx0XCIuL2RheS8zMjYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMyNi5wbmdcIixcblx0XCIuL2RheS8zMjkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMyOS5wbmdcIixcblx0XCIuL2RheS8zMzIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMzMi5wbmdcIixcblx0XCIuL2RheS8zMzUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMzNS5wbmdcIixcblx0XCIuL2RheS8zMzgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMzOC5wbmdcIixcblx0XCIuL2RheS8zNTAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM1MC5wbmdcIixcblx0XCIuL2RheS8zNTMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM1My5wbmdcIixcblx0XCIuL2RheS8zNTYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM1Ni5wbmdcIixcblx0XCIuL2RheS8zNTkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM1OS5wbmdcIixcblx0XCIuL2RheS8zNjIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM2Mi5wbmdcIixcblx0XCIuL2RheS8zNjUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM2NS5wbmdcIixcblx0XCIuL2RheS8zNjgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM2OC5wbmdcIixcblx0XCIuL2RheS8zNzEucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM3MS5wbmdcIixcblx0XCIuL2RheS8zNzQucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM3NC5wbmdcIixcblx0XCIuL2RheS8zNzcucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM3Ny5wbmdcIixcblx0XCIuL2RheS8zODYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM4Ni5wbmdcIixcblx0XCIuL2RheS8zODkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM4OS5wbmdcIixcblx0XCIuL2RheS8zOTIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM5Mi5wbmdcIixcblx0XCIuL2RheS8zOTUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM5NS5wbmdcIixcblx0XCIuL25pZ2h0LzExMy5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8xMTMucG5nXCIsXG5cdFwiLi9uaWdodC8xMTYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMTE2LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMTE5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzExOS5wbmdcIixcblx0XCIuL25pZ2h0LzEyMi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8xMjIucG5nXCIsXG5cdFwiLi9uaWdodC8xNDMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMTQzLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMTc2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzE3Ni5wbmdcIixcblx0XCIuL25pZ2h0LzE3OS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8xNzkucG5nXCIsXG5cdFwiLi9uaWdodC8xODIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMTgyLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMTg1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzE4NS5wbmdcIixcblx0XCIuL25pZ2h0LzIwMC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yMDAucG5nXCIsXG5cdFwiLi9uaWdodC8yMjcucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjI3LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjMwLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzIzMC5wbmdcIixcblx0XCIuL25pZ2h0LzI0OC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yNDgucG5nXCIsXG5cdFwiLi9uaWdodC8yNjAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjYwLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjYzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzI2My5wbmdcIixcblx0XCIuL25pZ2h0LzI2Ni5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yNjYucG5nXCIsXG5cdFwiLi9uaWdodC8yODEucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjgxLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjg0LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzI4NC5wbmdcIixcblx0XCIuL25pZ2h0LzI5My5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yOTMucG5nXCIsXG5cdFwiLi9uaWdodC8yOTYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjk2LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjk5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzI5OS5wbmdcIixcblx0XCIuL25pZ2h0LzMwMi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMDIucG5nXCIsXG5cdFwiLi9uaWdodC8zMDUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzA1LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzA4LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMwOC5wbmdcIixcblx0XCIuL25pZ2h0LzMxMS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMTEucG5nXCIsXG5cdFwiLi9uaWdodC8zMTQucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzE0LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzE3LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMxNy5wbmdcIixcblx0XCIuL25pZ2h0LzMyMC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMjAucG5nXCIsXG5cdFwiLi9uaWdodC8zMjMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzIzLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzI2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMyNi5wbmdcIixcblx0XCIuL25pZ2h0LzMyOS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMjkucG5nXCIsXG5cdFwiLi9uaWdodC8zMzIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzMyLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzM1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMzNS5wbmdcIixcblx0XCIuL25pZ2h0LzMzOC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMzgucG5nXCIsXG5cdFwiLi9uaWdodC8zNTAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzUwLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzUzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM1My5wbmdcIixcblx0XCIuL25pZ2h0LzM1Ni5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNTYucG5nXCIsXG5cdFwiLi9uaWdodC8zNTkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzU5LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzYyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM2Mi5wbmdcIixcblx0XCIuL25pZ2h0LzM2NS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNjUucG5nXCIsXG5cdFwiLi9uaWdodC8zNjgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzY4LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzcxLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM3MS5wbmdcIixcblx0XCIuL25pZ2h0LzM3NC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNzQucG5nXCIsXG5cdFwiLi9uaWdodC8zNzcucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzc3LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzg2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM4Ni5wbmdcIixcblx0XCIuL25pZ2h0LzM4OS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zODkucG5nXCIsXG5cdFwiLi9uaWdodC8zOTIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzkyLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzk1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM5NS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJleHBvcnQgY2xhc3MgV2VhdGhlckRhdGEge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy53ZWF0aGVyID0ge1VTOnt9LCBtZXRyaWM6e319O1xuICAgIH1cblxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLndlYXRoZXIuVVMpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gICAgXG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldEN1cnJlbnQoZGF0YSk7XG4gICAgICAgIGNvbnN0IGRhaWx5ID0gdGhpcy5nZXREYWlseUZvcmVjYXN0KGRhdGEpO1xuICAgICAgICBjb25zdCBob3VybHkgPSB0aGlzLmdldEhvdXJseUZvcmVjYXN0KGRhdGEpO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy53ZWF0aGVyLCB0aGlzLmdldExvY2F0aW9uKGRhdGEpKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndlYXRoZXIuVVMsIGN1cnJlbnQuVVMpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMud2VhdGhlci5VUywgZGFpbHkuVVMpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMud2VhdGhlci5VUywgaG91cmx5LlVTKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndlYXRoZXIubWV0cmljLCBjdXJyZW50Lm1ldHJpYyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy53ZWF0aGVyLm1ldHJpYywgZGFpbHkubWV0cmljKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndlYXRoZXIubWV0cmljLCBob3VybHkubWV0cmljKTtcbiAgICB9XG5cbiAgICBnZXRMb2NhdGlvbihkYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBVUzoge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IGRhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiBkYXRhLmxvY2F0aW9uLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTogRm9ybWF0LmFiYnJldmlhdGVDb3VudHJ5TmFtZShkYXRhLmxvY2F0aW9uLmNvdW50cnkpLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbFRpbWU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0cmljOiB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogZGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICByZWdpb246IGRhdGEubG9jYXRpb24ucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBGb3JtYXQuYWJicmV2aWF0ZUNvdW50cnlOYW1lKGRhdGEubG9jYXRpb24uY291bnRyeSksXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsVGltZTogZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEN1cnJlbnQoZGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgVVM6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkLFxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogRm9ybWF0LmdldEljb25QYXRoKGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbiksXG4gICAgICAgICAgICAgICAgICAgIHJhaW5DaGFuY2U6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgICAgICAgICAgICAgICAgICBzbm93Q2hhbmNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2Zfc25vdyxcbiAgICAgICAgICAgICAgICAgICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgICAgICAgICAgICAgcHJlc3N1cmU6IGRhdGEuY3VycmVudC5wcmVzc3VyZV9pbiArICcgaW5IZycsXG4gICAgICAgICAgICAgICAgICAgIHRlbXA6IGRhdGEuY3VycmVudC50ZW1wX2YgKyAnXFx1MDBCMCBGJyxcbiAgICAgICAgICAgICAgICAgICAgZmVlbHNMaWtlOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YgKyAnXFx1MDBCMCcsXG4gICAgICAgICAgICAgICAgICAgIHdpbmQ6IGRhdGEuY3VycmVudC53aW5kX21waCArICcgbXBoJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0cmljOiB7XG4gICAgICAgICAgICAgICAgY3VycmVudDoge1xuICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZDogZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZCxcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGljb246IEZvcm1hdC5nZXRJY29uUGF0aChkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24pLFxuICAgICAgICAgICAgICAgICAgICByYWluQ2hhbmNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICAgICAgICAgICAgc25vd0NoYW5jZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3Nub3csXG4gICAgICAgICAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgICAgICAgICAgICAgIHByZXNzdXJlOiBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyAnIG1iJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcDogZGF0YS5jdXJyZW50LnRlbXBfYyArICdcXHUwMEIwIEMnLFxuICAgICAgICAgICAgICAgICAgICBmZWVsc0xpa2U6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyArICdcXHUwMEIwJyxcbiAgICAgICAgICAgICAgICAgICAgd2luZDogZGF0YS5jdXJyZW50LndpbmRfa3BoICsgJyBrcGgnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERhaWx5Rm9yZWNhc3QoZGF0YSkge1xuICAgICAgICBjb25zdCBkYWlseUZvcmVjYXN0ID0geyBVUzoge2RhaWx5OltdfSwgbWV0cmljOiB7ZGFpbHk6W119fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZURheSA9IHRoaXMuc2V0U2luZ2xlRGF5Rm9yZWNhc3QoZGF0YSwgaSk7XG4gICAgICAgICAgICBkYWlseUZvcmVjYXN0LlVTLmRhaWx5LnB1c2goc2luZ2xlRGF5LlVTKTtcbiAgICAgICAgICAgIGRhaWx5Rm9yZWNhc3QubWV0cmljLmRhaWx5LnB1c2goc2luZ2xlRGF5Lm1ldHJpYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGFpbHlGb3JlY2FzdDtcbiAgICB9XG5cbiAgICBzZXRTaW5nbGVEYXlGb3JlY2FzdChkYXRhLCBpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBVUzoge1xuICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSxcbiAgICAgICAgICAgICAgICBoaWdoVGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9mLFxuICAgICAgICAgICAgICAgIGxvd1RlbXA6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfZixcbiAgICAgICAgICAgICAgICBjb25kaXRpb246IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgIGljb246IEZvcm1hdC5nZXRJY29uUGF0aChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0cmljOiB7XG4gICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlLFxuICAgICAgICAgICAgICAgIGhpZ2hUZW1wOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgICAgICAgbG93VGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9jLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgaWNvbjogRm9ybWF0LmdldEljb25QYXRoKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEhvdXJseUZvcmVjYXN0KGRhdGEpIHtcbiAgICAgICAgLy8gZ2V0cyBjdXJyZW50IGRheSBhbmQgbmV4dCBkYXkgaG91cmx5IGRhdGEgZnJvbSBmZXRjaGVkIGRzdGFcbiAgICAgICAgLy8gbmVlZHMgYm90aCBkYXlzIGZvciBVSSB3aGljaCBkaXNwbGF5cyBhIDI0IGhvdXJzIGluIGhvdXIgaW5jcmVtZW50c1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdHdvRGF5cyA9IHsgVVM6IHtob3VybHk6W119LCBtZXRyaWM6IHtob3VybHk6W119fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdHdvRGF5cy5VUy5ob3VybHkucHVzaChbXSk7XG4gICAgICAgICAgICB0d29EYXlzLm1ldHJpYy5ob3VybHkucHVzaChbXSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjQ7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJEYXRhID0gdGhpcy5zZXRIb3VyKGRhdGEsIGksIGopO1xuICAgICAgICAgICAgICAgIHR3b0RheXMuVVMuaG91cmx5W2ldLnB1c2goaG91ckRhdGEuVVMpO1xuICAgICAgICAgICAgICAgIHR3b0RheXMubWV0cmljLmhvdXJseVtpXS5wdXNoKGhvdXJEYXRhLm1ldHJpYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHdvRGF5cztcbiAgICB9XG5cbiAgICBzZXRIb3VyKGRhdGEsIGksIGopIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFVTOiB7XG4gICAgICAgICAgICAgICAgdGltZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2pdLnRpbWUsXG4gICAgICAgICAgICAgICAgdGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2pdLnRlbXBfZixcbiAgICAgICAgICAgICAgICBjb25kaXRpb246IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uaG91cltqXS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICBpY29uOiBGb3JtYXQuZ2V0SWNvblBhdGgoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2pdLmNvbmRpdGlvbi5pY29uKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRyaWM6IHtcbiAgICAgICAgICAgICAgICB0aW1lOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0udGltZSxcbiAgICAgICAgICAgICAgICB0ZW1wOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0udGVtcF9jLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2pdLmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgIGljb246IEZvcm1hdC5nZXRJY29uUGF0aChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0uY29uZGl0aW9uLmljb24pLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ybWF0IHtcblxuICAgIC8vIGdldHMgdGhlIHByb3BlcnR5IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVmZXJlbmNlIGFuIGltcG9ydGVkIGljb25cbiAgICAvLyBpY29uSW1wb3J0c1tGb3JtYXQuZ2V0SWNvblBhdGgoc3RyaW5nKV07XG4gICAgc3RhdGljIGdldEljb25QYXRoKHN0cmluZykge1xuICAgICAgICBpZiAoc3RyaW5nLmluY2x1ZGVzKCduaWdodCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gYG5pZ2h0LyR7c2xpY2VTdHJpbmcoc3RyaW5nKX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cmluZy5pbmNsdWRlcygnZGF5JykpIHtcbiAgICAgICAgICAgIHJldHVybiBgZGF5LyR7c2xpY2VTdHJpbmcoc3RyaW5nKX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2xpY2VTdHJpbmcoc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKHN0cmluZy5sZW5ndGggLSA3LCBzdHJpbmcubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXREYXlOYW1lTG9uZyhzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFsnU3VuZGF5JywnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddW25ldyBEYXRlKHN0cmluZykuZ2V0RGF5KCldO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0RGF5TmFtZVNob3J0KHN0cmluZykge1xuICAgICAgICByZXR1cm4gWydTdW4nLCdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddW25ldyBEYXRlKHN0cmluZykuZ2V0RGF5KCldO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREYXlOdW1iZXIoc3RyaW5nKSB7XG4gICAgICAgIC8vIHN0cmluZyByZXByZXN0aW5nIGRhdGUgbXVzdCBiZSBpbiAneXl5eS1NTS1kZCcgZm9ybWF0XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJy0nKVsyXS5zbGljZSgwLDIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRNb250aE5hbWUoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVtuZXcgRGF0ZShzdHJpbmcpLmdldE1vbnRoKCldO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREYXlOdW1iZXJQcmVmaXgoc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IG5ldyBEYXRlKHN0cmluZykuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgc3VmZml4ID0gJ3RoJztcblxuICAgICAgICBpZiAobnVtYmVyID09IDEgfHwgbnVtYmVyID09IDIxIHx8IG51bWJlciA9PSAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlciA9PSAyIHx8IG51bWJlciA9PSAyMikge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlciA9PSAzIHx8IG51bWJlciA9PSAyMykge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgc3VmZml4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERheU51bWJlcihzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gbmV3IERhdGUoc3RyaW5nKS5nZXREYXRlKCk7XG4gICAgICAgIGlmIChudW1iZXIgPiA5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlciA8IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gJzAnICsgbnVtYmVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFllYXJOdW1iZXIoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShzdHJpbmcpLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFNwb2tlbkRhdGUoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldERheU5hbWVMb25nKHN0cmluZyl9LCAke3RoaXMuZ2V0TW9udGhOYW1lKHN0cmluZyl9ICR7dGhpcy5nZXREYXlOdW1iZXJQcmVmaXgoc3RyaW5nKX0sICR7dGhpcy5nZXRZZWFyTnVtYmVyKHN0cmluZyl9YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0TG9jYWxlVGltZShzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0cmluZykudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIGlmIChkYXRlLmxlbmd0aCA9PT0gMTEpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnNsaWNlKDAsNSkgKyBkYXRlLnNsaWNlKDksMTEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5zbGljZSgwLDQpICsgZGF0ZS5zbGljZSg4LDEwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEhvdXIyNEhSKHN0cmluZykge1xuICAgICAgICAvLyByZXR1cm5zIHRoZSBob3VyIG9mIGEgZGF0ZSBpbiB0aGUgZm9ybWF0ICdoaCdcbiAgICAgICAgLy8gdG8gYmUgdXNlZCB3aXRoIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uaG91cltpXS50aW1lXG4gICAgICAgIC8vIGRhdGUgbXVzdCBiZSBmb3JtYXR0ZWQgaW4gJ3l5eXktTU0tZGQgaGgtbW1cIiBmb3JtYXRcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgnICcpWzFdLnNwbGl0KCc6JylbMF07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEhvdXJBTVBNKHN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRlZFN0cmluZyA9IG5ldyBEYXRlKHN0cmluZykudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBkYXRlZFN0cmluZy5zcGxpdCgnICcpWzBdLnNwbGl0KCc6JylbMF0gKyBkYXRlZFN0cmluZy5zcGxpdCgnICcpWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFiYnJldmlhdGVDb3VudHJ5TmFtZShzdHJpbmcpIHtcbiAgICAgICAgaWYgKHN0cmluZyA9PT0gJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYScpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlVTQVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgaWNvbkltcG9ydHMgfSBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuL21lZGlhL3NlYXJjaC5zdmcnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vbW9kZWwuanNcIjtcbmltcG9ydCB7IEZvcm1hdCB9IGZyb20gXCIuL21vZGVsLmpzXCI7XG5pbXBvcnQgeyBQb3B1bGF0ZSB9IGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcblxuY2xhc3MgRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICd0YWduYW1lJzonZGl2JyxcbiAgICAgICAgfVxuICAgICkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLy9uZXcgRWxlbWVudCgpLmJ1aWxkKCkgd2lsbCBkZWZhdWx0IHRvIGEgY3JlYXRlZCBkaXYgZWxlbWVudFxuICAgICAgICAvL2lmIGEgY29uZmlnIG9iamVjdCBpcyBwYXNzZWQgaW4gYXMgYSBwYXJhbWV0ZXIsIHRoZW4gYSB0YWduYW1lIHByb3BlcnR5IGFsd2F5cyBuZWVkcyB0byBiZSBhZGRlZFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmNvbmZpZ1sndGFnbmFtZSddKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IG11bHRpcGxlIGNsYXNzbmFtZXMgaW4gc2luZ2xlIGRlY2xhcmF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IHRoaXMuY29uZmlnWydjbGFzcyddLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnWydjbGFzcyddKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBjbGFzc05hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5jb25maWdbJ2lkJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcGVydHkgPT09ICd0ZXh0LWNvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuY29uZmlnWyd0ZXh0LWNvbnRlbnQnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnZXZlbnQtbGlzdGVuZXJzJykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5jb25maWdbJ2V2ZW50LWxpc3RlbmVycyddKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHByb3BlcnR5LCB0aGlzLmNvbmZpZ1snZXZlbnQtbGlzdGVuZXJzJ11bcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gJ3NyYycpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNyYyA9IHRoaXMuY29uZmlnWydzcmMnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY2hpbGQgbXVzdCBiZSBidWlsdCB1c2luZyB0aGlzLmJ1aWxkKClcbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGNoaWxkIG9mIHRoaXMuY29uZmlnWydjaGlsZHJlbiddKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcGVydHkgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5jb25maWdbJ3N0eWxlJ10pe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHRoaXMuY29uZmlnWydzdHlsZSddW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSAhPT0gJ3RhZ25hbWUnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHRoaXMuY29uZmlnW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCdWlsZCB7XG4gICAgc3RhdGljIHNpZGViYXIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ3NpZGViYXInLFxuICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2Zvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdzZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnc3VibWl0JzpJbnB1dC5zdWJtaXRMb2NhdGlvbn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ3NlYXJjaC1sb2NhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2VhcmNoLWxvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICd6aXAgY29kZSBvciBjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdXRvZm9jdXMnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3NlYXJjaC1pY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6IHNlYXJjaEljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnc2VhcmNoLWljb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdlcnJvci1tZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnTm8gbWF0Y2hpbmcgbG9jYXRpb24gZm91bmQuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdleHBhbmQtbWVudScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50LWxpc3RlbmVycyc6eydjbGljayc6VUkuZXhwYW5kTW9iaWxlU2lkZWJhcn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvZG93bi1jYXJyb3Quc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnZXhwYW5kLW1lbnUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2gyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ1NldHRpbmdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc2V0dGluZ3MtY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdoNCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ01lYXN1cmVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0b2dnbGUtY29udGFpbmVyIG1lYXN1cmVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnVVMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidzZXR0aW5ncyB1cy1tZWFzdXJlbWVudCBjaG9zZW4tc2V0dGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnY2xpY2snOlBvcHVsYXRlLmNsaWNrVVN9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ01ldHJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J3NldHRpbmdzIG1ldHJpYy1tZWFzdXJlbWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnY2xpY2snOlBvcHVsYXRlLmNsaWNrTWV0cmljfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaDQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdGb3JlY2FzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndG9nZ2xlLWNvbnRhaW5lciBmb3JlY2FzdC1ob3VybHkgY2hvc2VuLXNldHRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdIb3VybHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidzZXR0aW5ncyBob3VybHktZm9yZWNhc3QgY2hvc2VuLXNldHRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQtbGlzdGVuZXJzJzp7J2NsaWNrJzpQb3B1bGF0ZS5jbGlja0hvdXJseX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnRGFpbHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidzZXR0aW5ncyBkYWlseS1mb3JlY2FzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnY2xpY2snOlBvcHVsYXRlLmNsaWNrRGFpbHl9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2gyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ1NhdmVkIExvY2F0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc2F2ZWQtY2l0aWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNhdmVkQ2l0eUl0ZW0oKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAndGFnbmFtZSc6ICdsaScsXG4gICAgICAgICAgICAnY2xhc3MnOiAnY2l0eS1uYW1lJyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsZWZ0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdoMycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdCb3N0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncmVnaW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ01hc3NhY2h1c2V0dHMsIFVTQScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NpdHktb2JqZWN0LWlkJzogJzEyMzQ1JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvZGVsZXRlLnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3VycmVudFdlYXRoZXIoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdjb250ZW50LWJveCBjdXJyZW50JyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjaXR5LXJlZ2lvbi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5sb2NhdGlvbi5jaXR5fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2g1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncmVnaW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5sb2NhdGlvbi5yZWdpb259LCAke2RhdGEubG9jYXRpb24uY291bnRyeX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RpbWUtZGF0ZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RpbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ2FzIG9mJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogRm9ybWF0LmdldExvY2FsZVRpbWUoZGF0YS5jdXJyZW50Lmxhc3RVcGRhdGVkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IEZvcm1hdC5nZXRTcG9rZW5EYXRlKGRhdGEuY3VycmVudC5sYXN0VXBkYXRlZCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RlbXAnLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50LnRlbXB9YCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogaWNvbkltcG9ydHNbZGF0YS5jdXJyZW50Lmljb25dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnd2VhdGhlci1pY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29uZGl0aW9uLWljb24gaWNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmN1cnJlbnQuY29uZGl0aW9ufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnd2VhdGhlci1wcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dlYXRoZXItcHJvcGVydHkgZmVlbHMtbGlrZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvdGhlcm1vbWV0ZXIuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnZmVlbHMtbGlrZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncmlnaHQtY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ0ZlZWxzIGxpa2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEuY3VycmVudC5mZWVsc0xpa2V9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dlYXRoZXItcHJvcGVydHkgd2luZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvd2luZC5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICd3aW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdyaWdodC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnV2luZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50LndpbmR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd3ZWF0aGVyLXByb3BlcnR5IGNoYW5jZS1yYWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogJy4uL3NyYy9tZWRpYS9yYWluLnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJ3JhaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JpZ2h0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdSYWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmN1cnJlbnQucmFpbkNoYW5jZX0lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd3ZWF0aGVyLXByb3BlcnR5IGNoYW5jZS1zbm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogJy4uL3NyYy9tZWRpYS9zbm93LnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJ3Nub3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JpZ2h0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdTbm93OicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50LnNub3dDaGFuY2V9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnd2VhdGhlci1wcm9wZXJ0eSBodW1pZGl0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvaHVtaWRpdHkuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnaHVtaWRpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JpZ2h0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdIdW1pZGl0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dlYXRoZXItcHJvcGVydHkgcHJlc3N1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiAnLi4vc3JjL21lZGlhL3ByZXNzdXJlLnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJ3ByZXNzdXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdyaWdodC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnUHJlc3N1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEuY3VycmVudC5wcmVzc3VyZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmVjYXN0Q29udGFpbmVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdjb250ZW50LWJveCBmb3JlY2FzdCcsXG4gICAgICAgIH0pLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmVjYXN0SXRlbURhaWx5KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZm9yZWNhc3QtaXRlbSBkYWlseS1pdGVtJyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2gzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke0Zvcm1hdC5nZXREYXlOYW1lU2hvcnQoZGF0YS5kYXRlKX0gJHtGb3JtYXQuZ2V0RGF5TnVtYmVyKGRhdGEuZGF0ZSl9YCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2hpZ2gtbG93LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaGlnaC10ZW1wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5oaWdoVGVtcH1cXHUwMEIwYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2RpdmlkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnLycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsb3ctdGVtcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEubG93VGVtcH1cXHUwMEIwYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb25kaXRpb24tY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbiBpY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogaWNvbkltcG9ydHNbZGF0YS5pY29uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmNvbmRpdGlvbn1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9yZWNhc3RJdGVtSG91cmx5KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZm9yZWNhc3QtaXRlbSBob3VybHktaXRlbScsXG4gICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdoMycsXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBGb3JtYXQuZ2V0SG91ckFNUE0oZGF0YS50aW1lKSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdob3VybHktdGVtcCcsXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOmAke2RhdGEudGVtcH1cXHUwMEIwYCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29uZGl0aW9uIGljb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiBpY29uSW1wb3J0c1tkYXRhLmljb25dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEuY29uZGl0aW9ufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5idWlsZCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBob3VybHlEYXRlQ29udGFpbmVyKGRhdGEpIHtcbiAgICAgICAgLy8gdG8gYmUgYXBwZW5kZWQgaW5zaWRlIG9mIC5jb250ZW50LWJveC5mb3JlY2FzdFxuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdob3VybHktZGF0ZS1jb250YWluZXInLFxuICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke0Zvcm1hdC5nZXRTcG9rZW5EYXRlKGRhdGEuZGF0ZSl9YCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuXG4gICAgICAgICAgICAgICAgLy8gKioqIGJ1aWxkIC5ob3Vycy1jb250YWluZXIgZGlyZWN0bHkgaW4ganMgKioqXG4gICAgICAgICAgICAgICAgLy8gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIC8vICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIC8vICAgICAnY2xhc3MnOiAnaG91cnMtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gLmZvcmVjYXN0LWl0ZW0uaG91cmx5LWl0ZW0gdG8gYmUgYXBwZW5kZWQgaW5zaWRlIG9mIC5ob3Vycy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAvLyB9KS5idWlsZCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==