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
exports.deletePdf = exports.getPdf = exports.createPdfs = exports.getPdfs = void 0;
const Pdfs_1 = require("../models/Pdfs");
const getPdfs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pdfs = yield Pdfs_1.Pdf.findAll();
        res.status(200).json(pdfs);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.getPdfs = getPdfs;
const createPdfs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, pdf } = req.body;
        const newPdf = yield Pdfs_1.Pdf.create({
            name,
            pdf,
        });
        res.status(201).json(newPdf);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createPdfs = createPdfs;
const getPdf = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const findedPdf = yield Pdfs_1.Pdf.findByPk(id);
        if (!findedPdf)
            throw new Error("Bad request.");
        res.status(200).json(findedPdf);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getPdf = getPdf;
const deletePdf = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedPdf = yield Pdfs_1.Pdf.findByPk(id);
        if (!deletedPdf)
            throw new Error("Bad request.");
        yield deletedPdf.destroy();
        res.status(202).json({ msg: "accepted." });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
    ;
});
exports.deletePdf = deletePdf;
