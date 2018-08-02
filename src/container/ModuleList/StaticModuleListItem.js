import React from 'react'

export default class StaticModuleListItem extends React.Component{

    constructor(props)
    {
        super(props);

    }

    handleDelete=()=>{
        console.log("StaticListItem - handleDelete");
        console.log(this.props);
        this.props.deleteModule(this.props.index);
    }

    handleSelect=()=>{
        console.log("Static Module Item : Module Id selected" + this.props.id);
        this.props.selectModule(this.props.id)
    }

    render =()=>
        <div>
            <a href="#" className="nav-item" style={{'color': 'black',textDecoration :'none'}}
               onClick={this.handleSelect}>
                {"Module - " + this.props.index + " "+this.props.title}
            </a>
            <span className="float-right">

        <a href={"#"} style={{'color': 'inherit'}} >
            <i className="px-2 fa fa-pencil"   onClick={this.props.toggleEditMode}></i>
        </a>

        <a href={"#"} style={{'color': 'inherit'}}>
            <i className="px-2 fa fa-trash" onClick={this.handleDelete}></i>
            </a>


        </span>
        </div>
}


