import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Link from "react-router-dom/es/Link";


 class  EditableModuleListItem extends React.Component{
     constructor(props)
     {
         super(props);
         console.log("Printing all  state ");

         console.log(this.props);
         this.state ={
            title : ""
         }
         this.titleChanged = this.titleChanged.bind(this);

     }

     titleChanged=(event)=>{
         console.log(event.target.value);
         this.setState(
             { title : event.target.value});

     }


     render = (props)=>
         <div>
             <input type="text" value={this.state.title} onChange={this.titleChanged}/>
             <span className="float-right">
             <a href={"#"} style={{'color': 'inherit'}} onClick={this.editModule}>
            <i className="px-2 fa fa-check-circle fa-2x"  onClick={this.props.toggleEditMode} ></i>
            </a>
            </span>
         </div>
 }





export default EditableModuleListItem;
