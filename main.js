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
    z-index: 1;
}

.content-box {
    background-color: #2e2e2e40;
    backdrop-filter: blur(5px);
    border-radius: 15px;
    padding: 15px;
    border: 2px solid #22487E;
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
.sidebar button.toggle-menu {
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
    /* color: #e2e2e2; */
    color: #A1F9A1;
}
.sidebar ul.saved-cities button.left-container:active {
    /* color: #cccccc; */
    color: #6cc76c;
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
        ". save-city"
          
}
.content-box.current button.save-city {
    grid-area: save-city;
    border-radius: 20px;
    padding: 5px 10px 5px 10px;
    background-color: #A1F9A1;
    color: black;
    justify-self: end;
    max-width: 225px;
}
    .content-box.current button.save-city:hover {
        background-color: #73cf73; 
    }
    .content-box.current button.save-city:active {
        background-color: #5ab65a; 
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
    width: 90px;
    flex-shrink: 0;
}
.weather-properties .right-content p.text {
    font-weight: 900;
}

/* forecast proto */
.content-box.forecast {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    overflow: auto;
    height: 285px;
    max-width: 1900px;
}
.content-box.forecast .forecast-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    width: 125px;
}
.content-box.forecast p.condition {
    text-align: center;
    height: 50px;
}

/* forecast hourly */
.content-box.forecast.hourly .hourly-date-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
    .content-box.forecast.hourly .hourly-date-container p.date {
        border-bottom: 2px solid #ffffff;
        height: 50px;
        display: flex;
        align-items: center;
    }
.content-box.forecast.hourly .hours-container {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    width: auto;
}
.content-box.forecast.hourly .forecast-item.hourly-item {
    width: 125px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.content-box.forecast.hourly .condition-container {
    width: 100%;
    height: 115px;
}

/* forecast item daily */
.content-box.forecast .forecast-item.daily-item {
    height: 95%;
}
`, "",{"version":3,"sources":["webpack://./src/style/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('./src/reset.css');\n\n/* main components */\n#content {\n    width: 100vw;\n    height: 100vh;\n    padding: 10px;\n    position: relative;\n    display: grid;\n    gap: 25px;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n        \"sidebar  current\"\n        \"sidebar .\"\n        \"forecast forecast\";\n    filter: saturate(0.8);\n    background-image: url('../../src/media/background-image3.jpg');\n    /* background-image: url('../../src/media/night-background.jpg'); */\n    background-size: cover;\n    transition: background-image 1000ms ease-in-out;\n}\n.sidebar {\n    grid-area: sidebar;\n}\n.content-box.current {\n    grid-area: current;\n}\n.content-box.forecast {\n    grid-area: forecast;\n}\nimg.loading-gif {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: auto;\n    margin-bottom: auto;\n    z-index: 1;\n}\n\n.content-box {\n    background-color: #2e2e2e40;\n    backdrop-filter: blur(5px);\n    border-radius: 15px;\n    padding: 15px;\n    border: 2px solid #22487E;\n    color: #ffffff;\n}\n\n#main-content {\n    height: 100vh;\n    flex-grow: 1;\n    padding: 10px;\n    color: #ffffff;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nimg.icon {\n    filter: brightness(0) invert(1);\n}\n\n/* sidebar */\n.sidebar {\n    height: 100%;\n    width: 300px;\n}\n.sidebar img {\n    height: 35px;\n    width: 35px;\n}\n.sidebar .content-box {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 5px;\n    overflow: auto;\n}\n.sidebar form.search  {\n    margin-bottom: 20px;\n    width: 100%;\n}\n.sidebar form.search input {\n    height: 40px;\n    width: 100%;\n    border-radius: 20px;\n    padding-left: 20px;\n    padding-right: 50px;\n    border: 2px solid #ffffff;\n    margin-bottom: 10px;\n    font-size: 18px;\n    background-color: transparent;\n    color: #ffffff;\n}\n.sidebar form.search input::placeholder {\n    color: #d3d3d3;\n}\n.sidebar form.search button[type=\"submit\"] {\n    position: absolute;\n    top: 19px;\n    right: 25px;\n}\n.sidebar form.search img.search-icon {\n    height: 30px;\n    width: 30px;\n}\n.sidebar form.search img.search-icon:hover {\n    filter: brightness(.8);\n}\n.sidebar form.search img.search-icon:active {\n    filter: brightness(.6);\n}\n.sidebar form.search p.error-message {\n    visibility: hidden;\n    text-align: center;\n}\n.sidebar form.search p.error-message.visible {\n    visibility: visible;\n}\n.sidebar button.toggle-menu {\n    width: 100%;\n    height: 0;\n    overflow: hidden;\n}\n.sidebar .settings-content {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 10px;\n    margin-bottom: 20px;\n    width: 100%;\n}\n.sidebar .settings-content .toggle-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 5px;\n    width: 100%;\n}\n.sidebar .toggle-container button {\n    border: 2px solid #ffffff;\n    padding: 5px 0 5px 0;\n    border-radius: 20px;\n    transition: all 100ms ease-in-out;\n}\n.sidebar .toggle-container button:hover {\n    border-color:#000000;\n    background-color: #000000;\n}\n.sidebar .toggle-container button:active {\n    border-color:#000000;\n    background-color: #00000080;\n}\n.sidebar .toggle-container button.chosen-setting {\n    color: #000000;\n    background-color: #69bbff80;\n    border-color: #000000;\n}\n\n.sidebar ul.saved-cities {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 20px;\n    width: 100%;\n}\n.sidebar ul.saved-cities li {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n}\n.sidebar ul.saved-cities li img.delete {\n    height: 19px;\n    width: 19px;\n}\n.sidebar ul.saved-cities li button.delete {\n    filter: brightness(0) invert(1);\n    transition: filter 100ms ease-in-out;\n}\n.sidebar ul.saved-cities li button.delete:hover {\n    filter: brightness(0.9);\n}\n.sidebar ul.saved-cities li button.delete:active {\n    filter: brightness(1);\n}\n.sidebar ul.saved-cities button.left-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-grow: 1;\n    text-align: left;\n    transition: color 100ms ease-in-out;\n}\n.sidebar ul.saved-cities button.left-container:hover {\n    /* color: #e2e2e2; */\n    color: #A1F9A1;\n}\n.sidebar ul.saved-cities button.left-container:active {\n    /* color: #cccccc; */\n    color: #6cc76c;\n}\n.sidebar ul.saved-cities h3 {\n    font-size: 15px;\n}\n.sidebar ul.saved-cities p.region {\n    font-size: 12px;\n}\n\n/* current weather */\n.content-box.current {\n    padding-left: 25px;\n    padding-right: 25px;\n    max-width: 750px;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-auto-rows: auto;\n    grid-template-areas:\n        \"city-region time-date\"\n        \"city-region .\"\n        \"temp condition\"\n        \"properties properties\"\n        \". save-city\"\n          \n}\n.content-box.current button.save-city {\n    grid-area: save-city;\n    border-radius: 20px;\n    padding: 5px 10px 5px 10px;\n    background-color: #A1F9A1;\n    color: black;\n    justify-self: end;\n    max-width: 225px;\n}\n    .content-box.current button.save-city:hover {\n        background-color: #73cf73; \n    }\n    .content-box.current button.save-city:active {\n        background-color: #5ab65a; \n    }\n.content-box.current .city-region-container {\n    grid-area: city-region;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n    .content-box.current .city {\n        font-size: 30px;\n    }\n    .content-box.current .region {\n        font-size: 16px;\n    }\n.content-box.current .time-date-container {\n    grid-area: time-date;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n    .content-box.current .time {\n        font-size: 25px;\n    }\n        .content-box.current .time span {\n            font-size: 18px;\n            margin-right: 6px;\n        }\n    .content-box.current .date {\n        font-size: 12px;\n    }\n.content-box.current .temp {\n    grid-area: temp;\n    font-size: 50px;\n    font-weight: 900;\n    align-self: end;\n}\n.content-box.current .condition-container {\n    grid-area: condition;\n    justify-self: end;\n    align-self: start;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    height: auto;\n}\n    .content-box.current .condition-icon {\n        height: 65px;\n        width: 65px;\n    }\n.content-box.current .weather-properties {\n    grid-area: properties;\n}\n\n/* weather-properties container*/\n.weather-properties {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n    align-items: center;\n    gap: 15px;\n    width: 100%;\n    border-top: 2px solid #ffffff;\n    margin-top: 20px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.weather-properties .weather-property {\n    display: flex;\n    gap: 5px;\n}\n.weather-properties .weather-property img {\n    height: 20px;\n    width: 20px;\n    align-self: center;\n}\n.weather-properties .weather-property .right-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    width: 90px;\n    flex-shrink: 0;\n}\n.weather-properties .right-content p.text {\n    font-weight: 900;\n}\n\n/* forecast proto */\n.content-box.forecast {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 25px;\n    overflow: auto;\n    height: 285px;\n    max-width: 1900px;\n}\n.content-box.forecast .forecast-item {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    flex-shrink: 0;\n    width: 125px;\n}\n.content-box.forecast p.condition {\n    text-align: center;\n    height: 50px;\n}\n\n/* forecast hourly */\n.content-box.forecast.hourly .hourly-date-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n    .content-box.forecast.hourly .hourly-date-container p.date {\n        border-bottom: 2px solid #ffffff;\n        height: 50px;\n        display: flex;\n        align-items: center;\n    }\n.content-box.forecast.hourly .hours-container {\n    display: flex;\n    justify-content: space-between;\n    gap: 5px;\n    width: auto;\n}\n.content-box.forecast.hourly .forecast-item.hourly-item {\n    width: 125px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n.content-box.forecast.hourly .condition-container {\n    width: 100%;\n    height: 115px;\n}\n\n/* forecast item daily */\n.content-box.forecast .forecast-item.daily-item {\n    height: 95%;\n}\n\n@import url('./src/responsive.css');\n"],"sourceRoot":""}]);
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
    height: 10px;
    width: 10px;
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
}`, "",{"version":3,"sources":["webpack://./src/style/src/reset.css"],"names":[],"mappings":"AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,yBAAyB;IACzB,cAAc;IACd,YAAY;AAChB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,yBAAyB;AAC7B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&family=Roboto+Mono&display=swap');\n\n:root {\n    --main-font: 'Montserrat', sans-serif;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--main-font);\n}\nbutton {\n    background-color: inherit;\n    color: inherit;\n    border: none;\n}\nli {\n    list-style-type: none;\n}\ntextarea {\n    resize: none;\n    outline: none;\n}\ninput {\n    outline: none;\n    border-radius: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    background-color: inherit;\n    height: 35px;\n}\n\n::-webkit-scrollbar {\n    height: 10px;\n    width: 10px;\n}\n::-webkit-scrollbar-thumb {\n    background-color: #2d5894; \n    border-radius: 10px;\n}\n::-webkit-scrollbar-track:hover {\n    background-color: transparent;\n}\n::-webkit-scrollbar-thumb:hover {\n    background-color: #16345f;\n}"],"sourceRoot":""}]);
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
    #content .sidebar.maximized {
        height: auto;
    }
        #content .sidebar .content-box {
            overflow: hidden;
        }
        #content .sidebar .content-box form {
            margin-bottom: 5px;
        }
        #content .sidebar .content-box button.toggle-menu {
            height: auto;
            overflow: visible;
            border-radius: 20px;
            width: 100%;
            background-color: transparent;
        }
        #content .sidebar .content-box button.toggle-menu:hover {
            background-color: #00000050;
        }
        #content .sidebar .content-box button.toggle-menu:active {
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
        padding: 25px;
        height: auto;
    }

    /* daily forecast item */
    #content .content-box.forecast .forecast-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 25px;
        width: 100%;
        height: 100px;
    }
    #content .content-box.forecast .forecast-item > * {
        flex-shrink: 0;
    }
        #content .content-box.forecast .forecast-item h3,
        #content .content-box.forecast .forecast-item .high-low-container,
        #content .content-box.forecast .forecast-item .hourly-temp {
            width: 100px;
            flex-grow: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
        }
        #content .content-box.forecast .forecast-item img.condition.icon {
            height: 65px;
            width: 65px;
        }
        #content .content-box.forecast .forecast-item p.condition {
            flex-grow: 1;
            text-align: center;
            word-wrap: normal;
            height: auto;
        }
    
    /* hourly forecast item */
    #content .content-box.forecast.hourly {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    #content .content-box.forecast.hourly .hourly-date-container {
        width: 100%;
    }
    #content .content-box.forecast.hourly .hours-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    #content .content-box.forecast.hourly .forecast-item.hourly-item {
        display: flex;
        flex-direction: row;
    }
}

