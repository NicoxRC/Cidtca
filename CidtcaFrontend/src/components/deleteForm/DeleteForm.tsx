import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { deleteForm } from '../../services/deleteForm';
import type { FormDetailsIdType } from '../../types/fromDetailsId';

export default function DeleteForm(props: FormDetailsIdType): JSX.Element {
  const { id } = props;
  const history = useHistory();

  const handleClickEliminate = (): void => {
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

  return (
    <button
      onClick={handleClickEliminate}
      className="btn btn-outline-danger ms-1 p-2"
    >
      Eliminar
    </button>
  );
}
