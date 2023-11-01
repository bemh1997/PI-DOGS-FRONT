import { 
   SearchContainer, 
   SearchInput,
   SearchIcon,
   SearchIconContainer
} from './SearchBar.styles';

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { search } from '../../redux/actions';

function SearchBar({onSearch}) {
   const [string, setString] = useState('');
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const handleChange = (evento) => {
      setString(evento.target.value);
   }

   const handleSearch = () => {
      navigate('/searches');
      onSearch(string);
      setString('');
   }

   useEffect(() => {
      if (pathname.includes('/home')) {
         setString('');
      }
   }, [pathname]);

   return (
      <SearchContainer>
         <SearchInput 
            type='text' 
            placeholder="Buscar raza..." 
            value={string} // Aquí establecemos el valor del input con el estado 'id'
            onChange={handleChange}
         />
         <SearchIconContainer>
            <SearchIcon onClick={handleSearch} />
         </SearchIconContainer>
      </SearchContainer>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      onSearch: (string) => dispatch(search(string))
   }
}

export default connect(null, mapDispatchToProps)(SearchBar);