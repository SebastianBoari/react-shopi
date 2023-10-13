import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative'>
        <h1>My Orders</h1>
      </div>
      
      {
        order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }
      <OrdersCard/>
    </Layout>
  )
}

export { MyOrders }