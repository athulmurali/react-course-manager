import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import  ModuleListItem from '../components/ModuleListItem';

export default class ModuleList extends React.Component{
// <ul className="list-group list-group-flush">
// <ModuleListItem title="Module 1 - jQuery"/>
// <ModuleListItem title="Module 2 - React" />
// <ModuleListItem title="Module 3 - Redux" />
// <ModuleListItem title="Module 4 - Angular" />
// <ModuleListItem title="Module 5 - NodeJs" />
// </ul>

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




    renderListOfModules(){
    let modules = this.state.modules.map(function(module){
            return<ModuleListItem key={module.id} id={module.id}title={module.title}/>}

        );

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
