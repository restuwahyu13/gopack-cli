"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
exports.default = (program) => {
    figlet_1.default('Gopack', {
        font: 'Nancyj-Improved',
        width: 100,
        whitespaceBreak: true
    }, (err, asciiText) => {
        if (!err) {
            program.version('gopack v0.0.1', '-v, --version', 'show version cli app');
            program.addHelpText('beforeAll', `${asciiText} \n`);
            program.parse(process.argv);
        }
    });
};
//# sourceMappingURL=helpMenu.js.map