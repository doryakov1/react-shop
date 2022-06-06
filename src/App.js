import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import Menu from './Components/Menu';
import { useState, useEffect } from 'react';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
function App() {
  const [loading, setLoading] = useState('');
  const [totalAmount , setTotalAmount]= useState(0);
  const [cart , setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setLoading(<span class="loader"></span>);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => { setProducts(data)})
      .then(()=>{setLoading('')})
    // .then(json=>console.log(json))
    // console.log(products)
  }, [flag]);

  const addProductToCart =(image,title , price)=>{
    let product={
      image:image,
      title:title,
      price:price
    }
    let sum = totalAmount;
    sum+=price;
    setTotalAmount(sum);
    // console.log(totalAmount);
    setCart([...cart,product]);
  }

  const removeProductFromCart = (idx ,price)=>{
    let sum = totalAmount;
    sum-=price;
    setTotalAmount(sum);
    let copyCart=[...cart];
    copyCart.splice(idx,1);
  setCart([...copyCart]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Menu cart={cart}/>
        <Routes>
          <Route path='/react-shop' element={<HomePage products={products} addProductToCart={addProductToCart} loading={loading} />} />
          {products.map((product)=>{
            return (<Route path={'/react-shop/product'+product.id} element={<ProductDetails title={product.title} image={product.image} price={product.price}
            category={product.category} description={product.description} addProductToCart={addProductToCart} />} />)
          })};
          <Route path='/react-shop/cart' element={<Cart cart={cart} setCart={setCart}  removeProductFromCart={removeProductFromCart} totalAmount={totalAmount} setTotalAmount={setTotalAmount}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
