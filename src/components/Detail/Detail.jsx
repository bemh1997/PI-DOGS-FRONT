import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';
import { Link } from "react-router-dom";
import arrow from '../../assets/arrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { getDogById, clearState } from '../../redux/actions';

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dogDB = useSelector((state) => state.dog);
  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(getDogById(id));
      setDataLoaded(true);
    }
    return () => {
      dispatch(clearState());
    }
  }, [dispatch, id, isDataLoaded]);

  const formattedTemp = Array.isArray(dogDB.temperamentos) ? dogDB.temperamentos.join(', ') : '';

  return (
    <div className={style.div}>
      <Link className={style.divReturnBack} to='/home'>
        <span>Regresar</span>
        <img className={style.arrow} src={arrow} alt="arrow" />
      </Link>
      <div className={style.divDetail}>
        <div className={style.buttons}>
          <Link className={style.xButton} to='/home'>
            <span>X</span>
          </Link> 
        </div>
        <h2>Detalles</h2>
        {dogDB ? (
          <div className={style.divContainer}>
            <div className={style.divImg}>
              <img src={dogDB.imagen} alt={dogDB.nombre} width="400px" height="300px" />
            </div>
            <div className={style.divInfo}>
              <h2>ID | {dogDB.id}</h2>
              <h2>Nombre | {dogDB.nombre}.</h2>
              <h2>Altura | De {dogDB.altura} centímetros.</h2>
              <h2>Temperamentos | {formattedTemp ? formattedTemp+'.' : 'Sin temperamentos registrados.'}</h2>
              <h2>Peso | De {dogDB.peso} kilogramos.</h2>
              <h2>Años de Vida | {dogDB.esperanza}(años).</h2>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Detail;
