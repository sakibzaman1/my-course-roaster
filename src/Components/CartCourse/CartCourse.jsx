// import React from 'react';
import PropTypes from 'prop-types';

const CartCourse = ({ course }) => {

    const { course_title } = course;

    return (
        <div className='font-normal text-gray-600'>

            <li>{course_title}</li>

        </div>
    );
};

CartCourse.propTypes = {
    course: PropTypes.object
}
export default CartCourse;