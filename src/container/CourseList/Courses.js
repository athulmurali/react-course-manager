import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseRowsTable from "./CourseRowsTable";
import CourseCards from "./CourseCards";


export default class Courses
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

    }



    getDate =() =>{
        var now = new Date();

        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);

        return now.getFullYear()+"-"+(month)+"-"+(day) ;
    }
    createCourse(){



        this.setState(
            { modules : this.state.courses.concat(this.state.course)});
        this.setState(
            { id : 0 ,
                course: {title: "",
                created : this.getDate(),
                coursePageUrl: "/courses"}});
    }



    render= () =>{
        console.log("Course viewType")

        if (!this.props.inListView)
        {
            console.log(this.state.viewType);
            console.log(this.state.coursesNew);


            return  <div className="card-deck">
                <CourseCards courses = {this.props.courses}/>

            </div>
        }
        else{
            return  <div className="container-fluid">
                <CourseRowsTable courses ={this.props.courses}/>
            </div>

        }
    }

}



