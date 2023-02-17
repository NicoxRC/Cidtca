"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUser_controller_1 = require("../controllers/getUser.controller");
const postUser_controller_1 = require("../controllers/postUser.controller");
const router = (0, express_1.Router)();
router.get('/user', getUser_controller_1.getUser);
router.post('/user', postUser_controller_1.postUser);
exports.default = router;
