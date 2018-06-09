import CourseRow from "./CourseRow";
import React from "react";
import DateUtils from "../../Utils/DateUtils";

class CourseRowsTable extends React.Component{
    constructor(props){
        super(props)

    }

     returnCourseRowsTable= () =>{
         DateUtils.dateTimeToDate();
        let i=1;
        let courses = this.props.courses.map((course)=>{
            course.createdBy = "Me";

            course.createdAt =  DateUtils.dateTimeToDate(course.created);
            course.updatedAt =  DateUtils.dateTimeToDate(course.modified);
            course.coursePageUrl = "/coursePage/";


            return (
                <CourseRow
                    index = {i++}
                    id={ course.id}
                    key={ course.id}
                    coursePageUrl={course.coursePageUrl}
                    title={course.title}
                    createdBy={course.createdBy}
                    createdAt={course.createdAt}
                    updatedAt={course.updatedAt}
                />

            )

        });
        return <table className="table table-hover table-bordered">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Course</th>
                <th scope="col"> By</th>
                <th scope="col">Created At</th>
                <th scope="col">Updated At</th>

            </tr>
            </thead>
            <tbody>
            {courses}
            </tbody>
        </table>

    }


    render = () => {
        return this.returnCourseRowsTable()
    }
}

export default CourseRowsTable
