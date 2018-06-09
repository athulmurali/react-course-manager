import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import  ModuleListItem from './ModuleListItem';
import ModuleService from "../../services/ModuleService";

export default class ModuleList extends React.Component{

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
            modules : []
        }

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.moduleServiceInstance = ModuleService.instance;
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});

    }

    createModule(){

        console.log("course id to create module under : ");
        console.log(this.state.module);

        this.moduleServiceInstance.createModule(this.props.courseId, this.state.module).then(
            (createdModule)=>{


                let newModulesArray = this.state.modules;
                newModulesArray.push(createdModule)
                this.setState(
                { modules : newModulesArray      },
                    ()=> {          this.setState({module: {title: ""}})

                    }
                );
            }
        );


    }

    resetTitle=()=>{
        this.setState({module: {title: ""}});

    }

    deleteModule=(index)=>{
        index = index -1 ; // index starts from 1 in output
        console.log("index to remove : " + index);
        console.log("Modules before delete");
        console.log(this.state.modules);
        console.log("Removing module in server   : "+ this.state.modules[index]);
        // this.moduleServiceInstance
        this.moduleServiceInstance.deleteModule(this.state.modules[index].id).then(
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

    editModule=(index,title,  updated)=>{

        index --; //compensation for index start base from 1

        console.log("Module before edit");
        console.log(this.state.modules);


        if (index > -1 && index  <  this.state.modules.length) {
            let newModules = this.state.modules;
            newModules[index].title = title;

            console.log("updating module : ");
            console.log("before update ");
            console.log(this.state.modules[index]);

            let module = {
                title : title
            }


                newModules= this.state.modules
                newModules[index].title = title

                this.moduleServiceInstance.updateModule(newModules[index].id,newModules[index]).then((response)=>{
                    console.log("Module :updated in server ")
                    console.log(response);

                    this.setState((state)=>{
                        console.log("resetting state options");
                        return {modules:  newModules }
                    });
            } )


            console.log("after update ");
            console.log(this.state.modules[index]);

        }

        console.log("Module after edit");
        console.log(this.state.modules[index]);
    }

    renderListOfModules = () => {
        let index = 0;
        console.log("Component ModuleList : re- rendering ")
        console.log(this.state);
        let modules = this.state.modules.map((module) => {
                index++;
                return <ModuleListItem
                    key={module.id}
                    id={module.id}
                    index={index}
                    title={module.title}
                    inEditMode={false}
                    deleteModule={this.deleteModule}
                    editModule = {this.editModule}
                    selectModule ={this.props.selectModule}
                    selectedModuleId ={this.props.selectedModuleId}
                />
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
                    onClick={this.createModule}>
                    <i className="fa fa-plus"></i>
                </button>

            <ul className="list-group">
                {this.renderListOfModules()}
            </ul>
            </div>

        );

    }

    componentDidMount(){
        console.log("Module List Mounted :....");
        // console.log(this.props.modules);
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.modules !== this.props.modules){
            this.setModuleList(nextProps.modules);
        }

    }
    setModuleList=(moduleList)=> {
        console.log("Getting modules for the course Id : " + this.props.courseId);
        console.log(moduleList);
        this.setState(()=> {return {modules: moduleList}}
        )
    }
}
