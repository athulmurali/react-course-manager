import React from "react";

export default class AddCourseComponent extends  React.Component{

    constructor(props)
    {
        super(props);
    }


    render=()=>{
        return <div className="py-3 float-right">
            <button type="button" className="btn btn-success" onClick={this.props.createCourse}> + Course</button>

        </div>

    }





}