@media screen and (max-width: 600px) {
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

    #content .content-box.forecast .forecast-item,
    #content .content-box.forecast.hourly .forecast-item.hourly-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        border-bottom: 2px solid #ffffff80;
        padding-bottom: 15px;
        height: auto;
    }
    #content .content-box.forecast.hourly .hours-container {
        align-items: center
    }
    #content .content-box.forecast.hourly .forecast-item.hourly-item {
        width: 85%;
    }
        #content .content-box.forecast .forecast-item.last-item,
        #content .content-box.forecast.hourly .forecast-item.hourly-item.last-item {
            border-bottom: none;
        }
        #content .content-box.forecast .forecast-item h3,
        #content .content-box.forecast .forecast-item .high-low-container,
        #content .content-box.forecast .forecast-item .hourly-temp {
            width: auto;
        }
}`, "",{"version":3,"sources":["webpack://./src/style/src/responsive.css"],"names":[],"mappings":"AAAA;IACI;QACI,aAAa;QACb,YAAY;QACZ,iBAAiB;QACjB,WAAW;QACX,SAAS;QACT,0BAA0B;QAC1B,iCAAiC;QACjC;;;sBAGc;IAClB;IACA;QACI,kBAAkB;QAClB,WAAW;QACX,aAAa;QACb,gBAAgB;IACpB;IACA;QACI,YAAY;IAChB;QACI;YACI,gBAAgB;QACpB;QACA;YACI,kBAAkB;QACtB;QACA;YACI,YAAY;YACZ,iBAAiB;YACjB,mBAAmB;YACnB,WAAW;YACX,6BAA6B;QACjC;QACA;YACI,2BAA2B;QAC/B;QACA;YACI,2BAA2B;QAC/B;IACJ;QACI,kBAAkB;QAClB,WAAW;IACf;IACA;QACI,mBAAmB;QACnB,aAAa;QACb,sBAAsB;QACtB,SAAS;QACT,aAAa;QACb,YAAY;IAChB;;IAEA,wBAAwB;IACxB;QACI,aAAa;QACb,mBAAmB;QACnB,8BAA8B;QAC9B,SAAS;QACT,WAAW;QACX,aAAa;IACjB;IACA;QACI,cAAc;IAClB;QACI;;;YAGI,YAAY;YACZ,YAAY;YACZ,aAAa;YACb,mBAAmB;YACnB,2BAA2B;QAC/B;QACA;YACI,YAAY;YACZ,WAAW;QACf;QACA;YACI,YAAY;YACZ,kBAAkB;YAClB,iBAAiB;YACjB,YAAY;QAChB;;IAEJ,yBAAyB;IACzB;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;IACf;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;IACf;IACA;QACI,aAAa;QACb,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,kBAAkB;QAClB,mBAAmB;QACnB,WAAW;QACX,YAAY;QACZ,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;IACA;QACI,WAAW;QACX,mBAAmB;QACnB,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,QAAQ;IACZ;;IAEA;;QAEI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,QAAQ;QACR,kCAAkC;QAClC,oBAAoB;QACpB,YAAY;IAChB;IACA;QACI;IACJ;IACA;QACI,UAAU;IACd;QACI;;YAEI,mBAAmB;QACvB;QACA;;;YAGI,WAAW;QACf;AACR","sourcesContent":["@media screen and (max-width: 750px) {\n    body #content {\n        display: grid;\n        height: auto;\n        min-height: 100vh;\n        width: auto;\n        gap: 25px;\n        grid-template-columns: 1fr;\n        grid-template-rows: auto 1fr auto;\n        grid-template-areas:\n            \"sidebar\"\n            \"current\"\n            \"forecast\";\n    }\n    #content .sidebar {\n        grid-area: sidebar;\n        width: 100%;\n        height: 142px;\n        overflow: hidden;\n    }\n    #content .sidebar.maximized {\n        height: auto;\n    }\n        #content .sidebar .content-box {\n            overflow: hidden;\n        }\n        #content .sidebar .content-box form {\n            margin-bottom: 5px;\n        }\n        #content .sidebar .content-box button.toggle-menu {\n            height: auto;\n            overflow: visible;\n            border-radius: 20px;\n            width: 100%;\n            background-color: transparent;\n        }\n        #content .sidebar .content-box button.toggle-menu:hover {\n            background-color: #00000050;\n        }\n        #content .sidebar .content-box button.toggle-menu:active {\n            background-color: #00000030;\n        }\n    #content .content-box.current {\n        grid-area: current;\n        width: 100%;\n    }\n    #content .content-box.forecast {\n        grid-area: forecast;\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        padding: 25px;\n        height: auto;\n    }\n\n    /* daily forecast item */\n    #content .content-box.forecast .forecast-item {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        gap: 25px;\n        width: 100%;\n        height: 100px;\n    }\n    #content .content-box.forecast .forecast-item > * {\n        flex-shrink: 0;\n    }\n        #content .content-box.forecast .forecast-item h3,\n        #content .content-box.forecast .forecast-item .high-low-container,\n        #content .content-box.forecast .forecast-item .hourly-temp {\n            width: 100px;\n            flex-grow: 0;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n        }\n        #content .content-box.forecast .forecast-item img.condition.icon {\n            height: 65px;\n            width: 65px;\n        }\n        #content .content-box.forecast .forecast-item p.condition {\n            flex-grow: 1;\n            text-align: center;\n            word-wrap: normal;\n            height: auto;\n        }\n    \n    /* hourly forecast item */\n    #content .content-box.forecast.hourly {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n    }\n    #content .content-box.forecast.hourly .hourly-date-container {\n        width: 100%;\n    }\n    #content .content-box.forecast.hourly .hours-container {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n    }\n    #content .content-box.forecast.hourly .forecast-item.hourly-item {\n        display: flex;\n        flex-direction: row;\n    }\n}\n\n@media screen and (max-width: 600px) {\n    body #content .content-box.current {\n        padding-left: 25px;\n        padding-right: 25px;\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n    body #content .content-box.current > * {\n        width: 100%;\n        align-items: center;\n        text-align: center;\n    }\n    body #content .content-box.current .city-region-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        gap: 5px;\n    }\n\n    #content .content-box.forecast .forecast-item,\n    #content .content-box.forecast.hourly .forecast-item.hourly-item {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 5px;\n        border-bottom: 2px solid #ffffff80;\n        padding-bottom: 15px;\n        height: auto;\n    }\n    #content .content-box.forecast.hourly .hours-container {\n        align-items: center\n    }\n    #content .content-box.forecast.hourly .forecast-item.hourly-item {\n        width: 85%;\n    }\n        #content .content-box.forecast .forecast-item.last-item,\n        #content .content-box.forecast.hourly .forecast-item.hourly-item.last-item {\n            border-bottom: none;\n        }\n        #content .content-box.forecast .forecast-item h3,\n        #content .content-box.forecast .forecast-item .high-low-container,\n        #content .content-box.forecast .forecast-item .hourly-temp {\n            width: auto;\n        }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _media_loading_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/loading.gif */ "./src/media/loading.gif");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
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
            handleResolve(data);
        }
    } catch(err) {
        handleError(err);
    }
}

function handleResolve(data) {
    Load.removeLoadingGIF();
    Load.removeErrorMessage();
    Input.handleData(data);
    UI.toggleBackgroundImage(data);
}

function handleError(err) {
    Load.showErrorMessage(err);
    Load.removeLoadingGIF();
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
    static defaultUI() {
        document.querySelector('#content').appendChild(_view_js__WEBPACK_IMPORTED_MODULE_2__.Build.sidebar());
        Load.insertSavedCities();
        getWeather('10001');
    }

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
        gif.src = _media_loading_gif__WEBPACK_IMPORTED_MODULE_1__;
        document.querySelector('#content').appendChild(gif);
    }

    static removeLoadingGIF() {
        document.querySelector('img.loading-gif').remove();
    }

    static currentWeather(data) {
        document.querySelector('#content').appendChild(_view_js__WEBPACK_IMPORTED_MODULE_2__.Build.currentWeather(data));
    }

    static forecastDaily(data) {
        const forecastContainer = _view_js__WEBPACK_IMPORTED_MODULE_2__.Build.forecastContainer();
        for (let i = 0; i < 7; i++) {
            // if (i === 6) for mobile style
            if (i === 6) {
                const lastItem = _view_js__WEBPACK_IMPORTED_MODULE_2__.Build.forecastItemDaily(data.daily[i]);
                lastItem.classList.add('last-item');
                forecastContainer.appendChild(lastItem);
            } else {
                forecastContainer.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_2__.Build.forecastItemDaily(data.daily[i]));
            }
        }

        document.querySelector('#content').appendChild(forecastContainer);
    }

    static forecastHourly(data) {
        // gets exactly 24 hours of forecast data split into hours, so data needs to be grabbed from multiple days
        // get number value in 24 hr time represting current time
        const currentHour = Number(_model_js__WEBPACK_IMPORTED_MODULE_3__.Format.getHour24HR(data.location.localTime));
        // get the hours left in current day's hourly forecast
        const currentDayHours = data.hourly[0].slice(currentHour);
        // get the remaining hours needed to equal 24 total hours from the next day's hourly forecast
        const nextDayHours = data.hourly[1].slice(0, data.hourly[1].length - currentDayHours.length);
        
        // forecast container contains 2 main containers for each day
        const forecastContainer = _view_js__WEBPACK_IMPORTED_MODULE_2__.Build.forecastContainer();
        
        // insert data for each hour of day one into day one's container and add day one's container to the forecast container
        const dayOneHourlyDateContainer = _view_js__WEBPACK_IMPORTED_MODULE_2__.Build.hourlyDateContainer(data.daily[0])
        const dayOneContent = createHoursContainer();
        for (let i = 0; i < currentDayHours.length; i++) {
            if (i === currentDayHours.length - 1) {
                const lastItem = _view_js__WEBPACK_IMPORTED_MODULE_2__.Build.forecastItemHourly(currentDayHours[i]);
                lastItem.classList.add('last-item');
                dayOneContent.appendChild(lastItem);
            } else {
                dayOneContent.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_2__.Build.forecastItemHourly(currentDayHours[i]))
            }
        }
        dayOneHourlyDateContainer.appendChild(dayOneContent);
        forecastContainer.appendChild(dayOneHourlyDateContainer);

        // repeat for day two IF there aren't already 24 hours in day 1
        if (currentDayHours.length !== 24) {
            const dayTwoHourlyDateContainer = _view_js__WEBPACK_IMPORTED_MODULE_2__.Build.hourlyDateContainer(data.daily[1]);
            const dayTwoContent = createHoursContainer();
            for (let i = 0; i < nextDayHours.length; i++) {
                if (i === nextDayHours.length - 1) {
                    const lastItem = _view_js__WEBPACK_IMPORTED_MODULE_2__.Build.forecastItemHourly(nextDayHours[i]);
                    lastItem.classList.add('last-item');
                    dayTwoContent.appendChild(lastItem);
                } else {
                    dayTwoContent.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_2__.Build.forecastItemHourly(nextDayHours[i]));
                }
            }
            dayTwoHourlyDateContainer.appendChild(dayTwoContent);
            forecastContainer.appendChild(dayTwoHourlyDateContainer);
        }

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

    static insertSavedCities() {
        const citiesContainer = document.querySelector('ul.saved-cities');
        for (const key in _index_js__WEBPACK_IMPORTED_MODULE_4__.savedLocations.data) {
            const city = _view_js__WEBPACK_IMPORTED_MODULE_2__.Build.savedCityItem(key, _index_js__WEBPACK_IMPORTED_MODULE_4__.savedLocations.data);
            citiesContainer.appendChild(city);
        }
    }

    static removeSavedCities() {
        const citiesContainer = document.querySelector('ul.saved-cities');
        while(citiesContainer.firstChild) {
            citiesContainer.removeChild(citiesContainer.firstChild);
        }
    }

    static showErrorMessage(err) {
        const errorMessage = document.querySelector('form.search p.error-message');
        errorMessage.textContent = err.message;
        errorMessage.classList.add('visible');
    }

    static removeErrorMessage() {
        const errorMessage = document.querySelector('form.search p.error-message');
        errorMessage.classList.remove('visible');
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
            content.style.backgroundImage = "url('../src/media/background-image3.jpg')";
        }
    }

    static expandMobileSidebar(e) {
        const sidebar = document.querySelector('#content .sidebar');
        sidebar.classList.add('maximized');

        const minimizeButton = document.createElement('button');
        minimizeButton.classList.add('toggle-menu');
        minimizeButton.classList.add('minimize');
        const icon = document.createElement('img');
        icon.src = '../src/media/down-carrot.svg';
        icon.style.transform = 'rotate(180deg)';
        minimizeButton.appendChild(icon);
        minimizeButton.onclick = UI.minimizeMobileSidebar;

        const sidebarContent = document.querySelector('#content .sidebar .content-box');
        sidebarContent.appendChild(minimizeButton);

        const maximizeButtons = document.querySelectorAll('.toggle-menu.maximize');
        maximizeButtons.forEach(btn => btn.remove());
    }

    static minimizeMobileSidebar(e) {
        const sidebar = document.querySelector('#content .sidebar');
        sidebar.classList.remove('maximized');

        const expandButton = document.querySelector('button.toggle-menu');
        expandButton.classList.remove('expanded');
        expandButton.style.height = 'auto';

        const maximizeButton = document.createElement('button');
        maximizeButton.classList.add('toggle-menu');
        maximizeButton.classList.add('maximize');
        const icon = document.createElement('img');
        icon.src = '../src/media/down-carrot.svg';
        maximizeButton.appendChild(icon);
        maximizeButton.onclick = UI.expandMobileSidebar;

        const form = document.querySelector('.sidebar .content-box form.search');
        form.insertAdjacentElement('afterend', maximizeButton);

        const minimizeButton = document.querySelector('.toggle-menu.minimize');
        minimizeButton.remove();
    }

    static saveLocation() {
        _index_js__WEBPACK_IMPORTED_MODULE_4__.savedLocations.saveLocation(_index_js__WEBPACK_IMPORTED_MODULE_4__.weatherData);
        Load.removeSavedCities();
        Load.insertSavedCities();
    }    

    static removeLocation(e) {
        const id = UI.getCityID(e);
        _index_js__WEBPACK_IMPORTED_MODULE_4__.savedLocations.removeLocation(id);
        Load.removeSavedCities();
        Load.insertSavedCities();
    }

    static clickSavedLocation(e) {
        const id = UI.getCityID(e);
        getWeather(_index_js__WEBPACK_IMPORTED_MODULE_4__.savedLocations.data[id]);
    }

    static getCityID(e) {
        let node = e.target;
        while (!node.getAttribute('saved-id')) {
            node = node.parentNode;
        }
        return node.getAttribute('saved-id');
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
/* harmony export */   savedLocations: () => (/* binding */ savedLocations),
/* harmony export */   weatherData: () => (/* binding */ weatherData)
/* harmony export */ });
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.css */ "./src/style/index.css");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ "./src/model.js");






const weatherData = new _model_js__WEBPACK_IMPORTED_MODULE_2__.WeatherData();
const savedLocations = new _model_js__WEBPACK_IMPORTED_MODULE_2__.SavedLocations();
savedLocations.getStorage();
console.log(savedLocations);

_controller_js__WEBPACK_IMPORTED_MODULE_1__.Load.defaultUI();

window.addEventListener('resize', () => {
    const mql = window.matchMedia('(max-width: 750px)');
    if (mql.matches) {
        document.querySelector('.sidebar .content-box').scrollTo(0,0);
    }
})






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
/* harmony export */   SavedLocations: () => (/* binding */ SavedLocations),
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
        const date = new Date(Format.hyphenate(string));
        return ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
    }
    
    static getDayNameShort(string) {
        const date = new Date(Format.hyphenate(string));
        return ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
    }
2
    static getDayNumber(string) {
        // string represting date must be in 'yyyy-MM-dd' format
        return string.split('-')[2].slice(0,2);
    }

    static getMonthName(string) {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][new Date(string).getMonth()];
    }

    static getDayNumberPrefix(string) {
        const number = new Date(Format.hyphenate(string)).getDate();
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

    static getDayNumberDD(string) {
        return Format.getDayNumber(string).toString();
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

    static hyphenate(string) {
        // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
        return string.split('-').join('/');
    }
}

class SavedLocations {
    constructor () {
        this.data = {};
    }

    saveLocation(weatherData) {
        const id = this.createID();
        const location = [`${weatherData.weather.US.location.city}`, `${weatherData.weather.US.location.region}, ${weatherData.weather.US.location.country}`];
        
        if (this.isUniqueLocation(location)) {
            this.data[id] = location;
            this.updateLocalStorage();
        } else {
            return false;
        }
    }

    removeLocation(id) {
        delete this.data[id];

        this.updateLocalStorage();
    }

    isUniqueLocation(location) {
        for (const key in this.data) {
            if (this.data[key][0] === location[0] && this.data[key][1] === location[1]) {
                return false;
            }
        }
        return true;
    }

    createID() {
        const id = createID();

        while (Object.keys(this.data).includes(id)) {
            id = createID();
        }

        return id;

        function createID() {
            const id = Math.floor(Math.random() * 8999 + 1000);
            return id.toString();
        }
    }

    updateLocalStorage() {
        localStorage.setItem('savedLocations', JSON.stringify(this.data));
    }

    getStorage() {
        if (localStorage.getItem('savedLocations')) {
            Object.assign(this.data, JSON.parse(localStorage.getItem('savedLocations')));
        } else {
            return;
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
                            'class': 'toggle-menu maximize',
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

    static savedCityItem(key, data) {
        return new Element({
            'tagname': 'li',
            'class': 'city-name',
            'children': [
                new Element({
                    'tagname': 'button',
                    'saved-ID': `${key}`,
                    'class': 'left-container',
                    'event-listeners':{'click': _controller_js__WEBPACK_IMPORTED_MODULE_0__.UI.clickSavedLocation},
                    'children': [
                        new Element({
                            'tagname': 'h3',
                            'text-content': `${data[key][0]}`,
                        }).build(),
                        new Element({
                            'tagname': 'p',
                            'class': 'region',
                            'text-content': `${data[key][1]}`,
                        }).build(),
                    ],
                }).build(),
                new Element({
                    'tagname': 'button',
                    'class': 'delete',
                    'saved-ID': `${key}`,
                    'children': [
                        new Element({
                            'tagname': 'img',
                            'class': 'delete',
                            'src': '../src/media/delete.svg',
                            'event-listeners':{'click':_controller_js__WEBPACK_IMPORTED_MODULE_0__.UI.removeLocation},
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
                new Element({
                    'tagname':'button',
                    'class':'save-city',
                    'text-content':'SAVE LOCATION',
                    'event-listeners':{'click':_controller_js__WEBPACK_IMPORTED_MODULE_0__.UI.saveLocation}
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
                    'text-content': `${_model_js__WEBPACK_IMPORTED_MODULE_2__.Format.getDayNameShort(data.date)} ${_model_js__WEBPACK_IMPORTED_MODULE_2__.Format.getDayNumberDD(data.date)}`,
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
module.exports = __webpack_require__.p + "b4eaa3648de99c4aec50.png";

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
module.exports = __webpack_require__.p + "a9ae60326252f4307ca3.png";

/***/ }),

/***/ "./src/media/apiIcons/day/260.png":
/*!****************************************!*\
  !*** ./src/media/apiIcons/day/260.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8f2ecce04f35df757fc4.png";

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
module.exports = __webpack_require__.p + "b31f33383a8b80cdea11.png";

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
module.exports = __webpack_require__.p + "3005c372427e501f3424.png";

/***/ }),

/***/ "./src/media/apiIcons/night/260.png":
/*!******************************************!*\
  !*** ./src/media/apiIcons/night/260.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "66c180ccba462e77d631.png";

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
module.exports = __webpack_require__.p + "91408324abecc98077c8.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDZ0I7QUFDSztBQUNkO0FBQ25HLDRDQUE0QywrSUFBd0Q7QUFDcEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwwQkFBMEIsMEZBQWlDO0FBQzNELDBCQUEwQiwrRkFBaUM7QUFDM0QseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Qsc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZGQUE2RixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxZQUFZLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNua0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly95Ly4vc3JjL3N0eWxlL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8veS8uL3NyYy9zdHlsZS9zcmMvcmVzcG9uc2l2ZS5jc3MiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3kvLi9zcmMvc3R5bGUvaW5kZXguY3NzPzljZjAiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL0FQSWtleS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL21lZGlhL2FwaUljb25zLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8veS8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly95L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9yZXNwb25zaXZlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9zcmMvbWVkaWEvYmFja2dyb3VuZC1pbWFnZTMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBtYWluIGNvbXBvbmVudHMgKi9cbiNjb250ZW50IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMjVweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcInNpZGViYXIgIGN1cnJlbnRcIlxuICAgICAgICBcInNpZGViYXIgLlwiXG4gICAgICAgIFwiZm9yZWNhc3QgZm9yZWNhc3RcIjtcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDAuOCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vc3JjL21lZGlhL25pZ2h0LWJhY2tncm91bmQuanBnJyk7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDEwMDBtcyBlYXNlLWluLW91dDtcbn1cbi5zaWRlYmFyIHtcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XG59XG4uY29udGVudC1ib3guY3VycmVudCB7XG4gICAgZ3JpZC1hcmVhOiBjdXJyZW50O1xufVxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IHtcbiAgICBncmlkLWFyZWE6IGZvcmVjYXN0O1xufVxuaW1nLmxvYWRpbmctZ2lmIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgei1pbmRleDogMTtcbn1cblxuLmNvbnRlbnQtYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTJlNDA7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjQ4N0U7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiNtYWluLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaW1nLmljb24ge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XG59XG5cbi8qIHNpZGViYXIgKi9cbi5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuLnNpZGViYXIgaW1nIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG59XG4uc2lkZWJhciAuY29udGVudC1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4uc2lkZWJhciBmb3JtLnNlYXJjaCAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc2lkZWJhciBmb3JtLnNlYXJjaCBpbnB1dCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNkM2QzZDM7XG59XG4uc2lkZWJhciBmb3JtLnNlYXJjaCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTlweDtcbiAgICByaWdodDogMjVweDtcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuLnNpZGViYXIgZm9ybS5zZWFyY2ggaW1nLnNlYXJjaC1pY29uOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjgpO1xufVxuLnNpZGViYXIgZm9ybS5zZWFyY2ggaW1nLnNlYXJjaC1pY29uOmFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKC42KTtcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoIHAuZXJyb3ItbWVzc2FnZSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoIHAuZXJyb3ItbWVzc2FnZS52aXNpYmxlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLnNpZGViYXIgYnV0dG9uLnRvZ2dsZS1tZW51IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zaWRlYmFyIC5zZXR0aW5ncy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNpZGViYXIgLnNldHRpbmdzLWNvbnRlbnQgLnRvZ2dsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uOmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiMwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xufVxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uLmNob3Nlbi1zZXR0aW5nIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjliYmZmODA7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDEwcHg7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgbGkgaW1nLmRlbGV0ZSB7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIHdpZHRoOiAxOXB4O1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGU6aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGU6YWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgYnV0dG9uLmxlZnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGJ1dHRvbi5sZWZ0LWNvbnRhaW5lcjpob3ZlciB7XG4gICAgLyogY29sb3I6ICNlMmUyZTI7ICovXG4gICAgY29sb3I6ICNBMUY5QTE7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgYnV0dG9uLmxlZnQtY29udGFpbmVyOmFjdGl2ZSB7XG4gICAgLyogY29sb3I6ICNjY2NjY2M7ICovXG4gICAgY29sb3I6ICM2Y2M3NmM7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgaDMge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBwLnJlZ2lvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vKiBjdXJyZW50IHdlYXRoZXIgKi9cbi5jb250ZW50LWJveC5jdXJyZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJjaXR5LXJlZ2lvbiB0aW1lLWRhdGVcIlxuICAgICAgICBcImNpdHktcmVnaW9uIC5cIlxuICAgICAgICBcInRlbXAgY29uZGl0aW9uXCJcbiAgICAgICAgXCJwcm9wZXJ0aWVzIHByb3BlcnRpZXNcIlxuICAgICAgICBcIi4gc2F2ZS1jaXR5XCJcbiAgICAgICAgICBcbn1cbi5jb250ZW50LWJveC5jdXJyZW50IGJ1dHRvbi5zYXZlLWNpdHkge1xuICAgIGdyaWQtYXJlYTogc2F2ZS1jaXR5O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ExRjlBMTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgbWF4LXdpZHRoOiAyMjVweDtcbn1cbiAgICAuY29udGVudC1ib3guY3VycmVudCBidXR0b24uc2F2ZS1jaXR5OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzczY2Y3MzsgXG4gICAgfVxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IGJ1dHRvbi5zYXZlLWNpdHk6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVhYjY1YTsgXG4gICAgfVxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNpdHktcmVnaW9uLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1hcmVhOiBjaXR5LXJlZ2lvbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5jaXR5IHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICAuY29udGVudC1ib3guY3VycmVudCAucmVnaW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbi5jb250ZW50LWJveC5jdXJyZW50IC50aW1lLWRhdGUtY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IHRpbWUtZGF0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbiAgICAuY29udGVudC1ib3guY3VycmVudCAudGltZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG4gICAgICAgIC5jb250ZW50LWJveC5jdXJyZW50IC50aW1lIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIH1cbiAgICAuY29udGVudC1ib3guY3VycmVudCAuZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4uY29udGVudC1ib3guY3VycmVudCAudGVtcCB7XG4gICAgZ3JpZC1hcmVhOiB0ZW1wO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbn1cbi5jb250ZW50LWJveC5jdXJyZW50IC5jb25kaXRpb24tY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IGNvbmRpdGlvbjtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5jb25kaXRpb24taWNvbiB7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgfVxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLndlYXRoZXItcHJvcGVydGllcyB7XG4gICAgZ3JpZC1hcmVhOiBwcm9wZXJ0aWVzO1xufVxuXG4vKiB3ZWF0aGVyLXByb3BlcnRpZXMgY29udGFpbmVyKi9cbi53ZWF0aGVyLXByb3BlcnRpZXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ud2VhdGhlci1wcm9wZXJ0aWVzIC53ZWF0aGVyLXByb3BlcnR5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xufVxuLndlYXRoZXItcHJvcGVydGllcyAud2VhdGhlci1wcm9wZXJ0eSBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ud2VhdGhlci1wcm9wZXJ0aWVzIC53ZWF0aGVyLXByb3BlcnR5IC5yaWdodC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuLndlYXRoZXItcHJvcGVydGllcyAucmlnaHQtY29udGVudCBwLnRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi8qIGZvcmVjYXN0IHByb3RvICovXG4uY29udGVudC1ib3guZm9yZWNhc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAyODVweDtcbiAgICBtYXgtd2lkdGg6IDE5MDBweDtcbn1cbi5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHdpZHRoOiAxMjVweDtcbn1cbi5jb250ZW50LWJveC5mb3JlY2FzdCBwLmNvbmRpdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLyogZm9yZWNhc3QgaG91cmx5ICovXG4uY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3VybHktZGF0ZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG4gICAgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuaG91cmx5LWRhdGUtY29udGFpbmVyIHAuZGF0ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuaG91cnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDVweDtcbiAgICB3aWR0aDogYXV0bztcbn1cbi5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmZvcmVjYXN0LWl0ZW0uaG91cmx5LWl0ZW0ge1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG59XG4uY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5jb25kaXRpb24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDExNXB4O1xufVxuXG4vKiBmb3JlY2FzdCBpdGVtIGRhaWx5ICovXG4uY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0uZGFpbHktaXRlbSB7XG4gICAgaGVpZ2h0OiA5NSU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBQ1Qs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QW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtJQUNJO1FBQ0ksZ0NBQWdDO1FBQ2hDLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO0lBQ3ZCO0FBQ0o7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCcuL3NyYy9yZXNldC5jc3MnKTtcXG5cXG4vKiBtYWluIGNvbXBvbmVudHMgKi9cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJzaWRlYmFyICBjdXJyZW50XFxcIlxcbiAgICAgICAgXFxcInNpZGViYXIgLlxcXCJcXG4gICAgICAgIFxcXCJmb3JlY2FzdCBmb3JlY2FzdFxcXCI7XFxuICAgIGZpbHRlcjogc2F0dXJhdGUoMC44KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9zcmMvbWVkaWEvYmFja2dyb3VuZC1pbWFnZTMuanBnJyk7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vc3JjL21lZGlhL25pZ2h0LWJhY2tncm91bmQuanBnJyk7ICovXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMTAwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG59XFxuLmNvbnRlbnQtYm94LmN1cnJlbnQge1xcbiAgICBncmlkLWFyZWE6IGN1cnJlbnQ7XFxufVxcbi5jb250ZW50LWJveC5mb3JlY2FzdCB7XFxuICAgIGdyaWQtYXJlYTogZm9yZWNhc3Q7XFxufVxcbmltZy5sb2FkaW5nLWdpZiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY29udGVudC1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTJlNDA7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjI0ODdFO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaW1nLmljb24ge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xcbn1cXG5cXG4vKiBzaWRlYmFyICovXFxuLnNpZGViYXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuLnNpZGViYXIgaW1nIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG59XFxuLnNpZGViYXIgLmNvbnRlbnQtYm94IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoICB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2lkZWJhciBmb3JtLnNlYXJjaCBpbnB1dCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjZDNkM2QzO1xcbn1cXG4uc2lkZWJhciBmb3JtLnNlYXJjaCBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTlweDtcXG4gICAgcmlnaHQ6IDI1cHg7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguOCk7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjYpO1xcbn1cXG4uc2lkZWJhciBmb3JtLnNlYXJjaCBwLmVycm9yLW1lc3NhZ2Uge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNpZGViYXIgZm9ybS5zZWFyY2ggcC5lcnJvci1tZXNzYWdlLnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4uc2lkZWJhciBidXR0b24udG9nZ2xlLW1lbnUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc2lkZWJhciAuc2V0dGluZ3MtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5zaWRlYmFyIC5zZXR0aW5ncy1jb250ZW50IC50b2dnbGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5zaWRlYmFyIC50b2dnbGUtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaWRlYmFyIC50b2dnbGUtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjojMDAwMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG4uc2lkZWJhciAudG9nZ2xlLWNvbnRhaW5lciBidXR0b246YWN0aXZlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiMwMDAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MDtcXG59XFxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uLmNob3Nlbi1zZXR0aW5nIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OWJiZmY4MDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgbGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBsaSBpbWcuZGVsZXRlIHtcXG4gICAgaGVpZ2h0OiAxOXB4O1xcbiAgICB3aWR0aDogMTlweDtcXG59XFxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBsaSBidXR0b24uZGVsZXRlOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBsaSBidXR0b24uZGVsZXRlOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcXG59XFxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGJ1dHRvbi5sZWZ0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBidXR0b24ubGVmdC1jb250YWluZXI6aG92ZXIge1xcbiAgICAvKiBjb2xvcjogI2UyZTJlMjsgKi9cXG4gICAgY29sb3I6ICNBMUY5QTE7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBidXR0b24ubGVmdC1jb250YWluZXI6YWN0aXZlIHtcXG4gICAgLyogY29sb3I6ICNjY2NjY2M7ICovXFxuICAgIGNvbG9yOiAjNmNjNzZjO1xcbn1cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgaDMge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBwLnJlZ2lvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLyogY3VycmVudCB3ZWF0aGVyICovXFxuLmNvbnRlbnQtYm94LmN1cnJlbnQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICAgIG1heC13aWR0aDogNzUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiY2l0eS1yZWdpb24gdGltZS1kYXRlXFxcIlxcbiAgICAgICAgXFxcImNpdHktcmVnaW9uIC5cXFwiXFxuICAgICAgICBcXFwidGVtcCBjb25kaXRpb25cXFwiXFxuICAgICAgICBcXFwicHJvcGVydGllcyBwcm9wZXJ0aWVzXFxcIlxcbiAgICAgICAgXFxcIi4gc2F2ZS1jaXR5XFxcIlxcbiAgICAgICAgICBcXG59XFxuLmNvbnRlbnQtYm94LmN1cnJlbnQgYnV0dG9uLnNhdmUtY2l0eSB7XFxuICAgIGdyaWQtYXJlYTogc2F2ZS1jaXR5O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ExRjlBMTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgbWF4LXdpZHRoOiAyMjVweDtcXG59XFxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IGJ1dHRvbi5zYXZlLWNpdHk6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzczY2Y3MzsgXFxuICAgIH1cXG4gICAgLmNvbnRlbnQtYm94LmN1cnJlbnQgYnV0dG9uLnNhdmUtY2l0eTphY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVhYjY1YTsgXFxuICAgIH1cXG4uY29udGVudC1ib3guY3VycmVudCAuY2l0eS1yZWdpb24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBjaXR5LXJlZ2lvbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5jaXR5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgfVxcbiAgICAuY29udGVudC1ib3guY3VycmVudCAucmVnaW9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbi5jb250ZW50LWJveC5jdXJyZW50IC50aW1lLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiB0aW1lLWRhdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4gICAgLmNvbnRlbnQtYm94LmN1cnJlbnQgLnRpbWUge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuICAgICAgICAuY29udGVudC1ib3guY3VycmVudCAudGltZSBzcGFuIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICAgICAgICB9XFxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5kYXRlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcbi5jb250ZW50LWJveC5jdXJyZW50IC50ZW1wIHtcXG4gICAgZ3JpZC1hcmVhOiB0ZW1wO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNvbmRpdGlvbi1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IGNvbmRpdGlvbjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5jb25kaXRpb24taWNvbiB7XFxuICAgICAgICBoZWlnaHQ6IDY1cHg7XFxuICAgICAgICB3aWR0aDogNjVweDtcXG4gICAgfVxcbi5jb250ZW50LWJveC5jdXJyZW50IC53ZWF0aGVyLXByb3BlcnRpZXMge1xcbiAgICBncmlkLWFyZWE6IHByb3BlcnRpZXM7XFxufVxcblxcbi8qIHdlYXRoZXItcHJvcGVydGllcyBjb250YWluZXIqL1xcbi53ZWF0aGVyLXByb3BlcnRpZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi53ZWF0aGVyLXByb3BlcnRpZXMgLndlYXRoZXItcHJvcGVydHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuLndlYXRoZXItcHJvcGVydGllcyAud2VhdGhlci1wcm9wZXJ0eSBpbWcge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi53ZWF0aGVyLXByb3BlcnRpZXMgLndlYXRoZXItcHJvcGVydHkgLnJpZ2h0LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcbi53ZWF0aGVyLXByb3BlcnRpZXMgLnJpZ2h0LWNvbnRlbnQgcC50ZXh0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLyogZm9yZWNhc3QgcHJvdG8gKi9cXG4uY29udGVudC1ib3guZm9yZWNhc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGhlaWdodDogMjg1cHg7XFxuICAgIG1heC13aWR0aDogMTkwMHB4O1xcbn1cXG4uY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB3aWR0aDogMTI1cHg7XFxufVxcbi5jb250ZW50LWJveC5mb3JlY2FzdCBwLmNvbmRpdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4vKiBmb3JlY2FzdCBob3VybHkgKi9cXG4uY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3VybHktZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbiAgICAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3VybHktZGF0ZS1jb250YWluZXIgcC5kYXRlIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4uY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3Vycy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuZm9yZWNhc3QtaXRlbS5ob3VybHktaXRlbSB7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbi5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmNvbmRpdGlvbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMTVweDtcXG59XFxuXFxuLyogZm9yZWNhc3QgaXRlbSBkYWlseSAqL1xcbi5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbS5kYWlseS1pdGVtIHtcXG4gICAgaGVpZ2h0OiA5NSU7XFxufVxcblxcbkBpbXBvcnQgdXJsKCcuL3NyYy9yZXNwb25zaXZlLmNzcycpO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZmFtaWx5PVJvYm90byZmYW1pbHk9Um9ib3RvK01vbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tYWluLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbn1cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5saSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuaW5wdXQge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ1ODk0OyBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYzNDVmO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3NyYy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZmYW1pbHk9Um9ib3RvJmZhbWlseT1Sb2JvdG8rTW9ubyZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbn1cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbmlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ1ODk0OyBcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MzQ1ZjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgIGJvZHkgI2NvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgZ2FwOiAyNXB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCJzaWRlYmFyXCJcbiAgICAgICAgICAgIFwiY3VycmVudFwiXG4gICAgICAgICAgICBcImZvcmVjYXN0XCI7XG4gICAgfVxuICAgICNjb250ZW50IC5zaWRlYmFyIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNDJweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgI2NvbnRlbnQgLnNpZGViYXIubWF4aW1pemVkIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IGZvcm0ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgICNjb250ZW50IC5zaWRlYmFyIC5jb250ZW50LWJveCBidXR0b24udG9nZ2xlLW1lbnUge1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggYnV0dG9uLnRvZ2dsZS1tZW51OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1MDtcbiAgICAgICAgfVxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggYnV0dG9uLnRvZ2dsZS1tZW51OmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMzA7XG4gICAgICAgIH1cbiAgICAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCB7XG4gICAgICAgIGdyaWQtYXJlYTogY3VycmVudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCB7XG4gICAgICAgIGdyaWQtYXJlYTogZm9yZWNhc3Q7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC8qIGRhaWx5IGZvcmVjYXN0IGl0ZW0gKi9cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGdhcDogMjVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSA+ICoge1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSBoMyxcbiAgICAgICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtIC5oaWdoLWxvdy1jb250YWluZXIsXG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSAuaG91cmx5LXRlbXAge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtIGltZy5jb25kaXRpb24uaWNvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgfVxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gcC5jb25kaXRpb24ge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd29yZC13cmFwOiBub3JtYWw7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICBcbiAgICAvKiBob3VybHkgZm9yZWNhc3QgaXRlbSAqL1xuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuaG91cmx5LWRhdGUtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmhvdXJzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5mb3JlY2FzdC1pdGVtLmhvdXJseS1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgYm9keSAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgICBib2R5ICNjb250ZW50IC5jb250ZW50LWJveC5jdXJyZW50ID4gKiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGJvZHkgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNpdHktcmVnaW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDVweDtcbiAgICB9XG5cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0sXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuZm9yZWNhc3QtaXRlbS5ob3VybHktaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjgwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3Vycy1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmZvcmVjYXN0LWl0ZW0uaG91cmx5LWl0ZW0ge1xuICAgICAgICB3aWR0aDogODUlO1xuICAgIH1cbiAgICAgICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtLmxhc3QtaXRlbSxcbiAgICAgICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuZm9yZWNhc3QtaXRlbS5ob3VybHktaXRlbS5sYXN0LWl0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gaDMsXG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSAuaGlnaC1sb3ctY29udGFpbmVyLFxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gLmhvdXJseS10ZW1wIHtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3JjL3Jlc3BvbnNpdmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsU0FBUztRQUNULDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakM7OztzQkFHYztJQUNsQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO1FBQ0k7WUFDSSxnQkFBZ0I7UUFDcEI7UUFDQTtZQUNJLGtCQUFrQjtRQUN0QjtRQUNBO1lBQ0ksWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLDZCQUE2QjtRQUNqQztRQUNBO1lBQ0ksMkJBQTJCO1FBQy9CO1FBQ0E7WUFDSSwyQkFBMkI7UUFDL0I7SUFDSjtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFNBQVM7UUFDVCxhQUFhO1FBQ2IsWUFBWTtJQUNoQjs7SUFFQSx3QkFBd0I7SUFDeEI7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixTQUFTO1FBQ1QsV0FBVztRQUNYLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7UUFDSTs7O1lBR0ksWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLDJCQUEyQjtRQUMvQjtRQUNBO1lBQ0ksWUFBWTtZQUNaLFdBQVc7UUFDZjtRQUNBO1lBQ0ksWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsWUFBWTtRQUNoQjs7SUFFSix5QkFBeUI7SUFDekI7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztJQUNiO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsUUFBUTtJQUNaOztJQUVBOztRQUVJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFFBQVE7UUFDUixrQ0FBa0M7UUFDbEMsb0JBQW9CO1FBQ3BCLFlBQVk7SUFDaEI7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLFVBQVU7SUFDZDtRQUNJOztZQUVJLG1CQUFtQjtRQUN2QjtRQUNBOzs7WUFHSSxXQUFXO1FBQ2Y7QUFDUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICBib2R5ICNjb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgZ2FwOiAyNXB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJzaWRlYmFyXFxcIlxcbiAgICAgICAgICAgIFxcXCJjdXJyZW50XFxcIlxcbiAgICAgICAgICAgIFxcXCJmb3JlY2FzdFxcXCI7XFxuICAgIH1cXG4gICAgI2NvbnRlbnQgLnNpZGViYXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDE0MnB4O1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcbiAgICAjY29udGVudCAuc2lkZWJhci5tYXhpbWl6ZWQge1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3gge1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggZm9ybSB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IGJ1dHRvbi50b2dnbGUtbWVudSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggYnV0dG9uLnRvZ2dsZS1tZW51OmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTA7XFxuICAgICAgICB9XFxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggYnV0dG9uLnRvZ2dsZS1tZW51OmFjdGl2ZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDMwO1xcbiAgICAgICAgfVxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCB7XFxuICAgICAgICBncmlkLWFyZWE6IGN1cnJlbnQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3Qge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBmb3JlY2FzdDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjVweDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAvKiBkYWlseSBmb3JlY2FzdCBpdGVtICovXFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdhcDogMjVweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgfVxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gPiAqIHtcXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB9XFxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gaDMsXFxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gLmhpZ2gtbG93LWNvbnRhaW5lcixcXG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSAuaG91cmx5LXRlbXAge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDA7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIH1cXG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSBpbWcuY29uZGl0aW9uLmljb24ge1xcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcXG4gICAgICAgICAgICB3aWR0aDogNjVweDtcXG4gICAgICAgIH1cXG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSBwLmNvbmRpdGlvbiB7XFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAvKiBob3VybHkgZm9yZWNhc3QgaXRlbSAqL1xcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuaG91cmx5LWRhdGUtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmhvdXJzLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmZvcmVjYXN0LWl0ZW0uaG91cmx5LWl0ZW0ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgYm9keSAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG4gICAgYm9keSAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCA+ICoge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIGJvZHkgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNpdHktcmVnaW9uLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtLFxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5mb3JlY2FzdC1pdGVtLmhvdXJseS1pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY4MDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmhvdXJzLWNvbnRhaW5lciB7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgIH1cXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuZm9yZWNhc3QtaXRlbS5ob3VybHktaXRlbSB7XFxuICAgICAgICB3aWR0aDogODUlO1xcbiAgICB9XFxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0ubGFzdC1pdGVtLFxcbiAgICAgICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuZm9yZWNhc3QtaXRlbS5ob3VybHktaXRlbS5sYXN0LWl0ZW0ge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gaDMsXFxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gLmhpZ2gtbG93LWNvbnRhaW5lcixcXG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSAuaG91cmx5LXRlbXAge1xcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBBUElrZXkgPSAnNjg3NzVkZmJlNGM2NGI1NGE5MDE1MzIwMjMyNjA2JzsiLCJleHBvcnQgY29uc3QgaWNvbkltcG9ydHMgPSB7fTtcbmNvbnN0IGRheUljb25zID0gW1wiZGF5LzExMy5wbmdcIixcImRheS8xNDMucG5nXCIsXCJkYXkvMTg1LnBuZ1wiLFwiZGF5LzI0OC5wbmdcIixcImRheS8yODEucG5nXCIsXCJkYXkvMjk5LnBuZ1wiLFwiZGF5LzMxMS5wbmdcIixcImRheS8zMjMucG5nXCIsXCJkYXkvMzM1LnBuZ1wiLFwiZGF5LzM1Ni5wbmdcIixcImRheS8zNjgucG5nXCIsXCJkYXkvMzg2LnBuZ1wiLFwiZGF5LzExNi5wbmdcIixcImRheS8xNzYucG5nXCIsXCJkYXkvMjAwLnBuZ1wiLFwiZGF5LzI2MC5wbmdcIixcImRheS8yODQucG5nXCIsXCJkYXkvMzAyLnBuZ1wiLFwiZGF5LzMxNC5wbmdcIixcImRheS8zMjYucG5nXCIsXCJkYXkvMzM4LnBuZ1wiLFwiZGF5LzM1OS5wbmdcIixcImRheS8zNzEucG5nXCIsXCJkYXkvMzg5LnBuZ1wiLFwiZGF5LzExOS5wbmdcIixcImRheS8xNzkucG5nXCIsXCJkYXkvMjI3LnBuZ1wiLFwiZGF5LzI2My5wbmdcIixcImRheS8yOTMucG5nXCIsXCJkYXkvMzA1LnBuZ1wiLFwiZGF5LzMxNy5wbmdcIixcImRheS8zMjkucG5nXCIsXCJkYXkvMzUwLnBuZ1wiLFwiZGF5LzM2Mi5wbmdcIixcImRheS8zNzQucG5nXCIsXCJkYXkvMzkyLnBuZ1wiLFwiZGF5LzEyMi5wbmdcIixcImRheS8xODIucG5nXCIsXCJkYXkvMjMwLnBuZ1wiLFwiZGF5LzI2Ni5wbmdcIixcImRheS8yOTYucG5nXCIsXCJkYXkvMzA4LnBuZ1wiLFwiZGF5LzMyMC5wbmdcIixcImRheS8zMzIucG5nXCIsXCJkYXkvMzUzLnBuZ1wiLFwiZGF5LzM2NS5wbmdcIixcImRheS8zNzcucG5nXCIsXCJkYXkvMzk1LnBuZ1wiXVxuY29uc3QgbmlnaHRJY29ucyA9IFtcIm5pZ2h0LzExMy5wbmdcIixcIm5pZ2h0LzE0My5wbmdcIixcIm5pZ2h0LzE4NS5wbmdcIixcIm5pZ2h0LzI0OC5wbmdcIixcIm5pZ2h0LzI4MS5wbmdcIixcIm5pZ2h0LzI5OS5wbmdcIixcIm5pZ2h0LzMxMS5wbmdcIixcIm5pZ2h0LzMyMy5wbmdcIixcIm5pZ2h0LzMzNS5wbmdcIixcIm5pZ2h0LzM1Ni5wbmdcIixcIm5pZ2h0LzM2OC5wbmdcIixcIm5pZ2h0LzM4Ni5wbmdcIixcIm5pZ2h0LzExNi5wbmdcIixcIm5pZ2h0LzE3Ni5wbmdcIixcIm5pZ2h0LzIwMC5wbmdcIixcIm5pZ2h0LzI2MC5wbmdcIixcIm5pZ2h0LzI4NC5wbmdcIixcIm5pZ2h0LzMwMi5wbmdcIixcIm5pZ2h0LzMxNC5wbmdcIixcIm5pZ2h0LzMyNi5wbmdcIixcIm5pZ2h0LzMzOC5wbmdcIixcIm5pZ2h0LzM1OS5wbmdcIixcIm5pZ2h0LzM3MS5wbmdcIixcIm5pZ2h0LzM4OS5wbmdcIixcIm5pZ2h0LzExOS5wbmdcIixcIm5pZ2h0LzE3OS5wbmdcIixcIm5pZ2h0LzIyNy5wbmdcIixcIm5pZ2h0LzI2My5wbmdcIixcIm5pZ2h0LzI5My5wbmdcIixcIm5pZ2h0LzMwNS5wbmdcIixcIm5pZ2h0LzMxNy5wbmdcIixcIm5pZ2h0LzMyOS5wbmdcIixcIm5pZ2h0LzM1MC5wbmdcIixcIm5pZ2h0LzM2Mi5wbmdcIixcIm5pZ2h0LzM3NC5wbmdcIixcIm5pZ2h0LzM5Mi5wbmdcIixcIm5pZ2h0LzEyMi5wbmdcIixcIm5pZ2h0LzE4Mi5wbmdcIixcIm5pZ2h0LzIzMC5wbmdcIixcIm5pZ2h0LzI2Ni5wbmdcIixcIm5pZ2h0LzI5Ni5wbmdcIixcIm5pZ2h0LzMwOC5wbmdcIixcIm5pZ2h0LzMyMC5wbmdcIixcIm5pZ2h0LzMzMi5wbmdcIixcIm5pZ2h0LzM1My5wbmdcIixcIm5pZ2h0LzM2NS5wbmdcIixcIm5pZ2h0LzM3Ny5wbmdcIixcIm5pZ2h0LzM5NS5wbmdcIl07XG4vLyBpbXBvcnQgYWxsIGljb25zXG5bZGF5SWNvbnMsIG5pZ2h0SWNvbnNdLmZsYXQoKS5mb3JFYWNoKGljb24gPT4gaWNvbkltcG9ydHNbaWNvbl0gPSByZXF1aXJlKGAuL21lZGlhL2FwaUljb25zLyR7aWNvbn1gKSk7XG5cbmltcG9ydCB7IEFQSWtleSB9IGZyb20gXCIuL0FQSWtleVwiO1xuaW1wb3J0IGxvYWRpbmdHaWYgZnJvbSAnLi9tZWRpYS9sb2FkaW5nLmdpZidcbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnLi92aWV3LmpzJyBcbmltcG9ydCB7IEZvcm1hdCB9IGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IHsgd2VhdGhlckRhdGEgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IHNhdmVkTG9jYXRpb25zIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbi8vIERPTkUgV0lUSCBJTVBPUlRTXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgTG9hZC5pbnNlcnRMb2FkaW5nR0lGKCk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSWtleX0mcT0ke2xvY2F0aW9ufSZkYXlzPTcmYXFpPW5vJmFsZXJ0cz15ZXNgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJyB1bmtub3duIGVycm9yIGhhcyBvY2N1cmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlUmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNvbHZlKGRhdGEpIHtcbiAgICBMb2FkLnJlbW92ZUxvYWRpbmdHSUYoKTtcbiAgICBMb2FkLnJlbW92ZUVycm9yTWVzc2FnZSgpO1xuICAgIElucHV0LmhhbmRsZURhdGEoZGF0YSk7XG4gICAgVUkudG9nZ2xlQmFja2dyb3VuZEltYWdlKGRhdGEpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnIpIHtcbiAgICBMb2FkLnNob3dFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICBMb2FkLnJlbW92ZUxvYWRpbmdHSUYoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNldHRpbmdzID0ge1xuICAgIG1lYXN1cmVtZW50OiAnVVMnLCAvLyAnVVMnIG9yICdtZXRyaWMnXG4gICAgZm9yZWNhc3Q6ICdob3VybHknLCAvLyAnaG91cmx5JyBvciAnZGFpbHknXG59XG5cbmV4cG9ydCBjbGFzcyBQb3B1bGF0ZSB7XG4gICAgc3RhdGljIGRhaWx5TWV0cmljKCkge1xuICAgICAgICBMb2FkLnJlbW92ZVdlYXRoZXIoKTtcbiAgICAgICAgTG9hZC5jdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF0YS53ZWF0aGVyLm1ldHJpYyk7XG4gICAgICAgIExvYWQuZm9yZWNhc3REYWlseSh3ZWF0aGVyRGF0YS53ZWF0aGVyLm1ldHJpYylcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGRhaWx5VVMoKSB7XG4gICAgICAgIExvYWQucmVtb3ZlV2VhdGhlcigpO1xuICAgICAgICBMb2FkLmN1cnJlbnRXZWF0aGVyKHdlYXRoZXJEYXRhLndlYXRoZXIuVVMpO1xuICAgICAgICBMb2FkLmZvcmVjYXN0RGFpbHkod2VhdGhlckRhdGEud2VhdGhlci5VUyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhvdXJseU1ldHJpYygpIHtcbiAgICAgICAgTG9hZC5yZW1vdmVXZWF0aGVyKCk7XG4gICAgICAgIExvYWQuY3VycmVudFdlYXRoZXIod2VhdGhlckRhdGEud2VhdGhlci5tZXRyaWMpO1xuICAgICAgICBMb2FkLmZvcmVjYXN0SG91cmx5KHdlYXRoZXJEYXRhLndlYXRoZXIubWV0cmljKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaG91cmx5VVMoKSB7XG4gICAgICAgIExvYWQucmVtb3ZlV2VhdGhlcigpO1xuICAgICAgICBMb2FkLmN1cnJlbnRXZWF0aGVyKHdlYXRoZXJEYXRhLndlYXRoZXIuVVMpO1xuICAgICAgICBMb2FkLmZvcmVjYXN0SG91cmx5KHdlYXRoZXJEYXRhLndlYXRoZXIuVVMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGlja1VTKGUpIHtcbiAgICAgICAgU2V0dGluZ3MubWVhc3VyZW1lbnQgPSAnVVMnO1xuICAgICAgICBVSS51cGRhdGVNZWFzdXJlbWVudEJ1dHRvbnMoZSk7XG5cbiAgICAgICAgaWYgKHdlYXRoZXJEYXRhLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5mb3JlY2FzdCA9PT0gJ2hvdXJseScpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5ob3VybHlVUygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5mb3JlY2FzdCA9PT0gJ2RhaWx5Jykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmRhaWx5VVMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2xpY2tNZXRyaWMoZSkge1xuICAgICAgICBTZXR0aW5ncy5tZWFzdXJlbWVudCA9ICdtZXRyaWMnO1xuICAgICAgICBVSS51cGRhdGVNZWFzdXJlbWVudEJ1dHRvbnMoZSk7XG5cbiAgICAgICAgaWYgKHdlYXRoZXJEYXRhLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKFNldHRpbmdzLmZvcmVjYXN0ID09PSAnaG91cmx5Jykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmhvdXJseU1ldHJpYygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5mb3JlY2FzdCA9PT0gJ2RhaWx5Jykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmRhaWx5TWV0cmljKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWNrRGFpbHkoZSkge1xuICAgICAgICBTZXR0aW5ncy5mb3JlY2FzdCA9ICdkYWlseSc7XG4gICAgICAgIFVJLnVwZGF0ZUZvcmVjYXN0QnV0dG9ucyhlKTtcblxuICAgICAgICBpZiAod2VhdGhlckRhdGEuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MubWVhc3VyZW1lbnQgPT09ICdVUycpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5kYWlseVVTKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFNldHRpbmdzLm1lYXN1cmVtZW50ID09PSAnbWV0cmljJykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmRhaWx5TWV0cmljKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWNrSG91cmx5KGUpIHtcbiAgICAgICAgU2V0dGluZ3MuZm9yZWNhc3QgPSAnaG91cmx5JztcbiAgICAgICAgVUkudXBkYXRlRm9yZWNhc3RCdXR0b25zKGUpO1xuXG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5tZWFzdXJlbWVudCA9PT0gJ1VTJykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmhvdXJseVVTKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFNldHRpbmdzLm1lYXN1cmVtZW50ID09PSAnbWV0cmljJykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmhvdXJseU1ldHJpYygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWQge1xuICAgIHN0YXRpYyBkZWZhdWx0VUkoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQoQnVpbGQuc2lkZWJhcigpKTtcbiAgICAgICAgTG9hZC5pbnNlcnRTYXZlZENpdGllcygpO1xuICAgICAgICBnZXRXZWF0aGVyKCcxMDAwMScpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVXZWF0aGVyKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm94LmN1cnJlbnQnKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3guZm9yZWNhc3QnKTtcblxuICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgICAgY3VycmVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9yZWNhc3QpIHtcbiAgICAgICAgICAgIGZvcmVjYXN0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGluc2VydExvYWRpbmdHSUYoKSB7XG4gICAgICAgIGNvbnN0IGdpZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBnaWYuY2xhc3NMaXN0LmFkZCgnbG9hZGluZy1naWYnKTtcbiAgICAgICAgZ2lmLnNyYyA9IGxvYWRpbmdHaWY7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQoZ2lmKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlTG9hZGluZ0dJRigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmxvYWRpbmctZ2lmJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGN1cnJlbnRXZWF0aGVyKGRhdGEpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChCdWlsZC5jdXJyZW50V2VhdGhlcihkYXRhKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmVjYXN0RGFpbHkoZGF0YSkge1xuICAgICAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IEJ1aWxkLmZvcmVjYXN0Q29udGFpbmVyKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAvLyBpZiAoaSA9PT0gNikgZm9yIG1vYmlsZSBzdHlsZVxuICAgICAgICAgICAgaWYgKGkgPT09IDYpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0SXRlbSA9IEJ1aWxkLmZvcmVjYXN0SXRlbURhaWx5KGRhdGEuZGFpbHlbaV0pO1xuICAgICAgICAgICAgICAgIGxhc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2xhc3QtaXRlbScpO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhc3RJdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoQnVpbGQuZm9yZWNhc3RJdGVtRGFpbHkoZGF0YS5kYWlseVtpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChmb3JlY2FzdENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmVjYXN0SG91cmx5KGRhdGEpIHtcbiAgICAgICAgLy8gZ2V0cyBleGFjdGx5IDI0IGhvdXJzIG9mIGZvcmVjYXN0IGRhdGEgc3BsaXQgaW50byBob3Vycywgc28gZGF0YSBuZWVkcyB0byBiZSBncmFiYmVkIGZyb20gbXVsdGlwbGUgZGF5c1xuICAgICAgICAvLyBnZXQgbnVtYmVyIHZhbHVlIGluIDI0IGhyIHRpbWUgcmVwcmVzdGluZyBjdXJyZW50IHRpbWVcbiAgICAgICAgY29uc3QgY3VycmVudEhvdXIgPSBOdW1iZXIoRm9ybWF0LmdldEhvdXIyNEhSKGRhdGEubG9jYXRpb24ubG9jYWxUaW1lKSk7XG4gICAgICAgIC8vIGdldCB0aGUgaG91cnMgbGVmdCBpbiBjdXJyZW50IGRheSdzIGhvdXJseSBmb3JlY2FzdFxuICAgICAgICBjb25zdCBjdXJyZW50RGF5SG91cnMgPSBkYXRhLmhvdXJseVswXS5zbGljZShjdXJyZW50SG91cik7XG4gICAgICAgIC8vIGdldCB0aGUgcmVtYWluaW5nIGhvdXJzIG5lZWRlZCB0byBlcXVhbCAyNCB0b3RhbCBob3VycyBmcm9tIHRoZSBuZXh0IGRheSdzIGhvdXJseSBmb3JlY2FzdFxuICAgICAgICBjb25zdCBuZXh0RGF5SG91cnMgPSBkYXRhLmhvdXJseVsxXS5zbGljZSgwLCBkYXRhLmhvdXJseVsxXS5sZW5ndGggLSBjdXJyZW50RGF5SG91cnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGZvcmVjYXN0IGNvbnRhaW5lciBjb250YWlucyAyIG1haW4gY29udGFpbmVycyBmb3IgZWFjaCBkYXlcbiAgICAgICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBCdWlsZC5mb3JlY2FzdENvbnRhaW5lcigpO1xuICAgICAgICBcbiAgICAgICAgLy8gaW5zZXJ0IGRhdGEgZm9yIGVhY2ggaG91ciBvZiBkYXkgb25lIGludG8gZGF5IG9uZSdzIGNvbnRhaW5lciBhbmQgYWRkIGRheSBvbmUncyBjb250YWluZXIgdG8gdGhlIGZvcmVjYXN0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBkYXlPbmVIb3VybHlEYXRlQ29udGFpbmVyID0gQnVpbGQuaG91cmx5RGF0ZUNvbnRhaW5lcihkYXRhLmRhaWx5WzBdKVxuICAgICAgICBjb25zdCBkYXlPbmVDb250ZW50ID0gY3JlYXRlSG91cnNDb250YWluZXIoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50RGF5SG91cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09PSBjdXJyZW50RGF5SG91cnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJdGVtID0gQnVpbGQuZm9yZWNhc3RJdGVtSG91cmx5KGN1cnJlbnREYXlIb3Vyc1tpXSk7XG4gICAgICAgICAgICAgICAgbGFzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbGFzdC1pdGVtJyk7XG4gICAgICAgICAgICAgICAgZGF5T25lQ29udGVudC5hcHBlbmRDaGlsZChsYXN0SXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRheU9uZUNvbnRlbnQuYXBwZW5kQ2hpbGQoQnVpbGQuZm9yZWNhc3RJdGVtSG91cmx5KGN1cnJlbnREYXlIb3Vyc1tpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF5T25lSG91cmx5RGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlPbmVDb250ZW50KTtcbiAgICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5T25lSG91cmx5RGF0ZUNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gcmVwZWF0IGZvciBkYXkgdHdvIElGIHRoZXJlIGFyZW4ndCBhbHJlYWR5IDI0IGhvdXJzIGluIGRheSAxXG4gICAgICAgIGlmIChjdXJyZW50RGF5SG91cnMubGVuZ3RoICE9PSAyNCkge1xuICAgICAgICAgICAgY29uc3QgZGF5VHdvSG91cmx5RGF0ZUNvbnRhaW5lciA9IEJ1aWxkLmhvdXJseURhdGVDb250YWluZXIoZGF0YS5kYWlseVsxXSk7XG4gICAgICAgICAgICBjb25zdCBkYXlUd29Db250ZW50ID0gY3JlYXRlSG91cnNDb250YWluZXIoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV4dERheUhvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IG5leHREYXlIb3Vycy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJdGVtID0gQnVpbGQuZm9yZWNhc3RJdGVtSG91cmx5KG5leHREYXlIb3Vyc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2xhc3QtaXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBkYXlUd29Db250ZW50LmFwcGVuZENoaWxkKGxhc3RJdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXlUd29Db250ZW50LmFwcGVuZENoaWxkKEJ1aWxkLmZvcmVjYXN0SXRlbUhvdXJseShuZXh0RGF5SG91cnNbaV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXlUd29Ib3VybHlEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheVR3b0NvbnRlbnQpO1xuICAgICAgICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5VHdvSG91cmx5RGF0ZUNvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgdGhlIGhvdXJseSBjbGFzcyB0byB0aGUgZm9yZWNhc3QgY29udGFpbmVyIHRvIHNlcGFyYXRlIHN0eWxpbmcgZm9yIGhvdXJseSB2cyBkYWlseSBmb3JlY2FzdFxuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3VybHknKTtcblxuICAgICAgICAvLyBpbnNlcnQgZXZlcnl0aGluZyBpbnRvIHRoZSBkb2N1bWVudFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGZvcmVjYXN0Q29udGFpbmVyKTtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVIb3Vyc0NvbnRhaW5lcigpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBpbnNlcnRTYXZlZENpdGllcygpIHtcbiAgICAgICAgY29uc3QgY2l0aWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwuc2F2ZWQtY2l0aWVzJyk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNhdmVkTG9jYXRpb25zLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNpdHkgPSBCdWlsZC5zYXZlZENpdHlJdGVtKGtleSwgc2F2ZWRMb2NhdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBjaXRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlU2F2ZWRDaXRpZXMoKSB7XG4gICAgICAgIGNvbnN0IGNpdGllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsLnNhdmVkLWNpdGllcycpO1xuICAgICAgICB3aGlsZShjaXRpZXNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgY2l0aWVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNpdGllc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBzaG93RXJyb3JNZXNzYWdlKGVycikge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnNlYXJjaCBwLmVycm9yLW1lc3NhZ2UnKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gZXJyLm1lc3NhZ2U7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZUVycm9yTWVzc2FnZSgpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5zZWFyY2ggcC5lcnJvci1tZXNzYWdlJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5wdXQge1xuICAgIHN0YXRpYyBzdWJtaXRMb2NhdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3NlYXJjaC1sb2NhdGlvbicpO1xuXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBpbnB1dC52YWx1ZS50cmltRW5kKCk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBnZXRXZWF0aGVyKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVEYXRhKGRhdGEpIHtcbiAgICAgICAgd2VhdGhlckRhdGEuc2V0RGF0YShkYXRhKTtcblxuICAgICAgICBpZiAoU2V0dGluZ3MubWVhc3VyZW1lbnQgPT09ICdVUycpIHtcbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5mb3JlY2FzdCA9PT0gJ2RhaWx5Jykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmRhaWx5VVMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdob3VybHknKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuaG91cmx5VVMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU2V0dGluZ3MubWVhc3VyZW1lbnQgPT09ICdtZXRyaWMnKSB7XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdkYWlseScpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5kYWlseU1ldHJpYygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5mb3JlY2FzdCA9PT0gJ2hvdXJseScpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5ob3VybHlNZXRyaWMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVSSB7XG4gICAgc3RhdGljIHVwZGF0ZU1lYXN1cmVtZW50QnV0dG9ucyhlKSB7XG4gICAgICAgIGNvbnN0IFVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLnNldHRpbmdzLnVzLW1lYXN1cmVtZW50Jyk7XG4gICAgICAgIGNvbnN0IG1ldHJpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5zZXR0aW5ncy5tZXRyaWMtbWVhc3VyZW1lbnQnKTtcbiAgICAgICAgW1VTLCBtZXRyaWNdLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tc2V0dGluZycpKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXNldHRpbmcnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlRm9yZWNhc3RCdXR0b25zKGUpIHtcbiAgICAgICAgY29uc3QgZGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uc2V0dGluZ3MuZGFpbHktZm9yZWNhc3QnKTtcbiAgICAgICAgY29uc3QgaG91cmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLnNldHRpbmdzLmhvdXJseS1mb3JlY2FzdCcpO1xuICAgICAgICBbZGFpbHksIGhvdXJseV0uZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1zZXR0aW5nJykpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tc2V0dGluZycpO1xuICAgIH1cblxuICAgIHN0YXRpYyB0b2dnbGVCYWNrZ3JvdW5kSW1hZ2UoZGF0YSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbi5pbmNsdWRlcygnL25pZ2h0LycpKSB7XG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvbWVkaWEvbmlnaHQtYmFja2dyb3VuZC5qcGcnKVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvbWVkaWEvYmFja2dyb3VuZC1pbWFnZTMuanBnJylcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBleHBhbmRNb2JpbGVTaWRlYmFyKGUpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50IC5zaWRlYmFyJyk7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnbWF4aW1pemVkJyk7XG5cbiAgICAgICAgY29uc3QgbWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbWluaW1pemVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLW1lbnUnKTtcbiAgICAgICAgbWluaW1pemVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWluaW1pemUnKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpY29uLnNyYyA9ICcuLi9zcmMvbWVkaWEvZG93bi1jYXJyb3Quc3ZnJztcbiAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDE4MGRlZyknO1xuICAgICAgICBtaW5pbWl6ZUJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgbWluaW1pemVCdXR0b24ub25jbGljayA9IFVJLm1pbmltaXplTW9iaWxlU2lkZWJhcjtcblxuICAgICAgICBjb25zdCBzaWRlYmFyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50IC5zaWRlYmFyIC5jb250ZW50LWJveCcpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChtaW5pbWl6ZUJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgbWF4aW1pemVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1tZW51Lm1heGltaXplJyk7XG4gICAgICAgIG1heGltaXplQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiBidG4ucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBtaW5pbWl6ZU1vYmlsZVNpZGViYXIoZSkge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQgLnNpZGViYXInKTtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdtYXhpbWl6ZWQnKTtcblxuICAgICAgICBjb25zdCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24udG9nZ2xlLW1lbnUnKTtcbiAgICAgICAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG5cbiAgICAgICAgY29uc3QgbWF4aW1pemVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbWF4aW1pemVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLW1lbnUnKTtcbiAgICAgICAgbWF4aW1pemVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWF4aW1pemUnKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpY29uLnNyYyA9ICcuLi9zcmMvbWVkaWEvZG93bi1jYXJyb3Quc3ZnJztcbiAgICAgICAgbWF4aW1pemVCdXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIG1heGltaXplQnV0dG9uLm9uY2xpY2sgPSBVSS5leHBhbmRNb2JpbGVTaWRlYmFyO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhciAuY29udGVudC1ib3ggZm9ybS5zZWFyY2gnKTtcbiAgICAgICAgZm9ybS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgbWF4aW1pemVCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IG1pbmltaXplQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1tZW51Lm1pbmltaXplJyk7XG4gICAgICAgIG1pbmltaXplQnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzYXZlTG9jYXRpb24oKSB7XG4gICAgICAgIHNhdmVkTG9jYXRpb25zLnNhdmVMb2NhdGlvbih3ZWF0aGVyRGF0YSk7XG4gICAgICAgIExvYWQucmVtb3ZlU2F2ZWRDaXRpZXMoKTtcbiAgICAgICAgTG9hZC5pbnNlcnRTYXZlZENpdGllcygpO1xuICAgIH0gICAgXG5cbiAgICBzdGF0aWMgcmVtb3ZlTG9jYXRpb24oZSkge1xuICAgICAgICBjb25zdCBpZCA9IFVJLmdldENpdHlJRChlKTtcbiAgICAgICAgc2F2ZWRMb2NhdGlvbnMucmVtb3ZlTG9jYXRpb24oaWQpO1xuICAgICAgICBMb2FkLnJlbW92ZVNhdmVkQ2l0aWVzKCk7XG4gICAgICAgIExvYWQuaW5zZXJ0U2F2ZWRDaXRpZXMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xpY2tTYXZlZExvY2F0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgaWQgPSBVSS5nZXRDaXR5SUQoZSk7XG4gICAgICAgIGdldFdlYXRoZXIoc2F2ZWRMb2NhdGlvbnMuZGF0YVtpZF0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDaXR5SUQoZSkge1xuICAgICAgICBsZXQgbm9kZSA9IGUudGFyZ2V0O1xuICAgICAgICB3aGlsZSAoIW5vZGUuZ2V0QXR0cmlidXRlKCdzYXZlZC1pZCcpKSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlLmdldEF0dHJpYnV0ZSgnc2F2ZWQtaWQnKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCAnLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBMb2FkIH0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCB7IFdlYXRoZXJEYXRhIH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQgeyBTYXZlZExvY2F0aW9ucyB9IGZyb20gJy4vbW9kZWwuanMnO1xuXG5leHBvcnQgY29uc3Qgd2VhdGhlckRhdGEgPSBuZXcgV2VhdGhlckRhdGEoKTtcbmV4cG9ydCBjb25zdCBzYXZlZExvY2F0aW9ucyA9IG5ldyBTYXZlZExvY2F0aW9ucygpO1xuc2F2ZWRMb2NhdGlvbnMuZ2V0U3RvcmFnZSgpO1xuY29uc29sZS5sb2coc2F2ZWRMb2NhdGlvbnMpO1xuXG5Mb2FkLmRlZmF1bHRVSSgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NTBweCknKTtcbiAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXIgLmNvbnRlbnQtYm94Jykuc2Nyb2xsVG8oMCwwKTtcbiAgICB9XG59KVxuXG5cblxuXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGF5LzExMy5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMTEzLnBuZ1wiLFxuXHRcIi4vZGF5LzExNi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMTE2LnBuZ1wiLFxuXHRcIi4vZGF5LzExOS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMTE5LnBuZ1wiLFxuXHRcIi4vZGF5LzEyMi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMTIyLnBuZ1wiLFxuXHRcIi4vZGF5LzE0My5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMTQzLnBuZ1wiLFxuXHRcIi4vZGF5LzE3Ni5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMTc2LnBuZ1wiLFxuXHRcIi4vZGF5LzE3OS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMTc5LnBuZ1wiLFxuXHRcIi4vZGF5LzE4Mi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMTgyLnBuZ1wiLFxuXHRcIi4vZGF5LzE4NS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMTg1LnBuZ1wiLFxuXHRcIi4vZGF5LzIwMC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMjAwLnBuZ1wiLFxuXHRcIi4vZGF5LzIyNy5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMjI3LnBuZ1wiLFxuXHRcIi4vZGF5LzIzMC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMjMwLnBuZ1wiLFxuXHRcIi4vZGF5LzI0OC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMjQ4LnBuZ1wiLFxuXHRcIi4vZGF5LzI2MC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMjYwLnBuZ1wiLFxuXHRcIi4vZGF5LzI2My5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMjYzLnBuZ1wiLFxuXHRcIi4vZGF5LzI2Ni5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMjY2LnBuZ1wiLFxuXHRcIi4vZGF5LzI4MS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMjgxLnBuZ1wiLFxuXHRcIi4vZGF5LzI4NC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMjg0LnBuZ1wiLFxuXHRcIi4vZGF5LzI5My5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMjkzLnBuZ1wiLFxuXHRcIi4vZGF5LzI5Ni5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMjk2LnBuZ1wiLFxuXHRcIi4vZGF5LzI5OS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMjk5LnBuZ1wiLFxuXHRcIi4vZGF5LzMwMi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzAyLnBuZ1wiLFxuXHRcIi4vZGF5LzMwNS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzA1LnBuZ1wiLFxuXHRcIi4vZGF5LzMwOC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzA4LnBuZ1wiLFxuXHRcIi4vZGF5LzMxMS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzExLnBuZ1wiLFxuXHRcIi4vZGF5LzMxNC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzE0LnBuZ1wiLFxuXHRcIi4vZGF5LzMxNy5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzE3LnBuZ1wiLFxuXHRcIi4vZGF5LzMyMC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzIwLnBuZ1wiLFxuXHRcIi4vZGF5LzMyMy5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzIzLnBuZ1wiLFxuXHRcIi4vZGF5LzMyNi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzI2LnBuZ1wiLFxuXHRcIi4vZGF5LzMyOS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzI5LnBuZ1wiLFxuXHRcIi4vZGF5LzMzMi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzMyLnBuZ1wiLFxuXHRcIi4vZGF5LzMzNS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzM1LnBuZ1wiLFxuXHRcIi4vZGF5LzMzOC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzM4LnBuZ1wiLFxuXHRcIi4vZGF5LzM1MC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzUwLnBuZ1wiLFxuXHRcIi4vZGF5LzM1My5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzUzLnBuZ1wiLFxuXHRcIi4vZGF5LzM1Ni5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzU2LnBuZ1wiLFxuXHRcIi4vZGF5LzM1OS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzU5LnBuZ1wiLFxuXHRcIi4vZGF5LzM2Mi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzYyLnBuZ1wiLFxuXHRcIi4vZGF5LzM2NS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzY1LnBuZ1wiLFxuXHRcIi4vZGF5LzM2OC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzY4LnBuZ1wiLFxuXHRcIi4vZGF5LzM3MS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzcxLnBuZ1wiLFxuXHRcIi4vZGF5LzM3NC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzc0LnBuZ1wiLFxuXHRcIi4vZGF5LzM3Ny5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzc3LnBuZ1wiLFxuXHRcIi4vZGF5LzM4Ni5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzg2LnBuZ1wiLFxuXHRcIi4vZGF5LzM4OS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzg5LnBuZ1wiLFxuXHRcIi4vZGF5LzM5Mi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzkyLnBuZ1wiLFxuXHRcIi4vZGF5LzM5NS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9kYXkvMzk1LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMTEzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzExMy5wbmdcIixcblx0XCIuL25pZ2h0LzExNi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8xMTYucG5nXCIsXG5cdFwiLi9uaWdodC8xMTkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMTE5LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMTIyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzEyMi5wbmdcIixcblx0XCIuL25pZ2h0LzE0My5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8xNDMucG5nXCIsXG5cdFwiLi9uaWdodC8xNzYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMTc2LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMTc5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzE3OS5wbmdcIixcblx0XCIuL25pZ2h0LzE4Mi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8xODIucG5nXCIsXG5cdFwiLi9uaWdodC8xODUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMTg1LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjAwLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzIwMC5wbmdcIixcblx0XCIuL25pZ2h0LzIyNy5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yMjcucG5nXCIsXG5cdFwiLi9uaWdodC8yMzAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjMwLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjQ4LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzI0OC5wbmdcIixcblx0XCIuL25pZ2h0LzI2MC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yNjAucG5nXCIsXG5cdFwiLi9uaWdodC8yNjMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjYzLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjY2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzI2Ni5wbmdcIixcblx0XCIuL25pZ2h0LzI4MS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yODEucG5nXCIsXG5cdFwiLi9uaWdodC8yODQucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjg0LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjkzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzI5My5wbmdcIixcblx0XCIuL25pZ2h0LzI5Ni5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yOTYucG5nXCIsXG5cdFwiLi9uaWdodC8yOTkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjk5LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzAyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMwMi5wbmdcIixcblx0XCIuL25pZ2h0LzMwNS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMDUucG5nXCIsXG5cdFwiLi9uaWdodC8zMDgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzA4LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzExLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMxMS5wbmdcIixcblx0XCIuL25pZ2h0LzMxNC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMTQucG5nXCIsXG5cdFwiLi9uaWdodC8zMTcucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzE3LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzIwLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMyMC5wbmdcIixcblx0XCIuL25pZ2h0LzMyMy5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMjMucG5nXCIsXG5cdFwiLi9uaWdodC8zMjYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzI2LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzI5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMyOS5wbmdcIixcblx0XCIuL25pZ2h0LzMzMi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMzIucG5nXCIsXG5cdFwiLi9uaWdodC8zMzUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzM1LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzM4LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMzOC5wbmdcIixcblx0XCIuL25pZ2h0LzM1MC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNTAucG5nXCIsXG5cdFwiLi9uaWdodC8zNTMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzUzLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzU2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM1Ni5wbmdcIixcblx0XCIuL25pZ2h0LzM1OS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNTkucG5nXCIsXG5cdFwiLi9uaWdodC8zNjIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzYyLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzY1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM2NS5wbmdcIixcblx0XCIuL25pZ2h0LzM2OC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNjgucG5nXCIsXG5cdFwiLi9uaWdodC8zNzEucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzcxLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzc0LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM3NC5wbmdcIixcblx0XCIuL25pZ2h0LzM3Ny5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNzcucG5nXCIsXG5cdFwiLi9uaWdodC8zODYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzg2LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzg5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM4OS5wbmdcIixcblx0XCIuL25pZ2h0LzM5Mi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zOTIucG5nXCIsXG5cdFwiLi9uaWdodC8zOTUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzk1LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9tZWRpYS9hcGlJY29ucyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImV4cG9ydCBjbGFzcyBXZWF0aGVyRGF0YSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLndlYXRoZXIgPSB7VVM6e30sIG1ldHJpYzp7fX07XG4gICAgfVxuXG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMud2VhdGhlci5VUykubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBcbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0Q3VycmVudChkYXRhKTtcbiAgICAgICAgY29uc3QgZGFpbHkgPSB0aGlzLmdldERhaWx5Rm9yZWNhc3QoZGF0YSk7XG4gICAgICAgIGNvbnN0IGhvdXJseSA9IHRoaXMuZ2V0SG91cmx5Rm9yZWNhc3QoZGF0YSk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndlYXRoZXIsIHRoaXMuZ2V0TG9jYXRpb24oZGF0YSkpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMud2VhdGhlci5VUywgY3VycmVudC5VUyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy53ZWF0aGVyLlVTLCBkYWlseS5VUyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy53ZWF0aGVyLlVTLCBob3VybHkuVVMpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMud2VhdGhlci5tZXRyaWMsIGN1cnJlbnQubWV0cmljKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndlYXRoZXIubWV0cmljLCBkYWlseS5tZXRyaWMpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMud2VhdGhlci5tZXRyaWMsIGhvdXJseS5tZXRyaWMpO1xuICAgIH1cblxuICAgIGdldExvY2F0aW9uKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFVTOiB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogZGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICByZWdpb246IGRhdGEubG9jYXRpb24ucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBGb3JtYXQuYWJicmV2aWF0ZUNvdW50cnlOYW1lKGRhdGEubG9jYXRpb24uY291bnRyeSksXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsVGltZTogZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRyaWM6IHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiBkYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogZGF0YS5sb2NhdGlvbi5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IEZvcm1hdC5hYmJyZXZpYXRlQ291bnRyeU5hbWUoZGF0YS5sb2NhdGlvbi5jb3VudHJ5KSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxUaW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudChkYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBVUzoge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBGb3JtYXQuZ2V0SWNvblBhdGgoZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKSxcbiAgICAgICAgICAgICAgICAgICAgcmFpbkNoYW5jZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgICAgICAgICAgIHNub3dDaGFuY2U6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93LFxuICAgICAgICAgICAgICAgICAgICBodW1pZGl0eTogZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICAgICAgICAgICAgICBwcmVzc3VyZTogZGF0YS5jdXJyZW50LnByZXNzdXJlX2luICsgJyBpbkhnJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcDogZGF0YS5jdXJyZW50LnRlbXBfZiArICdcXHUwMEIwIEYnLFxuICAgICAgICAgICAgICAgICAgICBmZWVsc0xpa2U6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZiArICdcXHUwMEIwJyxcbiAgICAgICAgICAgICAgICAgICAgd2luZDogZGF0YS5jdXJyZW50LndpbmRfbXBoICsgJyBtcGgnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRyaWM6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkLFxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogRm9ybWF0LmdldEljb25QYXRoKGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbiksXG4gICAgICAgICAgICAgICAgICAgIHJhaW5DaGFuY2U6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgICAgICAgICAgICAgICAgICBzbm93Q2hhbmNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2Zfc25vdyxcbiAgICAgICAgICAgICAgICAgICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgICAgICAgICAgICAgcHJlc3N1cmU6IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArICcgbWInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wOiBkYXRhLmN1cnJlbnQudGVtcF9jICsgJ1xcdTAwQjAgQycsXG4gICAgICAgICAgICAgICAgICAgIGZlZWxzTGlrZTogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jICsgJ1xcdTAwQjAnLFxuICAgICAgICAgICAgICAgICAgICB3aW5kOiBkYXRhLmN1cnJlbnQud2luZF9rcGggKyAnIGtwaCcsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGFpbHlGb3JlY2FzdChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3QgPSB7IFVTOiB7ZGFpbHk6W119LCBtZXRyaWM6IHtkYWlseTpbXX19O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2luZ2xlRGF5ID0gdGhpcy5zZXRTaW5nbGVEYXlGb3JlY2FzdChkYXRhLCBpKTtcbiAgICAgICAgICAgIGRhaWx5Rm9yZWNhc3QuVVMuZGFpbHkucHVzaChzaW5nbGVEYXkuVVMpO1xuICAgICAgICAgICAgZGFpbHlGb3JlY2FzdC5tZXRyaWMuZGFpbHkucHVzaChzaW5nbGVEYXkubWV0cmljKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYWlseUZvcmVjYXN0O1xuICAgIH1cblxuICAgIHNldFNpbmdsZURheUZvcmVjYXN0KGRhdGEsIGkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFVTOiB7XG4gICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlLFxuICAgICAgICAgICAgICAgIGhpZ2hUZW1wOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2YsXG4gICAgICAgICAgICAgICAgbG93VGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9mLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgaWNvbjogRm9ybWF0LmdldEljb25QYXRoKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRyaWM6IHtcbiAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGUsXG4gICAgICAgICAgICAgICAgaGlnaFRlbXA6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgICAgICAgICBsb3dUZW1wOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2MsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICBpY29uOiBGb3JtYXQuZ2V0SWNvblBhdGgoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLmljb24pLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SG91cmx5Rm9yZWNhc3QoZGF0YSkge1xuICAgICAgICAvLyBnZXRzIGN1cnJlbnQgZGF5IGFuZCBuZXh0IGRheSBob3VybHkgZGF0YSBmcm9tIGZldGNoZWQgZHN0YVxuICAgICAgICAvLyBuZWVkcyBib3RoIGRheXMgZm9yIFVJIHdoaWNoIGRpc3BsYXlzIGEgMjQgaG91cnMgaW4gaG91ciBpbmNyZW1lbnRzXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0d29EYXlzID0geyBVUzoge2hvdXJseTpbXX0sIG1ldHJpYzoge2hvdXJseTpbXX19O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0d29EYXlzLlVTLmhvdXJseS5wdXNoKFtdKTtcbiAgICAgICAgICAgIHR3b0RheXMubWV0cmljLmhvdXJseS5wdXNoKFtdKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAyNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91ckRhdGEgPSB0aGlzLnNldEhvdXIoZGF0YSwgaSwgaik7XG4gICAgICAgICAgICAgICAgdHdvRGF5cy5VUy5ob3VybHlbaV0ucHVzaChob3VyRGF0YS5VUyk7XG4gICAgICAgICAgICAgICAgdHdvRGF5cy5tZXRyaWMuaG91cmx5W2ldLnB1c2goaG91ckRhdGEubWV0cmljKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0d29EYXlzO1xuICAgIH1cblxuICAgIHNldEhvdXIoZGF0YSwgaSwgaikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgVVM6IHtcbiAgICAgICAgICAgICAgICB0aW1lOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0udGltZSxcbiAgICAgICAgICAgICAgICB0ZW1wOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0udGVtcF9mLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2pdLmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgIGljb246IEZvcm1hdC5nZXRJY29uUGF0aChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0uY29uZGl0aW9uLmljb24pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgICAgIHRpbWU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uaG91cltqXS50aW1lLFxuICAgICAgICAgICAgICAgIHRlbXA6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uaG91cltqXS50ZW1wX2MsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0uY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgaWNvbjogRm9ybWF0LmdldEljb25QYXRoKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uaG91cltqXS5jb25kaXRpb24uaWNvbiksXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXQge1xuXG4gICAgLy8gZ2V0cyB0aGUgcHJvcGVydHkgdGhhdCBjYW4gYmUgdXNlZCB0byByZWZlcmVuY2UgYW4gaW1wb3J0ZWQgaWNvblxuICAgIC8vIGljb25JbXBvcnRzW0Zvcm1hdC5nZXRJY29uUGF0aChzdHJpbmcpXTtcbiAgICBzdGF0aWMgZ2V0SWNvblBhdGgoc3RyaW5nKSB7XG4gICAgICAgIGlmIChzdHJpbmcuaW5jbHVkZXMoJ25pZ2h0JykpIHtcbiAgICAgICAgICAgIHJldHVybiBgbmlnaHQvJHtzbGljZVN0cmluZyhzdHJpbmcpfWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RyaW5nLmluY2x1ZGVzKCdkYXknKSkge1xuICAgICAgICAgICAgcmV0dXJuIGBkYXkvJHtzbGljZVN0cmluZyhzdHJpbmcpfWA7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzbGljZVN0cmluZyhzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuc2xpY2Uoc3RyaW5nLmxlbmd0aCAtIDcsIHN0cmluZy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERheU5hbWVMb25nKHN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoRm9ybWF0Lmh5cGhlbmF0ZShzdHJpbmcpKTtcbiAgICAgICAgcmV0dXJuIFsnU3VuZGF5JywnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddW2RhdGUuZ2V0RGF5KCldO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0RGF5TmFtZVNob3J0KHN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoRm9ybWF0Lmh5cGhlbmF0ZShzdHJpbmcpKTtcbiAgICAgICAgcmV0dXJuIFsnU3VuJywnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXVtkYXRlLmdldERheSgpXTtcbiAgICB9XG4yXG4gICAgc3RhdGljIGdldERheU51bWJlcihzdHJpbmcpIHtcbiAgICAgICAgLy8gc3RyaW5nIHJlcHJlc3RpbmcgZGF0ZSBtdXN0IGJlIGluICd5eXl5LU1NLWRkJyBmb3JtYXRcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgnLScpWzJdLnNsaWNlKDAsMik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldE1vbnRoTmFtZShzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddW25ldyBEYXRlKHN0cmluZykuZ2V0TW9udGgoKV07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERheU51bWJlclByZWZpeChzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gbmV3IERhdGUoRm9ybWF0Lmh5cGhlbmF0ZShzdHJpbmcpKS5nZXREYXRlKCk7XG4gICAgICAgIGxldCBzdWZmaXggPSAndGgnO1xuXG4gICAgICAgIGlmIChudW1iZXIgPT0gMSB8fCBudW1iZXIgPT0gMjEgfHwgbnVtYmVyID09IDMxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtYmVyID09IDIgfHwgbnVtYmVyID09IDIyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtYmVyID09IDMgfHwgbnVtYmVyID09IDIzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyBzdWZmaXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGF5TnVtYmVyREQoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBGb3JtYXQuZ2V0RGF5TnVtYmVyKHN0cmluZykudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0WWVhck51bWJlcihzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHN0cmluZykuZ2V0RnVsbFllYXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3Bva2VuRGF0ZShzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0RGF5TmFtZUxvbmcoc3RyaW5nKX0sICR7dGhpcy5nZXRNb250aE5hbWUoc3RyaW5nKX0gJHt0aGlzLmdldERheU51bWJlclByZWZpeChzdHJpbmcpfSwgJHt0aGlzLmdldFllYXJOdW1iZXIoc3RyaW5nKX1gO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRMb2NhbGVUaW1lKHN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RyaW5nKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgaWYgKGRhdGUubGVuZ3RoID09PSAxMSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuc2xpY2UoMCw1KSArIGRhdGUuc2xpY2UoOSwxMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnNsaWNlKDAsNCkgKyBkYXRlLnNsaWNlKDgsMTApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SG91cjI0SFIoc3RyaW5nKSB7XG4gICAgICAgIC8vIHJldHVybnMgdGhlIGhvdXIgb2YgYSBkYXRlIGluIHRoZSBmb3JtYXQgJ2hoJ1xuICAgICAgICAvLyB0byBiZSB1c2VkIHdpdGggZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2ldLnRpbWVcbiAgICAgICAgLy8gZGF0ZSBtdXN0IGJlIGZvcm1hdHRlZCBpbiAneXl5eS1NTS1kZCBoaC1tbVwiIGZvcm1hdFxuICAgICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCcgJylbMV0uc3BsaXQoJzonKVswXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SG91ckFNUE0oc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGRhdGVkU3RyaW5nID0gbmV3IERhdGUoc3RyaW5nKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGRhdGVkU3RyaW5nLnNwbGl0KCcgJylbMF0uc3BsaXQoJzonKVswXSArIGRhdGVkU3RyaW5nLnNwbGl0KCcgJylbMV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWJicmV2aWF0ZUNvdW50cnlOYW1lKHN0cmluZykge1xuICAgICAgICBpZiAoc3RyaW5nID09PSAnVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhJykge1xuICAgICAgICAgICAgcmV0dXJuIFwiVVNBXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGh5cGhlbmF0ZShzdHJpbmcpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzU1NjU5MS9pcy10aGUtamF2YXNjcmlwdC1kYXRlLW9iamVjdC1hbHdheXMtb25lLWRheS1vZmZcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgnLScpLmpvaW4oJy8nKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYXZlZExvY2F0aW9ucyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBzYXZlTG9jYXRpb24od2VhdGhlckRhdGEpIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmNyZWF0ZUlEKCk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gW2Ake3dlYXRoZXJEYXRhLndlYXRoZXIuVVMubG9jYXRpb24uY2l0eX1gLCBgJHt3ZWF0aGVyRGF0YS53ZWF0aGVyLlVTLmxvY2F0aW9uLnJlZ2lvbn0sICR7d2VhdGhlckRhdGEud2VhdGhlci5VUy5sb2NhdGlvbi5jb3VudHJ5fWBdO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNVbmlxdWVMb2NhdGlvbihsb2NhdGlvbikpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpZF0gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVMb2NhdGlvbihpZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhW2lkXTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGlzVW5pcXVlTG9jYXRpb24obG9jYXRpb24pIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhW2tleV1bMF0gPT09IGxvY2F0aW9uWzBdICYmIHRoaXMuZGF0YVtrZXldWzFdID09PSBsb2NhdGlvblsxXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjcmVhdGVJRCgpIHtcbiAgICAgICAgY29uc3QgaWQgPSBjcmVhdGVJRCgpO1xuXG4gICAgICAgIHdoaWxlIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgaWQgPSBjcmVhdGVJRCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlkO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUlEKCkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4OTk5ICsgMTAwMCk7XG4gICAgICAgICAgICByZXR1cm4gaWQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NhdmVkTG9jYXRpb25zJywgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XG4gICAgfVxuXG4gICAgZ2V0U3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYXZlZExvY2F0aW9ucycpKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YSwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2F2ZWRMb2NhdGlvbnMnKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBpY29uSW1wb3J0cyB9IGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBzZWFyY2hJY29uIGZyb20gJy4vbWVkaWEvc2VhcmNoLnN2ZydcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgV2VhdGhlckRhdGEgfSBmcm9tIFwiLi9tb2RlbC5qc1wiO1xuaW1wb3J0IHsgRm9ybWF0IH0gZnJvbSBcIi4vbW9kZWwuanNcIjtcbmltcG9ydCB7IFBvcHVsYXRlIH0gZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgVUkgfSBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgJ3RhZ25hbWUnOidkaXYnLFxuICAgICAgICB9XG4gICAgKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICAvL25ldyBFbGVtZW50KCkuYnVpbGQoKSB3aWxsIGRlZmF1bHQgdG8gYSBjcmVhdGVkIGRpdiBlbGVtZW50XG4gICAgICAgIC8vaWYgYSBjb25maWcgb2JqZWN0IGlzIHBhc3NlZCBpbiBhcyBhIHBhcmFtZXRlciwgdGhlbiBhIHRhZ25hbWUgcHJvcGVydHkgYWx3YXlzIG5lZWRzIHRvIGJlIGFkZGVkXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuY29uZmlnWyd0YWduYW1lJ10pO1xuICAgICAgICBcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgbXVsdGlwbGUgY2xhc3NuYW1lcyBpbiBzaW5nbGUgZGVjbGFyYXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gdGhpcy5jb25maWdbJ2NsYXNzJ10uc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWdbJ2NsYXNzJ10pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIGNsYXNzTmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcGVydHkgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmNvbmZpZ1snaWQnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gJ3RleHQtY29udGVudCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5jb25maWdbJ3RleHQtY29udGVudCddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcGVydHkgPT09ICdldmVudC1saXN0ZW5lcnMnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0aGlzLmNvbmZpZ1snZXZlbnQtbGlzdGVuZXJzJ10pe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIocHJvcGVydHksIHRoaXMuY29uZmlnWydldmVudC1saXN0ZW5lcnMnXVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnc3JjJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gdGhpcy5jb25maWdbJ3NyYyddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jaGlsZCBtdXN0IGJlIGJ1aWx0IHVzaW5nIHRoaXMuYnVpbGQoKVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcGVydHkgPT09ICdjaGlsZHJlbicpIHtcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgY2hpbGQgb2YgdGhpcy5jb25maWdbJ2NoaWxkcmVuJ10pe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgICAgIGZvcihjb25zdCBwcm9wZXJ0eSBpbiB0aGlzLmNvbmZpZ1snc3R5bGUnXSl7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gdGhpcy5jb25maWdbJ3N0eWxlJ11bcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ICE9PSAndGFnbmFtZScpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdGhpcy5jb25maWdbcHJvcGVydHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJ1aWxkIHtcbiAgICBzdGF0aWMgc2lkZWJhcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAnY2xhc3MnOiAnc2lkZWJhcicsXG4gICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29udGVudC1ib3gnLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3NlYXJjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50LWxpc3RlbmVycyc6eydzdWJtaXQnOklucHV0LnN1Ym1pdExvY2F0aW9ufSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnc2VhcmNoLWxvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdzZWFyY2gtbG9jYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ3ppcCBjb2RlIG9yIGNpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dG9mb2N1cyc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc2VhcmNoLWljb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogc2VhcmNoSWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICdzZWFyY2gtaWNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2Vycm9yLW1lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdObyBtYXRjaGluZyBsb2NhdGlvbiBmb3VuZC4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RvZ2dsZS1tZW51IG1heGltaXplJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQtbGlzdGVuZXJzJzp7J2NsaWNrJzpVSS5leHBhbmRNb2JpbGVTaWRlYmFyfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogJy4uL3NyYy9tZWRpYS9kb3duLWNhcnJvdC5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICdleHBhbmQtbWVudScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnU2V0dGluZ3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdzZXR0aW5ncy1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2g0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnTWVhc3VyZW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RvZ2dsZS1jb250YWluZXIgbWVhc3VyZW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdVUycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J3NldHRpbmdzIHVzLW1lYXN1cmVtZW50IGNob3Nlbi1zZXR0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50LWxpc3RlbmVycyc6eydjbGljayc6UG9wdWxhdGUuY2xpY2tVU30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnTWV0cmljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzonc2V0dGluZ3MgbWV0cmljLW1lYXN1cmVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50LWxpc3RlbmVycyc6eydjbGljayc6UG9wdWxhdGUuY2xpY2tNZXRyaWN9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdoNCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ0ZvcmVjYXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0b2dnbGUtY29udGFpbmVyIGZvcmVjYXN0LWhvdXJseSBjaG9zZW4tc2V0dGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ0hvdXJseScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J3NldHRpbmdzIGhvdXJseS1mb3JlY2FzdCBjaG9zZW4tc2V0dGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnY2xpY2snOlBvcHVsYXRlLmNsaWNrSG91cmx5fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdEYWlseScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6J3NldHRpbmdzIGRhaWx5LWZvcmVjYXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50LWxpc3RlbmVycyc6eydjbGljayc6UG9wdWxhdGUuY2xpY2tEYWlseX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnU2F2ZWQgTG9jYXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdzYXZlZC1jaXRpZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2F2ZWRDaXR5SXRlbShrZXksIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICd0YWduYW1lJzogJ2xpJyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdjaXR5LW5hbWUnLFxuICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ3NhdmVkLUlEJzogYCR7a2V5fWAsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsZWZ0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnY2xpY2snOiBVSS5jbGlja1NhdmVkTG9jYXRpb259LFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaDMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhW2tleV1bMF19YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JlZ2lvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGFba2V5XVsxXX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgICdzYXZlZC1JRCc6IGAke2tleX1gLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogJy4uL3NyYy9tZWRpYS9kZWxldGUuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQtbGlzdGVuZXJzJzp7J2NsaWNrJzpVSS5yZW1vdmVMb2NhdGlvbn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3VycmVudFdlYXRoZXIoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdjb250ZW50LWJveCBjdXJyZW50JyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjaXR5LXJlZ2lvbi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5sb2NhdGlvbi5jaXR5fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2g1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncmVnaW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5sb2NhdGlvbi5yZWdpb259LCAke2RhdGEubG9jYXRpb24uY291bnRyeX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RpbWUtZGF0ZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RpbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ2FzIG9mJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogRm9ybWF0LmdldExvY2FsZVRpbWUoZGF0YS5jdXJyZW50Lmxhc3RVcGRhdGVkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IEZvcm1hdC5nZXRTcG9rZW5EYXRlKGRhdGEuY3VycmVudC5sYXN0VXBkYXRlZCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RlbXAnLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50LnRlbXB9YCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogaWNvbkltcG9ydHNbZGF0YS5jdXJyZW50Lmljb25dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnd2VhdGhlci1pY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29uZGl0aW9uLWljb24gaWNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmN1cnJlbnQuY29uZGl0aW9ufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnd2VhdGhlci1wcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dlYXRoZXItcHJvcGVydHkgZmVlbHMtbGlrZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvdGhlcm1vbWV0ZXIuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnZmVlbHMtbGlrZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncmlnaHQtY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ0ZlZWxzIGxpa2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEuY3VycmVudC5mZWVsc0xpa2V9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dlYXRoZXItcHJvcGVydHkgd2luZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvd2luZC5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICd3aW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdyaWdodC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnV2luZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50LndpbmR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd3ZWF0aGVyLXByb3BlcnR5IGNoYW5jZS1yYWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogJy4uL3NyYy9tZWRpYS9yYWluLnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJ3JhaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JpZ2h0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdSYWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmN1cnJlbnQucmFpbkNoYW5jZX0lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd3ZWF0aGVyLXByb3BlcnR5IGNoYW5jZS1zbm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogJy4uL3NyYy9tZWRpYS9zbm93LnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJ3Nub3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JpZ2h0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdTbm93OicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50LnNub3dDaGFuY2V9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnd2VhdGhlci1wcm9wZXJ0eSBodW1pZGl0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6ICcuLi9zcmMvbWVkaWEvaHVtaWRpdHkuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnaHVtaWRpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JpZ2h0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdIdW1pZGl0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dlYXRoZXItcHJvcGVydHkgcHJlc3N1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiAnLi4vc3JjL21lZGlhL3ByZXNzdXJlLnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJ3ByZXNzdXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdyaWdodC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnUHJlc3N1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEuY3VycmVudC5wcmVzc3VyZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzonYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzonc2F2ZS1jaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6J1NBVkUgTE9DQVRJT04nLFxuICAgICAgICAgICAgICAgICAgICAnZXZlbnQtbGlzdGVuZXJzJzp7J2NsaWNrJzpVSS5zYXZlTG9jYXRpb259XG4gICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmVjYXN0Q29udGFpbmVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdjb250ZW50LWJveCBmb3JlY2FzdCcsXG4gICAgICAgIH0pLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmVjYXN0SXRlbURhaWx5KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZm9yZWNhc3QtaXRlbSBkYWlseS1pdGVtJyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2gzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke0Zvcm1hdC5nZXREYXlOYW1lU2hvcnQoZGF0YS5kYXRlKX0gJHtGb3JtYXQuZ2V0RGF5TnVtYmVyREQoZGF0YS5kYXRlKX1gLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnaGlnaC1sb3ctY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdoaWdoLXRlbXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmhpZ2hUZW1wfVxcdTAwQjBgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGl2aWRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICcvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xvdy10ZW1wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5sb3dUZW1wfVxcdTAwQjBgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbiBpY29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ3NyYyc6IGljb25JbXBvcnRzW2RhdGEuaWNvbl0sXG4gICAgICAgICAgICAgICAgICAgICdhbHQnOiAnJyxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jb25kaXRpb259YCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9yZWNhc3RJdGVtSG91cmx5KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZm9yZWNhc3QtaXRlbSBob3VybHktaXRlbScsXG4gICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdoMycsXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBGb3JtYXQuZ2V0SG91ckFNUE0oZGF0YS50aW1lKSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdob3VybHktdGVtcCcsXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOmAke2RhdGEudGVtcH1cXHUwMEIwYCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbiBpY29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ3NyYyc6IGljb25JbXBvcnRzW2RhdGEuaWNvbl0sXG4gICAgICAgICAgICAgICAgICAgICdhbHQnOiAnJyxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jb25kaXRpb259YCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaG91cmx5RGF0ZUNvbnRhaW5lcihkYXRhKSB7XG4gICAgICAgIC8vIHRvIGJlIGFwcGVuZGVkIGluc2lkZSBvZiAuY29udGVudC1ib3guZm9yZWNhc3RcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAnY2xhc3MnOiAnaG91cmx5LWRhdGUtY29udGFpbmVyJyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtGb3JtYXQuZ2V0U3Bva2VuRGF0ZShkYXRhLmRhdGUpfWAsXG4gICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcblxuICAgICAgICAgICAgICAgIC8vICoqKiBidWlsZCAuaG91cnMtY29udGFpbmVyIGRpcmVjdGx5IGluIGpzICoqKlxuICAgICAgICAgICAgICAgIC8vIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAvLyAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAvLyAgICAgJ2NsYXNzJzogJ2hvdXJzLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIC5mb3JlY2FzdC1pdGVtLmhvdXJseS1pdGVtIHRvIGJlIGFwcGVuZGVkIGluc2lkZSBvZiAuaG91cnMtY29udGFpbmVyXG4gICAgICAgICAgICAgICAgLy8gfSkuYnVpbGQoKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLmJ1aWxkKCk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=