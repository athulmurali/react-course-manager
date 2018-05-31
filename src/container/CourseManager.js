import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseCard from "../components/CourseCard";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import CourseEditor from "./CourseEditor"


export default class CourseManager
    extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h1 >Course Manager</h1>
                </div>

                <CourseEditor/>

                 <div className="card-deck">

                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        )}}
