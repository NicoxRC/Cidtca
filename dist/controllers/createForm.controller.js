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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createForm = void 0;
const Form_1 = require("../models/Form");
const cloudinary_1 = require("../cloudinary/cloudinary");
const createForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pregunta_1, pregunta_2, pregunta_2_otro, pregunta_3, pregunta_3_puntaje, pregunta_4, pregunta_5_numero, pregunta_5_correo, pregunta_6, pregunta_7, pregunta_7_vereda, pregunta_8, pregunta_9, pregunta_9_porcentaje_recibe_planta, pregunta_9_porcentaje_recoge_planta, pregunta_9_porcentaje_via_productor_finca, pregunta_9_otro, pregunta_10, pregunta_10_porcentaje_termo_king, pregunta_10_porcentaje_carro_particular, pregunta_10_porcentaje_moto, pregunta_10_porcentaje_caballo, pregunta_10_otro, pregunta_11, pregunta_11_otro, pregunta_12, pregunta_12_otro, pregunta_13, pregunta_14, pregunta_15, pregunta_16, pregunta_16_cuantos, pregunta_17, pregunta_17_cuantos, pregunta_18, pregunta_18_cuantos, pregunta_19, pregunta_20, pregunta_21, pregunta_21_porcentaje_pavimentada, pregunta_21_porcentaje_placa_huella, pregunta_21_porcentaje_via_carreteable, pregunta_21_porcentaje_trocha_a_pie, pregunta_22, pregunta_22_porcentaje_pavimentada, pregunta_22_porcentaje_placa_huella, pregunta_22_porcentaje_via_carreteable, pregunta_22_porcentaje_trocha_a_pie, pregunta_23, pregunta_23_gps, pregunta_24, pregunta_25, pregunta_26, pregunta_27, pregunta_28_diaria, pregunta_28_semanal, pregunta_28_mensual, pregunta_29_yogurt_diaria, pregunta_29_yogurt_semanal, pregunta_29_yogurt_mensual, pregunta_29_kumis_diaria, pregunta_29_kumis_semanal, pregunta_29_kumis_mensual, pregunta_29_cuajada_diaria, pregunta_29_cuajada_semanal, pregunta_29_cuajada_mensual, pregunta_29_queso_doble_crema_diaria, pregunta_29_queso_doble_crema_semanal, pregunta_29_queso_doble_crema_mensual, pregunta_29_queso_campesino_diaria, pregunta_29_queso_campesino_semanal, pregunta_29_queso_campesino_mensual, pregunta_29_leche_diaria, pregunta_29_leche_semanal, pregunta_29_leche_mensual, pregunta_29_quesos_madurados_diaria, pregunta_29_quesos_madurados_semanal, pregunta_29_quesos_madurados_mensual, pregunta_29_requeson_diaria, pregunta_29_requeson_semanal, pregunta_29_requeson_mensual, pregunta_29_arequipe_diaria, pregunta_29_arequipe_semanal, pregunta_29_arequipe_mensual, pregunta_29_otros, pregunta_30, pregunta_31, pregunta_32, pregunta_33, pregunta_34, pregunta_35, pregunta_36, pregunta_37, pregunta_37_otro, pregunta_38, pregunta_38_otro, pregunta_39, pregunta_39_otro, pregunta_40, pregunta_40_cuales, pregunta_41, pregunta_42, pregunta_43, pregunta_43_cuales, pregunta_44, pregunta_44_como, pregunta_45, pregunta_45_como, pregunta_46, pregunta_47, pregunta_48, pregunta_48_cual, pregunta_49, pregunta_50, pregunta_51, pregunta_52, pregunta_53, pregunta_54, pregunta_55, pregunta_56, pregunta_56_cuales, pregunta_57, pregunta_57_destino_transformadora_local, pregunta_57_destino_transformadora_nacional, pregunta_57_destino_venta_local, pregunta_57_destino_venta_nacional, pregunta_57_otros, pregunta_58, pregunta_59, pregunta_60, pregunta_60_otros, pregunta_61, pregunta_62, pregunta_63, pregunta_64_energia, pregunta_64_gas, pregunta_64_otro, pregunta_64_otro_valor, pregunta_65, pregunta_65_porque, pregunta_66_yogurt_presentacion, pregunta_66_yogurt_valor, pregunta_66_kumis_presentacion, pregunta_66_kumis_valor, pregunta_66_cuajada_presentacion, pregunta_66_cuajada_valor, pregunta_66_queso_doble_crema_presentacion, pregunta_66_queso_doble_crema_valor, pregunta_66_queso_campesino_presentacion, pregunta_66_queso_campesino_valor, pregunta_66_leche_presentacion, pregunta_66_leche_valor, pregunta_66_quesos_madurados_presentacion, pregunta_66_quesos_madurados_valor, pregunta_66_requeson_presentacion, pregunta_66_requeson_valor, pregunta_66_arequipe_presentacion, pregunta_66_arequipe_valor, pregunta_66_otros, observaciones, fecha, nombre_encuestado, cedula_encuestado, firma_encuestado, nombre_encuestador, cedula_encuestador, firma_encuestador, foto_encuestado, } = req.body;
        let newForm = {
            pregunta_1,
            pregunta_2,
            pregunta_2_otro,
            pregunta_3,
            pregunta_3_puntaje,
            pregunta_4,
            pregunta_5_numero,
            pregunta_5_correo,
            pregunta_6,
            pregunta_7,
            pregunta_7_vereda,
            pregunta_8,
            pregunta_9,
            pregunta_9_porcentaje_recibe_planta,
            pregunta_9_porcentaje_recoge_planta,
            pregunta_9_porcentaje_via_productor_finca,
            pregunta_9_otro,
            pregunta_10,
            pregunta_10_porcentaje_termo_king,
            pregunta_10_porcentaje_carro_particular,
            pregunta_10_porcentaje_moto,
            pregunta_10_porcentaje_caballo,
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
            pregunta_23_gps,
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
            pregunta_57_destino_transformadora_local,
            pregunta_57_destino_transformadora_nacional,
            pregunta_57_destino_venta_local,
            pregunta_57_destino_venta_nacional,
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
            pregunta_64_otro,
            pregunta_64_otro_valor,
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
            foto_encuestado,
        };
        if (typeof firma_encuestado === 'string' && firma_encuestado.length > 0) {
            const imageUploaded = yield (0, cloudinary_1.uploadImage)(firma_encuestado);
            let url = imageUploaded.url;
            newForm.firma_encuestado = url;
        }
        else if (Array.isArray(firma_encuestado)) {
            const imageUploaded = yield (0, cloudinary_1.uploadImage)(firma_encuestado[0]);
            let url = imageUploaded.url;
            newForm.firma_encuestado = url;
        }
        if (typeof firma_encuestador === 'string' && firma_encuestador.length > 0) {
            const imageUploaded = yield (0, cloudinary_1.uploadImage)(firma_encuestador);
            let url = imageUploaded.url;
            newForm.firma_encuestador = url;
        }
        else if (Array.isArray(firma_encuestador)) {
            const imageUploaded = yield (0, cloudinary_1.uploadImage)(firma_encuestador[0]);
            let url = imageUploaded.url;
            newForm.firma_encuestador = url;
        }
        if (typeof foto_encuestado === 'string' && foto_encuestado.length > 0) {
            const imageUploaded = yield (0, cloudinary_1.uploadImage)(foto_encuestado);
            let url = imageUploaded.url;
            newForm.foto_encuestado = url;
        }
        else if (Array.isArray(foto_encuestado)) {
            const imageUploaded = yield (0, cloudinary_1.uploadImage)(foto_encuestado[0]);
            let url = imageUploaded.url;
            newForm.foto_encuestado = url;
        }
        const formComplete = yield Form_1.Form.create(newForm);
        res.status(201).json(formComplete);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createForm = createForm;
