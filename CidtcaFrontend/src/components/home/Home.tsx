import { useEffect, useState } from 'react';
import { getForms } from '../../services/getForms';
import { Link, useHistory } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Cookies from 'universal-cookie';
import ExportExcel from 'react-export-excel';
import Rayas from '../../images/Rayas.png';
import Cards from '../cards/Cards';
import Logo from '../../images/logo2.jpg';
import './Home.css';

export default function Home() {
  const [forms, setForms]: any = useState();
  const [formsFilter, setFormsFilter]: any = useState();
  const cookies = new Cookies();
  const history = useHistory();

  const ExcelFile = ExportExcel.ExcelFile;
  const ExcelSheet = ExportExcel.ExcelSheet;
  const ExcelColumn = ExportExcel.ExcelColumn;

  const handleClickSession = () => {
    cookies.remove('id', { path: '/' });
    cookies.remove('user', { path: '/' });
    history.push('/');
  };

  const municipio: string[] = [
    'Todos',
    'Guachucal',
    'Aldana',
    'Cuaspud',
    'Cumbal',
    'Contadero',
    'Cordoba',
    'Gualmatan',
    'Iles',
    'Ipiales',
    'Potosi',
    'Puerres',
    'Pupiales',
    'Pasto',
    'Tangua',
    'Nariño',
    'La Florida',
    'Mallama',
    'Buesaco',
    'Guaitarilla',
    'Tuquerres',
    'Ospina',
    'Sapuyes',
  ];

  const formsToExcel = forms?.map((el: any) => ({
    pregunta_1: el.pregunta_1?.toString(),
    pregunta_2: el.pregunta_2?.toString(),
    pregunta_2_otro: el.pregunta_2_otro?.toString(),
    pregunta_3: el.pregunta_3?.toString(),
    pregunta_3_puntaje: el.pregunta_3_puntaje?.toString(),
    pregunta_4: el.pregunta_4?.toString(),
    pregunta_5_numero: el.pregunta_5_numero?.toString(),
    pregunta_5_correo: el.pregunta_5_correo?.toString(),
    pregunta_6: el.pregunta_6?.toString(),
    pregunta_7: el.pregunta_7?.toString(),
    pregunta_7_vereda: el.pregunta_7_vereda?.toString(),
    pregunta_8: el.pregunta_8?.toString(),
    pregunta_9: el.pregunta_9?.toString(),
    pregunta_9_porcentaje_recibe_planta:
      el.pregunta_9_porcentaje_recibe_planta?.toString(),
    pregunta_9_porcentaje_recoge_planta:
      el.pregunta_9_porcentaje_recoge_planta?.toString(),
    pregunta_9_porcentaje_via_productor_finca:
      el.pregunta_9_porcentaje_via_productor_finca?.toString(),
    pregunta_9_otro: el.pregunta_9_otro?.toString(),
    pregunta_10: el.pregunta_10?.toString(),
    pregunta_10_porcentaje_termo_king:
      el.pregunta_10_porcentaje_termo_king?.toString(),
    pregunta_10_porcentaje_carro_particular:
      el.pregunta_10_porcentaje_carro_particular?.toString(),
    pregunta_10_porcentaje_moto: el.pregunta_10_porcentaje_moto?.toString(),
    pregunta_10_porcentaje_caballo:
      el.pregunta_10_porcentaje_caballo?.toString(),
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
    pregunta_17_cuantos: el.pregunta_17_cuantos?.toString(),
    pregunta_18: el.pregunta_18?.toString(),
    pregunta_18_cuantos: el.pregunta_18_cuantos?.toString(),
    pregunta_19: el.pregunta_19?.toString(),
    pregunta_20: el.pregunta_20?.toString(),
    pregunta_21: el.pregunta_21?.toString(),
    pregunta_21_porcentaje_pavimentada:
      el.pregunta_21_porcentaje_pavimentada?.toString(),
    pregunta_21_porcentaje_placa_huella:
      el.pregunta_21_porcentaje_placa_huella?.toString(),
    pregunta_21_porcentaje_via_carreteable:
      el.pregunta_21_porcentaje_via_carreteable?.toString(),
    pregunta_21_porcentaje_trocha_a_pie:
      el.pregunta_21_porcentaje_trocha_a_pie?.toString(),
    pregunta_22: el.pregunta_22?.toString(),
    pregunta_22_porcentaje_pavimentada:
      el.pregunta_22_porcentaje_pavimentada?.toString(),
    pregunta_22_porcentaje_placa_huella:
      el.pregunta_22_porcentaje_placa_huella?.toString(),
    pregunta_22_porcentaje_via_carreteable:
      el.pregunta_22_porcentaje_via_carreteable?.toString(),
    pregunta_22_porcentaje_trocha_a_pie:
      el.pregunta_22_porcentaje_trocha_a_pie?.toString(),
    pregunta_23: el.pregunta_23?.toString(),
    pregunta_23_gps: el.pregunta_23_gps?.toString(),
    pregunta_24: el.pregunta_24?.toString(),
    pregunta_25: el.pregunta_25?.toString(),
    pregunta_26: el.pregunta_26?.toString(),
    pregunta_27: el.pregunta_27?.toString(),
    pregunta_28_diaria: el.pregunta_28_diaria?.toString(),
    pregunta_28_semanal: el.pregunta_28_semanal?.toString(),
    pregunta_28_mensual: el.pregunta_28_mensual?.toString(),
    pregunta_29_yogurt_diaria: el.pregunta_29_yogurt_diaria?.toString(),
    pregunta_29_yogurt_semanal: el.pregunta_29_yogurt_semanal?.toString(),
    pregunta_29_yogurt_mensual: el.pregunta_29_yogurt_mensual?.toString(),
    pregunta_29_kumis_diaria: el.pregunta_29_kumis_diaria?.toString(),
    pregunta_29_kumis_semanal: el.pregunta_29_kumis_semanal?.toString(),
    pregunta_29_kumis_mensual: el.pregunta_29_kumis_mensual?.toString(),
    pregunta_29_cuajada_diaria: el.pregunta_29_cuajada_diaria?.toString(),
    pregunta_29_cuajada_semanal: el.pregunta_29_cuajada_semanal?.toString(),
    pregunta_29_cuajada_mensual: el.pregunta_29_cuajada_mensual?.toString(),
    pregunta_29_queso_doble_crema_diaria:
      el.pregunta_29_queso_doble_crema_diaria?.toString(),
    pregunta_29_queso_doble_crema_semanal:
      el.pregunta_29_queso_doble_crema_semanal?.toString(),
    pregunta_29_queso_doble_crema_mensual:
      el.pregunta_29_queso_doble_crema_mensual?.toString(),
    pregunta_29_queso_campesino_diaria:
      el.pregunta_29_queso_campesino_diaria?.toString(),
    pregunta_29_queso_campesino_semanal:
      el.pregunta_29_queso_campesino_semanal?.toString(),
    pregunta_29_queso_campesino_mensual:
      el.pregunta_29_queso_campesino_mensual?.toString(),
    pregunta_29_leche_diaria: el.pregunta_29_leche_diaria?.toString(),
    pregunta_29_leche_semanal: el.pregunta_29_leche_semanal?.toString(),
    pregunta_29_leche_mensual: el.pregunta_29_leche_mensual?.toString(),
    pregunta_29_quesos_madurados_diaria:
      el.pregunta_29_quesos_madurados_diaria?.toString(),
    pregunta_29_quesos_madurados_semanal:
      el.pregunta_29_quesos_madurados_semanal?.toString(),
    pregunta_29_quesos_madurados_mensual:
      el.pregunta_29_quesos_madurados_mensual?.toString(),
    pregunta_29_requeson_diaria: el.pregunta_29_requeson_diaria?.toString(),
    pregunta_29_requeson_semanal: el.pregunta_29_requeson_semanal?.toString(),
    pregunta_29_requeson_mensual: el.pregunta_29_requeson_mensual?.toString(),
    pregunta_29_arequipe_diaria: el.pregunta_29_arequipe_diaria?.toString(),
    pregunta_29_arequipe_semanal: el.pregunta_29_arequipe_semanal?.toString(),
    pregunta_29_arequipe_mensual: el.pregunta_29_arequipe_mensual?.toString(),
    pregunta_29_otros: el.pregunta_29_otros?.toString(),
    pregunta_30: el.pregunta_30?.toString(),
    pregunta_31: el.pregunta_31?.toString(),
    pregunta_32: el.pregunta_32?.toString(),
    pregunta_33: el.pregunta_33?.toString(),
    pregunta_34: el.pregunta_34?.toString(),
    pregunta_35: el.pregunta_35?.toString(),
    pregunta_36: el.pregunta_36?.toString(),
    pregunta_37: el.pregunta_37?.toString(),
    pregunta_37_otro: el.pregunta_37_otro?.toString(),
    pregunta_38: el.pregunta_38?.toString(),
    pregunta_38_otro: el.pregunta_38_otro?.toString(),
    pregunta_39: el.pregunta_39?.toString(),
    pregunta_39_otro: el.pregunta_39_otro?.toString(),
    pregunta_40: el.pregunta_40?.toString(),
    pregunta_40_cuales: el.pregunta_40_cuales?.toString(),
    pregunta_41: el.pregunta_41?.toString(),
    pregunta_42: el.pregunta_42?.toString(),
    pregunta_43: el.pregunta_43?.toString(),
    pregunta_43_cuales: el.pregunta_43_cuales?.toString(),
    pregunta_44: el.pregunta_44?.toString(),
    pregunta_44_como: el.pregunta_44_como?.toString(),
    pregunta_45: el.pregunta_45?.toString(),
    pregunta_45_como: el.pregunta_45_como?.toString(),
    pregunta_46: el.pregunta_46?.toString(),
    pregunta_47: el.pregunta_47?.toString(),
    pregunta_48: el.pregunta_48?.toString(),
    pregunta_48_cual: el.pregunta_48_cual?.toString(),
    pregunta_49: el.pregunta_49?.toString(),
    pregunta_50: el.pregunta_50?.toString(),
    pregunta_51: el.pregunta_51?.toString(),
    pregunta_52: el.pregunta_52?.toString(),
    pregunta_53: el.pregunta_53?.toString(),
    pregunta_54: el.pregunta_54?.toString(),
    pregunta_55: el.pregunta_55?.toString(),
    pregunta_56: el.pregunta_56?.toString(),
    pregunta_56_cuales: el.pregunta_56_cuales?.toString(),
    pregunta_57: el.pregunta_57?.toString(),
    pregunta_57_destino_transformadora_local:
      el.pregunta_57_destino_transformadora_local?.toString(),
    pregunta_57_destino_transformadora_nacional:
      el.pregunta_57_destino_transformadora_nacional?.toString(),
    pregunta_57_destino_venta_local:
      el.pregunta_57_destino_venta_local?.toString(),
    pregunta_57_destino_venta_nacional:
      el.pregunta_57_destino_venta_nacional?.toString(),
    pregunta_57_otros: el.pregunta_57_otros?.toString(),
    pregunta_58: el.pregunta_58?.toString(),
    pregunta_59: el.pregunta_59?.toString(),
    pregunta_60: el.pregunta_60?.toString(),
    pregunta_60_otros: el.pregunta_60_otros?.toString(),
    pregunta_61: el.pregunta_61?.toString(),
    pregunta_62: el.pregunta_62?.toString(),
    pregunta_63: el.pregunta_63?.toString(),
    pregunta_64_energia: el.pregunta_64_energia?.toString(),
    pregunta_64_gas: el.pregunta_64_gas?.toString(),
    pregunta_64_otro: el.pregunta_64_otro?.toString(),
    pregunta_64_otro_valor: el.pregunta_64_otro_valor?.toString(),
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
    pregunta_66_otros: el.pregunta_66_otros?.toString(),
    observaciones: el.observaciones?.toString(),
    fecha: el.fecha?.toString(),
    nombre_encuestado: el.nombre_encuestado?.toString(),
    cedula_encuestado: el.cedula_encuestado?.toString(),
    firma_encuestado: el.firma_encuestado?.toString(),
    nombre_encuestador: el.nombre_encuestador?.toString(),
    cedula_encuestador: el.cedula_encuestador?.toString(),
    firma_encuestador: el.firma_encuestador?.toString(),
    foto_encuestado: el.foto_encuestado?.toString(),
  }));

  const excelDownload = [
    { label: 'pregunta_1,', value: 'pregunta_1' },
    { label: 'pregunta_2,', value: 'pregunta_2' },
    { label: 'pregunta_3,', value: 'pregunta_3' },
    { label: 'pregunta_3_otro,', value: 'pregunta_3_otro' },
    { label: 'pregunta_4,', value: 'pregunta_4' },
    { label: 'pregunta_5,', value: 'pregunta_5' },
    { label: 'pregunta_6_contacto,', value: 'pregunta_6_contacto' },
    { label: 'pregunta_6_numero,', value: 'pregunta_6_numero' },
    { label: 'pregunta_6_correo,', value: 'pregunta_6_correo' },
    { label: 'pregunta_6_contacto_2,', value: 'pregunta_6_contacto_2' },
    { label: 'pregunta_6_numero_2,', value: 'pregunta_6_numero_2' },
    { label: 'pregunta_6_correo_2,', value: 'pregunta_6_correo_2' },
    { label: 'pregunta_7,', value: 'pregunta_7' },
    { label: 'pregunta_8,', value: 'pregunta_8' },
    { label: 'pregunta_8_direccion,', value: 'pregunta_8_direccion' },
    { label: 'pregunta_9,', value: 'pregunta_9' },
    { label: 'pregunta_10,', value: 'pregunta_10' },
    { label: 'pregunta_10_otro,', value: 'pregunta_10_otro' },
    { label: 'pregunta_11,', value: 'pregunta_11' },
    { label: 'pregunta_11_otro,', value: 'pregunta_11_otro' },
    { label: 'pregunta_12,', value: 'pregunta_12' },
    { label: 'pregunta_12_otro,', value: 'pregunta_12_otro' },
    { label: 'pregunta_13,', value: 'pregunta_13' },
    { label: 'pregunta_13_otro,', value: 'pregunta_13_otro' },
    { label: 'pregunta_14,', value: 'pregunta_14' },
    {
      label: 'pregunta_14_asociados_cuantos,',
      value: 'pregunta_14_asociados_cuantos',
    },
    {
      label: 'pregunta_14_externos_cuantos,',
      value: 'pregunta_14_externos_cuantos',
    },
    { label: 'pregunta_15,', value: 'pregunta_15' },
    { label: 'pregunta_15_cuantos,', value: 'pregunta_15_cuantos' },
    { label: 'pregunta_16,', value: 'pregunta_16' },
    { label: 'pregunta_16_cuantos,', value: 'pregunta_16_cuantos' },
    { label: 'pregunta_17,', value: 'pregunta_17' },
    {
      label: 'pregunta_17_practicas_ordeno_cuantos,',
      value: 'pregunta_17_practicas_ordeno_cuantos',
    },
    {
      label: 'pregunta_17_practicas_ganaderas_cuantos,',
      value: 'pregunta_17_practicas_ganaderas_cuantos',
    },
    {
      label: 'pregunta_17_vacunacion_cuantos,',
      value: 'pregunta_17_vacunacion_cuantos',
    },
    {
      label: 'pregunta_17_brucela_tuberculosis_cuantos,',
      value: 'pregunta_17_brucela_tuberculosis_cuantos',
    },
    { label: 'pregunta_17_otro,', value: 'pregunta_17_otro' },
    { label: 'pregunta_17_otro_cuantos,', value: 'pregunta_17_otro_cuantos' },
    { label: 'pregunta_18,', value: 'pregunta_18' },
    { label: 'pregunta_19,', value: 'pregunta_19' },
    { label: 'pregunta_20,', value: 'pregunta_20' },
    { label: 'pregunta_21_n_grados,', value: 'pregunta_21_n_grados' },
    { label: 'pregunta_21_n_minutos,', value: 'pregunta_21_n_minutos' },
    { label: 'pregunta_21_n_segundos,', value: 'pregunta_21_n_segundos' },
    { label: 'pregunta_21_w_grados,', value: 'pregunta_21_w_grados' },
    { label: 'pregunta_21_w_minutos,', value: 'pregunta_21_w_minutos' },
    { label: 'pregunta_21_w_segundos,', value: 'pregunta_21_w_segundos' },
    { label: 'pregunta_22,', value: 'pregunta_22' },
    { label: 'pregunta_23,', value: 'pregunta_23' },
    { label: 'pregunta_23_otro,', value: 'pregunta_23_otro' },
    { label: 'pregunta_24_yogurt_diaria,', value: 'pregunta_24_yogurt_diaria' },
    {
      label: 'pregunta_24_yogurt_semanal,',
      value: 'pregunta_24_yogurt_semanal',
    },
    {
      label: 'pregunta_24_yogurt_mensual,',
      value: 'pregunta_24_yogurt_mensual',
    },
    {
      label: 'pregunta_24_yogurt_rendimiento,',
      value: 'pregunta_24_yogurt_rendimiento',
    },
    {
      label: 'pregunta_24_yogurt_vida_util,',
      value: 'pregunta_24_yogurt_vida_util',
    },
    { label: 'pregunta_24_kumis_diaria,', value: 'pregunta_24_kumis_diaria' },
    { label: 'pregunta_24_kumis_semanal,', value: 'pregunta_24_kumis_semanal' },
    { label: 'pregunta_24_kumis_mensual,', value: 'pregunta_24_kumis_mensual' },
    {
      label: 'pregunta_24_kumis_rendimiento,',
      value: 'pregunta_24_kumis_rendimiento',
    },
    {
      label: 'pregunta_24_kumis_vida_util,',
      value: 'pregunta_24_kumis_vida_util',
    },
    {
      label: 'pregunta_24_cuajada_diaria,',
      value: 'pregunta_24_cuajada_diaria',
    },
    {
      label: 'pregunta_24_cuajada_semanal,',
      value: 'pregunta_24_cuajada_semanal',
    },
    {
      label: 'pregunta_24_cuajada_mensual,',
      value: 'pregunta_24_cuajada_mensual',
    },
    {
      label: 'pregunta_24_cuajada_rendimiento,',
      value: 'pregunta_24_cuajada_rendimiento',
    },
    {
      label: 'pregunta_24_cuajada_vida_util,',
      value: 'pregunta_24_cuajada_vida_util',
    },
    {
      label: 'pregunta_24_queso_doble_crema_diaria,',
      value: 'pregunta_24_queso_doble_crema_diaria',
    },
    {
      label: 'pregunta_24_queso_doble_crema_semanal,',
      value: 'pregunta_24_queso_doble_crema_semanal',
    },
    {
      label: 'pregunta_24_queso_doble_crema_mensual,',
      value: 'pregunta_24_queso_doble_crema_mensual',
    },
    {
      label: 'pregunta_24_queso_doble_crema_rendimiento,',
      value: 'pregunta_24_queso_doble_crema_rendimiento',
    },
    {
      label: 'pregunta_24_queso_doble_crema_vida_util,',
      value: 'pregunta_24_queso_doble_crema_vida_util',
    },
    {
      label: 'pregunta_24_queso_campesino_diaria,',
      value: 'pregunta_24_queso_campesino_diaria',
    },
    {
      label: 'pregunta_24_queso_campesino_semanal,',
      value: 'pregunta_24_queso_campesino_semanal',
    },
    {
      label: 'pregunta_24_queso_campesino_mensual,',
      value: 'pregunta_24_queso_campesino_mensual',
    },
    {
      label: 'pregunta_24_queso_campesino_rendimiento,',
      value: 'pregunta_24_queso_campesino_rendimiento',
    },
    {
      label: 'pregunta_24_queso_campesino_vida_util,',
      value: 'pregunta_24_queso_campesino_vida_util',
    },
    { label: 'pregunta_24_leche_diaria,', value: 'pregunta_24_leche_diaria' },
    { label: 'pregunta_24_leche_semanal,', value: 'pregunta_24_leche_semanal' },
    { label: 'pregunta_24_leche_mensual,', value: 'pregunta_24_leche_mensual' },
    {
      label: 'pregunta_24_leche_rendimiento,',
      value: 'pregunta_24_leche_rendimiento',
    },
    {
      label: 'pregunta_24_leche_vida_util,',
      value: 'pregunta_24_leche_vida_util',
    },
    {
      label: 'pregunta_24_quesos_madurados_diaria,',
      value: 'pregunta_24_quesos_madurados_diaria',
    },
    {
      label: 'pregunta_24_quesos_madurados_semanal,',
      value: 'pregunta_24_quesos_madurados_semanal',
    },
    {
      label: 'pregunta_24_quesos_madurados_mensual,',
      value: 'pregunta_24_quesos_madurados_mensual',
    },
    {
      label: 'pregunta_24_quesos_madurados_rendimiento,',
      value: 'pregunta_24_quesos_madurados_rendimiento',
    },
    {
      label: 'pregunta_24_quesos_madurados_vida_util,',
      value: 'pregunta_24_quesos_madurados_vida_util',
    },
    {
      label: 'pregunta_24_requeson_diaria,',
      value: 'pregunta_24_requeson_diaria',
    },
    {
      label: 'pregunta_24_requeson_semanal,',
      value: 'pregunta_24_requeson_semanal',
    },
    {
      label: 'pregunta_24_requeson_mensual,',
      value: 'pregunta_24_requeson_mensual',
    },
    {
      label: 'pregunta_24_requeson_rendimiento,',
      value: 'pregunta_24_requeson_rendimiento',
    },
    {
      label: 'pregunta_24_requeson_vida_util,',
      value: 'pregunta_24_requeson_vida_util',
    },
    {
      label: 'pregunta_24_arequipe_diaria,',
      value: 'pregunta_24_arequipe_diaria',
    },
    {
      label: 'pregunta_24_arequipe_semanal,',
      value: 'pregunta_24_arequipe_semanal',
    },
    {
      label: 'pregunta_24_arequipe_mensual,',
      value: 'pregunta_24_arequipe_mensual',
    },
    {
      label: 'pregunta_24_arequipe_rendimiento,',
      value: 'pregunta_24_arequipe_rendimiento',
    },
    {
      label: 'pregunta_24_arequipe_vida_util,',
      value: 'pregunta_24_arequipe_vida_util',
    },
    {
      label: 'pregunta_24_leche_pasteurizada_diaria,',
      value: 'pregunta_24_leche_pasteurizada_diaria',
    },
    {
      label: 'pregunta_24_leche_pasteurizada_semanal,',
      value: 'pregunta_24_leche_pasteurizada_semanal',
    },
    {
      label: 'pregunta_24_leche_pasteurizada_mensual,',
      value: 'pregunta_24_leche_pasteurizada_mensual',
    },
    {
      label: 'pregunta_24_leche_pasteurizada_rendimiento,',
      value: 'pregunta_24_leche_pasteurizada_rendimiento',
    },
    {
      label: 'pregunta_24_leche_pasteurizada_vida_util,',
      value: 'pregunta_24_leche_pasteurizada_vida_util',
    },
    {
      label: 'pregunta_24_leche_UHT_diaria,',
      value: 'pregunta_24_leche_UHT_diaria',
    },
    {
      label: 'pregunta_24_leche_UHT_semanal,',
      value: 'pregunta_24_leche_UHT_semanal',
    },
    {
      label: 'pregunta_24_leche_UHT_mensual,',
      value: 'pregunta_24_leche_UHT_mensual',
    },
    {
      label: 'pregunta_24_leche_UHT_rendimiento,',
      value: 'pregunta_24_leche_UHT_rendimiento',
    },
    {
      label: 'pregunta_24_leche_UHT_vida_util,',
      value: 'pregunta_24_leche_UHT_vida_util',
    },
    {
      label: 'pregunta_24_postres_diaria,',
      value: 'pregunta_24_postres_diaria',
    },
    {
      label: 'pregunta_24_postres_semanal,',
      value: 'pregunta_24_postres_semanal',
    },
    {
      label: 'pregunta_24_postres_mensual,',
      value: 'pregunta_24_postres_mensual',
    },
    {
      label: 'pregunta_24_postres_rendimiento,',
      value: 'pregunta_24_postres_rendimiento',
    },
    {
      label: 'pregunta_24_postres_vida_util,',
      value: 'pregunta_24_postres_vida_util',
    },
    {
      label: 'pregunta_24_helados_diaria,',
      value: 'pregunta_24_helados_diaria',
    },
    {
      label: 'pregunta_24_helados_semanal,',
      value: 'pregunta_24_helados_semanal',
    },
    {
      label: 'pregunta_24_helados_mensual,',
      value: 'pregunta_24_helados_mensual',
    },
    {
      label: 'pregunta_24_helados_rendimiento,',
      value: 'pregunta_24_helados_rendimiento',
    },
    {
      label: 'pregunta_24_helados_vida_util,',
      value: 'pregunta_24_helados_vida_util',
    },
    {
      label: 'pregunta_24_crema_de_leche_diaria,',
      value: 'pregunta_24_crema_de_leche_diaria',
    },
    {
      label: 'pregunta_24_crema_de_leche_semanal,',
      value: 'pregunta_24_crema_de_leche_semanal',
    },
    {
      label: 'pregunta_24_crema_de_leche_mensual,',
      value: 'pregunta_24_crema_de_leche_mensual',
    },
    {
      label: 'pregunta_24_crema_de_leche_rendimiento,',
      value: 'pregunta_24_crema_de_leche_rendimiento',
    },
    {
      label: 'pregunta_24_crema_de_leche_vida_util,',
      value: 'pregunta_24_crema_de_leche_vida_util',
    },
    {
      label: 'pregunta_24_queso_mozzarella_diaria,',
      value: 'pregunta_24_queso_mozzarella_diaria',
    },
    {
      label: 'pregunta_24_queso_mozzarella_semanal,',
      value: 'pregunta_24_queso_mozzarella_semanal',
    },
    {
      label: 'pregunta_24_queso_mozzarella_mensual,',
      value: 'pregunta_24_queso_mozzarella_mensual',
    },
    {
      label: 'pregunta_24_queso_mozzarella_rendimiento,',
      value: 'pregunta_24_queso_mozzarella_rendimiento',
    },
    {
      label: 'pregunta_24_queso_mozzarella_vida_util,',
      value: 'pregunta_24_queso_mozzarella_vida_util',
    },
    { label: 'pregunta_25,', value: 'pregunta_25' },
    { label: 'pregunta_25_otro,', value: 'pregunta_25_otro' },
    { label: 'pregunta_26,', value: 'pregunta_26' },
    { label: 'pregunta_27,', value: 'pregunta_27' },
    { label: 'pregunta_28,', value: 'pregunta_28' },
    { label: 'pregunta_29,', value: 'pregunta_29' },
    { label: 'pregunta_30,', value: 'pregunta_30' },
    { label: 'pregunta_31,', value: 'pregunta_31' },
    { label: 'pregunta_32,', value: 'pregunta_32' },
    { label: 'pregunta_33,', value: 'pregunta_33' },
    { label: 'pregunta_33_otro,', value: 'pregunta_33_otro' },
    { label: 'pregunta_34,', value: 'pregunta_34' },
    { label: 'pregunta_34_otro,', value: 'pregunta_34_otro' },
    { label: 'pregunta_35,', value: 'pregunta_35' },
    { label: 'pregunta_35_otro,', value: 'pregunta_35_otro' },
    { label: 'pregunta_36,', value: 'pregunta_36' },
    { label: 'pregunta_36_cuales,', value: 'pregunta_36_cuales' },
    { label: 'pregunta_37,', value: 'pregunta_37' },
    { label: 'pregunta_37_calificacion,', value: 'pregunta_37_calificacion' },
    { label: 'pregunta_38,', value: 'pregunta_38' },
    { label: 'pregunta_39,', value: 'pregunta_39' },
    { label: 'pregunta_40,', value: 'pregunta_40' },
    { label: 'pregunta_40_cuales,', value: 'pregunta_40_cuales' },
    { label: 'pregunta_41,', value: 'pregunta_41' },
    { label: 'pregunta_41_cuales,', value: 'pregunta_41_cuales' },
    { label: 'pregunta_42,', value: 'pregunta_42' },
    { label: 'pregunta_42_como,', value: 'pregunta_42_como' },
    {
      label: 'pregunta_43_microbiologicas,',
      value: 'pregunta_43_microbiologicas',
    },
    {
      label: 'pregunta_43_microbiologicas_cuales,',
      value: 'pregunta_43_microbiologicas_cuales',
    },
    { label: 'pregunta_43_fisicoquimica,', value: 'pregunta_43_fisicoquimica' },
    {
      label: 'pregunta_43_fisicoquimica_cuales,',
      value: 'pregunta_43_fisicoquimica_cuales',
    },
    {
      label: 'pregunta_43_organolepticas,',
      value: 'pregunta_43_organolepticas',
    },
    {
      label: 'pregunta_43_organolepticas_cuales,',
      value: 'pregunta_43_organolepticas_cuales',
    },
    { label: 'pregunta_44,', value: 'pregunta_44' },
    { label: 'pregunta_44_como,', value: 'pregunta_44_como' },
    { label: 'pregunta_45,', value: 'pregunta_45' },
    { label: 'pregunta_45_otro,', value: 'pregunta_45_otro' },
    { label: 'pregunta_46,', value: 'pregunta_46' },
    { label: 'pregunta_46_cuales,', value: 'pregunta_46_cuales' },
    { label: 'pregunta_47,', value: 'pregunta_47' },
    { label: 'pregunta_47_cual,', value: 'pregunta_47_cual' },
    { label: 'pregunta_48,', value: 'pregunta_48' },
    { label: 'pregunta_48_cuales,', value: 'pregunta_48_cuales' },
    { label: 'pregunta_49,', value: 'pregunta_49' },
    { label: 'pregunta_49_cual,', value: 'pregunta_49_cual' },
    { label: 'pregunta_50,', value: 'pregunta_50' },
    { label: 'pregunta_50_cual,', value: 'pregunta_50_cual' },
    { label: 'pregunta_51,', value: 'pregunta_51' },
    { label: 'pregunta_51_cual,', value: 'pregunta_51_cual' },
    { label: 'pregunta_52,', value: 'pregunta_52' },
    { label: 'pregunta_52_cual,', value: 'pregunta_52_cual' },
    { label: 'pregunta_52_entidad,', value: 'pregunta_52_entidad' },
    { label: 'pregunta_53,', value: 'pregunta_53' },
    { label: 'pregunta_54,', value: 'pregunta_54' },
    { label: 'pregunta_55,', value: 'pregunta_55' },
    { label: 'pregunta_56,', value: 'pregunta_56' },
    { label: 'pregunta_57,', value: 'pregunta_57' },
    { label: 'pregunta_57_cuales,', value: 'pregunta_57_cuales' },
    { label: 'pregunta_58,', value: 'pregunta_58' },
    { label: 'pregunta_58_cuales,', value: 'pregunta_58_cuales' },
    { label: 'pregunta_59,', value: 'pregunta_59' },
    {
      label: 'pregunta_59_destino_transformadora_local,',
      value: 'pregunta_59_destino_transformadora_local',
    },
    {
      label: 'pregunta_59_destino_transformadora_nacional,',
      value: 'pregunta_59_destino_transformadora_nacional',
    },
    {
      label: 'pregunta_59_destino_venta_local,',
      value: 'pregunta_59_destino_venta_local',
    },
    {
      label: 'pregunta_59_destino_venta_nacional,',
      value: 'pregunta_59_destino_venta_nacional',
    },
    { label: 'pregunta_59_otros,', value: 'pregunta_59_otros' },
    { label: 'pregunta_60,', value: 'pregunta_60' },
    { label: 'pregunta_61,', value: 'pregunta_61' },
    { label: 'pregunta_61_cuales,', value: 'pregunta_61_cuales' },
    { label: 'pregunta_62,', value: 'pregunta_62' },
    { label: 'pregunta_63,', value: 'pregunta_63' },
    { label: 'pregunta_64,', value: 'pregunta_64' },
    { label: 'pregunta_64_porque,', value: 'pregunta_64_porque' },
    { label: 'pregunta_65,', value: 'pregunta_65' },
    { label: 'pregunta_65_porque,', value: 'pregunta_65_porque' },
    {
      label: 'pregunta_66_yogurt_presentacion,',
      value: 'pregunta_66_yogurt_presentacion',
    },
    { label: 'pregunta_66_yogurt_valor,', value: 'pregunta_66_yogurt_valor' },
    {
      label: 'pregunta_66_kumis_presentacion,',
      value: 'pregunta_66_kumis_presentacion',
    },
    { label: 'pregunta_66_kumis_valor,', value: 'pregunta_66_kumis_valor' },
    {
      label: 'pregunta_66_cuajada_presentacion,',
      value: 'pregunta_66_cuajada_presentacion',
    },
    { label: 'pregunta_66_cuajada_valor,', value: 'pregunta_66_cuajada_valor' },
    {
      label: 'pregunta_66_queso_doble_crema_presentacion,',
      value: 'pregunta_66_queso_doble_crema_presentacion',
    },
    {
      label: 'pregunta_66_queso_doble_crema_valor,',
      value: 'pregunta_66_queso_doble_crema_valor',
    },
    {
      label: 'pregunta_66_queso_campesino_presentacion,',
      value: 'pregunta_66_queso_campesino_presentacion',
    },
    {
      label: 'pregunta_66_queso_campesino_valor,',
      value: 'pregunta_66_queso_campesino_valor',
    },
    {
      label: 'pregunta_66_leche_presentacion,',
      value: 'pregunta_66_leche_presentacion',
    },
    { label: 'pregunta_66_leche_valor,', value: 'pregunta_66_leche_valor' },
    {
      label: 'pregunta_66_quesos_madurados_presentacion,',
      value: 'pregunta_66_quesos_madurados_presentacion',
    },
    {
      label: 'pregunta_66_quesos_madurados_valor,',
      value: 'pregunta_66_quesos_madurados_valor',
    },
    {
      label: 'pregunta_66_requeson_presentacion,',
      value: 'pregunta_66_requeson_presentacion',
    },
    {
      label: 'pregunta_66_requeson_valor,',
      value: 'pregunta_66_requeson_valor',
    },
    {
      label: 'pregunta_66_arequipe_presentacion,',
      value: 'pregunta_66_arequipe_presentacion',
    },
    {
      label: 'pregunta_66_arequipe_valor,',
      value: 'pregunta_66_arequipe_valor',
    },
    {
      label: 'pregunta_66_leche_pasteurizada_presentacion,',
      value: 'pregunta_66_leche_pasteurizada_presentacion',
    },
    {
      label: 'pregunta_66_leche_pasteurizada_valor,',
      value: 'pregunta_66_leche_pasteurizada_valor',
    },
    {
      label: 'pregunta_66_leche_UHT_presentacion,',
      value: 'pregunta_66_leche_UHT_presentacion',
    },
    {
      label: 'pregunta_66_leche_UHT_valor,',
      value: 'pregunta_66_leche_UHT_valor',
    },
    {
      label: 'pregunta_66_postres_presentacion,',
      value: 'pregunta_66_postres_presentacion',
    },
    { label: 'pregunta_66_postres_valor,', value: 'pregunta_66_postres_valor' },
    {
      label: 'pregunta_66_helados_presentacion,',
      value: 'pregunta_66_helados_presentacion',
    },
    { label: 'pregunta_66_helados_valor,', value: 'pregunta_66_helados_valor' },
    {
      label: 'pregunta_66_crema_de_leche_presentacion,',
      value: 'pregunta_66_crema_de_leche_presentacion',
    },
    {
      label: 'pregunta_66_crema_de_leche_valor,',
      value: 'pregunta_66_crema_de_leche_valor',
    },
    {
      label: 'pregunta_66_queso_mozzarella_presentacion,',
      value: 'pregunta_66_queso_mozzarella_presentacion',
    },
    {
      label: 'pregunta_66_queso_mozzarella_valor,',
      value: 'pregunta_66_queso_mozzarella_valor',
    },
    { label: 'pregunta_67,', value: 'pregunta_67' },
    { label: 'pregunta_67_distribucion,', value: 'pregunta_67_distribucion' },
    {
      label: 'pregunta_67_distribucion_quien,',
      value: 'pregunta_67_distribucion_quien',
    },
    { label: 'pregunta_68_energia,', value: 'pregunta_68_energia' },
    { label: 'pregunta_68_gas,', value: 'pregunta_68_gas' },
    { label: 'pregunta_68_agua,', value: 'pregunta_68_agua' },
    { label: 'pregunta_68_internet,', value: 'pregunta_68_internet' },
    { label: 'pregunta_68_telefonia,', value: 'pregunta_68_telefonia' },
    { label: 'pregunta_68_otro,', value: 'pregunta_68_otro' },
    { label: 'pregunta_68_otro_valor,', value: 'pregunta_68_otro_valor' },
    { label: 'observaciones', value: 'observaciones' },
    { label: 'fecha', value: 'fecha' },
    { label: 'nombre_encuestado', value: 'nombre_encuestado' },
    { label: 'cedula_encuestado', value: 'cedula_encuestado' },
    { label: 'nombre_encuestador', value: 'nombre_encuestador' },
    { label: 'cedula_encuestador', value: 'cedula_encuestador' },
  ];

  const handleCityChange = (e: any) => {
    if (e.target.value === 'Todos') {
      setFormsFilter(forms);
    } else {
      const formsFiltered = forms?.filter(
        (el: any) => el.pregunta_8 === e.target.value
      );
      setFormsFilter(formsFiltered);
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getForms();
      setForms(data);
      setFormsFilter(data);
    })();
  }, []);

  useEffect(() => {
    if (!cookies.get('user')) {
      history.push('/');
    }
  });

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="navBar">
        <div>
          <img src={Logo} alt="logo" className="w-100 mt-3 rounded" />
          <div className="align-self-start mt-1 mb-2">
            <Dropdown autoClose="outside">
              <Dropdown.Toggle variant="light" id="dropdown-autoclose-outside">
                <img src={Rayas} alt="rayas" style={{ width: '50px' }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to={'/crear'}>
                    <button type="button" className="btn btn-success">
                      Crear formulario
                    </button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <ExcelFile
                    element={
                      <button className="btn btn-warning" type="button">
                        Generar excel
                      </button>
                    }
                    filename="Formularios Cidtca"
                  >
                    <ExcelSheet data={formsToExcel} name="Formularios Cidta">
                      {excelDownload.map((el: any) => (
                        <ExcelColumn label={el.label} value={el.value} />
                      ))}
                    </ExcelSheet>
                  </ExcelFile>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <select
                    className="form-select"
                    name="cities"
                    onChange={handleCityChange}
                  >
                    <option hidden>Filtrar...</option>
                    {municipio.map((el: string) => (
                      <option value={el} key={el}>
                        {el}
                      </option>
                    ))}
                  </select>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleClickSession}
                  >
                    Cerrar sesion
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <Cards forms={formsFilter} />
    </div>
  );
}
