"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const initModule_1 = __importDefault(require("./lib/initModule"));
const searchPackage_1 = __importDefault(require("./lib/searchPackage"));
const helpMenu_1 = __importDefault(require("./lib/helpMenu"));
const detectKeyboard_1 = require("./utils/detectKeyboard");
(async function () {
    detectKeyboard_1.detectKeyboard();
    initModule_1.default(commander_1.program);
    searchPackage_1.default(commander_1.program);
    helpMenu_1.default(commander_1.program);
})();
//# sourceMappingURL=command.js.map