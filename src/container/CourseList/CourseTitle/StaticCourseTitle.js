import React from "react";

export default class StaticCourseTitle extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title : this.props.title

        }
    }
    render =()=><div className="row py-1 justify-content-center align-items-center">
        <h3>{this.state.title} </h3>
        <a href={"#"} style={{'color': 'inherit'}} >
            <i className="px-2 fa fa-pencil"   onClick={this.props.toggleEditMode}></i>
        </a>
    </div>

}

