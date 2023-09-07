import React, {} from "react";
import {Link} from 'react-router-dom';
import "./PokemonCard.css";



export default function PokemonCard({ Data }) {
  return (
    <>
    <Link to={`/detalle/${Data.id}`} className='text-decoration-none'>
      <div className={`card py-3 px-3 card-hover bg-${Data.types[0].type.name}`}> {/* Class personalizada segun tipo de pokemon */}
        <div className="row">
          <div className="col-6 circle-back"> {/* Columna -> Imagen */}
            <img className="img-fluid" src={Data.sprites.other["official-artwork"].front_default} alt={Data.name}/> {/* Sprites de los pokemons */}
          </div>
          <div className="col-6 z-index text-light"> {/* Columna -> Nombre/Tipo*/}
            <h4 className="text-capitalize fs-1 text-end opacity-50 fw-blod"># {Data.id}</h4> {/* Mostrar Id del Pokemon */}
            <div className="text-center">
              <h5 className="text-uppercase fw-bold">{Data.name}</h5> {/* Mostrar Nombre del Pokemon */}
              {Data.types.map((types, index) => ( /* Mostrar Tipo de Pokemon */
                <h6><span className="badge rounded-pill bg-light text-dark text-capitalize mx-1" key={index}>
                    {types.type.name}
                    </span>
                </h6>
              ))}
            </div> {/* Fin-div text-center */}
          </div> {/* Fin-div col-name */}          
        </div> {/* Fin-div row */}
      </div> {/* Fin-div onclick */}
      </Link>     
    </>
  );
}
