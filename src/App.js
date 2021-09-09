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
import CartEmpty from "./components/Errors/CartEmpty/CartEmpty";
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

const trending_products = [
  {
    id: 1,
    title: "Apple",
    weight: "1kg",
    price: 8,
    origin_price: 10,
    description: "Apple",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/105919.jpg",
  },
  {
    id: 2,
    title: "Banana",
    weight: "2kg",
    price: 7,
    origin_price: 9,
    description: "Banana",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/133211.jpg",
  },
  {
    id: 3,
    title: "Orange",
    weight: "1kg",
    price: 8,
    origin_price: 10,
    description: "Orange",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/259450.jpg",
  },
  {
    id: 4,
    title: "Pear",
    weight: "2kg",
    price: 7,
    origin_price: 9,
    description: "Pear",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/145259.jpg",
  },
  {
    id: 5,
    title: "Coconut",
    weight: "1kg",
    price: 8,
    origin_price: 10,
    description: "Apple",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/136981.jpg",
  },
  {
    id: 6,
    title: "Durian",
    weight: "2kg",
    price: 7,
    origin_price: 9,
    description: "Banana",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/105919.jpg",
  },
  {
    id: 7,
    title: "Grapes",
    weight: "1kg",
    price: 8,
    origin_price: 10,
    description: "Orange",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/138801.jpg",
  },
  {
    id: 8,
    title: "Jackfruit",
    weight: "2kg",
    price: 7,
    origin_price: 9,
    description: "Pearl",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/105919.jpg",
  },
];

const promoted_products = [
  {
    id: 9,
    title: "Watermelon",
    weight: "1kg",
    price: 8,
    origin_price: 10,
    description: "Apple",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/120384.jpg",
  },
  {
    id: 10,
    title: "Mango",
    weight: "2kg",
    price: 7,
    origin_price: 9,
    description: "Banana",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/132600.jpg",
  },
  {
    id: 11,
    title: "Avocado",
    weight: "1kg",
    price: 8,
    origin_price: 10,
    description: "Orange",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/120080.jpg",
  },
  {
    id: 12,
    title: "Cherry",
    weight: "2kg",
    price: 7,
    origin_price: 9,
    description: "Pear",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/133109.jpg",
  },
  {
    id: 13,
    title: "Lemon",
    weight: "1kg",
    price: 8,
    origin_price: 10,
    description: "Apple",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/259514.jpg",
  },
  {
    id: 14,
    title: "Longan",
    weight: "2kg",
    price: 7,
    origin_price: 9,
    description: "Banana",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/165848.jpg",
  },
  {
    id: 15,
    title: "Mandarin",
    weight: "1kg",
    price: 8,
    origin_price: 10,
    description: "Orange",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/314075.jpg",
  },
  {
    id: 16,
    title: "Pumelo",
    weight: "2kg",
    price: 7,
    origin_price: 9,
    description: "Pear",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/medium/105919.jpg",
  },
];

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];

function App() {
  const [selectedProduct, setSelectedProduct] = useState({
    id: "",
    title: "",
    weight: "",
    price: 0,
    origin_price: 0,
    description: "",
    image: "",
  });
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
        <Header cartItems={cartItems} itemsPrice={itemsPrice} />
        <div className="page-layout home-layout">
          <Sidebar />
          <ContentArea>
            <Switch>
              <Route exact path="/">
                <Home
                  trending_products={trending_products}
                  promoted_products={promoted_products}
                  setSelectedProduct={setSelectedProduct}
                  cartItems={cartItems}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  updateCart={updateCart}
                />
              </Route>

              <Route path="/signin">
                <SignIn />
              </Route>

              <Route path="/signup">
                <SignUp />
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
                />
              </Route>

              <Route path="/emptycart">
                <CartEmpty cartItems={cartItems}/>
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/shop/productdetails/:productId/:productName">
                <ProductDetail
                  trending_products={trending_products}
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
