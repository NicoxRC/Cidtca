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
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchForms = void 0;
const Form_1 = require("../models/Form");
const patchForms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { pregunta_23, pregunta_23_gps, pregunta_24 } = req.body;
        const findForm = yield Form_1.Form.findByPk(id);
        if (!findForm)
            return res.status(404).json({ msg: 'Form not found' });
        const fields = {};
        if (pregunta_23)
            fields.pregunta_23 = pregunta_23;
        if (pregunta_23_gps)
            fields.pregunta_23_gps = pregunta_23_gps;
        if (pregunta_24)
            fields.pregunta_24 = pregunta_24;
        if (Object.entries(fields).length === 0)
            throw new Error('Not enough info');
        yield findForm.update(fields);
        res.status(200).json(findForm);
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
});
exports.patchForms = patchForms;
