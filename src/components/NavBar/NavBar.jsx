import style from './NavBar.module.css';
import { Link } from 'react-router-dom'; //, useLocation
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/dogsapp.png';

export default function NavBar(props){
  const handleLogOut = () => {
    props.logout();
  } 

  return(    
    <div className={style.nav}>
      <div className={style.logo}>
        <Link to="/home" className={style.divImg}>
          <img className={style.img} src={logo} alt="Logo-dogs-app" />
        </Link>
      </div>

      <div className={style.searchBar}> 
        <SearchBar />
      </div>

      <div className={style.navButtons}>
        <Link to="/create">
          <button className={style.button}>CREAR TARJETA</button>
        </Link>
        
        <Link to="/about" >
          <button className={style.button}>ACERCA DE MI</button>
        </Link>
        
        <Link to='/'>
          <button className={style.button} onClick={handleLogOut}>SALIR</button>
        </Link>
      </div>
    </div>
  );  
}
