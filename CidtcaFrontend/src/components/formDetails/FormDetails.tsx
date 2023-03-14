import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getForm } from '../../connection/getForm';
import { patchForms } from '../../connection/patchForm';
import { deleteForm } from '../../connection/deleteForm';
import Logo from '../../images/logo2.jpg';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import Popup from 'reactjs-popup';
import './FormDetails.css';

export default function FormDetails() {
  const { id }: any = useParams();
  const [data, setData]: any = useState();
  const history = useHistory();
  const cookies = new Cookies();

  const handleClickBack = () => {
    history.push('/home');
  };

  const handleClickEdit = async (values: any) => {
    const res = await patchForms(id, values);
    if (!res.message) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El formulario a sido editado',
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/home');
    } else {
      if (!values.pregunta_23_gps_n || !values.pregunta_23_gps_w) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'N y W tienen que llenarse',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se puedo edtiar el formulario',
        });
      }
    }
  };

  const handleClickEliminate = () => {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'No se puede revertir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          deleteForm(id);
          Swal.fire('Borrado!', 'Tu archivo ha sido borrado!!', 'success');
          history.push('/home');
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
          });
        }
      }
    });
  };

  useEffect(() => {
    (async () => {
      setData(await getForm(id));
    })();
  }, [id]);

  useEffect(() => {
    if (!cookies.get('user')) {
      history.push('/');
    }
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="button_back">
        <button onClick={handleClickBack} className="btn btn-outline-dark p-2">
          Volver
        </button>
        <Popup
          modal
          trigger={
            <button type="button" className="btn btn-outline-primary ms-1 p-2">
              Editar
            </button>
          }
        >
          <div className="containerPrincipalPop">
            <Formik
              initialValues={{
                pregunta_20: '',
                pregunta_21_n_grados: '',
                pregunta_21_n_minutos: '',
                pregunta_21_n_segundos: '',
                pregunta_21_w_grados: '',
                pregunta_21_w_minutos: '',
                pregunta_21_w_segundos: '',
                pregunta_22: '',
              }}
              onSubmit={handleClickEdit}
            >
              <Form className="d-flex justify-content-center align-items-center p-5 w-100 m-5 h-100">
                <div className="container_form bg-dark">
                  <label className="form-label mt-3">
                    <b>Temperatura:</b>
                  </label>
                  <Field
                    type="number"
                    name="pregunta_20"
                    placeholder="Respuesta..."
                    className="form-control mt-3"
                  />
                  <label className="form-label mt-3">
                    <b>Georreferenciación</b>
                  </label>
                  <label className="form-label mb-2">
                    <b>Coordenada N:</b>
                  </label>
                  <div className="d-flex">
                    <div>
                      <label className="form-label">Grados</label>
                      <Field
                        type="number"
                        name="pregunta_21_n_grados"
                        placeholder="Respuesta..."
                        className="form-control form-control-sm w-75 me-3"
                      />
                    </div>
                    <div>
                      <label className="form-label">Minutos</label>
                      <Field
                        type="number"
                        name="pregunta_21_n_minutos"
                        placeholder="Respuesta..."
                        className="form-control form-control-sm w-75 me-3"
                      />
                    </div>
                    <div>
                      <label className="form-label">Segundos</label>
                      <Field
                        type="number"
                        name="pregunta_21_n_segundos"
                        placeholder="Respuesta..."
                        className="form-control form-control-sm w-75 me-3"
                      />
                    </div>
                  </div>
                  <label className="form-label mt-2">
                    <b>Coordenada W:</b>
                  </label>
                  <div className="d-flex">
                    <div>
                      <label className="form-label">Grados</label>
                      <Field
                        type="number"
                        name="pregunta_21_w_grados"
                        placeholder="Respuesta..."
                        className="form-control form-control-sm w-75 me-3"
                      />
                    </div>
                    <div>
                      <label className="form-label">Minutos</label>
                      <Field
                        type="number"
                        name="pregunta_21_w_minutos"
                        placeholder="Respuesta..."
                        className="form-control form-control-sm w-75 me-3"
                      />
                    </div>
                    <div>
                      <label className="form-label">Segundos</label>
                      <Field
                        type="number"
                        name="pregunta_21_w_segundos"
                        placeholder="Respuesta..."
                        className="form-control form-control-sm w-75 me-3"
                      />
                    </div>
                  </div>
                  <label className="form-label mt-3">
                    <b>Altura:</b>
                  </label>
                  <Field
                    type="number"
                    name="pregunta_22"
                    placeholder="Respuesta..."
                    className="form-control mt-3"
                  />
                  <button
                    type="submit"
                    className="btn btn-success mt-3 mb-3 p-3"
                  >
                    Editar
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </Popup>
        <button
          onClick={handleClickEliminate}
          className="btn btn-outline-danger ms-1 p-2"
        >
          Eliminar
        </button>
      </div>
      {data ? (
        <div className="w-75">
          <img src={Logo} alt="logo" className="mt-5 mb-5 w-100 rounded" />
          <div className="container_details">
            <h1>CRITERIO 1 NIVEL DE FORMALIDAD DE LA ORGANIZACIÓN O EMPRESA</h1>
          </div>
          <div className="container_details">
            <p>
              <b>1. Nombre de organizacion:</b>
              {data.pregunta_1}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>2. Tipo de personeria:</b>
              {data.pregunta_2}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>3. Tipo de organizacion:</b>
              {data.pregunta_3}
            </p>
            {data.pregunta_3_otro ? <p>Otro: {data.pregunta_3_otro}</p> : null}
          </div>
          <div className="container_details">
            <p>
              <b>4. Su organización cuenta con:</b>
            </p>
            <ul>
              {data.pregunta_4?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>5. Representante legal o propietario:</b>
              {data.pregunta_5}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>6. Información de Contacto:</b>
              <p>
                <b>Contacto 1: </b>
              </p>
              <ul>
                <li>Nombre: {data.pregunta_6_contacto}</li>
                <li>Numero: {data.pregunta_6_numero}</li>
                <li>Correo: {data.pregunta_6_correo}</li>
              </ul>
              <p>
                <b>Contacto 2: </b>
              </p>
              <ul>
                <li>Nombre: {data.pregunta_6_contacto_2}</li>
                <li>Numero: {data.pregunta_6_numero_2}</li>
                <li>Correo: {data.pregunta_6_correo_2}</li>
              </ul>
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>7. Actividad principal:</b>
              <ul>
                {data.pregunta_7?.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>8. Municipio:</b>
              {data.pregunta_8}
            </p>
            <p>
              <b>Direccion:</b>
              {data.pregunta_8_direccion}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>9. ¿realiza el aporte al fondo nacional del ganado?:</b>
              {data.pregunta_9}
            </p>
          </div>
          <div className="container_details">
            <h1>CRITERIO 2 CARACTERISTICAS DE ACOPIO Y TRANSPORTE DE LECHE</h1>
          </div>
          <div className="container_details">
            <p>
              <b>10. ¿Qué métodos de acopio de leche utiliza?:</b>
            </p>
            <ul>
              {data.pregunta_10?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            {data.pregunta_10_otro ? (
              <p>Otro: {data.pregunta_10_otro}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                11. ¿De qué manera se transporta la leche hasta la planta/centro
                de acopio?
              </b>
            </p>
            <ul>
              {data.pregunta_11?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            {data.pregunta_11_otro ? (
              <p>Otro: {data.pregunta_11_otro}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                12. ¿De qué manera transporta la leche desde plataforma a areas
                de proceso?:
              </b>
              <ul>
                {data.pregunta_12?.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </p>
            {data.pregunta_12_otro ? (
              <p>Otro: {data.pregunta_12_otro}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>13. ¿De qué manera realiza el almacenamiento de la leche?:</b>
            </p>
            <ul>
              {data.pregunta_13?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            {data.pregunta_13_otro ? (
              <p>Otro: {data.pregunta_13_otro}</p>
            ) : null}
          </div>
          <div className="container_details">
            <h1>CONOCIMIENTO DE SUS PROVEEDORES</h1>
          </div>
          <div className="container_details">
            <p>
              <b>
                14. ¿Cuantos proveedores suministran leche al centro y/o planta
                de proceso?
              </b>
            </p>
            <ul>
              {data.pregunta_14?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            {data.pregunta_14_asociados_cuantos ? (
              <p>Cuantos Asociados: {data.pregunta_14_asociados_cuantos}</p>
            ) : null}
            {data.pregunta_14_externos_cuantos ? (
              <p>Cuantos Externos: {data.pregunta_14_externos_cuantos}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                15. ¿Sus proveedores cuentan con certificado de Buenas Prácticas
                Ganaderas BPG?:
              </b>
              {data.pregunta_15}
            </p>
            {data.pregunta_15_cuantos ? (
              <p>Cuantos: {data.pregunta_15_cuantos}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                16. ¿Si su proveedor es un centro de acopio, cuentan con
                certificado de Buenas Prácticas de Manufactura BPM?:
              </b>
              {data.pregunta_16}
            </p>
            {data.pregunta_16_cuantos ? (
              <p>Cuantos: {data.pregunta_16_cuantos}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                17. de los siguientes certificados con cuales cuentan sus
                proveedores
              </b>
              <ul>
                {data.pregunta_17?.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </p>
            {data.pregunta_17_practicas_ordeno_cuantos ? (
              <p>
                Cuantos practicas de ordeño:{' '}
                {data.pregunta_17_practicas_ordeno_cuantos}
              </p>
            ) : null}
            {data.pregunta_17_practicas_ganaderas_cuantos ? (
              <p>
                Cuantos practicas ganaderas:{' '}
                {data.pregunta_17_practicas_ganaderas_cuantos}
              </p>
            ) : null}
            {data.pregunta_17_vacunacion_cuantos ? (
              <p>Cuantos vacunacion: {data.pregunta_17_vacunacion_cuantos}</p>
            ) : null}
            {data.pregunta_17_brucela_tuberculosis_cuantos ? (
              <p>
                Cuantos Hato libre de brucela y tuberculosis:{' '}
                {data.pregunta_17_brucela_tuberculosis_cuantos}
              </p>
            ) : null}
            {data.pregunta_17_otro ? (
              <p>Otro: {data.pregunta_17_otro}</p>
            ) : null}
            {data.pregunta_17_otro_cuantos ? (
              <p>Otro Cuantos: {data.pregunta_17_otro_cuantos}</p>
            ) : null}
          </div>
          <div className="container_details">
            <h1>
              CRITERIO 3 UBICACIÓN Y ACCESIBILIDAD A LA PLANTA DE PROCESAMIENTO
              y/o CENTRO DE ACOPIO
            </h1>
          </div>
          <div className="container_details">
            <p>
              <b>
                18. En lo que respecta a vías, que tipo de acceso predomina para
                el transporte de leche a la planta
              </b>
            </p>
            <ul>
              {data.pregunta_18?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>
                19. En lo que respecta a vías, que tipo de acceso predomina para
                comercializar sus productos
              </b>
              <ul>
                {data.pregunta_19?.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                20. ¿Cuál es la temperatura ambiente aprox. donde se ubica la
                planta?:
              </b>
              {data.pregunta_20}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>21. Georreferenciación:</b>
            </p>
            <ul>
              <li>
                <p>
                  <b>Coordenada N:</b>
                </p>
                <ul>
                  <li>
                    <p>Grados: {data.pregunta_21_n_grados}</p>
                  </li>
                  <li>
                    <p>Minutos: {data.pregunta_21_n_minutos}</p>
                  </li>
                  <li>
                    <p>Segundos: {data.pregunta_21_n_segundos}</p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <b>Coordenada W:</b>
                </p>
                <ul>
                  <li>
                    <p>Grados: {data.pregunta_21_w_grados}</p>
                  </li>
                  <li>
                    <p>Minutos: {data.pregunta_21_w_minutos}</p>
                  </li>
                  <li>
                    <p>Segundos: {data.pregunta_21_w_segundos}</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>
                22. ¿Cuál es la altura sobre el nivel del mar en la que se ubica
                la planta?:
              </b>
              {data.pregunta_22}
            </p>
          </div>
          <div className="container_details">
            <h1>CRITERIO 4 VOLÚMENES DE PRODUCCIÓN Y/O TRANSFORMACIÓN</h1>
          </div>
          <div className="container_details">
            <p>
              <b>23. Prodcutos que elabora:</b>
            </p>
            <ul>
              {data.pregunta_23?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            {data.pregunta_23_otro ? (
              <p>Otro: {data.pregunta_23_otro}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                24. ¿Qué cantidad, (ya sea litros Lt si es liquido o Kilos Kg si
                es peso) puede producir?
              </b>
            </p>
            <ul>
              {data.pregunta_23?.map((el: string) => (
                <li>
                  <p>
                    <b>{el}</b>
                  </p>
                  <ul>
                    <li>
                      <p>Diario: {data[`pregunta_24_${el}_diaria`]}</p>
                    </li>
                    <li>
                      <p>Semanal: {data[`pregunta_24_${el}_semanal`]}</p>
                    </li>
                    <li>
                      <p>Mensual: {data[`pregunta_24_${el}_mensual`]}</p>
                    </li>
                    <li>
                      <p>
                        Rendimiento: {data[`pregunta_24_${el}_rendimiento`]}
                      </p>
                    </li>
                    <li>
                      <p>Vida util: {data[`pregunta_24_${el}_vida_util`]}</p>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>25.¿cómo se determina la vida útil?</b>
            </p>
            <ul>
              {data.pregunta_25?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            {data.pregunta_25_otro ? (
              <p>Otro: {data.pregunta_25_otro}</p>
            ) : null}
          </div>
          <div className="container_details">
            <h1>
              CRITERIO 5 NUMERO DE EMPLEADOS O PERSONAS QUE DERIVAN SU SUSTENTO
              DE LA EMPRESA
            </h1>
          </div>
          <div className="container_details">
            <p>
              <b>
                26. ¿Cuantos años de experiencia tiene en el sector lácteo?:
              </b>
              {data.pregunta_26}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                27. ¿Cuál es el número de personal fijo que trabaja en la planta
                y/o centro acopio?:
              </b>
              {data.pregunta_27}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                28. ¿Cuál es el número de personal OCASIONAL que trabaja en la
                planta y/o centro acopio?:
              </b>
              {data.pregunta_28}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                29. ¿Cuantas familias se ven favorecidas por la planta de
                procesamiento o centro de acopio, la venta y la elaboración de
                productos derivados de leche?:
              </b>
              {data.pregunta_29}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                30. ¿Pertenece a algún grupo, asociación, organismo o queseros
                reconocido de segundo nivel?:
              </b>
              {data.pregunta_30}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                31. Si su respuesta anterior es afirmativa, responda las
                siguientes preguntas, ¿ Conoce cuantas organizaiones ademas de
                la suya pertenecen al grupo, asociación u organismo de segundo
                nivel?:
              </b>
              {data.pregunta_31}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>32. Cual es el nombre del grupo, asociación o organismo:</b>
              {data.pregunta_32}
            </p>
          </div>
          <div className="container_details">
            <h1>
              CRITERIO 6 CAPACIDAD DE INFRAESTRUCTURA FISICA Y EQUIPOS INSTALADA
              EN LA PLANTA DE TRANSFORMACION
            </h1>
          </div>
          <div className="container_details">
            <p>
              <b>
                33. ¿Qué tipo de tenencia tiene sobre el predio donde desarrolla
                la actividad económica?:
              </b>
              {data.pregunta_33}
            </p>
            {data.pregunta_33_otro ? (
              <p>Otro: {data.pregunta_33_otro}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>34. Zonas de la planta de producción con las que cuenta:</b>
            </p>
            <ul>
              {data.pregunta_34?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            {data.pregunta_34_otro ? (
              <p>Otro: {data.pregunta_34_otro}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>35. Maquinaria, equipos y utensilios con los que cuenta:</b>
            </p>
            <ul>
              {data.pregunta_35?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            {data.pregunta_35_otro ? (
              <p>Otro: {data.pregunta_35_otro}</p>
            ) : null}
          </div>
          <div className="container_details">
            <h1>
              CRITERIO 7 CONDICIONES ACTUALES DE APLICACIÓN DE CALIDAD EN LA
              TRANSFORMACION
            </h1>
          </div>
          <div className="container_details">
            <p>
              <b>36. Actualmente ¿Tiene registros INVIMA?:</b>
              {data.pregunta_36}
            </p>
            <ul>
              {data.pregunta_36_cuales?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>37. ¿cuenta con Concepto sanitario?:</b>
              {data.pregunta_37}
            </p>
            <ul>
              <p>
                <b>Calificacion</b>
              </p>
              {data.pregunta_37_calificacion?.map((el: string) => (
                <li className="ms-5">{el}</li>
              ))}
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>
                38. ¿Cuentan con documentos y registros de Buenas Prácticas de
                Manufactura (BPM)?:
              </b>
              {data.pregunta_38}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                39. ¿Dispone de agua potable para la transformación del
                producto?:
              </b>
              {data.pregunta_39}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>40. ¿Realiza pruebas de plataforma?:</b>
              {data.pregunta_40}
            </p>
            <ul>
              <b>Cuales:</b>
              {data.pregunta_40_cuales?.map((el: string) => (
                <li className="ms-5">{el}</li>
              ))}
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>
                41. ¿Tiene criterios de aceptación o rechazo para la materia
                prima?:
              </b>
              {data.pregunta_41}
            </p>
            {data.pregunta_41_cuales ? (
              <p>Cuales: {data.pregunta_41_cuales}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                42. ¿Registra la información obtenida de las pruebas
                seleccionadas en la pregunta anterior?:
              </b>
              {data.pregunta_42}
            </p>
            {data.pregunta_42_como ? (
              <p>Como: {data.pregunta_42_como}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                43. Realiza pruebas para la liberación del producto terminado?:
              </b>
            </p>
            <ul>
              <li>
                <p>Microbiologicas: {data.pregunta_43_microbiologicas}</p>
                <p>Cuales: {data.pregunta_43_microbiologicas_cuales}</p>
              </li>
              <li>
                <p>Fisicoquímica: {data.pregunta_43_fisicoquimica}</p>
                <p>Cuales: {data.pregunta_43_fisicoquimica_cuales}</p>
              </li>
              <li>
                <p>Organolépticas: {data.pregunta_43_organolepticas}</p>
                <p>Cuales: {data.pregunta_43_organolepticas_cuales}</p>
              </li>
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>44. ¿Realiza análisis de la información obtenida?:</b>
              {data.pregunta_44}
            </p>
            {data.pregunta_44_como ? (
              <p>Como: {data.pregunta_44_como}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                45. De la siguiente indumentaria, seleccione cuales utiliza para
                la elaboración de los productos:
              </b>
              <ul>
                {data.pregunta_45?.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
              {data.pregunta_45_otro ? (
                <p>Otro: {data.pregunta_45_otro}</p>
              ) : null}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                46. ¿Usa detergente o desinfectantes autorizados e implementa
                rotación?:
              </b>
              {data.pregunta_46}
            </p>
            {data.pregunta_46_cuales ? (
              <p>Cuales: {data.pregunta_46_cuales}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                47. ¿Aplica algun manejo o tratamiento de residuos sólidos y
                líquidos?:
              </b>
              {data.pregunta_47}
            </p>
            {data.pregunta_47_cual ? (
              <p>Cual: {data.pregunta_47_cual}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                48. ¿realiza análisis de materia prima en laboratorio externos
                de leche?:
              </b>
              {data.pregunta_48}
            </p>
            {data.pregunta_48_cuales ? (
              <p>Cuales: {data.pregunta_48_cuales}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                49. ¿realiza análisis de materia prima en laboratorio externos
                para producto terminado?:
              </b>
              {data.pregunta_49}
            </p>
            {data.pregunta_49_cual ? (
              <p>Cual: {data.pregunta_49_cual}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                50. ¿Realiza análisis de calidad de agua en laboratorio
                externo?:
              </b>
              {data.pregunta_50}
            </p>
            {data.pregunta_50_cual ? (
              <p>Cual: {data.pregunta_50_cual}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                51. ¿Contrata el control de plagas con una empresa externa?:
              </b>
              {data.pregunta_51}
            </p>
            {data.pregunta_51_cual ? (
              <p>Cual: {data.pregunta_51_cual}</p>
            ) : null}
          </div>
          <div className="container_details">
            <h1>
              CRITERIO 8. INTERÉS Y DISPOSICIÓN DE PARTICIPAR EN EL PROYECTO
            </h1>
          </div>
          <div className="container_details">
            <p>
              <b>
                52. ¿Ha recibido o participado en algún proyecto para el
                fortalecimiento o el mejoramiento del proceso productivo de su
                organización?:
              </b>
              {data.pregunta_52}
            </p>
            {data.pregunta_52_cual ? (
              <p>Cual: {data.pregunta_52_cual}</p>
            ) : null}
            {data.pregunta_52_entidad ? (
              <p>Entidad financiadora: {data.pregunta_52_entidad}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                53. ¿Desearía participar activamente en el proyecto de
                investigacion "DESARROLLO DE UN CULTIVO BIOPROTECTOR PARA EL
                MEJORAMIENTO DE LA INOCUIDAD DE LA PRODUCCIÓN QUESERA ARTESANAL
                DEL DEPARTAMENTO DE NARIÑO"?:
              </b>
              {data.pregunta_53}
            </p>
          </div>
          <div className="container_details">
            <h1>CRITERIO 9 CONDICIONES ECONÓMICAS Y DE MERCADEO</h1>
          </div>
          <div className="container_details">
            <p>
              <b>54. ¿Actualmente sus productos tienen un diseño de marca?:</b>
              {data.pregunta_54}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                55. Cual es el nombre de la marca que maneja para sus productos:
              </b>
              {data.pregunta_55}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                56. ¿Realiza maquila o si estaría interesado en realizar
                procesos de maquila?:
              </b>
              {data.pregunta_56}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>57. ¿Utiliza algún medio de promoción para sus productos?:</b>
              {data.pregunta_57}
            </p>
            {data.pregunta_57_cuales ? (
              <p>Cuales: {data.pregunta_57_cuales}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                58. ¿Considera que tiene algún tipo de competencia directa?:
              </b>
              {data.pregunta_58}
            </p>
            {data.pregunta_58_cuales ? (
              <p>Cuales: {data.pregunta_58_cuales}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>59. ¿Dónde esta realizando la venta de sus productos?:</b>
            </p>
            <ul>
              {data.pregunta_59?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            <p>
              <b>Destino:</b>
            </p>
            <ul>
              {data.pregunta_59_destino_transformadora_local ? (
                <li>
                  Destino transformadora local:{' '}
                  {data.pregunta_59_destino_transformadora_local}
                </li>
              ) : null}
              {data.pregunta_59_destino_transformadora_nacional ? (
                <li>
                  Destino transformadora nacional:{' '}
                  {data.pregunta_59_destino_transformadora_nacional}
                </li>
              ) : null}
              {data.pregunta_59_destino_venta_local ? (
                <li>
                  Destino venta local: {data.pregunta_59_destino_venta_local}
                </li>
              ) : null}
              {data.pregunta_59_destino_venta_nacional ? (
                <li>
                  Destino venta nacional:{' '}
                  {data.pregunta_59_destino_venta_nacional}
                </li>
              ) : null}
            </ul>
            {data.pregunta_59_otros ? (
              <p>Otros: {data.pregunta_59_otros}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>60. ¿A qué precio compra usted el litro de leche?:</b>
              {data.pregunta_60}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                61. ¿Maneja bonificaciones para pago de la leche de acuerdo a la
                resolución 017 de 2019?:
              </b>
              {data.pregunta_61}
            </p>
            {data.pregunta_61_cuales ? (
              <p>Cuales: {data.pregunta_61_cuales}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>62. ¿Conoce cuales son sus costos de produccion?:</b>
              {data.pregunta_62}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>63. ¿Cuáles son sus principales clientes?:</b>
              {data.pregunta_63}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                64. ¿Estaría dispuesto a comercializar su producto bajo una
                misma marca de forma asociativa?:
              </b>
              {data.pregunta_64}
            </p>
            {data.pregunta_64_porque ? (
              <p>Porque: {data.pregunta_64_porque}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                65. ¿Estaria dispuesto a comercializar sus productos, con una
                entidad privada departamental que sirva como centro de acopio de
                productos derivados lacteos?:
              </b>
              {data.pregunta_65}
            </p>
            {data.pregunta_65_porque ? (
              <p>Porque: {data.pregunta_65_porque}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>66. ¿Cuál es el precio de venta de sus productos?</b>
            </p>
            <ul>
              {data.pregunta_23?.map((el: string) => (
                <li>
                  <p>
                    <b>{el}</b>
                  </p>
                  <ul>
                    <li>
                      <p>
                        Presentacion: {data[`pregunta_66_${el}_presentacion`]}
                      </p>
                    </li>
                    <li>
                      <p>Valor: {data[`pregunta_66_${el}_valor`]}</p>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>
                67. ¿Cuentan con transporte propio para la distribución y
                venta?:
              </b>
              {data.pregunta_67}
            </p>
            {data.pregunta_67_distribucion ? (
              <p>
                ¿Se tiene tercerizado el proceso de distribución?:{' '}
                {data.pregunta_67_distribucion}
              </p>
            ) : null}
            {data.pregunta_67_distribucion_quien ? (
              <p>Con quien: {data.pregunta_67_distribucion_quien}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                68. ¿Cuáles son sus costos mensuales aproximados de servicios
                públicos?:
              </b>
            </p>
            <ul>
              <li>Energia: {data.pregunta_68_energia}</li>
              <li>Agua: {data.pregunta_68_agua}</li>
              <li>Internet: {data.pregunta_68_internet}</li>
              <li>Telefonia: {data.pregunta_68_telefonia}</li>
              <li>
                Otro: {data.pregunta_68_otro}, Valor:{' '}
                {data.pregunta_68_otro_valor}
              </li>
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>Observaciones:</b>
              {data.observaciones}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>Fecha:</b>
              {data.fecha}
            </p>
          </div>
          <div className="container_details">
            <div className="container_data">
              <div>
                <p>
                  <b>Nombre encuestado:</b>
                  {data.nombre_encuestado}
                </p>
                <p>
                  <b>Cedula encuestado:</b>
                  {data.cedula_encuestado}
                </p>
                <p>
                  <b>Firma encuestado:</b>
                </p>
                <img src={data.firma_encuestado} alt="firma encuestado" />
              </div>
              <div>
                <p>
                  <b>Nombre encuestador:</b>
                  {data.nombre_encuestador}
                </p>
                <p>
                  <b>Cedula encuestador:</b>
                  {data.cedula_encuestador}
                </p>
                <p>
                  <b>Firma encuestador:</b>
                </p>
                <img src={data.firma_encuestador} alt="cedula encuestador" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
