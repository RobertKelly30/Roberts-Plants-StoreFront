async function getProduct(uid){
    const res = await fetch(`https://dmit2008-73dc0-default-rtdb.firebaseio.com/products/${uid}.json`)
    const product = await res.json();
    return product
}

export { getProduct }