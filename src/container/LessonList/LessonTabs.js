import React from "react";
import TopicPills from "../TopicPills";

export default class LessonTabs
    extends React.Component {
    constructor(props){
        super(props);
        this.state={
            lessons:
                [
                    {
                        title : "Lesson 1",
                        id: 101
                    },
                    {
                        title : "Lesson 2",
                        id: 202
                    },]
        }
    }
    render() { return(
        <div className="container">

                {this.returnListOfLessons()}


            <div className="container-fluid py-2    ">
                <TopicPills/>

                <div className="container">
                    <h3 className="row py-4">Content for the current tab-topic will be placed here </h3>

                </div>
            </div>
        </div>
    );
        }

    returnListOfLessons=()=>{
        let lessons = this.state.lessons.map((lesson) => {
           return  <li  key ={lesson.id} className="nav-item"><a className="nav-link" href="#">{lesson.title}</a></li>
        });

        return  <ul className="nav nav-tabs px-2">
                     {lessons}
                    <li className="nav-item"><a className="nav-link active" href="#"><b>+</b></a></li>
                 </ul>
    }

}




