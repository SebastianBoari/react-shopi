import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'

const Home = () => {
  const { products, searchByTitle, setSearchByTitle} = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative mb-5'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>

      <input 
        type='text' 
        placeholder='Search a product' 
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none text-center'
        onChange={(event) => setSearchByTitle(event.target.value)}
      />

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