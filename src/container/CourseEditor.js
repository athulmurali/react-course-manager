
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import ModuleList from "./ModuleList/ModuleList";
import LessonTabs from "./LessonList/LessonTabs";
import CourseTitle from "./CourseList/CourseTitle/CourseTitle";

export default class CourseEditor extends React.Component{

    constructor(props)
    {
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


    updateCourseTitle=(newCourseTitle)=>{

        let newCourse = this.state.course;
        newCourse.title = newCourseTitle;



        this.setState({ course : newCourse });


    }




        render(){
        return (
            <div className="container-fluid">
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

