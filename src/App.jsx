// import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [count, setCount] = useState(0)

  const [cart, setCart] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [creditHoursRemaining, setCreditHoursRemaining] = useState(20);


  const handleAddToCart = (course, credit_hours) => {
    // console.log('Cart adding');
    // console.log(course);
    const doesExist = cart.find((item) => item.id == course.id);
    if (doesExist) {
      toast("Course Already Selected!");
    }
    else {
      const oldCart = [...cart];
      const newCart = [...cart, course];

      if ((totalCredit + credit_hours > 20) && (creditHoursRemaining - credit_hours < 0)) {
        setCart(oldCart);
        setCreditHoursRemaining(creditHoursRemaining);
        toast("Can't be Added More!");
      } else {
        setCart(newCart);
        setTotalCredit(totalCredit + credit_hours);
        setCreditHoursRemaining(creditHoursRemaining - credit_hours)
      }
    }
  }

  return (

    <div className='max-w-screen-2xl mx-auto p-5'>

      <Header></Header>

      <div className='md:flex justify-between w-full'>

        <Courses handleAddToCart={handleAddToCart}></Courses>

        <Cart cart={cart} totalCredit={totalCredit} creditHoursRemaining={creditHoursRemaining}></Cart>

      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>


  )
}

export default App
