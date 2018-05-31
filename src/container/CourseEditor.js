
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";

export default class CourseEditor extends React.Component{
    render(){
        return (<div className="row">
            <div className="col-lg-4 col-sm-12">
                <h2>Modules</h2>
                <ModuleList/>
            </div>
            <div className="col-lg-8 col-sm-12">
                <h2>Lessons</h2><LessonTabs/>
            </div>
        </div>);
    }
}

