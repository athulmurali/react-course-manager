import React from 'react';
import LessonService from "../../services/LessonService";
import LessonListItem from "./LessonListItem";


export default class LessonList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            moduleId : 0,
            lesson: { title: '' },
            lessons : props.lessons
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

        console.log("module id to create lesson under : ");

        this.lessonServiceInstance.createLesson(this.props.moduleId, this.state.lesson).then(
            (createdLesson)=>{

                this.setState(
                { lessons : this.state.lessons.concat(createdLesson)});
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
                    this.setState((state)=>{
                        console.log("resetting state options");
                        var oldOptions = this.state.lessons;
                        let i=-1;
                        let     lessonsAfterDeletion = oldOptions.filter(function(lesson){
                            i++;
                            console.log(i);
                            return i != index });
                        return {lessons:  lessonsAfterDeletion }
                    } )

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

    renderListOfLessons = () => {
        let index = 0;
        console.log("Component LessonList : re- rendering ")
        console.log(this.state);
        let lessons = this.state.lessons.map((lesson) => {
                index++;
                return <LessonListItem
                    key={lesson.id}
                    id={lesson.id}
                    index={index}
                    title={lesson.title}
                    inEditMode={false}
                    deleteLesson={this.deleteLesson}
                    editLesson = {this.editLesson}
                    selectLesson = {this.selectLesson}
                />
            }
        )

        return lessons

    }

    render(){
        return(
            <div>
                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"
                       value={this.state.lesson.title}/>
                <button
                    className="btn btn-primary btn-block"
                    onClick={this.createLesson}>
                    <i className="fa fa-plus"></i>
                </button>

            <ul className="list-group">
                {this.renderListOfLessons()}
            </ul>
            </div>

        );

    }

    componentDidMount(){
        console.log("Lesson List Mounted :....");
        // console.log(this.props.lessons);
        //
        // this.setLessonList(this.props.lessons);
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.lessons !== this.props.lessons){
            this.setLessonList(nextProps.lessons);
        }

    }
    setLessonList=(lessonList)=> {
        console.log("Getting lessons for the module Id : " + this.props.moduleId);
        console.log(lessonList);
        this.setState(()=> {return {lessons: lessonList}}
        )
    }
}
