import React from "react";
import StaticCourseTitle from "./StaticCourseTitle";
import EditableCourseTitle from "./EditableCourseTitle";

export default class CourseTitle extends React.Component{

    constructor(props){

        super(props);
        this.state={
            inEditMode :false,
            title:"Abcdc"
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState(() => {
                return { title : this.getCourseTitle() };
            });
        }, 1000);
    }


    getCourseTitle=()=>{
        // add get course title api here
        return this.state.title;
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

        this.setState((state)=>{
            console.log("resetting state options");

            return {title:  newTitle }
        } )

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
                toggleEditMode={this.toggleEditMode}
                editTitle={this.editTitle}/>
        }
    }


}
