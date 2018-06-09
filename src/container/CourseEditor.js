
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import ModuleList from "./ModuleList/ModuleList";
import CourseTitle from "./CourseList/CourseTitle/CourseTitle";
import DeleteCourseButton from "./CourseList/DeleteCourseButton";
import CourseService from "../services/CourseService";
import {Redirect} from "react-router-dom";
import LessonList from "./LessonList/LessonList";
import LessonService from "../services/LessonService";

export default class CourseEditor extends React.Component{

    componentDidMount() {

        this.selectCourse(this.props.match.params.courseId);
        // console.log("id from url " + this.props.match.params.courseId);
        this.updateTitleState();
        this.updateModules();


    }


    constructor(props)
    {
        super(props);
        this.courseService = CourseService.instance;
        this.lessonService = LessonService.instance;

        // console.log("course editor props:");

        // console.log(this.props)
        this.state =
            {
                courseId : -1,
                moduleId : -1,
                title :"unnamed",
                course :
                    {
                        "id": 171,
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
                    },
                modules :[],
                lessons:[],

                deleted :false,
                moduleSelected : false
            }


        this.lessons = [
        {
            "id": 2,
            "title": "lesson -01"
        },
        {
            "id": 12,
            "title": "lesson -1"
        },
        {
            "id": 22,
            "title": "lesson -11"
        },
        {
            "id": 32,
            "title": "lesson -111"
        }
    ]


    }

    selectCourse(courseId) {
        this.setState({courseId: parseInt(courseId)});
    }
    updateTitleState=()=>{

        this.courseService.getCourseById(this.props.match.params.courseId).then((coursesReceived) => {
            // console.log("printing :  courselatestinfo" );

            this.setState({title : coursesReceived.title});
        });

    }


    updateModules=()=>{

        this.courseService.getCourseById(this.props.match.params.courseId).then((coursesReceived) => {
            // console.log("printing :  courselatestinfo" );

            this.setState({modules : coursesReceived.modules});
        });

    }


    componentWillReceiveProps() {
        this.selectCourse(this.props.match.params.courseId);
    }


    deleteCourse=(id)=>{
        var oldOptions = this.state.courses;
        console.log("Delete course id : " + id);
        this.courseService.deleteCourse(id).then(
            (res)=>{
                this.setState({deleted: true})
            }
        );











        //api to delete

    }

    selectModule =(id)=> {
        console.log("selected module id : "+ id);
        console.log("Fetching lessons from server for moduleId  : "+ id);

        this.setState({moduleId :id, moduleSelected : true}, ()=>{
            this.lessonService.findAllLessonsForModule(this.state.courseId, this.state.moduleId).then((lessons)=>{
                this.setState({lessons : lessons});
            });

        });

    }



    selectLesson(lessonId){
        alert("Course editor  : Lesson  id clicked : " + lessonId);
    }

    render=()=>{
       return  this.state.deleted ?
            (<Redirect to="/courses"/>): this.renderEditor()
    }
    renderEditor= ()=>{
       return ( <div className="container" >
                <div className= "row   py-1 justify-content-end" >

                        <DeleteCourseButton
                            deleteCourse ={this.deleteCourse}
                            id={this.state.courseId}/>
                </div>

                <CourseTitle
                    courseId = {this.state.courseId}
                    title={ this.state.title}/>


                <div className="row py-2">
                    <div className="col-lg-4 col-sm-12">
                        <h3>Modules</h3>
                        <ModuleList modules={this.state.modules}
                                    courseId={ this.state.courseId}
                                    selectModule = {this.selectModule}/>
                    </div>
                    <div className="container col-lg-8 col-sm-12">
                        <h4>Lessons</h4>

                        {!!this.state.moduleSelected   && this.state.moduleId != -1 &&
                        <LessonList lessons={this.state.lessons}
                                    moduleId={ this.state.moduleId}
                                    courseId={ this.state.courseId}
                                    selectLesson = {this.selectLesson}
                        />
                        }



                        {!this.state.moduleSelected &&
                        <h3>No module selected</h3>
                        }

                    </div>


                </div>
            </div>);
    }




}

