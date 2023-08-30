import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getForm } from '../services/getForm';
import { getForms } from '../services/getForms';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FormInterface } from '../interfaces/form';
import type { formStateInterface } from '../interfaces/initialStateFormSlice';

const initialState: formStateInterface = {
  dataDetails: {
    id: '',
    pregunta_1: '',
    pregunta_2: '',
    pregunta_3: '',
    pregunta_3_otro: '',
    pregunta_4: [],
    pregunta_5: '',
    pregunta_6_contacto: '',
    pregunta_6_numero: '',
    pregunta_6_correo: '',
    pregunta_6_contacto_2: '',
    pregunta_6_numero_2: '',
    pregunta_6_correo_2: '',
    pregunta_7: [],
    pregunta_8: '',
    pregunta_8_direccion: '',
    pregunta_9: '',
    pregunta_10: [],
    pregunta_10_otro: '',
    pregunta_11: [],
    pregunta_11_otro: '',
    pregunta_12: [],
    pregunta_12_otro: '',
    pregunta_13: [],
    pregunta_13_otro: '',
    pregunta_14: [],
    pregunta_14_asociados_cuantos: '',
    pregunta_14_externos_cuantos: '',
    pregunta_15: '',
    pregunta_15_cuantos: '',
    pregunta_16: '',
    pregunta_16_cuantos: '',
    pregunta_17: [],
    pregunta_17_practicas_ordeno_cuantos: '',
    pregunta_17_practicas_ganaderas_cuantos: '',
    pregunta_17_vacunacion_cuantos: '',
    pregunta_17_brucela_tuberculosis_cuantos: '',
    pregunta_17_otro: '',
    pregunta_17_otro_cuantos: '',
    pregunta_18: [],
    pregunta_19: [],
    pregunta_20: '',
    pregunta_21_n_grados: '',
    pregunta_21_n_minutos: '',
    pregunta_21_n_segundos: '',
    pregunta_21_w_grados: '',
    pregunta_21_w_minutos: '',
    pregunta_21_w_segundos: '',
    pregunta_22: '',
    pregunta_23: [],
    pregunta_23_otro: '',
    pregunta_24_yogurt_diaria: '',
    pregunta_24_yogurt_semanal: '',
    pregunta_24_yogurt_mensual: '',
    pregunta_24_yogurt_rendimiento: '',
    pregunta_24_yogurt_vida_util: '',
    pregunta_24_kumis_diaria: '',
    pregunta_24_kumis_semanal: '',
    pregunta_24_kumis_mensual: '',
    pregunta_24_kumis_rendimiento: '',
    pregunta_24_kumis_vida_util: '',
    pregunta_24_cuajada_diaria: '',
    pregunta_24_cuajada_semanal: '',
    pregunta_24_cuajada_mensual: '',
    pregunta_24_cuajada_rendimiento: '',
    pregunta_24_cuajada_vida_util: '',
    pregunta_24_queso_doble_crema_diaria: '',
    pregunta_24_queso_doble_crema_semanal: '',
    pregunta_24_queso_doble_crema_mensual: '',
    pregunta_24_queso_doble_crema_rendimiento: '',
    pregunta_24_queso_doble_crema_vida_util: '',
    pregunta_24_queso_campesino_diaria: '',
    pregunta_24_queso_campesino_semanal: '',
    pregunta_24_queso_campesino_mensual: '',
    pregunta_24_queso_campesino_rendimiento: '',
    pregunta_24_queso_campesino_vida_util: '',
    pregunta_24_leche_diaria: '',
    pregunta_24_leche_semanal: '',
    pregunta_24_leche_mensual: '',
    pregunta_24_leche_rendimiento: '',
    pregunta_24_leche_vida_util: '',
    pregunta_24_quesos_madurados_diaria: '',
    pregunta_24_quesos_madurados_semanal: '',
    pregunta_24_quesos_madurados_mensual: '',
    pregunta_24_quesos_madurados_rendimiento: '',
    pregunta_24_quesos_madurados_vida_util: '',
    pregunta_24_requeson_diaria: '',
    pregunta_24_requeson_semanal: '',
    pregunta_24_requeson_mensual: '',
    pregunta_24_requeson_rendimiento: '',
    pregunta_24_requeson_vida_util: '',
    pregunta_24_arequipe_diaria: '',
    pregunta_24_arequipe_semanal: '',
    pregunta_24_arequipe_mensual: '',
    pregunta_24_arequipe_rendimiento: '',
    pregunta_24_arequipe_vida_util: '',
    pregunta_24_leche_pasteurizada_diaria: '',
    pregunta_24_leche_pasteurizada_semanal: '',
    pregunta_24_leche_pasteurizada_mensual: '',
    pregunta_24_leche_pasteurizada_rendimiento: '',
    pregunta_24_leche_pasteurizada_vida_util: '',
    pregunta_24_leche_UHT_diaria: '',
    pregunta_24_leche_UHT_semanal: '',
    pregunta_24_leche_UHT_mensual: '',
    pregunta_24_leche_UHT_rendimiento: '',
    pregunta_24_leche_UHT_vida_util: '',
    pregunta_24_postres_diaria: '',
    pregunta_24_postres_semanal: '',
    pregunta_24_postres_mensual: '',
    pregunta_24_postres_rendimiento: '',
    pregunta_24_postres_vida_util: '',
    pregunta_24_helados_diaria: '',
    pregunta_24_helados_semanal: '',
    pregunta_24_helados_mensual: '',
    pregunta_24_helados_rendimiento: '',
    pregunta_24_helados_vida_util: '',
    pregunta_24_crema_de_leche_diaria: '',
    pregunta_24_crema_de_leche_semanal: '',
    pregunta_24_crema_de_leche_mensual: '',
    pregunta_24_crema_de_leche_rendimiento: '',
    pregunta_24_crema_de_leche_vida_util: '',
    pregunta_24_queso_mozzarella_diaria: '',
    pregunta_24_queso_mozzarella_semanal: '',
    pregunta_24_queso_mozzarella_mensual: '',
    pregunta_24_queso_mozzarella_rendimiento: '',
    pregunta_24_queso_mozzarella_vida_util: '',
    pregunta_25: [],
    pregunta_25_otro: '',
    pregunta_26: '',
    pregunta_27: '',
    pregunta_28: '',
    pregunta_29: '',
    pregunta_30: '',
    pregunta_31: '',
    pregunta_32: '',
    pregunta_33: '',
    pregunta_33_otro: '',
    pregunta_34: [],
    pregunta_34_otro: '',
    pregunta_35: [],
    pregunta_35_otro: '',
    pregunta_36: '',
    pregunta_36_cuales: [],
    pregunta_37: '',
    pregunta_37_calificacion: [],
    pregunta_38: '',
    pregunta_39: '',
    pregunta_40: '',
    pregunta_40_cuales: [],
    pregunta_41: '',
    pregunta_41_cuales: '',
    pregunta_42: '',
    pregunta_42_como: '',
    pregunta_43_microbiologicas: '',
    pregunta_43_microbiologicas_cuales: '',
    pregunta_43_fisicoquimica: '',
    pregunta_43_fisicoquimica_cuales: '',
    pregunta_43_organolepticas: '',
    pregunta_43_organolepticas_cuales: '',
    pregunta_44: '',
    pregunta_44_como: '',
    pregunta_45: [],
    pregunta_45_otro: '',
    pregunta_46: '',
    pregunta_46_cuales: '',
    pregunta_47: '',
    pregunta_47_cual: '',
    pregunta_48: '',
    pregunta_48_cuales: '',
    pregunta_49: '',
    pregunta_49_cual: '',
    pregunta_50: '',
    pregunta_50_cual: '',
    pregunta_51: '',
    pregunta_51_cual: '',
    pregunta_52: '',
    pregunta_52_cual: '',
    pregunta_52_entidad: '',
    pregunta_53: '',
    pregunta_54: '',
    pregunta_55: '',
    pregunta_56: '',
    pregunta_57: '',
    pregunta_57_cuales: '',
    pregunta_58: '',
    pregunta_58_cuales: '',
    pregunta_59: [],
    pregunta_59_destino_transformadora_local: '',
    pregunta_59_destino_transformadora_nacional: '',
    pregunta_59_destino_venta_local: '',
    pregunta_59_destino_venta_nacional: '',
    pregunta_59_otros: '',
    pregunta_60: '',
    pregunta_61: '',
    pregunta_61_cuales: '',
    pregunta_62: '',
    pregunta_63: '',
    pregunta_64: '',
    pregunta_64_porque: '',
    pregunta_65: '',
    pregunta_65_porque: '',
    pregunta_66_yogurt_presentacion: '',
    pregunta_66_yogurt_valor: '',
    pregunta_66_kumis_presentacion: '',
    pregunta_66_kumis_valor: '',
    pregunta_66_cuajada_presentacion: '',
    pregunta_66_cuajada_valor: '',
    pregunta_66_queso_doble_crema_presentacion: '',
    pregunta_66_queso_doble_crema_valor: '',
    pregunta_66_queso_campesino_presentacion: '',
    pregunta_66_queso_campesino_valor: '',
    pregunta_66_leche_presentacion: '',
    pregunta_66_leche_valor: '',
    pregunta_66_quesos_madurados_presentacion: '',
    pregunta_66_quesos_madurados_valor: '',
    pregunta_66_requeson_presentacion: '',
    pregunta_66_requeson_valor: '',
    pregunta_66_arequipe_presentacion: '',
    pregunta_66_arequipe_valor: '',
    pregunta_66_leche_pasteurizada_presentacion: '',
    pregunta_66_leche_pasteurizada_valor: '',
    pregunta_66_leche_UHT_presentacion: '',
    pregunta_66_leche_UHT_valor: '',
    pregunta_66_postres_presentacion: '',
    pregunta_66_postres_valor: '',
    pregunta_66_helados_presentacion: '',
    pregunta_66_helados_valor: '',
    pregunta_66_crema_de_leche_presentacion: '',
    pregunta_66_crema_de_leche_valor: '',
    pregunta_66_queso_mozzarella_presentacion: '',
    pregunta_66_queso_mozzarella_valor: '',
    pregunta_67: '',
    pregunta_67_distribucion: '',
    pregunta_67_distribucion_quien: '',
    pregunta_68_energia: '',
    pregunta_68_gas: '',
    pregunta_68_agua: '',
    pregunta_68_internet: '',
    pregunta_68_telefonia: '',
    pregunta_68_otro: '',
    pregunta_68_otro_valor: '',
    observaciones: '',
    fecha: '',
    nombre_encuestado: '',
    cedula_encuestado: '',
    firma_encuestado: '',
    nombre_encuestador: '',
    cedula_encuestador: '',
    firma_encuestador: '',
    foto_encuestado: '',
  },
  dataForms: [],
};

export const getFormDetails = createAsyncThunk(
  'form/getForm',
  async (id: string, { dispatch }) => {
    const formDetails: FormInterface = await getForm(id);
    dispatch(updateFormDetails(formDetails));
  }
);
export const getAllForms = createAsyncThunk(
  'form/getForms',
  async (_, { dispatch }) => {
    const formDetails: FormInterface[] = await getForms();
    dispatch(updateForms(formDetails));
  }
);

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormDetails: (state, action: PayloadAction<FormInterface>) => {
      state.dataDetails = action.payload;
    },
    updateForms: (state, action: PayloadAction<FormInterface[]>) => {
      state.dataForms = action.payload;
    },
  },
});

export const { updateFormDetails, updateForms } = formSlice.actions;

export default formSlice.reducer;
