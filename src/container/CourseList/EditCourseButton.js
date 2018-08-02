import React from "react";
import Link from "react-router-dom/es/Link";

// Required props :
//id            - int
//editCourseUrl - str  example : \editCourse:


export default  class EditCourseButton extends React.Component{
    constructor(props){
        super(props);}



    render =() =>{
        let redirectTo = "/editCourse/"+ this.props.id;
        return<Link to= {redirectTo} className=" nav-link nav-item" style={{'color': 'black'}}>
                    <i className="px-2 fa fa-pencil"   onClick={this.handleClick}></i>
                </Link>
    }


    handleClick=()=>
    {
        console.log("editCoursePageUrl  :"+this.props.editCourseUrl);
        console.log("courseId           :"+this.props.id);
        console.log("redirectTO         :"+ this.props.editCourseUrl + this.props.id);

    }


}


