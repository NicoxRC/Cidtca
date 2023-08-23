"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Form_1 = require("../models/Form");
module.exports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let findedForm;
    try {
        findedForm = yield Form_1.Form.findByPk(id);
        if (!findedForm)
            throw new Error('Not found.');
        res.status(200).json(findedForm);
    }
    catch (error) {
        error instanceof Error
            ? res.status(400).json({ error: error.message })
            : null;
    }
});
