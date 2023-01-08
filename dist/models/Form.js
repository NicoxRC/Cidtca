"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const database_1 = require("../database/database");
const sequelize_1 = require("sequelize");
exports.Form = database_1.sequelize.define("forms", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    pregunta_1: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_2: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_2_otro: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_3: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_4: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_5_numero: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_5_correo: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_6: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_7: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_8: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_9: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_9_otro: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_10: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_10_otro: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_11: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_11_otro: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_12: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_12_otro: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_13: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_14: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_15: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_16: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_16_cuantos: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_17: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_17_cuantos: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_18: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_18_cuantos: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_19: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_20: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_21: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_21_porcentaje_pavimentada: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_21_porcentaje_placa_huella: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_21_porcentaje_via_carreteable: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_21_porcentaje_trocha_a_pie: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_22: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_22_porcentaje_pavimentada: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_22_porcentaje_placa_huella: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_22_porcentaje_via_carreteable: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_22_porcentaje_trocha_a_pie: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_23: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_24: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_25: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_26: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_27: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_28_diaria: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_28_semanal: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_28_mensual: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_yogurt_diaria: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_yogurt_semanal: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_yogurt_mensual: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_kumis_diaria: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_kumis_semanal: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_kumis_mensual: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_cuajada_diaria: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_cuajada_semanal: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_cuajada_mensual: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_queso_doble_crema_diaria: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_queso_doble_crema_semanal: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_queso_doble_crema_mensual: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_queso_campesino_diaria: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_queso_campesino_semanal: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_queso_campesino_mensual: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_leche_diaria: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_leche_semanal: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_leche_mensual: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_quesos_madurados_diaria: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_quesos_madurados_semanal: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_quesos_madurados_mensual: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_requeson_diaria: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_requeson_semanal: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_requeson_mensual: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_arequipe_diaria: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_arequipe_semanal: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_arequipe_mensual: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_29_otros: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_30: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_31: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_32: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_33: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_34: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_35: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_36: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_37: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_37_otro: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_38: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_38_otro: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_39: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_39_otro: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_40: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_40_cuales: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_41: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_42: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_43: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_43_cuales: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_44: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_44_como: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_45: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_45_como: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_46: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_47: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_48: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_48_cual: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_49: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_50: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_51: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_52: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_53: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_54: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_55: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_56: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_56_cuales: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_57: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_57_otros: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_58: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_59: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_60: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    pregunta_60_otros: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_61: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_62: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_63: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_64_energia: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_64_gas: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_65: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_65_porque: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_yogurt_medida: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_yogurt_valor: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_kumis_medida: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_kumis_valor: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_cuajada_medida: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_cuajada_valor: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_queso_doble_crema_medida: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_queso_doble_crema_valor: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_queso_campesino_medida: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_queso_campesino_valor: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_leche_medida: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_leche_valor: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_quesos_madurados_medida: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_quesos_madurados_valor: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_requeson_medida: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_requeson_valor: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_arequipe_medida: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_arequipe_valor: {
        type: sequelize_1.DataTypes.STRING,
    },
    pregunta_66_otros: {
        type: sequelize_1.DataTypes.STRING,
    },
    observaciones: {
        type: sequelize_1.DataTypes.STRING,
    },
    fecha: {
        type: sequelize_1.DataTypes.STRING,
    },
    nombre_encuestado: {
        type: sequelize_1.DataTypes.STRING,
    },
    cedula_encuestado: {
        type: sequelize_1.DataTypes.STRING,
    },
    firma_encuestado: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
    },
    nombre_encuestador: {
        type: sequelize_1.DataTypes.STRING,
    },
    cedula_encuestador: {
        type: sequelize_1.DataTypes.STRING,
    },
    firma_encuestador: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
    },
}, {
    timestamps: false,
});
