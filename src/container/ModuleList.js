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
            modules: [
                {id: 1, title: "JQuery"},
                {id: 2, title: "React"},
                {id: 3, title: "Redux"},
                {id: 4, title: "Angular"},
                {id: 5, title: "Node"}
            ]


        }

    }
    renderListOfModules(){
    let modules = this.state.modules.map(function(module){
            return<ModuleListItem key={module.id}title={module.title}/>}

        );

    return modules

    }

    render(){
        return(
            <ul className="list-group list-group-flush">

                {this.renderListOfModules()}
            </ul>

        );



    }


}
