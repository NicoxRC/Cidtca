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
        const { pregunta_20, pregunta_21_n_grados, pregunta_21_n_minutos, pregunta_21_n_segundos, pregunta_21_w_grados, pregunta_21_w_minutos, pregunta_21_w_segundos, pregunta_22, } = req.body;
        const findForm = yield Form_1.Form.findByPk(id);
        if (!findForm)
            throw new Error('From not found.');
        const fields = {};
        if (pregunta_20)
            fields.pregunta_20 = pregunta_20;
        if (pregunta_21_n_grados)
            fields.pregunta_21_n_grados = pregunta_21_n_grados;
        if (pregunta_21_n_minutos)
            fields.pregunta_21_n_minutos = pregunta_21_n_minutos;
        if (pregunta_21_n_segundos)
            fields.pregunta_21_n_segundos = pregunta_21_n_segundos;
        if (pregunta_21_w_grados)
            fields.pregunta_21_w_grados = pregunta_21_w_grados;
        if (pregunta_21_w_minutos)
            fields.pregunta_21_w_minutos = pregunta_21_w_minutos;
        if (pregunta_21_w_segundos)
            fields.pregunta_21_w_segundos = pregunta_21_w_segundos;
        if (pregunta_22)
            fields.pregunta_22 = pregunta_22;
        if (Object.entries(fields).length === 0)
            throw new Error('Not enough info');
        yield findForm.update(fields);
        res.status(200).json(findForm);
    }
    catch (error) {
        error instanceof Error
            ? res.status(400).json({ ërror: error.message })
            : null;
    }
});
