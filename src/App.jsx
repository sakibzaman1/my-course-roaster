// import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  const [cart, setCart] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [creditHoursRemaining, setCreditHoursRemaining] = useState(20);
  

  const handleAddToCart = (course, credit_hours) => {
    // console.log('Cart adding');
    // console.log(course);
    const oldCart = [...cart];
    const newCart = [...cart, course];

    if (totalCredit + credit_hours > 20) {
      setCart(oldCart)
    } else {
      setCart(newCart)
    }
   
  }

  const handleTotalCredit = time => {
    if (totalCredit + time > 20) {
      alert("Can't be added more");
    } else {
      setTotalCredit(totalCredit + time);
    }
  }

  const handleCreditHoursRemaining = time => {
    if (creditHoursRemaining - time < 0) {
      setCreditHoursRemaining(creditHoursRemaining)
    } else {
      setCreditHoursRemaining(creditHoursRemaining - time)
    }
    
  }

  return (
    
      <div className='max-w-screen-2xl mx-auto p-5'>

      <Header></Header>
      
      <div className='md:flex justify-between w-full'>

      <Courses 
      handleAddToCart={handleAddToCart} 
      handleTotalCredit={handleTotalCredit} 
      handleCreditHoursRemaining={handleCreditHoursRemaining}
      >

      </Courses>
      <Cart cart={cart} totalCredit={totalCredit} creditHoursRemaining={creditHoursRemaining}></Cart>

      </div>

      </div>
      
      
    
  )
}

export default App
