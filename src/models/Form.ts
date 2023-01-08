import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

export const Form = sequelize.define(
  "forms",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    pregunta_1: {
      type: DataTypes.STRING,
    },
    pregunta_2: {
      type: DataTypes.STRING,
    },
    pregunta_2_otro: {
      type: DataTypes.STRING,
    },
    pregunta_3: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_4: {
      type: DataTypes.STRING,
    },
    pregunta_5_numero: {
      type: DataTypes.STRING,
    },
    pregunta_5_correo: {
      type: DataTypes.STRING,
    },
    pregunta_6: {
      type: DataTypes.STRING,
    },
    pregunta_7: {
      type: DataTypes.STRING,
    },
    pregunta_8: {
      type: DataTypes.STRING,
    },
    pregunta_9: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_9_otro: {
      type: DataTypes.STRING,
    },
    pregunta_10: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_10_otro: {
      type: DataTypes.STRING,
    },
    pregunta_11: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_11_otro: {
      type: DataTypes.STRING,
    },
    pregunta_12: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_12_otro: {
      type: DataTypes.STRING,
    },
    pregunta_13: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_14: {
      type: DataTypes.STRING,
    },
    pregunta_15: {
      type: DataTypes.STRING,
    },
    pregunta_16: {
      type: DataTypes.STRING,
    },
    pregunta_16_cuantos: {
      type: DataTypes.STRING,
    },
    pregunta_17: {
      type: DataTypes.STRING,
    },
    pregunta_17_cuantos: {
      type: DataTypes.STRING,
    },
    pregunta_18: {
      type: DataTypes.STRING,
    },
    pregunta_18_cuantos: {
      type: DataTypes.STRING,
    },
    pregunta_19: {
      type: DataTypes.STRING,
    },
    pregunta_20: {
      type: DataTypes.STRING,
    },
    pregunta_21: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_21_porcentaje_pavimentada: {
      type: DataTypes.STRING,
    },
    pregunta_21_porcentaje_placa_huella: {
      type: DataTypes.STRING,
    },
    pregunta_21_porcentaje_via_carreteable: {
      type: DataTypes.STRING,
    },
    pregunta_21_porcentaje_trocha_a_pie: {
      type: DataTypes.STRING,
    },
    pregunta_22: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_22_porcentaje_pavimentada: {
      type: DataTypes.STRING,
    },
    pregunta_22_porcentaje_placa_huella: {
      type: DataTypes.STRING,
    },
    pregunta_22_porcentaje_via_carreteable: {
      type: DataTypes.STRING,
    },
    pregunta_22_porcentaje_trocha_a_pie: {
      type: DataTypes.STRING,
    },
    pregunta_23: {
      type: DataTypes.STRING,
    },
    pregunta_24: {
      type: DataTypes.STRING,
    },
    pregunta_25: {
      type: DataTypes.STRING,
    },
    pregunta_26: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_27: {
      type: DataTypes.STRING,
    },
    pregunta_28_diaria: {
      type: DataTypes.STRING,
    },
    pregunta_28_semanal: {
      type: DataTypes.STRING,
    },
    pregunta_28_mensual: {
      type: DataTypes.STRING,
    },
    pregunta_29_yogurt_diaria: {
      type: DataTypes.STRING,
    },
    pregunta_29_yogurt_semanal: {
      type: DataTypes.STRING,
    },
    pregunta_29_yogurt_mensual: {
      type: DataTypes.STRING,
    },
    pregunta_29_kumis_diaria: {
      type: DataTypes.STRING,
    },
    pregunta_29_kumis_semanal: {
      type: DataTypes.STRING,
    },
    pregunta_29_kumis_mensual: {
      type: DataTypes.STRING,
    },
    pregunta_29_cuajada_diaria: {
      type: DataTypes.STRING,
    },
    pregunta_29_cuajada_semanal: {
      type: DataTypes.STRING,
    },
    pregunta_29_cuajada_mensual: {
      type: DataTypes.STRING,
    },
    pregunta_29_queso_doble_crema_diaria: {
      type: DataTypes.STRING,
    },
    pregunta_29_queso_doble_crema_semanal: {
      type: DataTypes.STRING,
    },
    pregunta_29_queso_doble_crema_mensual: {
      type: DataTypes.STRING,
    },
    pregunta_29_queso_campesino_diaria: {
      type: DataTypes.STRING,
    },
    pregunta_29_queso_campesino_semanal: {
      type: DataTypes.STRING,
    },
    pregunta_29_queso_campesino_mensual: {
      type: DataTypes.STRING,
    },
    pregunta_29_leche_diaria: {
      type: DataTypes.STRING,
    },
    pregunta_29_leche_semanal: {
      type: DataTypes.STRING,
    },
    pregunta_29_leche_mensual: {
      type: DataTypes.STRING,
    },
    pregunta_29_quesos_madurados_diaria: {
      type: DataTypes.STRING,
    },
    pregunta_29_quesos_madurados_semanal: {
      type: DataTypes.STRING,
    },
    pregunta_29_quesos_madurados_mensual: {
      type: DataTypes.STRING,
    },
    pregunta_29_requeson_diaria: {
      type: DataTypes.STRING,
    },
    pregunta_29_requeson_semanal: {
      type: DataTypes.STRING,
    },
    pregunta_29_requeson_mensual: {
      type: DataTypes.STRING,
    },
    pregunta_29_arequipe_diaria: {
      type: DataTypes.STRING,
    },
    pregunta_29_arequipe_semanal: {
      type: DataTypes.STRING,
    },
    pregunta_29_arequipe_mensual: {
      type: DataTypes.STRING,
    },
    pregunta_29_otros: {
      type: DataTypes.STRING,
    },
    pregunta_30: {
      type: DataTypes.STRING,
    },
    pregunta_31: {
      type: DataTypes.STRING,
    },
    pregunta_32: {
      type: DataTypes.STRING,
    },
    pregunta_33: {
      type: DataTypes.STRING,
    },
    pregunta_34: {
      type: DataTypes.STRING,
    },
    pregunta_35: {
      type: DataTypes.STRING,
    },
    pregunta_36: {
      type: DataTypes.STRING,
    },
    pregunta_37: {
      type: DataTypes.STRING,
    },
    pregunta_37_otro: {
      type: DataTypes.STRING,
    },
    pregunta_38: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_38_otro: {
      type: DataTypes.STRING,
    },
    pregunta_39: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_39_otro: {
      type: DataTypes.STRING,
    },
    pregunta_40: {
      type: DataTypes.STRING,
    },
    pregunta_40_cuales: {
      type: DataTypes.STRING,
    },
    pregunta_41: {
      type: DataTypes.STRING,
    },
    pregunta_42: {
      type: DataTypes.STRING,
    },
    pregunta_43: {
      type: DataTypes.STRING,
    },
    pregunta_43_cuales: {
      type: DataTypes.STRING,
    },
    pregunta_44: {
      type: DataTypes.STRING,
    },
    pregunta_44_como: {
      type: DataTypes.STRING,
    },
    pregunta_45: {
      type: DataTypes.STRING,
    },
    pregunta_45_como: {
      type: DataTypes.STRING,
    },
    pregunta_46: {
      type: DataTypes.STRING,
    },
    pregunta_47: {
      type: DataTypes.STRING,
    },
    pregunta_48: {
      type: DataTypes.STRING,
    },
    pregunta_48_cual: {
      type: DataTypes.STRING,
    },
    pregunta_49: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_50: {
      type: DataTypes.STRING,
    },
    pregunta_51: {
      type: DataTypes.STRING,
    },
    pregunta_52: {
      type: DataTypes.STRING,
    },
    pregunta_53: {
      type: DataTypes.STRING,
    },
    pregunta_54: {
      type: DataTypes.STRING,
    },
    pregunta_55: {
      type: DataTypes.STRING,
    },
    pregunta_56: {
      type: DataTypes.STRING,
    },
    pregunta_56_cuales: {
      type: DataTypes.STRING,
    },
    pregunta_57: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_57_otros: {
      type: DataTypes.STRING,
    },
    pregunta_58: {
      type: DataTypes.STRING,
    },
    pregunta_59: {
      type: DataTypes.STRING,
    },
    pregunta_60: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pregunta_60_otros: {
      type: DataTypes.STRING,
    },
    pregunta_61: {
      type: DataTypes.STRING,
    },
    pregunta_62: {
      type: DataTypes.STRING,
    },
    pregunta_63: {
      type: DataTypes.STRING,
    },
    pregunta_64_energia: {
      type: DataTypes.STRING,
    },
    pregunta_64_gas: {
      type: DataTypes.STRING,
    },
    pregunta_65: {
      type: DataTypes.STRING,
    },
    pregunta_65_porque: {
      type: DataTypes.STRING,
    },
    pregunta_66_yogurt_medida: {
      type: DataTypes.STRING,
    },
    pregunta_66_yogurt_valor: {
      type: DataTypes.STRING,
    },
    pregunta_66_kumis_medida: {
      type: DataTypes.STRING,
    },
    pregunta_66_kumis_valor: {
      type: DataTypes.STRING,
    },
    pregunta_66_cuajada_medida: {
      type: DataTypes.STRING,
    },
    pregunta_66_cuajada_valor: {
      type: DataTypes.STRING,
    },
    pregunta_66_queso_doble_crema_medida: {
      type: DataTypes.STRING,
    },
    pregunta_66_queso_doble_crema_valor: {
      type: DataTypes.STRING,
    },
    pregunta_66_queso_campesino_medida: {
      type: DataTypes.STRING,
    },
    pregunta_66_queso_campesino_valor: {
      type: DataTypes.STRING,
    },
    pregunta_66_leche_medida: {
      type: DataTypes.STRING,
    },
    pregunta_66_leche_valor: {
      type: DataTypes.STRING,
    },
    pregunta_66_quesos_madurados_medida: {
      type: DataTypes.STRING,
    },
    pregunta_66_quesos_madurados_valor: {
      type: DataTypes.STRING,
    },
    pregunta_66_requeson_medida: {
      type: DataTypes.STRING,
    },
    pregunta_66_requeson_valor: {
      type: DataTypes.STRING,
    },
    pregunta_66_arequipe_medida: {
      type: DataTypes.STRING,
    },
    pregunta_66_arequipe_valor: {
      type: DataTypes.STRING,
    },
    pregunta_66_otros: {
      type: DataTypes.STRING,
    },
    observaciones: {
      type: DataTypes.STRING,
    },
    fecha: {
      type: DataTypes.STRING,
    },
    nombre_encuestado: {
      type: DataTypes.STRING,
    },
    cedula_encuestado: {
      type: DataTypes.STRING,
    },
    firma_encuestado: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
    nombre_encuestador: {
      type: DataTypes.STRING,
    },
    cedula_encuestador: {
      type: DataTypes.STRING,
    },
    firma_encuestador: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
  },
  {
    timestamps: false,
  }
);
