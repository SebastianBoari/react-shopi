import { createContext, useState, useEffect } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
  // Products: get products
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

  // Get produicts by title
  const [searchByTitle, setSearchByTitle] = useState('')
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

      products, 
      setProducts,
      
      searchByTitle,
      setSearchByTitle
    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartProvider, ShoppingCartContext}