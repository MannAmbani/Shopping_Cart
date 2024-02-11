
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import { Shop } from './Pages/Shop';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { CreateAccount } from './Pages/CreateAccount';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      {/* setting up the routes */}
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/createAccount' element={<CreateAccount/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<LoginSignup/>}/>
        <Route path='/login' element={<Login/>}/>
      

      </Routes>
    

      </BrowserRouter>
    </div>
  );
}

export default App;
