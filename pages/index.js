import { loadStripe } from "@stripe/stripe-js";

import { PageTitle } from "../components/PageTitle"
import { ProductCard } from "../components/ProductCard"


export default function Home(props) {
  const products = props.products.slice(0,3);

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  return (
    <>
      <PageTitle title="Robert's Plants Store Font" tagline="Let's grow together"/>
      <main>
        { products.map(product=> <ProductCard key={product.uid} product={product}/>) }
      </main>

    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://dmit2008-73dc0-default-rtdb.firebaseio.com/products.json')
  const productData = await res.json();
  const products = Object.values(productData)
  return {
    props:{
      products
    },
    revalidate:600000
  }
}