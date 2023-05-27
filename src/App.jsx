import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from './contex/CartContext'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgHY0UKWL_Whku1kDEhjW4mdPlKU4bqBg",
  authDomain: "mi-app-e99d7.firebaseapp.com",
  projectId: "mi-app-e99d7",
  storageBucket: "mi-app-e99d7.appspot.com",
  messagingSenderId: "134222649495",
  appId: "1:134222649495:web:7dd7d53eeddc4283dd71d2",
  measurementId: "G-9XYKCZ9ZCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App (){
    return(
      <div className= "App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/categoryId' element={<ItemListContainer/>}/>
            <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={ItemListContainer}/>
          </Routes>
          <CartProvider/>
        </BrowserRouter>
      </div>
  );
}
export default App;
