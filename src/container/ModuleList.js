import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import  ModuleListItem from '../components/ModuleListItem';

export default class ModuleList extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            module: { title: '' },
            modules: [
                {id: 1, title: "JQuery"},
                {id: 2, title: "React"},
                {id: 3, title: "Redux"},
                {id: 4, title: "Angular"},
                {id: 5, title: "Node"}
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
            console.log("index to remove : " + index);
            if (index > -1) {
                this.setState(
                    { modules : this.state.modules.splice(index, 1) });
            }

            // /api/module/61
            // module_id actual
        }



    editModule(index,title,  updated){
        console.log("Edit module ");
        console.log("index          : " + index);
        console.log("title          : " + title);
        console.log("updated        : " + updated);


        if (index > -1 && index  <  this.state.modules.length) {
            this.setState(
                { modules : this.state.modules.splice(index, 1) });
        }


        // to api :

        //courseid
        //title
        // updatedAt:



    }


    renderListOfModules(){
        let index = -1;


        let modules = this.state.modules.map(function(module) {
                index++;
                return <ModuleListItem
                    key={module.id}
                    id={index}
                    index={index}
                    title={module.title}
                    inEditMode={false}
                    deleteModule={this.deleteModule}/>
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
