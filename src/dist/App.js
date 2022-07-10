"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Styles_1 = require("./Styles");
var InputField_1 = require("./components/InputField");
function App() {
    return (react_1["default"].createElement(Styles_1.AppContainer, null,
        react_1["default"].createElement(Styles_1.Heading, null, "Taskify"),
        react_1["default"].createElement(InputField_1["default"], null)));
}
exports["default"] = App;
