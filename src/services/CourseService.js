import {MEAN_BACKEND_URL} from "../constants";

let _singleton = Symbol();

const BASE_URL = "https://neu-course-manager.herokuapp.com"
console.log("BASE_URL  " + BASE_URL);

const COURSE_API_URL = BASE_URL +"/api/course";

export default
class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }
    findAllCourses() {
        return fetch(COURSE_API_URL)
            .then(function(response){
                return response.json();
            });
    }
    createCourse(course) {
        return fetch(COURSE_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}

    createCourseInMongo(courseId)
    {
        const url = MEAN_BACKEND_URL +"/api/course/" + courseId.toString()
        console.log(url);
        return fetch(url,{
            method: 'POST'
        }).then(function (response) {
            return response.json();

        })
    }


    deleteCourse(courseId) {
        return fetch(COURSE_API_URL + '/' + courseId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }


    deleteCourseInMongo(courseId) {
        return fetch(MEAN_BACKEND_URL +"/api/course/" + courseId.toString(),
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }

    getCourseById(courseId) {
        console.log("getting course info for id : "+ courseId);
        return fetch(COURSE_API_URL + '/' + courseId)
            .then(function(response){
                return response.json();
            });
    }



    updateCourse= (id,course) => {


        return fetch(COURSE_API_URL +"/"+ id,
            {
                body: JSON.stringify(course),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            }).then((response)=>{
            return response.json();
        })


    }
}
