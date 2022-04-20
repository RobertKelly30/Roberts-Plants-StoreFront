import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { PageTitle } from "../components/PageTitle"
import {ProductCard} from "../components/ProductCard"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState([]);

  useEffect(()=>{
    async function loadExternalDataTheCRAWay(){
      const res = await fetch('https://dmit2008-73dc0-default-rtdb.firebaseio.com/products.json')
      const data = await res.json()
      console.log(data)
      setProductData(data)
    }
    loadExternalDataTheCRAWay()
  },[])

  return (
    <>
      <PageTitle title="Robert's Plants Store Font" tagline="Let's grow together"/>
      <div style={{textAlign:"center"}}>
        <Button onClick={()=>setIsLoading(!isLoading)}>Get some data</Button>
        {
          isLoading && <p style={{padding:"1rem"}}>This is my Output</p>
        }
      </div>
      <main>
        {
          productData.map(product=> <ProductCard key={product.uid}/>)
        }
      </main>

    </>
  )
}

function ListItem({number, props}){
  return <li>{number}</li>
}