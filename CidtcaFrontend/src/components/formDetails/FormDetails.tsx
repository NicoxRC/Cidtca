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
    console.log(values.pregunta_23_gps_n);

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
                pregunta_23: '',
                pregunta_24: '',
                pregunta_23_gps_n: '',
                pregunta_23_gps_w: '',
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
                    name="pregunta_23"
                    placeholder="Respuesta..."
                    className="form-control mt-3"
                  />
                  <label className="form-label mt-3">
                    <b>GPS:</b>
                  </label>
                  <label className="form-label mt-3">
                    <b>Coordenada N:</b>
                  </label>
                  <Field
                    type="text"
                    name="pregunta_23_gps_n"
                    placeholder="Respuesta..."
                    className="form-control mt-3"
                  />
                  <label className="form-label mt-3">
                    <b>Coordenada W:</b>
                  </label>
                  <Field
                    type="text"
                    name="pregunta_23_gps_w"
                    placeholder="Respuesta..."
                    className="form-control mt-3"
                  />
                  <label className="form-label mt-3">
                    <b>Altura:</b>
                  </label>
                  <Field
                    type="number"
                    name="pregunta_24"
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
              <b>1. Tipo de personeria:</b>
              {data.pregunta_1}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>2. Tipo organización:</b>
              {data.pregunta_2}
            </p>
            {data.pregunta_2_otro ? <p>Otro: {data.pregunta_2_otro}</p> : null}
          </div>
          <div className="container_details">
            <p>
              <b>3. Su organización cuenta con:</b>
            </p>
            <ul>
              {data.pregunta_3?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            {data.pregunta_3_puntaje ? (
              <p>
                <b>Puntaje concepto sanitario</b>
                {data.pregunta_3_puntaje} %
              </p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>4. Representante legal o propietario:</b>
              {data.pregunta_4}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>5. Información de Contacto:</b>
              <ul>
                <li>Numero: {data.pregunta_5_numero}</li>
                <li>Correo: {data.pregunta_5_correo}</li>
              </ul>
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>6. Actividad principal:</b>
              {data.pregunta_6}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>7. Municipio:</b>
              {data.pregunta_7}
            </p>
            <p>
              <b>Direccion:</b>
              {data.pregunta_7_vereda}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>8. ¿realiza el aporte al fondo nacional del ganado?:</b>
              {data.pregunta_8}
            </p>
          </div>
          <div className="container_details">
            <h1>CRITERIO 2 CARACTERISTICAS DE ACOPIO Y TRANSPORTE DE LECHE</h1>
          </div>
          <div className="container_details">
            <p>
              <b>9. ¿Qué métodos de acopio de leche utiliza?:</b>
            </p>
            <ul>
              {data.pregunta_9?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            <p>
              <b>Porcentaje:</b>
            </p>
            <ul>
              {data.pregunta_9_porcentaje_recibe_planta ? (
                <li>
                  Se recibe en planta/centro de acopio:{' '}
                  {data.pregunta_9_porcentaje_recibe_planta} %
                </li>
              ) : null}
              {data.pregunta_9_porcentaje_recoge_planta ? (
                <li>
                  La recoge en el centro de acopio:{' '}
                  {data.pregunta_9_porcentaje_recoge_planta} %
                </li>
              ) : null}
              {data.pregunta_9_porcentaje_via_productor_finca ? (
                <li>
                  Recibe al productor en finca:{' '}
                  {data.pregunta_9_porcentaje_via_productor_finca} %
                </li>
              ) : null}
            </ul>
            {data.pregunta_9_otro ? <p>Otro: {data.pregunta_9_otro}</p> : null}
          </div>
          <div></div>
          <div className="container_details">
            <p>
              <b>
                10. ¿De qué manera se transporta la leche hasta la planta/centro
                de acopio?:
              </b>
            </p>
            <ul>
              {data.pregunta_10?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            <p>
              <b>Porcentaje:</b>
            </p>
            <ul>
              {data.pregunta_10_porcentaje_termo_king ? (
                <li>Termo King: {data.pregunta_10_porcentaje_termo_king} %</li>
              ) : null}
              {data.pregunta_10_porcentaje_carro_particular ? (
                <li>
                  Carro particular:{' '}
                  {data.pregunta_10_porcentaje_carro_particular} %
                </li>
              ) : null}
              {data.pregunta_10_porcentaje_moto ? (
                <li>Moto: {data.pregunta_10_porcentaje_moto} %</li>
              ) : null}
              {data.pregunta_10_porcentaje_caballo ? (
                <li>Caballo: {data.pregunta_10_porcentaje_caballo} %</li>
              ) : null}
            </ul>
            {data.pregunta_10_otro ? (
              <p>Otro: {data.pregunta_10_otro}</p>
            ) : null}
          </div>
          <div></div>
          <div className="container_details">
            <p>
              <b>
                11. ¿De qué manera transporta la leche desde plataforma a areas
                de proceso?:
              </b>
              <ul>
                {data.pregunta_11?.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </p>
            {data.pregunta_11_otro ? (
              <p>Otro: {data.pregunta_11_otro}</p>
            ) : null}
          </div>
          <div></div>
          <div className="container_details">
            <p>
              <b>12. ¿De qué manera realiza el almacenamiento de la leche?:</b>
            </p>
            <ul>
              {data.pregunta_12?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            {data.pregunta_12_otro ? (
              <p>Otro: {data.pregunta_12_otro}</p>
            ) : null}
          </div>
          <div></div>
          <div className="container_details">
            <p>
              <b>13. ¿Sus proveedores de leche son?:</b>
            </p>
            <ul>
              {data.pregunta_13?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>14. ¿Cuantos Proveedores de leche tiene?:</b>
              {data.pregunta_14}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                15. Si son externos nombre sus principales proveedores, si son
                asociados anexe listado de socios:
              </b>
              {data.pregunta_15}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                16. ¿Sus proveedores cuentan con certificado de Buenas Prácticas
                Ganaderas BPG?:
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
                17. ¿Si su proveedor es un centro de acopio, cuentan con
                certificado de Buenas Prácticas de Manufactura BPM?:
              </b>
              {data.pregunta_17}
            </p>
            {data.pregunta_17_cuantos ? (
              <p>Cuantos: {data.pregunta_17_cuantos}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                18. ¿Sus proveedores cuentan con certificado de Buenas Prácticas
                de Ordeño BPO?:
              </b>
              {data.pregunta_18}
            </p>
            {data.pregunta_18_cuantos ? (
              <p>Cuantos: {data.pregunta_18_cuantos}</p>
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
              <b>19. ¿Cuenta con planta de proces y/o acopio?:</b>
              {data.pregunta_19}
            </p>
          </div>
          {/* se borro */}
          <div className="container_details">
            <p>
              <b>
                21. En lo que respecta a vías, que tipo de acceso predomina para
                el transporte de leche a la planta:
              </b>
              {data.pregunta_21
                ? data.pregunta_21?.map((el: string) => (
                    <ul>
                      <li>{el}</li>
                    </ul>
                  ))
                : null}
            </p>
            <p>
              <b>Porcentaje:</b>
            </p>
            <ul>
              {data.pregunta_21_porcentaje_pavimentada ? (
                <li>
                  Pavimentada: {data.pregunta_21_porcentaje_pavimentada} %
                </li>
              ) : null}
              {data.pregunta_21_porcentaje_placa_huella ? (
                <li>
                  Placa_huella: {data.pregunta_21_porcentaje_placa_huella} %
                </li>
              ) : null}
              {data.pregunta_21_porcentaje_via_carreteable ? (
                <li>
                  Via_carreteable: {data.pregunta_21_porcentaje_via_carreteable}{' '}
                  %
                </li>
              ) : null}
              {data.pregunta_21_porcentaje_trocha_a_pie ? (
                <li>
                  Trocha_a_pie: {data.pregunta_21_porcentaje_trocha_a_pie} %
                </li>
              ) : null}
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>
                22. En lo que respecta a vías, que tipo de acceso predomina para
                comercializar sus productos:
              </b>
              {data.pregunta_22
                ? data.pregunta_22?.map((el: string) => (
                    <ul>
                      <li>{el}</li>
                    </ul>
                  ))
                : null}
            </p>
            <p>
              <b>Porcentaje:</b>
            </p>
            <ul>
              {data.pregunta_22_porcentaje_pavimentada ? (
                <li>
                  Pavimentada: {data.pregunta_22_porcentaje_pavimentada} %
                </li>
              ) : null}
              {data.pregunta_22_porcentaje_placa_huella ? (
                <li>
                  Placa_huella: {data.pregunta_22_porcentaje_placa_huella} %
                </li>
              ) : null}
              {data.pregunta_22_porcentaje_via_carreteable ? (
                <li>
                  Via_carreteable: {data.pregunta_22_porcentaje_via_carreteable}{' '}
                  %
                </li>
              ) : null}
              {data.pregunta_22_porcentaje_trocha_a_pie ? (
                <li>
                  Trocha_a_pie: {data.pregunta_22_porcentaje_trocha_a_pie} %
                </li>
              ) : null}
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>
                23. ¿Conoce usted, Cuál es la temperatura ambiente aprox. donde
                se ubica la planta?:
              </b>
              {data.pregunta_23}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>23.1 GPS:</b>
              {data.pregunta_23_gps}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                24. ¿Conoce usted, cuál es la altura sobre el nivel del mar en
                la que se ubica la planta?:
              </b>
              {data.pregunta_24}
            </p>
          </div>
          <div className="container_details">
            <h1>CRITERIO 4 VOLÚMENES DE PRODUCCIÓN Y/O TRANSFORMACIÓN</h1>
          </div>
          <div className="container_details">
            <p>
              <b>
                25. ¿Actualmente realiza procesos de transformación de la
                leche?:
              </b>
              {data.pregunta_25}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>26. ¿Qué tipo de productos lácteos elabora?:</b>
            </p>
            <ul>
              {data.pregunta_26?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>27. ¿Qué Otro tipo de derivados produce?:</b>
              {data.pregunta_27}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                28. ¿Qué cantidad en litros Lt de leche utiliza, para todos los
                procesos que realiza?:
              </b>
            </p>
            <ul>
              <li>
                <b>Diaria:</b>
                {data.pregunta_28_diaria}
              </li>
              <li>
                <b>Semanal:</b>
                {data.pregunta_28_semanal}
              </li>
              <li>
                <b>Mensual:</b>
                {data.pregunta_28_mensual}
              </li>
            </ul>
          </div>
          <div className="container_details">
            <p>
              <b>
                29. ¿Qué cantidad, (ya sea litros Lt si es liquido o Kilos Kg si
                es peso) puede producir?
              </b>
            </p>
            <ul>
              <li>
                <b>Yogurt:</b>
                <ul>
                  <li>
                    <b>Diaria:</b>
                    {data.pregunta_29_yogurt_diaria}
                  </li>
                  <li>
                    <b>Semanal:</b>
                    {data.pregunta_29_yogurt_semanal}
                  </li>
                  <li>
                    <b>Mensual:</b>
                    {data.pregunta_29_yogurt_mensual}
                  </li>
                </ul>
              </li>
              <li>
                <b>Kumis:</b>
                <ul>
                  <li>
                    <b>Diaria:</b>
                    {data.pregunta_29_kumis_diaria}
                  </li>
                  <li>
                    <b>Semanal:</b>
                    {data.pregunta_29_kumis_semanal}
                  </li>
                  <li>
                    <b>Mensual:</b>
                    {data.pregunta_29_kumis_mensual}
                  </li>
                </ul>
              </li>
              <li>
                <b>Cuajada:</b>
                <ul>
                  <li>
                    <b>Diaria:</b>
                    {data.pregunta_29_cuajada_diaria}
                  </li>
                  <li>
                    <b>Semanal:</b>
                    {data.pregunta_29_cuajada_semanal}
                  </li>
                  <li>
                    <b>Mensual:</b>
                    {data.pregunta_29_cuajada_mensual}
                  </li>
                </ul>
              </li>
              <li>
                <b>Queso doble crema:</b>
                <ul>
                  <li>
                    <b>Diaria:</b>
                    {data.pregunta_29_queso_doble_crema_diaria}
                  </li>
                  <li>
                    <b>Semanal:</b>
                    {data.pregunta_29_queso_doble_crema_semanal}
                  </li>
                  <li>
                    <b>Mensual:</b>
                    {data.pregunta_29_queso_doble_crema_mensual}
                  </li>
                </ul>
              </li>
              <li>
                <b>Queso campesino:</b>
                <ul>
                  <li>
                    <b>Diaria:</b>
                    {data.pregunta_29_queso_campesino_diaria}
                  </li>
                  <li>
                    <b>Semanal:</b>
                    {data.pregunta_29_queso_campesino_semanal}
                  </li>
                  <li>
                    <b>Mensual:</b>
                    {data.pregunta_29_queso_campesino_mensual}
                  </li>
                </ul>
              </li>
              <li>
                <b>Leche:</b>
                <ul>
                  <li>
                    <b>Diaria:</b>
                    {data.pregunta_29_leche_diaria}
                  </li>
                  <li>
                    <b>Semanal:</b>
                    {data.pregunta_29_leche_semanal}
                  </li>
                  <li>
                    <b>Mensual:</b>
                    {data.pregunta_29_leche_mensual}
                  </li>
                </ul>
              </li>
              <li>
                <b>Quesos madurados:</b>
                <ul>
                  <li>
                    <b>Diaria:</b>
                    {data.pregunta_29_quesos_madurados_diaria}
                  </li>
                  <li>
                    <b>Semanal:</b>
                    {data.pregunta_29_quesos_madurados_semanal}
                  </li>
                  <li>
                    <b>Mensual:</b>
                    {data.pregunta_29_quesos_madurados_mensual}
                  </li>
                </ul>
              </li>
              <li>
                <b>Requeson:</b>
                <ul>
                  <li>
                    <b>Diaria:</b>
                    {data.pregunta_29_requeson_diaria}
                  </li>
                  <li>
                    <b>Semanal:</b>
                    {data.pregunta_29_requeson_semanal}
                  </li>
                  <li>
                    <b>Mensual:</b>
                    {data.pregunta_29_requeson_mensual}
                  </li>
                </ul>
              </li>
              <li>
                <b>Arequipe:</b>
                <ul>
                  <li>
                    <b>Diaria:</b>
                    {data.pregunta_29_arequipe_diaria}
                  </li>
                  <li>
                    <b>Semanal:</b>
                    {data.pregunta_29_arequipe_semanal}
                  </li>
                  <li>
                    <b>Mensual:</b>
                    {data.pregunta_29_arequipe_mensual}
                  </li>
                </ul>
              </li>
              {data.pregunta_29_otros ? (
                <li>Otros: {data.pregunta_29_otros}</li>
              ) : null}
            </ul>
          </div>
          <div className="container_details">
            <h1>
              CRITERIO 5 NUMERO DE EMPLEADOS O PERSONAS QUE DERIVAN SU SUSTENTO
              DE LA EMPRESA
            </h1>
          </div>
          <div className="container_details">
            <p>
              <b>30. ¿Cuantos años de experiencia tiene en el sector lácteo?</b>
              {data.pregunta_30}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                31. ¿Cuál es el número de personal fijo que trabaja en la planta
                y/o centro acopio?:
              </b>
              {data.pregunta_31}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                32. ¿Cuál es el número de personal fijo y oCASIONALES que
                trabaja en la planta y/o centro acopio?:
              </b>
              {data.pregunta_32}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                33. ¿Cuantas familias se ven favorecidas por la planta de
                procesamiento o centro de acopio, la venta y la elaboración de
                productos derivados de leche?:
              </b>
              {data.pregunta_33}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                34. ¿Pertenece a algún grupo, asociación, organismo o queseros
                reconocido de segundo nivel?:
              </b>
              {data.pregunta_34}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                35. Si su respuesta anterior es afirmativa, responda las
                siguientes preguntas, ¿ Conoce cuantas organizaiones ademas de
                la suya pertenecen al grupo, asociación u organismo de segundo
                nivel?:
              </b>
              {data.pregunta_35}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>36. Cual es el nombre del grupo, asociación o organismo:</b>
              {data.pregunta_36}
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
                37. ¿Qué tipo de tenencia tiene sobre el predio donde desarrolla
                la actividad económica?:
              </b>
              {data.pregunta_37}
            </p>
            {data.pregunta_37_otro ? (
              <p>Otro: {data.pregunta_37_otro}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>38. Zonas de la planta de producción con las que cuenta:</b>
            </p>
            <ul>
              {data.pregunta_38?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            {data.pregunta_38_otro ? (
              <p>Otro: {data.pregunta_38_otro}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>39. Maquinaria con la que cuenta:</b>
            </p>
            <ul>
              {data.pregunta_39?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>

            {data.pregunta_39_otro ? (
              <p>Otro: {data.pregunta_39_otro}</p>
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
              <b>40. Actualmente ¿Tiene registros INVIMA?</b>
              {data.pregunta_40}
            </p>
            {data.pregunta_40_cuales ? (
              <p>Cuales: {data.pregunta_40_cuales}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                41. ¿Cuentan con documentos y registros de Buenas Prácticas de
                Manufactura (BPM)?:
              </b>
              {data.pregunta_41}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                42. ¿Dispone de agua potable para la transformación del
                producto?:
              </b>
              {data.pregunta_42}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>43. ¿Realiza pruebas de plataforma?:</b>
              {data.pregunta_43}
            </p>
            {data.pregunta_43_cuales ? (
              <p>Cuales: {data.pregunta_43_cuales}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                44. ¿Registra la información obtenida de pruebas o muestras de
                la leche o productos derivados?:
              </b>
              {data.pregunta_44}
            </p>
            {data.pregunta_44_como ? (
              <p>Como: {data.pregunta_44_como}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>45. ¿Realiza análisis de la información obtenida?:</b>
              {data.pregunta_45}
            </p>
            {data.pregunta_45_como ? (
              <p>Como: {data.pregunta_45_como}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>46. ¿Utiliza indumentaria adecuada para los procesos?:</b>
              {data.pregunta_46}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                47. ¿Usa desinfectantes autorizados e implementa rotación de
                estos?:
              </b>
              {data.pregunta_47}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                48. ¿Aplica algun manejo o tratamiento de residuos sólidos y
                líquidos?:
              </b>
              {data.pregunta_48}
            </p>
            {data.pregunta_48_cual ? (
              <p>Cual: {data.pregunta_48_cual}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                49. ¿Cuenta con programas de gestión de buenas prácticas de
                manufactura documentando e implementando?:
              </b>
            </p>
            <ul>
              {data.pregunta_49?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
          <div className="container_details">
            <h1>
              CRITERIO 8. INTERÉS Y DISPOSICIÓN DE PARTICIPAR EN EL PROYECTO
            </h1>
          </div>
          <div className="container_details">
            <p>
              <b>
                50. ¿Ha recibido o participado en algún proyecto para el
                fortalecimiento o el mejoramiento del proceso productivo de su
                organización?:
              </b>
              {data.pregunta_50}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                51. ¿Desearía participar en un proyecto de investigación y
                desarrollo que mejore y fomente la creación de nuevos productos
                derivados de la leche?:
              </b>
              {data.pregunta_51}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                52. ¿Desearía participar activamente en el proyecto "DESARROLLO
                DE UN CULTIVO BIOPROTECTOR PARA EL MEJORAMIENTO DE LA INOCUIDAD
                DE LA PRODUCCIÓN QUESERA ARTESANAL DEL DEPARTAMENTO DE NARIÑO"?:
              </b>
              {data.pregunta_52}
            </p>
          </div>
          <div className="container_details">
            <h1>CRITERIO 9 CONDICIONES ECONÓMICAS Y DE MERCADEO</h1>
          </div>
          <div className="container_details">
            <p>
              <b>53. ¿Actualmente sus productos tienen un diseño de marca?:</b>
              {data.pregunta_53}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>54. ¿Sus productos cuentan con empaque y etiqueta?</b>
              {data.pregunta_54}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>55. ¿Utiliza algún medio de promoción para sus productos?:</b>
              {data.pregunta_55}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                56. ¿Considera que tiene algún tipo de competencia directa?:
              </b>
              {data.pregunta_56}
            </p>
            {data.pregunta_56_cuales ? (
              <p>Cuales: {data.pregunta_56_cuales}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>57. ¿Dónde esta realizando la venta de sus productos?:</b>
            </p>
            <ul>
              {data.pregunta_57?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            <p>
              <b>Destino:</b>
            </p>
            <ul>
              {data.pregunta_57_destino_transformadora_local ? (
                <li>
                  Destino transformadora local:{' '}
                  {data.pregunta_57_destino_transformadora_local}
                </li>
              ) : null}
              {data.pregunta_57_destino_transformadora_nacional ? (
                <li>
                  Destino transformadora nacional:{' '}
                  {data.pregunta_57_destino_transformadora_nacional}
                </li>
              ) : null}
              {data.pregunta_57_destino_venta_local ? (
                <li>
                  Destino venta local: {data.pregunta_57_destino_venta_local}
                </li>
              ) : null}
              {data.pregunta_57_destino_venta_nacional ? (
                <li>
                  Destino venta nacional:{' '}
                  {data.pregunta_57_destino_venta_nacional}
                </li>
              ) : null}
            </ul>
            {data.pregunta_57_otros ? (
              <p>Otros: {data.pregunta_57_otros}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>
                58. Si usted compra la leche y no la produce responda: ¿A qué
                precio compra el Lt de leche?:
              </b>
              {data.pregunta_58}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>59. ¿Maneja bonificaciones por calidad de leche?:</b>
              {data.pregunta_59}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                60. Según su experiencia, que opciones generalmente afecta el
                precio de la leche:
              </b>
            </p>
            <ul>
              {data.pregunta_60?.map((el: string) => (
                <li>{el}</li>
              ))}
            </ul>
            {data.pregunta_60_otros ? (
              <p>Otros: {data.pregunta_60_otros}</p>
            ) : null}
          </div>
          <div className="container_details">
            <p>
              <b>61. ¿Conoce cuales son sus costos de produccion?:</b>
              {data.pregunta_61}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>62. ¿Cuáles son sus principales clientes?:</b>
              {data.pregunta_62}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                63. ¿Estaría dispuesto a comercializar su producto bajo una
                misma marca de forma asociativa?:
              </b>
              {data.pregunta_63}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>
                64. ¿Cuáles son sus costos mensuales promedio de energia y gas?
              </b>
            </p>
            <ul>
              <li>Energia: {data.pregunta_64_energia}</li>
              <li>Gas: {data.pregunta_64_gas}</li>
              <li>
                Otro: {data.pregunta_64_otro} {data.pregunta_64_otro_valor}
              </li>
            </ul>
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
            <p>
              <b>¿POR QUÉ?:</b>
              {data.pregunta_65_porque}
            </p>
          </div>
          <div className="container_details">
            <p>
              <b>66. ¿Cuáles son los valores unitarios de sus productos?:</b>
            </p>
            <ul>
              <li>
                <b>Yogurt:</b>
                <ul>
                  <li>
                    <b>Presentacion:</b>
                    {data.pregunta_66_yogurt_presentacion}
                  </li>
                  <li>
                    <b>Valor:</b>
                    {data.pregunta_66_yogurt_valor}
                  </li>
                </ul>
              </li>
              <li>
                <b>Kumis:</b>
                <ul>
                  <li>
                    <b>Presentacion:</b> {data.pregunta_66_kumis_presentacion}
                  </li>
                  <li>
                    <b>Valor:</b>
                    {data.pregunta_66_kumis_valor}
                  </li>
                </ul>
              </li>
              <li>
                <b>Cuajada:</b>
                <ul>
                  <li>
                    <b>Presentacion:</b>
                    {data.pregunta_66_cuajada_presentacion}
                  </li>
                  <li>
                    <b>Valor:</b>
                    {data.pregunta_66_cuajada_valor}
                  </li>
                </ul>
              </li>
              <li>
                <b>Queso doble crema:</b>
                <ul>
                  <li>
                    <b>Presentacion:</b>
                    {data.pregunta_66_queso_doble_crema_presentacion}
                  </li>
                  <li>
                    <b>Valor:</b>
                    {data.pregunta_66_queso_doble_crema_valor}
                  </li>
                </ul>
              </li>
              <li>
                <b>Queso doble crema:</b>
                <ul>
                  <li>
                    <b>Presentacion:</b>
                    {data.pregunta_66_queso_doble_crema_presentacion}
                  </li>
                  <li>
                    <b>Valor:</b>
                    {data.pregunta_66_queso_doble_crema_valor}
                  </li>
                </ul>
              </li>
              <li>
                <b>Queso campesino:</b>
                <ul>
                  <li>
                    <b>Presentacion:</b>
                    {data.pregunta_66_queso_campesino_presentacion}
                  </li>
                  <li>
                    <b>Valor:</b>
                    {data.pregunta_66_queso_campesino_valor}
                  </li>
                </ul>
              </li>
              <li>
                <b>Leche:</b>
                <ul>
                  <li>
                    <b>Presentacion:</b> {data.pregunta_66_leche_presentacion}
                  </li>
                  <li>
                    <b>Valor:</b>
                    {data.pregunta_66_leche_valor}
                  </li>
                </ul>
              </li>
              <li>
                <b>Quesos madurados:</b>
                <ul>
                  <li>
                    <b>Presentacion:</b>
                    {data.pregunta_66_quesos_madurados_presentacion}
                  </li>
                  <li>
                    <b>Valor:</b>
                    {data.pregunta_66_quesos_madurados_valor}
                  </li>
                </ul>
              </li>
              <li>
                <b>Requeson:</b>
                <ul>
                  <li>
                    <b>Presentacion:</b>
                    {data.pregunta_66_requeson_presentacion}
                  </li>
                  <li>
                    <b>Valor:</b>
                    {data.pregunta_66_requeson_valor}
                  </li>
                </ul>
              </li>
              <li>
                <b>Arequipe:</b>
                <ul>
                  <li>
                    <b>Presentacion:</b>
                    {data.pregunta_66_arequipe_presentacion}
                  </li>
                  <li>
                    <b>Valor:</b>
                    {data.pregunta_66_arequipe_valor}
                  </li>
                </ul>
              </li>
              {data.pregunta_66_otros ? (
                <li>Otros: {data.pregunta_66_otros}</li>
              ) : null}
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
