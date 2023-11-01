import style from './Form.module.css'
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearState, getTemps, postDog } from '../../redux/actions';
import validate from './validation';

const Form = () =>{
  const dispatch = useDispatch();
  const allTemperamentos = useSelector((state)=>state.listTemperaments);
  const navigate = useNavigate();


  const [state, setState] = useState({
    imagen:"", 
    nombre:"", 
    alturaMin:'',
    alturaMax:'', 
    pesoMin:'', 
    pesoMax:'', 
    esperanzaMin:'',
    esperanzaMax:'', 
    temperamentos:[]
  });

  const [ errors, setErrors] = useState({
    imagen:"", 
    nombre:"", 
    alturaMin:'',
    alturaMax:'', 
    pesoMin:'', 
    pesoMax:'', 
    esperanzaMin:'',
    esperanzaMax:'', 
    temperamentos:[],
  })

  const handleChange = (e) => {
    if( e.target.name === 'temperamentos'){
      if(state.temperamentos.includes(e.target.value)) return;
      setState({
        ...state,
        [e.target.name]: [...state[e.target.name],e.target.value],
      })
    } else{
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }

    setErrors(validate({
      ...state, 
      [e.target.name] : e.target.value
    }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    dispatch(postDog(state));
    if (!Object.values(errors).length) {
      navigate('/home'); 
      setState({
        imagen: "", 
        nombre: "", 
        alturaMin: '',
        alturaMax: '', 
        pesoMin: '', 
        pesoMax: '', 
        esperanzaMin: '',
        esperanzaMax: '', 
        temperamentos: []
      });
      setErrors({
        imagen: "", 
        nombre: "", 
        alturaMin: '',
        alturaMax: '', 
        pesoMin: '', 
        pesoMax: '', 
        esperanzaMin: '',
        esperanzaMax: '', 
        temperamentos: []
      });
    }
  };

  const onClose = (temperamento)=>{  
    // Create a new array without the specified temperament
    const updatedTemperamentos = state.temperamentos.filter(
      (temp) => temp !== temperamento
    );

    // Update the state with the new array
    setState({
      ...state,
      temperamentos: updatedTemperamentos,
    });
  }

  useEffect(()=>{
    dispatch(getTemps());
    return ()=>{
      dispatch(clearState());
    }
  },[dispatch]);

  return (
    <div className={style.div}>
      <Link className={style.divReturnBack} to='/home'>
        <span>Regresar a Inicio</span>
        <img className={style.arrow} src={arrow} alt="arrow" />
      </Link> 
      <div className={style.divForm}>
        <div className={style.buttons}>
          <Link className={style.xButton} to='/home'>
            <span>X</span>
          </Link> 
        </div>
        <h1> Agregar perro en la base de datos local  </h1>
        <span > Nota: Los campos con * son obligatorios  </span>
        <br /><br />
        <form onSubmit={handleSubmit} className={style.form}>
          {/* Nombre de la raza */}
          <div>
            <h2>Nombre </h2>
            <div className={style.inputContainer}>
              <input
                type="text"
                name="nombre"
                placeholder="Indica el nombre de la raza..." 
                value={state.nombre}
                onChange={handleChange}
                className={style.input}
                required
              />
              <span className={style.span}>Nombre de la raza *</span>
            </div> <br />
            {errors.nombre && <span className={style.error}>{errors.nombre}</span>}
          </div><br />

          {/* Altura */}
          <div>
          <h2>Altura</h2 >
            <div  className={style.inputContainer}>
              <input
                type="number"
                name="alturaMin"
                placeholder="En centímetros"
                value={state.alturaMin}
                onChange={handleChange}
                step="0.1"
                className={style.input}
                min="1"
                required
              />
              <span className={style.span}>Altura mínima *</span>
            </div><br /><br />
            <div  className={style.inputContainer}>
              <input
                type="number"
                name="alturaMax"
                placeholder="En centímetros"
                onChange={handleChange}
                value={state.alturaMax}
                step="0.1"
                className={style.input}
                min="1"
                required
              />
              <span className={style.span}>Altura máxima *</span>
            </div><br />
            {errors.alturaMin && <span className={style.error}>{errors.alturaMin}</span>}
            {errors.alturaMax && <span className={style.error}>{errors.alturaMax}</span>}
          </div><br />

          {/* Peso */}
          <div>
            <h2>Peso</h2 >
            <div  className={style.inputContainer}>
              <input
                type="number"
                name="pesoMin"
                placeholder="En kilogramos"
                onChange={handleChange}
                value={state.pesoMin}
                step="0.1"
                className={style.input}
                required
              />
              <span className={style.span}>Peso mínimo</span>
            </div><br /><br />
            <div  className={style.inputContainer}>
              <input
                type="number"
                name="pesoMax"
                placeholder="En kilogramos"
                onChange={handleChange}
                value={state.pesoMax}
                step="0.1"
                className={style.input}
                required
              />
              <span className={style.span}>Peso máximo</span>
            </div><br /><br />
            {errors.pesoMin && <span className={style.error}>{errors.pesoMin}</span>}
            {errors.pesoMax && <span className={style.error}>{errors.pesoMax}</span>}
          </div><br />

          {/* Años de vida */}
          <div>
            <h2>Años de vida</h2>
            <div  className={style.inputContainer}>
              <input
                type="number"
                name="esperanzaMin"
                placeholder="Años humanos"
                onChange={handleChange}
                value={state.esperanzaMin}
                step="1"
                className={style.input}
                min="1"
                required
              />
              <span className={style.spanG}>Esperanza de vida mínima*</span>
            </div><br /><br />
            <div  className={style.inputContainer}>
              <input
                type="number"
                name="esperanzaMax"
                placeholder="Años humanos"
                onChange={handleChange}
                value={state.esperanzaMax}
                step="1"
                className={style.input}
                min="0"
                required
              />
              <span className={style.spanG}>Esperanza de vida máxima*</span>
            </div>
            {errors.esperanzaMin && <span className={style.error}>{errors.esperanzaMin}</span>}
            {errors.esperanzaMax && <span className={style.error}>{errors.esperanzaMax}</span>}
          </div><br />
          {/* Temperamentos */}
          <div>
            <h2>Temperamentos</h2 >
              <div className={style.selectContainer}>
                <select
                className={style.select}
                name="temperamentos"
                id="temperamentos"
                onChange={handleChange}
                required
                
                >
                <option value="" disabled selected>
                  -- Seleccione temperamentos --
                </option>
                {allTemperamentos?.map((temperamento) => (
                  <option key={temperamento.id} value={temperamento.nombre}>
                    {temperamento.nombre}
                  </option>
                ))
                }
              </select>
              
              <span className={style.span}>Temperamentos *</span>
              </div><br />
              <div style={{display:  'flex', flexWrap: 'wrap', maxWidth: '392px'}}>
              {state.temperamentos?.map((temperamento) => (
                <div className={style.containerTemps}>
                  <span key={temperamento}>
                    {temperamento}
                  </span>
                  <span className={style.close} onClick={() => onClose(temperamento)}>X</span>
                </div>
              ))}
              </div>
          </div><br />

          {/* Imagen */}
          <h2>Link de Imagen</h2>
          <div  className={style.inputContainer}>
            <input
              type="text"
              name="imagen"
              placeholder="Indica el vínculo/enlace de la imagen..." 
              onChange={handleChange}
              value={state.imagen}
              className={style.input}
            />
            <span className={style.span}>Imagen (Opcional)</span>
          </div>
          <br /><br />
        <div style={{textAlign:'center'}} >
          <button type="submit" className={style.submit}>Agregar Raza</button>
        </div>
      </form>     
      </div>
    </div>
  );
}

export default Form;