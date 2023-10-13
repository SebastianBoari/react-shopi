import React, { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
  // Shopping cart: count
  const [count, setCount] = useState(0)

  // Shopping cart: Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart: Order
  const [order, setOrder] = useState([])

  // Product Dtail: open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu: open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Product Detail: Show product
  const [productToShow, setProductToShow] = useState({})


  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      
      cartProducts,
      setCartProducts,

      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,

      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,

      productToShow,
      setProductToShow,

      order,
      setOrder,
    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartProvider, ShoppingCartContext}