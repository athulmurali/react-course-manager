import React from 'react'

export default class DeleteCourseButton extends React.Component {
    deleteCourse=()=>{
        console.log("delete course button clicked");
        this.props.deleteCourse(this.props.id);
        return null;
    }
    render =()=>
    {
        return <button type="button" className="btn btn-danger btn-sm-block" onClick={this.deleteCourse}>Delete Course</button>
    }
}
