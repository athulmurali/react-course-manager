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
                        title: "Web Development",
                        createdBy : "Me",
                        createdAt : "Yesterday",
                        updatedAt : "Today"
                    },
                    {
                        id: 2,
                        coursePageUrl: "/course/",
                        title: "Algorithms",
                        createdBy : "Me",
                        createdAt : "Yesterday",
                        updatedAt : "Today"
                    },
                    {
                        id: 3,
                        coursePageUrl: "/course/",
                        title: "Information Retrieval",
                        createdBy : "Me",
                        createdAt : "Yesterday",
                        updatedAt : "Today"
                    },

                    {
                         id: 4,
                         coursePageUrl: "/course/",
                         title: "PDP",
                         createdBy : "Me",
                         createdAt : "Yesterday",
                         updatedAt : "Today"
                    },
                    {
                        id: 5,
                        coursePageUrl: "/course/",
                        title: "DBMS",
                        createdBy : "Me",
                        createdAt : "Yesterday",
                        updatedAt : "Today"
                    }
                ]
                ,course : "",
                viewType: this.props.viewType,

            }
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }

    componentDidMount()
    {
        console.log("Current props : CourseCardDeck ---");
        console.log(this.props);

        this.setState(()=>{
            console.log("resetting state options");

            return {coursesNew:  this.props.courses }
        } )
        // console.log(this.state.coursesNew);

        // console.log(this.state);



    }

    render= () =>{
        console.log("Course viewType")

        if (!this.props.inListView)
        {
            console.log(this.state.viewType);
            console.log(this.state.coursesNew);


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
        const newCourses = this.state.coursesNew;
        let courses = this.props.courses.map(function(course){

            // console.log("printing new courses :");
            // console.log(newCourses);

            // console.log("printing courses ");
            course.createdAt = "Yesterday";
            course.updatedAt = "Today";

            console.log(course);
            return ( <CourseCard
                                id={ course.id}
                                key={course.id}
                                 coursePageUrl={"/coursePage/"}
                                 title={course.title}
            />)});
            return courses
        }


    renderCoursesAsRows= () =>{
        let i=1;
        let courses = this.props.courses.map(function(course){
            course.createdBy = "Me";
            course.createdAt = "Yesterday";
            course.updatedAt = "Today";
            course.coursePageUrl = "/coursePage/";


            // console.log(course);

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


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({course: {title: event.target.value, id : this.state.courses.length +1}});

    }
    createCourse(){
        this.setState(
            { modules : this.state.courses.concat(this.state.course)});
        this.setState({ id : 0 ,course: {title: "", coursePageUrl: "/courses"}});
    }



}



