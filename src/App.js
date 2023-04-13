
import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App (){
    return(
      <div className= "App">
        <NavBar/>
        <ItemListContainer greeting={'Gracias por entrar a mi pagina.'}/>
      </div>
  );
}
export default App;
