

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
    handleSelect=()=>{

        console.log("StaticListItem - handleSelect");
        console.log(this.props);
        this.props.selectLesson(this.props.id);

    }

    render =()=>
        <div>
            <button className="btn-outline-secondary" style={{'color': 'black', 'cursor' : 'pointer'}}
            onClick={this.handleSelect} >
                {"Lesson - " + this.props.index + " "+this.props.title}
            </button>
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


