"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = require("inquirer");
const consola_1 = __importDefault(require("consola"));
const chalk_1 = __importDefault(require("chalk"));
const shelljs_1 = __importDefault(require("shelljs"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const clear_1 = __importDefault(require("clear"));
exports.default = (program) => {
    program
        .command('init')
        .description('initializing go module')
        .action(function () {
        clear_1.default();
        inquirer_1.prompt({
            type: 'input',
            name: 'moduleName',
            message: 'Initializing go module name ?',
            validate: function (input) {
                let done = this.async();
                setTimeout(function () {
                    const validate = /[a-zA-Z]/gi.test(input);
                    if (!validate) {
                        done('Input value must be string format');
                        return;
                    }
                    done(null, true);
                }, 2000);
            }
        }).then((input) => {
            if (!fs_1.default.existsSync(path_1.default.resolve(__dirname, 'go.mod'))) {
                shelljs_1.default.exec(`go mod init ${input.moduleName}`, { silent: true });
                consola_1.default.success(chalk_1.default.bold.white('Initializing go module success'));
                process.exit(0);
            }
            else {
                consola_1.default.error(chalk_1.default.bold.white('Initializing go module failed'));
                process.exit(0);
            }
        });
    });
};
//# sourceMappingURL=initModule.js.map