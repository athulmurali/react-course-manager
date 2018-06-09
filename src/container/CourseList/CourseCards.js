import DateUtils from "../../Utils/DateUtils";
import CourseCard from "./CourseCard";
import React from 'react'

const  CourseCards= (props) =>{
    let courses = props.courses.map((course)=>{

        course.createdAt =  DateUtils.dateTimeToDate(course.created);
        course.updatedAt =  DateUtils.dateTimeToDate(course.modified);

        console.log(course);
        return ( <CourseCard
            id={ course.id}
            key={course.id}
            coursePageUrl={"/coursePage/"}
            title={course.title}
            createdAt = {  course.createdAt}
            modified = {course.modified}
        />)});
    return courses
}
export default  CourseCards;
