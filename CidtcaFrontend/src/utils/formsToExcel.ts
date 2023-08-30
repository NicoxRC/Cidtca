import type { FormInterface } from '../interfaces/form';
import type { FormsToExcelInterface } from '../interfaces/formsToExcel';

export const formsToExcelFunction = (
  forms: FormInterface[]
): FormsToExcelInterface[] => {
  const formsToExcel: FormsToExcelInterface[] = forms?.map(
    (el: FormInterface) => ({
      pregunta_1: el.pregunta_1?.toString(),
      pregunta_2: el.pregunta_2?.toString(),
      pregunta_2_otro: el.pregunta_12_otro?.toString(),
      pregunta_3: el.pregunta_3?.toString(),
      pregunta_4: el.pregunta_4?.toString(),
      pregunta_5_numero: el.pregunta_6_numero?.toString(),
      pregunta_5_correo: el.pregunta_6_correo?.toString(),
      pregunta_6: el.pregunta_16?.toString(),
      pregunta_7: el.pregunta_7?.toString(),
      pregunta_8: el.pregunta_8?.toString(),
      pregunta_9: el.pregunta_9?.toString(),
      pregunta_9_otro: el.pregunta_3_otro?.toString(),
      pregunta_10: el.pregunta_10?.toString(),
      pregunta_10_otro: el.pregunta_10_otro?.toString(),
      pregunta_11: el.pregunta_11?.toString(),
      pregunta_11_otro: el.pregunta_11_otro?.toString(),
      pregunta_12: el.pregunta_12?.toString(),
      pregunta_12_otro: el.pregunta_12_otro?.toString(),
      pregunta_13: el.pregunta_13?.toString(),
      pregunta_14: el.pregunta_14?.toString(),
      pregunta_15: el.pregunta_15?.toString(),
      pregunta_16: el.pregunta_16?.toString(),
      pregunta_16_cuantos: el.pregunta_16_cuantos?.toString(),
      pregunta_17: el.pregunta_17?.toString(),
      pregunta_17_cuantos: el.pregunta_15_cuantos?.toString(),
      pregunta_18: el.pregunta_18?.toString(),
      pregunta_18_cuantos: el.pregunta_15_cuantos?.toString(),
      pregunta_19: el.pregunta_19?.toString(),
      pregunta_20: el.pregunta_20?.toString(),
      pregunta_21: el.pregunta_1?.toString(),
      pregunta_23: el.pregunta_23?.toString(),
      pregunta_23_gps: el.pregunta_23?.toString(),
      pregunta_24: el.pregunta_2?.toString(),
      pregunta_25: el.pregunta_25?.toString(),
      pregunta_26: el.pregunta_26?.toString(),
      pregunta_27: el.pregunta_27?.toString(),
      pregunta_28_mensual: el.pregunta_52_cual?.toString(),
      pregunta_29_yogurt_diaria: el.pregunta_24_yogurt_diaria?.toString(),
      pregunta_29_yogurt_semanal: el.pregunta_24_yogurt_semanal?.toString(),
      pregunta_29_yogurt_mensual: el.pregunta_24_yogurt_mensual?.toString(),
      pregunta_29_kumis_diaria: el.pregunta_24_kumis_diaria?.toString(),
      pregunta_29_kumis_semanal: el.pregunta_24_kumis_semanal?.toString(),
      pregunta_29_kumis_mensual: el.pregunta_24_kumis_mensual?.toString(),
      pregunta_29_cuajada_diaria: el.pregunta_24_cuajada_diaria?.toString(),
      pregunta_29_cuajada_semanal: el.pregunta_24_cuajada_semanal?.toString(),
      pregunta_29_cuajada_mensual: el.pregunta_24_cuajada_mensual?.toString(),
      pregunta_29_queso_doble_crema_diaria:
        el.pregunta_24_queso_doble_crema_diaria?.toString(),
      pregunta_29_queso_doble_crema_semanal:
        el.pregunta_24_queso_doble_crema_semanal?.toString(),
      pregunta_29_queso_doble_crema_mensual:
        el.pregunta_24_queso_doble_crema_mensual?.toString(),
      pregunta_29_queso_campesino_diaria:
        el.pregunta_24_queso_campesino_diaria?.toString(),
      pregunta_29_queso_campesino_semanal:
        el.pregunta_24_queso_campesino_semanal?.toString(),
      pregunta_29_queso_campesino_mensual:
        el.pregunta_24_queso_campesino_mensual?.toString(),
      pregunta_29_leche_diaria: el.pregunta_24_leche_diaria?.toString(),
      pregunta_29_leche_semanal: el.pregunta_24_leche_semanal?.toString(),
      pregunta_29_leche_mensual: el.pregunta_24_leche_mensual?.toString(),
      pregunta_29_quesos_madurados_diaria:
        el.pregunta_24_quesos_madurados_diaria?.toString(),
      pregunta_29_quesos_madurados_semanal:
        el.pregunta_24_quesos_madurados_semanal?.toString(),
      pregunta_29_quesos_madurados_mensual:
        el.pregunta_24_quesos_madurados_mensual?.toString(),
      pregunta_29_requeson_diaria: el.pregunta_24_requeson_diaria?.toString(),
      pregunta_29_requeson_semanal: el.pregunta_24_requeson_semanal?.toString(),
      pregunta_29_requeson_mensual: el.pregunta_24_requeson_mensual?.toString(),
      pregunta_29_arequipe_diaria: el.pregunta_24_arequipe_diaria?.toString(),
      pregunta_29_arequipe_semanal: el.pregunta_24_arequipe_semanal?.toString(),
      pregunta_29_arequipe_mensual: el.pregunta_24_arequipe_mensual?.toString(),
      pregunta_29_otros: el.pregunta_59_otros?.toString(),
      pregunta_30: el.pregunta_30?.toString(),
      pregunta_31: el.pregunta_31?.toString(),
      pregunta_32: el.pregunta_32?.toString(),
      pregunta_33: el.pregunta_33?.toString(),
      pregunta_34: el.pregunta_34?.toString(),
      pregunta_35: el.pregunta_35?.toString(),
      pregunta_36: el.pregunta_36?.toString(),
      pregunta_37: el.pregunta_37?.toString(),
      pregunta_37_otro: el.pregunta_3_otro?.toString(),
      pregunta_38: el.pregunta_38?.toString(),
      pregunta_38_otro: el.pregunta_3_otro?.toString(),
      pregunta_39: el.pregunta_39?.toString(),
      pregunta_39_otro: el.pregunta_3_otro?.toString(),
      pregunta_40: el.pregunta_40?.toString(),
      pregunta_40_cuales: el.pregunta_40_cuales?.toString(),
      pregunta_41: el.pregunta_41?.toString(),
      pregunta_42: el.pregunta_42?.toString(),
      pregunta_43: el.pregunta_3?.toString(),
      pregunta_43_cuales: el.pregunta_36_cuales?.toString(),
      pregunta_44: el.pregunta_44?.toString(),
      pregunta_44_como: el.pregunta_44_como?.toString(),
      pregunta_45: el.pregunta_45?.toString(),
      pregunta_45_como: el.pregunta_42_como?.toString(),
      pregunta_46: el.pregunta_46?.toString(),
      pregunta_47: el.pregunta_47?.toString(),
      pregunta_48: el.pregunta_48?.toString(),
      pregunta_48_cual: el.pregunta_47_cual?.toString(),
      pregunta_49: el.pregunta_49?.toString(),
      pregunta_50: el.pregunta_50?.toString(),
      pregunta_51: el.pregunta_51?.toString(),
      pregunta_52: el.pregunta_52?.toString(),
      pregunta_53: el.pregunta_53?.toString(),
      pregunta_54: el.pregunta_54?.toString(),
      pregunta_55: el.pregunta_55?.toString(),
      pregunta_56: el.pregunta_56?.toString(),
      pregunta_56_cuales: el.pregunta_36_cuales?.toString(),
      pregunta_57: el.pregunta_57?.toString(),
      pregunta_57_destino_transformadora_local:
        el.pregunta_59_destino_transformadora_local?.toString(),
      pregunta_57_destino_transformadora_nacional:
        el.pregunta_59_destino_transformadora_nacional?.toString(),
      pregunta_57_destino_venta_local:
        el.pregunta_59_destino_venta_local?.toString(),
      pregunta_57_destino_venta_nacional:
        el.pregunta_59_destino_venta_nacional?.toString(),
      pregunta_57_otros: el.pregunta_59_otros?.toString(),
      pregunta_58: el.pregunta_58?.toString(),
      pregunta_59: el.pregunta_59?.toString(),
      pregunta_60: el.pregunta_60?.toString(),
      pregunta_60_otros: el.pregunta_10_otro?.toString(),
      pregunta_61: el.pregunta_61?.toString(),
      pregunta_62: el.pregunta_62?.toString(),
      pregunta_63: el.pregunta_63?.toString(),
      pregunta_64_energia: el.pregunta_68_energia?.toString(),
      pregunta_64_gas: el.pregunta_68_gas?.toString(),
      pregunta_64_otro: el.pregunta_34_otro?.toString(),
      pregunta_64_otro_valor: el.pregunta_68_otro_valor?.toString(),
      pregunta_65: el.pregunta_65?.toString(),
      pregunta_65_porque: el.pregunta_65_porque?.toString(),
      pregunta_66_yogurt_presentacion:
        el.pregunta_66_yogurt_presentacion?.toString(),
      pregunta_66_yogurt_valor: el.pregunta_66_yogurt_valor?.toString(),
      pregunta_66_kumis_presentacion:
        el.pregunta_66_kumis_presentacion?.toString(),
      pregunta_66_kumis_valor: el.pregunta_66_kumis_valor?.toString(),
      pregunta_66_cuajada_presentacion:
        el.pregunta_66_cuajada_presentacion?.toString(),
      pregunta_66_cuajada_valor: el.pregunta_66_cuajada_valor?.toString(),
      pregunta_66_queso_doble_crema_presentacion:
        el.pregunta_66_queso_doble_crema_presentacion?.toString(),
      pregunta_66_queso_doble_crema_valor:
        el.pregunta_66_queso_doble_crema_valor?.toString(),
      pregunta_66_queso_campesino_presentacion:
        el.pregunta_66_queso_campesino_presentacion?.toString(),
      pregunta_66_queso_campesino_valor:
        el.pregunta_66_queso_campesino_valor?.toString(),
      pregunta_66_leche_presentacion:
        el.pregunta_66_leche_presentacion?.toString(),
      pregunta_66_leche_valor: el.pregunta_66_leche_valor?.toString(),
      pregunta_66_quesos_madurados_presentacion:
        el.pregunta_66_quesos_madurados_presentacion?.toString(),
      pregunta_66_quesos_madurados_valor:
        el.pregunta_66_quesos_madurados_valor?.toString(),
      pregunta_66_requeson_presentacion:
        el.pregunta_66_requeson_presentacion?.toString(),
      pregunta_66_requeson_valor: el.pregunta_66_requeson_valor?.toString(),
      pregunta_66_arequipe_presentacion:
        el.pregunta_66_arequipe_presentacion?.toString(),
      pregunta_66_arequipe_valor: el.pregunta_66_arequipe_valor?.toString(),
      pregunta_66_otros: el.pregunta_68_otro?.toString(),
      observaciones: el.observaciones?.toString(),
      fecha: el.fecha?.toString(),
      nombre_encuestado: el.nombre_encuestado?.toString(),
      cedula_encuestado: el.cedula_encuestado?.toString(),
      firma_encuestado: el.firma_encuestado?.toString(),
      nombre_encuestador: el.nombre_encuestador?.toString(),
      cedula_encuestador: el.cedula_encuestador?.toString(),
      firma_encuestador: el.firma_encuestador?.toString(),
      foto_encuestado: el.foto_encuestado?.toString(),
    })
  );
  return formsToExcel;
};
