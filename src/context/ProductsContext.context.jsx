import { createContext, useEffect, useState } from "react";
import { shop } from "../data/shop.data";

export const ProductContext = createContext();

export default function ProductProvider({children}){
    const [products, setProducts] = useState(shop);

    useEffect(()=>{
        console.log(products)
    },[])

    return (<ProductContext.Provider value={{products,setProducts}}>
        {children}
    </ProductContext.Provider>)
}