import React, { useEffect, useState } from "react";
import { GetPokemonDetalle } from "../../api";
import { useParams } from "react-router-dom";
import "./PokemonCardDetalle.css";

export default function PokemonCardDetalle() {
  const { pokemonId } = useParams();
  const [pokemonDetalle, setPokemonDetalle] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetPokemonDetalle(pokemonId);
        console.log(data);
        setPokemonDetalle(data);
        setCargando(false);
      } catch (error) {
        console.error("HUBO UN POKE-ERROR", error);
      } //fin try&catch
    }; // fin fetchData
    fetchData();
  }, [pokemonId]);

  return (
    <>
      {cargando ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only"></span>
          </div>
          <h5 className="mx-4">Cargando Pokémon...</h5>
        </div>
      ) : (
            <div className={`text-light bg-detalle-${pokemonDetalle.types[0].type.name}` }> 
              <div className="row py-3">            
                <div className="col-1 col-md-6 bg-effect">
                  {/* SPRITE */}
                  <img className="img-fluid" src={pokemonDetalle.sprites.other["official-artwork"].front_default} alt={pokemonDetalle.name}/>
                  {/* SPRITE */}
                </div>{/* Fin-col-1 */}
                <div className="col-1 col-md-6">
                <div className="d-flex justify-content-center">
                  {/* NAME */}
                  <h1 className="text-uppercase text py-4 fw-bold">{pokemonDetalle.name}</h1>
                  {/* NAME */}
              
                  {/* TYPE */}
                  <div className="mb-3 bg-transparent px-3 py-3 text-white" style={{ maxWidth: "18rem" }}>
                    {pokemonDetalle.types.map(
                      (types, index /* Mostrar Tipo de Pokemon */) => (
                        <h6><span className="badge rounded-pill bg-light text-dark text-capitalize mx-1"key={index}>
                            {types.type.name}
                          </span>
                        </h6>))}
                  </div>
                  {/* FIN TYPE */}

                  {/* DIMENSIONES */}
                  <div className="mb-3 bg-transparent px-3 py-3 text-white" style={{ maxWidth: "18rem" }}>
                    <h3><span className="badge bg-light text-dark">Dimensions</span></h3>              
                      <li>Base experience: {pokemonDetalle.base_experience}</li>
                      <li>Height: {pokemonDetalle.height} cm</li>
                      <li>Weight: {pokemonDetalle.weight} cm</li>
                  </div>               
                  {/* FIN DIMENSIONES */}

                  {/* HABILIDADES */}
                  <div className=" mb-3 bg-transparent px-3 py-3 text-white" style={{ maxWidth: "18rem" }}>
                    <h3><span class="badge bg-light text-dark">Ability</span></h3>
                    <div>
                      {pokemonDetalle.abilities
                        .filter((ability) => !ability.is_hidden) // Filtra las habilidades donde is_hidden es falso
                        .map((ability, index) => (
                          <li key={index}>
                            <b>Ability: </b> {ability.ability.name}
                          </li>
                        ))}
                    </div>
                    <div>
                      {pokemonDetalle.abilities
                        .filter((ability) => ability.is_hidden) // Filtra las habilidades donde is_hidden es Verdadero
                        .map((ability, index) => (
                          <li key={index}>
                            <b>Hidden Ability: </b> {ability.ability.name}
                          </li>
                        ))}
                    </div>
                  </div>
                  {/* FIN HABILIDADES */}
                </div> {/* Fin-col-2 */}
</div>
              </div> {/* Fin-row */}
            </div> 
      )}{/* Fin-cargando */}
    </>
  );/* Fin-return */
}/* Fin-funcion */
