

import Link from "react-router-dom/es/Link";
import React from  'react'

export default class StaticModuleListItem extends React.Component{

    render =()=>
        <div>

                <Link to='/courses' className="nav-item" style={{'color': 'black'}}>
                    {"Module - " + this.props.id + " "+this.props.title}
                </Link>

            <span className="float-right">

        <a href={"#"} style={{'color': 'inherit'}} >
            <i className="px-2 fa fa-pencil"   onClick={this.props.toggleEditMode}></i>
        </a>

        <a href={"#"} style={{'color': 'inherit'}}>
            <i className="px-2 fa fa-trash"></i>
            </a>


        </span>
        </div>
}


