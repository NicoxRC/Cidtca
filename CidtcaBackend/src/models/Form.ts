import { sequelize } from '../database/database';
import { DataTypes } from 'sequelize';

export const Form = sequelize.define(
  'forms',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    pregunta_1: { type: DataTypes.STRING },
    pregunta_2: { type: DataTypes.STRING },
    pregunta_3: { type: DataTypes.STRING },
    pregunta_3_otro: { type: DataTypes.STRING },
    pregunta_4: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_5: { type: DataTypes.STRING },
    pregunta_6_contacto: { type: DataTypes.STRING },
    pregunta_6_numero: { type: DataTypes.STRING },
    pregunta_6_correo: { type: DataTypes.STRING },
    pregunta_6_contacto_2: { type: DataTypes.STRING },
    pregunta_6_numero_2: { type: DataTypes.STRING },
    pregunta_6_correo_2: { type: DataTypes.STRING },
    pregunta_7: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_8: { type: DataTypes.STRING },
    pregunta_8_direccion: { type: DataTypes.STRING },
    pregunta_9: { type: DataTypes.STRING },
    pregunta_10: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_10_otro: { type: DataTypes.STRING },
    pregunta_11: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_11_otro: { type: DataTypes.STRING },
    pregunta_12: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_12_otro: { type: DataTypes.STRING },
    pregunta_13: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_13_otro: { type: DataTypes.STRING },
    pregunta_14: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_14_asociados_cuantos: { type: DataTypes.STRING },
    pregunta_14_externos_cuantos: { type: DataTypes.STRING },
    pregunta_15: { type: DataTypes.STRING },
    pregunta_15_cuantos: { type: DataTypes.STRING },
    pregunta_16: { type: DataTypes.STRING },
    pregunta_16_cuantos: { type: DataTypes.STRING },
    pregunta_17: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_17_practicas_ordeno_cuantos: { type: DataTypes.STRING },
    pregunta_17_practicas_ganaderas_cuantos: { type: DataTypes.STRING },
    pregunta_17_vacunacion_cuantos: { type: DataTypes.STRING },
    pregunta_17_brucela_tuberculosis_cuantos: { type: DataTypes.STRING },
    pregunta_17_otro: { type: DataTypes.STRING },
    pregunta_17_otro_cuantos: { type: DataTypes.STRING },
    pregunta_18: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_19: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_20: { type: DataTypes.STRING },
    pregunta_21_n_grados: { type: DataTypes.STRING },
    pregunta_21_n_minutos: { type: DataTypes.STRING },
    pregunta_21_n_segundos: { type: DataTypes.STRING },
    pregunta_21_w_grados: { type: DataTypes.STRING },
    pregunta_21_w_minutos: { type: DataTypes.STRING },
    pregunta_21_w_segundos: { type: DataTypes.STRING },
    pregunta_22: { type: DataTypes.STRING },
    pregunta_23: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_23_otro: { type: DataTypes.STRING },
    pregunta_24_yogurt_diaria: { type: DataTypes.STRING },
    pregunta_24_yogurt_semanal: { type: DataTypes.STRING },
    pregunta_24_yogurt_mensual: { type: DataTypes.STRING },
    pregunta_24_yogurt_rendimiento: { type: DataTypes.STRING },
    pregunta_24_yogurt_vida_util: { type: DataTypes.STRING },
    pregunta_24_kumis_diaria: { type: DataTypes.STRING },
    pregunta_24_kumis_semanal: { type: DataTypes.STRING },
    pregunta_24_kumis_mensual: { type: DataTypes.STRING },
    pregunta_24_kumis_rendimiento: { type: DataTypes.STRING },
    pregunta_24_kumis_vida_util: { type: DataTypes.STRING },
    pregunta_24_cuajada_diaria: { type: DataTypes.STRING },
    pregunta_24_cuajada_semanal: { type: DataTypes.STRING },
    pregunta_24_cuajada_mensual: { type: DataTypes.STRING },
    pregunta_24_cuajada_rendimiento: { type: DataTypes.STRING },
    pregunta_24_cuajada_vida_util: { type: DataTypes.STRING },
    pregunta_24_queso_doble_crema_diaria: { type: DataTypes.STRING },
    pregunta_24_queso_doble_crema_semanal: { type: DataTypes.STRING },
    pregunta_24_queso_doble_crema_mensual: { type: DataTypes.STRING },
    pregunta_24_queso_doble_crema_rendimiento: { type: DataTypes.STRING },
    pregunta_24_queso_doble_crema_vida_util: { type: DataTypes.STRING },
    pregunta_24_queso_campesino_diaria: { type: DataTypes.STRING },
    pregunta_24_queso_campesino_semanal: { type: DataTypes.STRING },
    pregunta_24_queso_campesino_mensual: { type: DataTypes.STRING },
    pregunta_24_queso_campesino_rendimiento: { type: DataTypes.STRING },
    pregunta_24_queso_campesino_vida_util: { type: DataTypes.STRING },
    pregunta_24_leche_diaria: { type: DataTypes.STRING },
    pregunta_24_leche_semanal: { type: DataTypes.STRING },
    pregunta_24_leche_mensual: { type: DataTypes.STRING },
    pregunta_24_leche_rendimiento: { type: DataTypes.STRING },
    pregunta_24_leche_vida_util: { type: DataTypes.STRING },
    pregunta_24_quesos_madurados_diaria: { type: DataTypes.STRING },
    pregunta_24_quesos_madurados_semanal: { type: DataTypes.STRING },
    pregunta_24_quesos_madurados_mensual: { type: DataTypes.STRING },
    pregunta_24_quesos_madurados_rendimiento: { type: DataTypes.STRING },
    pregunta_24_quesos_madurados_vida_util: { type: DataTypes.STRING },
    pregunta_24_requeson_diaria: { type: DataTypes.STRING },
    pregunta_24_requeson_semanal: { type: DataTypes.STRING },
    pregunta_24_requeson_mensual: { type: DataTypes.STRING },
    pregunta_24_requeson_rendimiento: { type: DataTypes.STRING },
    pregunta_24_requeson_vida_util: { type: DataTypes.STRING },
    pregunta_24_arequipe_diaria: { type: DataTypes.STRING },
    pregunta_24_arequipe_semanal: { type: DataTypes.STRING },
    pregunta_24_arequipe_mensual: { type: DataTypes.STRING },
    pregunta_24_arequipe_rendimiento: { type: DataTypes.STRING },
    pregunta_24_arequipe_vida_util: { type: DataTypes.STRING },
    pregunta_24_leche_pasteurizada_diaria: { type: DataTypes.STRING },
    pregunta_24_leche_pasteurizada_semanal: { type: DataTypes.STRING },
    pregunta_24_leche_pasteurizada_mensual: { type: DataTypes.STRING },
    pregunta_24_leche_pasteurizada_rendimiento: { type: DataTypes.STRING },
    pregunta_24_leche_pasteurizada_vida_util: { type: DataTypes.STRING },
    pregunta_24_leche_UHT_diaria: { type: DataTypes.STRING },
    pregunta_24_leche_UHT_semanal: { type: DataTypes.STRING },
    pregunta_24_leche_UHT_mensual: { type: DataTypes.STRING },
    pregunta_24_leche_UHT_rendimiento: { type: DataTypes.STRING },
    pregunta_24_leche_UHT_vida_util: { type: DataTypes.STRING },
    pregunta_24_postres_diaria: { type: DataTypes.STRING },
    pregunta_24_postres_semanal: { type: DataTypes.STRING },
    pregunta_24_postres_mensual: { type: DataTypes.STRING },
    pregunta_24_postres_rendimiento: { type: DataTypes.STRING },
    pregunta_24_postres_vida_util: { type: DataTypes.STRING },
    pregunta_24_helados_diaria: { type: DataTypes.STRING },
    pregunta_24_helados_semanal: { type: DataTypes.STRING },
    pregunta_24_helados_mensual: { type: DataTypes.STRING },
    pregunta_24_helados_rendimiento: { type: DataTypes.STRING },
    pregunta_24_helados_vida_util: { type: DataTypes.STRING },
    pregunta_24_crema_de_leche_diaria: { type: DataTypes.STRING },
    pregunta_24_crema_de_leche_semanal: { type: DataTypes.STRING },
    pregunta_24_crema_de_leche_mensual: { type: DataTypes.STRING },
    pregunta_24_crema_de_leche_rendimiento: { type: DataTypes.STRING },
    pregunta_24_crema_de_leche_vida_util: { type: DataTypes.STRING },
    pregunta_24_queso_mozzarella_diaria: { type: DataTypes.STRING },
    pregunta_24_queso_mozzarella_semanal: { type: DataTypes.STRING },
    pregunta_24_queso_mozzarella_mensual: { type: DataTypes.STRING },
    pregunta_24_queso_mozzarella_rendimiento: { type: DataTypes.STRING },
    pregunta_24_queso_mozzarella_vida_util: { type: DataTypes.STRING },
    pregunta_25: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_25_otro: { type: DataTypes.STRING },
    pregunta_26: { type: DataTypes.STRING },
    pregunta_27: { type: DataTypes.STRING },
    pregunta_28: { type: DataTypes.STRING },
    pregunta_29: { type: DataTypes.STRING },
    pregunta_30: { type: DataTypes.STRING },
    pregunta_31: { type: DataTypes.STRING },
    pregunta_32: { type: DataTypes.STRING },
    pregunta_33: { type: DataTypes.STRING },
    pregunta_33_otro: { type: DataTypes.STRING },
    pregunta_34: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_34_otro: { type: DataTypes.STRING },
    pregunta_35: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_35_otro: { type: DataTypes.STRING },
    pregunta_36: { type: DataTypes.STRING },
    pregunta_36_cuales: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_37: { type: DataTypes.STRING },
    pregunta_37_calificacion: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_38: { type: DataTypes.STRING },
    pregunta_39: { type: DataTypes.STRING },
    pregunta_40: { type: DataTypes.STRING },
    pregunta_40_cuales: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_41: { type: DataTypes.STRING },
    pregunta_41_cuales: { type: DataTypes.STRING },
    pregunta_42: { type: DataTypes.STRING },
    pregunta_42_como: { type: DataTypes.STRING },
    pregunta_43_microbiologicas: { type: DataTypes.STRING },
    pregunta_43_microbiologicas_cuales: { type: DataTypes.STRING },
    pregunta_43_fisicoquimica: { type: DataTypes.STRING },
    pregunta_43_fisicoquimica_cuales: { type: DataTypes.STRING },
    pregunta_43_organolepticas: { type: DataTypes.STRING },
    pregunta_43_organolepticas_cuales: { type: DataTypes.STRING },
    pregunta_44: { type: DataTypes.STRING },
    pregunta_44_como: { type: DataTypes.STRING },
    pregunta_45: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_45_otro: { type: DataTypes.STRING },
    pregunta_46: { type: DataTypes.STRING },
    pregunta_46_cuales: { type: DataTypes.STRING },
    pregunta_47: { type: DataTypes.STRING },
    pregunta_47_cual: { type: DataTypes.STRING },
    pregunta_48: { type: DataTypes.STRING },
    pregunta_48_cuales: { type: DataTypes.STRING },
    pregunta_49: { type: DataTypes.STRING },
    pregunta_49_cual: { type: DataTypes.STRING },
    pregunta_50: { type: DataTypes.STRING },
    pregunta_50_cual: { type: DataTypes.STRING },
    pregunta_51: { type: DataTypes.STRING },
    pregunta_51_cual: { type: DataTypes.STRING },
    pregunta_52: { type: DataTypes.STRING },
    pregunta_52_cual: { type: DataTypes.STRING },
    pregunta_52_entidad: { type: DataTypes.STRING },
    pregunta_53: { type: DataTypes.STRING },
    pregunta_54: { type: DataTypes.STRING },
    pregunta_55: { type: DataTypes.STRING },
    pregunta_56: { type: DataTypes.STRING },
    pregunta_57: { type: DataTypes.STRING },
    pregunta_57_cuales: { type: DataTypes.STRING },
    pregunta_58: { type: DataTypes.STRING },
    pregunta_58_cuales: { type: DataTypes.STRING },
    pregunta_59: { type: DataTypes.ARRAY(DataTypes.STRING) },
    pregunta_59_destino_transformadora_local: { type: DataTypes.STRING },
    pregunta_59_destino_transformadora_nacional: { type: DataTypes.STRING },
    pregunta_59_destino_venta_local: { type: DataTypes.STRING },
    pregunta_59_destino_venta_nacional: { type: DataTypes.STRING },
    pregunta_59_otros: { type: DataTypes.STRING },
    pregunta_60: { type: DataTypes.STRING },
    pregunta_61: { type: DataTypes.STRING },
    pregunta_61_cuales: { type: DataTypes.STRING },
    pregunta_62: { type: DataTypes.STRING },
    pregunta_63: { type: DataTypes.STRING },
    pregunta_64: { type: DataTypes.STRING },
    pregunta_64_porque: { type: DataTypes.STRING },
    pregunta_65: { type: DataTypes.STRING },
    pregunta_65_porque: { type: DataTypes.STRING },
    pregunta_66_yogurt_presentacion: { type: DataTypes.STRING },
    pregunta_66_yogurt_valor: { type: DataTypes.STRING },
    pregunta_66_kumis_presentacion: { type: DataTypes.STRING },
    pregunta_66_kumis_valor: { type: DataTypes.STRING },
    pregunta_66_cuajada_presentacion: { type: DataTypes.STRING },
    pregunta_66_cuajada_valor: { type: DataTypes.STRING },
    pregunta_66_queso_doble_crema_presentacion: { type: DataTypes.STRING },
    pregunta_66_queso_doble_crema_valor: { type: DataTypes.STRING },
    pregunta_66_queso_campesino_presentacion: { type: DataTypes.STRING },
    pregunta_66_queso_campesino_valor: { type: DataTypes.STRING },
    pregunta_66_leche_presentacion: { type: DataTypes.STRING },
    pregunta_66_leche_valor: { type: DataTypes.STRING },
    pregunta_66_quesos_madurados_presentacion: { type: DataTypes.STRING },
    pregunta_66_quesos_madurados_valor: { type: DataTypes.STRING },
    pregunta_66_requeson_presentacion: { type: DataTypes.STRING },
    pregunta_66_requeson_valor: { type: DataTypes.STRING },
    pregunta_66_arequipe_presentacion: { type: DataTypes.STRING },
    pregunta_66_arequipe_valor: { type: DataTypes.STRING },
    pregunta_66_leche_pasteurizada_presentacion: { type: DataTypes.STRING },
    pregunta_66_leche_pasteurizada_valor: { type: DataTypes.STRING },
    pregunta_66_leche_UHT_presentacion: { type: DataTypes.STRING },
    pregunta_66_leche_UHT_valor: { type: DataTypes.STRING },
    pregunta_66_postres_presentacion: { type: DataTypes.STRING },
    pregunta_66_postres_valor: { type: DataTypes.STRING },
    pregunta_66_helados_presentacion: { type: DataTypes.STRING },
    pregunta_66_helados_valor: { type: DataTypes.STRING },
    pregunta_66_crema_de_leche_presentacion: { type: DataTypes.STRING },
    pregunta_66_crema_de_leche_valor: { type: DataTypes.STRING },
    pregunta_66_queso_mozzarella_presentacion: { type: DataTypes.STRING },
    pregunta_66_queso_mozzarella_valor: { type: DataTypes.STRING },
    pregunta_67: { type: DataTypes.STRING },
    pregunta_67_distribucion: { type: DataTypes.STRING },
    pregunta_67_distribucion_quien: { type: DataTypes.STRING },
    pregunta_68_energia: { type: DataTypes.STRING },
    pregunta_68_gas: { type: DataTypes.STRING },
    pregunta_68_agua: { type: DataTypes.STRING },
    pregunta_68_internet: { type: DataTypes.STRING },
    pregunta_68_telefonia: { type: DataTypes.STRING },
    pregunta_68_otro: { type: DataTypes.STRING },
    pregunta_68_otro_valor: { type: DataTypes.STRING },
    observaciones: { type: DataTypes.STRING },
    fecha: { type: DataTypes.STRING },
    nombre_encuestado: { type: DataTypes.STRING },
    cedula_encuestado: { type: DataTypes.STRING },
    firma_encuestado: { type: DataTypes.STRING },
    nombre_encuestador: { type: DataTypes.STRING },
    cedula_encuestador: { type: DataTypes.STRING },
    firma_encuestador: { type: DataTypes.STRING },
    foto_encuestado: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);
