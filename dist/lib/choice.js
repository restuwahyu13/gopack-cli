"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const consola_1 = __importDefault(require("consola"));
const chalk_1 = __importDefault(require("chalk"));
const clear_1 = __importDefault(require("clear"));
exports.default = async (prompt, answer, callback) => {
    try {
        const res = await axios_1.default.get('https://api.godoc.org/search?q=' + answer.package.toLowerCase());
        const newResponse = res.data.results.slice(0, answer.limit).map((val) => {
            return { name: val.path };
        });
        clear_1.default();
        prompt({
            choices: newResponse,
            type: 'checkbox',
            name: 'name',
            message: 'Choice to install go package name ?'
        }).then((answer) => {
            let packages = answer.name;
            prompt({
                type: 'confirm',
                name: 'confirms',
                message: 'You want to install another package ?'
            }).then((answer) => callback(answer, packages));
        });
    }
    catch (err) {
        consola_1.default.error(chalk_1.default.bold.white('go package unavailable'));
        process.exit(0);
    }
};
