// import React from 'react';
import PropTypes from 'prop-types';
import CartCourse from '../CartCourse/CartCourse';

const Cart = ({cart}) => {

    console.log(cart);

    // const {course_title} = cart;

    return (
        <div className="md:w-[30%] ml-10 p-10 bg-base-100 shadow-xl rounded-xl">

            <h1 className='pb-6 border-b-2 text-lg text-blue-600 font-bold'>Credit Hours Remaining :</h1>
            <div className='mt-6'>
            <h3 className='text-xl font-semibold'>Course Name</h3>
            <ul className='list-decimal mt-6'>
            {
                cart.map(course => <CartCourse key={course.id} course={course}></CartCourse>)
            }
            </ul>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array
}


export default Cart;