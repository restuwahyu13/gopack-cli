"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectKeyboard = void 0;
const fileSystem_1 = require("./fileSystem");
const detectKeyboard = () => {
    process.openStdin().on('keypress', function (_, key) {
        if (key && key.name === 'c' && key.ctrl) {
            fileSystem_1.deleteData();
            process.exit();
        }
    });
};
exports.detectKeyboard = detectKeyboard;
