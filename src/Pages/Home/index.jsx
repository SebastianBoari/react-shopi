import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'

const Home = () => {
  const { products, searchByTitle, setSearchByTitle, filteredProducts} = useContext(ShoppingCartContext)

  const renderProducts = () => {
    if (searchByTitle?.length > 0) {

      if(filteredProducts?.length > 0){
        return ( filteredProducts?.map((product) => (
          <Card 
            key={product.id}
            data={product}
          />
        )))
      } else {
        return (
          <div>Product not found</div>
        )
      }
    } else {
      return ( products.map((product) => (
        <Card 
          key={product.id}
          data={product}
        />
      )))
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative mb-5'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>

      <input 
        type='text' 
        placeholder='Search a product' 
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none text-center'
        value={searchByTitle}
        onChange={(event) => setSearchByTitle(event.target.value)}
      />

      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {renderProducts()}
      </div>

      <ProductDetail/>
    </Layout>
  )
}

export { Home }