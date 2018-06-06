import React from "react";
import StaticCourseTitle from "./StaticCourseTitle";
import EditableCourseTitle from "./EditableCourseTitle";
import CourseService from "../../../services/CourseService";

export default class CourseTitle extends React.Component{

    constructor(props){

        super(props);
        this.courseService =  CourseService.instance
        this.state={
            inEditMode :false,
            title: this.props.title
        }
    }


    componentWillReceiveProps(nextProps)
    {
        if(nextProps.title !== this.props.title){
            this.setState({title :nextProps.title});
        }

    }



    toggleEditMode=()=>{
        console.log("toggling edit mode");
        this.setState(()=>{
            inEditMode: !!!this.state.inEditMode;
        })

        this.setState(
            { inEditMode : !!!this.state.inEditMode });


    }

    editTitle=(newTitle)=>{

        console.log("Title before edit");
        console.log(this.state.title);

        let course ={
            title: newTitle
        }

        this.courseService.updateCourse(this.props.courseId,course).then(
            (updatedCourse)=>{
                this.setState((state)=>{
                    console.log("Title : Updating title after server success");

                    return {title:  updatedCourse.title }
                } )
            }
        );



        console.log("Title after update ");
        console.log(this.state.title);

    }


    render =()=>{
        {
            if (!this.state.inEditMode)
                return <StaticCourseTitle
                    title = {this.state.title}
                    toggleEditMode={this.toggleEditMode}/>

            else return <EditableCourseTitle
                title = {this.state.title}
                toggleEditMode={this.toggleEditMode}
                editTitle={this.editTitle}/>
        }
    }


}
