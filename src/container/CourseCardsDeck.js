import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseCard from "../components/CourseCard";




export default class CourseCardsDeck
    extends React.Component {

    constructor(props){
        super(props);
        this.state =
            {
                courses: [
                    {
                        id: 1,
                        coursePageUrl: "/",
                        courseTitle: "Web Development"
                    },
                    {
                        id: 2,
                        coursePageUrl: "/",
                        courseTitle: "Algorithms"
                    },
                    {
                        id: 3,
                        coursePageUrl: "/",
                        courseTitle: "Information Retrieval"
                    },
                         {
                        id: 4,
                        coursePageUrl: "/",
                        courseTitle: "PDP"
                    },
                    {
                        id: 5,
                        coursePageUrl: "/",
                        courseTitle: "DBMS"
                    }
                ]
                ,course : ""

            }
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);


        this.renderCourses = this.renderCourses.bind(this)
    }


    render= () =>{
       return  <div className="card-deck">
           {this.renderCourses()}
        </div>

    }


    renderCourses= () =>{
        let courses = this.state.courses.map(function(course){
            return ( <CourseCard key={ course.id} coursePageUrl={course.coursePageUrl} courseTitle={course.courseTitle} />)});
            return courses
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



