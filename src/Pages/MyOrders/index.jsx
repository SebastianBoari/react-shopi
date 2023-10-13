import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'
import { currentDate } from '../../utils'

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext)

  const date = currentDate()

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative mb-5'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      
      {
        order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
            currentDate={date}
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