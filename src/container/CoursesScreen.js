import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseService from '../services/CourseService'
import Courses from "./CourseList/Courses";
import AddCourseComponent from "./CourseList/AddCourseComponent";

export default class CoursesScreen
    extends React.Component {

    constructor(props)
    {
        super(props);
        this.courseService = CourseService.instance;
        this.state={
            inListView :false,
            courses: [],
            loading : false

        }
    }

    componentDidMount(){
        // console.log("Courses screen mounted");
        this.getAllCoursesFromServer();
    }



    toggleView =()=>{
        this.setState(()=>{
            return {inListView: !this.state.inListView}})

        console.log(this.state.inListView)
    }



    getAllCoursesFromServer=()=>{
        this.setState({ loading : true});

        console.log("Getting course list from server ......");

        this.courseService.findAllCourses()
            .then((coursesReceived) => {

                this.setState({courses: coursesReceived, loading : false});
            })



    }

    createCourse=()=>{
        console.log("creating new row....");
        let course = {
            "title" : "new-course-untitled"
        }

        this.courseService.createCourse(course).then((response)=>{
            console.log("created new course");
            console.log(response.id);

            this.courseService.createCourseInMongo(response.id).
            then(response=>{
                console.log("created in mongo successfully")
                console.log(response)
            }).
            catch(err=>{
                console.log("Error in adding the new course to mongo")
                console.log(err);
            })


            this.getAllCoursesFromServer();


        });




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

            <AddCourseComponent
                getAllCoursesFromServer={this.getAllCoursesFromServer}
                createCourse = {this.createCourse}

            />

            <div className="row py-3">
                <span className="col justify-content-end">
                    <span className="px-2">
                         <label >
                             <b>View</b>

                    </label>
                    </span>


                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-secondary">
                        <div className={!this.state.inListView &&
                        "active"}>

                    <input type="radio" name="options" id="option1"
                           onChange={this.toggleView}
                           checked={!this.state.inListView}
                           courses ={this.state.courses}
                    /></div>
                      Cards
                  </label>
                  <label className="btn btn-secondary">
                    <input type="radio" name="options" id="option2"
                           onChange={this.toggleView}
                           courses ={this.state.courses}
                           checked={!!this.state.inListView}/>
                      List
                  </label>

                </div>
                </span>
            </div>
            { this.state.loading && <h1> Loading </h1> }
            <Courses viewType={"row"} inListView={this.state.inListView}
            courses ={this.state.courses}/>
        </div>
}

