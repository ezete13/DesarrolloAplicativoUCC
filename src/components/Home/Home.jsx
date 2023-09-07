import React, {useState, useEffect} from 'react'
import { GetPokemons } from '../../api'
import PokemonCard from '../PokemonCard/PokemonCard';

export default function Home() {
 const [pokemons, setPokemons] = useState([]);
 const [cargando, setCargando] = useState(true);

useEffect(() => {
    const fetchData = async () => {
    try {
        const data = await GetPokemons();
        console.log(data);
        setPokemons(data);
        setCargando(false);
    }catch (error) {
        console.error('HUBO UN POKE-ERROR', error);
    }
  };
  fetchData();
}, []);

  return (
    <>
      {cargando ?(  
        <div className='d-flex flex-column align-items-center'>
          <img className='my-3' src="https://i.gifer.com/origin/76/76dfca2a58c4dff5c9827b527132bda8.gif" alt="" width='70px' />
          <div className='spinner-border text-warning' role='status'>
            <span className='sr-only'></span>
          </div>
          <h5 className='my-3'>Cargando Pokédex...</h5>
        </div>
      ) : (
        <div style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/white-abstract-background_23-2148833155.jpg?w=1380&t=st=1694371283~exp=1694371883~hmac=0af9baaa688597a169e279967570e44f133e1e1f08c219531390eb75e007875f)' }}>
          <div className='container my-4'>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3'>
              {pokemons.map((pokemon) => (
                <div key={pokemon.id} className='col'>
                  <div className='card mb-4 card-hover'> {/* Agregar la clase card-hover */}
                    <PokemonCard Data={pokemon} />
                  </div>
                </div>
              ))} {/* Fin-map */}
            </div>
          </div>
        </div>            

      )} 
      
    </>
  )/* Fin return */
}

