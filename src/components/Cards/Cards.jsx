import { useState, useEffect } from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import Loading from "../Loading/Loading";

function Cards({dogs}) {
  const [loading, setLoading] = useState(true); // Estado de carga
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    if(dogs.length !==0 ){
      setCards(dogs);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    
  }, [dogs,cards]);

  return (
    <>
      {
        cards ? null : <h1 className={style.warning}> No se encontró ningún perro</h1>
      }
      {
        loading ? ( 
          <Loading />
        ) : (
          <div className={style.sContainer}>
            {cards?.map((dog) => (
              <Card
                key={dog.id}
                id={dog.id}
                nombre={dog.nombre}
                temperamentos={dog.temperamentos}
                imagen={dog.imagen}
                peso={dog.peso}
              />
            ))}
          
          </div>
        )
      }
    </>
  );
}

export default Cards;
