
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import PokemonCardDetalle from './components/PokemonCardDetalle/PokemonCardDetalle';
import PokemonItems from './components/PokemonItems/PokemonItems';

function RoutesApp() {
  return (
    <>
    <Routes> 
        <Route path='/' element = {<Login/>} />       
        <Route path='/home' element = {<><Navbar/> <Home/></>} />
        <Route path='/detalle/:pokemonId' element = {<><Navbar/> <PokemonCardDetalle/></>}/>
        <Route path='/items' element = {<><Navbar/> <PokemonItems/></>}/>      
    </Routes>
    </>
  );
}

function RouterWrapper(){
	return(
	<BrowserRouter>
		<RoutesApp/>
	</BrowserRouter>
  
	 )
 }
 
 export default RouterWrapper;
