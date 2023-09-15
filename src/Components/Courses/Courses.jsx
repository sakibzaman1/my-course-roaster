// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleAddToCart,handleTotalCredit, handleCreditHoursRemaining}) => {

    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('courses.json')
        .then( res => res.json())
        .then( data => setCourses(data))
    },[])

    return (
        <div className="lg:w-[70%]">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 lg:gap-x-6">
            {
                courses.map(course => <Course 
                    key={course.id} 
                    course={course}
                    handleAddToCart={handleAddToCart}
                    handleTotalCredit={handleTotalCredit}
                    handleCreditHoursRemaining={handleCreditHoursRemaining}>

                    </Course>)
            }
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleAddToCart: PropTypes.func,
    handleTotalCredit : PropTypes.func,
    handleCreditHoursRemaining: PropTypes.func
}

export default Courses;