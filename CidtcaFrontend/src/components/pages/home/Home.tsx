import Dropdown from 'react-bootstrap/Dropdown';
import Cookies from 'universal-cookie';
import ExportExcel from 'react-export-excel';
import Rayas from '../../../images/Rayas.png';
import Cards from '../../cards/Cards';
import Logo from '../../../images/logo2.jpg';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { municipios } from '../../../utils/municipios';
import { formsToExcelFunction } from '../../../utils/formsToExcel';
import { excelDownload } from '../../../utils/excelDownload';
import { useDispatch, useSelector } from 'react-redux';
import { getAllForms } from '../../../slices/formSlice';
import type { RootState } from '../../../app/store';
import type { FormInterface } from '../../../interfaces/form';
import type { ExcelDownloadType } from '../../../types/excelDownload';
import type { Dispatch } from '@reduxjs/toolkit';
import type { FormsToExcelInterface } from '../../../interfaces/formsToExcel';
import './Home.css';

export default function Home(): JSX.Element {
  const cookies: Cookies = new Cookies();
  const dispatch: Dispatch<any> = useDispatch();
  const history = useHistory();

  const forms = useSelector<RootState, FormInterface[]>(
    (state) => state.form.dataForms
  );
  const [formsFilter, setFormsFilter] = useState<FormInterface[]>([]);
  const [formsToExcel, setFormsToExcel] = useState<FormsToExcelInterface[]>([]);

  const ExcelFile = ExportExcel.ExcelFile;
  const ExcelSheet = ExportExcel.ExcelSheet;
  const ExcelColumn = ExportExcel.ExcelColumn;

  const handleClickSession = (): void => {
    cookies.remove('id', { path: '/' });
    cookies.remove('user', { path: '/' });
    history.push('/');
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.value === 'Todos') {
      setFormsFilter(forms);
    } else {
      const formsFiltered = forms?.filter(
        (el: FormInterface) => el.pregunta_8 === e.target.value
      );
      setFormsFilter(formsFiltered);
    }
  };

  useEffect(() => {
    dispatch(getAllForms());
  }, [dispatch]);

  useEffect(() => {
    setFormsToExcel(formsToExcelFunction(forms));
    setFormsFilter(forms);
  }, [forms]);

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
                      {excelDownload.map((el: ExcelDownloadType) => (
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
                    <option value={'Todos'} key={'Todos'}>
                      Filtrar...
                    </option>
                    {municipios.map((el: string) => (
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
