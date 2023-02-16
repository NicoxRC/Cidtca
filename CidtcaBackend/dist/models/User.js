"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const database_1 = require("../database/database");
const sequelize_1 = require("sequelize");
exports.User = database_1.sequelize.define('user', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
    },
    user: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});
