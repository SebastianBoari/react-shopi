import { createContext, useState, useEffect } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
  // Products: get products
  const [products, setProducts] = useState(null)
  const [filteredProducts, setFilteredProducts]  = useState(null)

  // Products: Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Products: Get products by category
  const [ searchByCategory, setSearchByCategory] = useState(null)

  // Products: fetch
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

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredProductsByCategory = (products, searchByCategory) => {
    return products?.filter(product => {
      return product.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    })
  }

  const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
    if(!searchType){
      return products
    }
    
    if(searchType === 'BY_TITLE_AND_CATEGORY'){
      return filteredProductsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if(searchType === 'BY_TITLE'){
      return filteredProductsByTitle(products, searchByTitle)
    }

    if(searchType === 'BY_CATEGORY'){
      return filteredProductsByCategory(products, searchByCategory)
    }
  }

  useEffect(() => {
    if(searchByTitle && searchByCategory){
      setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', products, searchByTitle, searchByCategory))
    }

    if(searchByTitle && !searchByCategory){
      setFilteredProducts(filterBy('BY_TITLE', products, searchByTitle, searchByCategory))
    }

    if(!searchByTitle && searchByCategory){
      setFilteredProducts(filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory))
    }

    if(!searchByTitle && !searchByCategory){
      setFilteredProducts(filterBy(null, products, searchByTitle, searchByCategory))
    }

  }, [products, searchByTitle, searchByCategory])

  
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
      setSearchByTitle,

      filteredProducts,

      searchByCategory,
      setSearchByCategory,
    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartProvider, ShoppingCartContext}