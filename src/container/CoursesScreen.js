import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import CourseCardsDeck from "./CourseCardsDeck";



export default class CoursesScreen
    extends React.Component {
    render= () =>
        <div className="container-fluid">
            <div className="row py-2 justify-content-center">
                <div className="col-lg-6 col-sm-12">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..."/>
                                <span className="input-group-btn">
                                     <button className="btn btn-default border-secondary" type="button">
                                         Search
                                     </button>
                                </span>
                    </div>
                </div>
            </div>
            <CourseCardsDeck/>
        </div>
}

