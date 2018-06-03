
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";

export default class CourseEditor extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <div className="row py-1 justify-content-center">

                    <h3>Course Name </h3>

                </div>

                <div className="row py-2">

                    <div className="col-lg-4 col-sm-12">
                        <h2>Modules</h2>
                        <ModuleList/>
                    </div>
                    <div className="container col-lg-8 col-sm-12">
                        <h2>Lessons</h2><LessonTabs/>
                    </div>
                </div>
            </div>);
    }
}

