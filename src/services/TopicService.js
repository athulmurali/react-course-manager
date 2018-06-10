let _singleton = Symbol();


const BASE_URL = "https://neu-course-manager.herokuapp.com"
console.log("BASE_URL  " + BASE_URL);


const TOPIC_API_URL =
    BASE_URL + "/api/course/CID/module/MID/lesson/LID/topic"
const TOPIC_API_URL_TID =
       BASE_URL+ "/api/topic/TID";

export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }
    createTopic(courseId, moduleId,lessonId,topic) {
        return fetch(TOPIC_API_URL
            .replace('CID', courseId)
            .replace('MID', moduleId)
            .replace('LID', lessonId),
            {
            body: JSON.stringify(topic),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        });
    }
    deleteTopic(topicId) {
        return fetch(TOPIC_API_URL_TID.replace('TID', topicId), {
            method: 'DELETE'
        });
    }



    findAllTopicsForLesson=(courseId, moduleId,lessonId)=> {
        console.log("Course Id : " + courseId);
        console.log("Module Id : " + moduleId);
        console.log("Lesson Id : " + lessonId);
        return fetch(TOPIC_API_URL
            .replace('CID', courseId)
            .replace('MID', moduleId)
            .replace('LID', lessonId))
            .then(function (response) {
                if(response.status === 500) {
                    return null;
                } else {
                    return response.json();
                }
            })
    }

    updateTopic= (id,topic) => {

        let  updateTopicURL = TOPIC_API_URL_TID.replace("TID", id);
        return fetch(updateTopicURL,
            {
                body: JSON.stringify(topic),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            }).then((response)=>{
            return response.json();
        })


    }

}
