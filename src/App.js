
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { Product } from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import { Shop } from './Pages/Shop';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { CreateAccount } from './Pages/CreateAccount';
import { Profile } from './Components/Profile/Profile';
import { Checkout } from './Components/Checkout/Checkout';
import { OrderPlaced } from './Components/OrderPlaced/OrderPlaced';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      {/* setting up the routes */}
      <Routes>
        
        <Route path='/' element={<Shop/>} index/>
        <Route path='/createAccount' element={<CreateAccount/>}/>
        
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<LoginSignup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/orderplaced' element={<OrderPlaced/>}/>
        
      
        
      </Routes>
    

      </BrowserRouter>
    </div>
  );
}

export default App;
