import React, { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import './css/index.css'

const CheckoutSideMenu = () => {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } = useContext(ShoppingCartContext)

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

        <div className='px-6'>
        {
          cartProducts?.map((product) => (
            <OrderCard
              key={product.id}
              title={product.title} 
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
        </div>

    </aside>
  )
}

export { CheckoutSideMenu }