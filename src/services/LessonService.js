let _singleton = Symbol();


const BASE_URL = "https://neu-course-manager.herokuapp.com"
console.log("BASE_URL  " + BASE_URL);


const LESSON_API_URL =
    BASE_URL + "/api/course/CID/module/MID/lesson"
const LESSON_API_URL_LID =
       BASE_URL+ "/api/lesson/LID";

export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }
    createLesson(courseId, moduleId, lesson) {
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId), {
            body: JSON.stringify(lesson),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        });
    }
    deleteLesson(lessonId) {
        return fetch(LESSON_API_URL_LID.replace('LID', lessonId), {
            method: 'DELETE'
        });
    }

    findAllLessons() {

    }
    findAllLessonsForModule(courseId, moduleId) {
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId))
            .then(function (response) {
                if(response.status === 500) {
                    return null;
                } else {
                    return response.json();
                }
            });
    }

    updateLesson= (id,lesson) => {

        let  updateModuleURL = BASE_URL+"/api/lesson/" + id;
        return fetch(updateModuleURL,
            {
                body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            }).then((response)=>{
            return response.json();
        })


    }

}
