import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseCard from "../components/CourseCard";



export default class CourseCardsDeck
    extends React.Component {
    render= () =>

        <div className="card-deck">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div>
    }

