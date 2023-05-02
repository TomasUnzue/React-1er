
import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App (){
    return(
      <div className= "App">
        <NavBar/>
        <ItemListContainer greeting={'Bienvenidos'}/>
        <ItemCount/>
        <ItemDetailContainer />
      </div>
  );
}
export default App;
