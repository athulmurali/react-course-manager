import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


export default class LessonList extends React.Component{

//     [
//         {id: 101, title: "JQuery"},
// {id: 201, title: "React"},
// {id: 301, title: "Redux"},
// {id: 401, title: "Angular"},
// {id: 501, title: "Node"}
// ]
    constructor(props) {
        super(props);
        this.state = {
            courseId : 0,
            module: { title: '' },
            modules : props.modules
        }

        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.moduleServiceInstance = LessonService.instance;
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value, id : this.state.modules.length +1}});

    }

    createLesson(){

        console.log("course id to create module under : ");

        this.moduleServiceInstance.createLesson(this.props.courseId, this.state.module).then(
            (createdLesson)=>{

                this.setState(
                { modules : this.state.modules.concat(createdLesson)});
                this.setState({module: {title: ""}});}
        );


    }

    deleteLesson=(index)=>{
        index = index -1 ; // index starts from 1 in output
        console.log("index to remove : " + index);
        console.log("Lessons before delete");
        console.log(this.state.modules);
        console.log("Removing module in server   : "+ this.state.modules[index]);
        // this.moduleServiceInstance
        this.moduleServiceInstance.deleteLesson(this.state.modules[index].id).then(
            (response) =>{
                if (response.status == 200)
                {
                    this.setState((state)=>{
                        console.log("resetting state options");
                        var oldOptions = this.state.modules;
                        let i=-1;
                        let     modulesAfterDeletion = oldOptions.filter(function(module){
                            i++;
                            console.log(i);
                            return i != index });
                        return {modules:  modulesAfterDeletion }
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
        console.log(this.state.modules);


        if (index > -1 && index  <  this.state.modules.length) {
            let newLessons = this.state.modules;
            newLessons[index].title = title;

            console.log("updating module : ");
            console.log("before update ");
            console.log(this.state.modules[index]);

            let module = {
                title : title
            }


                newLessons= this.state.modules
                newLessons[index].title = title

                this.moduleServiceInstance.updateLesson(newLessons[index].id,newLessons[index]).then((response)=>{
                    console.log("Lesson :updated in server ")
                    console.log(response);

                    this.setState((state)=>{
                        console.log("resetting state options");
                        return {modules:  newLessons }
                    });
            } )


            console.log("after update ");
            console.log(this.state.modules[index]);

        }

        console.log("Lesson after edit");
        console.log(this.state.modules[index]);
    }

    renderListOfLessons = () => {
        let index = 0;
        console.log("Component LessonList : re- rendering ")
        console.log(this.state);
        let modules = this.state.modules.map((module) => {
                index++;
                return <LessonListItem
                    key={module.id}
                    id={module.id}
                    index={index}
                    title={module.title}
                    inEditMode={false}
                    deleteLesson={this.deleteLesson}
                    editLesson = {this.editLesson} />
            }
        )

        return modules

    }

    render(){
        return(
            <div>
                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"
                       value={this.state.module.title}/>
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
        // console.log(this.props.modules);
        //
        // this.setLessonList(this.props.modules);
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.modules !== this.props.modules){
            this.setLessonList(nextProps.modules);
        }

    }
    setLessonList=(moduleList)=> {
        console.log("Getting modules for the course Id : " + this.props.courseId);
        console.log(moduleList);
        this.setState(()=> {return {modules: moduleList}}
        )
    }
}
