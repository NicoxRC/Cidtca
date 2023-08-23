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
    try {
        const { id } = req.params;
        const deleteForm = yield Form_1.Form.findByPk(id);
        if (!deleteForm)
            throw new Error('Bad request.');
        yield deleteForm.destroy();
        res.status(202).json({ msg: 'accepted.' });
    }
    catch (error) {
        error instanceof Error
            ? res.status(400).json({ error: error.message })
            : null;
    }
});
