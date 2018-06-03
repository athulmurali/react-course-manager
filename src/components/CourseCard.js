import React from 'react'
import {Link} from "react-router-dom";

export default class CourseCard extends React.Component

    {

        render()
        {
            console.log( this.props);
            let url="https://picsum.photos/300/100";
            let coursePageUrl = "/";

            // {Math.floor(Math.random() * Math.floor(500))} looks odd for different image sizes
            return (
          <div className="card" styles={{width: '12rem'}}>
          <img className="card-img-top"
               src={url}/>

          <div className="card-body">
           <h5 className="card-title">
               <Link to= {coursePageUrl} className=" nav-item nav-link  active">{this.props.courseTitle}</Link>
           </h5>
              <p className="card-text">by       : {this.props.createdBy}</p>

              <p className="card-text">Created : {this.props.createdAt}</p>

              {/*<a href="#" className="btn btn-primary">More...</a>*/}
          </div></div>)}}
