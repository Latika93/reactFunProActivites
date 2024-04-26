import React, { useEffect, useState } from 'react'

const LoadMore = () => {
    const [loading, setloading] = useState()
    const [products, setProducts] = useState()
    const [count, setCount] = useState(0)

    const fetchmore = async() => {
        try {
            setloading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();
            console.log(result);

            if(result && result.products && result.products.length){
                setProducts(result.products);
                setloading(false);
            }

        } catch (error) {
            setloading(false);
        }
    }

    if(loading){
        <p>Loading.... Please wait.</p>
    }

    useEffect(()=>{
        fetchmore();
    },[count])

  return (
    <div className='flex flex-col gap-20'>
        <div className='grid grid-cols-4 gap-10'>
        {products && products.length ?
            products.map((item) =>(
                <div key={item.id} className='p-20 border border-solid border-black flex flex-col gap-10'>
                    <img src={item.thumbnail} className='h-200 w-200'></img>
                    <p>{item.title}</p>
                </div>
            )):<div>Nahi hai</div>
        }
        </div>
        <div>
        {count <= 3 && <button onClick={()=>{
                setCount(count + 1)
            }}>Load More</button>}
        
        {count > 3 && 
        <div>Reached highest limit.</div>}
        </div>
        </div>
  )
}

export default LoadMore