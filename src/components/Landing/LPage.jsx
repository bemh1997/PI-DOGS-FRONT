import style from './LPage.module.css';
import React from 'react';
import image from '../../assets/puppies.jpg';
import validate from './validation';

export default function Form({ login }) {
  const [ userData, setUserData ] = React.useState({
    password: '',
  });

  const [ errors, setErrors] = React.useState({
    password: '',
  })

  const handleChange = (evento) =>{
    setUserData({
      ...userData,
      [evento.target.name] : evento.target.value,
    });

    setErrors(validate({
      ...userData, 
      [evento.target.name] : evento.target.value
    }));
  }
  const handleLogin = (evento) => {
    evento.preventDefault();
    // Si no hay errores, despachamos la información al estado global
    if (!Object.values(errors).length) {
      login(userData);
      // Limpiamos los campos del formulario después de despachar la información
      setUserData({
        password: '',
      });
      setErrors({
        password: '',
      })
    }
  };

  return (
    <>
      <div className={style.container}>
        <img className={style.img} src={image} alt="pic" />
        <div className={style.otherDiv}>
          <p className={style.text}>
            Bienvenidos a mi pagina web sobre perros,
            <br />
            donde podrás consultar distintas razas de perros.

            Contactame via <a href="https://www.linkedin.com/in/bernal-mh/" style={{textDecoration:'none'}}>linkedin</a><br />
            para acceder al sitio.
          </p>
          <div className={divPassword}>
          <div className={style.inputContainer}>
            <input 
              name='password'
              type="password" 
              className={style.input}
              placeholder='Password'
              value={userData.password}
              onChange={handleChange}
            /><br />
            <span className={style.span}>Contraseña para acceder al sitio*</span>
          </div><br />
          {errors.password && <span className={style.error}>{errors.password}</span>}
          </div><br />
          <button className={style.submitL} onClick={handleLogin}>
            Entrar
          </button>
        </div>
      </div>
    </>
  );
}
