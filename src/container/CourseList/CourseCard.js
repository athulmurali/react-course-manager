import React from 'react'
import {Link} from "react-router-dom";
import EditCourseButton from "./EditCourseButton";

export default class CourseCard extends React.Component

    {

        render()
        {
            console.log( this.props);
            let url="https://picsum.photos/300/100";
            let coursePageUrl = "/";

            // {Math.floor(Math.random() * Math.floor(500))} looks odd for different image sizes
            return (
          <div className="card" styles={{width: '12rem',height: '24rem'}}>
          <img className="card-img-top"
               src={url}/>


          <div className="card-body">

           <h5 className="card-title">
               <Link to= {coursePageUrl}
                     style={{color: 'black','textDecoration' : 'none'}} >
                   {this.props.title}</Link>
               <span className="float-right">
                        <EditCourseButton id={this.props.id} editCourseUrl={"/editCourse/:"} />
               </span>


           </h5>
              <p className="card-text">by       :Me {this.props.createdBy}</p>
              <p className="card-text">Created  :  {this.props.createdAt}</p>

          </div></div>)}}
