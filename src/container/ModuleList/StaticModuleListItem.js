import React from 'react'

export default class StaticModuleListItem extends React.Component {

    constructor(props) {
        super(props);

    }

    handleDelete = () => {
        console.log("StaticListItem - handleDelete");
        console.log(this.props);
        this.props.deleteModule(this.props.index);
    }

    handleSelect = () => {
        console.log("Static Module Item : Module Id selected" + this.props.id);
        this.props.selectModule(this.props.id)
    }

    render = () =>
        <div className="nav-item" style={{'color': 'black', textDecoration: 'none', cursor: 'pointer'}}
             onClick={this.handleSelect}>
            {"Module - " + this.props.index + " " + this.props.title}

            <span className="float-right">

                <a href={"#"} style={{'color': 'inherit'}}>
                    <i className="px-2 fa fa-pencil" onClick={this.props.toggleEditMode}/>
                </a>

                <a href={"#"} style={{'color': 'inherit'}}>
                    <i className="px-2 fa fa-trash" onClick={this.handleDelete}/>
                    </a>

        </span>
        </div>
}


