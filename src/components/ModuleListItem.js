import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


export default class ModuleListItem extends Component{
    render() {
        return (

                <li className="list-group-item">{"Module - " + this.props.id + " "+this.props.title}
                    <span className="float-right">

                        <i className="fa fa-trash"></i>
                        <i className="fa fa-pencil"></i>
                    </span>
                </li>
        );
    }
}
