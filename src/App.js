import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import React, { useEffect, useState } from "react";
import SidebarCart from "./components/SidebarCart/SidebarCart";
import ProductDetailModal from "./components/Product/ProductDetailModal/ProductDetailModal";
import MobileFooter from "./components/MobileFooter/MobileFooter";
import MenuModal from "./components/MenuModal/MenuModal";
import SearchModal from "./components/SearchModal/SearchModal";
import NotFound from "./components/Errors/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/Pages/SignIn/SignIn";
import SignUp from "./components/Pages/SignUp/SignUp";
import Contact from "./components/Pages/Contact/Contact";
import InfoModal from "./components/InfoModal/InfoModal";
import AdminModal from "./components/AdminModal/AdminModal";
import LoginArea from "./components/LoginArea/LoginArea";
import Basket from "./components/Basket/Basket";
import PopUp from "./components/PopUp/PopUp";
import ProductDetail from "./components/Pages/ProductDetail/ProductDetail";
import ContentArea from "./components/ContentArea/ContentArea";
import About from "./components/Pages/About/About";
import Faq from "./components/Pages/Faq/Faq";
import Blogs from "./components/Pages/Blogs/Blogs";
import CheckOut from "./components/Pages/CheckOut/CheckOut";
import ProductList from "./components/Pages/ProductList/ProductList";
import axios from 'axios';
import Profile from "./components/Pages/Profile/Profile";


const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const tokenFromSessionStorage = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : "";

function App() {
  const [token, setToken] = useState(tokenFromSessionStorage)

  const [selectedProduct, setSelectedProduct] = useState({
    id: "",
    title: "",
    weight: "",
    price: 0,
    origin_price: 0,
    description: "",
    image: "",
    category: "",
  });
  const [featuredProducts, setfeaturedProducts] = useState([])
  const [onSaleProducts, setOnSaleProducts] = useState([])

  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  
  const itemsSavingPrice =
    cartItems.reduce((a, c) => a + c.qty * c.origin_price, 0) - itemsPrice;

  useEffect(() => {
    window.allFuncs();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    const api_url = process.env.REACT_APP_API_URL
    axios.post(api_url + 'onSaleProducts', {companyId: process.env.REACT_APP_API_ID})
    .then((response) => {
      setfeaturedProducts(response.data.data)
      setOnSaleProducts(response.data.data)
    })
  }, [])

  const addToCart = (product, qty = 1) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + qty } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: qty }]);
    }
  };

  const updateCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      if (product.qty <= 0) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: product.qty } : x
          )
        );
      }
    }
  };

  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const deleteFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };

  const signOut = () => {
    const api_url = process.env.REACT_APP_API_URL

    axios.delete(api_url + 'logout', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((respone) => {
        if(respone.data.status === 'success'){
            sessionStorage.removeItem('token')
            setToken("")
        }
    })
  }

  return (
    <Router>
      <div className="App">
        <Basket cartItems={cartItems} itemsPrice={itemsPrice} />

        <SearchModal />
        <InfoModal />
        <MenuModal />
        <AdminModal />

        <SidebarCart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          updateCart={updateCart}
          deleteFromCart={deleteFromCart}
          itemsPrice={itemsPrice}
          itemsSavingPrice={itemsSavingPrice}
        />
        <Header cartItems={cartItems} itemsPrice={itemsPrice} token={token} signOut={signOut} />
        <div className="page-layout home-layout">
          <Sidebar />
          <ContentArea>
            <Switch>
              <Route exact path="/">
                <Home
                  trending_products={featuredProducts}
                  promoted_products={onSaleProducts}
                  setSelectedProduct={setSelectedProduct}
                  cartItems={cartItems}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  updateCart={updateCart}
                />
              </Route>

              <Route path="/signin">
                {token ?
                  <Redirect to='/' />
                :
                  <SignIn setToken={setToken}/>
                }
                
              </Route>

              <Route path="/signup">
                {token ?
                  <Redirect to='/' />
                :
                  <SignUp setToken={setToken}/>
                }
              </Route>

              <Route path="/profile">
                {token ?
                    <Profile token={token} signOut={signOut} />
                  :
                    <SignIn setToken={setToken}/>
                  }
              </Route>

              <Route path="/faq">
                <Faq />
              </Route>

              <Route path="/blogs">
                <Blogs />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>

              <Route path="/checkout">
                <CheckOut 
                  cartItems={cartItems}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  updateCart={updateCart}
                  itemsPrice={itemsPrice}
                  itemsSavingPrice={itemsSavingPrice}
                  setSelectedProduct={setSelectedProduct}
                  token={token}
                />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/shop/browse/:category">
                <ProductList 
                  setSelectedProduct={setSelectedProduct}
                  cartItems={cartItems}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  updateCart={updateCart}
                />
              </Route>

              <Route path="/shop/productdetails/:productId/:productName">
                <ProductDetail
                  cartItems={cartItems}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  updateCart={updateCart}
                />
              </Route>

              <Route path="/resourcenotfound">
                <NotFound />
              </Route>

              <Route>
                <Redirect to="/resourcenotfound" />
              </Route>
            </Switch>
          </ContentArea>

          <Footer />
        </div>
        <ProductDetailModal
          product={selectedProduct}
          cartItem={cartItems.find((item) => item.id === selectedProduct.id)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          updateCart={updateCart}
        />

        <LoginArea />
        <MobileFooter cartItems={cartItems} itemsPrice={itemsPrice} />
        <PopUp />
      </div>
    </Router>
  );
}

export default App;
