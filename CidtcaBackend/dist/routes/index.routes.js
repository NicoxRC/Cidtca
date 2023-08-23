"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const router = (0, express_1.Router)();
router.get('/forms', controllers_1.default.getListForms);
router.post('/forms', controllers_1.default.createForm);
router.get('/forms/:id', controllers_1.default.getForm);
router.patch('/forms/:id', controllers_1.default.patchForm);
router.delete('/forms/:id', controllers_1.default.deleteForm);
router.get('/user', controllers_1.default.getUser);
router.post('/user', controllers_1.default.postUser);
exports.default = router;
