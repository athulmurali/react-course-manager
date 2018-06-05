
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import ModuleList from "./ModuleList/ModuleList";
import LessonTabs from "./LessonList/LessonTabs";
import CourseTitle from "./CourseList/CourseTitle/CourseTitle";
import DeleteCourseButton from "./CourseList/DeleteCourseButton";
import CourseService from "../services/CourseService";

export default class CourseEditor extends React.Component{

    constructor(props)
    {
        super(props);
        this.courseService = CourseService.instance;
        console.log("course editor props:");

        console.log(this.props)
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
                ],
                viewType: this.props.viewType,

                course :{
            "id": 1,
            "title": "Web Development",
            "modules": [
            {
                "id": 41,
                "title": "Module 1- React",
                "lessons": [
                    {
                        "id": 2,
                        "title": "lesson -1 editted"
                    },
                    {
                        "id": 12,
                        "title": "lesson -1"
                    },
                    {
                        "id": 22,
                        "title": "lesson -1"
                    },
                    {
                        "id": 32,
                        "title": "lesson -1"
                    }
                ]
            },
            {
                "id": 71,
                "title": "Module 2- Redux editted",
                "lessons": []
            },
            {
                "id": 81,
                "title": "Module 3- Redux editted",
                "lessons": []
            }
        ]
        }

            }
    }


    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        console.log("id from url " + this.props.match.params.courseId);
        this.courseService.getCourseById(this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }


    componentWillReceiveProps(newProps) {
        this.selectCourse(newProps.match.params.courseId);
        this.getCourseById(newProps.match.params.courseId);
    }


    deleteCourse=(id)=>{
        var oldOptions = this.state.courses;
        console.log("Delete course id : " + id);
        this.courseService.deleteCourse(id);

        //api to delete

    }


    render(){
        console.log("current course id : " + this.state.course.id);
        return (
            <div className="container" >
                <div className= "row   py-1 justify-content-end" >

                        <DeleteCourseButton  deleteCourse ={this.deleteCourse} id={this.state.courseId}/>
                </div>

                <CourseTitle/>




                <div className="row py-2">
                    <div className="col-lg-4 col-sm-12">
                        <h3>Modules</h3>
                        <ModuleList/>
                    </div>
                    <div className="container col-lg-8 col-sm-12">
                        <h4>Lessons</h4><LessonTabs/>
                    </div>
                </div>
            </div>);
    }
}

