import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from "./container/CourseManager";
import Routing from './examples/Routing';

ReactDOM.render(
    <div className="container-fluid">
        <Routing/>
        <CourseManager/>,
    </div>,

    document.getElementById('root')
);
