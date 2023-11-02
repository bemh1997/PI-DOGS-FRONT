import axios from 'axios';

export const LOGIN = 'LOGIN';
export const GET_DOGS = 'GET_DOGS';
export const GET_DOGS_SEARCH = 'GET_DOGS_SEARCH';
export const FILTER_API_DB = 'FILTER_API_DB';
export const FILTER_API_DB_S = 'FILTER_API_DB_S';
export const GET_DOGS_P = 'GET_DOGS_P';
export const GET_DOG_BY_ID = 'GET_DOG_BY_ID';
export const GET_TEMPS = 'GET_TEMPS';
export const POST_DOG = 'POST_DOG'
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT'
export const CLEAR_STATE = 'CLEAR_STATE';

export const login = (password) => async (dispatch) => {
  try{

    const URL = '/dogs/login';
    const query = `?password=${password}` 
    const { data } = await axios(URL + query);
    const { access } = data;

    dispatch({
      type: LOGIN,
      payload: access,
    })

  }catch(error){
    alert("Contraseña incorrecta");
  }
};

export const getDogs = () => async (dispatch) => {
  try {
    const response = await axios.get('/dogs/raza/all');
    dispatch({
      type: GET_DOGS,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getDogsbyParamc = (param)=> async (dispatch)=>{
  try {
    var response 
    switch (param) {
      case 'api':
        response = await axios.get('/dogs/raza/api');   
        break;
      case 'db':
        response = await axios.get('/dogs/raza/db');
        break;
      default:
        response = await axios.get('/dogs/raza/all');
        break;
    }
    dispatch({
      type: GET_DOGS_P,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
}

export const getDogById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/dogs/raza/search/${id}`);
    dispatch({
      type: GET_DOG_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    alert("No existe un perro con esta ID");
  }
};

export const getTemps = () => async(dispatch)=>{
  try {
    const response = await axios.get('/dogs/temp/all');
    dispatch({
      type: GET_TEMPS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
}; 

export const postDog = (state) => async()=>{
  try {
    console.log('Creando raza...-')
    await axios.post("/dogs/raza/", state);    
    alert("Raza creada exitosamente");
    }catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.error}`);
      } else {
        alert("La raza no se creó, hubo un error");
      }
    }
};

export function getDogsbyParam(payload) {
  return {
    type: 'FILTER_API_DB',
    payload
  }
}

export function getDogsbyParamS(payload) {
  return {
    type: 'FILTER_API_DB_S',
    payload
  }
}

export function getDogsByTemp(payload){
  return{
    type: 'FILTER_BY_TEMP',
    payload
  }
}

export function orderByName(payload) {
  return {
    type: 'ORDER_BY_NAME',
    payload
  }
}

export function orderByWeight(payload) {
  return {
    type: 'ORDER_BY_WEIGHT',
    payload
  }
}

export const search = (arg) => async (dispatch) => {
  try {
    function esUUID(string) {
      const uuidRegex = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;
      return uuidRegex.test(string);
    }

    function esCadenaDeEnteros(string) {
      return /^\d+$/.test(string);
    }

    var endpoint;
    if (esUUID(arg) || esCadenaDeEnteros(arg)){
      endpoint = `/dogs/raza/search/${arg}`;
      const response = await axios.get(endpoint);
      const payload = [response.data];
      dispatch({
        type: GET_DOGS_SEARCH,
        payload,
      });

    } else {
      endpoint = `/dogs/raza/search/?nombre=${arg}`;
      const response = await axios.get(endpoint);
      dispatch({
        type: GET_DOGS_SEARCH,
        payload: response.data,
      });
    } 
    

  } catch (error) {
    alert(error.message);
  }
};


export const clearState = ()=>(dispatch)=>{
  try {
    dispatch({
      type: CLEAR_STATE,
      payload: [],
      payloadobj: {},
    });
  } catch (error) {
    console.log(error);
  }
}; 
