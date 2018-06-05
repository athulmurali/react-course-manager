import React from "react";
import Link from "react-router-dom/es/Link";
import EditCourseButton from "./EditCourseButton";

export default class CourseRow extends React.Component{

    constructor(props){
        super(props);
        console.log("Course row props");

        console.log(this.props);

    }


    render=()=>{
        return <tr>
            <th scope="row">
                {this.props.index}

            </th>
            <td>
                <Link to= {this.props.coursePageUrl}
                      className="nav-item nav-link  active">
                    {this.props.title}
                    <span className="float-right">
                        <EditCourseButton id={this.props.id} editCourseUrl={"/editCourse/:"} />
                    </span>
                </Link>

                </td>
            <td>{this.props.createdBy}</td>
            <td>{this.props.createdAt}</td>

            <td>{this.props.updatedAt}</td>
        </tr>

    }
}

