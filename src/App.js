import React, {useEffect, useState} from 'react'
import './style.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import { ProductContext, FeaturedProductsContext } from './contexts/contexts';

function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])


  useEffect(() => {
    const fetchAllProducts =async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllProducts(); 

    const fetchFeaturedProducts =async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedProducts(); 

  }, [setProducts, setFeatured])

  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featured}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/categories" element={<CategoriesView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/wichlist" element={<WishListView />} />
          <Route path="/shoppingcart" element={<ShoppingCartView />} />        
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </FeaturedProductsContext.Provider >
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
