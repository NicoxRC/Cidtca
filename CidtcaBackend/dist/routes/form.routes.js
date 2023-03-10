"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getForm_controller_1 = require("../controllers/getForm.controller");
const getForms_controller_1 = require("../controllers/getForms.controller");
const createForm_controller_1 = require("../controllers/createForm.controller");
const patchForm_controller_1 = require("../controllers/patchForm.controller");
const deleteForm_controller_1 = require("../controllers/deleteForm.controller");
const router = (0, express_1.Router)();
router.get('/forms', getForms_controller_1.getForms);
router.post('/forms', createForm_controller_1.createForm);
router.get('/forms/:id', getForm_controller_1.getForm);
router.patch('/forms/:id', patchForm_controller_1.patchForms);
router.delete('/forms/:id', deleteForm_controller_1.deleteForm);
exports.default = router;
