import React from "react";

export default class StaticCourseTitle extends React.Component{

    render =()=><div className="row py-1 justify-content-center align-items-center">
        <h3>{this.props.title} </h3>
        <a href={"#"} style={{'color': 'inherit'}} >
            <i className="px-2 fa fa-pencil"   onClick={this.props.toggleEditMode}></i>
        </a>
    </div>

}

