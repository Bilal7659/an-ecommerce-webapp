import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Cart from './Component/Cart/Index';
import Navbar from './Component/Header/Nav';
import MultiProducts from './Component/Product/MultiProduct';
import AboutPage from './Component/About/AboutPage';
import ContactPage from './Component/Contact/ContactPage';
import BlogPage from './Component/Blogs/BlogPage';
function App() {

  return (
  
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/cart'element={<Cart />}></Route>
        <Route path='/product'element={<MultiProducts />}></Route>
        <Route path='/about'element={<AboutPage/>}></Route>
        <Route path='/contact'element={<ContactPage/>}></Route>
        <Route path='/blog'element={<BlogPage/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
