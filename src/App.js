import './App.css';
import About from './components/About/About';
import CreateDog from './components/Form/Form';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Landing from './components/Landing/LPage';
import NavBar from './components/NavBar/NavBar';
import Searches from './components/Searches/Searches';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';


function App() {
  const [ access, setAccess] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const login = async (userData)=> {
    try{
    const { password } = userData;
    const URL = '/dogs/login';
    const query = `?&password=${password}` 
    const { data } = await axios(URL + query);
    const { access } = data;

    setAccess( data );
    access && navigate('/home');
    }catch(error){
      return {
          error: error.message,
      }
    }
  }

  const logout = ()=>{
    setAccess(false);
    navigate('/');
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);  
    if(pathname.includes('*') && !access)
      navigate('/')
  }, [access, pathname, navigate, ]);

  return (
    <div className="App">
      {
        (access &&  !(pathname.includes('/404')) )
        && ( <NavBar logout={logout} />)
      }
      <Routes>
        {/* Ruta de inicio (Landing Page) */}
        <Route path='/' element={!access ? <Landing login={login} /> :<Navigate to='/home'/> } />
        
        {/* Ruta de la página principal */}
        <Route path='/home' element={access ? <Home /> : <Navigate to='/' />}/>
        
        {/* Ruta de la página de búsquedas*/}
        <Route path='/searches' element={access ? <Searches /> : <Navigate to='/' />}/>

        {/* Ruta de la página "Acerca de" */}
        <Route path='/about' element={access ? <About /> : <Navigate to='/' />} />
        
        {/* Ruta de formulario para la creación de tarjeta */}
        <Route path="/create" element={ access? <CreateDog />: <Navigate to='/'/> } />
        
        {/* Ruta de Detail page */}
        <Route path='/detail/:id' element={access ? <Detail />: <Navigate to='/' />} />
        
        {/* Ruta para la página 404 */}
        <Route path='/404' element={<Error />} />
        <Route path='*' element= {<Navigate to='/404' />} />
      
      </Routes>
    </div>
  );
}

export default App;
