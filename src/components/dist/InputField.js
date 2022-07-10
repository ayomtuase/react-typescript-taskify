"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var twin_macro_1 = require("twin.macro");
var Form = twin_macro_1["default"].form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    relative\n"], ["\n    relative\n"])));
var InputField = function () {
    return (react_1["default"].createElement(Form, null,
        react_1["default"].createElement("input", { type: "text" }),
        react_1["default"].createElement("button", { type: 'submit' }, "GO")));
};
exports["default"] = InputField;
var templateObject_1;
