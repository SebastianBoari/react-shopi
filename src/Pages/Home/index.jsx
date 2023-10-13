import { useState, useEffect } from 'react'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const data = async () => {
      try{
        const response = await fetch('https://api.escuelajs.co/api/v1/products', {
          method: "GET"
        })
      
        const result = await response.json()
  
        setProducts(result)
      } catch(error) {
        console.error(error)
      }
    }
    data()
  }, [])

  return (
    <Layout>
      Home

      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        products?.map((product) => (
          <Card 
            key={product.id}
            data={product}
          />
        ))
      }
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export { Home }