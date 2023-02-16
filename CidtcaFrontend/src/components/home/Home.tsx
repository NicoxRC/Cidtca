import { useEffect, useState } from 'react';
import { getForms } from '../../connection/getForms';
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
    pregunta_1: el.pregunta_1,
    pregunta_2: el.pregunta_2,
    pregunta_2_otro: el.pregunta_2_otro,
    pregunta_3: el.pregunta_3?.toString(),
    pregunta_3_puntaje: el.pregunta_3_puntaje,
    pregunta_4: el.pregunta_4,
    pregunta_5_numero: el.pregunta_5_numero,
    pregunta_5_correo: el.pregunta_5_correo,
    pregunta_6: el.pregunta_6,
    pregunta_7: el.pregunta_7,
    pregunta_7_vereda: el.pregunta_7_vereda,
    pregunta_8: el.pregunta_8,
    pregunta_9: el.pregunta_9?.toString(),
    pregunta_9_porcentaje_recibe_planta: el.pregunta_9_porcentaje_recibe_planta,
    pregunta_9_porcentaje_recoge_planta: el.pregunta_9_porcentaje_recoge_planta,
    pregunta_9_porcentaje_via_productor_finca:
      el.pregunta_9_porcentaje_via_productor_finca,
    pregunta_9_otro: el.pregunta_9_otro,
    pregunta_10: el.pregunta_10?.toString(),
    pregunta_10_porcentaje_termo_king: el.pregunta_10_porcentaje_termo_king,
    pregunta_10_porcentaje_carro_particular:
      el.pregunta_10_porcentaje_carro_particular,
    pregunta_10_porcentaje_moto: el.pregunta_10_porcentaje_moto,
    pregunta_10_porcentaje_caballo: el.pregunta_10_porcentaje_caballo,
    pregunta_10_otro: el.pregunta_10_otro,
    pregunta_11: el.pregunta_11?.toString(),
    pregunta_11_otro: el.pregunta_11_otro,
    pregunta_12: el.pregunta_12?.toString(),
    pregunta_12_otro: el.pregunta_12_otro,
    pregunta_13: el.pregunta_13?.toString(),
    pregunta_14: el.pregunta_14,
    pregunta_15: el.pregunta_15,
    pregunta_16: el.pregunta_16,
    pregunta_16_cuantos: el.pregunta_16_cuantos,
    pregunta_17: el.pregunta_17,
    pregunta_17_cuantos: el.pregunta_17_cuantos,
    pregunta_18: el.pregunta_18,
    pregunta_18_cuantos: el.pregunta_18_cuantos,
    pregunta_19: el.pregunta_19,
    pregunta_20: el.pregunta_20,
    pregunta_21: el.pregunta_21?.toString(),
    pregunta_21_porcentaje_pavimentada: el.pregunta_21_porcentaje_pavimentada,
    pregunta_21_porcentaje_placa_huella: el.pregunta_21_porcentaje_placa_huella,
    pregunta_21_porcentaje_via_carreteable:
      el.pregunta_21_porcentaje_via_carreteable,
    pregunta_21_porcentaje_trocha_a_pie: el.pregunta_21_porcentaje_trocha_a_pie,
    pregunta_22: el.pregunta_22?.toString(),
    pregunta_22_porcentaje_pavimentada: el.pregunta_22_porcentaje_pavimentada,
    pregunta_22_porcentaje_placa_huella: el.pregunta_22_porcentaje_placa_huella,
    pregunta_22_porcentaje_via_carreteable:
      el.pregunta_22_porcentaje_via_carreteable,
    pregunta_22_porcentaje_trocha_a_pie: el.pregunta_22_porcentaje_trocha_a_pie,
    pregunta_23: el.pregunta_23,
    pregunta_23_gps: el.pregunta_23_gps,
    pregunta_24: el.pregunta_24,
    pregunta_25: el.pregunta_25,
    pregunta_26: el.pregunta_26?.toString(),
    pregunta_27: el.pregunta_27,
    pregunta_28_diaria: el.pregunta_28_diaria,
    pregunta_28_semanal: el.pregunta_28_semanal,
    pregunta_28_mensual: el.pregunta_28_mensual,
    pregunta_29_yogurt_diaria: el.pregunta_29_yogurt_diaria,
    pregunta_29_yogurt_semanal: el.pregunta_29_yogurt_semanal,
    pregunta_29_yogurt_mensual: el.pregunta_29_yogurt_mensual,
    pregunta_29_kumis_diaria: el.pregunta_29_kumis_diaria,
    pregunta_29_kumis_semanal: el.pregunta_29_kumis_semanal,
    pregunta_29_kumis_mensual: el.pregunta_29_kumis_mensual,
    pregunta_29_cuajada_diaria: el.pregunta_29_cuajada_diaria,
    pregunta_29_cuajada_semanal: el.pregunta_29_cuajada_semanal,
    pregunta_29_cuajada_mensual: el.pregunta_29_cuajada_mensual,
    pregunta_29_queso_doble_crema_diaria:
      el.pregunta_29_queso_doble_crema_diaria,
    pregunta_29_queso_doble_crema_semanal:
      el.pregunta_29_queso_doble_crema_semanal,
    pregunta_29_queso_doble_crema_mensual:
      el.pregunta_29_queso_doble_crema_mensual,
    pregunta_29_queso_campesino_diaria: el.pregunta_29_queso_campesino_diaria,
    pregunta_29_queso_campesino_semanal: el.pregunta_29_queso_campesino_semanal,
    pregunta_29_queso_campesino_mensual: el.pregunta_29_queso_campesino_mensual,
    pregunta_29_leche_diaria: el.pregunta_29_leche_diaria,
    pregunta_29_leche_semanal: el.pregunta_29_leche_semanal,
    pregunta_29_leche_mensual: el.pregunta_29_leche_mensual,
    pregunta_29_quesos_madurados_diaria: el.pregunta_29_quesos_madurados_diaria,
    pregunta_29_quesos_madurados_semanal:
      el.pregunta_29_quesos_madurados_semanal,
    pregunta_29_quesos_madurados_mensual:
      el.pregunta_29_quesos_madurados_mensual,
    pregunta_29_requeson_diaria: el.pregunta_29_requeson_diaria,
    pregunta_29_requeson_semanal: el.pregunta_29_requeson_semanal,
    pregunta_29_requeson_mensual: el.pregunta_29_requeson_mensual,
    pregunta_29_arequipe_diaria: el.pregunta_29_arequipe_diaria,
    pregunta_29_arequipe_semanal: el.pregunta_29_arequipe_semanal,
    pregunta_29_arequipe_mensual: el.pregunta_29_arequipe_mensual,
    pregunta_29_otros: el.pregunta_29_otros,
    pregunta_30: el.pregunta_30,
    pregunta_31: el.pregunta_31,
    pregunta_32: el.pregunta_32,
    pregunta_33: el.pregunta_33,
    pregunta_34: el.pregunta_34,
    pregunta_35: el.pregunta_35,
    pregunta_36: el.pregunta_36,
    pregunta_37: el.pregunta_37,
    pregunta_37_otro: el.pregunta_37_otro,
    pregunta_38: el.pregunta_38?.toString(),
    pregunta_38_otro: el.pregunta_38_otro,
    pregunta_39: el.pregunta_39?.toString(),
    pregunta_39_otro: el.pregunta_39_otro,
    pregunta_40: el.pregunta_40,
    pregunta_40_cuales: el.pregunta_40_cuales,
    pregunta_41: el.pregunta_41,
    pregunta_42: el.pregunta_42,
    pregunta_43: el.pregunta_43,
    pregunta_43_cuales: el.pregunta_43_cuales,
    pregunta_44: el.pregunta_44,
    pregunta_44_como: el.pregunta_44_como,
    pregunta_45: el.pregunta_45,
    pregunta_45_como: el.pregunta_45_como,
    pregunta_46: el.pregunta_46,
    pregunta_47: el.pregunta_47,
    pregunta_48: el.pregunta_48,
    pregunta_48_cual: el.pregunta_48_cual,
    pregunta_49: el.pregunta_49?.toString(),
    pregunta_50: el.pregunta_50,
    pregunta_51: el.pregunta_51,
    pregunta_52: el.pregunta_52,
    pregunta_53: el.pregunta_53,
    pregunta_54: el.pregunta_54,
    pregunta_55: el.pregunta_55,
    pregunta_56: el.pregunta_56,
    pregunta_56_cuales: el.pregunta_56_cuales,
    pregunta_57: el.pregunta_57?.toString(),
    pregunta_57_destino_transformadora_local:
      el.pregunta_57_destino_transformadora_local,
    pregunta_57_destino_transformadora_nacional:
      el.pregunta_57_destino_transformadora_nacional,
    pregunta_57_destino_venta_local: el.pregunta_57_destino_venta_local,
    pregunta_57_destino_venta_nacional: el.pregunta_57_destino_venta_nacional,
    pregunta_57_otros: el.pregunta_57_otros,
    pregunta_58: el.pregunta_58,
    pregunta_59: el.pregunta_59,
    pregunta_60: el.pregunta_60?.toString(),
    pregunta_60_otros: el.pregunta_60_otros,
    pregunta_61: el.pregunta_61,
    pregunta_62: el.pregunta_62,
    pregunta_63: el.pregunta_63,
    pregunta_64_energia: el.pregunta_64_energia,
    pregunta_64_gas: el.pregunta_64_gas,
    pregunta_64_otro: el.pregunta_64_otro,
    pregunta_64_otro_valor: el.pregunta_64_otro_valor,
    pregunta_65: el.pregunta_65,
    pregunta_65_porque: el.pregunta_65_porque,
    pregunta_66_yogurt_presentacion: el.pregunta_66_yogurt_presentacion,
    pregunta_66_yogurt_valor: el.pregunta_66_yogurt_valor,
    pregunta_66_kumis_presentacion: el.pregunta_66_kumis_presentacion,
    pregunta_66_kumis_valor: el.pregunta_66_kumis_valor,
    pregunta_66_cuajada_presentacion: el.pregunta_66_cuajada_presentacion,
    pregunta_66_cuajada_valor: el.pregunta_66_cuajada_valor,
    pregunta_66_queso_doble_crema_presentacion:
      el.pregunta_66_queso_doble_crema_presentacion,
    pregunta_66_queso_doble_crema_valor: el.pregunta_66_queso_doble_crema_valor,
    pregunta_66_queso_campesino_presentacion:
      el.pregunta_66_queso_campesino_presentacion,
    pregunta_66_queso_campesino_valor: el.pregunta_66_queso_campesino_valor,
    pregunta_66_leche_presentacion: el.pregunta_66_leche_presentacion,
    pregunta_66_leche_valor: el.pregunta_66_leche_valor,
    pregunta_66_quesos_madurados_presentacion:
      el.pregunta_66_quesos_madurados_presentacion,
    pregunta_66_quesos_madurados_valor: el.pregunta_66_quesos_madurados_valor,
    pregunta_66_requeson_presentacion: el.pregunta_66_requeson_presentacion,
    pregunta_66_requeson_valor: el.pregunta_66_requeson_valor,
    pregunta_66_arequipe_presentacion: el.pregunta_66_arequipe_presentacion,
    pregunta_66_arequipe_valor: el.pregunta_66_arequipe_valor,
    pregunta_66_otros: el.pregunta_66_otros,
    observaciones: el.observaciones,
    fecha: el.fecha,
    nombre_encuestado: el.nombre_encuestado,
    cedula_encuestado: el.cedula_encuestado,
    firma_encuestado: el.firma_encuestado,
    nombre_encuestador: el.nombre_encuestador,
    cedula_encuestador: el.cedula_encuestador,
    firma_encuestador: el.firma_encuestador,
    foto_encuestado: el.foto_encuestado,
  }));

  const excelDownload = [
    { label: 'pregunta_1', value: 'pregunta_1' },
    { label: 'pregunta_2', value: 'pregunta_2' },
    { label: 'pregunta_2_otro', value: 'pregunta_2_otro' },
    { label: 'pregunta_3', value: 'pregunta_3' },
    { label: 'pregunta_3_puntaje', value: 'pregunta_3_puntaje' },
    { label: 'pregunta_4', value: 'pregunta_4' },
    { label: 'pregunta_5_numero', value: 'pregunta_5_numero' },
    { label: 'pregunta_5_correo', value: 'pregunta_5_correo' },
    { label: 'pregunta_6', value: 'pregunta_6' },
    { label: 'pregunta_7', value: 'pregunta_7' },
    { label: 'pregunta_7_vereda', value: 'pregunta_7_vereda' },
    { label: 'pregunta_8', value: 'pregunta_8' },
    { label: 'pregunta_9', value: 'pregunta_9' },
    {
      label: 'pregunta_9_porcentaje_recibe_planta',
      value: 'pregunta_9_porcentaje_recibe_planta',
    },
    {
      label: 'pregunta_9_porcentaje_recoge_planta',
      value: 'pregunta_9_porcentaje_recoge_planta',
    },
    {
      label: 'pregunta_9_porcentaje_via_productor_finca',
      value: 'pregunta_9_porcentaje_via_productor_finca',
    },
    { label: 'pregunta_9_otro', value: 'pregunta_9_otro' },
    { label: 'pregunta_10', value: 'pregunta_10' },
    {
      label: 'pregunta_10_porcentaje_termo_king:',
      value: 'pregunta_10_porcentaje_termo_king:',
    },
    {
      label: 'pregunta_10_porcentaje_carro_particular',
      value: 'pregunta_10_porcentaje_carro_particular',
    },
    {
      label: 'pregunta_10_porcentaje_moto',
      value: 'pregunta_10_porcentaje_moto',
    },
    {
      label: 'pregunta_10_porcentaje_caballo',
      value: 'pregunta_10_porcentaje_caballo',
    },
    { label: 'pregunta_10_otro', value: 'pregunta_10_otro' },
    { label: 'pregunta_11', value: 'pregunta_11' },
    { label: 'pregunta_11_otro', value: 'pregunta_11_otro' },
    { label: 'pregunta_12', value: 'pregunta_12' },
    { label: 'pregunta_12_otro', value: 'pregunta_12_otro' },
    { label: 'pregunta_13', value: 'pregunta_13' },
    { label: 'pregunta_14', value: 'pregunta_14' },
    { label: 'pregunta_15', value: 'pregunta_15' },
    { label: 'pregunta_16', value: 'pregunta_16' },
    { label: 'pregunta_16_cuantos', value: 'pregunta_16_cuantos' },
    { label: 'pregunta_17', value: 'pregunta_17' },
    { label: 'pregunta_17_cuantos', value: 'pregunta_17_cuantos' },
    { label: 'pregunta_18', value: 'pregunta_18' },
    { label: 'pregunta_18_cuantos', value: 'pregunta_18_cuantos' },
    { label: 'pregunta_19', value: 'pregunta_19' },
    { label: 'pregunta_20', value: 'pregunta_20' },
    { label: 'pregunta_21', value: 'pregunta_21' },
    {
      label: 'pregunta_21_porcentaje_pavimentada',
      value: 'pregunta_21_porcentaje_pavimentada',
    },
    {
      label: 'pregunta_21_porcentaje_placa_huella',
      value: 'pregunta_21_porcentaje_placa_huella',
    },
    {
      label: 'pregunta_21_porcentaje_via_carreteable',
      value: 'pregunta_21_porcentaje_via_carreteable',
    },
    {
      label: 'pregunta_21_porcentaje_trocha_a_pie',
      value: 'pregunta_21_porcentaje_trocha_a_pie',
    },
    { label: 'pregunta_22', value: 'pregunta_22' },
    {
      label: 'pregunta_22_porcentaje_pavimentada',
      value: 'pregunta_22_porcentaje_pavimentada',
    },
    {
      label: 'pregunta_22_porcentaje_placa_huella',
      value: 'pregunta_22_porcentaje_placa_huella',
    },
    {
      label: 'pregunta_22_porcentaje_via_carreteable',
      value: 'pregunta_22_porcentaje_via_carreteable',
    },
    {
      label: 'pregunta_22_porcentaje_trocha_a_pie',
      value: 'pregunta_22_porcentaje_trocha_a_pie',
    },
    { label: 'pregunta_23', value: 'pregunta_23' },
    { label: 'pregunta_23_gps', value: 'pregunta_23_gps' },
    { label: 'pregunta_24', value: 'pregunta_24' },
    { label: 'pregunta_25', value: 'pregunta_25' },
    { label: 'pregunta_26', value: 'pregunta_26' },
    { label: 'pregunta_27', value: 'pregunta_27' },
    { label: 'pregunta_28_diaria', value: 'pregunta_28_diaria' },
    { label: 'pregunta_28_semanal', value: 'pregunta_28_semanal' },
    { label: 'pregunta_28_mensual', value: 'pregunta_28_mensual' },
    { label: 'pregunta_29_yogurt_diaria', value: 'pregunta_29_yogurt_diaria' },
    {
      label: 'pregunta_29_yogurt_semanal',
      value: 'pregunta_29_yogurt_semanal',
    },
    {
      label: 'pregunta_29_yogurt_mensual',
      value: 'pregunta_29_yogurt_mensual',
    },
    { label: 'pregunta_29_kumis_diaria', value: 'pregunta_29_kumis_diaria' },
    { label: 'pregunta_29_kumis_semanal', value: 'pregunta_29_kumis_semanal' },
    { label: 'pregunta_29_kumis_mensual', value: 'pregunta_29_kumis_mensual' },
    {
      label: 'pregunta_29_cuajada_diaria',
      value: 'pregunta_29_cuajada_diaria',
    },
    {
      label: 'pregunta_29_cuajada_semanal',
      value: 'pregunta_29_cuajada_semanal',
    },
    {
      label: 'pregunta_29_cuajada_mensual',
      value: 'pregunta_29_cuajada_mensual',
    },
    {
      label: 'pregunta_29_queso_doble_crema_diaria',
      value: 'pregunta_29_queso_doble_crema_diaria',
    },
    {
      label: 'pregunta_29_queso_doble_crema_semanal',
      value: 'pregunta_29_queso_doble_crema_semanal',
    },
    {
      label: 'pregunta_29_queso_doble_crema_mensual',
      value: 'pregunta_29_queso_doble_crema_mensual',
    },
    {
      label: 'pregunta_29_queso_campesino_diaria',
      value: 'pregunta_29_queso_campesino_diaria',
    },
    {
      label: 'pregunta_29_queso_campesino_semanal',
      value: 'pregunta_29_queso_campesino_semanal',
    },
    {
      label: 'pregunta_29_queso_campesino_mensual',
      value: 'pregunta_29_queso_campesino_mensual',
    },
    { label: 'pregunta_29_leche_diaria', value: 'pregunta_29_leche_diaria' },
    { label: 'pregunta_29_leche_semanal', value: 'pregunta_29_leche_semanal' },
    { label: 'pregunta_29_leche_mensual', value: 'pregunta_29_leche_mensual' },
    {
      label: 'pregunta_29_quesos_madurados_diaria',
      value: 'pregunta_29_quesos_madurados_diaria',
    },
    {
      label: 'pregunta_29_quesos_madurados_semanal',
      value: 'pregunta_29_quesos_madurados_semanal',
    },
    {
      label: 'pregunta_29_quesos_madurados_mensual',
      value: 'pregunta_29_quesos_madurados_mensual',
    },
    {
      label: 'pregunta_29_requeson_diaria',
      value: 'pregunta_29_requeson_diaria',
    },
    {
      label: 'pregunta_29_requeson_semanal',
      value: 'pregunta_29_requeson_semanal',
    },
    {
      label: 'pregunta_29_requeson_mensual',
      value: 'pregunta_29_requeson_mensual',
    },
    {
      label: 'pregunta_29_arequipe_diaria',
      value: 'pregunta_29_arequipe_diaria',
    },
    {
      label: 'pregunta_29_arequipe_semanal',
      value: 'pregunta_29_arequipe_semanal',
    },
    {
      label: 'pregunta_29_arequipe_mensual',
      value: 'pregunta_29_arequipe_mensual',
    },
    { label: 'pregunta_29_otros', value: 'pregunta_29_otros' },
    { label: 'pregunta_30', value: 'pregunta_30' },
    { label: 'pregunta_31', value: 'pregunta_31' },
    { label: 'pregunta_32', value: 'pregunta_32' },
    { label: 'pregunta_33', value: 'pregunta_33' },
    { label: 'pregunta_34', value: 'pregunta_34' },
    { label: 'pregunta_35', value: 'pregunta_35' },
    { label: 'pregunta_36', value: 'pregunta_36' },
    { label: 'pregunta_37', value: 'pregunta_37' },
    { label: 'pregunta_37_otro', value: 'pregunta_37_otro' },
    { label: 'pregunta_38', value: 'pregunta_38' },
    { label: 'pregunta_38_otro', value: 'pregunta_38_otro' },
    { label: 'pregunta_39', value: 'pregunta_39' },
    { label: 'pregunta_39_otro', value: 'pregunta_39_otro' },
    { label: 'pregunta_40', value: 'pregunta_40' },
    { label: 'pregunta_40_cuales', value: 'pregunta_40_cuales' },
    { label: 'pregunta_41', value: 'pregunta_41' },
    { label: 'pregunta_42', value: 'pregunta_42' },
    { label: 'pregunta_43', value: 'pregunta_43' },
    { label: 'pregunta_43_cuales', value: 'pregunta_43_cuales' },
    { label: 'pregunta_44', value: 'pregunta_44' },
    { label: 'pregunta_44_como', value: 'pregunta_44_como' },
    { label: 'pregunta_45', value: 'pregunta_45' },
    { label: 'pregunta_45_como', value: 'pregunta_45_como' },
    { label: 'pregunta_46', value: 'pregunta_46' },
    { label: 'pregunta_47', value: 'pregunta_47' },
    { label: 'pregunta_48', value: 'pregunta_48' },
    { label: 'pregunta_48_cual', value: 'pregunta_48_cual' },
    { label: 'pregunta_49', value: 'pregunta_49' },
    { label: 'pregunta_50', value: 'pregunta_50' },
    { label: 'pregunta_51', value: 'pregunta_51' },
    { label: 'pregunta_52', value: 'pregunta_52' },
    { label: 'pregunta_53', value: 'pregunta_53' },
    { label: 'pregunta_54', value: 'pregunta_54' },
    { label: 'pregunta_55', value: 'pregunta_55' },
    { label: 'pregunta_56', value: 'pregunta_56' },
    { label: 'pregunta_56_cuales', value: 'pregunta_56_cuales' },
    { label: 'pregunta_57', value: 'pregunta_57' },
    {
      label: 'pregunta_57_destino_transformadora_local',
      value: 'pregunta_57_destino_transformadora_local',
    },
    {
      label: 'pregunta_57_destino_transformadora_nacional',
      value: 'pregunta_57_destino_transformadora_nacional',
    },
    {
      label: 'pregunta_57_destino_venta_local',
      value: 'pregunta_57_destino_venta_local',
    },
    {
      label: 'pregunta_57_destino_venta_nacional',
      value: 'pregunta_57_destino_venta_nacional',
    },
    { label: 'pregunta_57_otros', value: 'pregunta_57_otros' },
    { label: 'pregunta_58', value: 'pregunta_58' },
    { label: 'pregunta_59', value: 'pregunta_59' },
    { label: 'pregunta_60', value: 'pregunta_60' },
    { label: 'pregunta_60_otros', value: 'pregunta_60_otros' },
    { label: 'pregunta_61', value: 'pregunta_61' },
    { label: 'pregunta_62', value: 'pregunta_62' },
    { label: 'pregunta_63', value: 'pregunta_63' },
    { label: 'pregunta_64_energia', value: 'pregunta_64_energia' },
    { label: 'pregunta_64_gas', value: 'pregunta_64_gas' },
    { label: 'pregunta_64_otro', value: 'pregunta_64_otro' },
    { label: 'pregunta_64_otro_valor', value: 'pregunta_64_otro_valor' },
    { label: 'pregunta_65', value: 'pregunta_65' },
    { label: 'pregunta_65_porque', value: 'pregunta_65_porque' },
    {
      label: 'pregunta_66_yogurt_presentacion',
      value: 'pregunta_66_yogurt_presentacion',
    },
    { label: 'pregunta_66_yogurt_valor', value: 'pregunta_66_yogurt_valor' },
    {
      label: 'pregunta_66_kumis_presentacion',
      value: 'pregunta_66_kumis_presentacion',
    },
    { label: 'pregunta_66_kumis_valor', value: 'pregunta_66_kumis_valor' },
    {
      label: 'pregunta_66_cuajada_presentacion',
      value: 'pregunta_66_cuajada_presentacion',
    },
    { label: 'pregunta_66_cuajada_valor', value: 'pregunta_66_cuajada_valor' },
    {
      label: 'pregunta_66_queso_doble_crema_presentacion',
      value: 'pregunta_66_queso_doble_crema_presentacion',
    },
    {
      label: 'pregunta_66_queso_doble_crema_valor',
      value: 'pregunta_66_queso_doble_crema_valor',
    },
    {
      label: 'pregunta_66_queso_campesino_presentacion',
      value: 'pregunta_66_queso_campesino_presentacion',
    },
    {
      label: 'pregunta_66_queso_campesino_valor',
      value: 'pregunta_66_queso_campesino_valor',
    },
    {
      label: 'pregunta_66_leche_presentacion',
      value: 'pregunta_66_leche_presentacion',
    },
    { label: 'pregunta_66_leche_valor', value: 'pregunta_66_leche_valor' },
    {
      label: 'pregunta_66_quesos_madurados_presentacion',
      value: 'pregunta_66_quesos_madurados_presentacion',
    },
    {
      label: 'pregunta_66_quesos_madurados_valor',
      value: 'pregunta_66_quesos_madurados_valor',
    },
    {
      label: 'pregunta_66_requeson_presentacion',
      value: 'pregunta_66_requeson_presentacion',
    },
    {
      label: 'pregunta_66_requeson_valor',
      value: 'pregunta_66_requeson_valor',
    },
    {
      label: 'pregunta_66_arequipe_presentacion',
      value: 'pregunta_66_arequipe_presentacion',
    },
    {
      label: 'pregunta_66_arequipe_valor',
      value: 'pregunta_66_arequipe_valor',
    },
    { label: 'pregunta_66_otros', value: 'pregunta_66_otros' },
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
        (el: any) => el.pregunta_7 === e.target.value
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
          <img src={Logo} alt="logo" className="w-100 mt-5 rounded" />
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
