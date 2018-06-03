import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseCard from "../components/CourseCard";




export default class CourseCardsDeck
    extends React.Component {
    render= () =>

        <div className="card-deck">
            <CourseCard coursePageUrl={"/"} courseTitle={"WebDev"} />
            <CourseCard coursePageUrl={"/"} courseTitle={"Information Retrieval"}/>
            <CourseCard coursePageUrl={"/"} courseTitle={"Algorithms"}/>
            <CourseCard coursePageUrl={"/"} courseTitle={"Databases"}/>
            <CourseCard coursePageUrl={"/"} courseTitle={"Information Security"}/>
        </div>
    }

