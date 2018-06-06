import React from 'react';
import LessonService from "../../services/LessonService";
import LessonListItem from "./LessonListItem";


export default class LessonList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

            lesson: { title: '' },
            lessons : []

        }

        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.lessonServiceInstance = LessonService.instance;


    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({lesson: {title: event.target.value, id : this.state.lessons.length +1}});

    }


    selectLesson=(lessonId)=>{
        alert("selected lessonId : " +  lessonId);
    }
    createLesson(){

        console.log("module id to create lesson under : " + this.props.moduleId);

        this.lessonServiceInstance.createLesson(this.props.courseId,this.props.moduleId, this.state.lesson).then(
            (createdLesson)=>{

                let  newLessonList = this.state.lessons
                newLessonList.push(createdLesson)

                this.setState(
                { lessons : newLessonList});
                this.setState({lesson: {title: ""}});}
        );


    }

    deleteLesson=(index)=>{
        index = index -1 ; // index starts from 1 in output
        console.log("index to remove : " + index);
        console.log("Lessons before delete");
        console.log(this.state.lessons);
        console.log("Removing lesson in server   : "+ this.state.lessons[index]);
        // this.lessonServiceInstance
        this.lessonServiceInstance.deleteLesson(this.state.lessons[index].id).then(
            (response) =>{
                if (response.status == 200)
                {
                    console.log("removing  ");
                    console.log(this.state.lessons[index]);
                    console.log("resetting state options -lesson");
                    let listAfterRemoval = this.state.lessons;
                    listAfterRemoval.splice(index,1);
                    console.log("lessonList after removal");
                    console.log(listAfterRemoval);

                    this.setState({lessons:  listAfterRemoval })


                }
                else{
                    alert("cannot delete ! Server issue");
                }
            })

    }

    editLesson=(index,title,  updated)=>{

        index --; //compensation for index start base from 1

        console.log("Lesson before edit");
        console.log(this.state.lessons);


        if (index > -1 && index  <  this.state.lessons.length) {
            let newLessons = this.state.lessons;
            newLessons[index].title = title;

            console.log("updating lesson : ");
            console.log("before update ");
            console.log(this.state.lessons[index]);

            let lesson = {
                title : title
            }


                newLessons= this.state.lessons
                newLessons[index].title = title

                this.lessonServiceInstance.updateLesson(newLessons[index].id,newLessons[index]).then((response)=>{
                    console.log("Lesson :updated in server ")
                    console.log(response);

                    this.setState((state)=>{
                        console.log("resetting state options");
                        return {lessons:  newLessons }
                    });
            } )


            console.log("after update ");
            console.log(this.state.lessons[index]);

        }

        console.log("Lesson after edit");
        console.log(this.state.lessons[index]);
    }


    componentDidMount(){
        console.log("Lesson List Mounted :....");
        // console.log(this.props.lessons);
        //
        this.setLessonList(this.props.lessons);
    }

    componentWillReceiveProps(nextProps)
    {
        console.log("Lesson list receiving new props:");
        console.log(nextProps.lessons);
        console.log(nextProps.moduleId);

        if (nextProps.lessons!= null){

            this.setLessonList(nextProps.lessons);
            this.setState({
                moduleId : nextProps.moduleId,
                courseId : nextProps.courseId,
                lessons : nextProps.lessons

            })

        }




    }
    setLessonList=(lessonList)=> {
        console.log("Getting lessons for the module Id : " + this.props.moduleId);
        console.log(lessonList);
        this.setState(()=> {return {lessons: lessonList}}
        )
    }



    returnListOfLessons =() => {
        let index =0;
       return  this.state.lessons.map((lesson) => {
            index++;
            return  <li  key ={index} className="nav-item"><a className="nav-link" href="#">
                <LessonListItem
                    key={lesson.id}
                    id={lesson.id}
                    index={index}
                    title={lesson.title}
                    inEditMode={false}
                    deleteLesson={this.deleteLesson}
                    editLesson = {this.editLesson}
                    selectLesson = {this.selectLesson}
                />

            </a></li>
        });
    }



    render=()=>{
        let index = 0;

        let lessons = this.returnListOfLessons()
        return  <ul className="nav nav-tabs px-2">
            <li className="nav-item nav-link active">

                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"
                       value={this.state.lesson.title}/>
                    <span className="float-right">
                         <a href={"#"} style={{'color': 'inherit'}} >

                            <i className="px-2 fa fa-plus-circle "  onClick={this.createLesson}></i>
                        </a>

                    </span>

            </li>


                {lessons}
        </ul>
    }


}
