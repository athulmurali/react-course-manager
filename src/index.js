import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom'

import { Route } from 'react-router-dom';
import CoursesScreen from "./container/CoursesScreen";
import NavBar from "./components/Navbar";
import My404Component from "./components/My404Component";
import Home from "./components/Home";
import Login from "./Pages/Login";
import CourseEditor from "./container/CourseEditor";

import SortByButton from './components/SortByButton'




// const PageParam =( match) =><p>{match.params.id}</p>;

const Routes =()=>
    <BrowserRouter>
        <div>

            <NavBar/>

            <div className="container-fluid">
                <Switch>
                    <Route path="/" exact component={SortByButton}/>

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
ReactDOM.render(<Routes/>, document.getElementById('root')
);
