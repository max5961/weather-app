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
/* harmony import */ var _src_media_down_carrot_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/media/down-carrot.svg */ "./src/media/down-carrot.svg");
/* harmony import */ var _src_media_night_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/media/night-background.jpg */ "./src/media/night-background.jpg");
/* harmony import */ var _src_media_background_image3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/media/background-image3.jpg */ "./src/media/background-image3.jpg");
/* harmony import */ var _media_loading_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/loading.gif */ "./src/media/loading.gif");
/* harmony import */ var _APIkey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./APIkey */ "./src/APIkey.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
const iconImports = {};
const dayIcons = ["day/113.png","day/143.png","day/185.png","day/248.png","day/281.png","day/299.png","day/311.png","day/323.png","day/335.png","day/356.png","day/368.png","day/386.png","day/116.png","day/176.png","day/200.png","day/260.png","day/284.png","day/302.png","day/314.png","day/326.png","day/338.png","day/359.png","day/371.png","day/389.png","day/119.png","day/179.png","day/227.png","day/263.png","day/293.png","day/305.png","day/317.png","day/329.png","day/350.png","day/362.png","day/374.png","day/392.png","day/122.png","day/182.png","day/230.png","day/266.png","day/296.png","day/308.png","day/320.png","day/332.png","day/353.png","day/365.png","day/377.png","day/395.png"]
const nightIcons = ["night/113.png","night/143.png","night/185.png","night/248.png","night/281.png","night/299.png","night/311.png","night/323.png","night/335.png","night/356.png","night/368.png","night/386.png","night/116.png","night/176.png","night/200.png","night/260.png","night/284.png","night/302.png","night/314.png","night/326.png","night/338.png","night/359.png","night/371.png","night/389.png","night/119.png","night/179.png","night/227.png","night/263.png","night/293.png","night/305.png","night/317.png","night/329.png","night/350.png","night/362.png","night/374.png","night/392.png","night/122.png","night/182.png","night/230.png","night/266.png","night/296.png","night/308.png","night/320.png","night/332.png","night/353.png","night/365.png","night/377.png","night/395.png"];
// import all weatherAPI icons
[dayIcons, nightIcons].flat().forEach(icon => iconImports[icon] = __webpack_require__("./src/media/apiIcons sync recursive ^\\.\\/.*$")(`./${icon}`));
// import other icons/images





//import modules




// DONE WITH IMPORTS

