import Cookies from 'universal-cookie';
import Popup from 'reactjs-popup';
import EditForm from '../../editForm/EditForm';
import DeleteForm from '../../deleteForm/DeleteForm';
import Logo from '../../../images/logo2.jpg';
import FormDetailsPart1 from './FormDetailsPart1';
import FormDetailsPart3 from './FormDetailsPart3';
import FormDetailsPart2 from './FormDetailsPart2';
import FormDetailsPart4 from './FormDetailsPart4';
import FormDetailsPart5 from './FormDetailsPart5';
import FormDetailsPart6 from './FormDetailsPart6';
import FormDetailsPart7 from './FormDetailsPart7';
import FormDetailsPart8 from './FormDetailsPart8';
import FormDetailsPart9 from './FormDetailsPart9';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFormDetails } from '../../../slices/formSlice';
import type { FormDetailsIdType } from '../../../types/fromDetailsId';
import type { Dispatch } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/store';
import type { FormInterface } from '../../../interfaces/form';
import './FormDetails.css';

export default function FormDetails(): JSX.Element {
  const { id } = useParams<FormDetailsIdType>();
  const data = useSelector<RootState, FormInterface>(
    (state) => state.form.dataDetails
  );
  const cookies: Cookies = new Cookies();
  const dispatch: Dispatch<any> = useDispatch();
  const history = useHistory();

  const handleClickBack = (): void => {
    history.push('/home');
  };

  useEffect(() => {
    dispatch(getFormDetails(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (!cookies.get('user')) {
      history.push('/');
    }
  });
  if (data) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="button_back">
          <button
            onClick={handleClickBack}
            className="btn btn-outline-dark p-2"
          >
            Volver
          </button>
          <Popup
            modal
            trigger={
              <button
                type="button"
                className="btn btn-outline-primary ms-1 p-2"
              >
                Editar
              </button>
            }
          >
            <div className="containerPrincipalPop">
              <EditForm id={id} />
            </div>
          </Popup>
          <DeleteForm id={id} />
        </div>
        <div className="w-75">
          <img src={Logo} alt="logo" className="mt-5 mb-5 w-100 rounded" />
          <FormDetailsPart1 />
          <FormDetailsPart2 />
          <FormDetailsPart3 />
          <FormDetailsPart4 />
          <FormDetailsPart5 />
          <FormDetailsPart6 />
          <FormDetailsPart7 />
          <FormDetailsPart8 />
          <FormDetailsPart9 />
        </div>
      </div>
    );
  } else {
    return <h1>Not found.</h1>;
  }
}
