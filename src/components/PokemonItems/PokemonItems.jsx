import React, { useEffect, useState } from 'react'
import { GetPokemonItem } from '../../api'
import {Link} from 'react-router-dom';
import "./PokemonItems.css";


export default function PokemonItems() {
    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const dataItem = await GetPokemonItem();
            console.log(dataItem);
            setItems(dataItem);
            setCargando(false);
        }catch (error) {
            console.error('HUBO UN POKE-ERROR', error);
        }//fin try&catch
      };// fin fetchData

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
          <h5 className='my-3'>Cargando Items...</h5>
        </div>
      ) : (
        <div style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/white-abstract-background_23-2148833155.jpg?w=1380&t=st=1694371283~exp=1694371883~hmac=0af9baaa688597a169e279967570e44f133e1e1f08c219531390eb75e007875f)' }}>
          <div className='container my-4'>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3'>
                {items.map((item) => (
                  <div key={item.id} > 
                    <Link to={`/detalle-item/${item.id}`} className='text-decoration-none'>
                      <div className= 'card card-items py-3 px-3 card-hover-item bg-item'> {/* Class personalizada segun tipo de pokemon */}
                        <div className="row">
                          <div className="col-4 circle-back-item "> {/* Columna -> Imagen */}
                            <img className="img-fluid" src={item.sprites.default} alt={item.name} width={'100px'}/> {/* Sprites de los pokemons */}
                          </div>
                          <div className="col-8 z-index-item"> {/* Columna -> Nombre/Tipo*/}
                            <h4 className="text-capitalize fs-1 fw-blod opacity-25 badge rounded-pill bg-secondary text-white"># {item.id}</h4> {/* Mostrar Id del Pokemon */}
                              <div className="text-center">
                                <h3 className="badge rounded-pill bg-light text-dark text-capitalize mx-1 fs-5 ">{item.name}</h3> {/* Mostrar Nombre del Pokemon */}
                              </div> {/* Fin-div text-center */}
                          </div> {/* Fin-div col-name */}          
                        </div> {/* Fin-div row */}
                      </div> {/* Fin-div onclick */}
                    </Link>     
                  </div>                
                ))} {/* Fin-map */}
            </div>
          </div>
        </div>      
        )}
    </>
  )
}
