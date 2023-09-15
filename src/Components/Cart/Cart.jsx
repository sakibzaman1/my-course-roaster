// import React from 'react';
import PropTypes from 'prop-types';
import CartCourse from '../CartCourse/CartCourse';

const Cart = ({cart, totalCredit, creditHoursRemaining}) => {

    console.log(cart);

    // const {course_title} = cart;

    return (
        <div className="lg:w-[30%] lg:ml-5 p-10 bg-base-100 shadow-xl rounded-xl">

            <h1 className='pb-6 border-b-2 text-lg text-blue-600 font-bold'>Credit Hours Remaining : {creditHoursRemaining}</h1>
            <div className='mt-6'>
            <h3 className='text-xl font-semibold'>Course Name</h3>
            <div className='p-5'>
            <ol className='list-decimal mt-6 pb-10'>
            {
                cart.map(course => <CartCourse key={course.id} course={course}></CartCourse>)
            }
            </ol>
            </div>
            <h3 className='text-base font-medium border-b-2 pb-6 border-t-2 pt-6'>Total Credit Hours : {totalCredit}</h3>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array,
    totalCredit: PropTypes.number,
    creditHoursRemaining: PropTypes.number
}


export default Cart;