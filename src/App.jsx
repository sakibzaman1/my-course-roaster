// import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  const [cart, setCart] = useState([]);

  const handleAddToCart = course => {
    // console.log('Cart adding');
    // console.log(course);

    const newCart = [...cart, course];
    setCart(newCart)
  }

  return (
    
      <div className='max-w-screen-2xl mx-auto p-5'>

      <Header></Header>
      
      <div className='md:flex justify-between w-full'>

      <Courses handleAddToCart={handleAddToCart}></Courses>
      <Cart cart={cart}></Cart>

      </div>

      </div>
      
      
    
  )
}

export default App
