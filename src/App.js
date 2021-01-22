import { useState, useEffect} from ''
import React from 'react'; 
import{ Products } from './components/Products/Products'; 
import Navbar from './components/Navbar/Navbar'
import { commerce } from './lib/commerce'



const App = () => { 
    const  [products, setProducts] = useState([])

    const fetchProducts = async () => { 
        const response = await commerce.products.list();
        setProducts(data)
    }


    return( 
        <div>
            <Navbar/>
            <Products />
        </div>
    )
}

export default App; 
