import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'

const Home = () => {
  const { products } = useContext(ShoppingCartContext)
  
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