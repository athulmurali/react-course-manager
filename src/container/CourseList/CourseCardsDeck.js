import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseCard from "./CourseCard";
import CourseRow from "./CourseRow";




export default class CourseCardsDeck
    extends React.Component {

    constructor(props){
        super(props);
        this.state =
            {
                courses: [
                    {
                        id: 1,
                        coursePageUrl: "/course/",
                        courseTitle: "Web Development",
                        createdBy : "Me",
                        createdAt : "Yesterday",
                        updatedAt : "Today"
                    },
                    {
                        id: 2,
                        coursePageUrl: "/course/",
                        courseTitle: "Algorithms",
                        createdBy : "Me",
                        createdAt : "Yesterday",
                        updatedAt : "Today"
                    },
                    {
                        id: 3,
                        coursePageUrl: "/course/",
                        courseTitle: "Information Retrieval",
                        createdBy : "Me",
                        createdAt : "Yesterday",
                        updatedAt : "Today"
                    },

                    {
                         id: 4,
                         coursePageUrl: "/course/",
                         courseTitle: "PDP",
                         createdBy : "Me",
                         createdAt : "Yesterday",
                         updatedAt : "Today"
                    },
                    {
                        id: 5,
                        coursePageUrl: "/course/",
                        courseTitle: "DBMS",
                        createdBy : "Me",
                        createdAt : "Yesterday",
                        updatedAt : "Today"
                    }
                ]
                ,course : "",
                viewType: this.props.viewType

            }
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }


    render= () =>{
        console.log("Course viewType")

        if (!this.props.inListView)
        {
            console.log(this.state.viewType);

            return  <div className="card-deck">
                        {this.renderCoursesAsCards()}
                    </div>
        }
        else{
            console.log(this.state.viewType);
            return  <div className="container-fluid">
                        {this.renderCoursesAsRows()}
                        </div>

            }


    }


    renderCoursesAsCards= () =>{
        let courses = this.state.courses.map(function(course){
            return ( <CourseCard key={ course.id}
                                 coursePageUrl={course.coursePageUrl}
                                 courseTitle={course.courseTitle}
            />)});
            return courses
        }


    renderCoursesAsRows= () =>{
        let i=1;

        let courses = this.state.courses.map(function(course){
            console.log(course);
            return (
                <CourseRow
                    index = {i++}

                    key={ course.id}
                    coursePageUrl={course.coursePageUrl}
                    title={course.courseTitle}
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


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({course: {courseTitle: event.target.value, id : this.state.courses.length +1}});

    }
    createCourse(){
        this.setState(
            { modules : this.state.courses.concat(this.state.course)});
        this.setState({ id : 0 ,course: {title: "", coursePageUrl: "/courses"}});
    }



}