async function getWeather(location) {
    Load.insertLoadingGIF();

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${_APIkey__WEBPACK_IMPORTED_MODULE_4__.APIkey}&q=${location}&days=7&aqi=no&alerts=yes`, {mode: 'cors'});
        const data = await response.json();

        if (!response.ok) {
            if (data.error.message) {
                throw new Error(data.error.message);
            } else {
                throw new Error('unknown error has occured');
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
        Load.currentWeather(_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.weather.metric);
        Load.forecastDaily(_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.weather.metric)
    }
    
    static dailyUS() {
        Load.removeWeather();
        Load.currentWeather(_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.weather.US);
        Load.forecastDaily(_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.weather.US);
    }

    static hourlyMetric() {
        Load.removeWeather();
        Load.currentWeather(_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.weather.metric);
        Load.forecastHourly(_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.weather.metric);
    }

    static hourlyUS() {
        Load.removeWeather();
        Load.currentWeather(_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.weather.US);
        Load.forecastHourly(_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.weather.US);
    }

    static clickUS(e) {
        Settings.measurement = 'US';
        UI.updateMeasurementButtons(e);

        if (_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.isEmpty()) {
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

        if (_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.isEmpty()) {
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

        if (_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.isEmpty()) {
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

        if (_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.isEmpty()) {
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
        document.querySelector('#content').appendChild(_view_js__WEBPACK_IMPORTED_MODULE_5__.Build.sidebar());
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
        gif.src = _media_loading_gif__WEBPACK_IMPORTED_MODULE_3__;
        document.querySelector('#content').appendChild(gif);
    }

    static removeLoadingGIF() {
        document.querySelector('img.loading-gif').remove();
    }

    static currentWeather(data) {
        document.querySelector('#content').appendChild(_view_js__WEBPACK_IMPORTED_MODULE_5__.Build.currentWeather(data));
    }

    static forecastDaily(data) {
        const forecastContainer = _view_js__WEBPACK_IMPORTED_MODULE_5__.Build.forecastContainer();
        for (let i = 0; i < 7; i++) {
            // if (i === 6) for mobile style
            if (i === 6) {
                const lastItem = _view_js__WEBPACK_IMPORTED_MODULE_5__.Build.forecastItemDaily(data.daily[i]);
                lastItem.classList.add('last-item');
                forecastContainer.appendChild(lastItem);
            } else {
                forecastContainer.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_5__.Build.forecastItemDaily(data.daily[i]));
            }
        }

        document.querySelector('#content').appendChild(forecastContainer);
    }

    static forecastHourly(data) {
        // gets exactly 24 hours of forecast data split into hours, so data needs to be grabbed from multiple days
        // get number value in 24 hr time represting current time
        const currentHour = Number(_model_js__WEBPACK_IMPORTED_MODULE_6__.Format.getHour24HR(data.location.localTime));
        // get the hours left in current day's hourly forecast
        const currentDayHours = data.hourly[0].slice(currentHour);
        // get the remaining hours needed to equal 24 total hours from the next day's hourly forecast
        const nextDayHours = data.hourly[1].slice(0, data.hourly[1].length - currentDayHours.length);
        
        // forecast container contains 2 main containers for each day
        const forecastContainer = _view_js__WEBPACK_IMPORTED_MODULE_5__.Build.forecastContainer();
        
        // insert data for each hour of day one into day one's container and add day one's container to the forecast container
        const dayOneHourlyDateContainer = _view_js__WEBPACK_IMPORTED_MODULE_5__.Build.hourlyDateContainer(data.daily[0])
        const dayOneContent = createHoursContainer();
        for (let i = 0; i < currentDayHours.length; i++) {
            if (i === currentDayHours.length - 1) {
                const lastItem = _view_js__WEBPACK_IMPORTED_MODULE_5__.Build.forecastItemHourly(currentDayHours[i]);
                lastItem.classList.add('last-item');
                dayOneContent.appendChild(lastItem);
            } else {
                dayOneContent.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_5__.Build.forecastItemHourly(currentDayHours[i]))
            }
        }
        dayOneHourlyDateContainer.appendChild(dayOneContent);
        forecastContainer.appendChild(dayOneHourlyDateContainer);

        // repeat for day two IF there aren't already 24 hours in day 1
        if (currentDayHours.length !== 24) {
            const dayTwoHourlyDateContainer = _view_js__WEBPACK_IMPORTED_MODULE_5__.Build.hourlyDateContainer(data.daily[1]);
            const dayTwoContent = createHoursContainer();
            for (let i = 0; i < nextDayHours.length; i++) {
                if (i === nextDayHours.length - 1) {
                    const lastItem = _view_js__WEBPACK_IMPORTED_MODULE_5__.Build.forecastItemHourly(nextDayHours[i]);
                    lastItem.classList.add('last-item');
                    dayTwoContent.appendChild(lastItem);
                } else {
                    dayTwoContent.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_5__.Build.forecastItemHourly(nextDayHours[i]));
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
        for (const key in _index_js__WEBPACK_IMPORTED_MODULE_7__.savedLocations.data) {
            const city = _view_js__WEBPACK_IMPORTED_MODULE_5__.Build.savedCityItem(key, _index_js__WEBPACK_IMPORTED_MODULE_7__.savedLocations.data);
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
        _index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData.setData(data);

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
            content.style.backgroundImage = `url(${_src_media_night_background_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
        } else {
            content.style.backgroundImage = `url(${_src_media_background_image3_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
        }
    }

    static expandMobileSidebar(e) {
        const sidebar = document.querySelector('#content .sidebar');
        sidebar.classList.add('maximized');

        const minimizeButton = document.createElement('button');
        minimizeButton.classList.add('toggle-menu');
        minimizeButton.classList.add('minimize');
        const icon = document.createElement('img');
        icon.src = _src_media_down_carrot_svg__WEBPACK_IMPORTED_MODULE_0__;
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
        icon.src = _src_media_down_carrot_svg__WEBPACK_IMPORTED_MODULE_0__;
        maximizeButton.appendChild(icon);
        maximizeButton.onclick = UI.expandMobileSidebar;

        const form = document.querySelector('.sidebar .content-box form.search');
        form.insertAdjacentElement('afterend', maximizeButton);

        const minimizeButton = document.querySelector('.toggle-menu.minimize');
        minimizeButton.remove();
    }

    static saveLocation() {
        _index_js__WEBPACK_IMPORTED_MODULE_7__.savedLocations.saveLocation(_index_js__WEBPACK_IMPORTED_MODULE_7__.weatherData);
        Load.removeSavedCities();
        Load.insertSavedCities();
    }    

    static removeLocation(e) {
        const id = UI.getCityID(e);
        _index_js__WEBPACK_IMPORTED_MODULE_7__.savedLocations.removeLocation(id);
        Load.removeSavedCities();
        Load.insertSavedCities();
    }

    static clickSavedLocation(e) {
        const id = UI.getCityID(e);
        getWeather(_index_js__WEBPACK_IMPORTED_MODULE_7__.savedLocations.data[id]);
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

_controller_js__WEBPACK_IMPORTED_MODULE_1__.Load.defaultUI();

window.addEventListener('resize', () => {
    const mql = window.matchMedia('(max-width: 750px)');
    if (mql.matches) {
        document.querySelector('.sidebar .content-box').scrollTo(0,0);
    }
});






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
/* harmony import */ var _media_down_carrot_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/down-carrot.svg */ "./src/media/down-carrot.svg");
/* harmony import */ var _media_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/delete.svg */ "./src/media/delete.svg");
/* harmony import */ var _media_thermometer_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/thermometer.svg */ "./src/media/thermometer.svg");
/* harmony import */ var _media_wind_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/wind.svg */ "./src/media/wind.svg");
/* harmony import */ var _media_rain_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media/rain.svg */ "./src/media/rain.svg");
/* harmony import */ var _media_snow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/snow.svg */ "./src/media/snow.svg");
/* harmony import */ var _media_humidity_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media/humidity.svg */ "./src/media/humidity.svg");
/* harmony import */ var _media_pressure_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media/pressure.svg */ "./src/media/pressure.svg");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model.js */ "./src/model.js");














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
                                    'src': _media_down_carrot_svg__WEBPACK_IMPORTED_MODULE_2__,
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
                            'src': _media_delete_svg__WEBPACK_IMPORTED_MODULE_3__,
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
                                    'text-content': _model_js__WEBPACK_IMPORTED_MODULE_10__.Format.getLocaleTime(data.current.lastUpdated),
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'p',
                            'class': 'date',
                            'text-content': _model_js__WEBPACK_IMPORTED_MODULE_10__.Format.getSpokenDate(data.current.lastUpdated),
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
                                    'src': _media_thermometer_svg__WEBPACK_IMPORTED_MODULE_4__,
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
                                    'src': _media_wind_svg__WEBPACK_IMPORTED_MODULE_5__,
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
                                    'src': _media_rain_svg__WEBPACK_IMPORTED_MODULE_6__,
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
                                    'src': _media_snow_svg__WEBPACK_IMPORTED_MODULE_7__,
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
                                    'src': _media_humidity_svg__WEBPACK_IMPORTED_MODULE_8__,
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
                                    'src': _media_pressure_svg__WEBPACK_IMPORTED_MODULE_9__,
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
                    'text-content': `${_model_js__WEBPACK_IMPORTED_MODULE_10__.Format.getDayNameShort(data.date)} ${_model_js__WEBPACK_IMPORTED_MODULE_10__.Format.getDayNumberDD(data.date)}`,
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
                    'text-content': _model_js__WEBPACK_IMPORTED_MODULE_10__.Format.getHourAMPM(data.time),
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
                    'text-content': `${_model_js__WEBPACK_IMPORTED_MODULE_10__.Format.getSpokenDate(data.date)}`,
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

/***/ "./src/media/delete.svg":
/*!******************************!*\
  !*** ./src/media/delete.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "445bf8e95b4d6e97c1c3.svg";

/***/ }),

/***/ "./src/media/down-carrot.svg":
/*!***********************************!*\
  !*** ./src/media/down-carrot.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9043df48a88e3062977e.svg";

/***/ }),

/***/ "./src/media/humidity.svg":
/*!********************************!*\
  !*** ./src/media/humidity.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b8b4ab6b41d5c495e932.svg";

/***/ }),

/***/ "./src/media/loading.gif":
/*!*******************************!*\
  !*** ./src/media/loading.gif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b75b820d5677a45b26bd.gif";

/***/ }),

/***/ "./src/media/night-background.jpg":
/*!****************************************!*\
  !*** ./src/media/night-background.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "434ea8401d2db5c4dfe7.jpg";

/***/ }),

/***/ "./src/media/pressure.svg":
/*!********************************!*\
  !*** ./src/media/pressure.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "61d6ee018e9178ccd4f3.svg";

/***/ }),

/***/ "./src/media/rain.svg":
/*!****************************!*\
  !*** ./src/media/rain.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "807ba4a866a295d85036.svg";

/***/ }),

/***/ "./src/media/search.svg":
/*!******************************!*\
  !*** ./src/media/search.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9e2158463dbb540800d3.svg";

/***/ }),

/***/ "./src/media/snow.svg":
/*!****************************!*\
  !*** ./src/media/snow.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bd57aeda0cb274657736.svg";

/***/ }),

/***/ "./src/media/thermometer.svg":
/*!***********************************!*\
  !*** ./src/media/thermometer.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eee1f11475b309696dca.svg";

/***/ }),

/***/ "./src/media/wind.svg":
/*!****************************!*\
  !*** ./src/media/wind.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "da1ca32cf7a527a5de9c.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDZ0I7QUFDSztBQUNkO0FBQ25HLDRDQUE0QywrSUFBd0Q7QUFDcEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwwQkFBMEIsMEZBQWlDO0FBQzNELDBCQUEwQiwrRkFBaUM7QUFDM0QseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Qsc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZGQUE2RixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxZQUFZLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFB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QTBCO0FBQ3ZFLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6a0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly95Ly4vc3JjL3N0eWxlL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8veS8uL3NyYy9zdHlsZS9zcmMvcmVzcG9uc2l2ZS5jc3MiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3kvLi9zcmMvc3R5bGUvaW5kZXguY3NzPzljZjAiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL0FQSWtleS5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL21lZGlhL2FwaUljb25zLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8veS8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly95L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9yZXNwb25zaXZlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9zcmMvbWVkaWEvYmFja2dyb3VuZC1pbWFnZTMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBtYWluIGNvbXBvbmVudHMgKi9cbiNjb250ZW50IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMjVweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcInNpZGViYXIgIGN1cnJlbnRcIlxuICAgICAgICBcInNpZGViYXIgLlwiXG4gICAgICAgIFwiZm9yZWNhc3QgZm9yZWNhc3RcIjtcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDAuOCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vc3JjL21lZGlhL25pZ2h0LWJhY2tncm91bmQuanBnJyk7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDEwMDBtcyBlYXNlLWluLW91dDtcbn1cbi5zaWRlYmFyIHtcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XG59XG4uY29udGVudC1ib3guY3VycmVudCB7XG4gICAgZ3JpZC1hcmVhOiBjdXJyZW50O1xufVxuLmNvbnRlbnQtYm94LmZvcmVjYXN0IHtcbiAgICBncmlkLWFyZWE6IGZvcmVjYXN0O1xufVxuaW1nLmxvYWRpbmctZ2lmIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgei1pbmRleDogMTtcbn1cblxuLmNvbnRlbnQtYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTJlNDA7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjQ4N0U7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiNtYWluLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaW1nLmljb24ge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XG59XG5cbi8qIHNpZGViYXIgKi9cbi5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuLnNpZGViYXIgaW1nIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG59XG4uc2lkZWJhciAuY29udGVudC1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4uc2lkZWJhciBmb3JtLnNlYXJjaCAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc2lkZWJhciBmb3JtLnNlYXJjaCBpbnB1dCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNkM2QzZDM7XG59XG4uc2lkZWJhciBmb3JtLnNlYXJjaCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTlweDtcbiAgICByaWdodDogMjVweDtcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuLnNpZGViYXIgZm9ybS5zZWFyY2ggaW1nLnNlYXJjaC1pY29uOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjgpO1xufVxuLnNpZGViYXIgZm9ybS5zZWFyY2ggaW1nLnNlYXJjaC1pY29uOmFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKC42KTtcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoIHAuZXJyb3ItbWVzc2FnZSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWRlYmFyIGZvcm0uc2VhcmNoIHAuZXJyb3ItbWVzc2FnZS52aXNpYmxlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLnNpZGViYXIgYnV0dG9uLnRvZ2dsZS1tZW51IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zaWRlYmFyIC5zZXR0aW5ncy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNpZGViYXIgLnNldHRpbmdzLWNvbnRlbnQgLnRvZ2dsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uOmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiMwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xufVxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uLmNob3Nlbi1zZXR0aW5nIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjliYmZmODA7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDEwcHg7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgbGkgaW1nLmRlbGV0ZSB7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIHdpZHRoOiAxOXB4O1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGU6aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGU6YWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgYnV0dG9uLmxlZnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGJ1dHRvbi5sZWZ0LWNvbnRhaW5lcjpob3ZlciB7XG4gICAgLyogY29sb3I6ICNlMmUyZTI7ICovXG4gICAgY29sb3I6ICNBMUY5QTE7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgYnV0dG9uLmxlZnQtY29udGFpbmVyOmFjdGl2ZSB7XG4gICAgLyogY29sb3I6ICNjY2NjY2M7ICovXG4gICAgY29sb3I6ICM2Y2M3NmM7XG59XG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgaDMge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBwLnJlZ2lvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vKiBjdXJyZW50IHdlYXRoZXIgKi9cbi5jb250ZW50LWJveC5jdXJyZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJjaXR5LXJlZ2lvbiB0aW1lLWRhdGVcIlxuICAgICAgICBcImNpdHktcmVnaW9uIC5cIlxuICAgICAgICBcInRlbXAgY29uZGl0aW9uXCJcbiAgICAgICAgXCJwcm9wZXJ0aWVzIHByb3BlcnRpZXNcIlxuICAgICAgICBcIi4gc2F2ZS1jaXR5XCJcbiAgICAgICAgICBcbn1cbi5jb250ZW50LWJveC5jdXJyZW50IGJ1dHRvbi5zYXZlLWNpdHkge1xuICAgIGdyaWQtYXJlYTogc2F2ZS1jaXR5O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ExRjlBMTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgbWF4LXdpZHRoOiAyMjVweDtcbn1cbiAgICAuY29udGVudC1ib3guY3VycmVudCBidXR0b24uc2F2ZS1jaXR5OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzczY2Y3MzsgXG4gICAgfVxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IGJ1dHRvbi5zYXZlLWNpdHk6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVhYjY1YTsgXG4gICAgfVxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNpdHktcmVnaW9uLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1hcmVhOiBjaXR5LXJlZ2lvbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5jaXR5IHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICAuY29udGVudC1ib3guY3VycmVudCAucmVnaW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbi5jb250ZW50LWJveC5jdXJyZW50IC50aW1lLWRhdGUtY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IHRpbWUtZGF0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbiAgICAuY29udGVudC1ib3guY3VycmVudCAudGltZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG4gICAgICAgIC5jb250ZW50LWJveC5jdXJyZW50IC50aW1lIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIH1cbiAgICAuY29udGVudC1ib3guY3VycmVudCAuZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4uY29udGVudC1ib3guY3VycmVudCAudGVtcCB7XG4gICAgZ3JpZC1hcmVhOiB0ZW1wO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbn1cbi5jb250ZW50LWJveC5jdXJyZW50IC5jb25kaXRpb24tY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IGNvbmRpdGlvbjtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5jb25kaXRpb24taWNvbiB7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgfVxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLndlYXRoZXItcHJvcGVydGllcyB7XG4gICAgZ3JpZC1hcmVhOiBwcm9wZXJ0aWVzO1xufVxuXG4vKiB3ZWF0aGVyLXByb3BlcnRpZXMgY29udGFpbmVyKi9cbi53ZWF0aGVyLXByb3BlcnRpZXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ud2VhdGhlci1wcm9wZXJ0aWVzIC53ZWF0aGVyLXByb3BlcnR5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xufVxuLndlYXRoZXItcHJvcGVydGllcyAud2VhdGhlci1wcm9wZXJ0eSBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ud2VhdGhlci1wcm9wZXJ0aWVzIC53ZWF0aGVyLXByb3BlcnR5IC5yaWdodC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuLndlYXRoZXItcHJvcGVydGllcyAucmlnaHQtY29udGVudCBwLnRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi8qIGZvcmVjYXN0IHByb3RvICovXG4uY29udGVudC1ib3guZm9yZWNhc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAyODVweDtcbiAgICBtYXgtd2lkdGg6IDE5MDBweDtcbn1cbi5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHdpZHRoOiAxMjVweDtcbn1cbi5jb250ZW50LWJveC5mb3JlY2FzdCBwLmNvbmRpdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLyogZm9yZWNhc3QgaG91cmx5ICovXG4uY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3VybHktZGF0ZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG4gICAgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuaG91cmx5LWRhdGUtY29udGFpbmVyIHAuZGF0ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuaG91cnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDVweDtcbiAgICB3aWR0aDogYXV0bztcbn1cbi5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmZvcmVjYXN0LWl0ZW0uaG91cmx5LWl0ZW0ge1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG59XG4uY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5jb25kaXRpb24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDExNXB4O1xufVxuXG4vKiBmb3JlY2FzdCBpdGVtIGRhaWx5ICovXG4uY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0uZGFpbHktaXRlbSB7XG4gICAgaGVpZ2h0OiA5NSU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLGlDQUFpQztJQUNqQzs7OzJCQUd1QjtJQUN2QixxQkFBcUI7SUFDckIseURBQThEO0lBQzlELG1FQUFtRTtJQUNuRSxzQkFBc0I7SUFDdEIsK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUEsWUFBWTtBQUNaO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJ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O0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCcuL3NyYy9yZXNldC5jc3MnKTtcXG5cXG4vKiBtYWluIGNvbXBvbmVudHMgKi9cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJzaWRlYmFyICBjdXJyZW50XFxcIlxcbiAgICAgICAgXFxcInNpZGViYXIgLlxcXCJcXG4gICAgICAgIFxcXCJmb3JlY2FzdCBmb3JlY2FzdFxcXCI7XFxuICAgIGZpbHRlcjogc2F0dXJhdGUoMC44KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9zcmMvbWVkaWEvYmFja2dyb3VuZC1pbWFnZTMuanBnJyk7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vc3JjL21lZGlhL25pZ2h0LWJhY2tncm91bmQuanBnJyk7ICovXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMTAwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG59XFxuLmNvbnRlbnQtYm94LmN1cnJlbnQge1xcbiAgICBncmlkLWFyZWE6IGN1cnJlbnQ7XFxufVxcbi5jb250ZW50LWJveC5mb3JlY2FzdCB7XFxuICAgIGdyaWQtYXJlYTogZm9yZWNhc3Q7XFxufVxcbmltZy5sb2FkaW5nLWdpZiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY29udGVudC1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTJlNDA7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjI0ODdFO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaW1nLmljb24ge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xcbn1cXG5cXG4vKiBzaWRlYmFyICovXFxuLnNpZGViYXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuLnNpZGViYXIgaW1nIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG59XFxuLnNpZGViYXIgLmNvbnRlbnQtYm94IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoICB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2lkZWJhciBmb3JtLnNlYXJjaCBpbnB1dCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjZDNkM2QzO1xcbn1cXG4uc2lkZWJhciBmb3JtLnNlYXJjaCBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTlweDtcXG4gICAgcmlnaHQ6IDI1cHg7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguOCk7XFxufVxcbi5zaWRlYmFyIGZvcm0uc2VhcmNoIGltZy5zZWFyY2gtaWNvbjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjYpO1xcbn1cXG4uc2lkZWJhciBmb3JtLnNlYXJjaCBwLmVycm9yLW1lc3NhZ2Uge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNpZGViYXIgZm9ybS5zZWFyY2ggcC5lcnJvci1tZXNzYWdlLnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4uc2lkZWJhciBidXR0b24udG9nZ2xlLW1lbnUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc2lkZWJhciAuc2V0dGluZ3MtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5zaWRlYmFyIC5zZXR0aW5ncy1jb250ZW50IC50b2dnbGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5zaWRlYmFyIC50b2dnbGUtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaWRlYmFyIC50b2dnbGUtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjojMDAwMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG4uc2lkZWJhciAudG9nZ2xlLWNvbnRhaW5lciBidXR0b246YWN0aXZlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiMwMDAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MDtcXG59XFxuLnNpZGViYXIgLnRvZ2dsZS1jb250YWluZXIgYnV0dG9uLmNob3Nlbi1zZXR0aW5nIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OWJiZmY4MDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgbGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBsaSBpbWcuZGVsZXRlIHtcXG4gICAgaGVpZ2h0OiAxOXB4O1xcbiAgICB3aWR0aDogMTlweDtcXG59XFxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGxpIGJ1dHRvbi5kZWxldGUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBsaSBidXR0b24uZGVsZXRlOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBsaSBidXR0b24uZGVsZXRlOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcXG59XFxuLnNpZGViYXIgdWwuc2F2ZWQtY2l0aWVzIGJ1dHRvbi5sZWZ0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBidXR0b24ubGVmdC1jb250YWluZXI6aG92ZXIge1xcbiAgICAvKiBjb2xvcjogI2UyZTJlMjsgKi9cXG4gICAgY29sb3I6ICNBMUY5QTE7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBidXR0b24ubGVmdC1jb250YWluZXI6YWN0aXZlIHtcXG4gICAgLyogY29sb3I6ICNjY2NjY2M7ICovXFxuICAgIGNvbG9yOiAjNmNjNzZjO1xcbn1cXG4uc2lkZWJhciB1bC5zYXZlZC1jaXRpZXMgaDMge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5zaWRlYmFyIHVsLnNhdmVkLWNpdGllcyBwLnJlZ2lvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLyogY3VycmVudCB3ZWF0aGVyICovXFxuLmNvbnRlbnQtYm94LmN1cnJlbnQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICAgIG1heC13aWR0aDogNzUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiY2l0eS1yZWdpb24gdGltZS1kYXRlXFxcIlxcbiAgICAgICAgXFxcImNpdHktcmVnaW9uIC5cXFwiXFxuICAgICAgICBcXFwidGVtcCBjb25kaXRpb25cXFwiXFxuICAgICAgICBcXFwicHJvcGVydGllcyBwcm9wZXJ0aWVzXFxcIlxcbiAgICAgICAgXFxcIi4gc2F2ZS1jaXR5XFxcIlxcbiAgICAgICAgICBcXG59XFxuLmNvbnRlbnQtYm94LmN1cnJlbnQgYnV0dG9uLnNhdmUtY2l0eSB7XFxuICAgIGdyaWQtYXJlYTogc2F2ZS1jaXR5O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ExRjlBMTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgbWF4LXdpZHRoOiAyMjVweDtcXG59XFxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IGJ1dHRvbi5zYXZlLWNpdHk6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzczY2Y3MzsgXFxuICAgIH1cXG4gICAgLmNvbnRlbnQtYm94LmN1cnJlbnQgYnV0dG9uLnNhdmUtY2l0eTphY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVhYjY1YTsgXFxuICAgIH1cXG4uY29udGVudC1ib3guY3VycmVudCAuY2l0eS1yZWdpb24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBjaXR5LXJlZ2lvbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5jaXR5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgfVxcbiAgICAuY29udGVudC1ib3guY3VycmVudCAucmVnaW9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbi5jb250ZW50LWJveC5jdXJyZW50IC50aW1lLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiB0aW1lLWRhdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4gICAgLmNvbnRlbnQtYm94LmN1cnJlbnQgLnRpbWUge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuICAgICAgICAuY29udGVudC1ib3guY3VycmVudCAudGltZSBzcGFuIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICAgICAgICB9XFxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5kYXRlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcbi5jb250ZW50LWJveC5jdXJyZW50IC50ZW1wIHtcXG4gICAgZ3JpZC1hcmVhOiB0ZW1wO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNvbmRpdGlvbi1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IGNvbmRpdGlvbjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuICAgIC5jb250ZW50LWJveC5jdXJyZW50IC5jb25kaXRpb24taWNvbiB7XFxuICAgICAgICBoZWlnaHQ6IDY1cHg7XFxuICAgICAgICB3aWR0aDogNjVweDtcXG4gICAgfVxcbi5jb250ZW50LWJveC5jdXJyZW50IC53ZWF0aGVyLXByb3BlcnRpZXMge1xcbiAgICBncmlkLWFyZWE6IHByb3BlcnRpZXM7XFxufVxcblxcbi8qIHdlYXRoZXItcHJvcGVydGllcyBjb250YWluZXIqL1xcbi53ZWF0aGVyLXByb3BlcnRpZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi53ZWF0aGVyLXByb3BlcnRpZXMgLndlYXRoZXItcHJvcGVydHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuLndlYXRoZXItcHJvcGVydGllcyAud2VhdGhlci1wcm9wZXJ0eSBpbWcge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi53ZWF0aGVyLXByb3BlcnRpZXMgLndlYXRoZXItcHJvcGVydHkgLnJpZ2h0LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcbi53ZWF0aGVyLXByb3BlcnRpZXMgLnJpZ2h0LWNvbnRlbnQgcC50ZXh0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLyogZm9yZWNhc3QgcHJvdG8gKi9cXG4uY29udGVudC1ib3guZm9yZWNhc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGhlaWdodDogMjg1cHg7XFxuICAgIG1heC13aWR0aDogMTkwMHB4O1xcbn1cXG4uY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB3aWR0aDogMTI1cHg7XFxufVxcbi5jb250ZW50LWJveC5mb3JlY2FzdCBwLmNvbmRpdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4vKiBmb3JlY2FzdCBob3VybHkgKi9cXG4uY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3VybHktZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbiAgICAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3VybHktZGF0ZS1jb250YWluZXIgcC5kYXRlIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4uY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3Vycy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuZm9yZWNhc3QtaXRlbS5ob3VybHktaXRlbSB7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbi5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmNvbmRpdGlvbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMTVweDtcXG59XFxuXFxuLyogZm9yZWNhc3QgaXRlbSBkYWlseSAqL1xcbi5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbS5kYWlseS1pdGVtIHtcXG4gICAgaGVpZ2h0OiA5NSU7XFxufVxcblxcbkBpbXBvcnQgdXJsKCcuL3NyYy9yZXNwb25zaXZlLmNzcycpO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZmFtaWx5PVJvYm90byZmYW1pbHk9Um9ib3RvK01vbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tYWluLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbn1cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5saSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuaW5wdXQge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ1ODk0OyBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYzNDVmO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3NyYy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZmYW1pbHk9Um9ib3RvJmZhbWlseT1Sb2JvdG8rTW9ubyZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbn1cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbmlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ1ODk0OyBcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MzQ1ZjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgIGJvZHkgI2NvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgZ2FwOiAyNXB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCJzaWRlYmFyXCJcbiAgICAgICAgICAgIFwiY3VycmVudFwiXG4gICAgICAgICAgICBcImZvcmVjYXN0XCI7XG4gICAgfVxuICAgICNjb250ZW50IC5zaWRlYmFyIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNDJweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgI2NvbnRlbnQgLnNpZGViYXIubWF4aW1pemVkIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IGZvcm0ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgICNjb250ZW50IC5zaWRlYmFyIC5jb250ZW50LWJveCBidXR0b24udG9nZ2xlLW1lbnUge1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggYnV0dG9uLnRvZ2dsZS1tZW51OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1MDtcbiAgICAgICAgfVxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggYnV0dG9uLnRvZ2dsZS1tZW51OmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMzA7XG4gICAgICAgIH1cbiAgICAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCB7XG4gICAgICAgIGdyaWQtYXJlYTogY3VycmVudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCB7XG4gICAgICAgIGdyaWQtYXJlYTogZm9yZWNhc3Q7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC8qIGRhaWx5IGZvcmVjYXN0IGl0ZW0gKi9cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGdhcDogMjVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSA+ICoge1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSBoMyxcbiAgICAgICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtIC5oaWdoLWxvdy1jb250YWluZXIsXG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSAuaG91cmx5LXRlbXAge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtIGltZy5jb25kaXRpb24uaWNvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgfVxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gcC5jb25kaXRpb24ge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd29yZC13cmFwOiBub3JtYWw7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICBcbiAgICAvKiBob3VybHkgZm9yZWNhc3QgaXRlbSAqL1xuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuaG91cmx5LWRhdGUtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmhvdXJzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5mb3JlY2FzdC1pdGVtLmhvdXJseS1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgYm9keSAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgICBib2R5ICNjb250ZW50IC5jb250ZW50LWJveC5jdXJyZW50ID4gKiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGJvZHkgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNpdHktcmVnaW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDVweDtcbiAgICB9XG5cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0sXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuZm9yZWNhc3QtaXRlbS5ob3VybHktaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjgwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5ob3Vycy1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgfVxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmZvcmVjYXN0LWl0ZW0uaG91cmx5LWl0ZW0ge1xuICAgICAgICB3aWR0aDogODUlO1xuICAgIH1cbiAgICAgICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtLmxhc3QtaXRlbSxcbiAgICAgICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuZm9yZWNhc3QtaXRlbS5ob3VybHktaXRlbS5sYXN0LWl0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gaDMsXG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSAuaGlnaC1sb3ctY29udGFpbmVyLFxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gLmhvdXJseS10ZW1wIHtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3JjL3Jlc3BvbnNpdmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsU0FBUztRQUNULDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakM7OztzQkFHYztJQUNsQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO1FBQ0k7WUFDSSxnQkFBZ0I7UUFDcEI7UUFDQTtZQUNJLGtCQUFrQjtRQUN0QjtRQUNBO1lBQ0ksWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLDZCQUE2QjtRQUNqQztRQUNBO1lBQ0ksMkJBQTJCO1FBQy9CO1FBQ0E7WUFDSSwyQkFBMkI7UUFDL0I7SUFDSjtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFNBQVM7UUFDVCxhQUFhO1FBQ2IsWUFBWTtJQUNoQjs7SUFFQSx3QkFBd0I7SUFDeEI7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixTQUFTO1FBQ1QsV0FBVztRQUNYLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7UUFDSTs7O1lBR0ksWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLDJCQUEyQjtRQUMvQjtRQUNBO1lBQ0ksWUFBWTtZQUNaLFdBQVc7UUFDZjtRQUNBO1lBQ0ksWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsWUFBWTtRQUNoQjs7SUFFSix5QkFBeUI7SUFDekI7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztJQUNiO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsUUFBUTtJQUNaOztJQUVBOztRQUVJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFFBQVE7UUFDUixrQ0FBa0M7UUFDbEMsb0JBQW9CO1FBQ3BCLFlBQVk7SUFDaEI7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLFVBQVU7SUFDZDtRQUNJOztZQUVJLG1CQUFtQjtRQUN2QjtRQUNBOzs7WUFHSSxXQUFXO1FBQ2Y7QUFDUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICBib2R5ICNjb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgZ2FwOiAyNXB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJzaWRlYmFyXFxcIlxcbiAgICAgICAgICAgIFxcXCJjdXJyZW50XFxcIlxcbiAgICAgICAgICAgIFxcXCJmb3JlY2FzdFxcXCI7XFxuICAgIH1cXG4gICAgI2NvbnRlbnQgLnNpZGViYXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDE0MnB4O1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcbiAgICAjY29udGVudCAuc2lkZWJhci5tYXhpbWl6ZWQge1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3gge1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggZm9ybSB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgI2NvbnRlbnQgLnNpZGViYXIgLmNvbnRlbnQtYm94IGJ1dHRvbi50b2dnbGUtbWVudSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggYnV0dG9uLnRvZ2dsZS1tZW51OmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTA7XFxuICAgICAgICB9XFxuICAgICAgICAjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3ggYnV0dG9uLnRvZ2dsZS1tZW51OmFjdGl2ZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDMwO1xcbiAgICAgICAgfVxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCB7XFxuICAgICAgICBncmlkLWFyZWE6IGN1cnJlbnQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3Qge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBmb3JlY2FzdDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjVweDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAvKiBkYWlseSBmb3JlY2FzdCBpdGVtICovXFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdhcDogMjVweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgfVxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gPiAqIHtcXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB9XFxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gaDMsXFxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gLmhpZ2gtbG93LWNvbnRhaW5lcixcXG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSAuaG91cmx5LXRlbXAge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDA7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIH1cXG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSBpbWcuY29uZGl0aW9uLmljb24ge1xcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcXG4gICAgICAgICAgICB3aWR0aDogNjVweDtcXG4gICAgICAgIH1cXG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSBwLmNvbmRpdGlvbiB7XFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAvKiBob3VybHkgZm9yZWNhc3QgaXRlbSAqL1xcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuaG91cmx5LWRhdGUtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmhvdXJzLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmZvcmVjYXN0LWl0ZW0uaG91cmx5LWl0ZW0ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgYm9keSAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG4gICAgYm9keSAjY29udGVudCAuY29udGVudC1ib3guY3VycmVudCA+ICoge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIGJvZHkgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmN1cnJlbnQgLmNpdHktcmVnaW9uLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0IC5mb3JlY2FzdC1pdGVtLFxcbiAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QuaG91cmx5IC5mb3JlY2FzdC1pdGVtLmhvdXJseS1pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY4MDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdC5ob3VybHkgLmhvdXJzLWNvbnRhaW5lciB7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgIH1cXG4gICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuZm9yZWNhc3QtaXRlbS5ob3VybHktaXRlbSB7XFxuICAgICAgICB3aWR0aDogODUlO1xcbiAgICB9XFxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0ubGFzdC1pdGVtLFxcbiAgICAgICAgI2NvbnRlbnQgLmNvbnRlbnQtYm94LmZvcmVjYXN0LmhvdXJseSAuZm9yZWNhc3QtaXRlbS5ob3VybHktaXRlbS5sYXN0LWl0ZW0ge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gaDMsXFxuICAgICAgICAjY29udGVudCAuY29udGVudC1ib3guZm9yZWNhc3QgLmZvcmVjYXN0LWl0ZW0gLmhpZ2gtbG93LWNvbnRhaW5lcixcXG4gICAgICAgICNjb250ZW50IC5jb250ZW50LWJveC5mb3JlY2FzdCAuZm9yZWNhc3QtaXRlbSAuaG91cmx5LXRlbXAge1xcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBBUElrZXkgPSAnNjg3NzVkZmJlNGM2NGI1NGE5MDE1MzIwMjMyNjA2JzsiLCJleHBvcnQgY29uc3QgaWNvbkltcG9ydHMgPSB7fTtcbmNvbnN0IGRheUljb25zID0gW1wiZGF5LzExMy5wbmdcIixcImRheS8xNDMucG5nXCIsXCJkYXkvMTg1LnBuZ1wiLFwiZGF5LzI0OC5wbmdcIixcImRheS8yODEucG5nXCIsXCJkYXkvMjk5LnBuZ1wiLFwiZGF5LzMxMS5wbmdcIixcImRheS8zMjMucG5nXCIsXCJkYXkvMzM1LnBuZ1wiLFwiZGF5LzM1Ni5wbmdcIixcImRheS8zNjgucG5nXCIsXCJkYXkvMzg2LnBuZ1wiLFwiZGF5LzExNi5wbmdcIixcImRheS8xNzYucG5nXCIsXCJkYXkvMjAwLnBuZ1wiLFwiZGF5LzI2MC5wbmdcIixcImRheS8yODQucG5nXCIsXCJkYXkvMzAyLnBuZ1wiLFwiZGF5LzMxNC5wbmdcIixcImRheS8zMjYucG5nXCIsXCJkYXkvMzM4LnBuZ1wiLFwiZGF5LzM1OS5wbmdcIixcImRheS8zNzEucG5nXCIsXCJkYXkvMzg5LnBuZ1wiLFwiZGF5LzExOS5wbmdcIixcImRheS8xNzkucG5nXCIsXCJkYXkvMjI3LnBuZ1wiLFwiZGF5LzI2My5wbmdcIixcImRheS8yOTMucG5nXCIsXCJkYXkvMzA1LnBuZ1wiLFwiZGF5LzMxNy5wbmdcIixcImRheS8zMjkucG5nXCIsXCJkYXkvMzUwLnBuZ1wiLFwiZGF5LzM2Mi5wbmdcIixcImRheS8zNzQucG5nXCIsXCJkYXkvMzkyLnBuZ1wiLFwiZGF5LzEyMi5wbmdcIixcImRheS8xODIucG5nXCIsXCJkYXkvMjMwLnBuZ1wiLFwiZGF5LzI2Ni5wbmdcIixcImRheS8yOTYucG5nXCIsXCJkYXkvMzA4LnBuZ1wiLFwiZGF5LzMyMC5wbmdcIixcImRheS8zMzIucG5nXCIsXCJkYXkvMzUzLnBuZ1wiLFwiZGF5LzM2NS5wbmdcIixcImRheS8zNzcucG5nXCIsXCJkYXkvMzk1LnBuZ1wiXVxuY29uc3QgbmlnaHRJY29ucyA9IFtcIm5pZ2h0LzExMy5wbmdcIixcIm5pZ2h0LzE0My5wbmdcIixcIm5pZ2h0LzE4NS5wbmdcIixcIm5pZ2h0LzI0OC5wbmdcIixcIm5pZ2h0LzI4MS5wbmdcIixcIm5pZ2h0LzI5OS5wbmdcIixcIm5pZ2h0LzMxMS5wbmdcIixcIm5pZ2h0LzMyMy5wbmdcIixcIm5pZ2h0LzMzNS5wbmdcIixcIm5pZ2h0LzM1Ni5wbmdcIixcIm5pZ2h0LzM2OC5wbmdcIixcIm5pZ2h0LzM4Ni5wbmdcIixcIm5pZ2h0LzExNi5wbmdcIixcIm5pZ2h0LzE3Ni5wbmdcIixcIm5pZ2h0LzIwMC5wbmdcIixcIm5pZ2h0LzI2MC5wbmdcIixcIm5pZ2h0LzI4NC5wbmdcIixcIm5pZ2h0LzMwMi5wbmdcIixcIm5pZ2h0LzMxNC5wbmdcIixcIm5pZ2h0LzMyNi5wbmdcIixcIm5pZ2h0LzMzOC5wbmdcIixcIm5pZ2h0LzM1OS5wbmdcIixcIm5pZ2h0LzM3MS5wbmdcIixcIm5pZ2h0LzM4OS5wbmdcIixcIm5pZ2h0LzExOS5wbmdcIixcIm5pZ2h0LzE3OS5wbmdcIixcIm5pZ2h0LzIyNy5wbmdcIixcIm5pZ2h0LzI2My5wbmdcIixcIm5pZ2h0LzI5My5wbmdcIixcIm5pZ2h0LzMwNS5wbmdcIixcIm5pZ2h0LzMxNy5wbmdcIixcIm5pZ2h0LzMyOS5wbmdcIixcIm5pZ2h0LzM1MC5wbmdcIixcIm5pZ2h0LzM2Mi5wbmdcIixcIm5pZ2h0LzM3NC5wbmdcIixcIm5pZ2h0LzM5Mi5wbmdcIixcIm5pZ2h0LzEyMi5wbmdcIixcIm5pZ2h0LzE4Mi5wbmdcIixcIm5pZ2h0LzIzMC5wbmdcIixcIm5pZ2h0LzI2Ni5wbmdcIixcIm5pZ2h0LzI5Ni5wbmdcIixcIm5pZ2h0LzMwOC5wbmdcIixcIm5pZ2h0LzMyMC5wbmdcIixcIm5pZ2h0LzMzMi5wbmdcIixcIm5pZ2h0LzM1My5wbmdcIixcIm5pZ2h0LzM2NS5wbmdcIixcIm5pZ2h0LzM3Ny5wbmdcIixcIm5pZ2h0LzM5NS5wbmdcIl07XG4vLyBpbXBvcnQgYWxsIHdlYXRoZXJBUEkgaWNvbnNcbltkYXlJY29ucywgbmlnaHRJY29uc10uZmxhdCgpLmZvckVhY2goaWNvbiA9PiBpY29uSW1wb3J0c1tpY29uXSA9IHJlcXVpcmUoYC4vbWVkaWEvYXBpSWNvbnMvJHtpY29ufWApKTtcbi8vIGltcG9ydCBvdGhlciBpY29ucy9pbWFnZXNcbmltcG9ydCBkb3duQ2Fycm90IGZyb20gJy4uL3NyYy9tZWRpYS9kb3duLWNhcnJvdC5zdmcnO1xuaW1wb3J0IG5pZ2h0QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvbWVkaWEvbmlnaHQtYmFja2dyb3VuZC5qcGcnO1xuaW1wb3J0IGRheUJhY2tncm91bmQgZnJvbSAnLi4vc3JjL21lZGlhL2JhY2tncm91bmQtaW1hZ2UzLmpwZyc7XG5pbXBvcnQgbG9hZGluZ0dpZiBmcm9tICcuL21lZGlhL2xvYWRpbmcuZ2lmJztcblxuLy9pbXBvcnQgbW9kdWxlc1xuaW1wb3J0IHsgQVBJa2V5IH0gZnJvbSBcIi4vQVBJa2V5XCI7XG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJy4vdmlldy5qcyc7XG5pbXBvcnQgeyBGb3JtYXQgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCB7IHdlYXRoZXJEYXRhLCBzYXZlZExvY2F0aW9ucyB9IGZyb20gJy4vaW5kZXguanMnO1xuLy8gRE9ORSBXSVRIIElNUE9SVFNcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgICBMb2FkLmluc2VydExvYWRpbmdHSUYoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJa2V5fSZxPSR7bG9jYXRpb259JmRheXM9NyZhcWk9bm8mYWxlcnRzPXllc2AsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBlcnJvciBoYXMgb2NjdXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhhbmRsZVJlc29sdmUoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUmVzb2x2ZShkYXRhKSB7XG4gICAgTG9hZC5yZW1vdmVMb2FkaW5nR0lGKCk7XG4gICAgTG9hZC5yZW1vdmVFcnJvck1lc3NhZ2UoKTtcbiAgICBJbnB1dC5oYW5kbGVEYXRhKGRhdGEpO1xuICAgIFVJLnRvZ2dsZUJhY2tncm91bmRJbWFnZShkYXRhKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyKSB7XG4gICAgTG9hZC5zaG93RXJyb3JNZXNzYWdlKGVycik7XG4gICAgTG9hZC5yZW1vdmVMb2FkaW5nR0lGKCk7XG59XG5cbmV4cG9ydCBjb25zdCBTZXR0aW5ncyA9IHtcbiAgICBtZWFzdXJlbWVudDogJ1VTJywgLy8gJ1VTJyBvciAnbWV0cmljJ1xuICAgIGZvcmVjYXN0OiAnaG91cmx5JywgLy8gJ2hvdXJseScgb3IgJ2RhaWx5J1xufVxuXG5leHBvcnQgY2xhc3MgUG9wdWxhdGUge1xuICAgIHN0YXRpYyBkYWlseU1ldHJpYygpIHtcbiAgICAgICAgTG9hZC5yZW1vdmVXZWF0aGVyKCk7XG4gICAgICAgIExvYWQuY3VycmVudFdlYXRoZXIod2VhdGhlckRhdGEud2VhdGhlci5tZXRyaWMpO1xuICAgICAgICBMb2FkLmZvcmVjYXN0RGFpbHkod2VhdGhlckRhdGEud2VhdGhlci5tZXRyaWMpXG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBkYWlseVVTKCkge1xuICAgICAgICBMb2FkLnJlbW92ZVdlYXRoZXIoKTtcbiAgICAgICAgTG9hZC5jdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF0YS53ZWF0aGVyLlVTKTtcbiAgICAgICAgTG9hZC5mb3JlY2FzdERhaWx5KHdlYXRoZXJEYXRhLndlYXRoZXIuVVMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBob3VybHlNZXRyaWMoKSB7XG4gICAgICAgIExvYWQucmVtb3ZlV2VhdGhlcigpO1xuICAgICAgICBMb2FkLmN1cnJlbnRXZWF0aGVyKHdlYXRoZXJEYXRhLndlYXRoZXIubWV0cmljKTtcbiAgICAgICAgTG9hZC5mb3JlY2FzdEhvdXJseSh3ZWF0aGVyRGF0YS53ZWF0aGVyLm1ldHJpYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhvdXJseVVTKCkge1xuICAgICAgICBMb2FkLnJlbW92ZVdlYXRoZXIoKTtcbiAgICAgICAgTG9hZC5jdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF0YS53ZWF0aGVyLlVTKTtcbiAgICAgICAgTG9hZC5mb3JlY2FzdEhvdXJseSh3ZWF0aGVyRGF0YS53ZWF0aGVyLlVTKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xpY2tVUyhlKSB7XG4gICAgICAgIFNldHRpbmdzLm1lYXN1cmVtZW50ID0gJ1VTJztcbiAgICAgICAgVUkudXBkYXRlTWVhc3VyZW1lbnRCdXR0b25zKGUpO1xuXG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdob3VybHknKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuaG91cmx5VVMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdkYWlseScpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5kYWlseVVTKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWNrTWV0cmljKGUpIHtcbiAgICAgICAgU2V0dGluZ3MubWVhc3VyZW1lbnQgPSAnbWV0cmljJztcbiAgICAgICAgVUkudXBkYXRlTWVhc3VyZW1lbnRCdXR0b25zKGUpO1xuXG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5mb3JlY2FzdCA9PT0gJ2hvdXJseScpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5ob3VybHlNZXRyaWMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdkYWlseScpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5kYWlseU1ldHJpYygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjbGlja0RhaWx5KGUpIHtcbiAgICAgICAgU2V0dGluZ3MuZm9yZWNhc3QgPSAnZGFpbHknO1xuICAgICAgICBVSS51cGRhdGVGb3JlY2FzdEJ1dHRvbnMoZSk7XG5cbiAgICAgICAgaWYgKHdlYXRoZXJEYXRhLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKFNldHRpbmdzLm1lYXN1cmVtZW50ID09PSAnVVMnKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuZGFpbHlVUygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5tZWFzdXJlbWVudCA9PT0gJ21ldHJpYycpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5kYWlseU1ldHJpYygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjbGlja0hvdXJseShlKSB7XG4gICAgICAgIFNldHRpbmdzLmZvcmVjYXN0ID0gJ2hvdXJseSc7XG4gICAgICAgIFVJLnVwZGF0ZUZvcmVjYXN0QnV0dG9ucyhlKTtcblxuICAgICAgICBpZiAod2VhdGhlckRhdGEuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MubWVhc3VyZW1lbnQgPT09ICdVUycpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5ob3VybHlVUygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChTZXR0aW5ncy5tZWFzdXJlbWVudCA9PT0gJ21ldHJpYycpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5ob3VybHlNZXRyaWMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkIHtcbiAgICBzdGF0aWMgZGVmYXVsdFVJKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKEJ1aWxkLnNpZGViYXIoKSk7XG4gICAgICAgIExvYWQuaW5zZXJ0U2F2ZWRDaXRpZXMoKTtcbiAgICAgICAgZ2V0V2VhdGhlcignMTAwMDEnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlV2VhdGhlcigpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJveC5jdXJyZW50Jyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm94LmZvcmVjYXN0Jyk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGN1cnJlbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcmVjYXN0KSB7XG4gICAgICAgICAgICBmb3JlY2FzdC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBpbnNlcnRMb2FkaW5nR0lGKCkge1xuICAgICAgICBjb25zdCBnaWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZ2lmLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmctZ2lmJyk7XG4gICAgICAgIGdpZi5zcmMgPSBsb2FkaW5nR2lmO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGdpZik7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZUxvYWRpbmdHSUYoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5sb2FkaW5nLWdpZicpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjdXJyZW50V2VhdGhlcihkYXRhKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQoQnVpbGQuY3VycmVudFdlYXRoZXIoZGF0YSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JlY2FzdERhaWx5KGRhdGEpIHtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBCdWlsZC5mb3JlY2FzdENvbnRhaW5lcigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgLy8gaWYgKGkgPT09IDYpIGZvciBtb2JpbGUgc3R5bGVcbiAgICAgICAgICAgIGlmIChpID09PSA2KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdEl0ZW0gPSBCdWlsZC5mb3JlY2FzdEl0ZW1EYWlseShkYXRhLmRhaWx5W2ldKTtcbiAgICAgICAgICAgICAgICBsYXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdsYXN0LWl0ZW0nKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsYXN0SXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKEJ1aWxkLmZvcmVjYXN0SXRlbURhaWx5KGRhdGEuZGFpbHlbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQoZm9yZWNhc3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JlY2FzdEhvdXJseShkYXRhKSB7XG4gICAgICAgIC8vIGdldHMgZXhhY3RseSAyNCBob3VycyBvZiBmb3JlY2FzdCBkYXRhIHNwbGl0IGludG8gaG91cnMsIHNvIGRhdGEgbmVlZHMgdG8gYmUgZ3JhYmJlZCBmcm9tIG11bHRpcGxlIGRheXNcbiAgICAgICAgLy8gZ2V0IG51bWJlciB2YWx1ZSBpbiAyNCBociB0aW1lIHJlcHJlc3RpbmcgY3VycmVudCB0aW1lXG4gICAgICAgIGNvbnN0IGN1cnJlbnRIb3VyID0gTnVtYmVyKEZvcm1hdC5nZXRIb3VyMjRIUihkYXRhLmxvY2F0aW9uLmxvY2FsVGltZSkpO1xuICAgICAgICAvLyBnZXQgdGhlIGhvdXJzIGxlZnQgaW4gY3VycmVudCBkYXkncyBob3VybHkgZm9yZWNhc3RcbiAgICAgICAgY29uc3QgY3VycmVudERheUhvdXJzID0gZGF0YS5ob3VybHlbMF0uc2xpY2UoY3VycmVudEhvdXIpO1xuICAgICAgICAvLyBnZXQgdGhlIHJlbWFpbmluZyBob3VycyBuZWVkZWQgdG8gZXF1YWwgMjQgdG90YWwgaG91cnMgZnJvbSB0aGUgbmV4dCBkYXkncyBob3VybHkgZm9yZWNhc3RcbiAgICAgICAgY29uc3QgbmV4dERheUhvdXJzID0gZGF0YS5ob3VybHlbMV0uc2xpY2UoMCwgZGF0YS5ob3VybHlbMV0ubGVuZ3RoIC0gY3VycmVudERheUhvdXJzLmxlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICAvLyBmb3JlY2FzdCBjb250YWluZXIgY29udGFpbnMgMiBtYWluIGNvbnRhaW5lcnMgZm9yIGVhY2ggZGF5XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gQnVpbGQuZm9yZWNhc3RDb250YWluZXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGluc2VydCBkYXRhIGZvciBlYWNoIGhvdXIgb2YgZGF5IG9uZSBpbnRvIGRheSBvbmUncyBjb250YWluZXIgYW5kIGFkZCBkYXkgb25lJ3MgY29udGFpbmVyIHRvIHRoZSBmb3JlY2FzdCBjb250YWluZXJcbiAgICAgICAgY29uc3QgZGF5T25lSG91cmx5RGF0ZUNvbnRhaW5lciA9IEJ1aWxkLmhvdXJseURhdGVDb250YWluZXIoZGF0YS5kYWlseVswXSlcbiAgICAgICAgY29uc3QgZGF5T25lQ29udGVudCA9IGNyZWF0ZUhvdXJzQ29udGFpbmVyKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudERheUhvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gY3VycmVudERheUhvdXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0SXRlbSA9IEJ1aWxkLmZvcmVjYXN0SXRlbUhvdXJseShjdXJyZW50RGF5SG91cnNbaV0pO1xuICAgICAgICAgICAgICAgIGxhc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2xhc3QtaXRlbScpO1xuICAgICAgICAgICAgICAgIGRheU9uZUNvbnRlbnQuYXBwZW5kQ2hpbGQobGFzdEl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXlPbmVDb250ZW50LmFwcGVuZENoaWxkKEJ1aWxkLmZvcmVjYXN0SXRlbUhvdXJseShjdXJyZW50RGF5SG91cnNbaV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRheU9uZUhvdXJseURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5T25lQ29udGVudCk7XG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheU9uZUhvdXJseURhdGVDb250YWluZXIpO1xuXG4gICAgICAgIC8vIHJlcGVhdCBmb3IgZGF5IHR3byBJRiB0aGVyZSBhcmVuJ3QgYWxyZWFkeSAyNCBob3VycyBpbiBkYXkgMVxuICAgICAgICBpZiAoY3VycmVudERheUhvdXJzLmxlbmd0aCAhPT0gMjQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRheVR3b0hvdXJseURhdGVDb250YWluZXIgPSBCdWlsZC5ob3VybHlEYXRlQ29udGFpbmVyKGRhdGEuZGFpbHlbMV0pO1xuICAgICAgICAgICAgY29uc3QgZGF5VHdvQ29udGVudCA9IGNyZWF0ZUhvdXJzQ29udGFpbmVyKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5leHREYXlIb3Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBuZXh0RGF5SG91cnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SXRlbSA9IEJ1aWxkLmZvcmVjYXN0SXRlbUhvdXJseShuZXh0RGF5SG91cnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBsYXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdsYXN0LWl0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgZGF5VHdvQ29udGVudC5hcHBlbmRDaGlsZChsYXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5VHdvQ29udGVudC5hcHBlbmRDaGlsZChCdWlsZC5mb3JlY2FzdEl0ZW1Ib3VybHkobmV4dERheUhvdXJzW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF5VHdvSG91cmx5RGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlUd29Db250ZW50KTtcbiAgICAgICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheVR3b0hvdXJseURhdGVDb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHRoZSBob3VybHkgY2xhc3MgdG8gdGhlIGZvcmVjYXN0IGNvbnRhaW5lciB0byBzZXBhcmF0ZSBzdHlsaW5nIGZvciBob3VybHkgdnMgZGFpbHkgZm9yZWNhc3RcbiAgICAgICAgZm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5Jyk7XG5cbiAgICAgICAgLy8gaW5zZXJ0IGV2ZXJ5dGhpbmcgaW50byB0aGUgZG9jdW1lbnRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChmb3JlY2FzdENvbnRhaW5lcik7XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlSG91cnNDb250YWluZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Vycy1jb250YWluZXInKTtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaW5zZXJ0U2F2ZWRDaXRpZXMoKSB7XG4gICAgICAgIGNvbnN0IGNpdGllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsLnNhdmVkLWNpdGllcycpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzYXZlZExvY2F0aW9ucy5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBjaXR5ID0gQnVpbGQuc2F2ZWRDaXR5SXRlbShrZXksIHNhdmVkTG9jYXRpb25zLmRhdGEpO1xuICAgICAgICAgICAgY2l0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVNhdmVkQ2l0aWVzKCkge1xuICAgICAgICBjb25zdCBjaXRpZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bC5zYXZlZC1jaXRpZXMnKTtcbiAgICAgICAgd2hpbGUoY2l0aWVzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNpdGllc0NvbnRhaW5lci5yZW1vdmVDaGlsZChjaXRpZXNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd0Vycm9yTWVzc2FnZShlcnIpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5zZWFyY2ggcC5lcnJvci1tZXNzYWdlJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IGVyci5tZXNzYWdlO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVFcnJvck1lc3NhZ2UoKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uc2VhcmNoIHAuZXJyb3ItbWVzc2FnZScpO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElucHV0IHtcbiAgICBzdGF0aWMgc3VibWl0TG9jYXRpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNzZWFyY2gtbG9jYXRpb24nKTtcblxuICAgICAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gaW5wdXQudmFsdWUudHJpbUVuZCgpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgZ2V0V2VhdGhlcihsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlRGF0YShkYXRhKSB7XG4gICAgICAgIHdlYXRoZXJEYXRhLnNldERhdGEoZGF0YSk7XG5cbiAgICAgICAgaWYgKFNldHRpbmdzLm1lYXN1cmVtZW50ID09PSAnVVMnKSB7XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdkYWlseScpIHtcbiAgICAgICAgICAgICAgICBQb3B1bGF0ZS5kYWlseVVTKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFNldHRpbmdzLmZvcmVjYXN0ID09PSAnaG91cmx5Jykge1xuICAgICAgICAgICAgICAgIFBvcHVsYXRlLmhvdXJseVVTKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFNldHRpbmdzLm1lYXN1cmVtZW50ID09PSAnbWV0cmljJykge1xuICAgICAgICAgICAgaWYgKFNldHRpbmdzLmZvcmVjYXN0ID09PSAnZGFpbHknKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuZGFpbHlNZXRyaWMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoU2V0dGluZ3MuZm9yZWNhc3QgPT09ICdob3VybHknKSB7XG4gICAgICAgICAgICAgICAgUG9wdWxhdGUuaG91cmx5TWV0cmljKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVUkge1xuICAgIHN0YXRpYyB1cGRhdGVNZWFzdXJlbWVudEJ1dHRvbnMoZSkge1xuICAgICAgICBjb25zdCBVUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5zZXR0aW5ncy51cy1tZWFzdXJlbWVudCcpO1xuICAgICAgICBjb25zdCBtZXRyaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uc2V0dGluZ3MubWV0cmljLW1lYXN1cmVtZW50Jyk7XG4gICAgICAgIFtVUywgbWV0cmljXS5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXNldHRpbmcnKSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1zZXR0aW5nJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZUZvcmVjYXN0QnV0dG9ucyhlKSB7XG4gICAgICAgIGNvbnN0IGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLnNldHRpbmdzLmRhaWx5LWZvcmVjYXN0Jyk7XG4gICAgICAgIGNvbnN0IGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5zZXR0aW5ncy5ob3VybHktZm9yZWNhc3QnKTtcbiAgICAgICAgW2RhaWx5LCBob3VybHldLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tc2V0dGluZycpKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXNldHRpbmcnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9nZ2xlQmFja2dyb3VuZEltYWdlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGlmIChkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24uaW5jbHVkZXMoJy9uaWdodC8nKSkge1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bmlnaHRCYWNrZ3JvdW5kfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF5QmFja2dyb3VuZH0pYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBleHBhbmRNb2JpbGVTaWRlYmFyKGUpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50IC5zaWRlYmFyJyk7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnbWF4aW1pemVkJyk7XG5cbiAgICAgICAgY29uc3QgbWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbWluaW1pemVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLW1lbnUnKTtcbiAgICAgICAgbWluaW1pemVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWluaW1pemUnKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpY29uLnNyYyA9IGRvd25DYXJyb3Q7XG4gICAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgxODBkZWcpJztcbiAgICAgICAgbWluaW1pemVCdXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIG1pbmltaXplQnV0dG9uLm9uY2xpY2sgPSBVSS5taW5pbWl6ZU1vYmlsZVNpZGViYXI7XG5cbiAgICAgICAgY29uc3Qgc2lkZWJhckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCAuc2lkZWJhciAuY29udGVudC1ib3gnKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQobWluaW1pemVCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IG1heGltaXplQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtbWVudS5tYXhpbWl6ZScpO1xuICAgICAgICBtYXhpbWl6ZUJ1dHRvbnMuZm9yRWFjaChidG4gPT4gYnRuLnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWluaW1pemVNb2JpbGVTaWRlYmFyKGUpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50IC5zaWRlYmFyJyk7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnbWF4aW1pemVkJyk7XG5cbiAgICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLnRvZ2dsZS1tZW51Jyk7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xuICAgICAgICBleHBhbmRCdXR0b24uc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXG4gICAgICAgIGNvbnN0IG1heGltaXplQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG1heGltaXplQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1tZW51Jyk7XG4gICAgICAgIG1heGltaXplQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21heGltaXplJyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWNvbi5zcmMgPSBkb3duQ2Fycm90O1xuICAgICAgICBtYXhpbWl6ZUJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgbWF4aW1pemVCdXR0b24ub25jbGljayA9IFVJLmV4cGFuZE1vYmlsZVNpZGViYXI7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyIC5jb250ZW50LWJveCBmb3JtLnNlYXJjaCcpO1xuICAgICAgICBmb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBtYXhpbWl6ZUJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgbWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLW1lbnUubWluaW1pemUnKTtcbiAgICAgICAgbWluaW1pemVCdXR0b24ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNhdmVMb2NhdGlvbigpIHtcbiAgICAgICAgc2F2ZWRMb2NhdGlvbnMuc2F2ZUxvY2F0aW9uKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgTG9hZC5yZW1vdmVTYXZlZENpdGllcygpO1xuICAgICAgICBMb2FkLmluc2VydFNhdmVkQ2l0aWVzKCk7XG4gICAgfSAgICBcblxuICAgIHN0YXRpYyByZW1vdmVMb2NhdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IGlkID0gVUkuZ2V0Q2l0eUlEKGUpO1xuICAgICAgICBzYXZlZExvY2F0aW9ucy5yZW1vdmVMb2NhdGlvbihpZCk7XG4gICAgICAgIExvYWQucmVtb3ZlU2F2ZWRDaXRpZXMoKTtcbiAgICAgICAgTG9hZC5pbnNlcnRTYXZlZENpdGllcygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGlja1NhdmVkTG9jYXRpb24oZSkge1xuICAgICAgICBjb25zdCBpZCA9IFVJLmdldENpdHlJRChlKTtcbiAgICAgICAgZ2V0V2VhdGhlcihzYXZlZExvY2F0aW9ucy5kYXRhW2lkXSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldENpdHlJRChlKSB7XG4gICAgICAgIGxldCBub2RlID0gZS50YXJnZXQ7XG4gICAgICAgIHdoaWxlICghbm9kZS5nZXRBdHRyaWJ1dGUoJ3NhdmVkLWlkJykpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGUuZ2V0QXR0cmlidXRlKCdzYXZlZC1pZCcpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0ICcuL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBMb2FkIH0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCB7IFdlYXRoZXJEYXRhLCBTYXZlZExvY2F0aW9ucyB9IGZyb20gJy4vbW9kZWwuanMnO1xuXG5leHBvcnQgY29uc3Qgd2VhdGhlckRhdGEgPSBuZXcgV2VhdGhlckRhdGEoKTtcbmV4cG9ydCBjb25zdCBzYXZlZExvY2F0aW9ucyA9IG5ldyBTYXZlZExvY2F0aW9ucygpO1xuc2F2ZWRMb2NhdGlvbnMuZ2V0U3RvcmFnZSgpO1xuXG5Mb2FkLmRlZmF1bHRVSSgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NTBweCknKTtcbiAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXIgLmNvbnRlbnQtYm94Jykuc2Nyb2xsVG8oMCwwKTtcbiAgICB9XG59KTtcblxuXG5cblxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2RheS8xMTMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzExMy5wbmdcIixcblx0XCIuL2RheS8xMTYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzExNi5wbmdcIixcblx0XCIuL2RheS8xMTkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzExOS5wbmdcIixcblx0XCIuL2RheS8xMjIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzEyMi5wbmdcIixcblx0XCIuL2RheS8xNDMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzE0My5wbmdcIixcblx0XCIuL2RheS8xNzYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzE3Ni5wbmdcIixcblx0XCIuL2RheS8xNzkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzE3OS5wbmdcIixcblx0XCIuL2RheS8xODIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzE4Mi5wbmdcIixcblx0XCIuL2RheS8xODUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzE4NS5wbmdcIixcblx0XCIuL2RheS8yMDAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzIwMC5wbmdcIixcblx0XCIuL2RheS8yMjcucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzIyNy5wbmdcIixcblx0XCIuL2RheS8yMzAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzIzMC5wbmdcIixcblx0XCIuL2RheS8yNDgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI0OC5wbmdcIixcblx0XCIuL2RheS8yNjAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI2MC5wbmdcIixcblx0XCIuL2RheS8yNjMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI2My5wbmdcIixcblx0XCIuL2RheS8yNjYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI2Ni5wbmdcIixcblx0XCIuL2RheS8yODEucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI4MS5wbmdcIixcblx0XCIuL2RheS8yODQucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI4NC5wbmdcIixcblx0XCIuL2RheS8yOTMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI5My5wbmdcIixcblx0XCIuL2RheS8yOTYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI5Ni5wbmdcIixcblx0XCIuL2RheS8yOTkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzI5OS5wbmdcIixcblx0XCIuL2RheS8zMDIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMwMi5wbmdcIixcblx0XCIuL2RheS8zMDUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMwNS5wbmdcIixcblx0XCIuL2RheS8zMDgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMwOC5wbmdcIixcblx0XCIuL2RheS8zMTEucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMxMS5wbmdcIixcblx0XCIuL2RheS8zMTQucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMxNC5wbmdcIixcblx0XCIuL2RheS8zMTcucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMxNy5wbmdcIixcblx0XCIuL2RheS8zMjAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMyMC5wbmdcIixcblx0XCIuL2RheS8zMjMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMyMy5wbmdcIixcblx0XCIuL2RheS8zMjYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMyNi5wbmdcIixcblx0XCIuL2RheS8zMjkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMyOS5wbmdcIixcblx0XCIuL2RheS8zMzIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMzMi5wbmdcIixcblx0XCIuL2RheS8zMzUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMzNS5wbmdcIixcblx0XCIuL2RheS8zMzgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzMzOC5wbmdcIixcblx0XCIuL2RheS8zNTAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM1MC5wbmdcIixcblx0XCIuL2RheS8zNTMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM1My5wbmdcIixcblx0XCIuL2RheS8zNTYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM1Ni5wbmdcIixcblx0XCIuL2RheS8zNTkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM1OS5wbmdcIixcblx0XCIuL2RheS8zNjIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM2Mi5wbmdcIixcblx0XCIuL2RheS8zNjUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM2NS5wbmdcIixcblx0XCIuL2RheS8zNjgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM2OC5wbmdcIixcblx0XCIuL2RheS8zNzEucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM3MS5wbmdcIixcblx0XCIuL2RheS8zNzQucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM3NC5wbmdcIixcblx0XCIuL2RheS8zNzcucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM3Ny5wbmdcIixcblx0XCIuL2RheS8zODYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM4Ni5wbmdcIixcblx0XCIuL2RheS8zODkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM4OS5wbmdcIixcblx0XCIuL2RheS8zOTIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM5Mi5wbmdcIixcblx0XCIuL2RheS8zOTUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvZGF5LzM5NS5wbmdcIixcblx0XCIuL25pZ2h0LzExMy5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8xMTMucG5nXCIsXG5cdFwiLi9uaWdodC8xMTYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMTE2LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMTE5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzExOS5wbmdcIixcblx0XCIuL25pZ2h0LzEyMi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8xMjIucG5nXCIsXG5cdFwiLi9uaWdodC8xNDMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMTQzLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMTc2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzE3Ni5wbmdcIixcblx0XCIuL25pZ2h0LzE3OS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8xNzkucG5nXCIsXG5cdFwiLi9uaWdodC8xODIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMTgyLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMTg1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzE4NS5wbmdcIixcblx0XCIuL25pZ2h0LzIwMC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yMDAucG5nXCIsXG5cdFwiLi9uaWdodC8yMjcucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjI3LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjMwLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzIzMC5wbmdcIixcblx0XCIuL25pZ2h0LzI0OC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yNDgucG5nXCIsXG5cdFwiLi9uaWdodC8yNjAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjYwLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjYzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzI2My5wbmdcIixcblx0XCIuL25pZ2h0LzI2Ni5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yNjYucG5nXCIsXG5cdFwiLi9uaWdodC8yODEucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjgxLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjg0LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzI4NC5wbmdcIixcblx0XCIuL25pZ2h0LzI5My5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8yOTMucG5nXCIsXG5cdFwiLi9uaWdodC8yOTYucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMjk2LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMjk5LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzI5OS5wbmdcIixcblx0XCIuL25pZ2h0LzMwMi5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMDIucG5nXCIsXG5cdFwiLi9uaWdodC8zMDUucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzA1LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzA4LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMwOC5wbmdcIixcblx0XCIuL25pZ2h0LzMxMS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMTEucG5nXCIsXG5cdFwiLi9uaWdodC8zMTQucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzE0LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzE3LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMxNy5wbmdcIixcblx0XCIuL25pZ2h0LzMyMC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMjAucG5nXCIsXG5cdFwiLi9uaWdodC8zMjMucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzIzLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzI2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMyNi5wbmdcIixcblx0XCIuL25pZ2h0LzMyOS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMjkucG5nXCIsXG5cdFwiLi9uaWdodC8zMzIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzMyLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzM1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzMzNS5wbmdcIixcblx0XCIuL25pZ2h0LzMzOC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zMzgucG5nXCIsXG5cdFwiLi9uaWdodC8zNTAucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzUwLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzUzLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM1My5wbmdcIixcblx0XCIuL25pZ2h0LzM1Ni5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNTYucG5nXCIsXG5cdFwiLi9uaWdodC8zNTkucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzU5LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzYyLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM2Mi5wbmdcIixcblx0XCIuL25pZ2h0LzM2NS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNjUucG5nXCIsXG5cdFwiLi9uaWdodC8zNjgucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzY4LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzcxLnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM3MS5wbmdcIixcblx0XCIuL25pZ2h0LzM3NC5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zNzQucG5nXCIsXG5cdFwiLi9uaWdodC8zNzcucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzc3LnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzg2LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM4Ni5wbmdcIixcblx0XCIuL25pZ2h0LzM4OS5wbmdcIjogXCIuL3NyYy9tZWRpYS9hcGlJY29ucy9uaWdodC8zODkucG5nXCIsXG5cdFwiLi9uaWdodC8zOTIucG5nXCI6IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMvbmlnaHQvMzkyLnBuZ1wiLFxuXHRcIi4vbmlnaHQvMzk1LnBuZ1wiOiBcIi4vc3JjL21lZGlhL2FwaUljb25zL25pZ2h0LzM5NS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvbWVkaWEvYXBpSWNvbnMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJleHBvcnQgY2xhc3MgV2VhdGhlckRhdGEge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy53ZWF0aGVyID0ge1VTOnt9LCBtZXRyaWM6e319O1xuICAgIH1cblxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLndlYXRoZXIuVVMpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gICAgXG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldEN1cnJlbnQoZGF0YSk7XG4gICAgICAgIGNvbnN0IGRhaWx5ID0gdGhpcy5nZXREYWlseUZvcmVjYXN0KGRhdGEpO1xuICAgICAgICBjb25zdCBob3VybHkgPSB0aGlzLmdldEhvdXJseUZvcmVjYXN0KGRhdGEpO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy53ZWF0aGVyLCB0aGlzLmdldExvY2F0aW9uKGRhdGEpKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndlYXRoZXIuVVMsIGN1cnJlbnQuVVMpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMud2VhdGhlci5VUywgZGFpbHkuVVMpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMud2VhdGhlci5VUywgaG91cmx5LlVTKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndlYXRoZXIubWV0cmljLCBjdXJyZW50Lm1ldHJpYyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy53ZWF0aGVyLm1ldHJpYywgZGFpbHkubWV0cmljKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndlYXRoZXIubWV0cmljLCBob3VybHkubWV0cmljKTtcbiAgICB9XG5cbiAgICBnZXRMb2NhdGlvbihkYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBVUzoge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IGRhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiBkYXRhLmxvY2F0aW9uLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTogRm9ybWF0LmFiYnJldmlhdGVDb3VudHJ5TmFtZShkYXRhLmxvY2F0aW9uLmNvdW50cnkpLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbFRpbWU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0cmljOiB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogZGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICByZWdpb246IGRhdGEubG9jYXRpb24ucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBGb3JtYXQuYWJicmV2aWF0ZUNvdW50cnlOYW1lKGRhdGEubG9jYXRpb24uY291bnRyeSksXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsVGltZTogZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEN1cnJlbnQoZGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgVVM6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkLFxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogRm9ybWF0LmdldEljb25QYXRoKGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbiksXG4gICAgICAgICAgICAgICAgICAgIHJhaW5DaGFuY2U6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgICAgICAgICAgICAgICAgICBzbm93Q2hhbmNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2Zfc25vdyxcbiAgICAgICAgICAgICAgICAgICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgICAgICAgICAgICAgcHJlc3N1cmU6IGRhdGEuY3VycmVudC5wcmVzc3VyZV9pbiArICcgaW5IZycsXG4gICAgICAgICAgICAgICAgICAgIHRlbXA6IGRhdGEuY3VycmVudC50ZW1wX2YgKyAnXFx1MDBCMCBGJyxcbiAgICAgICAgICAgICAgICAgICAgZmVlbHNMaWtlOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YgKyAnXFx1MDBCMCcsXG4gICAgICAgICAgICAgICAgICAgIHdpbmQ6IGRhdGEuY3VycmVudC53aW5kX21waCArICcgbXBoJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0cmljOiB7XG4gICAgICAgICAgICAgICAgY3VycmVudDoge1xuICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZDogZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZCxcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGljb246IEZvcm1hdC5nZXRJY29uUGF0aChkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24pLFxuICAgICAgICAgICAgICAgICAgICByYWluQ2hhbmNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICAgICAgICAgICAgc25vd0NoYW5jZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3Nub3csXG4gICAgICAgICAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgICAgICAgICAgICAgIHByZXNzdXJlOiBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyAnIG1iJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcDogZGF0YS5jdXJyZW50LnRlbXBfYyArICdcXHUwMEIwIEMnLFxuICAgICAgICAgICAgICAgICAgICBmZWVsc0xpa2U6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyArICdcXHUwMEIwJyxcbiAgICAgICAgICAgICAgICAgICAgd2luZDogZGF0YS5jdXJyZW50LndpbmRfa3BoICsgJyBrcGgnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERhaWx5Rm9yZWNhc3QoZGF0YSkge1xuICAgICAgICBjb25zdCBkYWlseUZvcmVjYXN0ID0geyBVUzoge2RhaWx5OltdfSwgbWV0cmljOiB7ZGFpbHk6W119fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZURheSA9IHRoaXMuc2V0U2luZ2xlRGF5Rm9yZWNhc3QoZGF0YSwgaSk7XG4gICAgICAgICAgICBkYWlseUZvcmVjYXN0LlVTLmRhaWx5LnB1c2goc2luZ2xlRGF5LlVTKTtcbiAgICAgICAgICAgIGRhaWx5Rm9yZWNhc3QubWV0cmljLmRhaWx5LnB1c2goc2luZ2xlRGF5Lm1ldHJpYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGFpbHlGb3JlY2FzdDtcbiAgICB9XG5cbiAgICBzZXRTaW5nbGVEYXlGb3JlY2FzdChkYXRhLCBpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBVUzoge1xuICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSxcbiAgICAgICAgICAgICAgICBoaWdoVGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9mLFxuICAgICAgICAgICAgICAgIGxvd1RlbXA6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfZixcbiAgICAgICAgICAgICAgICBjb25kaXRpb246IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgIGljb246IEZvcm1hdC5nZXRJY29uUGF0aChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0cmljOiB7XG4gICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlLFxuICAgICAgICAgICAgICAgIGhpZ2hUZW1wOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgICAgICAgbG93VGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9jLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgaWNvbjogRm9ybWF0LmdldEljb25QYXRoKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEhvdXJseUZvcmVjYXN0KGRhdGEpIHtcbiAgICAgICAgLy8gZ2V0cyBjdXJyZW50IGRheSBhbmQgbmV4dCBkYXkgaG91cmx5IGRhdGEgZnJvbSBmZXRjaGVkIGRzdGFcbiAgICAgICAgLy8gbmVlZHMgYm90aCBkYXlzIGZvciBVSSB3aGljaCBkaXNwbGF5cyBhIDI0IGhvdXJzIGluIGhvdXIgaW5jcmVtZW50c1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdHdvRGF5cyA9IHsgVVM6IHtob3VybHk6W119LCBtZXRyaWM6IHtob3VybHk6W119fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdHdvRGF5cy5VUy5ob3VybHkucHVzaChbXSk7XG4gICAgICAgICAgICB0d29EYXlzLm1ldHJpYy5ob3VybHkucHVzaChbXSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjQ7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJEYXRhID0gdGhpcy5zZXRIb3VyKGRhdGEsIGksIGopO1xuICAgICAgICAgICAgICAgIHR3b0RheXMuVVMuaG91cmx5W2ldLnB1c2goaG91ckRhdGEuVVMpO1xuICAgICAgICAgICAgICAgIHR3b0RheXMubWV0cmljLmhvdXJseVtpXS5wdXNoKGhvdXJEYXRhLm1ldHJpYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHdvRGF5cztcbiAgICB9XG5cbiAgICBzZXRIb3VyKGRhdGEsIGksIGopIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFVTOiB7XG4gICAgICAgICAgICAgICAgdGltZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2pdLnRpbWUsXG4gICAgICAgICAgICAgICAgdGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2pdLnRlbXBfZixcbiAgICAgICAgICAgICAgICBjb25kaXRpb246IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uaG91cltqXS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICBpY29uOiBGb3JtYXQuZ2V0SWNvblBhdGgoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2pdLmNvbmRpdGlvbi5pY29uKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRyaWM6IHtcbiAgICAgICAgICAgICAgICB0aW1lOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0udGltZSxcbiAgICAgICAgICAgICAgICB0ZW1wOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0udGVtcF9jLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2pdLmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgIGljb246IEZvcm1hdC5nZXRJY29uUGF0aChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJbal0uY29uZGl0aW9uLmljb24pLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ybWF0IHtcblxuICAgIC8vIGdldHMgdGhlIHByb3BlcnR5IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVmZXJlbmNlIGFuIGltcG9ydGVkIGljb25cbiAgICAvLyBpY29uSW1wb3J0c1tGb3JtYXQuZ2V0SWNvblBhdGgoc3RyaW5nKV07XG4gICAgc3RhdGljIGdldEljb25QYXRoKHN0cmluZykge1xuICAgICAgICBpZiAoc3RyaW5nLmluY2x1ZGVzKCduaWdodCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gYG5pZ2h0LyR7c2xpY2VTdHJpbmcoc3RyaW5nKX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cmluZy5pbmNsdWRlcygnZGF5JykpIHtcbiAgICAgICAgICAgIHJldHVybiBgZGF5LyR7c2xpY2VTdHJpbmcoc3RyaW5nKX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2xpY2VTdHJpbmcoc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKHN0cmluZy5sZW5ndGggLSA3LCBzdHJpbmcubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXREYXlOYW1lTG9uZyhzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKEZvcm1hdC5oeXBoZW5hdGUoc3RyaW5nKSk7XG4gICAgICAgIHJldHVybiBbJ1N1bmRheScsJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVtkYXRlLmdldERheSgpXTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGdldERheU5hbWVTaG9ydChzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKEZvcm1hdC5oeXBoZW5hdGUoc3RyaW5nKSk7XG4gICAgICAgIHJldHVybiBbJ1N1bicsJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J11bZGF0ZS5nZXREYXkoKV07XG4gICAgfVxuMlxuICAgIHN0YXRpYyBnZXREYXlOdW1iZXIoc3RyaW5nKSB7XG4gICAgICAgIC8vIHN0cmluZyByZXByZXN0aW5nIGRhdGUgbXVzdCBiZSBpbiAneXl5eS1NTS1kZCcgZm9ybWF0XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJy0nKVsyXS5zbGljZSgwLDIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRNb250aE5hbWUoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVtuZXcgRGF0ZShzdHJpbmcpLmdldE1vbnRoKCldO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREYXlOdW1iZXJQcmVmaXgoc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IG5ldyBEYXRlKEZvcm1hdC5oeXBoZW5hdGUoc3RyaW5nKSkuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgc3VmZml4ID0gJ3RoJztcblxuICAgICAgICBpZiAobnVtYmVyID09IDEgfHwgbnVtYmVyID09IDIxIHx8IG51bWJlciA9PSAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlciA9PSAyIHx8IG51bWJlciA9PSAyMikge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlciA9PSAzIHx8IG51bWJlciA9PSAyMykge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgc3VmZml4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERheU51bWJlckREKHN0cmluZykge1xuICAgICAgICByZXR1cm4gRm9ybWF0LmdldERheU51bWJlcihzdHJpbmcpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFllYXJOdW1iZXIoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShzdHJpbmcpLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFNwb2tlbkRhdGUoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldERheU5hbWVMb25nKHN0cmluZyl9LCAke3RoaXMuZ2V0TW9udGhOYW1lKHN0cmluZyl9ICR7dGhpcy5nZXREYXlOdW1iZXJQcmVmaXgoc3RyaW5nKX0sICR7dGhpcy5nZXRZZWFyTnVtYmVyKHN0cmluZyl9YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0TG9jYWxlVGltZShzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0cmluZykudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIGlmIChkYXRlLmxlbmd0aCA9PT0gMTEpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLnNsaWNlKDAsNSkgKyBkYXRlLnNsaWNlKDksMTEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5zbGljZSgwLDQpICsgZGF0ZS5zbGljZSg4LDEwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEhvdXIyNEhSKHN0cmluZykge1xuICAgICAgICAvLyByZXR1cm5zIHRoZSBob3VyIG9mIGEgZGF0ZSBpbiB0aGUgZm9ybWF0ICdoaCdcbiAgICAgICAgLy8gdG8gYmUgdXNlZCB3aXRoIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uaG91cltpXS50aW1lXG4gICAgICAgIC8vIGRhdGUgbXVzdCBiZSBmb3JtYXR0ZWQgaW4gJ3l5eXktTU0tZGQgaGgtbW1cIiBmb3JtYXRcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgnICcpWzFdLnNwbGl0KCc6JylbMF07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEhvdXJBTVBNKHN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRlZFN0cmluZyA9IG5ldyBEYXRlKHN0cmluZykudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBkYXRlZFN0cmluZy5zcGxpdCgnICcpWzBdLnNwbGl0KCc6JylbMF0gKyBkYXRlZFN0cmluZy5zcGxpdCgnICcpWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFiYnJldmlhdGVDb3VudHJ5TmFtZShzdHJpbmcpIHtcbiAgICAgICAgaWYgKHN0cmluZyA9PT0gJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYScpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlVTQVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBoeXBoZW5hdGUoc3RyaW5nKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc1NTY1OTEvaXMtdGhlLWphdmFzY3JpcHQtZGF0ZS1vYmplY3QtYWx3YXlzLW9uZS1kYXktb2ZmXG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJy0nKS5qb2luKCcvJyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2F2ZWRMb2NhdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgfVxuXG4gICAgc2F2ZUxvY2F0aW9uKHdlYXRoZXJEYXRhKSB7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5jcmVhdGVJRCgpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IFtgJHt3ZWF0aGVyRGF0YS53ZWF0aGVyLlVTLmxvY2F0aW9uLmNpdHl9YCwgYCR7d2VhdGhlckRhdGEud2VhdGhlci5VUy5sb2NhdGlvbi5yZWdpb259LCAke3dlYXRoZXJEYXRhLndlYXRoZXIuVVMubG9jYXRpb24uY291bnRyeX1gXTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmlzVW5pcXVlTG9jYXRpb24obG9jYXRpb24pKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbaWRdID0gbG9jYXRpb247XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlTG9jYXRpb24oaWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YVtpZF07XG5cbiAgICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBpc1VuaXF1ZUxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVtrZXldWzBdID09PSBsb2NhdGlvblswXSAmJiB0aGlzLmRhdGFba2V5XVsxXSA9PT0gbG9jYXRpb25bMV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY3JlYXRlSUQoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gY3JlYXRlSUQoKTtcblxuICAgICAgICB3aGlsZSAoT2JqZWN0LmtleXModGhpcy5kYXRhKS5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICAgIGlkID0gY3JlYXRlSUQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZDtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVJRCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogODk5OSArIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuIGlkLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYXZlZExvY2F0aW9ucycsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xuICAgIH1cblxuICAgIGdldFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2F2ZWRMb2NhdGlvbnMnKSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGEsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NhdmVkTG9jYXRpb25zJykpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgaWNvbkltcG9ydHMgfSBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuL21lZGlhL3NlYXJjaC5zdmcnO1xuaW1wb3J0IGRvd25DYXJyb3QgZnJvbSAnLi9tZWRpYS9kb3duLWNhcnJvdC5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9tZWRpYS9kZWxldGUuc3ZnJztcbmltcG9ydCB0aGVybW9tZXRlciBmcm9tICcuL21lZGlhL3RoZXJtb21ldGVyLnN2Zyc7XG5pbXBvcnQgd2luZCBmcm9tICcuL21lZGlhL3dpbmQuc3ZnJztcbmltcG9ydCByYWluIGZyb20gJy4vbWVkaWEvcmFpbi5zdmcnO1xuaW1wb3J0IHNub3cgZnJvbSAnLi9tZWRpYS9zbm93LnN2Zyc7XG5pbXBvcnQgaHVtaWRpdHkgZnJvbSAnLi9tZWRpYS9odW1pZGl0eS5zdmcnO1xuaW1wb3J0IHByZXNzdXJlIGZyb20gJy4vbWVkaWEvcHJlc3N1cmUuc3ZnJ1xuXG5pbXBvcnQgeyBJbnB1dCwgUG9wdWxhdGUsIFVJIH0gZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgRm9ybWF0IH0gZnJvbSBcIi4vbW9kZWwuanNcIjtcblxuY2xhc3MgRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICd0YWduYW1lJzonZGl2JyxcbiAgICAgICAgfVxuICAgICkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLy9uZXcgRWxlbWVudCgpLmJ1aWxkKCkgd2lsbCBkZWZhdWx0IHRvIGEgY3JlYXRlZCBkaXYgZWxlbWVudFxuICAgICAgICAvL2lmIGEgY29uZmlnIG9iamVjdCBpcyBwYXNzZWQgaW4gYXMgYSBwYXJhbWV0ZXIsIHRoZW4gYSB0YWduYW1lIHByb3BlcnR5IGFsd2F5cyBuZWVkcyB0byBiZSBhZGRlZFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmNvbmZpZ1sndGFnbmFtZSddKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IG11bHRpcGxlIGNsYXNzbmFtZXMgaW4gc2luZ2xlIGRlY2xhcmF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IHRoaXMuY29uZmlnWydjbGFzcyddLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnWydjbGFzcyddKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBjbGFzc05hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5jb25maWdbJ2lkJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcGVydHkgPT09ICd0ZXh0LWNvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuY29uZmlnWyd0ZXh0LWNvbnRlbnQnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnZXZlbnQtbGlzdGVuZXJzJykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5jb25maWdbJ2V2ZW50LWxpc3RlbmVycyddKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHByb3BlcnR5LCB0aGlzLmNvbmZpZ1snZXZlbnQtbGlzdGVuZXJzJ11bcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gJ3NyYycpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNyYyA9IHRoaXMuY29uZmlnWydzcmMnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY2hpbGQgbXVzdCBiZSBidWlsdCB1c2luZyB0aGlzLmJ1aWxkKClcbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGNoaWxkIG9mIHRoaXMuY29uZmlnWydjaGlsZHJlbiddKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcGVydHkgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5jb25maWdbJ3N0eWxlJ10pe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHRoaXMuY29uZmlnWydzdHlsZSddW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSAhPT0gJ3RhZ25hbWUnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHRoaXMuY29uZmlnW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCdWlsZCB7XG4gICAgc3RhdGljIHNpZGViYXIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ3NpZGViYXInLFxuICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2Zvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdzZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnc3VibWl0JzpJbnB1dC5zdWJtaXRMb2NhdGlvbn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ3NlYXJjaC1sb2NhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2VhcmNoLWxvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICd6aXAgY29kZSBvciBjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdXRvZm9jdXMnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3NlYXJjaC1pY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6IHNlYXJjaEljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnc2VhcmNoLWljb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdlcnJvci1tZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnTm8gbWF0Y2hpbmcgbG9jYXRpb24gZm91bmQuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0b2dnbGUtbWVudSBtYXhpbWl6ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50LWxpc3RlbmVycyc6eydjbGljayc6VUkuZXhwYW5kTW9iaWxlU2lkZWJhcn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6IGRvd25DYXJyb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJ2V4cGFuZC1tZW51JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdoMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdTZXR0aW5ncycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3NldHRpbmdzLWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaDQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdNZWFzdXJlbWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndG9nZ2xlLWNvbnRhaW5lciBtZWFzdXJlbWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ1VTJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzonc2V0dGluZ3MgdXMtbWVhc3VyZW1lbnQgY2hvc2VuLXNldHRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQtbGlzdGVuZXJzJzp7J2NsaWNrJzpQb3B1bGF0ZS5jbGlja1VTfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdNZXRyaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidzZXR0aW5ncyBtZXRyaWMtbWVhc3VyZW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQtbGlzdGVuZXJzJzp7J2NsaWNrJzpQb3B1bGF0ZS5jbGlja01ldHJpY30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2g0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnRm9yZWNhc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RvZ2dsZS1jb250YWluZXIgZm9yZWNhc3QtaG91cmx5IGNob3Nlbi1zZXR0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnSG91cmx5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzonc2V0dGluZ3MgaG91cmx5LWZvcmVjYXN0IGNob3Nlbi1zZXR0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50LWxpc3RlbmVycyc6eydjbGljayc6UG9wdWxhdGUuY2xpY2tIb3VybHl9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ0RhaWx5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzonc2V0dGluZ3MgZGFpbHktZm9yZWNhc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQtbGlzdGVuZXJzJzp7J2NsaWNrJzpQb3B1bGF0ZS5jbGlja0RhaWx5fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdoMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdTYXZlZCBMb2NhdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3NhdmVkLWNpdGllcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5idWlsZCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzYXZlZENpdHlJdGVtKGtleSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgJ3RhZ25hbWUnOiAnbGknLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ2NpdHktbmFtZScsXG4gICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAnc2F2ZWQtSUQnOiBgJHtrZXl9YCxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xlZnQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ2V2ZW50LWxpc3RlbmVycyc6eydjbGljayc6IFVJLmNsaWNrU2F2ZWRMb2NhdGlvbn0sXG4gICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdoMycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGFba2V5XVswXX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncmVnaW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YVtrZXldWzFdfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3NhdmVkLUlEJzogYCR7a2V5fWAsXG4gICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdkZWxldGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiBkZWxldGVJY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnY2xpY2snOlVJLnJlbW92ZUxvY2F0aW9ufSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5idWlsZCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjdXJyZW50V2VhdGhlcihkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbnRlbnQtYm94IGN1cnJlbnQnLFxuICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NpdHktcmVnaW9uLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdoMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmxvY2F0aW9uLmNpdHl9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaDUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdyZWdpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmxvY2F0aW9uLnJlZ2lvbn0sICR7ZGF0YS5sb2NhdGlvbi5jb3VudHJ5fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGltZS1kYXRlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnYXMgb2YnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBGb3JtYXQuZ2V0TG9jYWxlVGltZShkYXRhLmN1cnJlbnQubGFzdFVwZGF0ZWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogRm9ybWF0LmdldFNwb2tlbkRhdGUoZGF0YS5jdXJyZW50Lmxhc3RVcGRhdGVkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGVtcCcsXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmN1cnJlbnQudGVtcH1gLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29uZGl0aW9uLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiBpY29uSW1wb3J0c1tkYXRhLmN1cnJlbnQuaWNvbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICd3ZWF0aGVyLWljb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb25kaXRpb24taWNvbiBpY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEuY3VycmVudC5jb25kaXRpb259YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd3ZWF0aGVyLXByb3BlcnRpZXMnLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnd2VhdGhlci1wcm9wZXJ0eSBmZWVscy1saWtlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogdGhlcm1vbWV0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogJ2ZlZWxzLWxpa2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JpZ2h0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdGZWVscyBsaWtlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmN1cnJlbnQuZmVlbHNMaWtlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd3ZWF0aGVyLXByb3BlcnR5IHdpbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiB3aW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICd3aW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdyaWdodC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnV2luZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50LndpbmR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd3ZWF0aGVyLXByb3BlcnR5IGNoYW5jZS1yYWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogcmFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAncmFpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAncmlnaHQtY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJ1JhaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEuY3VycmVudC5yYWluQ2hhbmNlfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dlYXRoZXItcHJvcGVydHkgY2hhbmNlLXNub3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiBzbm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICdzbm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdyaWdodC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiAnU25vdzonLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEuY3VycmVudC5zbm93Q2hhbmNlfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dlYXRoZXItcHJvcGVydHkgaHVtaWRpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiBodW1pZGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAnaHVtaWRpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JpZ2h0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdIdW1pZGl0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dlYXRoZXItcHJvcGVydHkgcHJlc3N1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiBwcmVzc3VyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiAncHJlc3N1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3JpZ2h0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6ICdQcmVzc3VyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7ZGF0YS5jdXJyZW50LnByZXNzdXJlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOididXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOidzYXZlLWNpdHknLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzonU0FWRSBMT0NBVElPTicsXG4gICAgICAgICAgICAgICAgICAgICdldmVudC1saXN0ZW5lcnMnOnsnY2xpY2snOlVJLnNhdmVMb2NhdGlvbn1cbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9yZWNhc3RDb250YWluZXIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbnRlbnQtYm94IGZvcmVjYXN0JyxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9yZWNhc3RJdGVtRGFpbHkoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdmb3JlY2FzdC1pdGVtIGRhaWx5LWl0ZW0nLFxuICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnaDMnLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogYCR7Rm9ybWF0LmdldERheU5hbWVTaG9ydChkYXRhLmRhdGUpfSAke0Zvcm1hdC5nZXREYXlOdW1iZXJERChkYXRhLmRhdGUpfWAsXG4gICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdoaWdoLWxvdy1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2hpZ2gtdGVtcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke2RhdGEuaGlnaFRlbXB9XFx1MDBCMGAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdkaXZpZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jb250ZW50JzogJy8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbG93LXRlbXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmxvd1RlbXB9XFx1MDBCMGAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29uZGl0aW9uIGljb24nLFxuICAgICAgICAgICAgICAgICAgICAnc3JjJzogaWNvbkltcG9ydHNbZGF0YS5pY29uXSxcbiAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICcnLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmNvbmRpdGlvbn1gLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5idWlsZCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JlY2FzdEl0ZW1Ib3VybHkoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdmb3JlY2FzdC1pdGVtIGhvdXJseS1pdGVtJyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAgICBuZXcgRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICd0YWduYW1lJzogJ2gzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IEZvcm1hdC5nZXRIb3VyQU1QTShkYXRhLnRpbWUpLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2hvdXJseS10ZW1wJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6YCR7ZGF0YS50ZW1wfVxcdTAwQjBgLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnY29uZGl0aW9uIGljb24nLFxuICAgICAgICAgICAgICAgICAgICAnc3JjJzogaWNvbkltcG9ydHNbZGF0YS5pY29uXSxcbiAgICAgICAgICAgICAgICAgICAgJ2FsdCc6ICcnLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAndGFnbmFtZSc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2NvbmRpdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWNvbnRlbnQnOiBgJHtkYXRhLmNvbmRpdGlvbn1gLFxuICAgICAgICAgICAgICAgIH0pLmJ1aWxkKCksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5idWlsZCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBob3VybHlEYXRlQ29udGFpbmVyKGRhdGEpIHtcbiAgICAgICAgLy8gdG8gYmUgYXBwZW5kZWQgaW5zaWRlIG9mIC5jb250ZW50LWJveC5mb3JlY2FzdFxuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgJ3RhZ25hbWUnOiAnZGl2JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdob3VybHktZGF0ZS1jb250YWluZXInLFxuICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ25hbWUnOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtY29udGVudCc6IGAke0Zvcm1hdC5nZXRTcG9rZW5EYXRlKGRhdGEuZGF0ZSl9YCxcbiAgICAgICAgICAgICAgICB9KS5idWlsZCgpLFxuXG4gICAgICAgICAgICAgICAgLy8gKioqIGJ1aWxkIC5ob3Vycy1jb250YWluZXIgZGlyZWN0bHkgaW4ganMgKioqXG4gICAgICAgICAgICAgICAgLy8gbmV3IEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIC8vICAgICAndGFnbmFtZSc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIC8vICAgICAnY2xhc3MnOiAnaG91cnMtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gLmZvcmVjYXN0LWl0ZW0uaG91cmx5LWl0ZW0gdG8gYmUgYXBwZW5kZWQgaW5zaWRlIG9mIC5ob3Vycy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAvLyB9KS5idWlsZCgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuYnVpbGQoKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==