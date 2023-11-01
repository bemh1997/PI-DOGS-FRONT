import style from './Card.module.css'
import { Link } from "react-router-dom";

function Card({key, id, nombre, temperamentos, imagen, peso}) {

   return (
         <div key={key} className={style.divCard}>
            <Link to={`/detail/${id}`}>
               {/* Imagen */}
               <div className={style.divImg}>
                  <img className={style.img} src={imagen} alt={nombre} align='bottom' />
               </div>
               <div className={style.divInfo}> 
                  {/* Nombre */}
                  <h2>{nombre}</h2>
                  {/* Temperamentos */}
                  <span className={style.Info}>Temperamentos: </span>
                  {
                     temperamentos?
                     temperamentos.map((temperamento)=>(<span className={style.Info2}>{temperamento}</span>)) 
                     : <span className={style.warning}>Sin temperamentos registrados.</span>
                  }
                  
                  {/* Peso */}
                  <span className={style.Info}>Peso: </span>
                  <span className={style.Info2}>{peso} kg</span>
               </div>
         </Link>
      </div>
   );
}


export default Card;