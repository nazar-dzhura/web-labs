import React from "react";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CATALOG_ROUTE, HOME_ROUTE} from "./utils/routes";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{backgroundColor: 'var(--second-bg)'}}>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={HOME_ROUTE} exact element={<Home/>}/>
                <Route path={CATALOG_ROUTE} element={<Catalog/>}/>
                <Route path="/catalog/:id" element={<Product/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
