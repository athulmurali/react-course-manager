import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import  ModuleListItem from './ModuleListItem';

export default class ModuleList extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            module: { title: '' },
            modules: [
                {id: 101, title: "JQuery"},
                {id: 201, title: "React"},
                {id: 301, title: "Redux"},
                {id: 401, title: "Angular"},
                {id: 501, title: "Node"}
            ]
        }

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value, id : this.state.modules.length +1}});

    }

    createModule(){
        this.setState(
            { modules : this.state.modules.concat(this.state.module)});
        this.setState({module: {title: ""}});


    }

    deleteModule=(index)=>{
        index = index -1 ; // index starts from 1 in output
        console.log("index to remove : " + index);
        console.log("Modules before delete");
        console.log(this.state.modules);
        console.log("trying to remove option  : "+ this.state.modules[index]);
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

    editModule=(index,title,  updated)=>{

        index --; //compensation for index start base from 1
        console.log("Edit module ");
        console.log("index          : " + index);
        console.log("title          : " + title);
        console.log("updated        : " + updated);


        console.log("Module before edit");
        console.log(this.state.modules);


        if (index > -1 && index  <  this.state.modules.length) {
            let newModules = this.state.modules;
            newModules[index].title = title;



            this.setState((state)=>{
                console.log("resetting state options");

                return {modules:  newModules }
            } )
        }


        console.log("Module after edit");
        console.log(this.state.modules[index]);


        // to api :

        //courseid
        //title
        // updatedAt:



    }


    renderListOfModules = () => {
        let index = 0;
        console.log("re- rendering ")
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
                    editModule = {this.editModule} />
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


}
