

import Link from "react-router-dom/es/Link";
import React from  'react'

export default class StaticLessonListItem extends React.Component{

    constructor(props)
    {
        super(props);

    }

    handleDelete=()=>{
        console.log("StaticListItem - handleDelete");
        console.log(this.props);
        this.props.deleteLesson(this.props.index);
    }

    render =()=>
        <div>
            <Link to='/courses' className="nav-item" style={{'color': 'black'}}>
                {"Lesson - " + this.props.index + " "+this.props.title}
            </Link>
            <span className="float-right">

        <a href={"#"} style={{'color': 'inherit'}} >
            <i className="px-2 fa fa-pencil"   onClick={this.props.toggleEditMode}></i>
        </a>

        <a href={"#"} style={{'color': 'inherit'}}>
            <i className="px-2 fa fa-trash" onClick={this.handleDelete}></i>
            </a>


        </span>
        </div>
}


