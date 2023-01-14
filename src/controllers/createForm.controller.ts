import { Form } from "../models/Form";
import { Request, Response } from "express";

export const createForm = async (req: Request, res: Response) => {
  try {
    const {
      pregunta_1,
      pregunta_2,
      pregunta_2_otro,
      pregunta_3,
      pregunta_4,
      pregunta_5_numero,
      pregunta_5_correo,
      pregunta_6,
      pregunta_7,
      pregunta_8,
      pregunta_9,
      pregunta_9_otro,
      pregunta_10,
      pregunta_10_otro,
      pregunta_11,
      pregunta_11_otro,
      pregunta_12,
      pregunta_12_otro,
      pregunta_13,
      pregunta_14,
      pregunta_15,
      pregunta_16,
      pregunta_16_cuantos,
      pregunta_17,
      pregunta_17_cuantos,
      pregunta_18,
      pregunta_18_cuantos,
      pregunta_19,
      pregunta_20,
      pregunta_21,
      pregunta_21_porcentaje_pavimentada,
      pregunta_21_porcentaje_placa_huella,
      pregunta_21_porcentaje_via_carreteable,
      pregunta_21_porcentaje_trocha_a_pie,
      pregunta_22,
      pregunta_22_porcentaje_pavimentada,
      pregunta_22_porcentaje_placa_huella,
      pregunta_22_porcentaje_via_carreteable,
      pregunta_22_porcentaje_trocha_a_pie,
      pregunta_23,
      pregunta_24,
      pregunta_25,
      pregunta_26,
      pregunta_27,
      pregunta_28_diaria,
      pregunta_28_semanal,
      pregunta_28_mensual,
      pregunta_29_yogurt_diaria,
      pregunta_29_yogurt_semanal,
      pregunta_29_yogurt_mensual,
      pregunta_29_kumis_diaria,
      pregunta_29_kumis_semanal,
      pregunta_29_kumis_mensual,
      pregunta_29_cuajada_diaria,
      pregunta_29_cuajada_semanal,
      pregunta_29_cuajada_mensual,
      pregunta_29_queso_doble_crema_diaria,
      pregunta_29_queso_doble_crema_semanal,
      pregunta_29_queso_doble_crema_mensual,
      pregunta_29_queso_campesino_diaria,
      pregunta_29_queso_campesino_semanal,
      pregunta_29_queso_campesino_mensual,
      pregunta_29_leche_diaria,
      pregunta_29_leche_semanal,
      pregunta_29_leche_mensual,
      pregunta_29_quesos_madurados_diaria,
      pregunta_29_quesos_madurados_semanal,
      pregunta_29_quesos_madurados_mensual,
      pregunta_29_requeson_diaria,
      pregunta_29_requeson_semanal,
      pregunta_29_requeson_mensual,
      pregunta_29_arequipe_diaria,
      pregunta_29_arequipe_semanal,
      pregunta_29_arequipe_mensual,
      pregunta_29_otros,
      pregunta_30,
      pregunta_31,
      pregunta_32,
      pregunta_33,
      pregunta_34,
      pregunta_35,
      pregunta_36,
      pregunta_37,
      pregunta_37_otro,
      pregunta_38,
      pregunta_38_otro,
      pregunta_39,
      pregunta_39_otro,
      pregunta_40,
      pregunta_40_cuales,
      pregunta_41,
      pregunta_42,
      pregunta_43,
      pregunta_43_cuales,
      pregunta_44,
      pregunta_44_como,
      pregunta_45,
      pregunta_45_como,
      pregunta_46,
      pregunta_47,
      pregunta_48,
      pregunta_48_cual,
      pregunta_49,
      pregunta_50,
      pregunta_51,
      pregunta_52,
      pregunta_53,
      pregunta_54,
      pregunta_55,
      pregunta_56,
      pregunta_56_cuales,
      pregunta_57,
      pregunta_57_otros,
      pregunta_58,
      pregunta_59,
      pregunta_60,
      pregunta_60_otros,
      pregunta_61,
      pregunta_62,
      pregunta_63,
      pregunta_64_energia,
      pregunta_64_gas,
      pregunta_65,
      pregunta_65_porque,
      pregunta_66_yogurt_presentacion,
      pregunta_66_yogurt_valor,
      pregunta_66_kumis_presentacion,
      pregunta_66_kumis_valor,
      pregunta_66_cuajada_presentacion,
      pregunta_66_cuajada_valor,
      pregunta_66_queso_doble_crema_presentacion,
      pregunta_66_queso_doble_crema_valor,
      pregunta_66_queso_campesino_presentacion,
      pregunta_66_queso_campesino_valor,
      pregunta_66_leche_presentacion,
      pregunta_66_leche_valor,
      pregunta_66_quesos_madurados_presentacion,
      pregunta_66_quesos_madurados_valor,
      pregunta_66_requeson_presentacion,
      pregunta_66_requeson_valor,
      pregunta_66_arequipe_presentacion,
      pregunta_66_arequipe_valor,
      pregunta_66_otros,
      observaciones,
      fecha,
      nombre_encuestado,
      cedula_encuestado,
      firma_encuestado,
      nombre_encuestador,
      cedula_encuestador,
      firma_encuestador,
    } = req.body;

    const newForm = await Form.create({
      pregunta_1,
      pregunta_2,
      pregunta_2_otro,
      pregunta_3,
      pregunta_4,
      pregunta_5_numero,
      pregunta_5_correo,
      pregunta_6,
      pregunta_7,
      pregunta_8,
      pregunta_9,
      pregunta_9_otro,
      pregunta_10,
      pregunta_10_otro,
      pregunta_11,
      pregunta_11_otro,
      pregunta_12,
      pregunta_12_otro,
      pregunta_13,
      pregunta_14,
      pregunta_15,
      pregunta_16,
      pregunta_16_cuantos,
      pregunta_17,
      pregunta_17_cuantos,
      pregunta_18,
      pregunta_18_cuantos,
      pregunta_19,
      pregunta_20,
      pregunta_21,
      pregunta_21_porcentaje_pavimentada,
      pregunta_21_porcentaje_placa_huella,
      pregunta_21_porcentaje_via_carreteable,
      pregunta_21_porcentaje_trocha_a_pie,
      pregunta_22,
      pregunta_22_porcentaje_pavimentada,
      pregunta_22_porcentaje_placa_huella,
      pregunta_22_porcentaje_via_carreteable,
      pregunta_22_porcentaje_trocha_a_pie,
      pregunta_23,
      pregunta_24,
      pregunta_25,
      pregunta_26,
      pregunta_27,
      pregunta_28_diaria,
      pregunta_28_semanal,
      pregunta_28_mensual,
      pregunta_29_yogurt_diaria,
      pregunta_29_yogurt_semanal,
      pregunta_29_yogurt_mensual,
      pregunta_29_kumis_diaria,
      pregunta_29_kumis_semanal,
      pregunta_29_kumis_mensual,
      pregunta_29_cuajada_diaria,
      pregunta_29_cuajada_semanal,
      pregunta_29_cuajada_mensual,
      pregunta_29_queso_doble_crema_diaria,
      pregunta_29_queso_doble_crema_semanal,
      pregunta_29_queso_doble_crema_mensual,
      pregunta_29_queso_campesino_diaria,
      pregunta_29_queso_campesino_semanal,
      pregunta_29_queso_campesino_mensual,
      pregunta_29_leche_diaria,
      pregunta_29_leche_semanal,
      pregunta_29_leche_mensual,
      pregunta_29_quesos_madurados_diaria,
      pregunta_29_quesos_madurados_semanal,
      pregunta_29_quesos_madurados_mensual,
      pregunta_29_requeson_diaria,
      pregunta_29_requeson_semanal,
      pregunta_29_requeson_mensual,
      pregunta_29_arequipe_diaria,
      pregunta_29_arequipe_semanal,
      pregunta_29_arequipe_mensual,
      pregunta_29_otros,
      pregunta_30,
      pregunta_31,
      pregunta_32,
      pregunta_33,
      pregunta_34,
      pregunta_35,
      pregunta_36,
      pregunta_37,
      pregunta_37_otro,
      pregunta_38,
      pregunta_38_otro,
      pregunta_39,
      pregunta_39_otro,
      pregunta_40,
      pregunta_40_cuales,
      pregunta_41,
      pregunta_42,
      pregunta_43,
      pregunta_43_cuales,
      pregunta_44,
      pregunta_44_como,
      pregunta_45,
      pregunta_45_como,
      pregunta_46,
      pregunta_47,
      pregunta_48,
      pregunta_48_cual,
      pregunta_49,
      pregunta_50,
      pregunta_51,
      pregunta_52,
      pregunta_53,
      pregunta_54,
      pregunta_55,
      pregunta_56,
      pregunta_56_cuales,
      pregunta_57,
      pregunta_57_otros,
      pregunta_58,
      pregunta_59,
      pregunta_60,
      pregunta_60_otros,
      pregunta_61,
      pregunta_62,
      pregunta_63,
      pregunta_64_energia,
      pregunta_64_gas,
      pregunta_65,
      pregunta_65_porque,
      pregunta_66_yogurt_presentacion,
      pregunta_66_yogurt_valor,
      pregunta_66_kumis_presentacion,
      pregunta_66_kumis_valor,
      pregunta_66_cuajada_presentacion,
      pregunta_66_cuajada_valor,
      pregunta_66_queso_doble_crema_presentacion,
      pregunta_66_queso_doble_crema_valor,
      pregunta_66_queso_campesino_presentacion,
      pregunta_66_queso_campesino_valor,
      pregunta_66_leche_presentacion,
      pregunta_66_leche_valor,
      pregunta_66_quesos_madurados_presentacion,
      pregunta_66_quesos_madurados_valor,
      pregunta_66_requeson_presentacion,
      pregunta_66_requeson_valor,
      pregunta_66_arequipe_presentacion,
      pregunta_66_arequipe_valor,
      pregunta_66_otros,
      observaciones,
      fecha,
      nombre_encuestado,
      cedula_encuestado,
      firma_encuestado,
      nombre_encuestador,
      cedula_encuestador,
      firma_encuestador,
    });
    res.status(201).json(newForm);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};