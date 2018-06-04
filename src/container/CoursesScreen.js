import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import CourseCardsDeck from "./CourseList/CourseCardsDeck";



export default class CoursesScreen
    extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={
            inListView :false
        }
    }

    toggleView =()=>{
        this.setState(()=>{
            return {inListView: !this.state.inListView}})

        console.log(this.state.inListView)
    }

    render= () =>
        <div className="container-fluid">

            <div className="row py-2 justify-content-center">
                <div className="col-lg-6 col-sm-12">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..."/>
                                <span className="input-group-btn">
                                     <button className="btn btn-default btn-outline-secondary" type="button">
                                         Search
                                     </button>
                                </span>
                    </div>
                </div>
            </div>

            <div className="row py-3">
                <span className="col justify-content-end">
                    <span className="px-2">
                         <label >
                             <b>View</b>

                    </label>
                    </span>


                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-secondary">
                        <div className={!this.state.inListView && "active"}>

                    <input type="radio" name="options" id="option1"
                           onChange={this.toggleView}
                           checked={!this.state.inListView}/></div>
                      Cards
                  </label>
                  <label className="btn btn-secondary">
                    <input type="radio" name="options" id="option2"
                           onChange={this.toggleView}

                           checked={!!this.state.inListView}/>
                      List
                  </label>

                </div>
                </span>
            </div>
            <CourseCardsDeck viewType={"row"} inListView={this.state.inListView}/>
        </div>
}

