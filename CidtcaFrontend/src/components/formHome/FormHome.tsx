import Popup from 'reactjs-popup';
import SignaturePad from 'react-signature-canvas';
import Logo from '../../images/logo2.jpg';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import { Formik, Form, Field } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postForm } from '../../services/postForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactjs-popup/dist/index.css';
import './FormHome.css';

export default function FormHome() {
  const [firmaEncuestado, setFirmaEncuestado] = useState('');
  const [firmaEncuestador, setFirmaEncuestador] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const history = useHistory();
  const cookies = new Cookies();

  const municipio: string[] = [
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

  const handleSubmit = async (values: any) => {
    const res = await postForm(values);
    if (res) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'La encuesta se creo',
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/home');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puedo crear la encuesta',
      });
    }
  };

  function handleChange(changeEvent: any) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent: any) {
      setImageSrc(onLoadEvent.target.result);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  const encuestado: any = useRef({});
  const LimpiarEncuestado = () => encuestado.current.clear();
  const guardarEncuestado = () => {
    setFirmaEncuestado(
      encuestado.current.getTrimmedCanvas().toDataURL('image/png')
    );
  };

  const encuestador: any = useRef({});
  const limpiarEncuestador = () => encuestador.current.clear();
  const guardarEncuestador = () => {
    setFirmaEncuestador(
      encuestador.current.getTrimmedCanvas().toDataURL('image/png')
    );
  };

  const handleClickBack = () => {
    history.push('/home');
  };

  useEffect(() => {
    if (!cookies.get('user')) {
      history.push('/');
    }
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="button_back">
        <button onClick={handleClickBack} className="btn btn-outline-dark p-3">
          Volver
        </button>
      </div>
      <Formik
        initialValues={{
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
        }}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="w-50">
            <img src={Logo} alt="logo" className="mt-5 mb-5 w-100 rounded" />
            <div className="container_form">
              <h1>
                CRITERIO 1 NIVEL DE FORMALIDAD DE LA ORGANIZACIÓN O EMPRESA
              </h1>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b> 1. Nombre de organizacion:</b>
              </label>
              <Field
                type="text"
                name="pregunta_1"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b> 2. Tipo de personeria:</b>
              </label>
              <Field
                component="select"
                id="pregunta_2"
                name="pregunta_2"
                className="form-select form-select-lg mb-3"
              >
                <option hidden>Respuesta...</option>
                <option value="Juridica">Juridica</option>
                <option value="Natural">Natural</option>
              </Field>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>3. Tipo de organizacion:</b>
              </label>
              <Field
                component="select"
                id="pregunta_3"
                name="pregunta_3"
                className="form-select form-select-lg mb-3"
              >
                <option hidden>Respuesta...</option>
                <option value="Cooperativa">Cooperativa</option>
                <option value="Asociacion">Asociacion</option>
                <option value="SAS">SAS</option>
              </Field>
              <label className="form-label">Otro:</label>
              <Field
                type="text"
                name="pregunta_3_otro"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>4. Su organización cuenta con:</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_4"
                  value="rut"
                  className="form-check-input"
                />{' '}
                <b>RUT</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_4"
                  value="camara de comercio"
                  className="form-check-input"
                />{' '}
                <b>Camara de comercio</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_4"
                  value="ninguno"
                  className="form-check-input"
                />{' '}
                <b>Ninguno</b>
              </label>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>5. Representante legal o propietario:</b>
              </label>
              <Field
                type="text"
                name="pregunta_5"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>6. Información de Contacto:</b>
              </label>
              <label>
                <b>Contacto 1:</b>
              </label>
              <div className="d-flex mt-2 mb-2">
                <label>Nombre:</label>
                <Field
                  type="text"
                  name="pregunta_6_contacto"
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-25 ms-2 me-2"
                />
                <label>Numero:</label>
                <Field
                  type="number"
                  name="pregunta_6_numero"
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-25 ms-2 me-2"
                />
                <label>Correo:</label>
                <Field
                  type="text"
                  name="pregunta_6_correo"
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-25 ms-2 me-2"
                />
              </div>
              <label>
                <b>Contacto 2:</b>
              </label>
              <div className="d-flex mt-2 mb-2">
                <label>Nombre:</label>
                <Field
                  type="text"
                  name="pregunta_6_contacto_2"
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-25 ms-2 me-2"
                />
                <label>Numero:</label>
                <Field
                  type="number"
                  name="pregunta_6_numero_2"
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-25 ms-2 me-2"
                />
                <label>Correo:</label>
                <Field
                  type="text"
                  name="pregunta_6_correo_2"
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-25 ms-2 me-2"
                />
              </div>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>7. Actividad principal:</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_7"
                  value="transformacion"
                  className="form-check-input"
                />{' '}
                <b>Transformacion</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_7"
                  value="acopio y venta de leche"
                  className="form-check-input"
                />{' '}
                <b>Acopio y venta de leche</b>
              </label>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>8. Municipio:</b>
              </label>
              <Field
                component="select"
                id="pregunta_8"
                name="pregunta_8"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                {municipio.map((el: string) => (
                  <option value={el}>{el}</option>
                ))}
              </Field>
              <label>
                <b>Direccion:</b>
              </label>
              <Field
                type="text"
                name="pregunta_8_direccion"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>9. ¿realiza el aporte al fondo nacional del ganado?</b>
              </label>
              <Field
                component="select"
                name="pregunta_9"
                id="pregunta_9"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="container_form">
              <h1>
                CRITERIO 2 CARACTERISTICAS DE ACOPIO Y TRANSPORTE DE LECHE
              </h1>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>10. ¿Qué métodos de acopio de leche utiliza?</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_10"
                  value="Se reibe en planta/centro de acopio"
                  className="form-check-input"
                />{' '}
                <b>Se recibe en planta/centro de acopio</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_10"
                  value="La recoge en el centro de acopio"
                  className="form-check-input"
                />{' '}
                <b>La recoge en el centro de acopio</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_10"
                  value="Recibe al productor en finca"
                  className="form-check-input"
                />{' '}
                <b>Recibe al productor en finca</b>
              </label>
              <label className="form-label">Otro:</label>
              <Field
                type="text"
                name="pregunta_10_otro"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  11. ¿De qué manera se transporta la leche hasta la
                  planta/centro de acopio?
                </b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_11"
                  value="Termo King"
                  className="form-check-input"
                />{' '}
                <b>Termo King</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_11"
                  value="Carro Particular"
                  className="form-check-input"
                />{' '}
                <b>Carro Particular</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_11"
                  value="Moto"
                  className="form-check-input"
                />{' '}
                <b>Moto</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_11"
                  value="Caballo"
                  className="form-check-input"
                />{' '}
                <b>Caballo</b>
              </label>
              <label className="form-label">Otro:</label>
              <Field
                type="text"
                name="pregunta_11_otro"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  12. ¿De qué manera Transporta la leche desde plataforma a
                  areas de proceso?
                </b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_12"
                  value="cantinas de aluminio"
                  className="form-check-input"
                />{' '}
                <b>Cantinas de aluminio</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_12"
                  value="tanques plasticos"
                  className="form-check-input"
                />{' '}
                <b>Tanques plasticos</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_12"
                  value="motobomba"
                  className="form-check-input"
                />{' '}
                <b>Motobomba</b>
              </label>
              <label className="form-label">Otro:</label>
              <Field
                type="text"
                name="pregunta_12_otro"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>13. ¿De qué manera realiza el almacenamiento de la leche?</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_13"
                  value="pasa directo a proceso"
                  className="form-check-input"
                />{' '}
                <b>Pasa directo a proceso</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_13"
                  value="tanque temporal"
                  className="form-check-input"
                />{' '}
                <b>Tanque temporal</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_13"
                  value="tanque frio"
                  className="form-check-input"
                />{' '}
                <b>Tanque frio</b>
              </label>
              <label className="form-label">Otro:</label>
              <Field
                type="text"
                name="pregunta_13_otro"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <h1 className="mt-3">CONOCIMIENTO DE SUS PROVEEDORES</h1>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  14. ¿Cuantos proveedores suministran leche al centro y/o
                  planta de proceso?
                </b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_14"
                  value="Asociados"
                  className="form-check-input"
                />{' '}
                <b>Asociados</b>
              </label>
              <Field
                type="number"
                name="pregunta_14_asociados_cuantos"
                placeholder="Cuantos..."
                className="form-control form-control-sm w-25"
              />
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_14"
                  value="Externos"
                  className="form-check-input"
                />{' '}
                <b>Externos</b>
              </label>
              <Field
                type="number"
                name="pregunta_14_externos_cuantos"
                placeholder="Cuantos..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  15. ¿Sus proveedores cuentan con certificado de Buenas
                  Prácticas Ganaderas BPG?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_15"
                id="pregunta_15"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
                <option value="No sabe">No sabe</option>
              </Field>
              <label>Cuantos</label>
              <Field
                type="number"
                name="pregunta_15_cuantos"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  16. ¿Si su proveedor es un centro de acopio, cuentan con
                  certificado de Buenas Prácticas de Manufactura BPM?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_16"
                id="pregunta_16"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
                <option value="No sabe">No sabe</option>
              </Field>
              <label>Cuantos</label>
              <Field
                type="number"
                name="pregunta_16_cuantos"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  17. de los siguientes certificados con cuales cuentan sus
                  proveedores
                </b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_17"
                  value="Buenas practicas de Ordeño"
                  className="form-check-input"
                />{' '}
                <b>Buenas practicas de Ordeño</b>
              </label>
              <Field
                type="number"
                name="pregunta_17_practicas_ordeno_cuantos"
                placeholder="Cuantos..."
                className="form-control form-control-sm w-25"
              />
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_17"
                  value="Buenas Prácticas Ganaderas"
                  className="form-check-input"
                />{' '}
                <b>Buenas Practicas Ganaderas</b>
              </label>
              <Field
                type="number"
                name="pregunta_17_practicas_ganaderas_cuantos"
                placeholder="Cuantos..."
                className="form-control form-control-sm w-25"
              />
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_17"
                  value="Registro único de Vacunación"
                  className="form-check-input"
                />{' '}
                <b>Registro unico de Vacunación</b>
              </label>
              <Field
                type="number"
                name="pregunta_17_vacunacion_cuantos"
                placeholder="Cuantos..."
                className="form-control form-control-sm w-25"
              />
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_17"
                  value="Certificado de Hato libre de brucela y tuberculosis"
                  className="form-check-input"
                />{' '}
                <b>Certificado de Hato libre de brucela y tuberculosis</b>
              </label>
              <Field
                type="number"
                name="pregunta_17_brucela_tuberculosis_cuantos"
                placeholder="Cuantos..."
                className="form-control form-control-sm w-25"
              />
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_17"
                  value="Ninguno"
                  className="form-check-input"
                />{' '}
                <b>Ninguno</b>
              </label>
              <label className="form-label">Otro:</label>
              <Field
                type="text"
                name="pregunta_17_otro"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
              <Field
                type="number"
                name="pregunta_17_otro_cuantos"
                placeholder="Cuantos..."
                className="form-control form-control-sm w-25 mt-2"
              />
            </div>
            <div className="container_form">
              <h1>
                CRITERIO 3 UBICACIÓN Y ACCESIBILIDAD A LA PLANTA DE
                PROCESAMIENTO y/o CENTRO DE ACOPIO
              </h1>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  18. En lo que respecta a vías, que tipo de acceso predomina
                  para el transporte de leche a la planta
                </b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_18"
                  value="Pavimentada"
                  className="form-check-input"
                />{' '}
                <b>Pavimentada</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_18"
                  value="Placa huella"
                  className="form-check-input"
                />{' '}
                <b>Placa huella</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_18"
                  value="Via carreteable"
                  className="form-check-input"
                />{' '}
                <b>Via carreteable (destapada)</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_18"
                  value="Trocha - a pie"
                  className="form-check-input"
                />{' '}
                <b>Trocha - a pie</b>
              </label>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  19. En lo que respecta a vías, que tipo de acceso predomina
                  para comercializar sus productos
                </b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_19"
                  value="Pavimentada"
                  className="form-check-input"
                />{' '}
                <b>Pavimentada</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_19"
                  value="Placa huella"
                  className="form-check-input"
                />{' '}
                <b>Placa huella</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_19"
                  value="Via carreteable"
                  className="form-check-input"
                />{' '}
                <b>Via carreteable (destapada)</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_19"
                  value="Trocha - a pie"
                  className="form-check-input"
                />{' '}
                <b>Trocha - a pie</b>
              </label>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  20. ¿Cuál es la temperatura ambiente aprox. donde se ubica la
                  planta?
                </b>
              </label>
              <Field
                type="number"
                name="pregunta_20"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>21. Georreferenciación</b>
              </label>
              <label className="form-label">
                <b>Coordenada N</b>
              </label>
              <div className="d-flex">
                <div>
                  <label className="form-label">
                    <b>Grados</b>
                  </label>
                  <Field
                    type="number"
                    name="pregunta_21_n_grados"
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75 me-3"
                  />
                </div>
                <div>
                  <label className="form-label">
                    <b>Minutos</b>
                  </label>
                  <Field
                    type="number"
                    name="pregunta_21_n_minutos"
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75 me-3"
                  />
                </div>
                <div>
                  <label className="form-label">
                    <b>Segundos</b>
                  </label>
                  <Field
                    type="number"
                    name="pregunta_21_n_segundos"
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75 me-3"
                  />
                </div>
              </div>
              <label className="form-label mt-2">
                <b>Coordenada W</b>
              </label>
              <div className="d-flex">
                <div>
                  <label className="form-label">
                    <b>Grados</b>
                  </label>
                  <Field
                    type="number"
                    name="pregunta_21_w_grados"
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75 me-3"
                  />
                </div>
                <div>
                  <label className="form-label">
                    <b>Minutos</b>
                  </label>
                  <Field
                    type="number"
                    name="pregunta_21_w_minutos"
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75 me-3"
                  />
                </div>
                <div>
                  <label className="form-label">
                    <b>Segundos</b>
                  </label>
                  <Field
                    type="number"
                    name="pregunta_21_w_segundos"
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75 me-3"
                  />
                </div>
              </div>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  22. ¿Cuál es la altura sobre el nivel del mar en la que se
                  ubica la planta?
                </b>
              </label>
              <Field
                type="number"
                name="pregunta_22"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="container_form">
              <h1>CRITERIO 4 VOLÚMENES DE ACOPIO Y/O TRANSFORMACIÓN</h1>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  23. De el siguiente listado seleccione los productos que
                  elabora
                </b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="leche_pasteurizada"
                  className="form-check-input"
                />{' '}
                <b>Leche pasteurizada</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="leche_UHT"
                  className="form-check-input"
                />{' '}
                <b>Leche UHT</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="postres"
                  className="form-check-input"
                />{' '}
                <b>Postres</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="helados"
                  className="form-check-input"
                />{' '}
                <b>Helados</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="crema_de_leche"
                  className="form-check-input"
                />{' '}
                <b>Crema de leche</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="leche"
                  className="form-check-input"
                />{' '}
                <b>Leche</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="cuajada"
                  className="form-check-input"
                />{' '}
                <b>Cuajada</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="yogurt"
                  className="form-check-input"
                />{' '}
                <b>Yogurt</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="queso_doble_crema"
                  className="form-check-input"
                />{' '}
                <b>Queso doble crema</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="quesos_madurados"
                  className="form-check-input"
                />{' '}
                <b>Quesos madurados</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="kumis"
                  className="form-check-input"
                />{' '}
                <b>Kumis</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="requeson"
                  className="form-check-input"
                />{' '}
                <b>Requeson</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="queso_mozzarella"
                  className="form-check-input"
                />{' '}
                <b>Queso mozzarella</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="queso_campesino"
                  className="form-check-input"
                />{' '}
                <b>Queso campesino</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_23"
                  value="arequipe"
                  className="form-check-input"
                />{' '}
                <b>Arequipe</b>
              </label>
              <label className="form-label">Otro</label>
              <Field
                type="text"
                name="pregunta_23_otro"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            {values.pregunta_23.length ? (
              <div className="container_form">
                <label className="form-label">
                  <b>
                    24. ¿Qué cantidad, (ya sea litros Lt si es liquido o Kilos
                    Kg si es peso) puede producir?
                  </b>
                </label>
                {values.pregunta_23.map((el: string) => (
                  <div className="d-flex flex-column">
                    <label className="form-label mt-3">
                      <b>{el}:</b>
                    </label>
                    <div className="d-flex ms-4">
                      <div>
                        <label className="form-label">
                          <b>Diario</b>
                        </label>
                        <Field
                          type="number"
                          name={`pregunta_24_${el}_diaria`}
                          placeholder="Respuesta..."
                          className="form-control form-control-sm w-75 me-3"
                        />
                      </div>
                      <div>
                        <label className="form-label">
                          <b>Semanal</b>
                        </label>
                        <Field
                          type="number"
                          name={`pregunta_24_${el}_semanal`}
                          placeholder="Respuesta..."
                          className="form-control form-control-sm w-75 me-3"
                        />
                      </div>
                      <div>
                        <label className="form-label">
                          <b>Mensual</b>
                        </label>
                        <Field
                          type="number"
                          name={`pregunta_24_${el}_mensual`}
                          placeholder="Respuesta..."
                          className="form-control form-control-sm w-75 me-3"
                        />
                      </div>
                    </div>
                    <div className="d-flex mt-2 ms-4">
                      <div>
                        <label className="form-label">
                          <b>Rendimiento</b>
                        </label>
                        <Field
                          type="number"
                          name={`pregunta_24_${el}_rendimiento`}
                          placeholder="Respuesta..."
                          className="form-control form-control-sm w-75 me-3"
                        />
                      </div>
                      <div>
                        <label className="form-label">
                          <b>Vida util</b>
                        </label>
                        <Field
                          type="number"
                          name={`pregunta_24_${el}_vida_util`}
                          placeholder="Respuesta..."
                          className="form-control form-control-sm w-75 me-3"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            <div className="container_form">
              <label className="form-label">
                <b>25.¿cómo se determina la vida útil?</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_25"
                  value="Analisis en laboratorio externo"
                  className="form-check-input"
                />{' '}
                <b>analisis en laboratorio externo</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_25"
                  value="laboratorio interno de planta"
                  className="form-check-input"
                />{' '}
                <b>laboratorio interno de planta</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_25"
                  value="seguimiento al producto"
                  className="form-check-input"
                />{' '}
                <b>seguimiento al producto</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_25"
                  value="por resolucion"
                  className="form-check-input"
                />{' '}
                <b>por resolucion</b>
              </label>
              <label className="form-label">Otro</label>
              <Field
                type="text"
                name="pregunta_25_otro"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <h1>
                CRITERIO 5 NUMERO DE EMPLEADOS O PERSONAS QUE DERIVAN SU
                SUSTENTO DE LA EMPRESA
              </h1>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  26. ¿Cuantos años de experiencia tiene en el sector lácteo?
                </b>
              </label>
              <Field
                type="number"
                name="pregunta_26"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  27. ¿Cuál es el número de personal fijo que trabaja en la
                  planta y/o centro acopio?
                </b>
              </label>
              <Field
                type="number"
                name="pregunta_27"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  28. ¿Cuál es el número de personal OCASIONAL que trabaja en la
                  planta y/o centro acopio?
                </b>
              </label>
              <Field
                type="number"
                name="pregunta_28"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  29. ¿Cuantas familias se ven favorecidas por la planta de
                  procesamiento o centro de acopio, la venta y la elaboración de
                  productos derivados de leche?
                </b>
              </label>
              <Field
                type="number"
                name="pregunta_29"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  30. ¿Pertenece a algún grupo, asociación, organismo o queseros
                  reconocido de segundo nivel?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_30"
                id="pregunta_30"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  31. Si su respuesta anterior es afirmativa, responda las
                  siguientes preguntas, ¿ Conoce cuantas organizaiones ademas de
                  la suya pertenecen al grupo, asociación u organismo de segundo
                  nivel?
                </b>
              </label>
              <Field
                type="text"
                name="pregunta_31"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>32. Cual es el nombre del grupo, asociación o organismo</b>
              </label>
              <Field
                type="text"
                name="pregunta_32"
                placeholder="Respuesta"
                className="form-control"
              />
            </div>
            <div className="container_form">
              <h1>
                CRITERIO 6 CAPACIDAD DE INFRAESTRUCTURA FISICA Y EQUIPOS
                INSTALADA EN LA PLANTA DE TRANSFORMACION
              </h1>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  33. ¿Qué tipo de tenencia tiene sobre el predio donde
                  desarrolla la actividad económica?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_33"
                id="pregunta_33"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Propio">Propio</option>
                <option value="Arrendado">Arrendado</option>
              </Field>
              <label className="form-label">Otro:</label>
              <Field
                type="text"
                name="pregunta_33_otro"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  34. seleccione las zonas de la planta de producción con las
                  que cuenta
                </b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de despacho"
                  className="form-check-input"
                />{' '}
                <b>Zona de despacho</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de almacenamiento temporal de residuos solidos"
                  className="form-check-input"
                />{' '}
                <b>Zona de almacenamiento temporal de residuos solidos</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de tratamiento de residuos liquidos"
                  className="form-check-input"
                />{' '}
                <b>Zona de tratamiento de residuos liquidos</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de recepcion de materia prima"
                  className="form-check-input"
                />{' '}
                <b>Zona de recepcion de materia prima</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de procesamiento"
                  className="form-check-input"
                />{' '}
                <b>Zona de procesamiento</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de pesaje y empaque"
                  className="form-check-input"
                />{' '}
                <b>Zona de pesaje y empaque</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de descanso y cafetería"
                  className="form-check-input"
                />{' '}
                <b>Zona de descanso y cafetería</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de muestreo y pruebas de laboratorio"
                  className="form-check-input"
                />{' '}
                <b>Zona de muestreo y pruebas de laboratorio</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de bodega e insumos"
                  className="form-check-input"
                />{' '}
                <b>Zona de bodega e insumos</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de cuartos frios"
                  className="form-check-input"
                />{' '}
                <b>Zona de cuartos frios</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="punto de venta"
                  className="form-check-input"
                />{' '}
                <b>Punto de venta</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de pasteurización"
                  className="form-check-input"
                />{' '}
                <b>Zona de pasteurización</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de herramientas"
                  className="form-check-input"
                />{' '}
                <b>Zona de herramientas</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="oficinas administrativas"
                  className="form-check-input"
                />{' '}
                <b>Oficinas administrativas</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="zona de tratamiento de residuos"
                  className="form-check-input"
                />{' '}
                <b>Zona de tratamiento de residuos</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_34"
                  value="baños y vestier"
                  className="form-check-input"
                />{' '}
                <b>Baños y vestier</b>
              </label>
              <label className="form-label">Otro:</label>
              <Field
                type="text"
                name="pregunta_34_otro"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  35. Seleccione la maquinaria, equipos y utensilios con los que
                  cuenta
                </b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="cuartos frios"
                  className="form-check-input"
                />{' '}
                <b>Cuartos frios</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="neveras"
                  className="form-check-input"
                />{' '}
                <b>Neveras</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="ecomilk lactoscan"
                  className="form-check-input"
                />{' '}
                <b>Ekomilk Lactoscan</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="balanzas"
                  className="form-check-input"
                />{' '}
                <b>Balanzas</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="fechadora"
                  className="form-check-input"
                />{' '}
                <b>Fechadora</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="empacadora de liquidos"
                  className="form-check-input"
                />{' '}
                <b>Empacadora de liquidos</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="selladora"
                  className="form-check-input"
                />{' '}
                <b>Selladora</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="marmita"
                  className="form-check-input"
                />{' '}
                <b>Marmita</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="hiladora"
                  className="form-check-input"
                />{' '}
                <b>Hiladora</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="generador electrico"
                  className="form-check-input"
                />{' '}
                <b>Generador electrico</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="descremadora"
                  className="form-check-input"
                />{' '}
                <b>Descremadora</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="mesas en acero inoxidable para queso"
                  className="form-check-input"
                />{' '}
                <b>Mesas en acero inoxidable para queso</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="prensas"
                  className="form-check-input"
                />{' '}
                <b>Prensas</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="mantequeras"
                  className="form-check-input"
                />{' '}
                <b>Mantequeras</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="mesa de escurrido"
                  className="form-check-input"
                />{' '}
                <b>Mesa de escurrido</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="tanque de enfriamiento"
                  className="form-check-input"
                />{' '}
                <b>Tanque de enfriamiento</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="empacadora al vacio"
                  className="form-check-input"
                />{' '}
                <b>Empacadora al vacio</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="tina de coagulación"
                  className="form-check-input"
                />{' '}
                <b>Tina de coagulación</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="caldera"
                  className="form-check-input"
                />{' '}
                <b>Caldera</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="Estantes de transporte o almacenamiento"
                  className="form-check-input"
                />{' '}
                <b>Estantes de transporte o almacenamiento</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="motobomba"
                  className="form-check-input"
                />{' '}
                <b>Motobomba</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="tanque de almacenamiento"
                  className="form-check-input"
                />{' '}
                <b>Tanque de almacenamiento</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_35"
                  value="ninguna"
                  className="form-check-input"
                />{' '}
                <b>Ninguna</b>
              </label>
              <label className="form-label">Otro:</label>
              <Field
                type="text"
                name="pregunta_35_otro"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <h1>
                CRITERIO 7 CONDICIONES ACTUALES DE APLICACIÓN DE CALIDAD EN LA
                TRANSFORMACION
              </h1>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>36. Actualmente ¿Tiene registros sanitarios INVIMA?</b>
              </label>
              <Field
                component="select"
                name="pregunta_36"
                id="pregunta_36"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">
                <b>Cuales:</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Programa Calidad de agua"
                  className="form-check-input"
                />{' '}
                <b>Programa Calidad de agua</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Programa Residuos Solidos"
                  className="form-check-input"
                />{' '}
                <b>Programa Residuos Solidos</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Programa Residuos Líquidos"
                  className="form-check-input"
                />{' '}
                <b>Programa Residuos Líquidos</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Programa Control de Plagas"
                  className="form-check-input"
                />{' '}
                <b>Programa Control de Plagas</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Programa Limpieza y desinfección"
                  className="form-check-input"
                />{' '}
                <b>Programa Limpieza y desinfección</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Programa Trazabilidad"
                  className="form-check-input"
                />{' '}
                <b>Programa Trazabilidad</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Programa Proveedores"
                  className="form-check-input"
                />{' '}
                <b>Programa Proveedores</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Programa Quejas"
                  className="form-check-input"
                />{' '}
                <b>Programa Quejas</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Programa Mantenimiento"
                  className="form-check-input"
                />{' '}
                <b>Programa Mantenimiento</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Programa Calibración"
                  className="form-check-input"
                />{' '}
                <b>Programa Calibración</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Plan de muestreo"
                  className="form-check-input"
                />{' '}
                <b>Plan de muestreo</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Programa Higiene del personal"
                  className="form-check-input"
                />{' '}
                <b>Programa Higiene del personal</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Control documental"
                  className="form-check-input"
                />{' '}
                <b>Control documental</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Manuales de laboratorio"
                  className="form-check-input"
                />{' '}
                <b>Manuales de laboratorio</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Recogida de producto"
                  className="form-check-input"
                />{' '}
                <b>Recogida de producto</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_36_cuales"
                  value="Alergenos"
                  className="form-check-input"
                />{' '}
                <b>Alergenos</b>
              </label>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>37. ¿cuenta con Concepto sanitario?</b>
              </label>
              <Field
                component="select"
                name="pregunta_37"
                id="pregunta_37"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">
                <b>Calificacion</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37_calificacion"
                  value="calificación favorable"
                  className="form-check-input"
                />{' '}
                <b>calificación favorable</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37_calificacion"
                  value="calificación favorable con condiciones"
                  className="form-check-input"
                />{' '}
                <b>calificación favorable con condiciones</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37_calificacion"
                  value="calificación desfavorable"
                  className="form-check-input"
                />{' '}
                <b>calificación desfavorable</b>
              </label>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  38. ¿Cuentan con documentos y registros de Buenas Prácticas de
                  Manufactura (BPM)?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_38"
                id="pregunta_38"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  39. ¿Dispone de agua potable para la transformación del
                  producto?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_39"
                id="pregunta_39"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>40. ¿Realiza pruebas de plataforma?</b>
              </label>
              <Field
                component="select"
                name="pregunta_40"
                id="pregunta_40"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">
                <b>Cuales:</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_40_cuales"
                  value="Prueba de alcohol"
                  className="form-check-input"
                />{' '}
                <b>Prueba de alcohol</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_40_cuales"
                  value="Ausencia de conservantes, adulterantes y neutralizantes por muestreo selectivo"
                  className="form-check-input"
                />{' '}
                <b>
                  Ausencia de conservantes, adulterantes y neutralizantes por
                  muestreo selectivo
                </b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_40_cuales"
                  value="Prueba de densidad"
                  className="form-check-input"
                />{' '}
                <b>Prueba de densidad</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_40_cuales"
                  value="Prueba de lactometría o crioscopia"
                  className="form-check-input"
                />{' '}
                <b>Prueba de lactometría o crioscopia</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_40_cuales"
                  value="Prueba de acidez"
                  className="form-check-input"
                />{' '}
                <b>Prueba de acidez</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_40_cuales"
                  value="Ausencia de antibióticos"
                  className="form-check-input"
                />{' '}
                <b>Ausencia de antibióticos</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_40_cuales"
                  value="Recuento microbiano"
                  className="form-check-input"
                />{' '}
                <b>Recuento microbiano</b>
              </label>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  41. ¿Tiene criterios de aceptación o rechazo para la materia
                  prima?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_41"
                id="pregunta_41"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">Cuales:</label>
              <Field
                type="text"
                name="pregunta_41_cuales"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  42. ¿Registra la información obtenida de las pruebas
                  seleccionadas en la pregunta anterior?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_42"
                id="pregunta_42"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">Como:</label>
              <Field
                type="text"
                name="pregunta_42_como"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  43. Realiza pruebas para la liberación del producto terminado?
                </b>
              </label>
              <label className="form-label mt-2">
                <b>Microbiologicas:</b>
              </label>
              <Field
                component="select"
                name="pregunta_43_microbiologicas"
                id="pregunta_43_microbiologicas"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <Field
                type="text"
                name="pregunta_43_microbiologicas_cuales"
                placeholder="Cuales..."
                className="form-control form-control-sm w-25"
              />
              <label className="form-label mt-2">
                <b>Fisicoquímica:</b>
              </label>
              <Field
                component="select"
                name="pregunta_43_fisicoquimica"
                id="pregunta_43_fisicoquimica"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <Field
                type="text"
                name="pregunta_43_fisicoquimica_cuales"
                placeholder="Cuales..."
                className="form-control form-control-sm w-25"
              />
              <label className="form-label mt-2">
                <b>Organolépticas:</b>
              </label>
              <Field
                component="select"
                name="pregunta_43_organolepticas"
                id="pregunta_43_organolepticas"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <Field
                type="text"
                name="pregunta_43_organolepticas_cuales"
                placeholder="Cuales..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>44. ¿Realiza análisis de la información obtenida?</b>
              </label>
              <Field
                component="select"
                name="pregunta_44"
                id="pregunta_44"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">Como:</label>
              <Field
                type="text"
                name="pregunta_44_como"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  45. De la siguiente indumentaria, seleccione cuales utiliza
                  para la elaboración de los productos
                </b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_45"
                  value="overol"
                  className="form-check-input"
                />{' '}
                <b>Overol</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_45"
                  value="botas"
                  className="form-check-input"
                />{' '}
                <b>Botas</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_45"
                  value="cofia"
                  className="form-check-input"
                />{' '}
                <b>Cofia</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_45"
                  value="guantes"
                  className="form-check-input"
                />{' '}
                <b>Guantes</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_45"
                  value="gafas"
                  className="form-check-input"
                />{' '}
                <b>Gafas</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_45"
                  value="tapabocas"
                  className="form-check-input"
                />{' '}
                <b>Tapabocas</b>
              </label>
              <label className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_45"
                  value="peto"
                  className="form-check-input"
                />{' '}
                <b>Peto</b>
              </label>
              <label className="form-label">Otro</label>
              <Field
                type="text"
                name="pregunta_45_otro"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  46. ¿Usa detergente o desinfectantes autorizados e implementa
                  rotación?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_46"
                id="pregunta_46"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">Cuales</label>
              <Field
                type="text"
                name="pregunta_46_cuales"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  47. ¿Aplica algun manejo o tratamiento de residuos sólidos y
                  líquidos?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_47"
                id="pregunta_47"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">Cual</label>
              <Field
                type="text"
                name="pregunta_47_cual"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  48. ¿realiza análisis de materia prima en laboratorio externos
                  de leche?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_48"
                id="pregunta_48"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">Cuales:</label>
              <Field
                type="text"
                name="pregunta_48_cuales"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  49. ¿realiza análisis de materia prima en laboratorio externos
                  para producto terminado?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_49"
                id="pregunta_49"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">Cual laboratorio:</label>
              <Field
                type="text"
                name="pregunta_49_cual"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  50. ¿Realiza análisis de calidad de agua en laboratorio
                  externo?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_50"
                id="pregunta_50"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">Cual laboratorio:</label>
              <Field
                type="text"
                name="pregunta_50_cual"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  51. ¿Contrata el control de plagas con una empresa externa?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_51"
                id="pregunta_51"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">Cual laboratorio:</label>
              <Field
                type="text"
                name="pregunta_51_cual"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <h1>
                CRITERIO 8 INTERÉS Y DISPOSICIÓN DE PARTICIPAR EN EL PROYECTO
              </h1>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  52. ¿Ha recibido o participado en algún proyecto para el
                  fortalecimiento o el mejoramiento del proceso productivo de su
                  organización?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_52"
                id="pregunta_52"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">Cual</label>
              <Field
                type="text"
                name="pregunta_52_cual"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
              <label className="form-label mt-2">Entidad financiadora</label>
              <Field
                type="text"
                name="pregunta_52_entidad"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  53. ¿Desearía participar activamente en el proyecto de
                  investigacion "DESARROLLO DE UN CULTIVO BIOPROTECTOR PARA EL
                  MEJORAMIENTO DE LA INOCUIDAD DE LA PRODUCCIÓN QUESERA
                  ARTESANAL DEL DEPARTAMENTO DE NARIÑO"?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_53"
                id="pregunta_53"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="container_form">
              <h1>CRITERIO 9 CONDICIONES ECONÓMICAS Y DE MERCADEO</h1>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>54. ¿Actualmente sus productos tienen un diseño de marca?</b>
              </label>
              <Field
                component="select"
                name="pregunta_54"
                id="pregunta_54"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  55. Cual es el nombre de la marca que maneja para sus
                  productos
                </b>
              </label>
              <Field
                type="text"
                name="pregunta_55"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  56. ¿Realiza maquila o si estaría interesado en realizar
                  procesos de maquila?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_56"
                id="pregunta_56"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>57. ¿Utiliza algún medio de promoción para sus productos?</b>
              </label>
              <Field
                component="select"
                name="pregunta_57"
                id="pregunta_57"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label mt-2">Cuales</label>
              <Field
                type="text"
                name="pregunta_57_cuales"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  58. ¿Considera que tiene algún tipo de competencia directa?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_58"
                id="pregunta_58"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">Cuales:</label>
              <Field
                type="text"
                name="pregunta_58_cuales"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>59. ¿Dónde esta realizando la venta de sus productos?</b>
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_59"
                  value="Empresa transformadora Local"
                  className="form-check-input"
                />{' '}
                <b>Empresa transformadora Local</b>
              </label>
              <label className="form-label ms-2">
                <Field
                  type="text"
                  name="pregunta_59_destino_transformadora_local"
                  placeholder="Destino..."
                  className="form-control form-control-sm"
                />
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_59"
                  value="Empresa transformadora Nacional"
                  className="form-check-input"
                />{' '}
                <b>Empresa transformadora Nacional</b>
              </label>
              <label className="form-label ms-2">
                <Field
                  type="text"
                  name="pregunta_59_destino_transformadora_nacional"
                  placeholder="Destino..."
                  className="form-control form-control-sm"
                />
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_59"
                  value="Producto terminado con venta regional"
                  className="form-check-input"
                />{' '}
                <b>Producto terminado con venta regional</b>
              </label>
              <label className="form-label ms-2">
                <Field
                  type="text"
                  name="pregunta_59_destino_venta_local"
                  placeholder="Destino..."
                  className="form-control form-control-sm"
                />
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="pregunta_59"
                  value="Producto terminado con venta nacional"
                  className="form-check-input"
                />{' '}
                <b>Producto terminado con venta nacional</b>
              </label>
              <label className="form-label ms-2">
                <Field
                  type="text"
                  name="pregunta_59_destino_venta_nacional"
                  placeholder="Destino..."
                  className="form-control form-control-sm"
                />
              </label>
              <label className="form-label">Otros:</label>
              <Field
                type="text"
                name="pregunta_59_otros"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>60. ¿A qué precio compra usted el litro de leche?</b>
              </label>
              <Field
                type="number"
                name="pregunta_60"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  61. ¿Maneja bonificaciones para pago de la leche de acuerdo a
                  la resolución 017 de 2019?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_61"
                id="pregunta_61"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">Cuales:</label>
              <Field
                type="text"
                name="pregunta_61_cuales"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>62. ¿Conoce cuales son sus costos de produccion?</b>
              </label>
              <Field
                component="select"
                name="pregunta_62"
                id="pregunta_62"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>63. ¿Cuáles son sus principales clientes?</b>
              </label>
              <Field
                type="text"
                name="pregunta_63"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  64. ¿Estaría dispuesto a comercializar su producto bajo una
                  misma marca de forma asociativa?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_64"
                id="pregunta_64"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">¿Por que?</label>
              <Field
                type="text"
                name="pregunta_64_porque"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  65. ¿Estaria dispuesto a comercializar sus productos, con una
                  entidad privada departamental que sirva como centro de acopio
                  de productos derivados lacteos?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_65"
                id="pregunta_65"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
              <label className="form-label">¿Por que?</label>
              <Field
                type="text"
                name="pregunta_65_porque"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>66. ¿Cuál es el precio de venta de sus productos?</b>
              </label>
              {values.pregunta_23.map((el: string) => (
                <div className="d-flex flex-column">
                  <label className="form-label mt-3">
                    <b>{el}:</b>
                  </label>
                  <div className="d-flex ms-4">
                    <div>
                      <label className="form-label">
                        <b>Presentacion</b>
                      </label>
                      <Field
                        type="text"
                        name={`pregunta_66_${el}_presentacion`}
                        placeholder="Respuesta..."
                        className="form-control form-control-sm w-75 me-3"
                      />
                    </div>
                    <div>
                      <label className="form-label">
                        <b>Valor</b>
                      </label>
                      <Field
                        type="number"
                        name={`pregunta_66_${el}_valor`}
                        placeholder="Respuesta..."
                        className="form-control form-control-sm w-75 me-3"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>
                  67. ¿Cuentan con transporte propio para la distribución y
                  venta?
                </b>
              </label>
              <Field
                component="select"
                name="pregunta_67"
                id="pregunta_67"
                className="form-select form-select-lg mb-3"
              >
                <option>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            {values.pregunta_67 === 'No' ? (
              <div className="container_form">
                <label className="form-label">
                  <b>¿Se tiene tercerizado el proceso de distribución? </b>
                </label>
                <Field
                  component="select"
                  name="pregunta_67_distribucion"
                  id="pregunta_67_distribucion"
                  className="form-select form-select-lg mb-3"
                >
                  <option>Respuesta</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Field>
                {values.pregunta_67_distribucion === 'Si' ? (
                  <div>
                    <label className="form-label">Con quien</label>
                    <Field
                      type="text"
                      name="pregunta_67_distribucion_quien"
                      placeholder="Respuesta..."
                      className="form-control"
                    />
                  </div>
                ) : null}
              </div>
            ) : null}
            <div className="container_form">
              <label className="form-label">
                <b>
                  68. ¿Cuáles son sus costos mensuales aproximados de servicios
                  públicos?
                </b>
              </label>
              <label className="form-label">Energia:</label>
              <Field
                type="number"
                name="pregunta_68_energia"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
              <label className="form-label">Gas:</label>
              <Field
                type="number"
                name="pregunta_68_gas"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
              <label className="form-label">Agua:</label>
              <Field
                type="number"
                name="pregunta_68_agua"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
              <label className="form-label">Internet:</label>
              <Field
                type="number"
                name="pregunta_68_internet"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
              <label className="form-label">Telefonia:</label>
              <Field
                type="number"
                name="pregunta_68_telefonia"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-25"
              />
              <div className="d-flex">
                <div>
                  <label className="form-label">Otro:</label>
                  <Field
                    type="text"
                    name="pregunta_68_otro"
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75"
                  />
                </div>
                <div>
                  <label className="form-label">Valor:</label>
                  <Field
                    type="number"
                    name="pregunta_68_otro_valor"
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75"
                  />
                </div>
              </div>
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>Observaciones</b>
              </label>
              <Field
                type="text"
                name="observaciones"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="container_form">
              <label className="form-label">
                <b>Fecha</b>
              </label>
              <Field type="date" name="fecha" className="form-control" />
            </div>
            <div className="container_form">
              <div className="container_data_form">
                <div>
                  <label className="form-label">
                    <b>Nombre encuestado</b>
                  </label>
                  <Field
                    type="text"
                    name="nombre_encuestado"
                    placeholder="Respuesta..."
                    className="form-control"
                  />
                  <label className="form-label">
                    <b>Cedula encuestado</b>
                  </label>
                  <Field
                    type="text"
                    name="cedula_encuestado"
                    placeholder="Respuesta..."
                    className="form-control"
                  />
                  <div>
                    <Popup
                      modal
                      trigger={
                        <button type="button" className="btn btn-dark mt-2">
                          Firma encuestado
                        </button>
                      }
                    >
                      <SignaturePad
                        ref={encuestado}
                        canvasProps={{ className: 'signatureCanvas' }}
                      />
                      <button
                        type="button"
                        onClick={LimpiarEncuestado}
                        className="btn btn-outline-danger me-2"
                      >
                        Limpiar
                      </button>
                      <button
                        type="button"
                        onClick={guardarEncuestado}
                        className="btn btn-outline-success"
                      >
                        Guardar
                      </button>
                    </Popup>
                    {firmaEncuestado ? (
                      <div className="d-flex flex-column">
                        <img src={firmaEncuestado} alt={firmaEncuestado} />
                        <label>
                          <Field
                            type="checkbox"
                            name="firma_encuestado"
                            value={firmaEncuestado}
                            className="form-check-input"
                          />{' '}
                          <b>Confirmar firma</b>
                        </label>
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <input
                      type="file"
                      onChange={handleChange}
                      accept=".jpg, .jpeg, .png"
                      className="form-control mt-2"
                    />
                    {imageSrc.length ? (
                      <div className="d-flex flex-column">
                        <img src={imageSrc} alt={imageSrc} />
                        <label>
                          <Field
                            type="checkbox"
                            name="foto_encuestado"
                            value={imageSrc}
                            className="form-check-input"
                          />{' '}
                          <b>Confirm Image</b>
                        </label>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <label className="form-label">
                    <b>Nombre encuestador</b>
                  </label>
                  <Field
                    type="text"
                    name="nombre_encuestador"
                    placeholder="Respuesta..."
                    className="form-control"
                  />
                  <label className="form-label">
                    <b>Cedula encuestador</b>
                  </label>
                  <Field
                    type="text"
                    name="cedula_encuestador"
                    placeholder="Respuesta..."
                    className="form-control"
                  />
                  <Popup
                    modal
                    trigger={
                      <button type="button" className="btn btn-dark mt-2">
                        Firma encuestador
                      </button>
                    }
                  >
                    <SignaturePad
                      ref={encuestador}
                      canvasProps={{ className: 'signatureCanvas' }}
                    />
                    <button
                      type="button"
                      onClick={limpiarEncuestador}
                      className="btn btn-outline-danger me-2"
                    >
                      Limpiar
                    </button>
                    <button
                      type="button"
                      onClick={guardarEncuestador}
                      className="btn btn-outline-success"
                    >
                      Guardar
                    </button>
                  </Popup>
                  {firmaEncuestador ? (
                    <div className="d-flex flex-column">
                      <img src={firmaEncuestador} alt={firmaEncuestador} />
                      <label>
                        <Field
                          type="checkbox"
                          name="firma_encuestador"
                          value={firmaEncuestador}
                          className="form-check-input"
                        />{' '}
                        <b>Confirmar Firma</b>
                      </label>
                    </div>
                  ) : null}
                </div>
              </div>
              <button type="submit" className="btn btn-success m-3 p-3">
                Crear encuesta
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
