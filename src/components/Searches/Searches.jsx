import style from './Searches.module.css';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { clearState, getTemps, orderByName, getDogsbyParamS, orderByWeight, getDogsByTemp } from '../../redux/actions';
import { connect } from 'react-redux';

const Searches = ({ dogs, dogsBU }) => {
  const dispatch = useDispatch();
  const allTemperamentos = useSelector((state)=> state.listTemperaments);
  const count = dogs.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterTemp = (evento)=>{
    dispatch(getDogsByTemp(evento.target.value));
  }
  const handleFilterDB = (evento) =>{
    if(evento.target.value ==='todos'){
      dispatch(getDogsbyParamS('todos'))
    }else if(evento.target.value==='api'){
      dispatch(getDogsbyParamS('api'))
    }else{
      dispatch(getDogsbyParamS('db'))
    }
  }

  const handleOrder = (evento)=> {
    dispatch(orderByName(evento.target.value))
  }

  const handleOrderW = (evento)=>{
    dispatch(orderByWeight(evento.target.value));
  }

  useEffect(() => {
    
    dispatch(getTemps())
    return () => {
      dispatch(clearState());
    }
  }, [dispatch]);

  useEffect(() => {

  }, [allTemperamentos]);

  return (
    <div className={style.Home}>
      <div className={style.superior}>
        {
          count === 0 ? (
            <h2>No hay resultados que mostrar</h2>
          ) : count === 1 ? (
            <h2>Se encontró un resultado en tu búsqueda</h2>
          ) : count > 1 ? (
            <h2>Se encontraron {count} resultados en tu búsqueda</h2>
          ) : (<h2> </h2>)

        }
        <div className={style.filtrados}>
            {/* Temperamentos */}
            <div className={style.selectContainer}>
              <select
                className={style.select}
                onChange={handleFilterTemp}
                name="temperamentos"
                id="temperamentos"
              >
              <option value="" disabled selected>
                -- Seleccione temperamentos --
              </option>
              <option value="default">default</option>
              {allTemperamentos?.map((temperamento) => (
                <option key={temperamento.id} value={temperamento.nombre}>
                  {temperamento.nombre}
                </option>
              ))
              }
              </select>
              <span className={style.span}>Temperamentos</span>
            </div>

            {/* Api o DB */}
            <div className={style.selectContainer}>
              <select 
                className={style.select}
                onChange={handleFilterDB}
                name="apiDB"
                id="apiDB"
              >
                <option value="" selected disabled>--Selecciona--</option>
                <option value="api">API</option>
                <option value="db">Base de datos</option>
                <option value="todos">Todos</option>
              </select>
              <span className={style.span}>API o DB</span>
            </div>

            {/* Order por nombre*/}
            <div className={style.selectContainer}>
              <select 
                className={style.select}
                onChange={handleOrder}
                name="orderByName"
                id="orderByName"
              >
                <option value="" selected disabled>--Selecciona--</option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
              </select>
              <span className={style.span}>Ordenar de </span>
            </div>

            {/* Ordenar por peso */}
            <div className={style.selectContainer}>
              <select 
                className={style.select}
                onChange={handleOrderW}
                name="orderByWeight"
                id="orderByWeight"
              >
                <option value="" selected disabled>--Selecciona--</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
              </select>
              <span className={style.span}>Peso </span>
            </div>
          </div>
        <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={count}
          pagination={pagination}
          currentPage={currentPage}
        />
      </div>
      <div className={style.content}>
        <div className={style.divCards}>
          {
            count === 0 ? null : <Cards dogs={currentDogs} />
          }
        </div>
      </div>
      <div className={style.footer}>
        <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={count}
          pagination={pagination}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dogs: state.searches,
  }
}

export default connect(mapStateToProps, null)(Searches);
