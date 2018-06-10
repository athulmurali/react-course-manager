

import React from  'react'

export default class StaticTopicListItem extends React.Component{

    constructor(props)
    {
        super(props);

    }

    handleDelete=()=>{
        console.log("StaticListItem - handleDelete");
        console.log(this.props);
        this.props.deleteTopic(this.props.index);
    }
    handleSelect=()=>{
        console.log("StaticListItem - handleSelect");
        console.log(this.props);
        this.props.selectTopic(this.props.id);

    }

    render =()=>
        <div>
            <button className="btn-outline-secondary"
                    style={{ 'cursor' : 'pointer', color:'inherit'}}
            onClick={this.handleSelect} >
                {"Topic - " + this.props.index + " "+this.props.title}
            </button>
            <span className="float-right">

            <i className="px-2 fa fa-pencil"
               onClick={this.props.toggleEditMode}
               style={{'color': 'inherit'}}
            ></i>

            <i className="px-2 fa fa-trash"
               onClick={this.handleDelete}
               style={{'color': 'inherit'}}></i>

        </span>
        </div>
}


