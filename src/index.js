import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from "./container/CourseManager";
import Routing from './examples/Routing';
import { BrowserRouter } from 'react-router-dom'
import App from './examples/App'

import { Route } from 'react-router-dom';
import CoursesScreen from "./container/CoursesScreen";

// ReactDOM.render(
//     <div className="container-fluid">
//         <CourseManager/>,
//     </div>,
//
//     document.getElementById('root')
// );


const Home = () => {return ( <p>This is home! And I love it</p>);}

const PageParam =( {match}) =><p>{match.params.id}</p>;

const Routes =()=>
    <BrowserRouter>
        <div>
            <App/>
            <div className="container-fluid">

            <Route path="/app" exact component={CourseManager}/>
            <Route path="/home" exact component={Home}/>
            <Route path='/pageParam/:id' component={PageParam}/>
            <Route path='/courses' component={CoursesScreen}/>
            </div>
        </div>
    </BrowserRouter>
ReactDOM.render(<Routes/>, document.getElementById('root')
);
