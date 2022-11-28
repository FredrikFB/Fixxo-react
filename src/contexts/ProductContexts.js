import { useContext, useState } from "react";
import { createContext } from "react";

const ProductContext = createContext()

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [products, setProducts] =useState([])
    const [featured, setFeatured] = useState([])

    const getProducts =async () => {
        let res = await fetch(url)
        setProducts(await res.json())
    }
    const getFeatured =async (take = 0) => {
        let res = await fetch(url + `?take=${take}`)
        setFeatured(await res.json())
    }

    return <ProductContext.Provider value={{products, featured, getProducts, getFeatured}}>
        {children}
    </ProductContext.Provider>


}
