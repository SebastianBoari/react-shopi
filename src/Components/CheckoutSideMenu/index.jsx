import React, { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import './css/index.css'

const CheckoutSideMenu = () => {
    const { 
      isCheckoutSideMenuOpen, 
      closeCheckoutSideMenu, 
    
      setCartProducts,
      cartProducts 
    } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
      const filteredProducts = cartProducts.filter(product => product.id != id)
      setCartProducts(filteredProducts)
    }

  return (
    <aside 
    className={`${ isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>

            <div onClick={() => closeCheckoutSideMenu()}>
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer'>
                </XMarkIcon>
            </div>
        </div>

        <div className='px-6 overflow-y-scroll'>
        {
          cartProducts?.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title} 
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
        </div>

        <div className='px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
        </p>
        </div>
    </aside>
  )
}

export { CheckoutSideMenu }