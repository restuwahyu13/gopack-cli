"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_spinner_1 = require("cli-spinner");
exports.default = (prompt, callback) => {
    prompt([
        {
            type: 'input',
            name: 'package',
            message: 'Search go package name ?',
            validate: function (input) {
                let done = this.async();
                setTimeout(function () {
                    const validate = /^[a-zA-Z.-]+$/gi.test(input.trim());
                    if (!validate) {
                        done('go package name must be string format');
                        return;
                    }
                    done(null, true);
                }, 2000);
            }
        },
        {
            type: 'input',
            name: 'limit',
            message: 'Limit result go package ?',
            validate: function (input) {
                let done = this.async();
                setTimeout(function () {
                    const validate = /^[\d.-]+$/gi.test(input);
                    if (!validate) {
                        done('limit must be number format');
                        return;
                    }
                    done(null, true);
                }, 2000);
            }
        }
    ]).then((answer) => {
        let increment = 0;
        let spinner = new cli_spinner_1.Spinner('Processing... %s');
        spinner.setSpinnerString('|/-\\');
        spinner.start();
        let handlerLoading = setInterval(() => {
            increment += 1;
            if (increment >= 50) {
                clearInterval(handlerLoading);
                callback(answer);
                spinner.stop();
            }
        }, 300);
    });
};
