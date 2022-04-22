import { useState, useEffect} from "react"

function useGetAllProducts(path){
    const [isLoading, setIsLoading] = useState(false);
    const [productData, setProductData] = useState([]);

    useEffect(()=>{
        async function getAllProducts(){
        const res = await fetch('https://dmit2008-73dc0-default-rtdb.firebaseio.com/products.json')
        const jsonData = await res.json();
        setProductData(Object.values(jsonData))
        }
        getAllProducts()
    },[])

    return productData
}

export {useGetAllProducts}


