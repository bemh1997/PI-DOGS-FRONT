import {
  GET_DOGS,
  GET_DOGS_SEARCH,
  FILTER_API_DB,
  FILTER_API_DB_S,
  GET_DOG_BY_ID,
  GET_TEMPS,
  ORDER_BY_NAME,
  CLEAR_STATE, 
  POST_DOG,
  ORDER_BY_WEIGHT,
  FILTER_BY_TEMP
} from "./actions";

const initialState = {
  listDogs: [],
  backupAllDogs:[],
  searches:[],
  backupSearches:[],
  listTemperaments:[],
  dog:{},
};

const reducer = ( state = initialState, action)=>{
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        listDogs: action.payload,
        backupAllDogs: action.payload,
      };

    case GET_DOGS_SEARCH:
      return {
        ...state,
        searches: action.payload,
        backupSearches: action.payload,
      };

    case FILTER_API_DB:
      const createdFilter = action.payload === 'api' ?
      state.backupAllDogs.filter(dog => dog.creadoEnDB === false) :
      state.backupAllDogs.filter(dog => dog.creadoEnDB === true)

      return {
        ...state,
        listDogs: createdFilter,
      }
    
      case FILTER_API_DB_S:
        const createdFilterS = action.payload === 'todos' ? [...state.backupSearches] : action.payload==='api'?
        state.backupSearches.filter(dog => dog.creadoEnDB === false) :
        state.backupSearches.filter(dog => dog.creadoEnDB === true)

        return {
          ...state,
          searches: createdFilterS,
        }
    
      case FILTER_BY_TEMP:
        const createdFilterTemp = action.payload==='default'? [...state.backupAllDogs]
        :state.backupAllDogs.filter(dog =>
          dog.temperamentos.includes(action.payload)
        );
        const createdFilterTempS =  action.payload==='default'? [...state.backupSearches]
        :state.backupSearches.filter(dog=>
          dog.temperamentos.includes(action.payload)
        );
        return {
          ...state,
          listDogs: createdFilterTemp,
          searches: createdFilterTempS
        };

    case GET_DOG_BY_ID:
      return {
        ...state,
        dog: action.payload,
      };

    case GET_TEMPS:
      return{
        ...state,
        listTemperaments: action.payload,
      }
    
    case ORDER_BY_NAME:
      const sortedArrByName = action.payload === 'asc' ?
        [...state.listDogs].sort(function (a, b) {
          if (a.nombre > b.nombre) { return 1 }
          if (b.nombre > a.nombre) { return -1 }
          return 0;
        }) :
        [...state.listDogs].sort(function (a, b) {
          if (a.nombre > b.nombre) { return -1; }
          if (b.nombre > a.nombre) { return 1; }
          return 0;
        });
    
      const sortedArrByNameSearches = action.payload === 'asc' ?
        [...state.searches].sort(function (a, b) {
          if (a.nombre > b.nombre) { return 1 }
          if (b.nombre > a.nombre) { return -1 }
          return 0;
        }) :
        [...state.searches].sort(function (a, b) {
          if (a.nombre > b.nombre) { return -1; }
          if (b.nombre > a.nombre) { return 1; }
          return 0;
        });
    
      return {
        ...state,
        listDogs: sortedArrByName,
        searches: sortedArrByNameSearches, // Ordena también el arreglo searches
      }
      
    case ORDER_BY_WEIGHT:
      const sortedWeight = [...state.listDogs].sort((a, b) => {
        const pesoMinA = parseInt(a.peso.split(' - ')[0]);
        const pesoMinB = parseInt(b.peso.split(' - ')[0]);
    
        if (action.payload === "asc") {
          return pesoMinA - pesoMinB;
        } else {
          return pesoMinB - pesoMinA;
        }
      });
      
      const sortedWeightSearches = [...state.searches].sort((a, b) => {
        const pesoMinA = parseInt(a.peso.split(' - ')[0]);
        const pesoMinB = parseInt(b.peso.split(' - ')[0]);
    
        if (action.payload === "asc") {
          return pesoMinA - pesoMinB;
        } else {
          return pesoMinB - pesoMinA;
        }
      });
      
      return {
        ...state,
        listDogs: sortedWeight,
        searches: sortedWeightSearches, // Ordena también el arreglo searches
      };
            

    case CLEAR_STATE:
      return  {
        listDogs: action.payload,
        backupAllDogs: action.payload,
        searches: action.payload,
        backupSearches: action.payload,
        listTemperaments: action.payload,
        dog: action.payloadobj,
      }
    
    case POST_DOG:
      return{
          ...state,
      };

    default:
      return{
        ...state,
      }
  }
}

export default reducer;