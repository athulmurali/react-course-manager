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
                <nav>
                    <ul className="nav">
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#" id="btn-1" data-toggle="collapse" data-target="#submenu1" aria-expanded="false">Link 2 (toggle)</a>
                            <ul className="nav collapse" id="submenu1" role="menu" aria-labelledby="btn-1">
                                <li><a href="#">Link 2.1</a></li>
                                <li><a href="#">Link 2.2</a></li>
                                <li><a href="#">Link 2.3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>
                </nav>


            </div>
        )}}
