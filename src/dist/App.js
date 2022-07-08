"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var twin_macro_1 = require("twin.macro");
var AppContainer = twin_macro_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["  \n  bg-blue  \n  min-h-screen\n  overflow-auto\n"], ["  \n  bg-blue  \n  min-h-screen\n  overflow-auto\n"])));
var Heading = twin_macro_1["default"].h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-cursive\n  text-4xl\n  text-center\n  text-white\n  font-semibold\n  tracking-wider\n  uppercase\n  mt-4\n"], ["\n  font-cursive\n  text-4xl\n  text-center\n  text-white\n  font-semibold\n  tracking-wider\n  uppercase\n  mt-4\n"])));
function App() {
    return (react_1["default"].createElement(AppContainer, null,
        react_1["default"].createElement(Heading, null, "Taskify")));
}
exports["default"] = App;
var templateObject_1, templateObject_2;
