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
const User_1 = require("../models/User");
module.exports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, password } = req.query;
        const users = yield User_1.User.findAll();
        if (users[0].user !== user || users[0].password !== password) {
            throw new Error('Not Found.');
        }
        res.status(200).json(users);
    }
    catch (error) {
        error instanceof Error
            ? res.status(400).json({ error: error.message })
            : null;
    }
});
