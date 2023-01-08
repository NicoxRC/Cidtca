"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf = void 0;
const database_1 = require("../database/database");
const sequelize_1 = require("sequelize");
exports.Pdf = database_1.sequelize.define("pdfs", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    pdf: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});
