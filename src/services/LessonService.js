

const BASE_URL = "https://neu-course-manager.herokuapp.com"
console.log("BASE_URL  " + BASE_URL);


const MODULE_API_URL =
    BASE_URL+ "/api/course/CID/module";

let _singleton = Symbol();
export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }



    createLesson(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); }
        )
    }



    findAllLessonsForCourse=(CID)=>
    {

        URL = MODULE_API_URL.replace("CID",CID)

        return fetch(URL)
            .then(function(response)
            {
                return response.json();
            })
    }

    updateLesson= (id,module) => {

        let  updateLessonURL = BASE_URL+"/api/module/" + id;
        return fetch(updateLessonURL,
            {
                body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            }).then((response)=>{
            return response.json();
        })


    }


    deleteLesson =(id) =>
    {
        let  deleteLessonURL = BASE_URL+"/api/module/" + id;

        return fetch(deleteLessonURL ,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }
}
