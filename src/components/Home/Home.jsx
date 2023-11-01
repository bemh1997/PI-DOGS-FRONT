import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import style from './Home.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { getDogs, clearState, getTemps, orderByName, getDogsbyParam, orderByWeight, getDogsByTemp } from '../../redux/actions';

const Home = ()=>{
  const dispatch = useDispatch();
  const allDogs = useSelector((state)=> state.listDogs);
  const allTemperamentos = useSelector((state)=> state.listTemperaments);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleFilterTemp = (evento)=>{
    dispatch(getDogsByTemp(evento.target.value))
  }
  const handleFilterDB = (evento) =>{
    if(evento.target.value==='api'){
      dispatch(getDogsbyParam('api'))
    }else if(evento.target.value==='db'){
      dispatch(getDogsbyParam('db'))
    } else{
      dispatch(getDogs());
    }
  }

  const handleOrder = (evento)=> {
    dispatch(orderByName(evento.target.value))
  }

  const handleOrderW = (evento)=>{
    dispatch(orderByWeight(evento.target.value));
  }

  useEffect(()=>{
    dispatch(getDogs());
    dispatch(getTemps());
    return () =>{
      dispatch(clearState());
    }
  },[dispatch])

  useEffect(()=>{

  },[allDogs,allTemperamentos])

  return (
    <div className={style.Home}>
        <div className={style.superior} style={allDogs.length===0 ? {height:'150px'}: null}>
          {
            allDogs.length === 0 ? 
              <h2>No hay razas que mostrar</h2>
            : null
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
              <option key="default" value="default"> default </option>
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
            allDogs={allDogs.length}
            pagination={pagination}
            currentPage={currentPage}
          />
      </div>
      <div className={style.content}>
        <div className={style.divCards}>
        {
          allDogs.length !== 0? <Cards dogs={currentDogs}/> : null
        }
        </div>
      </div>
      <div className={style.footer}>    
        <Pagination
              dogsPerPage={dogsPerPage}
              allDogs={allDogs.length}
              pagination={pagination}
              currentPage={currentPage}
          />
      </div>
    </div> 
  );
}

export default Home;