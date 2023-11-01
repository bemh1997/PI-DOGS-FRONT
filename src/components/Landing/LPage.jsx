import style from './LPage.module.css';
import React from 'react';
import image from '../../assets/puppies.jpg';

export default function Form({ login }) {
  const handleLogin = () => {
    login(); // Llama a la función "login" pasada como prop
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
          </p>
          <button className={style.submitL} onClick={handleLogin}>
            Entrar
          </button>
        </div>
      </div>
    </>
  );
}
