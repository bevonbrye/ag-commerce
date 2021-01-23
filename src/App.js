import React, { useState, useEffect} from 'react'
import{ Products } from './components/Products/Products'; 
import Navbar from './components/Navbar/Navbar'
import { commerce } from './lib/commerce'



const App = () => { 
    const  [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const fetchProducts = async () => { 
        const { data } = await commerce.products.list();
        setProducts( data ); 
    }

    const fetchCart = async () => { 
        setCart(await commerce.cart.retrieve()); 
    }

    useEffect(() => {
        fetchProducts();
        fetchCart()
    }, [])

    const handleAddItemsToCart = async (productId, quantity) => {

        const item = await commerce.cart.add(productId, quantity); 
        setCart(item.cart)
    }

    console.log(cart)

    return( 
        <div>
            <Navbar totalItems={cart.totalItems} />
            <Products products={products} onAddToCart={handleAddItemsToCart}/>
        </div>
    )
}

export default App; 
