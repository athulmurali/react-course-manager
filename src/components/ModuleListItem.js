import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import EditableModuleListItem from "./EditableModuleListItem";
import StaticModuleListItem from "./StaticModuleListItem";




export default class ModuleListItem extends Component{
    constructor(props){
        super(props);
        this.state =
            {
                inEditMode : this.props.inEditMode

            }

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.dele = this.toggleEditMode.bind(this);

    }

    toggleEditMode(){
        console.log("toggling edit mode");
        this.setState(()=>{
            inEditMode: !!!this.state.inEditMode;
        })

        this.setState(
            { inEditMode : !!!this.state.inEditMode });


}

    editModule(){

        console.log("inside edit");
        console.log(this.props);
        console.log("edit by id : " + this.props.id );

    }
    render() {
        console.log("printing edit state");
        console.log(this.state);
        console.log(this.props.deleteModule);



        return (

                <li className ="list-group-item" >

                    {!!this.state.inEditMode &&
                    <EditableModuleListItem
                        title={this.props.title}
                        toggleEditMode={ this.toggleEditMode}
                        deleteModule = {this.props.deleteModule}/>}

                    {!!!this.state.inEditMode &&
                    <StaticModuleListItem
                        id      ={this.props.id }
                        title   ={this.props.title}
                        toggleEditMode={ this.toggleEditMode}/> }
                </li>
        );
    }
}
