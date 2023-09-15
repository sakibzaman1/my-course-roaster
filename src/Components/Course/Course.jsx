// import React from 'react';

import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Course = ({ course, handleAddToCart, handleTotalCredit, handleCreditHoursRemaining }) => {

    const { course_title, img, details, credit_hours, price } = course;

    return (
        <div>
            <div className ="lg:w-[320px] h-[480px] bg-base-100 shadow-xl rounded-xl sm:p-1 md:p-2 lg:p-4">
                <figure className ="pt-2">
                    <img src={img} alt="" className="w-full" />
                </figure>
                <div className ="items-center text-center mt-6">
                    <div className='h-10'>
                    <h2 className='text-lg font-semibold'>{course_title}</h2>
                    </div>
                    <div className='h-16'>
                    <p className='text-sm font-normal  mt-5'>{details}</p>
                    </div>
                    <div className='flex justify-between h-12 mt-5'>
                        <small className='text-base font-medium text-gray-600'><button></button>Price: {price}</small>
                        <small className='text-base font-medium text-gray-600'><button><FaBookmark></FaBookmark></button>Credit: {credit_hours}</small>
                    </div>
                    <div className="p-4 h-10">
                        <button onClick={()=> {handleAddToCart(course,credit_hours);handleTotalCredit(credit_hours); handleCreditHoursRemaining(credit_hours)}} className="w-full h-8 text-white rounded-xl bg-blue-600">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func,
    handleTotalCredit: PropTypes.func,
    handleCreditHoursRemaining: PropTypes.func

}

export default Course;