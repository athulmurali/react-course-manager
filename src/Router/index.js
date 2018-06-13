import CourseEditor from "../container/CourseEditor";
import Login from "../Pages/Login";
import My404Component from "../components/My404Component";
import Home from "../components/Home";
import CoursesScreen from "../container/CoursesScreen";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import NavBar from "../components/Navbar";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import React from "react";

const Routes =()=>
    <BrowserRouter>
        <div>

            <NavBar/>

            <div className="container-fluid">
                <Switch>
                    <Route path="/" exact component={Home}/>

                    <Route path="/editCourse/:courseId"  component={CourseEditor}/>
                    <Route path="/home" exact component={Home}/>
                    {/*<Route path='/pageParam/:id' component={PageParam}/>*/}
                    <Route path='/courses' component={CoursesScreen}/>
                    <Route path='/Login' component={Login}/>

                    <Route path='*' exact={true} component={My404Component} />

                </Switch>


            </div>
        </div>
    </BrowserRouter>


export default Routes;
