import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from "./container/CourseManager";
import Routing from './examples/Routing';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
    <div className="container-fluid">
        <Routing/>
        <CourseManager/>,
    </div>
    </BrowserRouter>,

    document.getElementById('root')
);
