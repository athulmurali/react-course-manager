import React,{Component} from 'react';



 class  EditableLessonListItem extends React.Component{
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

     handleEdit=()=>
     {
         console.log("handling update title & edit");
         console.log(this.props);
         this.props.editLesson(this.props.index, this.state.title,"date");
         this.props.toggleEditMode();

     }

     render = (props)=>
         <div>
             <input type="text" placeholder="Lesson Name" value={this.state.title} onChange={this.titleChanged}/>
             <span className="float-right">
                 <a href={"#"} style={{'color': 'inherit'}} >
                <i className="px-2 fa fa-check-circle fa-2x"  onClick={this.handleEdit}></i>
                </a>

                  <a href={"#"} style={{'color': 'inherit'}} >
                    <i className="px-2 fa fa-ban fa-2x"  onClick={this.props.toggleEditMode}></i>
                    </a>
            </span>
         </div>
 }





export default EditableLessonListItem;