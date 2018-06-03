import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Link from "react-router-dom/es/Link";


export default class ModuleListItem extends Component{
    render() {
        return (

                <li className ="list-group-item" >
                    <a href="#">
                        <Link to='/courses' className="nav-item" style={{'color': 'black'}}>
                            {"Module - " + this.props.id + " "+this.props.title}
                        </Link>
                    </a>



                    <span className="float-right" >
                        <a href={"#"} style={{'color': 'inherit'}} >
                            <i className="px-2 fa fa-pencil" ></i>

                        </a>

                          <a href={"#"} style={{'color': 'inherit'}}>
                              <i className="px-2 fa fa-trash"></i>

                            </a>


                    </span>
                </li>
        );
    }
}
